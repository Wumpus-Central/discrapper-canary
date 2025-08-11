n.d(t, { Z: () => d }), n(415506);
var r = n(493683),
    i = n(904245),
    o = n(541716),
    a = n(656709),
    s = n(957730),
    l = n(592125),
    c = n(838440),
    u = n(959517);
let d = async (e) => {
    let { userId: t, content: n, location: d, openChannel: f = !0, whenReady: _ = !1, entry: p } = e,
        { valid: h, failureReason: m } = await (0, c.v)({
            type: o.Ie.NORMAL,
            content: n,
            channel: null,
        });
    if (!h) throw Error(m);
    let g = f
            ? await r.Z.openPrivateChannel({
                  recipientIds: t,
                  location: d,
              })
            : await r.Z.getOrEnsurePrivateChannel(t),
        E = l.Z.getChannel(g);
    if (null == E) throw Error("Failed to open private channel");
    if (null != p)
        (0, a.p)({
            channel: E,
            content: n,
            entry: p,
            whenReady: _,
            doNotNotifyOnError: !1,
            location: u.dy.USER_PROFILE,
        });
    else {
        let e = s.ZP.parse(E, n);
        return i.Z.sendMessage(E.id, e, _, { location: u.dy.USER_PROFILE });
    }
};
