n.d(t, {
    Ou: () => f,
    SR: () => c,
    YD: () => d
}),
    n(411104);
var i = n(512722),
    r = n.n(i),
    a = n(493683),
    s = n(904245),
    o = n(957730),
    l = n(592125),
    u = n(669079),
    c = (function (e) {
        return (e.ACTION = 'action'), (e.LOOP = 'loop'), (e.IDLE = 'idle'), e;
    })({});
let d = async (e, t) => {
        if (null == t) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let n = await a.Z.openPrivateChannel(e.id).then((e) => {
                let t = l.Z.getChannel(e);
                if ((r()(null != t, 'PrivateChannel is null'), null == t)) throw Error('Channel must be defined');
                return t;
            }),
            i = (0, u.Nz)(t);
        return s.Z.sendMessage(n.id, o.ZP.parse(n, i), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    f = (e) => {};
