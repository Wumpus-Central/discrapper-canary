r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(411104);
var a = r(493683),
    o = r(904245),
    s = r(541716),
    l = r(656709),
    u = r(957730),
    c = r(592125),
    d = r(838440);
let f = async (e) => {
    let { userId: n, content: r, location: i, openChannel: f = !0, whenReady: p, entry: h } = e,
        { valid: _, failureReason: m } = await (0, d.v)({
            type: s.Ie.NORMAL,
            content: r,
            channel: null
        });
    if (!_) throw Error(m);
    let g = f ? await a.Z.openPrivateChannel(n, !1, !1, i) : await a.Z.getOrEnsurePrivateChannel(n),
        E = c.Z.getChannel(g);
    if (null == E) throw Error('Failed to open private channel');
    if (null != h)
        (0, l.p)({
            channel: E,
            content: r,
            entry: h,
            whenReady: p
        });
    else {
        let e = u.ZP.parse(E, r);
        return o.Z.sendMessage(E.id, e, p);
    }
};
