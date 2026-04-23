n.d(t, { UN: () => p, oA: () => _, yE: () => C });
var r,
    a = n(284009),
    i = n.n(a),
    o = n(308528),
    l = n(720149),
    s = n(451909),
    d = n(734057),
    u = n(45938),
    c = n(381941),
    _ = (((r = {}).ACTION = "action"), (r.LOOP = "loop"), (r.IDLE = "idle"), r);
let p = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await o.A.openPrivateChannel({ recipientIds: e.id }).then((e) => {
                let t = d.A.getChannel(e);
                if ((i()(null != t, "PrivateChannel is null"), null == t)) throw Error("Channel must be defined");
                return t;
            }),
            r = (0, u.Zq)(t);
        return l.A.sendMessage(n.id, s.Ay.parse(n, r), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
            location: c.Hx.GIFTING,
        });
    },
    C = (e) => {};
