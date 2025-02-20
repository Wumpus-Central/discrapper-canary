r.d(t, { Z: () => d });
var A = r(200651),
    n = r(192379),
    o = r(120356),
    a = r.n(o),
    l = r(481060),
    i = r(741914),
    s = r(445992),
    c = r(368365);
function d(e) {
    let { color: t, className: r, variant: o, text: d, lineClamp: u } = e,
        f = (0, l.xSt)(),
        g = n.useMemo(
            () =>
                null == d
                    ? null
                    : (0, i.Z)(d, !0, {
                          allowHeading: null == u,
                          allowList: null == u,
                          initialHeaderLevel: f
                      }),
            [d, u, f]
        );
    return (0, A.jsx)(l.Text, {
        className: a()(r, c.markup, {
            [s.lineClamp2Plus]: null != u && u > 1,
            [s.lineClamp1]: 1 === u
        }),
        color: t,
        variant: o,
        lineClamp: u,
        children: g
    });
}
