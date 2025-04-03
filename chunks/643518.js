t.d(n, { Z: () => m }), t(653041);
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
    y = t(388032);
function m(e) {
    let { user: n, currentUser: t, guildId: m, initialSubsection: g } = e,
        { voiceActivityStatusEnabled: I } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { live: j, recent: v, stream: h, outbox: _ } = (0, s.Z)(n.id),
        { voiceChannel: x, voiceActivity: O } = (0, a.Z)({
            userId: n.id,
            guildId: m,
            surface: 'use-user-profile-modal-tab-bar-items'
        }),
        Z = n.id === (null == t ? void 0 : t.id),
        P = (0, r.e7)([l.Z, i.Z], () => {
            let e = Z ? l.Z.getStatus() : i.Z.getStatus(n.id);
            return e === b.Skl.OFFLINE || e === b.Skl.INVISIBLE;
        }),
        N = null != h || j.length > 0,
        E = v.length > 0,
        { mutualFriendsCount: S, mutualGuilds: T } = (0, c.Z)(n),
        C = null == T ? void 0 : T.length,
        A = (0, d.Z)({
            user: n,
            location: b.Sbl.PROFILE_MODAL_TABS
        }),
        w = [
            {
                section: p.oh.USER_INFO,
                text: y.NW.string(y.t.jGoPJS)
            }
        ];
    return (
        !P && (N || (I && null == h && null == O && null != x))
            ? w.push({
                  section: p.oh.ACTIVITY,
                  text: y.NW.string(y.t.chq59f)
              })
            : (E || (null == _ && g === p.Tb.RECENT_ACTIVITY)) &&
              w.push({
                  section: p.oh.ACTIVITY,
                  text: y.NW.string(y.t.chq59f)
              }),
        !Z &&
            A &&
            (w.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(S)
            }),
            w.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(C)
            })),
        w
    );
}
