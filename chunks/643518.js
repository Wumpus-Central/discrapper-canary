t.d(n, { Z: () => m }), t(653041);
var i = t(442837),
    l = t(158776),
    o = t(885110),
    s = t(308406),
    r = t(697927),
    a = t(200634),
    d = t(369566),
    c = t(29899),
    u = t(326094),
    I = t(708108),
    f = t(146078),
    p = t(228168),
    x = t(981631),
    _ = t(388032);
function m(e) {
    var n, t;
    let { user: m, currentUser: h, guildId: Z, initialSubsection: v } = e,
        { voiceActivityCardEnabled: g } = (0, s.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: j, recent: E, stream: y, outbox: N } = (0, d.Z)(m.id),
        { voiceChannel: T, voiceActivity: b } = (0, c.Z)({
            userId: m.id,
            guildId: Z
        }),
        P = m.id === (null == h ? void 0 : h.id),
        S = (0, i.e7)([o.Z, l.Z], () => {
            let e = P ? o.Z.getStatus() : l.Z.getStatus(m.id);
            return e === x.Skl.OFFLINE || e === x.Skl.INVISIBLE;
        }),
        L = null != y || j.length > 0,
        C = E.length > 0,
        A = null === (n = (0, r.Z)(m.id, m.id !== (null == h ? void 0 : h.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        O = null === (t = (0, a.Z)(m.id, m.id !== (null == h ? void 0 : h.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        R = (0, u.Z)({
            user: m,
            currentUser: h,
            location: x.Sbl.PROFILE_MODAL_TABS
        }),
        M = [
            {
                section: p.oh.USER_INFO,
                text: _.intl.string(_.t.jGoPJS)
            }
        ];
    return (
        !S && (L || (g && null == y && null == b && null != T))
            ? M.push({
                  section: p.oh.ACTIVITY,
                  text: _.intl.string(_.t.chq59f)
              })
            : (C || (null == N && v === p.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: p.oh.ACTIVITY,
                  text: _.intl.string(_.t.chq59f)
              }),
        !P &&
            R &&
            (M.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, I.Z)(A)
            }),
            M.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, f.Z)(O)
            })),
        M
    );
}
