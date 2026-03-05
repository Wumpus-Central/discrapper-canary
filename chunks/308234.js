n.d(t, { A: () => u });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(397927),
    o = n(415350),
    d = n(41058),
    c = n(830412);
function u(e) {
    let { color: t, className: n, variant: r, text: u, lineClamp: _ } = e,
        m = (0, s.$Il)(),
        h = l.useMemo(
            () =>
                null == u
                    ? null
                    : (0, o.A)(u, !0, { allowHeading: null == _, allowList: null == _, initialHeaderLevel: m }),
            [u, _, m],
        );
    return (0, i.jsx)(s.Text, {
        className: a()(n, c.PT, { [d.E]: null != _ && _ > 1, [d.D]: 1 === _ }),
        color: t,
        variant: r,
        lineClamp: _,
        children: h,
    });
}
