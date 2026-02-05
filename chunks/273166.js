n.d(t, { q: () => o });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(252052);
function o(e) {
    let { className: t, header: n, headerClassName: r, children: o } = e,
        c = s.useMemo(() => {
            let e = !1;
            return (
                s.Children.forEach(o, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [o]);
    return (0, i.jsxs)("div", {
        className: a()(l.iE, t),
        children: [
            (0, i.jsx)("div", { className: a()(l.wx, r), children: n }),
            c && (0, i.jsx)("div", { className: l.Qs, children: o }),
        ],
    });
}
