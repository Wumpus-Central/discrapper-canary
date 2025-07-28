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
    _ = t(146078),
    f = t(228168),
    p = t(981631),
    m = t(388032);
function I(e) {
    let { user: n, currentUser: t, guildId: I, initialSubsection: h } = e,
        { voiceActivityStatusEnabled: x } = (0, c.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: b, recent: y, stream: v, outbox: j } = (0, d.Z)(n.id),
        { voiceChannel: Z, voiceActivity: g } = (0, s.Z)({
            userId: n.id,
            guildId: I
        }),
        A = n.id === (null == t ? void 0 : t.id),
        O = (0, o.e7)([a.Z, i.Z], () => {
            let e = A ? a.Z.getStatus() : i.Z.getStatus(n.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        N = null != v || b.length > 0,
        C = y.length > 0,
        { mutualFriendsCount: P, mutualGuilds: T } = (0, l.Z)(n),
        w = null == T ? void 0 : T.length,
        E = (0, r.Z)(n),
        S = [
            {
                section: f.oh.USER_INFO,
                text: m.intl.string(m.t.jGoPJS)
            }
        ];
    return (
        !O && (N || (x && null == v && null == g && null != Z))
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
                text: (0, u.Z)(P)
            }),
            S.push({
                section: f.oh.MUTUAL_GUILDS,
                text: (0, _.Z)(w)
            })),
        S
    );
}
