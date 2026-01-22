n.d(t, {
    P: () => N,
}),
    n(896048),
    n(321073);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(138175),
    l = n(99072),
    c = n(443795),
    u = n(961350),
    d = n(629016),
    f = n(375492),
    p = n(290863),
    _ = n(461213),
    h = n(287809),
    m = n(456060),
    g = n(850670),
    E = n(125017),
    b = n(104171),
    y = n(13403),
    O = n(536189),
    A = n(652215),
    v = n(272984),
    S = n(609653);
let I = 8;

function T(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: o } = e,
        l = Math.max(n, t.length),
        c = (0, m.SJ)({
            maxPartySize: i,
            partySize: l,
            activityActionType: o,
        }),
        u = [...t];
    for (; u.length < n && u.length < I; ) u.push(b.mt);
    for (; u.length < i && u.length < I; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: S.UF,
        children: [
            u.length > 0 &&
                (0, r.jsx)(b.Ay, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, I) : I,
                    size: b.DN.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(s.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: c,
            }),
        ],
    });
}

function C(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === A.xL.STREAM_REQUEST;
}

function N(e) {
    var t, n;
    let { analyticsLocations: s, app: m, channel: S, message: I, hideParty: N, onView: R } = e,
        w = (0, o.b)(m),
        P = (0, a.bG)([u.default], () => u.default.getId()),
        D = (0, a.bG)([p.A], () => {
            if (null == I.application) return p.A.findActivity(I.author.id, (e) => e.type === A.$pd.LISTENING);
            {
                let e = I.author.id;
                return (
                    (0, g.v)(I) && (e = e === P && S.isPrivate() ? S.getRecipientId() : P),
                    p.A.getApplicationActivity(e, I.application.id)
                );
            }
        }, [I, S, P]),
        x = (0, a.bG)([f.A, _.A], () => {
            var e;
            return null != (e = f.A.getApplicationActivity(w.id)) ? e : _.A.getApplicationActivity(w.id, !0);
        }, [w.id]),
        L = (0, a.yK)([d.A], () => {
            var e;
            return null == D || null == D.party ? [] : Array.from(null != (e = d.A.getParty(D.party.id)) ? e : []);
        }, [D]),
        { partySize: j, maxPartySize: M } = (0, E._)(D),
        k = i.useMemo(
            () =>
                L.map((e) => {
                    let t = h.default.getUser(e);
                    return null != t ? t : b.mt;
                }),
            [L],
        ),
        U = i.useMemo(() => {
            var e;
            return (0, r.jsx)(T, {
                partyMembers: k,
                partySize: j,
                maxPartySize: M,
                guildId: S.guild_id,
                activityActionType: null == (e = I.activity) ? void 0 : e.type,
            });
        }, [k, j, M, S.guild_id, null == (t = I.activity) ? void 0 : t.type]);
    return (0, v.pH)(null == D || null == (n = D.party) ? void 0 : n.id) || w.id === c.HT.id
        ? (0, r.jsx)(O.A, {
              application: w,
              currentUserPresenceActivity: x,
              hideParty: N,
              message: I,
              onView: R,
              partyStatusElement: U,
              presenceActivity: D,
              guildId: S.guild_id,
          })
        : C(I)
          ? (0, r.jsx)(l.A, {
                analyticsLocations: s,
                application: w,
                channel: S,
                currentUserId: P,
                message: I,
            })
          : (0, r.jsx)(y.A, {
                analyticsLocations: s,
                application: w,
                channel: S,
                currentUserId: P,
                currentUserPresenceActivity: x,
                hideParty: N,
                message: I,
                onView: R,
                partyStatusElement: U,
                presenceActivity: D,
            });
}
