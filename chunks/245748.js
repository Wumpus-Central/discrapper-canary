n.d(t, {
    A: () => o,
}),
    n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(606878);

function o(e) {
    let { children: t, className: n, flashKey: i } = e,
        [o, c] = l.useState(!1),
        u = l.useRef(null);
    return (
        l.useEffect(
            () => (
                c(!0),
                (u.current = window.setTimeout(() => {
                    c(!1);
                }, 2e3)),
                () => {
                    null != u.current && clearTimeout(u.current);
                }
            ),
            [i],
        ),
        (0, r.jsx)("div", {
            "data-flash": o,
            className: a()(s.j, n),
            children: t,
        })
    );
}
