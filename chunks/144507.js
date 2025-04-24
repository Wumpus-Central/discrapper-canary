n.d(t, {
    $D: () => O,
    H2: () => S,
    MO: () => E,
    X$: () => f,
    d5: () => d
});
var r,
    i = n(442837),
    l = n(223892),
    o = n(674180),
    a = n(496675),
    u = n(594174),
    c = n(923726),
    s = n(981631),
    d = (((r = {})[(r.NONE = 0)] = 'NONE'), (r[(r.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (r[(r.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (r[(r.VISIBLE = 3)] = 'VISIBLE'), r);
function p(e) {
    if (e.guild.hasFeature(s.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: r, isGuildEligibleForRoleSubscriptions: i, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: o, shouldRestrictUpdatingRoleSubscriptionSettings: a } = e;
            return !!r && (!a || !!n) && (!!(t.hasFeature(s.oNc.CREATOR_MONETIZABLE) || t.hasFeature(s.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(s.oNc.COMMUNITY) && (!!i || !!l) && n && o));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: r, isMonetizationWaitlistEnabledForGuild: i, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: o } = e;
    return n && !r && i ? 1 : n && i && (l || o) && !t.hasFeature(s.oNc.COMMUNITY) ? 2 : 0;
}
function f(e) {
    return 0 !== p(e);
}
function E(e) {
    let t = (0, c.Bt)(null == e ? void 0 : e.id),
        n = (0, l.Ob)(e),
        r = (0, l.gS)(null == e ? void 0 : e.id),
        a = O(e),
        s = (0, i.e7)([u.default], () => {
            let t = u.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        d = (0, l.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: f } = (0, o.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : p({
              guild: e,
              isOwner: s,
              canManageGuildRoleSubscriptions: a,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: r,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: f
          });
}
function O(e) {
    return (0, i.e7)([a.Z], () => S(e), [e]);
}
function S(e) {
    return null != e && a.Z.can(s.Plq.ADMINISTRATOR, e);
}
