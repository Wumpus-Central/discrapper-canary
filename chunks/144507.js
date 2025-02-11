n.d(t, {
    $D: () => f,
    H2: () => C,
    MO: () => p,
    X$: () => g,
    d5: () => c
});
var i,
    l = n(442837),
    r = n(223892),
    s = n(674180),
    a = n(496675),
    o = n(594174),
    d = n(923726),
    u = n(981631),
    c = (((i = {})[(i.NONE = 0)] = 'NONE'), (i[(i.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (i[(i.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (i[(i.VISIBLE = 3)] = 'VISIBLE'), i);
function h(e) {
    if (e.guild.hasFeature(u.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: i, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: r, isUserInCreatorMonetizationEligibleCountry: s, shouldRestrictUpdatingRoleSubscriptionSettings: a } = e;
            return !!i && (!a || !!n) && (!!(t.hasFeature(u.oNc.CREATOR_MONETIZABLE) || t.hasFeature(u.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(u.oNc.COMMUNITY) && (!!l || !!r) && n && s));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: i, isMonetizationWaitlistEnabledForGuild: l, isGuildEligibleForRoleSubscriptions: r, isExpeditedMonetizationOnboardingGuild: s } = e;
    return n && !i && l ? 1 : n && l && (r || s) && !t.hasFeature(u.oNc.COMMUNITY) ? 2 : 0;
}
function g(e) {
    return 0 !== h(e);
}
function p(e) {
    let t = (0, d.Bt)(null == e ? void 0 : e.id),
        n = (0, r.Ob)(e),
        i = (0, r.gS)(null == e ? void 0 : e.id),
        a = f(e),
        u = (0, l.e7)([o.default], () => {
            let t = o.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        c = (0, r.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: g } = (0, s.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : h({
              guild: e,
              isOwner: u,
              canManageGuildRoleSubscriptions: a,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: c,
              shouldRestrictUpdatingRoleSubscriptionSettings: g
          });
}
function f(e) {
    return (0, l.e7)([a.Z], () => C(e), [e]);
}
function C(e) {
    return null != e && a.Z.can(u.Plq.ADMINISTRATOR, e);
}
