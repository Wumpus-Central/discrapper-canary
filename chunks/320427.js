n.d(t, { Z: () => h });
var i = n(54381),
    r = n(473749),
    l = n(399606),
    a = n(481060),
    o = n(125268),
    s = n(673125),
    c = n(984063),
    u = n(871499),
    d = n(304388),
    p = n(388032);
function f() {
    return (f =
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
    let e = (0, l.e7)([s.Z], () => s.Z.getDrawMode()),
        t = (null == e ? void 0 : e.type) === c.W.LINE,
        n = r.useRef(null),
        h = () => {
            t ? (0, o.Bo)(null) : (0, o.Bo)({ type: c.W.LINE });
        };
    return (0, i.jsx)(d.Z, {
        renderPopout: () => null,
        popoutTargetRef: n,
        children: (e) => {
            var r,
                l,
                o = f(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError("Cannot destructure " + e);
                        return e;
                    })(e),
                );
            return (0, i.jsx)(
                u.Z,
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
                })({}, o)),
                (l = l =
                    {
                        buttonRef: n,
                        label: p.intl.string(p.t.ZQCf9V),
                        isActive: t,
                        iconComponent: a.vdY,
                        onClick: h,
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
