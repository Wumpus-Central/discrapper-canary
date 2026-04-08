"use strict";
n.d(t, { Ay: () => _, SB: () => h }), n(321073);
var i = n(469993),
    s = n(836039),
    l = n(979816),
    r = n(555325),
    a = n(475481),
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
        T = [];
    T.push({ section: g, label: "" !== t.name ? t.name : u.intl.string(u.t["154/bL"]) }),
        T.push(m(c.BEX.PROFILE, C)),
        T.push(m(c.BEX.TAG, C)),
        T.push(m(c.BEX.ENGAGEMENT, C)),
        T.push(m(c.BEX.BOOST_PERKS, C));
    let b = n && (0, a.GP)(t, "generateSections");
    (N || b) &&
        (T.push({ section: x }),
        T.push({ section: g, label: u.intl.string(u.t.m6lkGy) }),
        T.push(m(c.BEX.EMOJI, C)),
        T.push(m(c.BEX.STICKERS, C)),
        T.push(m(c.BEX.SOUNDBOARD, C)),
        T.push(m(c.BEX.OFFICIAL_MESSAGES, C))),
        (n || h || p || j) &&
            (T.push({ section: x }),
            T.push({ section: g, label: u.intl.string(u.t.bMAKMK) }),
            T.push(m(c.BEX.MEMBERS, C)),
            T.push(m(c.BEX.ROLES, C)),
            T.push(m(c.BEX.INVITES, C)),
            T.push(m(c.BEX.ACCESS, C))),
        T.push({ section: x }),
        T.push({ section: g, label: u.intl.string(u.t.wF3KJy) }),
        T.push(m(c.BEX.INTEGRATIONS, C)),
        T.push(m(c.BEX.APP_DIRECTORY, C));
    let I = !t.features.has(c.GuildFeatures.COMMUNITY) && ((0, l.hX)(t.id) || (0, l.i_)(t.id));
    (n || d || _ || I) &&
        (T.push({ section: x }),
        T.push({ section: g, label: u.intl.string(u.t["5tbTdV"]) }),
        T.push(m(c.BEX.SAFETY, C)),
        T.push(m(c.BEX.MODERATION, C)),
        T.push(m(c.BEX.AUDIT_LOG, C)),
        T.push(m(c.BEX.BANS, C)),
        T.push(m(c.BEX.GUILD_AUTOMOD, C)));
    let v = t.features.has(c.GuildFeatures.COMMUNITY) && A,
        S = E();
    return (
        (n || v || S) &&
            (T.push({ section: x }),
            T.push(m(c.BEX.COMMUNITY, C)),
            T.push(m(c.BEX.ONBOARDING, C)),
            T.push(m(c.BEX.ANALYTICS, C)),
            T.push(m(c.BEX.COMMUNITY_WELCOME, C)),
            T.push(m(c.BEX.DISCOVERY_LANDING_PAGE, C)),
            T.push(m(c.BEX.ROLE_SUBSCRIPTIONS, C)),
            T.push(m(c.BEX.GUILD_PRODUCTS, C)),
            T.push(m(c.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, C))),
        T.push({ section: x }),
        T.push(m(c.BEX.GUILD_TEMPLATES, C)),
        T.push(m(c.BEX.DELETE, C)),
        T.filter(o.Vq)
    );
}
let _ = { generateSections: h };
