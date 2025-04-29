n.d(t, { l: () => o });
var i = n(255367),
    r = n(73800),
    s = n(120356),
    l = n.n(s),
    a = n(603116);
function o(e) {
    let { className: t, header: n, headerClassName: s, children: o } = e,
        c = r.useMemo(() => {
            let e = !1;
            return (
                r.Children.forEach(o, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [o]);
    return (0, i.jsxs)('div', {
        className: l()(a.wrapper, t),
        children: [
            (0, i.jsx)('div', {
                className: l()(a.header, s),
                children: n
            }),
            c &&
                (0, i.jsx)('div', {
                    className: a.content,
                    children: o
                })
        ]
    });
}
