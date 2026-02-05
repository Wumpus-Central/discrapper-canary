n.d(t, { A: () => x });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(46054),
    o = n(465364),
    d = n(207963),
    c = n(647901),
    u = n(560438),
    g = n(483496),
    m = n(206314);
function x(e) {
    let t,
        { content: n, className: a } = e,
        x =
            ((t = (0, d.jc)()),
            (0, l.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, o.ko)(t.message, u.l)
                              : (0, o.Le)({ channelId: t.channelId, renderOptions: u.l })),
                      s.A.parse(n, !0, e));
            }, [n, t])),
        f = (0, c.X)();
    return (0, i.jsx)("div", { className: r()(a, m.PT, g.T, f.className), children: x });
}
