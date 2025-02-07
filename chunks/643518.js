i.d(n, { Z: () => h }), i(653041);
var t = i(442837),
    l = i(158776),
    o = i(885110),
    s = i(308406),
    r = i(697927),
    a = i(200634),
    d = i(369566),
    c = i(29899),
    u = i(326094),
    m = i(708108),
    x = i(146078),
    p = i(228168),
    f = i(981631),
    I = i(388032);
function h(e) {
    var n, i;
    let { user: h, currentUser: v, guildId: Z, initialSubsection: g } = e,
        { voiceActivityCardEnabled: _ } = (0, s.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: j, recent: E, stream: N, outbox: y } = (0, d.Z)(h.id),
        { voiceChannel: T, voiceActivity: S } = (0, c.Z)({
            userId: h.id,
            guildId: Z
        }),
        b = h.id === (null == v ? void 0 : v.id),
        P = (0, t.e7)([o.Z, l.Z], () => {
            let e = b ? o.Z.getStatus() : l.Z.getStatus(h.id);
            return e === f.Skl.OFFLINE || e === f.Skl.INVISIBLE;
        }),
        L = null != N || j.length > 0,
        C = E.length > 0,
        A = null === (n = (0, r.Z)(h.id, h.id !== (null == v ? void 0 : v.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        O = null === (i = (0, a.Z)(h.id, h.id !== (null == v ? void 0 : v.id)).mutualGuilds) || void 0 === i ? void 0 : i.length,
        M = (0, u.Z)({
            user: h,
            currentUser: v,
            location: f.Sbl.PROFILE_MODAL_TABS
        }),
        R = [
            {
                section: p.oh.USER_INFO,
                text: I.intl.string(I.t.jGoPJS)
            }
        ];
    return (
        !P && (L || (_ && null == N && null == S && null != T))
            ? R.push({
                  section: p.oh.ACTIVITY,
                  text: I.intl.string(I.t.chq59f)
              })
            : (C || (null == y && g === p.Tb.RECENT_ACTIVITY)) &&
              R.push({
                  section: p.oh.ACTIVITY,
                  text: I.intl.string(I.t.chq59f)
              }),
        !b &&
            M &&
            (R.push({
                section: p.oh.MUTUAL_FRIENDS,
                text: (0, m.Z)(A)
            }),
            R.push({
                section: p.oh.MUTUAL_GUILDS,
                text: (0, x.Z)(O)
            })),
        R
    );
}
