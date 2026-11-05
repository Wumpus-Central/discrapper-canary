n.d(t, { y: () => c });
var i = n(991690),
    r = n(587895),
    a = n(625180),
    s = n(173912),
    l = n(617297),
    o = n(366430),
    d = n(165610);
function c(e) {
    let {
            applicationId: t,
            application: n = r.A.getApplication(t),
            launch: c,
            analyticsContext: u,
            preferAppChannel: _ = !1,
            channelId: E,
        } = e,
        A = (0, o.It)(n),
        f = A.has(i.U.MAIN);
    return A.has(i.U.APP_CHANNEL) && (_ || !f)
        ? (!(async function (e) {
              let { applicationId: t, channelId: n, analyticsContext: i, launch: r } = e,
                  a = (0, s.m)(t) ? await (0, l.A)(t, { preferredChannelId: n }) : null;
              (0, s.A)({ applicationId: t, channel: a, analyticsContext: i, launch: r });
          })({ applicationId: t, channelId: E, launch: c, analyticsContext: u }),
          !0)
        : !!f && (a.A.launchFrame({ applicationId: t, surface: d.sd, launch: c, analyticsContext: u }), !0);
}
