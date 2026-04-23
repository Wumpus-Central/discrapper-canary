n.d(t, { q: () => o });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(920087);
function o(e) {
    let { className: t, header: n, headerClassName: l, children: o } = e,
        d = s.useMemo(() => {
            let e = !1;
            return (
                s.Children.forEach(o, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [o]);
    return (0, i.jsxs)("div", {
        className: a()(r.iE, t),
        children: [
            (0, i.jsx)("div", { className: a()(r.wx, l), children: n }),
            d && (0, i.jsx)("div", { className: r.Qs, children: o }),
        ],
    });
}
