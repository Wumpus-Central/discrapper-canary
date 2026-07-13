"use strict";
n.d(t, { p: () => u });
var i = n(308528),
    r = n(493336),
    a = n(355622),
    s = n(428249),
    l = n(451909),
    o = n(734057),
    d = n(806150),
    c = n(381941);
async function u(e) {
    let { userId: t, content: n, location: u, openChannel: _ = !0, whenReady: E = !1, entry: A, nonce: h } = e,
        { valid: I, failureReason: f } = await (0, d.i)({ type: a.oU.NORMAL, content: n, channel: null });
    if (!I) throw Error(f);
    let p = _ ? await i.A.openPrivateChannel({ recipientIds: t, location: u }) : await i.A.getOrEnsurePrivateChannel(t),
        T = o.A.getChannel(p);
    if (null == T) throw Error("Failed to open private channel");
    if (null != A)
        (0, s.d)({
            channel: T,
            content: n,
            entry: A,
            whenReady: E,
            doNotNotifyOnError: !1,
            location: c.Hx.USER_PROFILE,
        });
    else {
        let e = l.Ay.parse(T, n);
        return r.A.sendMessage(T.id, e, E, { location: c.Hx.USER_PROFILE, nonce: h });
    }
}
