n.d(t, { E: () => d });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(692547),
    l = n(818246),
    u = (function (e) {
        return (e.XXSMALL = 'xxsmall'), (e.XSMALL = 'xsmall'), (e.SMALL = 'small'), (e.LARGE = 'large'), e;
    })(u || {});
let c = 'indeterminate';
function d(e) {
    let t,
        { className: n, percent: a, size: u = 'small', foregroundColor: d = o.Z.unsafe_rawColors.BRAND_500.css, backgroundColor: f = 'var(--background-modifier-active)', foregroundGradientColor: _, animate: p = !0 } = e,
        h = null != a ? a : 0;
    return (
        (t = null != _ ? { background: 'linear-gradient(to right, '.concat(_[0], ', ').concat(_[1], ')') } : { backgroundColor: d }),
        (0, i.jsx)('div', {
            className: s()(n, l.progress, l[u]),
            style: { backgroundColor: f },
            children:
                h !== c && 'number' == typeof h
                    ? (0, i.jsx)('div', {
                          className: s()(l.progressBar, l[u], { [l.animating]: p }),
                          style: {
                              transform: 'translate3d('.concat(Math.min(Math.max(0, h), 100) - 100, '%, 0, 0)'),
                              ...t
                          }
                      })
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)('div', {
                                  className: s()(l.indeterminateBar1, l[u], { [l.animating]: p }),
                                  style: t
                              }),
                              (0, i.jsx)('div', {
                                  className: s()(l.indeterminateBar2, l[u], { [l.animating]: p }),
                                  style: t
                              })
                          ]
                      })
        })
    );
}
(d.Sizes = u), (d.INDETERMINATE = c);
