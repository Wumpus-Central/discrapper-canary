n.d(t, {
    F: () => l,
    L: () => s
});
var r,
    i = n(754688),
    o = n(981631),
    a = n(176505),
    l = (((r = {}).ROLE_SUBSCRIPTION = 'role_subscription'), (r.ROLE_SUBSCRIPTION_SETTING = 'role_subscription_setting'), r);
function s(e) {
    let t = decodeURIComponent(e),
        n = (0, i.Qj)(t);
    return null != n && n.channelId === a.oC.ROLE_SUBSCRIPTIONS ? 'role_subscription' : t === o.Z5c.SETTINGS(o.oAB.SUBSCRIPTIONS, 'role-subscriptions') ? 'role_subscription_setting' : void 0;
}
