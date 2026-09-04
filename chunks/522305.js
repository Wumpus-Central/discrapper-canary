n.d(t, { Q: () => o });
var i = n(308528),
    r = n(956549),
    s = n(859007);
async function o(e) {
    let { appId: t, botId: n, analyticsLocations: o, customId: a, referrerId: l, commandOrigin: u } = e;
    if ((0, s.y)({ applicationId: t, analyticsContext: { isStart: !0, analyticsLocations: o } }))
        return Promise.resolve(!0);
    let d = await i.A.openPrivateChannel({ recipientIds: n });
    return await (0, r.A)({
        targetApplicationId: t,
        channelId: d,
        analyticsLocations: o,
        customId: a,
        referrerId: l,
        commandOrigin: u,
    });
}
