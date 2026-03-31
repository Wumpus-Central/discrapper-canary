"use strict";
n.d(t, { L: () => a, Q: () => o });
var i,
    s = n(376943),
    r = n(652215),
    l = n(746080),
    a =
        (((i = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (i.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        i);
function o(e) {
    let t = decodeURIComponent(e),
        n = (0, s.vu)(t);
    return null != n && n.channelId === l.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t === r.BVt.SETTINGS(r.nc_.SUBSCRIPTIONS, "role-subscriptions")
          ? "role_subscription_setting"
          : void 0;
}
