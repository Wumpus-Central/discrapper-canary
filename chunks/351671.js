n.d(t, {
    L: () => a,
    Q: () => o,
});
var r,
    i = n(376943),
    s = n(652215),
    l = n(746080),
    a =
        (((r = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (r.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        r);
function o(e) {
    let t = decodeURIComponent(e),
        n = (0, i.vu)(t);
    return null != n && n.channelId === l.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t === s.BVt.SETTINGS(s.nc_.SUBSCRIPTIONS, "role-subscriptions")
          ? "role_subscription_setting"
          : void 0;
}
