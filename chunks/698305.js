n.d(t, { Z: () => d }), n(415506);
var r = n(493683),
    i = n(904245),
    a = n(541716),
    o = n(656709),
    s = n(957730),
    l = n(592125),
    c = n(838440),
    u = n(959517);
let d = async (e) => {
    let { userId: t, content: n, location: d, openChannel: f = !0, whenReady: p = !1, entry: _, nonce: m } = e,
        { valid: h, failureReason: g } = await (0, c.v)({
            type: a.Ie.NORMAL,
            content: n,
            channel: null,
        });
    if (!h) throw Error(g);
    let E = f
            ? await r.Z.openPrivateChannel({
                  recipientIds: t,
                  location: d,
              })
            : await r.Z.getOrEnsurePrivateChannel(t),
        b = l.Z.getChannel(E);
    if (null == b) throw Error("Failed to open private channel");
    if (null != _)
        (0, o.p)({
            channel: b,
            content: n,
            entry: _,
            whenReady: p,
            doNotNotifyOnError: !1,
            location: u.dy.USER_PROFILE,
        });
    else {
        let e = s.ZP.parse(b, n);
        return i.Z.sendMessage(b.id, e, p, {
            location: u.dy.USER_PROFILE,
            nonce: m,
        });
    }
};
