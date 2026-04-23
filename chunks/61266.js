n.d(t, { A: () => m });
var r = n(627968),
    o = n(64700),
    l = n(503698),
    i = n.n(l),
    a = n(46054),
    s = n(465364),
    u = n(207963),
    d = n(647901),
    c = n(560438),
    h = n(958517),
    p = n(992595);
function m(e) {
    let t,
        { content: n, className: l } = e,
        m =
            ((t = (0, u.jc)()),
            (0, o.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, s.ko)(t.message, c.l)
                              : (0, s.Le)({ channelId: t.channelId, renderOptions: c.l })),
                      a.A.parse(n, !0, e));
            }, [n, t])),
        g = (0, d.X)();
    return (0, r.jsx)("div", { className: i()(l, p.PT, h.T, g.className), children: m });
}
