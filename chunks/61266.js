n.d(t, {
    A: () => p,
});
var r = n(627968),
    o = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(46054),
    c = n(465364),
    s = n(207963),
    u = n(647901),
    d = n(560438),
    b = n(483496),
    f = n(206314);

function p(e) {
    let t,
        { content: n, className: a } = e,
        p =
            ((t = (0, s.jc)()),
            (0, o.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, c.ko)(t.message, d.l)
                              : (0, c.Le)({
                                    channelId: t.channelId,
                                    renderOptions: d.l,
                                })),
                      i.A.parse(n, !0, e));
            }, [n, t])),
        _ = (0, u.X)();
    return (0, r.jsx)("div", {
        className: l()(a, f.PT, b.T, _.className),
        children: p,
    });
}
