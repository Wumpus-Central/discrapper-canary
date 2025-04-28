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
    p = t(228168),
    m = t(981631),
    h = t(388032);
function x(e) {
    let { user: n, currentUser: t, guildId: x, initialSubsection: I } = e,
        { voiceActivityStatusEnabled: j } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: v, recent: b, stream: _, outbox: g } = (0, a.Z)(n.id),
        { voiceChannel: Z, voiceActivity: y } = (0, d.Z)({
            userId: n.id,
            guildId: x
        }),
        N = n.id === (null == t ? void 0 : t.id),
        A = (0, i.e7)([r.Z, l.Z], () => {
            let e = N ? r.Z.getStatus() : l.Z.getStatus(n.id);
            return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE;
        }),
        T = null != _ || v.length > 0,
        O = b.length > 0,
        { mutualFriendsCount: C, mutualGuilds: E } = (0, c.Z)(n),
        P = null == E ? void 0 : E.length,
        S = (0, s.Z)(n),
        L = [
            {
                section: p.oh.USER_INFO,
                text: h.intl.string(h.t.jGoPJS)
            }
        ];
    return (
        !A && (T || (j && null == _ && null == y && null != Z))
            ? L.push({
                  section: p.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              })
            : (O || (null == g && I === p.Tb.RECENT_ACTIVITY)) &&
              L.push({
                  section: p.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              }),
        !N &&
            S &&
            (L.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(C)
            }),
            L.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(P)
            })),
        L
    );
}
