n.d(t, {
    F: () => o,
    L: () => s
});
var i,
    r = n(754688),
    l = n(981631),
    a = n(176505),
    o = (((i = {}).ROLE_SUBSCRIPTION = 'role_subscription'), (i.ROLE_SUBSCRIPTION_SETTING = 'role_subscription_setting'), i);
function s(e) {
    let t = decodeURIComponent(e),
        n = (0, r.Qj)(t);
    return null != n && n.channelId === a.oC.ROLE_SUBSCRIPTIONS ? 'role_subscription' : t === l.Z5c.SETTINGS(l.oAB.SUBSCRIPTIONS, 'role-subscriptions') ? 'role_subscription_setting' : void 0;
}
