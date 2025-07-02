n.d(t, {
    $D: () => _,
    H2: () => g,
    MO: () => f,
    X$: () => m,
    d5: () => d
});
var r,
    i = n(442837),
    l = n(223892),
    a = n(674180),
    o = n(496675),
    s = n(594174),
    c = n(923726),
    u = n(981631),
    d = (((r = {})[(r.NONE = 0)] = 'NONE'), (r[(r.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (r[(r.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (r[(r.VISIBLE = 3)] = 'VISIBLE'), r);
function p(e) {
    if (e.guild.hasFeature(u.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: r, isGuildEligibleForRoleSubscriptions: i, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: a, shouldRestrictUpdatingRoleSubscriptionSettings: o } = e;
            return !!r && (!o || !!n) && (!!(t.hasFeature(u.oNc.CREATOR_MONETIZABLE) || t.hasFeature(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(u.oNc.COMMUNITY) && (!!i || !!l) && n && a));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: r, isMonetizationWaitlistEnabledForGuild: i, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: a } = e;
    return n && !r && i ? 1 : n && i && (l || a) && !t.hasFeature(u.oNc.COMMUNITY) ? 2 : 0;
}
function m(e) {
    return 0 !== p(e);
}
function f(e) {
    let t = (0, c.Bt)(null == e ? void 0 : e.id),
        n = (0, l.Ob)(e),
        r = (0, l.gS)(null == e ? void 0 : e.id),
        o = _(e),
        u = (0, i.e7)([s.default], () => {
            let t = s.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        d = (0, l.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: m } = (0, a.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : p({
              guild: e,
              isOwner: u,
              canManageGuildRoleSubscriptions: o,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: r,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: m
          });
}
function _(e) {
    return (0, i.e7)([o.Z], () => g(e), [e]);
}
function g(e) {
    return null != e && o.Z.can(u.Plq.ADMINISTRATOR, e);
}
