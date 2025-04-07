n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(481060),
    s = n(741914),
    c = n(497646),
    u = n(73433);
function d(e) {
    let { color: t, className: n, variant: a, text: d, lineClamp: p } = e,
        m = (0, o.xSt)(),
        f = i.useMemo(
            () =>
                null == d
                    ? null
                    : (0, s.Z)(d, !0, {
                          allowHeading: null == p,
                          allowList: null == p,
                          initialHeaderLevel: m
                      }),
            [d, p, m]
        );
    return (0, r.jsx)(o.Text, {
        className: l()(n, u.markup, {
            [c.lineClamp2Plus]: null != p && p > 1,
            [c.lineClamp1]: 1 === p
        }),
        color: t,
        variant: a,
        lineClamp: p,
        children: f
    });
}
