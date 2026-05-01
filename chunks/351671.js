n.d(t, { L: () => o, Q: () => u });
var l,
    r = n(376943),
    a = n(718446),
    i = n(746080),
    s = n(355097),
    o =
        (((l = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (l.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        l);
function u(e) {
    let t = decodeURIComponent(e),
        n = (0, r.vu)(t);
    return null != n && n.channelId === i.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, a.settingsPathToRoute)(s.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
