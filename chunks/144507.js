n.d(t, {
    $D: function () {
        return C;
    },
    H2: function () {
        return p;
    },
    MO: function () {
        return g;
    },
    X$: function () {
        return f;
    },
    d5: function () {
        return r;
    }
});
var i,
    r,
    l = n(442837),
    o = n(223892),
    s = n(674180),
    a = n(496675),
    u = n(594174),
    d = n(923726),
    c = n(981631);
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (i[(i.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (i[(i.VISIBLE = 3)] = 'VISIBLE');
function h(e) {
    if (e.guild.hasFeature(c.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (e) {
            let { guild: t, isOwner: n, canManageGuildRoleSubscriptions: i, isGuildEligibleForRoleSubscriptions: r, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: o, shouldRestrictUpdatingRoleSubscriptionSettings: s } = e;
            return !!i && (!s || !!n) && (!!(t.hasFeature(c.oNc.CREATOR_MONETIZABLE) || t.hasFeature(c.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!t.hasFeature(c.oNc.COMMUNITY) && (!!r || !!l) && n && o));
        })(e)
    )
        return 3;
    let { guild: t, isOwner: n, isUserInCreatorMonetizationEligibleCountry: i, isMonetizationWaitlistEnabledForGuild: r, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: o } = e;
    return n && !i && r ? 1 : n && r && (l || o) && !t.hasFeature(c.oNc.COMMUNITY) ? 2 : 0;
}
function f(e) {
    return 0 !== h(e);
}
function g(e) {
    let t = (0, d.Bt)(null == e ? void 0 : e.id),
        n = (0, o.Ob)(e),
        i = (0, o.gS)(null == e ? void 0 : e.id),
        r = C(e),
        a = (0, l.e7)([u.default], () => {
            let t = u.default.getCurrentUser();
            return null != t && (null == e ? void 0 : e.isOwner(t)) === !0;
        }),
        c = (0, o.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: f } = (0, s.gX)(null == e ? void 0 : e.id);
    return null == e
        ? 0
        : h({
              guild: e,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: t,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: c,
              shouldRestrictUpdatingRoleSubscriptionSettings: f
          });
}
function C(e) {
    return (0, l.e7)([a.Z], () => p(e), [e]);
}
function p(e) {
    return null != e && a.Z.can(c.Plq.ADMINISTRATOR, e);
}
