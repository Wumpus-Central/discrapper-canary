n.d(t, { Z: () => d });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(741914),
    c = n(104559),
    u = n(430864);
function d(e) {
    let { color: t, className: n, variant: l, text: d, lineClamp: p } = e,
        m = (0, a.xSt)(),
        f = i.useMemo(
            () =>
                null == d
                    ? null
                    : (0, s.Z)(d, !0, {
                          allowHeading: null == p,
                          allowList: null == p,
                          initialHeaderLevel: m,
                      }),
            [d, p, m],
        );
    return (0, r.jsx)(a.Text, {
        className: o()(n, u.markup, {
            [c.lineClamp2Plus]: null != p && p > 1,
            [c.lineClamp1]: 1 === p,
        }),
        color: t,
        variant: l,
        lineClamp: p,
        children: f,
    });
}
