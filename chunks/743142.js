n.d(t, {
    F: function () {
        return r;
    },
    L: function () {
        return a;
    }
});
var i,
    r,
    s = n(754688),
    l = n(981631),
    o = n(176505);
function a(e) {
    let t = decodeURIComponent(e),
        n = (0, s.Qj)(t);
    return null != n && n.channelId === o.oC.ROLE_SUBSCRIPTIONS ? 'role_subscription' : t === l.Z5c.SETTINGS(l.oAB.SUBSCRIPTIONS, 'role-subscriptions') ? 'role_subscription_setting' : void 0;
}
((i = r || (r = {})).ROLE_SUBSCRIPTION = 'role_subscription'), (i.ROLE_SUBSCRIPTION_SETTING = 'role_subscription_setting');
