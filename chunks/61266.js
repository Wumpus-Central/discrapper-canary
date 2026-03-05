n.d(t, { A: () => x });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(46054),
    d = n(465364),
    o = n(207963),
    c = n(647901),
    u = n(560438),
    _ = n(483496),
    m = n(206314);
function x(e) {
    let t,
        { content: n, className: r } = e,
        x =
            ((t = (0, o.jc)()),
            (0, a.useMemo)(() => {
                let e;
                return null === t
                    ? null
                    : ((e =
                          null != t.message
                              ? (0, d.ko)(t.message, u.l)
                              : (0, d.Le)({ channelId: t.channelId, renderOptions: u.l })),
                      s.A.parse(n, !0, e));
            }, [n, t])),
        p = (0, c.X)();
    return (0, l.jsx)("div", { className: i()(r, m.PT, _.T, p.className), children: x });
}
