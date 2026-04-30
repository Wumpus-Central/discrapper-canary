n.d(t, { L: () => o, Q: () => u });
var l,
    a = n(376943),
    s = n(718446),
    i = n(746080),
    r = n(355097),
    o =
        (((l = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (l.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        l);
function u(e) {
    let t = decodeURIComponent(e),
        n = (0, a.vu)(t);
    return null != n && n.channelId === i.VV.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t.toLowerCase() === (0, s.settingsPathToRoute)(r.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS)
          ? "role_subscription_setting"
          : void 0;
}
