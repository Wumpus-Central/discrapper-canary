n.d(t, { Z: () => d });
var r = n(442837),
    i = n(201895),
    l = n(557135),
    a = n(703656),
    o = n(592125),
    s = n(979651),
    c = n(66999),
    u = n(981631);
function d(e, t) {
    let n = (0, r.e7)([o.Z], () => o.Z.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, c.Z)(null == n ? void 0 : n.id);
    if (null == n || d) return null;
    let p = n.isGuildVocal();
    return {
        navigateToChannel: () => {
            p
                ? l.Z.handleVoiceConnect({
                      channel: n,
                      connected: s.Z.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0
                  })
                : (0, a.uL)(u.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: (0, i.ZP)({ channel: n })
    };
}
