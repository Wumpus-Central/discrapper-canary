n.d(t, {
    W: function () {
        return l;
    }
});
var i = n(493683),
    r = n(122613);
async function l(e, t, n) {
    let l = await i.Z.openPrivateChannel(t);
    return await (0, r.Z)({
        targetApplicationId: e,
        channelId: l,
        analyticsLocations: n
    });
}
