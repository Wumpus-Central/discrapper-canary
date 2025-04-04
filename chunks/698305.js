n.d(t, { Z: () => u }), n(411104);
var r = n(493683),
    i = n(904245),
    o = n(541716),
    a = n(656709),
    s = n(957730),
    l = n(592125),
    c = n(838440);
let u = async (e) => {
    let { userId: t, content: n, location: u, openChannel: d = !0, whenReady: f, entry: _ } = e,
        { valid: p, failureReason: h } = await (0, c.v)({
            type: o.Ie.NORMAL,
            content: n,
            channel: null
        });
    if (!p) throw Error(h);
    let m = d ? await r.Z.openPrivateChannel(t, !1, !1, u) : await r.Z.getOrEnsurePrivateChannel(t),
        g = l.Z.getChannel(m);
    if (null == g) throw Error('Failed to open private channel');
    if (null != _)
        (0, a.p)({
            channel: g,
            content: n,
            entry: _,
            whenReady: f
        });
    else {
        let e = s.ZP.parse(g, n);
        return i.Z.sendMessage(g.id, e, f);
    }
};
