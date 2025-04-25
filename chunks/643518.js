t.d(n, { Z: () => x }), t(539854);
var i = t(442837),
    o = t(468363),
    l = t(158776),
    r = t(885110),
    s = t(585305),
    a = t(369566),
    c = t(806729),
    d = t(29899),
    u = t(708108),
    f = t(146078),
    m = t(228168),
    p = t(981631),
    h = t(388032);
function x(e) {
    let { user: n, currentUser: t, guildId: x, initialSubsection: I } = e,
        { voiceActivityStatusEnabled: v } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: b, recent: j, stream: _, outbox: g } = (0, a.Z)(n.id),
        { voiceChannel: Z, voiceActivity: y } = (0, d.Z)({
            userId: n.id,
            guildId: x
        }),
        N = n.id === (null == t ? void 0 : t.id),
        A = (0, i.e7)([r.Z, l.Z], () => {
            let e = N ? r.Z.getStatus() : l.Z.getStatus(n.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        T = null != _ || b.length > 0,
        O = j.length > 0,
        { mutualFriendsCount: C, mutualGuilds: E } = (0, c.Z)(n),
        P = null == E ? void 0 : E.length,
        S = (0, s.Z)(n),
        M = [
            {
                section: m.oh.USER_INFO,
                text: h.intl.string(h.t.jGoPJS)
            }
        ];
    return (
        !A && (T || (v && null == _ && null == y && null != Z))
            ? M.push({
                  section: m.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              })
            : (O || (null == g && I === m.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: m.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              }),
        !N &&
            S &&
            (M.push({
                section: m.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(C)
            }),
            M.push({
                section: m.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(P)
            })),
        M
    );
}
