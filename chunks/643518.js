t.d(n, { Z: () => I }), t(539854);
var o = t(442837),
    c = t(468363),
    i = t(158776),
    a = t(885110),
    r = t(585305),
    d = t(369566),
    l = t(806729),
    s = t(29899),
    u = t(708108),
    f = t(146078),
    _ = t(228168),
    p = t(981631),
    m = t(388032);
function I(e) {
    let { user: n, currentUser: t, guildId: I, initialSubsection: h } = e,
        { voiceActivityStatusEnabled: b } = (0, c.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: x, recent: y, stream: g, outbox: v } = (0, d.Z)(n.id),
        { voiceChannel: Z, voiceActivity: j } = (0, s.Z)({
            userId: n.id,
            guildId: I
        }),
        A = n.id === (null == t ? void 0 : t.id),
        N = (0, o.e7)([a.Z, i.Z], () => {
            let e = A ? a.Z.getStatus() : i.Z.getStatus(n.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        O = null != g || x.length > 0,
        C = y.length > 0,
        { mutualFriendsCount: P, mutualGuilds: T } = (0, l.Z)(n),
        w = null == T ? void 0 : T.length,
        S = (0, r.Z)(n),
        E = [
            {
                section: _.oh.USER_INFO,
                text: m.intl.string(m.t.jGoPJS)
            }
        ];
    return (
        !N && (O || (b && null == g && null == j && null != Z))
            ? E.push({
                  section: _.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              })
            : (C || (null == v && h === _.Tb.RECENT_ACTIVITY)) &&
              E.push({
                  section: _.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              }),
        !A &&
            S &&
            (E.push({
                section: _.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(P)
            }),
            E.push({
                section: _.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(w)
            })),
        E
    );
}
