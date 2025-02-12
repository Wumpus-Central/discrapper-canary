n.d(t, { Z: () => u });
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(481060),
    o = n(741914),
    c = n(469614),
    d = n(663362);
function u(e) {
    let { color: t, className: n, variant: a, text: u, lineClamp: m } = e,
        _ = (0, s.xSt)(),
        h = l.useMemo(
            () =>
                null == u
                    ? null
                    : (0, o.Z)(u, !0, {
                          allowHeading: null == m,
                          allowList: null == m,
                          initialHeaderLevel: _
                      }),
            [u, m, _]
        );
    return (0, i.jsx)(s.Text, {
        className: r()(n, d.markup, {
            [c.lineClamp2Plus]: null != m && m > 1,
            [c.lineClamp1]: 1 === m
        }),
        color: t,
        variant: a,
        lineClamp: m,
        children: h
    });
}
