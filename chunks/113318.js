n.d(t, { Z: () => u });
var i = n(442837),
    l = n(201895),
    a = n(557135),
    r = n(703656),
    s = n(592125),
    o = n(979651),
    c = n(66999),
    d = n(981631);
function u(e, t) {
    let n = (0, i.e7)([s.Z], () => s.Z.getChannel(t)),
        { needSubscriptionToAccess: u } = (0, c.Z)(null == n ? void 0 : n.id);
    if (null == n || u) return null;
    let m = n.isGuildVocal();
    return {
        navigateToChannel: () => {
            m
                ? a.Z.handleVoiceConnect({
                      channel: n,
                      connected: o.Z.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0
                  })
                : (0, r.uL)(d.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: (0, l.ZP)({ channel: n })
    };
}
