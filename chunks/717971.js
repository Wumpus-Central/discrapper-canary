n.d(t, { y: () => c });
var i = n(587895),
    r = n(625180),
    a = n(371169),
    s = n(173912);
async function l(e) {
    let { applicationId: t, analyticsContext: n } = e,
        i = (0, s.m)(t) ? (await (0, a.l5)(t))[0] : void 0;
    (0, s.A)({
        applicationId: t,
        channel: null != i ? { guildId: i.guild_id, channelId: i.channel_id } : null,
        analyticsContext: n,
    });
}
var o = n(25451),
    d = n(165610);
function c(e) {
    let {
        applicationId: t,
        application: n = i.A.getApplication(t),
        launch: a,
        analyticsContext: s,
        preferAppChannel: c = !1,
    } = e;
    return (
        null != n &&
        !!(0, o.X)(n) &&
        (c && null != n.conjureProjectId
            ? l({ applicationId: t, analyticsContext: s })
            : r.A.launchFrame({ applicationId: t, surface: d.sd, launch: a, analyticsContext: s }),
        !0)
    );
}
