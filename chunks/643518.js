t.d(n, { Z: () => v }), t(653041);
var r = t(442837),
    o = t(468363),
    i = t(158776),
    l = t(885110),
    s = t(308406),
    c = t(369566),
    a = t(806729),
    d = t(29899),
    u = t(326094),
    f = t(708108),
    p = t(146078),
    m = t(228168),
    b = t(981631),
    g = t(388032);
function v(e) {
    let { user: n, currentUser: t, guildId: v, initialSubsection: y } = e,
        { voiceActivityStatusEnabled: I } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { voiceActivityCardEnabled: h } = (0, s.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: j, recent: x, stream: _, outbox: O } = (0, c.Z)(n.id),
        { voiceChannel: Z, voiceActivity: N } = (0, d.Z)({
            userId: n.id,
            guildId: v,
            surface: 'use-user-profile-modal-tab-bar-items'
        }),
        P = n.id === (null == t ? void 0 : t.id),
        E = (0, r.e7)([l.Z, i.Z], () => {
            let e = P ? l.Z.getStatus() : i.Z.getStatus(n.id);
            return e === b.Skl.OFFLINE || e === b.Skl.INVISIBLE;
        }),
        S = null != _ || j.length > 0,
        T = x.length > 0,
        { mutualFriends: C, mutualGuilds: L } = (0, a.Z)(n, n.id !== (null == t ? void 0 : t.id)),
        A = null == C ? void 0 : C.length,
        w = null == L ? void 0 : L.length,
        M = (0, u.Z)({
            user: n,
            location: b.Sbl.PROFILE_MODAL_TABS
        }),
        U = [
            {
                section: m.oh.USER_INFO,
                text: g.NW.string(g.t.jGoPJS)
            }
        ];
    return (
        !E && (S || ((I || h) && null == _ && null == N && null != Z))
            ? U.push({
                  section: m.oh.ACTIVITY,
                  text: g.NW.string(g.t.chq59f)
              })
            : (T || (null == O && y === m.Tb.RECENT_ACTIVITY)) &&
              U.push({
                  section: m.oh.ACTIVITY,
                  text: g.NW.string(g.t.chq59f)
              }),
        !P &&
            M &&
            (U.push({
                section: m.oh.MUTUAL_FRIENDS,
                text: (0, f.Z)(A)
            }),
            U.push({
                section: m.oh.MUTUAL_GUILDS,
                text: (0, p.Z)(w)
            })),
        U
    );
}
