"use strict";
n.d(t, { Ay: () => _, SB: () => h }), n(321073);
var i = n(469993),
    s = n(836039),
    l = n(979816),
    r = n(567305),
    a = n(555325),
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
            (0, a.V9)({
                guild: t,
                isOwner: f,
                canManageGuildRoleSubscriptions: (0, a.X9)(t),
                isGuildEligibleForRoleSubscriptions: (0, r.OV)(t.id),
                isExpeditedMonetizationOnboardingGuild: (0, i.Sm)(t),
                isUserInCreatorMonetizationEligibleCountry: (0, i.Z1)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, s.mk)(t.id),
            }),
        b = { ...e, monetizationPredicate: E },
        T = [];
    T.push({ section: g, label: "" !== t.name ? t.name : u.intl.string(u.t["154/bL"]) }),
        T.push(m(c.BEX.PROFILE, b)),
        T.push(m(c.BEX.TAG, b)),
        T.push(m(c.BEX.ENGAGEMENT, b)),
        T.push(m(c.BEX.BOOST_PERKS, b)),
        N &&
            (T.push({ section: x }),
            T.push({ section: g, label: u.intl.string(u.t.m6lkGy) }),
            T.push(m(c.BEX.EMOJI, b)),
            T.push(m(c.BEX.STICKERS, b)),
            T.push(m(c.BEX.SOUNDBOARD, b))),
        (n || h || p || j) &&
            (T.push({ section: x }),
            T.push({ section: g, label: u.intl.string(u.t.bMAKMK) }),
            T.push(m(c.BEX.MEMBERS, b)),
            T.push(m(c.BEX.ROLES, b)),
            T.push(m(c.BEX.INVITES, b)),
            T.push(m(c.BEX.ACCESS, b))),
        T.push({ section: x }),
        T.push({ section: g, label: u.intl.string(u.t.wF3KJy) }),
        T.push(m(c.BEX.INTEGRATIONS, b)),
        T.push(m(c.BEX.APP_DIRECTORY, b));
    let C = !t.features.has(c.GuildFeatures.COMMUNITY) && ((0, l.hX)(t.id) || (0, l.i_)(t.id));
    (n || d || _ || C) &&
        (T.push({ section: x }),
        T.push({ section: g, label: u.intl.string(u.t["5tbTdV"]) }),
        T.push(m(c.BEX.SAFETY, b)),
        T.push(m(c.BEX.MODERATION, b)),
        T.push(m(c.BEX.AUDIT_LOG, b)),
        T.push(m(c.BEX.BANS, b)),
        T.push(m(c.BEX.GUILD_AUTOMOD, b)));
    let I = t.features.has(c.GuildFeatures.COMMUNITY) && A,
        v = E();
    return (
        (n || I || v) &&
            (T.push({ section: x }),
            T.push(m(c.BEX.COMMUNITY, b)),
            T.push(m(c.BEX.ONBOARDING, b)),
            T.push(m(c.BEX.ANALYTICS, b)),
            T.push(m(c.BEX.COMMUNITY_WELCOME, b)),
            T.push(m(c.BEX.DISCOVERY_LANDING_PAGE, b)),
            T.push(m(c.BEX.ROLE_SUBSCRIPTIONS, b)),
            T.push(m(c.BEX.GUILD_PRODUCTS, b)),
            T.push(m(c.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, b))),
        T.push({ section: x }),
        T.push(m(c.BEX.GUILD_TEMPLATES, b)),
        T.push(m(c.BEX.DELETE, b)),
        T.filter(o.Vq)
    );
}
let _ = { generateSections: h };
