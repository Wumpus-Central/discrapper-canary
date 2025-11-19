n.d(t, { l: () => l });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(61358);
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
        className: o()(s.wrapper, t),
        children: [
            (0, r.jsx)("div", {
                className: o()(s.header, a),
                children: n,
            }),
            c &&
                (0, r.jsx)("div", {
                    className: s.content,
                    children: l,
                }),
        ],
    });
}
