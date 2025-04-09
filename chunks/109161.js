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
    l = n(563373);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e, t) {
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
function f(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function _(e, t, n) {
    return i.useMemo(() => {
        let i = [e, t, n].filter((e) => null != e),
            o = i.length >= 2,
            a = i.length > 1 ? 100 / (i.length - 1) : 0,
            s = i.map((e, t) =>
                (0, r.jsx)(
                    'stop',
                    {
                        offset: ''.concat(t * a, '%'),
                        style: { stopColor: e }
                    },
                    t
                )
            ),
            l = i.join('');
        return {
            hasGradient: o,
            stops: s,
            gradientId: 'dotGradient-'.concat(l),
            animatedGradientId: 'dotAnimatedGradient-'.concat(l)
        };
    }, [e, t, n]);
}
function p(e) {
    var t;
    let { color: n, colors: o, className: s, background: c = !0 } = e,
        [u, d] = i.useState(!1),
        f = null != (t = null == o ? void 0 : o.primaryColor) ? t : n,
        { hasGradient: p, stops: h, gradientId: m, animatedGradientId: g } = _(f, null == o ? void 0 : o.secondaryColor, null == o ? void 0 : o.tertiaryColor);
    return null == f
        ? null
        : (0, r.jsxs)('svg', {
              className: a()(l.svg, s),
              viewBox: '0 0 20 20',
              fill: 'none',
              onMouseEnter: () => {
                  d(!0);
              },
              onMouseLeave: () => {
                  d(!1);
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
                  c &&
                      (0, r.jsx)('path', {
                          className: l.background,
                          d: 'M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z'
                      }),
                  (0, r.jsx)('circle', {
                      className: l.dotBorderBase,
                      cx: '10',
                      cy: '10',
                      r: '6'
                  }),
                  (0, r.jsx)('circle', {
                      className: l.dotBorderColor,
                      cx: '10',
                      cy: '10',
                      r: '6',
                      fill: p ? 'url(#'.concat(m, ')') : f
                  }),
                  (0, r.jsx)('circle', {
                      className: l.dot,
                      cx: '10',
                      cy: '10',
                      r: '5',
                      fill: p ? 'url(#'.concat(u ? g : m, ')') : f
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
                        f(u({}, t), {
                            'aria-hidden': !0,
                            children: (0, r.jsx)(p, u({}, e))
                        })
                    )
            })
          : (0, r.jsx)(p, u({}, e));
}
function m(e) {
    let { color: t, className: n } = e;
    return null == t
        ? null
        : (0, r.jsx)('span', {
              className: a()(l.roleCircle, n),
              style: { backgroundColor: t }
          });
}
