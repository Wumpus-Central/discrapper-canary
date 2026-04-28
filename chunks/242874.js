i.d(n, { UN: () => c, oA: () => p, yE: () => f });
var t,
    r = i(284009),
    l = i.n(r),
    a = i(308528),
    s = i(720149),
    d = i(451909),
    o = i(734057),
    h = i(45938),
    u = i(381941),
    p = (((t = {}).ACTION = "action"), (t.LOOP = "loop"), (t.IDLE = "idle"), t);
let c = async (e, n) => {
        if (null == n) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let i = await a.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
                let n = o.A.getChannel(e);
                if ((l()(null != n, "PrivateChannel is null"), null == n)) throw Error("Channel must be defined");
                return n;
            }),
            t = (0, h.Zq)(n);
        return s.A.sendMessage(i.id, d.Ay.parse(i, t), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
            location: u.Hx.GIFTING,
        });
    },
    f = (e) => {};
