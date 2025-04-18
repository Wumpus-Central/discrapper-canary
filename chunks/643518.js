t.d(n, { Z: () => h }), t(539854);
var r = t(442837),
    o = t(468363),
    i = t(158776),
    l = t(885110),
    s = t(369566),
    c = t(806729),
    a = t(29899),
    d = t(326094),
    u = t(708108),
    f = t(146078),
    p = t(228168),
    b = t(981631),
    m = t(388032);
function h(e) {
    let { user: n, currentUser: t, guildId: h, initialSubsection: g } = e,
        { voiceActivityStatusEnabled: y } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: I, recent: j, stream: v, outbox: x } = (0, s.Z)(n.id),
        { voiceChannel: _, voiceActivity: Z } = (0, a.Z)({
            userId: n.id,
            guildId: h
        }),
        O = n.id === (null == t ? void 0 : t.id),
        N = (0, r.e7)([l.Z, i.Z], () => {
            let e = O ? l.Z.getStatus() : i.Z.getStatus(n.id);
            return e === b.Skl.OFFLINE || e === b.Skl.INVISIBLE;
        }),
        P = null != v || I.length > 0,
        E = j.length > 0,
        { mutualFriendsCount: S, mutualGuilds: T } = (0, c.Z)(n),
        A = null == T ? void 0 : T.length,
        C = (0, d.Z)({
            user: n,
            location: b.Sbl.PROFILE_MODAL_TABS
        }),
        L = [
            {
                section: p.oh.USER_INFO,
                text: m.NW.string(m.t.jGoPJS)
            }
        ];
    return (
        !N && (P || (y && null == v && null == Z && null != _))
            ? L.push({
                  section: p.oh.ACTIVITY,
                  text: m.NW.string(m.t.chq59f)
              })
            : (E || (null == x && g === p.Tb.RECENT_ACTIVITY)) &&
              L.push({
                  section: p.oh.ACTIVITY,
                  text: m.NW.string(m.t.chq59f)
              }),
        !O &&
            C &&
            (L.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(S)
            }),
            L.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(A)
            })),
        L
    );
}
