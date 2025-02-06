i.d(n, { Z: () => I }), i(653041);
var t = i(442837),
    l = i(158776),
    o = i(308406),
    s = i(697927),
    r = i(200634),
    a = i(369566),
    d = i(29899),
    c = i(326094),
    u = i(708108),
    m = i(146078),
    x = i(228168),
    p = i(981631),
    f = i(388032);
function I(e) {
    var n, i;
    let { user: I, currentUser: h, guildId: v, initialSubsection: Z } = e,
        { voiceActivityCardEnabled: g } = (0, o.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: _, recent: j, stream: E, outbox: N } = (0, a.Z)(I.id),
        { voiceChannel: y, voiceActivity: T } = (0, d.Z)({
            userId: I.id,
            guildId: v
        }),
        b = (0, t.e7)([l.Z], () => {
            let e = l.Z.getStatus(I.id);
            return e === p.Skl.OFFLINE || e === p.Skl.INVISIBLE;
        }),
        S = null != E || _.length > 0,
        P = j.length > 0,
        L = null === (n = (0, s.Z)(I.id, I.id !== (null == h ? void 0 : h.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        C = null === (i = (0, r.Z)(I.id, I.id !== (null == h ? void 0 : h.id)).mutualGuilds) || void 0 === i ? void 0 : i.length,
        A = I.id === (null == h ? void 0 : h.id),
        O = (0, c.Z)({
            user: I,
            currentUser: h,
            location: p.Sbl.PROFILE_MODAL_TABS
        }),
        M = [
            {
                section: x.oh.USER_INFO,
                text: f.intl.string(f.t.jGoPJS)
            }
        ];
    return (
        !b && (S || (g && null == E && null == T && null != y))
            ? M.push({
                  section: x.oh.ACTIVITY,
                  text: f.intl.string(f.t.chq59f)
              })
            : (P || (null == N && Z === x.Tb.RECENT_ACTIVITY)) &&
              M.push({
                  section: x.oh.ACTIVITY,
                  text: f.intl.string(f.t.chq59f)
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
