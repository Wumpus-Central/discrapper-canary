n.d(t, { G: () => c });
var r = n(255367);
n(73800);
var l = n(120356),
    i = n.n(l),
    a = n(680018),
    o = n(946598);
function c(e) {
    let { leading: t, actions: n = [], actionsFullWidth: l = !1 } = e;
    return null == t && n.length < 1
        ? null
        : (0, r.jsxs)('footer', {
              className: i()(o.actionBar, o.section),
              children: [
                  null != t &&
                      (0, r.jsx)('div', {
                          className: o.actionBarLeading,
                          children: t
                      }),
                  (0, r.jsx)('div', {
                      className: i()(o.actionBarTrailing, { [o.actionBarTrailingFullWidth]: l }),
                      children:
                          null == n
                              ? void 0
                              : n.map((e, t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        'div',
                                        {
                                            className: o.actionButtonWrapper,
                                            children: (0, r.jsx)(
                                                a.z,
                                                ((n = (function (e) {
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
                                                                var r;
                                                                (r = n[t]),
                                                                    t in e
                                                                        ? Object.defineProperty(e, t, {
                                                                              value: r,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (e[t] = r);
                                                            });
                                                    }
                                                    return e;
                                                })({}, e)),
                                                (i = i = { fullWidth: l }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                                    : (function (e, t) {
                                                          var n = Object.keys(e);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var r = Object.getOwnPropertySymbols(e);
                                                              n.push.apply(n, r);
                                                          }
                                                          return n;
                                                      })(Object(i)).forEach(function (e) {
                                                          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                                      }),
                                                n)
                                            )
                                        },
                                        t
                                    );
                                })
                  })
              ]
          });
}
