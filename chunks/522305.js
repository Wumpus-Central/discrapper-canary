n.d(t, { Q: () => i });
var r = n(308528),
    u = n(956549),
    l = n(859007);
async function i(e) {
    let { appId: t, botId: n, analyticsLocations: i, customId: o, referrerId: s, commandOrigin: a } = e;
    if ((0, l.y)({ applicationId: t, analyticsContext: { isStart: !0, analyticsLocations: i } }))
        return Promise.resolve(!0);
    let c = await r.A.openPrivateChannel({ recipientIds: n });
    return await (0, u.A)({
        targetApplicationId: t,
        channelId: c,
        analyticsLocations: i,
        customId: o,
        referrerId: s,
        commandOrigin: a,
    });
}
