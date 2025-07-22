(n.d(t, { Z: () => u }), n(415506));
var r = n(493683),
    i = n(904245),
    a = n(541716),
    o = n(656709),
    s = n(957730),
    l = n(592125),
    c = n(838440);
let u = async (e) => {
    let { userId: t, content: n, location: u, openChannel: d = !0, whenReady: _, entry: f } = e,
        { valid: p, failureReason: h } = await (0, c.v)({
            type: a.Ie.NORMAL,
            content: n,
            channel: null
        });
    if (!p) throw Error(h);
    let m = d
            ? await r.Z.openPrivateChannel({
                  recipientIds: t,
                  location: u
              })
            : await r.Z.getOrEnsurePrivateChannel(t),
        g = l.Z.getChannel(m);
    if (null == g) throw Error('Failed to open private channel');
    if (null != f)
        (0, o.p)({
            channel: g,
            content: n,
            entry: f,
            whenReady: _
        });
    else {
        let e = s.ZP.parse(g, n);
        return i.Z.sendMessage(g.id, e, _);
    }
};
