n.d(t, {
    EI: () => m,
    V9: () => _,
    X9: () => g,
    dp: () => h,
    qS: () => d,
});
var r = n(311907),
    i = n(469993),
    a = n(465932),
    s = n(260509),
    o = n(576705),
    l = n(287809),
    c = n(567305),
    u = n(652215),
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
        isUserInCreatorMonetizationEligibleCountry: s,
        shouldRestrictUpdatingRoleSubscriptionSettings: o,
    } = e;
    return (
        !!r &&
        (!o || !!n) &&
        (!!(
            t.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
        ) ||
            (!!t.features.has(u.GuildFeatures.COMMUNITY) && (!!i || !!a) && n && s))
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
        isExpeditedMonetizationOnboardingGuild: s,
    } = e;
    return n && !r && i ? 1 : n && i && (a || s) && !t.features.has(u.GuildFeatures.COMMUNITY) ? 2 : 0;
}

function _(e) {
    return 0 !== p(e);
}

function h(e) {
    let t = (0, c.HT)(null == e ? void 0 : e.id),
        n = (0, i.ME)(e),
        o = (0, i.Li)(null == e ? void 0 : e.id),
        u = m(e),
        d = (0, r.bG)([l.default], () => {
            let t = l.default.getCurrentUser();
            return null != e && (0, s.bM)(e, t);
        }),
        f = (0, i.oS)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, a.nq)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : p({
              guild: e,
              isOwner: d,
              canManageGuildRoleSubscriptions: u,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: o,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: f,
              shouldRestrictUpdatingRoleSubscriptionSettings: _,
          });
}

function m(e) {
    return (0, r.bG)([o.A], () => g(e), [e]);
}

function g(e) {
    return null != e && o.A.can(u.xBc.ADMINISTRATOR, e);
}
