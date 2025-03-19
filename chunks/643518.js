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
    b = t(228168),
    m = t(981631),
    g = t(388032);
function v(e) {
    let { user: n, currentUser: t, guildId: v, initialSubsection: y } = e,
        { voiceActivityStatusEnabled: I } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { voiceActivityCardEnabled: j } = (0, s.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: h, recent: x, stream: _, outbox: O } = (0, c.Z)(n.id),
        { voiceChannel: Z, voiceActivity: N } = (0, d.Z)({
            userId: n.id,
            guildId: v,
            surface: 'use-user-profile-modal-tab-bar-items'
        }),
        P = n.id === (null == t ? void 0 : t.id),
        E = (0, r.e7)([l.Z, i.Z], () => {
            let e = P ? l.Z.getStatus() : i.Z.getStatus(n.id);
            return e === m.Skl.OFFLINE || e === m.Skl.INVISIBLE;
        }),
        S = null != _ || h.length > 0,
        T = x.length > 0,
        { mutualFriendsCount: C, mutualGuilds: A } = (0, a.Z)(n),
        w = null == A ? void 0 : A.length,
        L = (0, u.Z)({
            user: n,
            location: m.Sbl.PROFILE_MODAL_TABS
        }),
        M = [
            {
                section: b.oh.USER_INFO,
                text: g.NW.string(g.t.jGoPJS)
            }
        ];
    return (
        !E && (S || ((I || j) && null == _ && null == N && null != Z))
            ? M.push({
                  section: b.oh.ACTIVITY,
                  text: g.NW.string(g.t.chq59f)
              })
            : (T || (null == O && y === b.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: b.oh.ACTIVITY,
                  text: g.NW.string(g.t.chq59f)
              }),
        !P &&
            L &&
            (M.push({
                section: b.oh.MUTUAL_FRIENDS,
                text: (0, f.Z)(C)
            }),
            M.push({
                section: b.oh.MUTUAL_GUILDS,
                text: (0, p.Z)(w)
            })),
        M
    );
}
