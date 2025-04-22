t.d(n, { Z: () => h }), t(539854);
var r = t(442837),
    o = t(468363),
    i = t(158776),
    l = t(885110),
    s = t(585305),
    c = t(369566),
    a = t(806729),
    d = t(29899),
    u = t(708108),
    f = t(146078),
    p = t(228168),
    m = t(981631),
    b = t(388032);
function h(e) {
    let { user: n, currentUser: t, guildId: h, initialSubsection: g } = e,
        { voiceActivityStatusEnabled: j } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: v, recent: x, stream: y, outbox: I } = (0, c.Z)(n.id),
        { voiceChannel: O, voiceActivity: Z } = (0, d.Z)({
            userId: n.id,
            guildId: h
        }),
        _ = n.id === (null == t ? void 0 : t.id),
        P = (0, r.e7)([l.Z, i.Z], () => {
            let e = _ ? l.Z.getStatus() : i.Z.getStatus(n.id);
            return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE;
        }),
        E = null != y || v.length > 0,
        N = x.length > 0,
        { mutualFriendsCount: A, mutualGuilds: T } = (0, a.Z)(n),
        C = null == T ? void 0 : T.length,
        S = (0, s.Z)(n),
        w = [
            {
                section: p.oh.USER_INFO,
                text: b.intl.string(b.t.jGoPJS)
            }
        ];
    return (
        !P && (E || (j && null == y && null == Z && null != O))
            ? w.push({
                  section: p.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              })
            : (N || (null == I && g === p.Tb.RECENT_ACTIVITY)) &&
              w.push({
                  section: p.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              }),
        !_ &&
            S &&
            (w.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(A)
            }),
            w.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(C)
            })),
        w
    );
}
