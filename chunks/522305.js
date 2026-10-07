n.d(t, { Q: () => o });
var r = n(308528),
    u = n(956549),
    i = n(859007);
async function o(e) {
    let { appId: t, botId: n, analyticsLocations: o, customId: l, referrerId: s, commandOrigin: a } = e;
    if ((0, i.y)({ applicationId: t, analyticsContext: { isStart: !0, analyticsLocations: o } }))
        return Promise.resolve(!0);
    let d = await r.A.openPrivateChannel({ recipientIds: n });
    return await (0, u.A)({
        targetApplicationId: t,
        channelId: d,
        analyticsLocations: o,
        customId: l,
        referrerId: s,
        commandOrigin: a,
    });
}
