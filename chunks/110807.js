n.d(t, {
    Ay: () => p,
    SB: () => m,
}),
    n(321073);
var r = n(469993),
    i = n(836039),
    l = n(979816),
    s = n(567305),
    a = n(555325),
    c = n(403362),
    o = n(91168),
    d = n(652215),
    u = n(985018);
let { getSectionDefinition: f } = o.A,
    g = "HEADER",
    b = "DIVIDER";

function m(e) {
    var t, n;
    let {
            guild: o,
            canManageGuild: m,
            canViewAuditLog: p,
            canManageRoles: x,
            canManageBans: h,
            canAccessMembersPage: j,
            canViewGuildAnalytics: O,
            isOwner: y,
            isGuildAdmin: v,
            canManageGuildExpressions: A,
        } = e,
        E = () =>
            (0, a.V9)({
                guild: o,
                isOwner: y,
                canManageGuildRoleSubscriptions: (0, a.X9)(o),
                isMonetizationWaitlistEnabledForGuild: (0, r.Kw)(o.id),
                isGuildEligibleForRoleSubscriptions: (0, s.OV)(o.id),
                isExpeditedMonetizationOnboardingGuild: (0, r.Sm)(o),
                isUserInCreatorMonetizationEligibleCountry: (0, r.Z1)(),
                shouldRestrictUpdatingRoleSubscriptionSettings: (0, i.mk)(o.id),
            }),
        N =
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, e)),
            (n = n =
                {
                    monetizationPredicate: E,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var r = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, r);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        _ = [];
    _.push({
        section: g,
        label: "" !== o.name ? o.name : u.intl.string(u.t["154/bL"]),
    }),
        _.push(f(d.BEX.PROFILE, N)),
        _.push(f(d.BEX.TAG, N)),
        _.push(f(d.BEX.ENGAGEMENT, N)),
        _.push(f(d.BEX.BOOST_PERKS, N)),
        A &&
            (_.push({
                section: b,
            }),
            _.push({
                section: g,
                label: u.intl.string(u.t.m6lkGy),
            }),
            _.push(f(d.BEX.EMOJI, N)),
            _.push(f(d.BEX.STICKERS, N)),
            _.push(f(d.BEX.SOUNDBOARD, N))),
        (m || x || j || v) &&
            (_.push({
                section: b,
            }),
            _.push({
                section: g,
                label: u.intl.string(u.t.bMAKMK),
            }),
            _.push(f(d.BEX.MEMBERS, N)),
            _.push(f(d.BEX.ROLES, N)),
            _.push(f(d.BEX.INVITES, N)),
            _.push(f(d.BEX.ACCESS, N))),
        _.push({
            section: b,
        }),
        _.push({
            section: g,
            label: u.intl.string(u.t.wF3KJy),
        }),
        _.push(f(d.BEX.INTEGRATIONS, N)),
        _.push(f(d.BEX.APP_DIRECTORY, N));
    let S = !o.features.has(d.GuildFeatures.COMMUNITY) && ((0, l.hX)(o.id) || (0, l.i_)(o.id));
    (m || p || h || S) &&
        (_.push({
            section: b,
        }),
        _.push({
            section: g,
            label: u.intl.string(u.t["5tbTdV"]),
        }),
        _.push(f(d.BEX.SAFETY, N)),
        _.push(f(d.BEX.MODERATION, N)),
        _.push(f(d.BEX.AUDIT_LOG, N)),
        _.push(f(d.BEX.BANS, N)),
        _.push(f(d.BEX.GUILD_AUTOMOD, N)));
    let T = o.features.has(d.GuildFeatures.COMMUNITY) && O,
        I = E();
    return (
        (m || T || I) &&
            (_.push({
                section: b,
            }),
            _.push(f(d.BEX.COMMUNITY, N)),
            _.push(f(d.BEX.ONBOARDING, N)),
            _.push(f(d.BEX.ANALYTICS, N)),
            _.push(f(d.BEX.COMMUNITY_WELCOME, N)),
            _.push(f(d.BEX.DISCOVERY_LANDING_PAGE, N)),
            _.push(f(d.BEX.ROLE_SUBSCRIPTIONS, N)),
            _.push(f(d.BEX.GUILD_PRODUCTS, N)),
            _.push(f(d.BEX.ROLE_SUBSCRIPTIONS_STORE_PAGE, N))),
        _.push({
            section: b,
        }),
        _.push(f(d.BEX.GUILD_TEMPLATES, N)),
        _.push(f(d.BEX.DELETE, N)),
        _.filter(c.Vq)
    );
}
let p = {
    generateSections: m,
};
