r.d(t, { Z: () => l });
var n = r(200651);
r(192379);
var a = r(481060),
    o = r(103450),
    i = r(915863);
function l(e) {
    var { activity: t, embeddedActivity: r, user: l, onAction: s, ButtonComponent: c = i.Z } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        a = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            }
            return a;
        })(e, ['activity', 'embeddedActivity', 'user', 'onAction', 'ButtonComponent']);
    let d = (0, o.e)({
        activity: null != t ? t : void 0,
        embeddedActivity: r,
        user: l,
        onGameJoin: s
    });
    if (null == d) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: m, tooltip: g, isEnabled: b } = d;
    return (0, n.jsx)(
        a.ua7,
        {
            text: g,
            children: (e) => {
                var t, r;
                let { onMouseEnter: a, onMouseLeave: o } = e;
                return (0, n.jsx)(
                    c,
                    ((t = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {},
                                n = Object.keys(r);
                            'function' == typeof Object.getOwnPropertySymbols &&
                                (n = n.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                n.forEach(function (t) {
                                    var n;
                                    (n = r[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: n,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0
                                              })
                                            : (e[t] = n);
                                });
                        }
                        return e;
                    })(
                        {
                            onClick: f,
                            onMouseEnter: a,
                            onMouseLeave: o,
                            disabled: !b,
                            submitting: p,
                            fullWidth: !0
                        },
                        u
                    )),
                    (r = r = { children: m }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                        : (function (e, t) {
                              var r = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var n = Object.getOwnPropertySymbols(e);
                                  r.push.apply(r, n);
                              }
                              return r;
                          })(Object(r)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                          }),
                    t)
                );
            }
        },
        'join'
    );
}
