n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(741914),
    c = n(223283),
    u = n(602009);
function d(e) {
    let { color: t, className: n, variant: a, text: d, lineClamp: f } = e,
        _ = (0, s.xSt)(),
        p = i.useMemo(
            () =>
                null == d
                    ? null
                    : (0, l.Z)(d, !0, {
                          allowHeading: null == f,
                          allowList: null == f,
                          initialHeaderLevel: _,
                      }),
            [d, f, _],
        );
    return (0, r.jsx)(s.Text, {
        className: o()(n, u.markup, {
            [c.lineClamp2Plus]: null != f && f > 1,
            [c.lineClamp1]: 1 === f,
        }),
        color: t,
        variant: a,
        lineClamp: f,
        children: p,
    });
}
