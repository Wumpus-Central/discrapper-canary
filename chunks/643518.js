t.d(n, { Z: () => b }), t(539854);
var o = t(442837),
    c = t(468363),
    i = t(158776),
    r = t(885110),
    a = t(585305),
    l = t(369566),
    d = t(806729),
    s = t(29899),
    u = t(708108),
    f = t(146078),
    p = t(228168),
    _ = t(981631),
    m = t(388032);
function b(e) {
    let { user: n, currentUser: t, guildId: b, initialSubsection: I } = e,
        { voiceActivityStatusEnabled: h } = (0, c.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: y, recent: x, stream: j, outbox: g } = (0, l.Z)(n.id),
        { voiceChannel: O, voiceActivity: v } = (0, s.Z)({
            userId: n.id,
            guildId: b
        }),
        Z = n.id === (null == t ? void 0 : t.id),
        A = (0, o.e7)([r.Z, i.Z], () => {
            let e = Z ? r.Z.getStatus() : i.Z.getStatus(n.id);
            return e === _.Skl.OFFLINE || e === _.Skl.INVISIBLE;
        }),
        N = null != j || y.length > 0,
        P = x.length > 0,
        { mutualFriendsCount: C, mutualGuilds: w } = (0, d.Z)(n),
        T = null == w ? void 0 : w.length,
        S = (0, a.Z)(n),
        E = [
            {
                section: p.oh.USER_INFO,
                text: m.intl.string(m.t.jGoPJS)
            }
        ];
    return (
        !A && (N || (h && null == j && null == v && null != O))
            ? E.push({
                  section: p.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              })
            : (P || (null == g && I === p.Tb.RECENT_ACTIVITY)) &&
              E.push({
                  section: p.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              }),
        !Z &&
            S &&
            (E.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(C)
            }),
            E.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(T)
            })),
        E
    );
}
