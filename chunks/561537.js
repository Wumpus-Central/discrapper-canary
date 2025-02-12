n.d(t, { l: () => o });
var i = n(200651),
    s = n(192379),
    l = n(557533),
    r = n.n(l),
    a = n(979393);
function o(e) {
    let { className: t, header: n, headerClassName: l, children: o } = e,
        c = s.useMemo(() => {
            let e = !1;
            return (
                s.Children.forEach(o, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [o]);
    return (0, i.jsxs)('div', {
        className: r()(a.wrapper, t),
        children: [
            (0, i.jsx)('div', {
                className: r()(a.header, l),
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
