"use strict";
n.d(t, { Ay: () => _, SB: () => h }), n(321073);
var i = n(469993),
    s = n(836039),
    l = n(979816),
    r = n(555325),
    a = n(521427),
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
            canAccessMembersPage: A,
            canViewGuildAnalytics: p,
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
        T = { ...e, monetizationPredicate: E },
        C = [];
    C.push({ section: g, label: "" !== t.name ? t.name : u.intl.string(u.t["154/bL"]) }),
        C.push(m(c.BEX.PROFILE, T)),
        C.push(m(c.BEX.TAG, T)),
        C.push(m(c.BEX.GUILD_THEME, T)),
        C.push(m(c.BEX.ENGAGEMENT, T)),
        C.push(m(c.BEX.BOOST_PERKS, T));
    let I = n && (0, a.GP)(t, "generateSections");
    (N || I) &&
        (C.push({ section: x }),
        C.push({ section: g, label: u.intl.string(u.t.m6lkGy) }),
        C.push(m(c.BEX.EMOJI, T)),
        C.push(m(c.BEX.STICKERS, T)),
        C.push(m(c.BEX.SOUNDBOARD, T)),
        C.push(m(c.BEX.OFFICIAL_MESSAGES, T))),
        (n || h || A || j) &&
            (C.push({ section: x }),
            C.push({ section: g, label: u.intl.string(u.t.bMAKMK) }),
            C.push(m(c.BEX.MEMBERS, T)),
            C.push(m(c.BEX.ROLES, T)),
            C.push(m(c.BEX.INVITES, T)),
            C.push(m(c.BEX.ACCESS, T))),
        C.push({ section: x }),
        C.push({ section: g, label: u.intl.string(u.t.wF3KJy) }),
        C.push(m(c.BEX.INTEGRATIONS, T)),
        C.push(m(c.BEX.APP_DIRECTORY, T));
    let b = !t.features.has(c.GuildFeatures.COMMUNITY) && ((0, l.hX)(t.id) || (0, l.i_)(t.id));
    (n || d || _ || b) &&
        (C.push({ section: x }),
        C.push({ section: g, label: u.intl.string(u.t["5tbTdV"]) }),
        C.push(m(c.BEX.SAFETY, T)),
        C.push(m(c.BEX.MODERATION, T)),
        C.push(m(c.BEX.AUDIT_LOG, T)),
        C.push(m(c.BEX.BANS, T)),
        C.push(m(c.BEX.GUILD_AUTOMOD, T)));
    let v = t.features.has(c.GuildFeatures.COMMUNITY) && p,
        S = E();
    return (
        (n || v || S) &&
            (C.push({ section: x }),
            C.push(m(c.BEX.COMMUNITY, T)),
            C.push(m(c.BEX.ONBOARDING, T)),
            C.push(m(c.BEX.ANALYTICS, T)),
            C.push(m(c.BEX.COMMUNITY_WELCOME, T)),
            C.push(m(c.BEX.DISCOVERY_LANDING_PAGE, T)),
            C.push(m(c.BEX.ROLE_SUBSCRIPTIONS, T)),
            C.push(m(c.BEX.GUILD_PRODUCTS, T)),
            C.push(m(c.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, T))),
        C.push({ section: x }),
        C.push(m(c.BEX.GUILD_TEMPLATES, T)),
        C.push(m(c.BEX.DELETE, T)),
        C.filter(o.Vq)
    );
}
let _ = { generateSections: h };
