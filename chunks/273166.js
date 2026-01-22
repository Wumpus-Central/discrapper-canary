n.d(t, {
    q: () => l,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(252052);

function l(e) {
    let { className: t, header: n, headerClassName: a, children: l } = e,
        c = i.useMemo(() => {
            let e = !1;
            return (
                i.Children.forEach(l, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [l]);
    return (0, r.jsxs)("div", {
        className: s()(o.iE, t),
        children: [
            (0, r.jsx)("div", {
                className: s()(o.wx, a),
                children: n,
            }),
            c &&
                (0, r.jsx)("div", {
                    className: o.Qs,
                    children: l,
                }),
        ],
    });
}
