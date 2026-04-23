n.d(t, { A: () => o });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(33453);
function o(e) {
    let { children: t, className: n, flashKey: a } = e,
        [o, c] = l.useState(!1),
        d = l.useRef(null);
    return (
        l.useEffect(
            () => (
                c(!0),
                (d.current = window.setTimeout(() => {
                    c(!1);
                }, 2e3)),
                () => {
                    null != d.current && clearTimeout(d.current);
                }
            ),
            [a],
        ),
        (0, i.jsx)("div", { "data-flash": o, className: s()(r.j, n), children: t })
    );
}
