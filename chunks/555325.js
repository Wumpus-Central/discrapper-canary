n.d(t, { EI: () => _, V9: () => s, X9: () => l });
var i = n(17928);
n(469993), n(465932), n(260509);
var r = n(576705);
n(287809);
var a = n(652215);
function s(e) {
    return (
        0 !=
        (e.guild.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_DISABLED)
            ? 0
            : +!!(function (e) {
                  let {
                      guild: t,
                      isOwner: n,
                      canManageGuildRoleSubscriptions: i,
                      isUserInCreatorMonetizationEligibleCountry: r,
                      shouldRestrictUpdatingRoleSubscriptionSettings: s,
                  } = e;
                  return (
                      !!i &&
                      (!s || !!n) &&
                      (!!(
                          t.features.has(a.GuildFeatures.CREATOR_MONETIZABLE) ||
                          t.features.has(a.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)
                      ) ||
                          (!!t.features.has(a.GuildFeatures.COMMUNITY) && n && r))
                  );
              })(e))
    );
}
function _(e) {
    return (0, i.bG)([r.A], () => l(e), [e]);
}
function l(e) {
    return null != e && r.A.can(a.xBc.ADMINISTRATOR, e);
}
