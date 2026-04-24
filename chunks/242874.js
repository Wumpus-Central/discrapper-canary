"use strict";
n.d(t, { UN: () => h, oA: () => _, yE: () => p });
var i,
    s = n(284009),
    l = n.n(s),
    r = n(308528),
    a = n(720149),
    o = n(451909),
    c = n(734057),
    d = n(45938),
    u = n(381941),
    _ = (((i = {}).ACTION = "action"), (i.LOOP = "loop"), (i.IDLE = "idle"), i);
let h = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await r.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
                let t = c.A.getChannel(e);
                if ((l()(null != t, "PrivateChannel is null"), null == t)) throw Error("Channel must be defined");
                return t;
            }),
            i = (0, d.Zq)(t);
        return a.A.sendMessage(n.id, o.Ay.parse(n, i), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
            location: u.Hx.GIFTING,
        });
    },
    p = (e) => {};
