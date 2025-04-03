n.d(t, { M: () => d });
var r = n(200651),
    i = n(442837),
    a = n(921813),
    l = n(643879),
    s = n(25990),
    o = n(74538),
    c = n(755419),
    u = n(99595);
let d = (e) => {
    var t, n;
    let { user: d } = e,
        m = o.ZP.canUsePremiumProfileCustomization(d),
        p = (0, i.cj)([s.Z], () => s.Z.getAllPending()),
        { pendingAvatar: f } = p,
        h = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(p, ['pendingAvatar']),
        v = (0, l.SD)({
            userId: d.id,
            image: f
        });
    return (0, r.jsx)('div', {
        className: u.container,
        children: (0, r.jsx)(
            a.Z,
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
            })({}, h)),
            (n = n =
                {
                    pendingAvatar: v,
                    user: d,
                    pendingBadges: [(0, c.X2)()],
                    canUsePremiumCustomization: m,
                    disabledInputs: !0,
                    hideExampleButton: !0
                }),
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
        )
    });
};
