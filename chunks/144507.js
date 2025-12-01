n.d(t, {
    $D: () => h,
    H2: () => g,
    MO: () => m,
    X$: () => _,
    d5: () => d,
});
var r = n(442837),
    i = n(223892),
    a = n(674180),
    o = n(601964),
    s = n(496675),
    l = n(594174),
    c = n(923726),
    u = n(981631),
    d = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.WAITLIST_ONLY = 1)] = "WAITLIST_ONLY"),
            (e[(e.NEEDS_COMMUNITY = 2)] = "NEEDS_COMMUNITY"),
            (e[(e.VISIBLE = 3)] = "VISIBLE"),
            e
        );
    })({});
function f(e) {
    let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: r,
        isGuildEligibleForRoleSubscriptions: i,
        isExpeditedMonetizationOnboardingGuild: a,
        isUserInCreatorMonetizationEligibleCountry: o,
        shouldRestrictUpdatingRoleSubscriptionSettings: s,
    } = e;
    return (
        !!r &&
        (!s || !!n) &&
        (!!(
            t.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
        ) ||
            (!!t.features.has(u.GuildFeatures.COMMUNITY) && (!!i || !!a) && n && o))
    );
}
function p(e) {
    if (e.guild.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (f(e)) return 3;
    let {
        guild: t,
        isOwner: n,
        isUserInCreatorMonetizationEligibleCountry: r,
        isMonetizationWaitlistEnabledForGuild: i,
        isGuildEligibleForRoleSubscriptions: a,
        isExpeditedMonetizationOnboardingGuild: o,
    } = e;
    return n && !r && i ? 1 : n && i && (a || o) && !t.features.has(u.GuildFeatures.COMMUNITY) ? 2 : 0;
}
function _(e) {
    return 0 !== p(e);
}
function m(e) {
    let t = (0, c.Bt)(null == e ? void 0 : e.id),
        n = (0, i.Ob)(e),
        s = (0, i.gS)(null == e ? void 0 : e.id),
        u = h(e),
        d = (0, r.e7)([l.default], () => {
            let t = l.default.getCurrentUser();
            return null != e && (0, o.eM)(e, t);
        }),
        f = (0, i.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, a.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : p({
              guild: e,
              isOwner: d,
              canManageGuildRoleSubscriptions: u,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: s,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: f,
              shouldRestrictUpdatingRoleSubscriptionSettings: _,
          });
}
function h(e) {
    return (0, r.e7)([s.Z], () => g(e), [e]);
}
function g(e) {
    return null != e && s.Z.can(u.Plq.ADMINISTRATOR, e);
}
