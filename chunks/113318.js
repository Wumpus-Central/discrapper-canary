n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(442837),
    r = n(201895),
    l = n(557135),
    a = n(703656),
    o = n(592125),
    s = n(979651),
    c = n(66999),
    d = n(981631);
function u(e, t) {
    let n = (0, i.e7)([o.Z], () => o.Z.getChannel(t)),
        { needSubscriptionToAccess: u } = (0, c.Z)(null == n ? void 0 : n.id);
    if (null == n || u) return null;
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
                : (0, a.uL)(d.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: h
    };
}
