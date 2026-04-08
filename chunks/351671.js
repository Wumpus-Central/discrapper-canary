"use strict";
n.d(t, { L: () => o, Q: () => c });
var i,
    s = n(376943),
    r = n(718446),
    l = n(746080),
    a = n(355097),
    o =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        i);
function c(e) {
    let t = decodeURIComponent(e),
        n = (0, s.vu)(t);
    return null != n && n.channelId === l.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, r.settingsPathToRoute)(a.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
