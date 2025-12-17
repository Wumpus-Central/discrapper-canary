n.d(t, {
    F: () => l,
    L: () => o,
});
var r,
    i = n(754688),
    s = n(981631),
    a = n(176505),
    l =
        (((r = {}).ROLE_SUBSCRIPTION = "role_subscription"),
        (r.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"),
        r);
function o(e) {
    let t = decodeURIComponent(e),
        n = (0, i.Qj)(t);
    return null != n && n.channelId === a.oC.ROLE_SUBSCRIPTIONS
        ? "role_subscription"
        : t === s.Z5c.SETTINGS(s.oAB.SUBSCRIPTIONS, "role-subscriptions")
          ? "role_subscription_setting"
          : void 0;
}
