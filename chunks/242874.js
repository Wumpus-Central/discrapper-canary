"use strict";
n.d(t, { UN: () => h, oA: () => _, yE: () => f });
var i,
    r = n(284009),
    s = n.n(r),
    a = n(308528),
    o = n(493336),
    l = n(451909),
    u = n(734057),
    c = n(45938),
    d = n(381941),
    _ = (((i = {}).ACTION = "action"), (i.LOOP = "loop"), (i.IDLE = "idle"), i);
async function h(e, t) {
    if (null == t) throw Error("giftCode must be defined");
    if (null == e) throw Error("Recipient must be defined");
    let n = await a.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
            let t = u.A.getChannel(e);
            if ((s()(null != t, "PrivateChannel is null"), null == t)) throw Error("Channel must be defined");
            return t;
        }),
        i = (0, c.Zq)(t);
    return o.A.sendMessage(n.id, l.Ay.parse(n, i), void 0, {
        isGiftLinkSentOnBehalfOfUser: !0,
        location: d.Hx.GIFTING,
    });
}
function f(e) {}
