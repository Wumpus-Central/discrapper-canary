n.d(t, { y: () => u });
var i = n(991690),
    r = n(587895),
    a = n(625180),
    s = n(371169),
    l = n(173912);
async function o(e) {
    let { applicationId: t, analyticsContext: n, launch: i } = e,
        r = (0, l.m)(t) ? (await (0, s.l5)(t))[0] : void 0;
    (0, l.A)({
        applicationId: t,
        channel: null != r ? { guildId: r.guild_id, channelId: r.channel_id } : null,
        analyticsContext: n,
        launch: i,
    });
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
        } = e,
        _ = (0, d.It)(n),
        E = _.has(i.U.MAIN);
    return _.has(i.U.APP_CHANNEL) && (u || !E)
        ? (o({ applicationId: t, launch: s, analyticsContext: l }), !0)
        : !!E && (a.A.launchFrame({ applicationId: t, surface: c.sd, launch: s, analyticsContext: l }), !0);
}
