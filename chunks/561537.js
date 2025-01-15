n.d(t, {
    l: function () {
        return o;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(557533),
    a = n.n(r),
    l = n(742493);
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
    return (0, i.jsxs)('div', {
        className: a()(l.wrapper, t),
        children: [
            (0, i.jsx)('div', {
                className: a()(l.header, r),
                children: n
            }),
            c &&
                (0, i.jsx)('div', {
                    className: l.content,
                    children: o
                })
        ]
    });
}
