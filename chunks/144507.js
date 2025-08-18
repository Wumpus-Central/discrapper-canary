n.d(t, {
    $D: () => m,
    H2: () => g,
    MO: () => h,
    X$: () => p,
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
        (!!(t.features.has(u.oNc.CREATOR_MONETIZABLE) || t.features.has(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) ||
            (!!t.features.has(u.oNc.COMMUNITY) && (!!i || !!a) && n && o))
    );
}
function _(e) {
    if (e.guild.features.has(u.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (f(e)) return 3;
    let {
        guild: t,
        isOwner: n,
        isUserInCreatorMonetizationEligibleCountry: r,
        isMonetizationWaitlistEnabledForGuild: i,
        isGuildEligibleForRoleSubscriptions: a,
        isExpeditedMonetizationOnboardingGuild: o,
    } = e;
    return n && !r && i ? 1 : n && i && (a || o) && !t.features.has(u.oNc.COMMUNITY) ? 2 : 0;
}
function p(e) {
    return 0 !== _(e);
}
function h(e) {
    let t = (0, c.Bt)(null == e ? void 0 : e.id),
        n = (0, i.Ob)(e),
        s = (0, i.gS)(null == e ? void 0 : e.id),
        u = m(e),
        d = (0, r.e7)([l.default], () => {
            let t = l.default.getCurrentUser();
            return null != e && (0, o.eM)(e, t);
        }),
        f = (0, i.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: p } = (0, a.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : _({
              guild: e,
              isOwner: d,
              canManageGuildRoleSubscriptions: u,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: s,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: f,
              shouldRestrictUpdatingRoleSubscriptionSettings: p,
          });
}
function m(e) {
    return (0, r.e7)([s.Z], () => g(e), [e]);
}
function g(e) {
    return null != e && s.Z.can(u.Plq.ADMINISTRATOR, e);
}
