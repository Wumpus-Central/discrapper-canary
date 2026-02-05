"use strict";
n.d(t, { Q: () => s });
var r = n(308528),
    i = n(956549),
    a = n(859007);
async function s(e) {
    let { appId: t, botId: n, analyticsLocations: s, customId: o, referrerId: l, commandOrigin: u } = e;
    if ((0, a.y)({ applicationId: t })) return Promise.resolve(!0);
    let c = await r.A.openPrivateChannel({ recipientIds: n });
    return await (0, i.A)({
        targetApplicationId: t,
        channelId: c,
        analyticsLocations: s,
        customId: o,
        referrerId: l,
        commandOrigin: u,
    });
}
