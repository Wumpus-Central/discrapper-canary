n.d(t, { Z: () => y }), n(539854);
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
    m = n(330791),
    b = n(443063),
    O = n(981631);
function y(e) {
    let t = (0, p.Z)(e.id),
        n = (0, l.W)(e.id),
        y = (0, d.j0)(e.id),
        _ = (0, i.u)(e),
        j = (0, c.g)(e.id),
        v = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        x = (0, u.Z)(e.id),
        C = (0, s.PE)(e.id),
        E = (0, o.n2)(e.id),
        S = [],
        P = e.features.has(O.oNc.HUB),
        I = e.features.has(O.oNc.COMMUNITY),
        N = (0, m.l)(!(0, f.r1)(e.id)),
        Z = e.features.has(O.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        w = (0, g.Z)(e.id),
        T = (0, h.A0)(e.id, "useGuildActionRows"),
        A = e.features.has(O.oNc.GAME_SERVERS);
    return (
        P && S.push(b.z.GUILD_HUB_HEADER_OPTIONS),
        !C && j && x && null != v && v.length > 0
            ? S.push(b.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && S.push(b.z.GUILD_PREMIUM_PROGRESS_BAR),
        !P && j && S.push(b.z.GUILD_HOME),
        t && S.push(b.z.GUILD_SCHEDULED_EVENTS),
        !P && I && N && S.push(b.z.CHANNELS_AND_ROLES),
        y && S.push(b.z.GUILD_ROLE_SUBSCRIPTIONS),
        _ && S.push(b.z.GUILD_SHOP),
        ((E && (I || Z)) || (n && e.features.has(O.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            S.push(b.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        w && S.push(b.z.GUILD_BOOSTS),
        T && A && S.push(b.z.PORTKEY),
        S
    );
}
