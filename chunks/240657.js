t.d(e, { Z: () => c });
var n = t(200651),
    a = t(192379),
    l = t(120356),
    r = t.n(l),
    i = t(481060),
    o = t(741914),
    s = t(619078),
    d = t(665162);
function c(A) {
    let { color: e, className: t, variant: l, text: c, lineClamp: u } = A,
        g = (0, i.xSt)(),
        m = a.useMemo(
            () =>
                null == c
                    ? null
                    : (0, o.Z)(c, !0, {
                          allowHeading: null == u,
                          allowList: null == u,
                          initialHeaderLevel: g
                      }),
            [c, u, g]
        );
    return (0, n.jsx)(i.Text, {
        className: r()(t, d.markup, {
            [s.lineClamp2Plus]: null != u && u > 1,
            [s.lineClamp1]: 1 === u
        }),
        color: e,
        variant: l,
        lineClamp: u,
        children: m
    });
}
