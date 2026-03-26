"use strict";
n.d(t, { Ay: () => h, SB: () => x }), n(321073);
var i = n(469993),
    s = n(836039),
    l = n(979816),
    r = n(555325),
    a = n(403362),
    o = n(91168),
    d = n(652215),
    c = n(985018);
let { getSectionDefinition: u } = o.A,
    m = "HEADER",
    g = "DIVIDER";
function x(e) {
    let {
            guild: t,
            canManageGuild: n,
            canViewAuditLog: o,
            canManageRoles: x,
            canManageBans: h,
            canAccessMembersPage: _,
            canViewGuildAnalytics: p,
            isOwner: A,
            isGuildAdmin: f,
            canManageGuildExpressions: j,
        } = e,
        N = () =>
            (0, r.V9)({
                guild: t,
                isOwner: A,
                canManageGuildRoleSubscriptions: (0, r.X9)(t),
                isUserInCreatorMonetizationEligibleCountry: (0, i.Z1)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.mk)(t.id),
            }),
        E = { ...e, monetizationPredicate: N },
        b = [];
    b.push({ section: m, label: "" !== t.name ? t.name : c.intl.string(c.t["154/bL"]) }),
        b.push(u(d.BEX.PROFILE, E)),
        b.push(u(d.BEX.TAG, E)),
        b.push(u(d.BEX.ENGAGEMENT, E)),
        b.push(u(d.BEX.BOOST_PERKS, E)),
        j &&
            (b.push({ section: g }),
            b.push({ section: m, label: c.intl.string(c.t.m6lkGy) }),
            b.push(u(d.BEX.EMOJI, E)),
            b.push(u(d.BEX.STICKERS, E)),
            b.push(u(d.BEX.SOUNDBOARD, E))),
        (n || x || _ || f) &&
            (b.push({ section: g }),
            b.push({ section: m, label: c.intl.string(c.t.bMAKMK) }),
            b.push(u(d.BEX.MEMBERS, E)),
            b.push(u(d.BEX.ROLES, E)),
            b.push(u(d.BEX.INVITES, E)),
            b.push(u(d.BEX.ACCESS, E))),
        b.push({ section: g }),
        b.push({ section: m, label: c.intl.string(c.t.wF3KJy) }),
        b.push(u(d.BEX.INTEGRATIONS, E)),
        b.push(u(d.BEX.APP_DIRECTORY, E));
    let C = !t.features.has(d.GuildFeatures.COMMUNITY) && ((0, l.hX)(t.id) || (0, l.i_)(t.id));
    (n || o || h || C) &&
        (b.push({ section: g }),
        b.push({ section: m, label: c.intl.string(c.t["5tbTdV"]) }),
        b.push(u(d.BEX.SAFETY, E)),
        b.push(u(d.BEX.MODERATION, E)),
        b.push(u(d.BEX.AUDIT_LOG, E)),
        b.push(u(d.BEX.BANS, E)),
        b.push(u(d.BEX.GUILD_AUTOMOD, E)));
    let T = t.features.has(d.GuildFeatures.COMMUNITY) && p,
        I = N();
    return (
        (n || T || I) &&
            (b.push({ section: g }),
            b.push(u(d.BEX.COMMUNITY, E)),
            b.push(u(d.BEX.ONBOARDING, E)),
            b.push(u(d.BEX.ANALYTICS, E)),
            b.push(u(d.BEX.COMMUNITY_WELCOME, E)),
            b.push(u(d.BEX.DISCOVERY_LANDING_PAGE, E)),
            b.push(u(d.BEX.ROLE_SUBSCRIPTIONS, E)),
            b.push(u(d.BEX.GUILD_PRODUCTS, E)),
            b.push(u(d.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, E))),
        b.push({ section: g }),
        b.push(u(d.BEX.GUILD_TEMPLATES, E)),
        b.push(u(d.BEX.DELETE, E)),
        b.filter(a.Vq)
    );
}
let h = { generateSections: x };
