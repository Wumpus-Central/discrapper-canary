n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(481060),
    o = n(125268),
    a = n(673125),
    s = n(871499),
    c = n(304388),
    u = n(388032);
function d() {
    return (d =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function p() {
    let e = (0, i.e7)([a.Z], () => !a.Z.visibleOverlayCanvas);
    return (0, r.jsx)(c.Z, {
        renderPopout: () => null,
        children: (t) => {
            var n,
                i,
                a = d(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError('Cannot destructure ' + e);
                        return e;
                    })(t)
                );
            return (0, r.jsx)(
                s.Z,
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
                })({}, a)),
                (i = i =
                    {
                        label: u.NW.string(u.t.Cuo44O),
                        isActive: e,
                        iconComponent: l.tEF,
                        onClick: o.LT
                    }),
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
            );
        }
    });
}
