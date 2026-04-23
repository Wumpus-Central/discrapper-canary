i.d(t, { A: () => u });
var l = i(311907),
    n = i(963027),
    s = i(262763),
    a = i(976860),
    r = i(734057),
    c = i(977997),
    d = i(721592),
    o = i(652215);
function u(e, t) {
    let i = (0, l.bG)([r.A], () => r.A.getChannel(t)),
        { needSubscriptionToAccess: u } = (0, d.A)(i?.id);
    if (null == i || u || i.isObfuscated()) return null;
    let m = i.isGuildVocal();
    return {
        navigateToChannel: () => {
            m
                ? s.A.handleVoiceConnect({
                      channel: i,
                      connected: c.A.isInChannel(i.id),
                      needSubscriptionToAccess: !1,
                      routeDirectlyToChannel: !0,
                  })
                : (0, a.pX)(o.BVt.CHANNEL(e, i.id));
        },
        ariaLabel: (0, n.Ay)({ channel: i }),
    };
}
