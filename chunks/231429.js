n.d(t, { c: () => N }), n(388685), n(539854);
var r = n(54381),
    i = n(473749),
    a = n(442837),
    o = n(481060),
    s = n(172109),
    l = n(956512),
    c = n(789407),
    u = n(314897),
    d = n(831506),
    f = n(293273),
    _ = n(158776),
    p = n(885110),
    h = n(594174),
    m = n(758371),
    g = n(150248),
    E = n(984211),
    b = n(884338),
    y = n(493387),
    O = n(579543),
    v = n(981631),
    I = n(616922),
    T = n(837262);
let S = 8;
function A(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: s } = e,
        l = Math.max(n, t.length),
        c = (0, m.yy)({
            maxPartySize: i,
            partySize: l,
            activityActionType: s,
        }),
        u = [...t];
    for (; u.length < n && u.length < S; ) u.push(b.ag);
    for (; u.length < i && u.length < S; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: T.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(b.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, S) : S,
                    size: b.u8.SIZE_16,
                    dimEmptyUsers: !0,
                }),
            (0, r.jsx)(o.Text, {
                variant: "text-xs/medium",
                color: "none",
                children: c,
            }),
        ],
    });
}
function C(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === v.mFx.STREAM_REQUEST;
}
function N(e) {
    var t, n;
    let { analyticsLocations: o, app: m, channel: T, message: S, hideParty: N, onView: R } = e,
        P = (0, s.O)(m),
        D = (0, a.e7)([u.default], () => u.default.getId()),
        w = (0, a.e7)([_.Z], () => {
            if (null == S.application) return _.Z.findActivity(S.author.id, (e) => e.type === v.IIU.LISTENING);
            {
                let e = S.author.id;
                return (
                    (0, g.H)(S) && (e = e === D && T.isPrivate() ? T.getRecipientId() : D),
                    _.Z.getApplicationActivity(e, S.application.id)
                );
            }
        }, [S, T, D]),
        L = (0, a.e7)([f.Z, p.Z], () => {
            var e;
            return null != (e = f.Z.getApplicationActivity(P.id)) ? e : p.Z.getApplicationActivity(P.id, !0);
        }, [P.id]),
        x = (0, a.Wu)([d.Z], () => {
            var e;
            return null == w || null == w.party ? [] : Array.from(null != (e = d.Z.getParty(w.party.id)) ? e : []);
        }, [w]),
        { partySize: M, maxPartySize: k } = (0, E._)(w),
        j = i.useMemo(
            () =>
                x.map((e) => {
                    let t = h.default.getUser(e);
                    return null != t ? t : b.ag;
                }),
            [x],
        ),
        U = i.useMemo(() => {
            var e;
            return (0, r.jsx)(A, {
                partyMembers: j,
                partySize: M,
                maxPartySize: k,
                guildId: T.guild_id,
                activityActionType: null == (e = S.activity) ? void 0 : e.type,
            });
        }, [j, M, k, T.guild_id, null == (t = S.activity) ? void 0 : t.type]);
    return (0, I.Ps)(null == w || null == (n = w.party) ? void 0 : n.id) || P.id === c.r9.id
        ? (0, r.jsx)(O.Z, {
              application: P,
              currentUserPresenceActivity: L,
              hideParty: N,
              message: S,
              onView: R,
              partyStatusElement: U,
              presenceActivity: w,
              guildId: T.guild_id,
          })
        : C(S)
          ? (0, r.jsx)(l.Z, {
                analyticsLocations: o,
                application: P,
                channel: T,
                currentUserId: D,
                message: S,
            })
          : (0, r.jsx)(y.Z, {
                analyticsLocations: o,
                application: P,
                channel: T,
                currentUserId: D,
                currentUserPresenceActivity: L,
                hideParty: N,
                message: S,
                onView: R,
                partyStatusElement: U,
                presenceActivity: w,
            });
}
