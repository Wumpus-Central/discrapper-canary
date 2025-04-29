t.d(n, { Z: () => m }), t(539854);
var o = t(442837),
    i = t(468363),
    c = t(158776),
    r = t(885110),
    a = t(585305),
    l = t(369566),
    d = t(806729),
    s = t(29899),
    u = t(708108),
    f = t(146078),
    p = t(228168),
    _ = t(981631),
    b = t(388032);
function m(e) {
    let { user: n, currentUser: t, guildId: m, initialSubsection: I } = e,
        { voiceActivityStatusEnabled: h } = (0, i.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: y, recent: x, stream: g, outbox: v } = (0, l.Z)(n.id),
        { voiceChannel: j, voiceActivity: A } = (0, s.Z)({
            userId: n.id,
            guildId: m
        }),
        Z = n.id === (null == t ? void 0 : t.id),
        O = (0, o.e7)([r.Z, c.Z], () => {
            let e = Z ? r.Z.getStatus() : c.Z.getStatus(n.id);
            return e === _.Skl.OFFLINE || e === _.Skl.INVISIBLE;
        }),
        N = null != g || y.length > 0,
        P = x.length > 0,
        { mutualFriendsCount: C, mutualGuilds: T } = (0, d.Z)(n),
        w = null == T ? void 0 : T.length,
        S = (0, a.Z)(n),
        M = [
            {
                section: p.oh.USER_INFO,
                text: b.intl.string(b.t.jGoPJS)
            }
        ];
    return (
        !O && (N || (h && null == g && null == A && null != j))
            ? M.push({
                  section: p.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              })
            : (P || (null == v && I === p.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: p.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              }),
        !Z &&
            S &&
            (M.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(C)
            }),
            M.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(w)
            })),
        M
    );
}
