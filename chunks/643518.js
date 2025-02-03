i.d(n, { Z: () => p }), i(653041);
var t = i(308406),
    l = i(697927),
    o = i(200634),
    s = i(369566),
    r = i(29899),
    a = i(326094),
    d = i(708108),
    c = i(146078),
    u = i(228168),
    m = i(981631),
    x = i(388032);
function p(e) {
    var n, i;
    let { user: p, currentUser: f, guildId: I, initialSubsection: h } = e,
        { live: v, recent: g, stream: Z, outbox: _ } = (0, s.Z)(p.id),
        j = v.length > 0 || g.length > 0 || null != Z,
        { voiceActivityCardEnabled: E } = (0, t.o)({ location: 'useUserProfileModalTabBarItems' }),
        { voiceChannel: N } = (0, r.Z)({
            userId: p.id,
            guildId: I
        }),
        y = null === (n = (0, l.Z)(p.id, p.id !== (null == f ? void 0 : f.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        T = null === (i = (0, o.Z)(p.id, p.id !== (null == f ? void 0 : f.id)).mutualGuilds) || void 0 === i ? void 0 : i.length,
        P = p.id === (null == f ? void 0 : f.id),
        b = (0, a.Z)({
            user: p,
            currentUser: f,
            location: m.Sbl.PROFILE_MODAL_TABS
        }),
        S = [
            {
                section: u.oh.USER_INFO,
                text: x.intl.string(x.t.jGoPJS)
            }
        ];
    return (
        (j || (E && null != N) || (null == _ && h === u.Tb.RECENT_ACTIVITY)) &&
            S.push({
                section: u.oh.ACTIVITY,
                text: x.intl.string(x.t.chq59f)
            }),
        !P &&
            b &&
            (S.push({
                section: u.oh.MUTUAL_FRIENDS,
                text: (0, d.Z)(y)
            }),
            S.push({
                section: u.oh.MUTUAL_GUILDS,
                text: (0, c.Z)(T)
            })),
        S
    );
}
