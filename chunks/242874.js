"use strict";
n.d(t, { UN: () => _, oA: () => d, yE: () => f });
var r = n(284009),
    i = n.n(r),
    a = n(308528),
    s = n(843472),
    o = n(451909),
    l = n(734057),
    u = n(45938),
    c = n(381941),
    d = (function (e) {
        return (e.ACTION = "action"), (e.LOOP = "loop"), (e.IDLE = "idle"), e;
    })({});
let _ = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await a.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
                let t = l.A.getChannel(e);
                if ((i()(null != t, "PrivateChannel is null"), null == t)) throw Error("Channel must be defined");
                return t;
            }),
            r = (0, u.Zq)(t);
        return s.A.sendMessage(n.id, o.Ay.parse(n, r), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
            location: c.Hx.GIFTING,
        });
    },
    f = (e) => {};
