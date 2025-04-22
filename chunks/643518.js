t.d(n, { Z: () => b }), t(539854);
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
    h = t(388032);
function b(e) {
    let { user: n, currentUser: t, guildId: b, initialSubsection: g } = e,
        { voiceActivityStatusEnabled: j } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: v, recent: x, stream: y, outbox: O } = (0, c.Z)(n.id),
        { voiceChannel: I, voiceActivity: Z } = (0, d.Z)({
            userId: n.id,
            guildId: b
        }),
        _ = n.id === (null == t ? void 0 : t.id),
        P = (0, r.e7)([l.Z, i.Z], () => {
            let e = _ ? l.Z.getStatus() : i.Z.getStatus(n.id);
            return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE;
        }),
        A = null != y || v.length > 0,
        E = x.length > 0,
        { mutualFriendsCount: N, mutualGuilds: T } = (0, a.Z)(n),
        C = null == T ? void 0 : T.length,
        S = (0, s.Z)(n),
        w = [
            {
                section: p.oh.USER_INFO,
                text: h.intl.string(h.t.jGoPJS)
            }
        ];
    return (
        !P && (A || (j && null == y && null == Z && null != I))
            ? w.push({
                  section: p.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              })
            : (E || (null == O && g === p.Tb.RECENT_ACTIVITY)) &&
              w.push({
                  section: p.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              }),
        !_ &&
            S &&
            (w.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(N)
            }),
            w.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(C)
            })),
        w
    );
}
