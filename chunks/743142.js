n.d(t, {
    F: () => s,
    L: () => o
});
var i,
    r = n(754688),
    a = n(981631),
    l = n(176505),
    s = (((i = {}).ROLE_SUBSCRIPTION = 'role_subscription'), (i.ROLE_SUBSCRIPTION_SETTING = 'role_subscription_setting'), i);
function o(e) {
    let t = decodeURIComponent(e),
        n = (0, r.Qj)(t);
    return null != n && n.channelId === l.oC.ROLE_SUBSCRIPTIONS ? 'role_subscription' : t === a.Z5c.SETTINGS(a.oAB.SUBSCRIPTIONS, 'role-subscriptions') ? 'role_subscription_setting' : void 0;
}
