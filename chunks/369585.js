n.d(t, { G: () => f });
var r = n(255367);
n(73800);
var i = n(120356),
    a = n.n(i),
    o = n(680018),
    s = n(946598);
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
    let { leading: t, actions: n = [], actionsFullWidth: i = !1 } = e;
    return null == t && n.length < 1
        ? null
        : (0, r.jsxs)('footer', {
              className: a()(s.actionBar, s.section),
              children: [
                  null != t &&
                      (0, r.jsx)('div', {
                          className: s.actionBarLeading,
                          children: t
                      }),
                  (0, r.jsx)('div', {
                      className: a()(s.actionBarTrailing, { [s.actionBarTrailingFullWidth]: i }),
                      children:
                          null == n
                              ? void 0
                              : n.map((e, t) =>
                                    (0, r.jsx)(
                                        'div',
                                        {
                                            className: s.actionButtonWrapper,
                                            children: (0, r.jsx)(o.z, d(c({}, e), { fullWidth: i }))
                                        },
                                        t
                                    )
                                )
                  })
              ]
          });
}
