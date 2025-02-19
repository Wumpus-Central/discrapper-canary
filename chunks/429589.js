n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(481060),
    o = n(103450),
    i = n(915863);
function a(e) {
    var { activity: t, embeddedActivity: n, user: a, onAction: s, ButtonComponent: c = i.Z } = e,
        u = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ['activity', 'embeddedActivity', 'user', 'onAction', 'ButtonComponent']);
    let d = (0, o.e)({
        activity: null != t ? t : void 0,
        embeddedActivity: n,
        user: a,
        onGameJoin: s
    });
    if (null == d) return null;
    let { isJoining: p, handleJoinRequest: f, buttonCTA: O, tooltip: y, isEnabled: b } = d;
    return (0, r.jsx)(
        l.ua7,
        {
            text: y,
            children: (e) => {
                var t, n;
                let { onMouseEnter: l, onMouseLeave: o } = e;
                return (0, r.jsx)(
                    c,
                    ((t = (function (e) {
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
                    })(
                        {
                            onClick: f,
                            onMouseEnter: l,
                            onMouseLeave: o,
                            disabled: !b,
                            submitting: p,
                            fullWidth: !0
                        },
                        u
                    )),
                    (n = n = { children: O }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(n)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                          }),
                    t)
                );
            }
        },
        'join'
    );
}
