"use strict";
n.d(t, { UN: () => f, oA: () => _, yE: () => p });
var r,
    i = n(284009),
    s = n.n(i),
    a = n(308528),
    o = n(843472),
    l = n(451909),
    u = n(734057),
    c = n(45938),
    d = n(381941),
    _ = (((r = {}).ACTION = "action"), (r.LOOP = "loop"), (r.IDLE = "idle"), r);
let f = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await a.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
                let t = u.A.getChannel(e);
                if ((s()(null != t, "PrivateChannel is null"), null == t)) throw Error("Channel must be defined");
                return t;
            }),
            r = (0, c.Zq)(t);
        return o.A.sendMessage(n.id, l.Ay.parse(n, r), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
            location: d.Hx.GIFTING,
        });
    },
    p = (e) => {};
