r.d(n, {
    Ou: function () {
        return h;
    },
    SR: function () {
        return i;
    },
    YD: function () {
        return p;
    }
});
var i,
    a = r(411104);
var o = r(512722),
    s = r.n(o),
    l = r(493683),
    u = r(904245),
    c = r(957730),
    d = r(592125),
    f = r(669079);
!(function (e) {
    (e.ACTION = 'action'), (e.LOOP = 'loop'), (e.IDLE = 'idle');
})(i || (i = {}));
let p = async (e, n) => {
        if (null == n) throw Error('giftCode must be defined');
        if (null == e) throw Error('Recipient must be defined');
        let r = await l.Z.openPrivateChannel(e.id).then((e) => {
                let n = d.Z.getChannel(e);
                if ((s()(null != n, 'PrivateChannel is null'), null == n)) throw Error('Channel must be defined');
                return n;
            }),
            i = (0, f.Nz)(n);
        return u.Z.sendMessage(r.id, c.ZP.parse(r, i), void 0, { isGiftLinkSentOnBehalfOfUser: !0 });
    },
    h = (e) => {};
