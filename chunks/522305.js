n.d(t, { Q: () => l });
var i = n(308528),
    r = n(956549),
    a = n(859007);
async function l(e) {
    let { appId: t, botId: n, analyticsLocations: l, customId: s, referrerId: o, commandOrigin: u } = e;
    if ((0, a.y)({ applicationId: t })) return Promise.resolve(!0);
    let _ = await i.A.openPrivateChannel({ recipientIds: n });
    return await (0, r.A)({
        targetApplicationId: t,
        channelId: _,
        analyticsLocations: l,
        customId: s,
        referrerId: o,
        commandOrigin: u,
    });
}
