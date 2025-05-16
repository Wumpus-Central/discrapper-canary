n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    l = n(399606),
    a = n(481060),
    o = n(125268),
    s = n(673125),
    c = n(871499),
    u = n(304388),
    d = n(388032);
function p() {
    return (p =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function h() {
    let e = (0, l.e7)([s.Z], () => !s.Z.visibleOverlayCanvas),
        t = i.useRef(null);
    return (0, r.jsx)(u.Z, {
        renderPopout: () => null,
        popoutTargetRef: t,
        children: (n) => {
            var i,
                l,
                s = p(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError('Cannot destructure ' + e);
                        return e;
                    })(n)
                );
            return (0, r.jsx)(
                c.Z,
                ((i = (function (e) {
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
                })({}, s)),
                (l = l =
                    {
                        buttonRef: t,
                        label: d.intl.string(d.t.Cuo44O),
                        isActive: e,
                        iconComponent: a.tEF,
                        onClick: o.LT
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                i)
            );
        }
    });
}
