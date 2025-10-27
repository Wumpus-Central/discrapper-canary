n.d(t, { Z: () => h });
var i = n(951288),
    r = n(647438),
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
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        }).apply(this, arguments);
}
function h() {
    let e = (0, l.e7)([s.Z], () => !s.Z.visibleOverlayCanvas),
        t = r.useRef(null);
    return (0, i.jsx)(u.Z, {
        renderPopout: () => null,
        popoutTargetRef: t,
        children: (n) => {
            var r,
                l,
                s = p(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError("Cannot destructure " + e);
                        return e;
                    })(n),
                );
            return (0, i.jsx)(
                c.Z,
                ((r = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, s)),
                (l = l =
                    {
                        buttonRef: t,
                        label: d.intl.string(d.t.Cuo44L),
                        isActive: e,
                        iconComponent: a.tEF,
                        onClick: o.LT,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(l)).forEach(function (e) {
                          Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                      }),
                r),
            );
        },
    });
}
