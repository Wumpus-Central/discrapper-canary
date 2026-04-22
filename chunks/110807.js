n.d(t, { Ay: () => _, SB: () => x }), n(321073);
var i = n(469993),
    l = n(836039),
    s = n(979816),
    r = n(555325),
    a = n(521427),
    o = n(403362),
    d = n(91168),
    c = n(652215),
    u = n(985018);
let { getSectionDefinition: m } = d.A,
    g = "HEADER",
    h = "DIVIDER";
function x(e) {
    let {
            guild: t,
            canManageGuild: n,
            canViewAuditLog: d,
            canManageRoles: x,
            canManageBans: _,
            canAccessMembersPage: p,
            canViewGuildAnalytics: A,
            isOwner: E,
            isGuildAdmin: f,
            canManageGuildExpressions: j,
        } = e,
        N = () =>
            (0, r.V9)({
                guild: t,
                isOwner: E,
                canManageGuildRoleSubscriptions: (0, r.X9)(t),
                isUserInCreatorMonetizationEligibleCountry: (0, i.Z1)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, l.mk)(t.id),
            }),
        I = { ...e, monetizationPredicate: N },
        C = [];
    C.push({ section: g, label: "" !== t.name ? t.name : u.intl.string(u.t["154/bL"]) }),
        C.push(m(c.BEX.PROFILE, I)),
        C.push(m(c.BEX.TAG, I)),
        C.push(m(c.BEX.GUILD_THEME, I)),
        C.push(m(c.BEX.ENGAGEMENT, I)),
        C.push(m(c.BEX.BOOST_PERKS, I));
    let b = n && (0, a.GP)(t, "generateSections");
    (j || b) &&
        (C.push({ section: h }),
        C.push({ section: g, label: u.intl.string(u.t.m6lkGy) }),
        C.push(m(c.BEX.EMOJI, I)),
        C.push(m(c.BEX.STICKERS, I)),
        C.push(m(c.BEX.SOUNDBOARD, I)),
        C.push(m(c.BEX.OFFICIAL_MESSAGES, I))),
        (n || x || p || f) &&
            (C.push({ section: h }),
            C.push({ section: g, label: u.intl.string(u.t.bMAKMK) }),
            C.push(m(c.BEX.MEMBERS, I)),
            C.push(m(c.BEX.ROLES, I)),
            C.push(m(c.BEX.INVITES, I)),
            C.push(m(c.BEX.ACCESS, I))),
        C.push({ section: h }),
        C.push({ section: g, label: u.intl.string(u.t.wF3KJy) }),
        C.push(m(c.BEX.INTEGRATIONS, I)),
        C.push(m(c.BEX.APP_DIRECTORY, I));
    let v = !t.features.has(c.GuildFeatures.COMMUNITY) && ((0, s.hX)(t.id) || (0, s.i_)(t.id));
    (n || d || _ || v) &&
        (C.push({ section: h }),
        C.push({ section: g, label: u.intl.string(u.t["5tbTdV"]) }),
        C.push(m(c.BEX.SAFETY, I)),
        C.push(m(c.BEX.MODERATION, I)),
        C.push(m(c.BEX.AUDIT_LOG, I)),
        C.push(m(c.BEX.BANS, I)),
        C.push(m(c.BEX.GUILD_AUTOMOD, I)));
    let S = t.features.has(c.GuildFeatures.COMMUNITY) && A,
        T = N();
    return (
        (n || S || T) &&
            (C.push({ section: h }),
            C.push(m(c.BEX.COMMUNITY, I)),
            C.push(m(c.BEX.ONBOARDING, I)),
            C.push(m(c.BEX.ANALYTICS, I)),
            C.push(m(c.BEX.COMMUNITY_WELCOME, I)),
            C.push(m(c.BEX.DISCOVERY_LANDING_PAGE, I)),
            C.push(m(c.BEX.ROLE_SUBSCRIPTIONS, I)),
            C.push(m(c.BEX.GUILD_PRODUCTS, I)),
            C.push(m(c.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, I))),
        C.push({ section: h }),
        C.push(m(c.BEX.GUILD_TEMPLATES, I)),
        C.push(m(c.BEX.DELETE, I)),
        C.filter(o.Vq)
    );
}
let _ = { generateSections: x };
