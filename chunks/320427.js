n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(399606),
    l = n(481060),
    o = n(125268),
    a = n(673125),
    s = n(984063),
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
    let e = (0, i.e7)([a.Z], () => a.Z.getDrawMode()),
        t = (null == e ? void 0 : e.type) === s.W.LINE,
        n = () => {
            t ? (0, o.Bo)(null) : (0, o.Bo)({ type: s.W.LINE });
        };
    return (0, r.jsx)(u.Z, {
        renderPopout: () => null,
        children: (e) => {
            var i,
                o,
                a = p(
                    {},
                    (function (e) {
                        if (null == e) throw TypeError('Cannot destructure ' + e);
                        return e;
                    })(e)
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
                })({}, a)),
                (o = o =
                    {
                        label: d.NW.string(d.t.ZQCf9f),
                        isActive: t,
                        iconComponent: l.vdY,
                        onClick: n
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                i)
            );
        }
    });
}
