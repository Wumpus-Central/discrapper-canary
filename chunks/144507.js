n.d(e, {
    $D: function () {
        return p;
    },
    H2: function () {
        return m;
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
    l = n(442837),
    o = n(223892),
    u = n(674180),
    a = n(496675),
    s = n(594174),
    c = n(923726),
    d = n(981631);
((i = r || (r = {}))[(i.NONE = 0)] = 'NONE'), (i[(i.WAITLIST_ONLY = 1)] = 'WAITLIST_ONLY'), (i[(i.NEEDS_COMMUNITY = 2)] = 'NEEDS_COMMUNITY'), (i[(i.VISIBLE = 3)] = 'VISIBLE');
function f(t) {
    if (t.guild.hasFeature(d.oNc.CREATOR_MONETIZABLE_DISABLED)) return 0;
    if (
        (function (t) {
            let { guild: e, isOwner: n, canManageGuildRoleSubscriptions: i, isGuildEligibleForRoleSubscriptions: r, isExpeditedMonetizationOnboardingGuild: l, isUserInCreatorMonetizationEligibleCountry: o, shouldRestrictUpdatingRoleSubscriptionSettings: u } = t;
            return !!i && (!u || !!n) && (!!(e.hasFeature(d.oNc.CREATOR_MONETIZABLE) || e.hasFeature(d.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (!!e.hasFeature(d.oNc.COMMUNITY) && (!!r || !!l) && n && o));
        })(t)
    )
        return 3;
    let { guild: e, isOwner: n, isUserInCreatorMonetizationEligibleCountry: i, isMonetizationWaitlistEnabledForGuild: r, isGuildEligibleForRoleSubscriptions: l, isExpeditedMonetizationOnboardingGuild: o } = t;
    return n && !i && r ? 1 : n && r && (l || o) && !e.hasFeature(d.oNc.COMMUNITY) ? 2 : 0;
}
function _(t) {
    return 0 !== f(t);
}
function E(t) {
    let e = (0, c.Bt)(null == t ? void 0 : t.id),
        n = (0, o.Ob)(t),
        i = (0, o.gS)(null == t ? void 0 : t.id),
        r = p(t),
        a = (0, l.e7)([s.default], () => {
            let e = s.default.getCurrentUser();
            return null != e && (null == t ? void 0 : t.isOwner(e)) === !0;
        }),
        d = (0, o.Sd)(),
        { shouldRestrictUpdatingCreatorMonetizationSettings: _ } = (0, u.gX)(null == t ? void 0 : t.id);
    return null == t
        ? 0
        : f({
              guild: t,
              isOwner: a,
              canManageGuildRoleSubscriptions: r,
              isGuildEligibleForRoleSubscriptions: e,
              isMonetizationWaitlistEnabledForGuild: i,
              isExpeditedMonetizationOnboardingGuild: n,
              isUserInCreatorMonetizationEligibleCountry: d,
              shouldRestrictUpdatingRoleSubscriptionSettings: _
          });
}
function p(t) {
    return (0, l.e7)([a.Z], () => m(t), [t]);
}
function m(t) {
    return null != t && a.Z.can(d.Plq.ADMINISTRATOR, t);
}
