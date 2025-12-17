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
    p = n(158776),
    _ = n(885110),
    m = n(594174),
    h = n(758371),
    g = n(150248),
    E = n(984211),
    b = n(884338),
    y = n(493387),
    O = n(579543),
    v = n(981631),
    S = n(616922),
    I = n(927997);
let T = 8;
function C(e) {
    let { partyMembers: t, partySize: n, maxPartySize: i, guildId: a, activityActionType: s } = e,
        l = Math.max(n, t.length),
        c = (0, h.yy)({
            maxPartySize: i,
            partySize: l,
            activityActionType: s,
        }),
        u = [...t];
    for (; u.length < n && u.length < T; ) u.push(b.ag);
    for (; u.length < i && u.length < T; ) u.push(null);
    return (0, r.jsxs)("div", {
        className: I.partyStatusWrapper,
        children: [
            u.length > 0 &&
                (0, r.jsx)(b.ZP, {
                    guildId: a,
                    users: u,
                    max: i > 0 ? Math.min(i, T) : T,
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
function A(e) {
    var t;
    return (null == (t = e.activity) ? void 0 : t.type) === v.mFx.STREAM_REQUEST;
}
function N(e) {
    var t, n;
    let { analyticsLocations: o, app: h, channel: I, message: T, hideParty: N, onView: P } = e,
        R = (0, s.O)(h),
        w = (0, a.e7)([u.default], () => u.default.getId()),
        D = (0, a.e7)([p.Z], () => {
            if (null == T.application) return p.Z.findActivity(T.author.id, (e) => e.type === v.IIU.LISTENING);
            {
                let e = T.author.id;
                return (
                    (0, g.H)(T) && (e = e === w && I.isPrivate() ? I.getRecipientId() : w),
                    p.Z.getApplicationActivity(e, T.application.id)
                );
            }
        }, [T, I, w]),
        x = (0, a.e7)([f.Z, _.Z], () => {
            var e;
            return null != (e = f.Z.getApplicationActivity(R.id)) ? e : _.Z.getApplicationActivity(R.id, !0);
        }, [R.id]),
        L = (0, a.Wu)([d.Z], () => {
            var e;
            return null == D || null == D.party ? [] : Array.from(null != (e = d.Z.getParty(D.party.id)) ? e : []);
        }, [D]),
        { partySize: j, maxPartySize: M } = (0, E._)(D),
        k = i.useMemo(
            () =>
                L.map((e) => {
                    let t = m.default.getUser(e);
                    return null != t ? t : b.ag;
                }),
            [L],
        ),
        U = i.useMemo(() => {
            var e;
            return (0, r.jsx)(C, {
                partyMembers: k,
                partySize: j,
                maxPartySize: M,
                guildId: I.guild_id,
                activityActionType: null == (e = T.activity) ? void 0 : e.type,
            });
        }, [k, j, M, I.guild_id, null == (t = T.activity) ? void 0 : t.type]);
    return (0, S.Ps)(null == D || null == (n = D.party) ? void 0 : n.id) || R.id === c.r9.id
        ? (0, r.jsx)(O.Z, {
              application: R,
              currentUserPresenceActivity: x,
              hideParty: N,
              message: T,
              onView: P,
              partyStatusElement: U,
              presenceActivity: D,
              guildId: I.guild_id,
          })
        : A(T)
          ? (0, r.jsx)(l.Z, {
                analyticsLocations: o,
                application: R,
                channel: I,
                currentUserId: w,
                message: T,
            })
          : (0, r.jsx)(y.Z, {
                analyticsLocations: o,
                application: R,
                channel: I,
                currentUserId: w,
                currentUserPresenceActivity: x,
                hideParty: N,
                message: T,
                onView: P,
                partyStatusElement: U,
                presenceActivity: D,
            });
}
