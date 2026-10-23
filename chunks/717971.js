n.d(t, { y: () => u });
var i = n(991690),
    r = n(587895),
    a = n(625180),
    s = n(173912),
    l = n(617297);
async function o(e) {
    let { applicationId: t, channelId: n, analyticsContext: i, launch: r } = e,
        a = (0, s.m)(t) ? await (0, l.A)(t, { preferredChannelId: n }) : null;
    (0, s.A)({ applicationId: t, channel: a, analyticsContext: i, launch: r });
}
var d = n(366430),
    c = n(165610);
function u(e) {
    let {
            applicationId: t,
            application: n = r.A.getApplication(t),
            launch: s,
            analyticsContext: l,
            preferAppChannel: u = !1,
            channelId: _,
        } = e,
        E = (0, d.It)(n),
        A = E.has(i.U.MAIN);
    return E.has(i.U.APP_CHANNEL) && (u || !A)
        ? (o({ applicationId: t, channelId: _, launch: s, analyticsContext: l }), !0)
        : !!A && (a.A.launchFrame({ applicationId: t, surface: c.sd, launch: s, analyticsContext: l }), !0);
}
