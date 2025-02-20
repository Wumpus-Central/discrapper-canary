t.d(n, { W: () => c });
var o = t(493683),
    r = t(122613);
async function c(e) {
    let { appId: n, botId: t, analyticsLocations: c, customId: a, referrerId: i } = e,
        l = await o.Z.openPrivateChannel(t);
    return await (0, r.Z)({
        targetApplicationId: n,
        channelId: l,
        analyticsLocations: c,
        customId: a,
        referrerId: i
    });
}
