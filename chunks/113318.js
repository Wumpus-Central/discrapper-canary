n.d(t, { Z: () => d });
var r = n(442837),
    i = n(201895),
    a = n(557135),
    o = n(703656),
    s = n(592125),
    l = n(979651),
    c = n(66999),
    u = n(981631);
function d(e, t) {
    let n = (0, r.e7)([s.Z], () => s.Z.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, c.Z)(null == n ? void 0 : n.id);
    if (null == n || d) return null;
    let f = n.isGuildVocal();
    return {
        navigateToChannel: () => {
            f
                ? a.Z.handleVoiceConnect({
                      channel: n,
                      connected: l.Z.isInChannel(n.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0,
                  })
                : (0, o.uL)(u.Z5c.CHANNEL(e, n.id));
        },
        ariaLabel: (0, i.ZP)({ channel: n }),
    };
}
