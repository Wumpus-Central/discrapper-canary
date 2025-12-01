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
    let { userId: t, content: n, location: d, openChannel: f = !0, whenReady: p = !1, entry: _ } = e,
        { valid: m, failureReason: h } = await (0, c.v)({
            type: a.Ie.NORMAL,
            content: n,
            channel: null,
        });
    if (!m) throw Error(h);
    let g = f
            ? await r.Z.openPrivateChannel({
                  recipientIds: t,
                  location: d,
              })
            : await r.Z.getOrEnsurePrivateChannel(t),
        E = l.Z.getChannel(g);
    if (null == E) throw Error("Failed to open private channel");
    if (null != _)
        (0, o.p)({
            channel: E,
            content: n,
            entry: _,
            whenReady: p,
            doNotNotifyOnError: !1,
            location: u.dy.USER_PROFILE,
        });
    else {
        let e = s.ZP.parse(E, n);
        return i.Z.sendMessage(E.id, e, p, { location: u.dy.USER_PROFILE });
    }
};
