n.d(t, {
    Ou: () => p,
    SR: () => d,
    YD: () => f,
}),
    n(415506);
var r = n(512722),
    i = n.n(r),
    a = n(493683),
    o = n(904245),
    s = n(957730),
    l = n(592125),
    c = n(669079),
    u = n(959517),
    d = (function (e) {
        return (e.ACTION = "action"), (e.LOOP = "loop"), (e.IDLE = "idle"), e;
    })({});
let f = async (e, t) => {
        if (null == t) throw Error("giftCode must be defined");
        if (null == e) throw Error("Recipient must be defined");
        let n = await a.Z.openPrivateChannel({ recipientIds: e.id }).then((e) => {
                let t = l.Z.getChannel(e);
                if ((i()(null != t, "PrivateChannel is null"), null == t)) throw Error("Channel must be defined");
                return t;
            }),
            r = (0, c.Nz)(t);
        return o.Z.sendMessage(n.id, s.ZP.parse(n, r), void 0, {
            isGiftLinkSentOnBehalfOfUser: !0,
            location: u.dy.GIFTING,
        });
    },
    p = (e) => {};
