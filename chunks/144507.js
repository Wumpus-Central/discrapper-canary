n.d(t, {
    $D: () => h,
    H2: () => g,
    MO: () => _,
    X$: () => f,
    d5: () => p
});
var r,
    i = n(442837),
    l = n(223892),
    a = n(674180),
    o = n(601964),
    s = n(496675),
    c = n(594174),
    u = n(923726),
    d = n(981631),
    p = (((r = {})[(r.NONE = 0)] = 'NONE'), (r[(r.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (r[(r.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (r[(r.VISIBLE = 3)] = 'VISIBLE'), r);
function m(e) {
    if (e.guild.features.has(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: r, isGuildEligibleForRoleSubscriptions: i, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: a, shouldRestrictUpdatingRoleSubscriptionSettings: o } = e;
            return !!r && (!o || !!n) && (!!(t.features.has(d.oNc.CREATOR_MONETIZABLE) || t.features.has(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.features.has(d.oNc.COMMUNITY) && (!!i || !!l) && n && a));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: r, isMonetizationWaitlistEnabledForGuild: i, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: a } = e;
    return n && !r && i ? 1 : n && i && (l || a) && !t.features.has(d.oNc.COMMUNITY) ? 2 : 0;
}
function f(e) {
    return 0 !== m(e);
}
function _(e) {
    let t = (0, u.Bt)(null == e ? void 0 : e.id),
        n = (0, l.Ob)(e),
        r = (0, l.gS)(null == e ? void 0 : e.id),
        s = h(e),
        d = (0, i.e7)([c.default], () => {
            let t = c.default.getCurrentUser();
            return null != e && (0, o.eM)(e, t);
        }),
        p = (0, l.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: f } = (0, a.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : m({
              guild: e,
              isOwner: d,
              canManageGuildRoleSubscriptions: s,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: r,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: p,
              shouldRestrictUpdatingRoleSubscriptionSettings: f
          });
}
function h(e) {
    return (0, i.e7)([s.Z], () => g(e), [e]);
}
function g(e) {
    return null != e && s.Z.can(d.Plq.ADMINISTRATOR, e);
}
