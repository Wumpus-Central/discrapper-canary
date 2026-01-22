n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(415350),
    c = n(366468),
    u = n(206314);

function d(e) {
    let { color: t, className: n, variant: a, text: d, lineClamp: f } = e,
        p = (0, o.$Il)(),
        _ = i.useMemo(
            () =>
                null == d
                    ? null
                    : (0, l.A)(d, !0, {
                          allowHeading: null == f,
                          allowList: null == f,
                          initialHeaderLevel: p,
                      }),
            [d, f, p],
        );
    return (0, r.jsx)(o.Text, {
        className: s()(n, u.PT, {
            [c.E]: null != f && f > 1,
            [c.D]: 1 === f,
        }),
        color: t,
        variant: a,
        lineClamp: f,
        children: _,
    });
}
