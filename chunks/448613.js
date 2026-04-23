"use strict";
n.d(t, { p: () => d });
var r = n(308528),
    i = n(843472),
    s = n(355622),
    a = n(428249),
    o = n(451909),
    l = n(734057),
    u = n(460350),
    c = n(381941);
let d = async (e) => {
    let { userId: t, content: n, location: d, openChannel: _ = !0, whenReady: f = !1, entry: p, nonce: h } = e,
        { valid: E, failureReason: m } = await (0, u.i)({ type: s.oU.NORMAL, content: n, channel: null });
    if (!E) throw Error(m);
    let g = _ ? await r.A.openPrivateChannel({ recipientIds: t, location: d }) : await r.A.getOrEnsurePrivateChannel(t),
        A = l.A.getChannel(g);
    if (null == A) throw Error("Failed to open private channel");
    if (null != p)
        (0, a.d)({
            channel: A,
            content: n,
            entry: p,
            whenReady: f,
            doNotNotifyOnError: !1,
            location: c.Hx.USER_PROFILE,
        });
    else {
        let e = o.Ay.parse(A, n);
        return i.A.sendMessage(A.id, e, f, { location: c.Hx.USER_PROFILE, nonce: h });
    }
};
