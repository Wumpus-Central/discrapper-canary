r.d(t, { Z: () => d });
var n = r(200651),
    A = r(192379),
    a = r(120356),
    o = r.n(a),
    l = r(481060),
    i = r(741914),
    s = r(497646),
    c = r(73433);
function d(e) {
    let { color: t, className: r, variant: a, text: d, lineClamp: u } = e,
        g = (0, l.xSt)(),
        f = A.useMemo(
            () =>
                null == d
                    ? null
                    : (0, i.Z)(d, !0, {
                          allowHeading: null == u,
                          allowList: null == u,
                          initialHeaderLevel: g
                      }),
            [d, u, g]
        );
    return (0, n.jsx)(l.Text, {
        className: o()(r, c.markup, {
            [s.lineClamp2Plus]: null != u && u > 1,
            [s.lineClamp1]: 1 === u
        }),
        color: t,
        variant: a,
        lineClamp: u,
        children: f
    });
}
