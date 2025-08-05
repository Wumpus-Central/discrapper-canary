(t.d(n, { Z: () => I }), t(539854));
var o = t(442837),
    c = t(468363),
    i = t(158776),
    a = t(885110),
    r = t(585305),
    d = t(369566),
    l = t(806729),
    s = t(29899),
    u = t(708108),
    p = t(146078),
    f = t(228168),
    _ = t(981631),
    m = t(388032);
function I(e) {
    let { user: n, currentUser: t, guildId: I, initialSubsection: h } = e,
        { voiceActivityStatusEnabled: x } = (0, c.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: y, recent: b, stream: v, outbox: j } = (0, d.Z)(n.id),
        { voiceChannel: Z, voiceActivity: A } = (0, s.Z)({
            userId: n.id,
            guildId: I
        }),
        g = n.id === (null == t ? void 0 : t.id),
        O = (0, o.e7)([a.Z, i.Z], () => {
            let e = g ? a.Z.getStatus() : i.Z.getStatus(n.id);
            return e === _.Skl.OFFLINE || e === _.Skl.INVISIBLE;
        }),
        N = null != v || y.length > 0,
        C = b.length > 0,
        { mutualFriendsCount: P, mutualGuilds: T } = (0, l.Z)(n),
        E = null == T ? void 0 : T.length,
        S = (0, r.Z)(n),
        M = [
            {
                section: f.oh.USER_INFO,
                text: m.intl.string(m.t.jGoPJS)
            }
        ];
    return (
        !O && (N || (x && null == v && null == A && null != Z))
            ? M.push({
                  section: f.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              })
            : (C || (null == j && h === f.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: f.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              }),
        !g &&
            S &&
            (M.push({
                section: f.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(P)
            }),
            M.push({
                section: f.oh.MUTUAL_GUILDS,
                text: (0, p.Z)(E)
            })),
        M
    );
}
