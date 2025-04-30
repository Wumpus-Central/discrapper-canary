t.d(n, { Z: () => m }), t(539854);
var o = t(442837),
    c = t(468363),
    i = t(158776),
    r = t(885110),
    a = t(585305),
    d = t(369566),
    s = t(806729),
    l = t(29899),
    u = t(708108),
    f = t(146078),
    _ = t(228168),
    p = t(981631),
    b = t(388032);
function m(e) {
    let { user: n, currentUser: t, guildId: m, initialSubsection: I } = e,
        { voiceActivityStatusEnabled: y } = (0, c.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: h, recent: x, stream: g, outbox: j } = (0, d.Z)(n.id),
        { voiceChannel: O, voiceActivity: v } = (0, l.Z)({
            userId: n.id,
            guildId: m
        }),
        A = n.id === (null == t ? void 0 : t.id),
        Z = (0, o.e7)([r.Z, i.Z], () => {
            let e = A ? r.Z.getStatus() : i.Z.getStatus(n.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        N = null != g || h.length > 0,
        P = x.length > 0,
        { mutualFriendsCount: T, mutualGuilds: C } = (0, s.Z)(n),
        w = null == C ? void 0 : C.length,
        S = (0, a.Z)(n),
        E = [
            {
                section: _.oh.USER_INFO,
                text: b.intl.string(b.t.jGoPJS)
            }
        ];
    return (
        !Z && (N || (y && null == g && null == v && null != O))
            ? E.push({
                  section: _.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              })
            : (P || (null == j && I === _.Tb.RECENT_ACTIVITY)) &&
              E.push({
                  section: _.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              }),
        !A &&
            S &&
            (E.push({
                section: _.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(T)
            }),
            E.push({
                section: _.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(w)
            })),
        E
    );
}
