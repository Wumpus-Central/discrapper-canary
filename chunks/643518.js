t.d(n, { Z: () => _ }), t(653041);
var i = t(442837),
    l = t(468363),
    o = t(158776),
    s = t(885110),
    r = t(308406),
    a = t(697927),
    d = t(200634),
    c = t(369566),
    u = t(29899),
    I = t(326094),
    f = t(708108),
    p = t(146078),
    x = t(228168),
    h = t(981631),
    m = t(388032);
function _(e) {
    var n, t;
    let { user: _, currentUser: Z, guildId: v, initialSubsection: g } = e,
        { voiceActivityStatusEnabled: j } = (0, l.U)({ location: 'useUserProfileModalTabBarItems' }),
        { voiceActivityCardEnabled: E } = (0, r.o)({ location: 'useUserProfileModalTabBarItems' }),
        { live: y, recent: N, stream: T, outbox: b } = (0, c.Z)(_.id),
        { voiceChannel: P, voiceActivity: S } = (0, u.Z)({
            userId: _.id,
            guildId: v
        }),
        L = _.id === (null == Z ? void 0 : Z.id),
        C = (0, i.e7)([s.Z, o.Z], () => {
            let e = L ? s.Z.getStatus() : o.Z.getStatus(_.id);
            return e === h.Skl.OFFLINE || e === h.Skl.INVISIBLE;
        }),
        A = null != T || y.length > 0,
        O = N.length > 0,
        R = null === (n = (0, a.Z)(_.id, _.id !== (null == Z ? void 0 : Z.id)).mutualFriends) || void 0 === n ? void 0 : n.length,
        M = null === (t = (0, d.Z)(_.id, _.id !== (null == Z ? void 0 : Z.id)).mutualGuilds) || void 0 === t ? void 0 : t.length,
        U = (0, I.Z)({
            user: _,
            currentUser: Z,
            location: h.Sbl.PROFILE_MODAL_TABS
        }),
        B = [
            {
                section: x.oh.USER_INFO,
                text: m.intl.string(m.t.jGoPJS)
            }
        ];
    return (
        !C && (A || ((j || E) && null == T && null == S && null != P))
            ? B.push({
                  section: x.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              })
            : (O || (null == b && g === x.Tb.RECENT_ACTIVITY)) &&
              B.push({
                  section: x.oh.ACTIVITY,
                  text: m.intl.string(m.t.chq59f)
              }),
        !L &&
            U &&
            (B.push({
                section: x.oh.MUTUAL_FRIENDS,
                text: (0, f.Z)(R)
            }),
            B.push({
                section: x.oh.MUTUAL_GUILDS,
                text: (0, p.Z)(M)
            })),
        B
    );
}
