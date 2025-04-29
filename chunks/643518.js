t.d(n, { Z: () => m }), t(539854);
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
    _ = t(228168),
    p = t(981631),
    b = t(388032);
function m(e) {
    let { user: n, currentUser: t, guildId: m, initialSubsection: I } = e,
        { voiceActivityStatusEnabled: h } = (0, c.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: y, recent: x, stream: g, outbox: v } = (0, l.Z)(n.id),
        { voiceChannel: j, voiceActivity: Z } = (0, s.Z)({
            userId: n.id,
            guildId: m
        }),
        A = n.id === (null == t ? void 0 : t.id),
        O = (0, o.e7)([r.Z, i.Z], () => {
            let e = A ? r.Z.getStatus() : i.Z.getStatus(n.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        N = null != g || y.length > 0,
        P = x.length > 0,
        { mutualFriendsCount: C, mutualGuilds: T } = (0, d.Z)(n),
        w = null == T ? void 0 : T.length,
        S = (0, a.Z)(n),
        M = [
            {
                section: _.oh.USER_INFO,
                text: b.intl.string(b.t.jGoPJS)
            }
        ];
    return (
        !O && (N || (h && null == g && null == Z && null != j))
            ? M.push({
                  section: _.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              })
            : (P || (null == v && I === _.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: _.oh.ACTIVITY,
                  text: b.intl.string(b.t.chq59f)
              }),
        !A &&
            S &&
            (M.push({
                section: _.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(C)
            }),
            M.push({
                section: _.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(w)
            })),
        M
    );
}
