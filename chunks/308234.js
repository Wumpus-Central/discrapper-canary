n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(397927),
    o = n(415350),
    d = n(366468),
    c = n(206314);
function u(e) {
    let { color: t, className: n, variant: a, text: u, lineClamp: m } = e,
        _ = (0, s.$Il)(),
        h = l.useMemo(
            () =>
                null == u
                    ? null
                    : (0, o.A)(u, !0, { allowHeading: null == m, allowList: null == m, initialHeaderLevel: _ }),
            [u, m, _],
        );
    return (0, i.jsx)(s.Text, {
        className: r()(n, c.PT, { [d.E]: null != m && m > 1, [d.D]: 1 === m }),
        color: t,
        variant: a,
        lineClamp: m,
        children: h,
    });
}
