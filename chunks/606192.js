n.d(t, { W: () => a });
var i = n(493683),
    l = n(122613);
async function a(e) {
    let { appId: t, botId: n, analyticsLocations: a, customId: r, referrerId: s } = e,
        o = await i.Z.openPrivateChannel(n);
    return await (0, l.Z)({
        targetApplicationId: t,
        channelId: o,
        analyticsLocations: a,
        customId: r,
        referrerId: s
    });
}
