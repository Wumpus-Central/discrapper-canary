n.d(e, { G: () => s });
var i = n(255367);
n(73800);
var r = n(120356),
    l = n.n(r),
    a = n(680018),
    d = n(946598);
function s(t) {
    let { leading: e, actions: n = [], actionsFullWidth: r = !1 } = t;
    return null == e && n.length < 1
        ? null
        : (0, i.jsxs)('footer', {
              className: l()(d.actionBar, d.section),
              children: [
                  null != e &&
                      (0, i.jsx)('div', {
                          className: d.actionBarLeading,
                          children: e
                      }),
                  (0, i.jsx)('div', {
                      className: l()(d.actionBarTrailing, { [d.actionBarTrailingFullWidth]: r }),
                      children:
                          null == n
                              ? void 0
                              : n.map((t, e) => {
                                    var n, l;
                                    return (0, i.jsx)(
                                        'div',
                                        {
                                            className: d.actionButtonWrapper,
                                            children: (0, i.jsx)(
                                                a.z,
                                                ((n = (function (t) {
                                                    for (var e = 1; e < arguments.length; e++) {
                                                        var n = null != arguments[e] ? arguments[e] : {},
                                                            i = Object.keys(n);
                                                        'function' == typeof Object.getOwnPropertySymbols &&
                                                            (i = i.concat(
                                                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                                                })
                                                            )),
                                                            i.forEach(function (e) {
                                                                var i;
                                                                (i = n[e]),
                                                                    e in t
                                                                        ? Object.defineProperty(t, e, {
                                                                              value: i,
                                                                              enumerable: !0,
                                                                              configurable: !0,
                                                                              writable: !0
                                                                          })
                                                                        : (t[e] = i);
                                                            });
                                                    }
                                                    return t;
                                                })({}, t)),
                                                (l = l = { fullWidth: r }),
                                                Object.getOwnPropertyDescriptors
                                                    ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                                                    : (function (t, e) {
                                                          var n = Object.keys(t);
                                                          if (Object.getOwnPropertySymbols) {
                                                              var i = Object.getOwnPropertySymbols(t);
                                                              n.push.apply(n, i);
                                                          }
                                                          return n;
                                                      })(Object(l)).forEach(function (t) {
                                                          Object.defineProperty(n, t, Object.getOwnPropertyDescriptor(l, t));
                                                      }),
                                                n)
                                            )
                                        },
                                        e
                                    );
                                })
                  })
              ]
          });
}
