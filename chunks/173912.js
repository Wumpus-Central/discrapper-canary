n.d(t, { A: () => c, m: () => d });
var i = n(991690),
    r = n(976860),
    a = n(625180),
    s = n(91242),
    l = n(165610),
    o = n(652215);
function d(e) {
    return null == s.A.getFrame((0, l.VA)(e, l.sd));
}
function c(e) {
    let { applicationId: t, channel: n, analyticsContext: s, launch: d } = e;
    if (null == n) {
        let e = a.A.launchFrame({ applicationId: t, surface: l.sd, analyticsContext: s, launch: d });
        return { frameId: (0, l.VA)(t, l.sd), launched: e };
    }
    let c = { type: i.U.APP_CHANNEL, ...n },
        u = a.A.launchFrame({ applicationId: t, surface: c, analyticsContext: s, launch: d, showErrorModal: !1 }).catch(
            () => {},
        );
    return ((0, r.pX)(o.BVt.CHANNEL(n.guildId, n.channelId)), { frameId: (0, l.VA)(t, c), launched: u });
}
