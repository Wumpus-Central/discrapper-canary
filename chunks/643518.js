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
    _ = t(146078),
    f = t(228168),
    p = t(981631),
    m = t(388032);
function I(e) {
    let { user: n, currentUser: t, guildId: I, initialSubsection: h } = e,
        { voiceActivityStatusEnabled: b } = (0, c.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: x, recent: y, stream: Z, outbox: j } = (0, d.Z)(n.id),
        { voiceChannel: g, voiceActivity: v } = (0, s.Z)({
            userId: n.id,
            guildId: I
        }),
        A = n.id === (null == t ? void 0 : t.id),
        N = (0, o.e7)([a.Z, i.Z], () => {
            let e = A ? a.Z.getStatus() : i.Z.getStatus(n.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        O = null != Z || x.length > 0,
        C = y.length > 0,
        { mutualFriendsCount: T, mutualGuilds: P } = (0, l.Z)(n),
        w = null == P ? void 0 : P.length,
        E = (0, r.Z)(n),
        S = [
            {
                section: f.oh.USER_INFO,
                text: m.intl.string(m.t.jGoPJS)
            }
        ];
    return (
        !N && (O || (b && null == Z && null == v && null != g))
            ? S.push({
                  section: f.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              })
            : (C || (null == j && h === f.Tb.RECENT_ACTIVITY)) &&
              S.push({
                  section: f.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              }),
        !A &&
            E &&
            (S.push({
                section: f.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(T)
            }),
            S.push({
                section: f.oh.MUTUAL_GUILDS,
                text: (0, _.Z)(w)
            })),
        S
    );
}
