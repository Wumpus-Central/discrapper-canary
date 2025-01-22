r.d(n, {
    E: function () {
        return f;
    }
});
var i,
    a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(692547),
    c = r(489421);
!(function (e) {
    (e.XXSMALL = 'xxsmall'), (e.XSMALL = 'xsmall'), (e.SMALL = 'small'), (e.LARGE = 'large');
})(i || (i = {}));
let d = 'indeterminate';
function f(e) {
    let n,
        { className: r, percent: i, size: s = 'small', foregroundColor: f = u.Z.unsafe_rawColors.BRAND_500.css, backgroundColor: p = 'var(--background-modifier-active)', foregroundGradientColor: h, animate: _ = !0 } = e,
        m = null != i ? i : 0;
    return (
        (n = null != h ? { background: 'linear-gradient(to right, '.concat(h[0], ', ').concat(h[1], ')') } : { backgroundColor: f }),
        (0, a.jsx)('div', {
            className: l()(r, c.progress, c[s]),
            style: { backgroundColor: p },
            children:
                m !== d && 'number' == typeof m
                    ? (0, a.jsx)('div', {
                          className: l()(c.progressBar, c[s], { [c.animating]: _ }),
                          style: {
                              transform: 'translate3d('.concat(Math.min(Math.max(0, m), 100) - 100, '%, 0, 0)'),
                              ...n
                          }
                      })
                    : (0, a.jsxs)(o.Fragment, {
                          children: [
                              (0, a.jsx)('div', {
                                  className: l()(c.indeterminateBar1, c[s], { [c.animating]: _ }),
                                  style: n
                              }),
                              (0, a.jsx)('div', {
                                  className: l()(c.indeterminateBar2, c[s], { [c.animating]: _ }),
                                  style: n
                              })
                          ]
                      })
        })
    );
}
(f.Sizes = i), (f.INDETERMINATE = d);
