n.d(t, { k: () => c });
var i = n(255367);
n(73800);
var r = n(120356),
    s = n.n(r),
    l = n(680018),
    a = n(374415),
    o = n(669546);
function c(e) {
    let { buttons: t, className: n } = e;
    return (0, i.jsx)('div', {
        className: s()(o.actionBar, n),
        children: (0, i.jsx)(a.h, {
            size: 'sm',
            fullWidth: !0,
            direction: 'vertical',
            children: t.map((e, t) =>
                (0, i.jsx)(
                    l.z,
                    (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                i = Object.keys(n);
                            ('function' == typeof Object.getOwnPropertySymbols &&
                                (i = i.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    })
                                )),
                                i.forEach(function (t) {
                                    var i;
                                    ((i = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: i,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = i));
                                }));
                        }
                        return e;
                    })({}, e),
                    t
                )
            )
        })
    });
}
