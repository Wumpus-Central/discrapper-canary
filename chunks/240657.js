n.d(t, {
    Z: function () {
        return c;
    }
});
var A = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(741914),
    s = n(619078),
    d = n(665162);
function c(e) {
    let { color: t, className: n, variant: a, text: c, lineClamp: u } = e,
        g = (0, i.usePrivateHeadingLevel)(),
        h = r.useMemo(
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
    return (0, A.jsx)(i.Text, {
        className: l()(n, d.markup, {
            [s.lineClamp2Plus]: null != u && u > 1,
            [s.lineClamp1]: 1 === u
        }),
        color: t,
        variant: a,
        lineClamp: u,
        children: h
    });
}
