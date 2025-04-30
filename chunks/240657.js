n.d(t, { Z: () => d });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(741914),
    c = n(497646),
    u = n(73433);
function d(e) {
    let { color: t, className: n, variant: l, text: d, lineClamp: p } = e,
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
        className: a()(n, u.markup, {
            [c.lineClamp2Plus]: null != p && p > 1,
            [c.lineClamp1]: 1 === p
        }),
        color: t,
        variant: l,
        lineClamp: p,
        children: f
    });
}
