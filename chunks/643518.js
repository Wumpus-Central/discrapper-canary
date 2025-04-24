t.d(n, { Z: () => I }), t(539854);
var i = t(442837),
    o = t(468363),
    l = t(158776),
    r = t(885110),
    s = t(585305),
    c = t(369566),
    a = t(806729),
    d = t(29899),
    u = t(708108),
    f = t(146078),
    p = t(228168),
    m = t(981631),
    h = t(388032);
function I(e) {
    let { user: n, currentUser: t, guildId: I, initialSubsection: x } = e,
        { voiceActivityStatusEnabled: b } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: _, recent: j, stream: v, outbox: g } = (0, c.Z)(n.id),
        { voiceChannel: Z, voiceActivity: y } = (0, d.Z)({
            userId: n.id,
            guildId: I
        }),
        A = n.id === (null == t ? void 0 : t.id),
        T = (0, i.e7)([r.Z, l.Z], () => {
            let e = A ? r.Z.getStatus() : l.Z.getStatus(n.id);
            return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE;
        }),
        O = null != v || _.length > 0,
        N = j.length > 0,
        { mutualFriendsCount: E, mutualGuilds: C } = (0, a.Z)(n),
        P = null == C ? void 0 : C.length,
        S = (0, s.Z)(n),
        M = [
            {
                section: p.oh.USER_INFO,
                text: h.intl.string(h.t.jGoPJS)
            }
        ];
    return (
        !T && (O || (b && null == v && null == y && null != Z))
            ? M.push({
                  section: p.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              })
            : (N || (null == g && x === p.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: p.oh.ACTIVITY,
                  text: h.intl.string(h.t.chq59f)
              }),
        !A &&
            S &&
            (M.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(E)
            }),
            M.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(P)
            })),
        M
    );
}
