A.d(t, {
    Z: function () {
        return c;
    }
});
var n = A(200651),
    r = A(192379),
    a = A(120356),
    i = A.n(a),
    l = A(481060),
    o = A(741914),
    s = A(619078),
    d = A(665162);
function c(e) {
    let { color: t, className: A, variant: a, text: c, lineClamp: u } = e,
        g = (0, l.usePrivateHeadingLevel)(),
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
    return (0, n.jsx)(l.Text, {
        className: i()(A, d.markup, {
            [s.lineClamp2Plus]: null != u && u > 1,
            [s.lineClamp1]: 1 === u
        }),
        color: t,
        variant: a,
        lineClamp: u,
        children: h
    });
}
