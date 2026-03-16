n.d(t, { A: () => u });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(397927),
    o = n(415350),
    d = n(366468),
    c = n(206314);
function u(e) {
    let { color: t, className: n, variant: a, text: u, lineClamp: _ } = e,
        m = (0, s.$Il)(),
        h = r.useMemo(
            () =>
                null == u
                    ? null
                    : (0, o.A)(u, !0, { allowHeading: null == _, allowList: null == _, initialHeaderLevel: m }),
            [u, _, m],
        );
    return (0, i.jsx)(s.Text, {
        className: l()(n, c.PT, { [d.E]: null != _ && _ > 1, [d.D]: 1 === _ }),
        color: t,
        variant: a,
        lineClamp: _,
        children: h,
    });
}
