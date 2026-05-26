"use strict";
n.d(t, { p: () => d });
var i = n(308528),
    r = n(720149),
    s = n(355622),
    a = n(428249),
    o = n(451909),
    l = n(734057),
    u = n(806150),
    c = n(381941);
let d = async (e) => {
    let { userId: t, content: n, location: d, openChannel: _ = !0, whenReady: f = !1, entry: h, nonce: p } = e,
        { valid: E, failureReason: m } = await (0, u.i)({ type: s.oU.NORMAL, content: n, channel: null });
    if (!E) throw Error(m);
    let g = _ ? await i.A.openPrivateChannel({ recipientIds: t, location: d }) : await i.A.getOrEnsurePrivateChannel(t),
        A = l.A.getChannel(g);
    if (null == A) throw Error("Failed to open private channel");
    if (null != h)
        (0, a.d)({
            channel: A,
            content: n,
            entry: h,
            whenReady: f,
            doNotNotifyOnError: !1,
            location: c.Hx.USER_PROFILE,
        });
    else {
        let e = o.Ay.parse(A, n);
        return r.A.sendMessage(A.id, e, f, { location: c.Hx.USER_PROFILE, nonce: p });
    }
};
