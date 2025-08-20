n.d(t, { Z: () => O }), n(539854);
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
    h = n(639777),
    g = n(330791),
    m = n(443063),
    b = n(981631);
function O(e) {
    let t = (0, p.Z)(e.id),
        n = (0, l.W)(e.id),
        O = (0, d.j0)(e.id),
        _ = (0, i.u)(e),
        y = (0, c.g)(e.id),
        j = (0, r.e7)([a.Z], () => a.Z.getNewMemberActions(e.id), [e.id]),
        v = (0, u.Z)(e.id),
        C = (0, s.PE)(e.id),
        x = (0, o.n2)(e.id),
        E = [],
        S = e.features.has(b.oNc.HUB),
        I = e.features.has(b.oNc.COMMUNITY),
        P = (0, g.lN)(!(0, f.r1)(e.id)),
        N = e.features.has(b.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY),
        w = (0, h.Z)(e.id);
    return (
        S && E.push(m.z.GUILD_HUB_HEADER_OPTIONS),
        !C && y && v && null != j && j.length > 0
            ? E.push(m.z.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR)
            : e.premiumProgressBarEnabled && E.push(m.z.GUILD_PREMIUM_PROGRESS_BAR),
        !S && y && E.push(m.z.GUILD_HOME),
        t && E.push(m.z.GUILD_SCHEDULED_EVENTS),
        !S && I && P && E.push(m.z.CHANNELS_AND_ROLES),
        O && E.push(m.z.GUILD_ROLE_SUBSCRIPTIONS),
        _ && E.push(m.z.GUILD_SHOP),
        ((x && (I || N)) || (n && e.features.has(b.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL))) &&
            E.push(m.z.GUILD_MOD_DASH_MEMBER_SAFETY),
        w && E.push(m.z.GUILD_BOOSTS),
        E
    );
}
