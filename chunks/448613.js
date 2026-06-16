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
    let { userId: t, content: n, location: d, openChannel: f = !0, whenReady: h = !1, entry: A, nonce: m } = e,
        { valid: x, failureReason: g } = await (0, u.i)({ type: a.oU.NORMAL, content: n, channel: null });
    if (!x) throw Error(g);
    let S = f ? await l.A.openPrivateChannel({ recipientIds: t, location: d }) : await l.A.getOrEnsurePrivateChannel(t),
        T = o.A.getChannel(S);
    if (null == T) throw Error("Failed to open private channel");
    if (null != A)
        (0, i.d)({
            channel: T,
            content: n,
            entry: A,
            whenReady: h,
            doNotNotifyOnError: !1,
            location: c.Hx.USER_PROFILE,
        });
    else {
        let e = s.Ay.parse(T, n);
        return r.A.sendMessage(T.id, e, h, { location: c.Hx.USER_PROFILE, nonce: m });
    }
};
