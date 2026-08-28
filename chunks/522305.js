n.d(t, { Q: () => a });
var i = n(308528),
    r = n(956549),
    s = n(400115),
    o = n(859007);
async function a(e) {
    let { appId: t, botId: n, analyticsLocations: a, customId: l, referrerId: u, commandOrigin: d } = e;
    if ((0, o.y)({ applicationId: t })) return (0, s.j$)(t, { isStart: !0 }), Promise.resolve(!0);
    let c = await i.A.openPrivateChannel({ recipientIds: n });
    return await (0, r.A)({
        targetApplicationId: t,
        channelId: c,
        analyticsLocations: a,
        customId: l,
        referrerId: u,
        commandOrigin: d,
    });
}
