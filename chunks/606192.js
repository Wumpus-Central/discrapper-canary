n.d(t, {
    W: function () {
        return a;
    }
});
var i = n(493683),
    r = n(122613);
async function a(e) {
    let { appId: t, botId: n, analyticsLocations: a, customId: o, referrerId: l } = e,
        s = await i.Z.openPrivateChannel(n);
    return await (0, r.Z)({
        targetApplicationId: t,
        channelId: s,
        analyticsLocations: a,
        customId: o,
        referrerId: l
    });
}
