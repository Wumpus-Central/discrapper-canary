n.d(t, { p: () => d });
var a = n(308528),
    r = n(843472),
    l = n(355622),
    i = n(428249),
    o = n(451909),
    s = n(734057),
    c = n(460350),
    u = n(381941);
let d = async (e) => {
    let { userId: t, content: n, location: d, openChannel: f = !0, whenReady: _ = !1, entry: h, nonce: A } = e,
        { valid: p, failureReason: m } = await (0, c.i)({ type: l.oU.NORMAL, content: n, channel: null });
    if (!p) throw Error(m);
    let S = f ? await a.A.openPrivateChannel({ recipientIds: t, location: d }) : await a.A.getOrEnsurePrivateChannel(t),
        g = s.A.getChannel(S);
    if (null == g) throw Error("Failed to open private channel");
    if (null != h)
        (0, i.d)({
            channel: g,
            content: n,
            entry: h,
            whenReady: _,
            doNotNotifyOnError: !1,
            location: u.Hx.USER_PROFILE,
        });
    else {
        let e = o.Ay.parse(g, n);
        return r.A.sendMessage(g.id, e, _, { location: u.Hx.USER_PROFILE, nonce: A });
    }
};
