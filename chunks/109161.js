n.d(t, {
    F: () => _,
    x: () => p
});
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(981729),
    s = n(563373);
function l(e, t, n) {
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
function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
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
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { color: t, className: n, background: i = !0 } = e;
    return null == t
        ? null
        : (0, r.jsxs)('svg', {
              className: o()(s.svg, n),
              viewBox: '0 0 20 20',
              fill: 'none',
              children: [
                  i &&
                      (0, r.jsx)('path', {
                          className: s.background,
                          d: 'M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z'
                      }),
                  (0, r.jsx)('circle', {
                      className: s.dotBorderBase,
                      cx: '10',
                      cy: '10',
                      r: '6'
                  }),
                  (0, r.jsx)('circle', {
                      className: s.dotBorderColor,
                      cx: '10',
                      cy: '10',
                      r: '6',
                      fill: t
                  }),
                  (0, r.jsx)('circle', {
                      className: s.dot,
                      cx: '10',
                      cy: '10',
                      r: '5',
                      fill: t
                  })
              ]
          });
}
function _(e) {
    let { color: t, name: n, tooltip: i = !0 } = e;
    return null == t
        ? null
        : i
          ? (0, r.jsx)(a.u, {
                text: n,
                children: (t) =>
                    (0, r.jsx)(
                        'span',
                        d(c({}, t), {
                            'aria-hidden': !0,
                            children: (0, r.jsx)(f, c({}, e))
                        })
                    )
            })
          : (0, r.jsx)(f, c({}, e));
}
function p(e) {
    let { color: t, className: n } = e;
    return null == t
        ? null
        : (0, r.jsx)('span', {
              className: o()(s.roleCircle, n),
              style: { backgroundColor: t }
          });
}
