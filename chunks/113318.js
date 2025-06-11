n.d(t, { Z: () => u });
var r = n(442837),
    i = n(201895),
    l = n(557135),
    a = n(703656),
    s = n(592125),
    o = n(979651),
    c = n(66999),
    d = n(981631);
function u(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getChannel(t)),
        { needSubscriptionToAccess: u } = (0, c.Z)(null == n ? void 0 : n.id);
    if (null == n || u) return null;
    let m = n.isGuildVocal();
    return {
        navigateToChannel: () => {
            m
                ? l.Z.handleVoiceConnect({
                      channel: n,
                      connected: o.Z.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0
                  })
                : (0, a.uL)(d.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: (0, i.ZP)({ channel: n })
    };
}
