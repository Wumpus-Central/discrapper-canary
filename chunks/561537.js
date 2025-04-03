n.d(t, { l: () => o });
var r = n(200651),
    i = n(192379),
    s = n(557533),
    a = n.n(s),
    l = n(603116);
function o(e) {
    let { className: t, header: n, headerClassName: s, children: o } = e,
        c = i.useMemo(() => {
            let e = !1;
            return (
                i.Children.forEach(o, (t) => {
                    null != t && (e = !0);
                }),
                e
            );
        }, [o]);
    return (0, r.jsxs)('div', {
        className: a()(l.wrapper, t),
        children: [
            (0, r.jsx)('div', {
                className: a()(l.header, s),
                children: n
            }),
            c &&
                (0, r.jsx)('div', {
                    className: l.content,
                    children: o
                })
        ]
    });
}
