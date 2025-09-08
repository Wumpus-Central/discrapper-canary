n.d(t, { Z: () => _ }), n(539854);
var r = n(399606),
    i = n(897345);
n(265153);
var l = n(697379),
    o = n(241559),
    a = n(563534),
    s = n(655359),
    c = n(931261),
    u = n(460347),
    d = n(994592),
    p = n(265418),
    f = n(398758),
    h = n(634952),
    g = n(639777),
    m = n(594174),
    b = n(330791),
    O = n(443063),
    y = n(981631);
function _(e) {
    let t = (0, p.Z)(e.id),
        n = (0, l.W)(e.id),
        _ = (0, d.j0)(e.id),
        v = (0, i.u)(e),
        j = (0, c.g)(e.id),
        x = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        C = (0, u.Z)(e.id),
        E = (0, s.PE)(e.id),
        S = (0, o.n2)(e.id),
        P = [],
        I = e.features.has(y.oNc.HUB),
        N = e.features.has(y.oNc.COMMUNITY),
        Z = (0, b.l)(!(0, f.r1)(e.id)),
        w = e.features.has(y.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        T = (0, g.Z)(e.id),
        A = (0, h.A0)(e.id, "useGuildActionRows"),
        R = e.features.has(y.oNc.GAME_SERVER_HOSTING),
        D = (0, r.e7)([m.default], () => {
            var e, t;
            return null != (t = null == (e = m.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
        });
    return (
        I && P.push(O.z.GUILD_HUB_HEADER_OPTIONS),
        !E && j && C && null != x && x.length > 0
            ? P.push(O.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && P.push(O.z.GUILD_PREMIUM_PROGRESS_BAR),
        !I && j && P.push(O.z.GUILD_HOME),
        t && P.push(O.z.GUILD_SCHEDULED_EVENTS),
        !I && N && Z && P.push(O.z.CHANNELS_AND_ROLES),
        _ && P.push(O.z.GUILD_ROLE_SUBSCRIPTIONS),
        v && P.push(O.z.GUILD_SHOP),
        ((S && (N || w)) || (n && e.features.has(y.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            P.push(O.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        T && P.push(O.z.GUILD_BOOSTS),
        A && (R || D) && P.push(O.z.PORTKEY),
        P
    );
}
