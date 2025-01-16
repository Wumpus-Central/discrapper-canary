n.d(t, {
    l: function () {
        return o;
    }
});
var i = n(200651),
    r = n(192379),
    s = n(557533),
    a = n.n(s),
    l = n(742493);
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
        className: a()(l.wrapper, t),
        children: [
            (0, i.jsx)('div', {
                className: a()(l.header, s),
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
