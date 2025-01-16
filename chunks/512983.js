r.d(n, {
    R: function () {
        return i;
    },
    v: function () {
        return c;
    }
});
var i,
    a = r(200651);
r(192379);
var s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(488256);
function c(e) {
    let n,
        { tag: r = 'h5', children: i, className: s, faded: c, disabled: d, required: f = !1, error: _, errorId: h, ...p } = e;
    switch (r) {
        case 'legend':
        case 'label':
            n = r;
            break;
        default:
            n = l.H;
    }
    return (0, a.jsxs)(n, {
        className: o()(u[r], 'h5' !== r ? u.defaultColor : null, s, {
            [u['defaultMargin'.concat(r)]]: null == s,
            [u.faded]: c,
            [u.disabled]: d,
            [u.error]: null != _
        }),
        ...p,
        children: [
            i,
            f && null == _
                ? (0, a.jsx)('span', {
                      className: u.required,
                      children: '*'
                  })
                : null,
            null != _
                ? (0, a.jsxs)('span', {
                      id: h,
                      className: u.errorMessage,
                      children: [
                          null != i
                              ? (0, a.jsx)('span', {
                                    className: u.errorSeparator,
                                    children: '-'
                                })
                              : null,
                          _
                      ]
                  })
                : null
        ]
    });
}
!(function (e) {
    (e.H1 = 'h1'), (e.H2 = 'h2'), (e.H3 = 'h3'), (e.H4 = 'h4'), (e.H5 = 'h5'), (e.LABEL = 'label'), (e.LEGEND = 'legend');
})(i || (i = {}));
