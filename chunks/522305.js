"use strict";
n.d(t, { Q: () => o });
var i = n(308528),
    r = n(956549),
    s = n(400115),
    a = n(859007);
async function o(e) {
    let { appId: t, botId: n, analyticsLocations: o, customId: l, referrerId: u, commandOrigin: c } = e;
    if ((0, a.y)({ applicationId: t })) return (0, s.j$)(t, { isStart: !0 }), Promise.resolve(!0);
    let d = await i.A.openPrivateChannel({ recipientIds: n });
    return await (0, r.A)({
        targetApplicationId: t,
        channelId: d,
        analyticsLocations: o,
        customId: l,
        referrerId: u,
        commandOrigin: c,
    });
}
