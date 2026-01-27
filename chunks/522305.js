n.d(t, {
    Q: () => o,
});
var r = n(308528),
    i = n(956549),
    a = n(859007);
async function o(e) {
    let { appId: t, botId: n, analyticsLocations: o, customId: s, referrerId: l, commandOrigin: c } = e;
    if (
        (0, a.y)({
            applicationId: t,
        })
    )
        return Promise.resolve(!0);
    let u = await r.A.openPrivateChannel({
        recipientIds: n,
    });
    return await (0, i.A)({
        targetApplicationId: t,
        channelId: u,
        analyticsLocations: o,
        customId: s,
        referrerId: l,
        commandOrigin: c,
    });
}
