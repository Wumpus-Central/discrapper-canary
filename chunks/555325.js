"use strict";
n.d(t, { EI: () => o, V9: () => a, X9: () => l });
var i = n(17928);
n(469993), n(465932), n(260509);
var r = n(576705);
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
                      canManageGuildRoleSubscriptions: i,
                      isUserInCreatorMonetizationEligibleCountry: r,
                      shouldRestrictUpdatingRoleSubscriptionSettings: a,
                  } = e;
                  return (
                      !!i &&
                      (!a || !!n) &&
                      (!!(
                          t.features.has(s.GuildFeatures.CREATOR_MONETIZABLE) ||
                          t.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
                      ) ||
                          (!!t.features.has(s.GuildFeatures.COMMUNITY) && n && r))
                  );
              })(e))
    );
}
function o(e) {
    return (0, i.bG)([r.A], () => l(e), [e]);
}
function l(e) {
    return null != e && r.A.can(s.xBc.ADMINISTRATOR, e);
}
