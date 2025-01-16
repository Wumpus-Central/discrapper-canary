r.d(n, {
    F: function () {
        return c;
    },
    x: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(981729),
    l = r(783733);
function u(e) {
    let { color: n, className: r, background: a = !0 } = e;
    return null == n
        ? null
        : (0, i.jsxs)('svg', {
              className: s()(l.svg, r),
              viewBox: '0 0 20 20',
              fill: 'none',
              children: [
                  a &&
                      (0, i.jsx)('path', {
                          className: l.background,
                          d: 'M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z'
                      }),
                  (0, i.jsx)('circle', {
                      className: l.dotBorderBase,
                      cx: '10',
                      cy: '10',
                      r: '6'
                  }),
                  (0, i.jsx)('circle', {
                      className: l.dotBorderColor,
                      cx: '10',
                      cy: '10',
                      r: '6',
                      fill: n
                  }),
                  (0, i.jsx)('circle', {
                      className: l.dot,
                      cx: '10',
                      cy: '10',
                      r: '5',
                      fill: n
                  })
              ]
          });
}
function c(e) {
    let { color: n, name: r, tooltip: a = !0 } = e;
    return null == n
        ? null
        : a
          ? (0, i.jsx)(o.u, {
                text: r,
                children: (n) =>
                    (0, i.jsx)('span', {
                        ...n,
                        'aria-hidden': !0,
                        children: (0, i.jsx)(u, { ...e })
                    })
            })
          : (0, i.jsx)(u, { ...e });
}
function d(e) {
    let { color: n, className: r } = e;
    return null == n
        ? null
        : (0, i.jsx)('span', {
              className: s()(l.roleCircle, r),
              style: { backgroundColor: n }
          });
}
