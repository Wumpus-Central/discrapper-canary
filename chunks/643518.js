t.d(n, { Z: () => v }), t(653041);
var r = t(442837),
    o = t(468363),
    i = t(158776),
    l = t(885110),
    s = t(308406),
    c = t(697927),
    a = t(200634),
    d = t(369566),
    u = t(29899),
    f = t(326094),
    p = t(708108),
    m = t(146078),
    I = t(228168),
    b = t(981631),
    g = t(388032);
function v(e) {
    var n, t;
    let { user: v, currentUser: y, guildId: j, initialSubsection: h } = e,
        { voiceActivityStatusEnabled: x } = (0, o.U)({ location: 'useUserProfileModalTabBarItems' }),
        { voiceActivityCardEnabled: O } = (0, s.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: _, recent: Z, stream: N, outbox: P } = (0, d.Z)(v.id),
        { voiceChannel: E, voiceActivity: S } = (0, u.Z)({
            userId: v.id,
            guildId: j,
            surface: 'use-user-profile-modal-tab-bar-items'
        }),
        T = v.id === (null == y ? void 0 : y.id),
        C = (0, r.e7)([l.Z, i.Z], () => {
            let e = T ? l.Z.getStatus() : i.Z.getStatus(v.id);
            return e === b.Skl.OFFLINE || e === b.Skl.INVISIBLE;
        }),
        L = null != N || _.length > 0,
        w = Z.length > 0,
        A = null === (n = (0, c.Z)(v.id, v.id !== (null == y ? void 0 : y.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        M = null === (t = (0, a.Z)(v.id, v.id !== (null == y ? void 0 : y.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        R = (0, f.Z)({
            user: v,
            currentUser: y,
            location: b.Sbl.PROFILE_MODAL_TABS
        }),
        U = [
            {
                section: I.oh.USER_INFO,
                text: g.NW.string(g.t.jGoPJS)
            }
        ];
    return (
        !C && (L || ((x || O) && null == N && null == S && null != E))
            ? U.push({
                  section: I.oh.ACTIVITY,
                  text: g.NW.string(g.t.chq59f)
              })
            : (w || (null == P && h === I.Tb.RECENT_ACTIVITY)) &&
              U.push({
                  section: I.oh.ACTIVITY,
                  text: g.NW.string(g.t.chq59f)
              }),
        !T &&
            R &&
            (U.push({
                section: I.oh.MUTUAL_FRIENDS,
                text: (0, p.Z)(A)
            }),
            U.push({
                section: I.oh.MUTUAL_GUILDS,
                text: (0, m.Z)(M)
            })),
        U
    );
}
