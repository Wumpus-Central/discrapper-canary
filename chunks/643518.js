t.d(n, { Z: () => f }), t(653041);
var i = t(442837),
    l = t(158776),
    o = t(308406),
    s = t(697927),
    r = t(200634),
    a = t(369566),
    d = t(29899),
    c = t(326094),
    u = t(708108),
    m = t(146078),
    x = t(228168),
    p = t(981631),
    I = t(388032);
function f(e) {
    var n, t;
    let { user: f, currentUser: h, guildId: v, initialSubsection: Z } = e,
        { voiceActivityCardEnabled: g } = (0, o.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: _, recent: j, stream: E, outbox: N } = (0, a.Z)(f.id),
        { voiceChannel: y, voiceActivity: T } = (0, d.Z)({
            userId: f.id,
            guildId: v
        }),
        P = (0, i.e7)([l.Z], () => {
            let e = l.Z.getStatus(f.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        S = null != E || _.length > 0,
        b = j.length > 0,
        L = null === (n = (0, s.Z)(f.id, f.id !== (null == h ? void 0 : h.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        C = null === (t = (0, r.Z)(f.id, f.id !== (null == h ? void 0 : h.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        A = f.id === (null == h ? void 0 : h.id),
        O = (0, c.Z)({
            user: f,
            currentUser: h,
            location: p.Sbl.PROFILE_MODAL_TABS
        }),
        M = [
            {
                section: x.oh.USER_INFO,
                text: I.intl.string(I.t.jGoPJS)
            }
        ];
    return (
        !P && (S || (g && null == E && null == T && null != y))
            ? M.push({
                  section: x.oh.ACTIVITY,
                  text: I.intl.string(I.t.chq59f)
              })
            : (b || (null == N && Z === x.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: x.oh.ACTIVITY,
                  text: I.intl.string(I.t.chq59f)
              }),
        !A &&
            O &&
            (M.push({
                section: x.oh.MUTUAL_FRIENDS,
                text: (0, u.Z)(L)
            }),
            M.push({
                section: x.oh.MUTUAL_GUILDS,
                text: (0, m.Z)(C)
            })),
        M
    );
}
