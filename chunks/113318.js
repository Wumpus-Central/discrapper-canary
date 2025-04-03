n.d(t, { Z: () => u });
var r = n(442837),
    i = n(201895),
    a = n(557135),
    o = n(703656),
    l = n(592125),
    s = n(979651),
    c = n(66999),
    d = n(981631);
function u(e, t) {
    let n = (0, r.e7)([l.Z], () => l.Z.getChannel(t)),
        { needSubscriptionToAccess: u } = (0, c.Z)(null == n ? void 0 : n.id);
    if (null == n || u) return null;
    let _ = n.isGuildVocal();
    return {
        navigateToChannel: () => {
            _
                ? a.Z.handleVoiceConnect({
                      channel: n,
                      connected: s.Z.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0
                  })
                : (0, o.uL)(d.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: (0, i.ZP)({ channel: n })
    };
}
