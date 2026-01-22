n.d(t, {
    UN: () => f,
    oA: () => d,
    yE: () => p,
}),
    n(65821);
var r = n(284009),
    i = n.n(r),
    a = n(308528),
    s = n(843472),
    o = n(451909),
    l = n(734057),
    c = n(45938),
    u = n(381941),
    d = (function (e) {
        return (e.ACTION = "action"), (e.LOOP = "loop"), (e.IDLE = "idle"), e;
    })({});
let f = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await a.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
                let t = l.A.getChannel(e);
                if ((i()(null != t, "PrivateChannel is null"), null == t)) throw Error("Channel must be defined");
                return t;
            }),
            r = (0, c.Zq)(t);
        return s.A.sendMessage(n.id, o.Ay.parse(n, r), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
            location: u.Hx.GIFTING,
        });
    },
    p = (e) => {};
