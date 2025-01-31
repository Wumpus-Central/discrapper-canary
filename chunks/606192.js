t.d(e, { W: () => r });
var o = t(493683),
    a = t(122613);
async function r(n) {
    let { appId: e, botId: t, analyticsLocations: r, customId: i, referrerId: c } = n,
        _ = await o.Z.openPrivateChannel(t);
    return await (0, a.Z)({
        targetApplicationId: e,
        channelId: _,
        analyticsLocations: r,
        customId: i,
        referrerId: c
    });
}
