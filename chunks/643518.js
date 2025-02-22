t.d(n, { Z: () => g }), t(653041);
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
    I = t(981631),
    b = t(388032);
function g(e) {
    let { user: n, currentUser: t, guildId: g, initialSubsection: y } = e,
        { voiceActivityStatusEnabled: j } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { voiceActivityCardEnabled: h } = (0, s.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: v, recent: x, stream: O, outbox: _ } = (0, c.Z)(n.id),
        { voiceChannel: Z, voiceActivity: N } = (0, d.Z)({
            userId: n.id,
            guildId: g,
            surface: 'use-user-profile-modal-tab-bar-items'
        }),
        P = n.id === (null == t ? void 0 : t.id),
        E = (0, r.e7)([l.Z, i.Z], () => {
            let e = P ? l.Z.getStatus() : i.Z.getStatus(n.id);
            return e === I.Skl.OFFLINE || e === I.Skl.INVISIBLE;
        }),
        S = null != O || v.length > 0,
        T = x.length > 0,
        { mutualFriends: C, mutualGuilds: L } = (0, a.Z)(n, n.id !== (null == t ? void 0 : t.id)),
        w = null == C ? void 0 : C.length,
        A = null == L ? void 0 : L.length,
        M = (0, u.Z)({
            user: n,
            currentUser: t,
            location: I.Sbl.PROFILE_MODAL_TABS
        }),
        R = [
            {
                section: m.oh.USER_INFO,
                text: b.NW.string(b.t.jGoPJS)
            }
        ];
    return (
        !E && (S || ((j || h) && null == O && null == N && null != Z))
            ? R.push({
                  section: m.oh.ACTIVITY,
                  text: b.NW.string(b.t.chq59f)
              })
            : (T || (null == _ && y === m.Tb.RECENT_ACTIVITY)) &&
              R.push({
                  section: m.oh.ACTIVITY,
                  text: b.NW.string(b.t.chq59f)
              }),
        !P &&
            M &&
            (R.push({
                section: m.oh.MUTUAL_FRIENDS,
                text: (0, f.Z)(w)
            }),
            R.push({
                section: m.oh.MUTUAL_GUILDS,
                text: (0, p.Z)(A)
            })),
        R
    );
}
