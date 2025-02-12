n.d(t, {
    R: () => l,
    v: () => u
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    o = n(228622),
    l = (function (e) {
        return (e.H1 = 'h1'), (e.H2 = 'h2'), (e.H3 = 'h3'), (e.H4 = 'h4'), (e.H5 = 'h5'), (e.LABEL = 'label'), (e.LEGEND = 'legend'), e;
    })({});
function u(e) {
    let t,
        { tag: n = 'h5', children: r, className: l, faded: u, disabled: c, required: d = !1, error: f, errorId: _, ...p } = e;
    switch (n) {
        case 'legend':
        case 'label':
            t = n;
            break;
        default:
            t = s.H;
    }
    return (0, i.jsxs)(t, {
        className: a()(o[n], 'h5' !== n ? o.defaultColor : null, l, {
            [o['defaultMargin'.concat(n)]]: null == l,
            [o.faded]: u,
            [o.disabled]: c,
            [o.error]: null != f
        }),
        ...p,
        children: [
            r,
            d && null == f
                ? (0, i.jsx)('span', {
                      className: o.required,
                      children: '*'
                  })
                : null,
            null != f
                ? (0, i.jsxs)('span', {
                      id: _,
                      className: o.errorMessage,
                      children: [
                          null != r
                              ? (0, i.jsx)('span', {
                                    className: o.errorSeparator,
                                    children: '-'
                                })
                              : null,
                          f
                      ]
                  })
                : null
        ]
    });
}
