e.d(n, {
    $D: function () {
        return p;
    },
    H2: function () {
        return g;
    },
    MO: function () {
        return E;
    },
    X$: function () {
        return _;
    },
    d5: function () {
        return r;
    }
});
var i,
    r,
    l = e(442837),
    u = e(223892),
    o = e(674180),
    a = e(496675),
    s = e(594174),
    c = e(923726),
    d = e(981631);
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (i[(i.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (i[(i.VISIBLE = 3)] = 'VISIBLE');
function f(t) {
    if (t.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (t) {
            let { guild: n, isOwner: e, canManageGuildRoleSubscriptions: i, isGuildEligibleForRoleSubscriptions: r, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: u, shouldRestrictUpdatingRoleSubscriptionSettings: o } = t;
            return !!i && (!o || !!e) && (!!(n.hasFeature(d.oNc.CREATOR_MONETIZABLE) || n.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!n.hasFeature(d.oNc.COMMUNITY) && (!!r || !!l) && e && u));
        })(t)
    )
        return 3;
    let { guild: n, isOwner: e, isUserInCreatorMonetizationEligibleCountry: i, isMonetizationWaitlistEnabledForGuild: r, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: u } = t;
    return e && !i && r ? 1 : e && r && (l || u) && !n.hasFeature(d.oNc.COMMUNITY) ? 2 : 0;
}
function _(t) {
    return 0 !== f(t);
}
function E(t) {
    let n = (0, c.Bt)(null == t ? void 0 : t.id),
        e = (0, u.Ob)(t),
        i = (0, u.gS)(null == t ? void 0 : t.id),
        r = p(t),
        a = (0, l.e7)([s.default], () => {
            let n = s.default.getCurrentUser();
            return null != n && (null == t ? void 0 : t.isOwner(n)) === !0;
        }),
        d = (0, u.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, o.gX)(null == t ? void 0 : t.id);
    return null == t
        ? 0
        : f({
              guild: t,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: n,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: e,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: _
          });
}
function p(t) {
    return (0, l.e7)([a.Z], () => g(t), [t]);
}
function g(t) {
    return null != t && a.Z.can(d.Plq.ADMINISTRATOR, t);
}
