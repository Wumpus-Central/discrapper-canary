n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(442837),
    r = n(201895),
    l = n(557135),
    a = n(703656),
    o = n(592125),
    s = n(979651),
    c = n(66999),
    u = n(981631);
function d(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, c.Z)(null == n ? void 0 : n.id);
    if (null == n || d) return null;
    let m = n.isGuildVocal(),
        h = (0, r.ZP)({ channel: n });
    return {
        navigateToChannel: () => {
            m
                ? l.Z.handleVoiceConnect({
                      channel: n,
                      connected: s.Z.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0
                  })
                : (0, a.uL)(u.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: h
    };
}
