n.d(t, { L: () => o, Q: () => u });
var r,
    l = n(376943),
    i = n(718446),
    a = n(746080),
    s = n(355097),
    o =
        (((r = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (r.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        r);
function u(e) {
    let t = decodeURIComponent(e),
        n = (0, l.vu)(t);
    return null != n && n.channelId === a.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, i.settingsPathToRoute)(s.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
