"use strict";
n.d(t, { EI: () => u, V9: () => l, X9: () => c });
var r = n(311907);
n(469993), n(465932), n(260509);
var i = n(576705);
n(287809), n(567305);
var s = n(652215);
function a(e) {
    let {
        guild: t,
        isOwner: n,
        canManageGuildRoleSubscriptions: r,
        isGuildEligibleForRoleSubscriptions: i,
        isExpeditedMonetizationOnboardingGuild: a,
        isUserInCreatorMonetizationEligibleCountry: o,
        shouldRestrictUpdatingRoleSubscriptionSettings: l,
    } = e;
    return (
        !!r &&
        (!l || !!n) &&
        (!!(
            t.features.has(s.GuildFeatures.CREATOR_MONETIZABLE) ||
            t.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
        ) ||
            (!!t.features.has(s.GuildFeatures.COMMUNITY) && (!!i || !!a) && n && o))
    );
}
function o(e) {
    return e.guild.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_DISABLED) ? 0 : +!!a(e);
}
function l(e) {
    return 0 !== o(e);
}
function u(e) {
    return (0, r.bG)([i.A], () => c(e), [e]);
}
function c(e) {
    return null != e && i.A.can(s.xBc.ADMINISTRATOR, e);
}
