n.d(t, {
    F: () => o,
    L: () => a
});
var r,
    i = n(754688),
    l = n(981631),
    s = n(176505),
    o = (((r = {}).ROLE_SUBSCRIPTION = 'role_subscription'), (r.ROLE_SUBSCRIPTION_SETTING = 'role_subscription_setting'), r);
function a(e) {
    let t = decodeURIComponent(e),
        n = (0, i.Qj)(t);
    return null != n && n.channelId === s.oC.ROLE_SUBSCRIPTIONS ? 'role_subscription' : t === l.Z5c.SETTINGS(l.oAB.SUBSCRIPTIONS, 'role-subscriptions') ? 'role_subscription_setting' : void 0;
}
