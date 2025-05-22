t.d(n, { Z: () => b }), t(539854);
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
    m = t(388032);
function b(e) {
    let { user: n, currentUser: t, guildId: b, initialSubsection: I } = e,
        { voiceActivityStatusEnabled: h } = (0, i.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: y, recent: x, stream: g, outbox: j } = (0, l.Z)(n.id),
        { voiceChannel: v, voiceActivity: O } = (0, s.Z)({
            userId: n.id,
            guildId: b
        }),
        Z = n.id === (null == t ? void 0 : t.id),
        A = (0, o.e7)([r.Z, c.Z], () => {
            let e = Z ? r.Z.getStatus() : c.Z.getStatus(n.id);
            return e === _.Skl.OFFLINE || e === _.Skl.INVISIBLE;
        }),
        P = null != g || y.length > 0,
        N = x.length > 0,
        { mutualFriendsCount: w, mutualGuilds: C } = (0, d.Z)(n),
        E = null == C ? void 0 : C.length,
        T = (0, a.Z)(n),
        S = [
            {
                section: p.oh.USER_INFO,
                text: m.intl.string(m.t.jGoPJS)
            }
        ];
    return (
        !A && (P || (h && null == g && null == O && null != v))
            ? S.push({
                  section: p.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              })
            : (N || (null == j && I === p.Tb.RECENT_ACTIVITY)) &&
              S.push({
                  section: p.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              }),
        !Z &&
            T &&
            (S.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(w)
            }),
            S.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(E)
            })),
        S
    );
}
