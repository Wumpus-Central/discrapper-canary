"use strict";
n.d(t, { Ay: () => _, SB: () => h }), n(321073);
var i = n(469993),
    s = n(836039),
    l = n(979816),
    r = n(555325),
    a = n(472282),
    o = n(403362),
    d = n(91168),
    c = n(652215),
    u = n(985018);
let { getSectionDefinition: m } = d.A,
    g = "HEADER",
    x = "DIVIDER";
function h(e) {
    let {
            guild: t,
            canManageGuild: n,
            canViewAuditLog: d,
            canManageRoles: h,
            canManageBans: _,
            canAccessMembersPage: p,
            canViewGuildAnalytics: A,
            isOwner: f,
            isGuildAdmin: j,
            canManageGuildExpressions: N,
        } = e,
        E = () =>
            (0, r.V9)({
                guild: t,
                isOwner: f,
                canManageGuildRoleSubscriptions: (0, r.X9)(t),
                isUserInCreatorMonetizationEligibleCountry: (0, i.Z1)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.mk)(t.id),
            }),
        C = { ...e, monetizationPredicate: E },
        b = [];
    b.push({ section: g, label: "" !== t.name ? t.name : u.intl.string(u.t["154/bL"]) }),
        b.push(m(c.BEX.PROFILE, C)),
        b.push(m(c.BEX.TAG, C)),
        b.push(m(c.BEX.ENGAGEMENT, C)),
        b.push(m(c.BEX.BOOST_PERKS, C));
    let T =
        n &&
        t.features.has(c.GuildFeatures.VERIFIED) &&
        a.A.getCurrentConfig({ guildId: t.id, location: "generateSections" }).enabled;
    (N || T) &&
        (b.push({ section: x }),
        b.push({ section: g, label: u.intl.string(u.t.m6lkGy) }),
        b.push(m(c.BEX.EMOJI, C)),
        b.push(m(c.BEX.STICKERS, C)),
        b.push(m(c.BEX.SOUNDBOARD, C)),
        b.push(m(c.BEX.OFFICIAL_MESSAGES, C))),
        (n || h || p || j) &&
            (b.push({ section: x }),
            b.push({ section: g, label: u.intl.string(u.t.bMAKMK) }),
            b.push(m(c.BEX.MEMBERS, C)),
            b.push(m(c.BEX.ROLES, C)),
            b.push(m(c.BEX.INVITES, C)),
            b.push(m(c.BEX.ACCESS, C))),
        b.push({ section: x }),
        b.push({ section: g, label: u.intl.string(u.t.wF3KJy) }),
        b.push(m(c.BEX.INTEGRATIONS, C)),
        b.push(m(c.BEX.APP_DIRECTORY, C));
    let I = !t.features.has(c.GuildFeatures.COMMUNITY) && ((0, l.hX)(t.id) || (0, l.i_)(t.id));
    (n || d || _ || I) &&
        (b.push({ section: x }),
        b.push({ section: g, label: u.intl.string(u.t["5tbTdV"]) }),
        b.push(m(c.BEX.SAFETY, C)),
        b.push(m(c.BEX.MODERATION, C)),
        b.push(m(c.BEX.AUDIT_LOG, C)),
        b.push(m(c.BEX.BANS, C)),
        b.push(m(c.BEX.GUILD_AUTOMOD, C)));
    let v = t.features.has(c.GuildFeatures.COMMUNITY) && A,
        S = E();
    return (
        (n || v || S) &&
            (b.push({ section: x }),
            b.push(m(c.BEX.COMMUNITY, C)),
            b.push(m(c.BEX.ONBOARDING, C)),
            b.push(m(c.BEX.ANALYTICS, C)),
            b.push(m(c.BEX.COMMUNITY_WELCOME, C)),
            b.push(m(c.BEX.DISCOVERY_LANDING_PAGE, C)),
            b.push(m(c.BEX.ROLE_SUBSCRIPTIONS, C)),
            b.push(m(c.BEX.GUILD_PRODUCTS, C)),
            b.push(m(c.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, C))),
        b.push({ section: x }),
        b.push(m(c.BEX.GUILD_TEMPLATES, C)),
        b.push(m(c.BEX.DELETE, C)),
        b.filter(o.Vq)
    );
}
let _ = { generateSections: h };
