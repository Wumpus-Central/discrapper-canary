"use strict";
n.d(t, { Q: () => a });
var r = n(308528),
    i = n(956549),
    s = n(859007);
async function a(e) {
    let { appId: t, botId: n, analyticsLocations: a, customId: o, referrerId: l, commandOrigin: u } = e;
    if ((0, s.y)({ applicationId: t })) return Promise.resolve(!0);
    let c = await r.A.openPrivateChannel({ recipientIds: n });
    return await (0, i.A)({
        targetApplicationId: t,
        channelId: c,
        analyticsLocations: a,
        customId: o,
        referrerId: l,
        commandOrigin: u,
    });
}
