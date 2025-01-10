n.d(t, {
    W: function () {
        return l;
    }
});
var i = n(493683),
    r = n(122613);
async function l(e) {
    let { appId: t, botId: n, analyticsLocations: l, customId: a, referrerId: o } = e,
        s = await i.Z.openPrivateChannel(n);
    return await (0, r.Z)({
        targetApplicationId: t,
        channelId: s,
        analyticsLocations: l,
        customId: a,
        referrerId: o
    });
}
