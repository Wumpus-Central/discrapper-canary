n.d(t, { p: () => d });
var l = n(308528),
    r = n(720149),
    a = n(355622),
    i = n(428249),
    s = n(451909),
    o = n(734057),
    u = n(806150),
    c = n(381941);
let d = async (e) => {
    let { userId: t, content: n, location: d, openChannel: h = !0, whenReady: f = !1, entry: A, nonce: m } = e,
        { valid: S, failureReason: x } = await (0, u.i)({ type: a.oU.NORMAL, content: n, channel: null });
    if (!S) throw Error(x);
    let T = h ? await l.A.openPrivateChannel({ recipientIds: t, location: d }) : await l.A.getOrEnsurePrivateChannel(t),
        g = o.A.getChannel(T);
    if (null == g) throw Error("Failed to open private channel");
    if (null != A)
        (0, i.d)({
            channel: g,
            content: n,
            entry: A,
            whenReady: f,
            doNotNotifyOnError: !1,
            location: c.Hx.USER_PROFILE,
        });
    else {
        let e = s.Ay.parse(g, n);
        return r.A.sendMessage(g.id, e, f, { location: c.Hx.USER_PROFILE, nonce: m });
    }
};
