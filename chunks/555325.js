"use strict";
n.d(t, { EI: () => o, V9: () => a, X9: () => l });
var r = n(311907);
n(469993), n(465932), n(260509);
var i = n(576705);
n(287809);
var s = n(652215);
function a(e) {
    return (
        0 !=
        (e.guild.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
            ? 0
            : +!!(function (e) {
                  let {
                      guild: t,
                      isOwner: n,
                      canManageGuildRoleSubscriptions: r,
                      isUserInCreatorMonetizationEligibleCountry: i,
                      shouldRestrictUpdatingRoleSubscriptionSettings: a,
                  } = e;
                  return (
                      !!r &&
                      (!a || !!n) &&
                      (!!(
                          t.features.has(s.GuildFeatures.CREATOR_MONETIZABLE) ||
                          t.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
                      ) ||
                          (!!t.features.has(s.GuildFeatures.COMMUNITY) && n && i))
                  );
              })(e))
    );
}
function o(e) {
    return (0, r.bG)([i.A], () => l(e), [e]);
}
function l(e) {
    return null != e && i.A.can(s.xBc.ADMINISTRATOR, e);
}
