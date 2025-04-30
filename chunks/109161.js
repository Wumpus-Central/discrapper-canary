n.d(t, {
    F: () => h,
    x: () => m
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(981729),
    l = n(865672),
    c = n(563373);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    var t;
    let { color: n, colors: o, className: s, background: u = !0 } = e,
        [d, f] = i.useState(!1),
        _ = null != (t = null == o ? void 0 : o.primaryColor) ? t : n,
        { hasGradient: p, stops: h, gradientId: m, animatedGradientId: g } = (0, l.De)(_, null == o ? void 0 : o.secondaryColor, null == o ? void 0 : o.tertiaryColor);
    return null == _
        ? null
        : (0, r.jsxs)('svg', {
              className: a()(c.svg, s),
              viewBox: '0 0 20 20',
              fill: 'none',
              onMouseEnter: () => {
                  f(!0);
              },
              onMouseLeave: () => {
                  f(!1);
              },
              children: [
                  p &&
                      (0, r.jsxs)('defs', {
                          children: [
                              (0, r.jsx)('linearGradient', {
                                  id: m,
                                  x1: '0%',
                                  y1: '0%',
                                  x2: '100%',
                                  y2: '0%',
                                  spreadMethod: 'reflect',
                                  children: h
                              }),
                              (0, r.jsxs)('linearGradient', {
                                  id: g,
                                  x1: '0%',
                                  y1: '0%',
                                  x2: '100%',
                                  y2: '0%',
                                  spreadMethod: 'reflect',
                                  children: [
                                      h,
                                      (0, r.jsx)('animate', {
                                          attributeName: 'x1',
                                          from: '0%',
                                          to: '200%',
                                          dur: '3s',
                                          repeatCount: 'indefinite'
                                      }),
                                      (0, r.jsx)('animate', {
                                          attributeName: 'x2',
                                          from: '100%',
                                          to: '300%',
                                          dur: '3s',
                                          repeatCount: 'indefinite'
                                      })
                                  ]
                              })
                          ]
                      }),
                  u &&
                      (0, r.jsx)('path', {
                          className: c.background,
                          d: 'M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z'
                      }),
                  (0, r.jsx)('circle', {
                      className: c.dotBorderBase,
                      cx: '10',
                      cy: '10',
                      r: '6'
                  }),
                  (0, r.jsx)('circle', {
                      className: c.dotBorderColor,
                      cx: '10',
                      cy: '10',
                      r: '6',
                      fill: p ? 'url(#'.concat(m, ')') : _
                  }),
                  (0, r.jsx)('circle', {
                      className: c.dot,
                      cx: '10',
                      cy: '10',
                      r: '5',
                      fill: p ? 'url(#'.concat(d ? g : m, ')') : _
                  })
              ]
          });
}
function h(e) {
    let { color: t, colors: n, name: i, tooltip: o = !0 } = e;
    return null == t && null == n
        ? null
        : o
          ? (0, r.jsx)(s.u, {
                text: i,
                children: (t) =>
                    (0, r.jsx)(
                        'span',
                        _(d({}, t), {
                            'aria-hidden': !0,
                            children: (0, r.jsx)(p, d({}, e))
                        })
                    )
            })
          : (0, r.jsx)(p, d({}, e));
}
function m(e) {
    let { color: t, colors: n, className: i } = e,
        { gradientStyle: o, gradientClassname: s } = (0, l.Ic)({
            primaryColor: null == n ? void 0 : n.primaryColor,
            secondaryColor: null == n ? void 0 : n.secondaryColor,
            tertiaryColor: null == n ? void 0 : n.tertiaryColor,
            roleStyle: 'dot'
        });
    if (null == t && null == n) return null;
    let u = null != n && null != n.primaryColor && null != n.secondaryColor,
        f = d({}, u ? o : { backgroundColor: t });
    return (0, r.jsx)('span', {
        className: a()(c.roleCircle, i, { [s]: u }),
        style: f
    });
}
