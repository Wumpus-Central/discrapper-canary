n.d(t, { p: () => d });
var l = n(308528),
    r = n(148494),
    a = n(355622),
    i = n(428249),
    s = n(451909),
    o = n(734057),
    u = n(806150),
    c = n(381941);
async function d(e) {
    let { userId: t, content: n, location: d, openChannel: f = !0, whenReady: h = !1, entry: m, nonce: A } = e,
        { valid: x, failureReason: T } = await (0, u.i)({ type: a.oU.NORMAL, content: n, channel: null });
    if (!x) throw Error(T);
    let S = f ? await l.A.openPrivateChannel({ recipientIds: t, location: d }) : await l.A.getOrEnsurePrivateChannel(t),
        g = o.A.getChannel(S);
    if (null == g) throw Error("Failed to open private channel");
    if (null != m)
        (0, i.d)({
            channel: g,
            content: n,
            entry: m,
            whenReady: h,
            doNotNotifyOnError: !1,
            location: c.Hx.USER_PROFILE,
        });
    else {
        let e = s.Ay.parse(g, n);
        return r.A.sendMessage(g.id, e, h, { location: c.Hx.USER_PROFILE, nonce: A });
    }
}
