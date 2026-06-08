i.d(t, { A: () => d });
var n = i(17928),
    l = i(963027),
    s = i(262763),
    a = i(976860),
    r = i(734057),
    u = i(977997),
    o = i(499211),
    c = i(652215);
function d(e, t) {
    let i = (0, n.bG)([r.A], () => r.A.getChannel(t)),
        { needSubscriptionToAccess: d } = (0, o.A)(i?.id);
    if (null == i || d || i.isObfuscated()) return null;
    let f = i.isGuildVocal();
    return {
        navigateToChannel: () => {
            f
                ? s.A.handleVoiceConnect({
                      channel: i,
                      connected: u.A.isInChannel(i.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0,
                  })
                : (0, a.pX)(c.BVt.CHANNEL(e, i.id));
        },
        ariaLabel: (0, l.Ay)({ channel: i }),
    };
}
