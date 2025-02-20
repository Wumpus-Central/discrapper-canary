n.d(t, {
    $D: () => g,
    H2: () => v,
    MO: () => p,
    X$: () => f,
    d5: () => c
});
var i,
    r = n(442837),
    l = n(223892),
    o = n(674180),
    s = n(496675),
    a = n(594174),
    u = n(923726),
    d = n(981631),
    c = (((i = {})[(i.NONE = 0)] = 'NONE'), (i[(i.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (i[(i.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (i[(i.VISIBLE = 3)] = 'VISIBLE'), i);
function h(e) {
    if (e.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: i, isGuildEligibleForRoleSubscriptions: r, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: o, shouldRestrictUpdatingRoleSubscriptionSettings: s } = e;
            return !!i && (!s || !!n) && (!!(t.hasFeature(d.oNc.CREATOR_MONETIZABLE) || t.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(d.oNc.COMMUNITY) && (!!r || !!l) && n && o));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: i, isMonetizationWaitlistEnabledForGuild: r, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: o } = e;
    return n && !i && r ? 1 : n && r && (l || o) && !t.hasFeature(d.oNc.COMMUNITY) ? 2 : 0;
}
function f(e) {
    return 0 !== h(e);
}
function p(e) {
    let t = (0, u.Bt)(null == e ? void 0 : e.id),
        n = (0, l.Ob)(e),
        i = (0, l.gS)(null == e ? void 0 : e.id),
        s = g(e),
        d = (0, r.e7)([a.default], () => {
            let t = a.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        c = (0, l.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: f } = (0, o.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : h({
              guild: e,
              isOwner: d,
              canManageGuildRoleSubscriptions: s,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: c,
              shouldRestrictUpdatingRoleSubscriptionSettings: f
          });
}
function g(e) {
    return (0, r.e7)([s.Z], () => v(e), [e]);
}
function v(e) {
    return null != e && s.Z.can(d.Plq.ADMINISTRATOR, e);
}
