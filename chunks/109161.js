n.d(t, {
    F: () => m,
    x: () => g
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
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
function p(e, t, n) {
    return i.useMemo(() => {
        let i = [e, t, n].filter((e) => null != e),
            a = i.length >= 2,
            o = i.length > 1 ? 100 / (i.length - 1) : 0,
            s = i.map((e, t) =>
                (0, r.jsx)(
                    'stop',
                    {
                        offset: ''.concat(t * o, '%'),
                        style: { stopColor: e }
                    },
                    t
                )
            ),
            l = i.join('');
        return {
            hasGradient: a,
            stops: s,
            gradientId: 'dotGradient-'.concat(l),
            animatedGradientId: 'dotAnimatedGradient-'.concat(l)
        };
    }, [e, t, n]);
}
function h(e) {
    var t;
    let { color: n, colors: a, className: s, background: l = !0 } = e,
        [u, d] = i.useState(!1),
        f = null != (t = null == a ? void 0 : a.primaryColor) ? t : n,
        { hasGradient: _, stops: h, gradientId: m, animatedGradientId: g } = p(f, null == a ? void 0 : a.secondaryColor, null == a ? void 0 : a.tertiaryColor);
    return null == f
        ? null
        : (0, r.jsxs)('svg', {
              className: o()(c.svg, s),
              viewBox: '0 0 20 20',
              fill: 'none',
              onMouseEnter: () => {
                  d(!0);
              },
              onMouseLeave: () => {
                  d(!1);
              },
              children: [
                  _ &&
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
                  l &&
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
                      fill: _ ? 'url(#'.concat(m, ')') : f
                  }),
                  (0, r.jsx)('circle', {
                      className: c.dot,
                      cx: '10',
                      cy: '10',
                      r: '5',
                      fill: _ ? 'url(#'.concat(u ? g : m, ')') : f
                  })
              ]
          });
}
function m(e) {
    let { color: t, colors: n, name: i, tooltip: a = !0 } = e;
    return null == t && null == n
        ? null
        : a
          ? (0, r.jsx)(s.u, {
                text: i,
                children: (t) =>
                    (0, r.jsx)(
                        'span',
                        _(d({}, t), {
                            'aria-hidden': !0,
                            children: (0, r.jsx)(h, d({}, e))
                        })
                    )
            })
          : (0, r.jsx)(h, d({}, e));
}
function g(e) {
    let { color: t, colors: n, className: i } = e,
        { gradientStyle: a, gradientClassname: s } = (0, l.I)({
            primaryColor: null == n ? void 0 : n.primaryColor,
            secondaryColor: null == n ? void 0 : n.secondaryColor,
            tertiaryColor: null == n ? void 0 : n.tertiaryColor,
            roleStyle: 'dot'
        });
    if (null == t && null == n) return null;
    let u = null != n && null != n.primaryColor && null != n.secondaryColor,
        f = d({}, u ? a : { backgroundColor: t });
    return (0, r.jsx)('span', {
        className: o()(c.roleCircle, i, { [s]: u }),
        style: f
    });
}
