n.d(t, { Z: () => f });
var r = n(255367),
    i = n(73800),
    l = n(399606),
    o = n(481060),
    a = n(125268),
    s = n(673125),
    c = n(984063),
    u = n(871499),
    d = n(304388),
    p = n(388032);
function h() {
    return (h =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function f() {
    let e = (0, l.e7)([s.Z], () => s.Z.getDrawMode()),
        t = (null == e ? void 0 : e.type) === c.W.LINE,
        n = i.useRef(null),
        f = () => {
            t ? (0, a.Bo)(null) : (0, a.Bo)({ type: c.W.LINE });
        };
    return (0, r.jsx)(d.Z, {
        renderPopout: () => null,
        popoutTargetRef: n,
        children: (e) => {
            var i,
                l,
                a = h(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError('Cannot destructure ' + e);
                        return e;
                    })(e)
                );
            return (0, r.jsx)(
                u.Z,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, a)),
                (l = l =
                    {
                        buttonRef: n,
                        label: p.intl.string(p.t.ZQCf9f),
                        isActive: t,
                        iconComponent: o.vdY,
                        onClick: f
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
