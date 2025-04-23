t.d(n, { Z: () => v }), t(539854);
var l = t(442837),
    r = t(468363),
    i = t(158776),
    o = t(885110),
    s = t(585305),
    u = t(369566),
    a = t(806729),
    c = t(29899),
    d = t(708108),
    f = t(146078),
    p = t(228168),
    g = t(981631),
    b = t(388032);
function v(e) {
    let { user: n, currentUser: t, guildId: v, initialSubsection: h } = e,
        { voiceActivityStatusEnabled: j } = (0, r.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: m, recent: O, stream: y, outbox: Z } = (0, u.Z)(n.id),
        { voiceChannel: I, voiceActivity: x } = (0, c.Z)({
            userId: n.id,
            guildId: v
        }),
        P = n.id === (null == t ? void 0 : t.id),
        E = (0, l.e7)([o.Z, i.Z], () => {
            let e = P ? o.Z.getStatus() : i.Z.getStatus(n.id);
            return e === g.Skl.OFFLINE || e === g.Skl.INVISIBLE;
        }),
        T = null != y || m.length > 0,
        N = O.length > 0,
        { mutualFriendsCount: S, mutualGuilds: C } = (0, a.Z)(n),
        w = null == C ? void 0 : C.length,
        A = (0, s.Z)(n),
        R = [
            {
                section: p.oh.USER_INFO,
                text: b.intl.string(b.t.jGoPJS)
            }
        ];
    return (
        !E && (T || (j && null == y && null == x && null != I))
            ? R.push({
                  section: p.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              })
            : (N || (null == Z && h === p.Tb.RECENT_ACTIVITY)) &&
              R.push({
                  section: p.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              }),
        !P &&
            A &&
            (R.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, d.Z)(S)
            }),
            R.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(w)
            })),
        R
    );
}
