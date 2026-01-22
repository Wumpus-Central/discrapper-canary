n.d(t, {
    z: () => u,
});
var r = n(627968),
    l = n(311907),
    a = n(287070),
    i = n(101058),
    s = n(752319),
    c = n(927578),
    o = n(132198),
    d = n(266371);
let u = (e) => {
    var t, n;
    let { user: u } = e,
        m = c.Ay.canUsePremiumProfileCustomization(u),
        f = (0, l.cf)([s.A], () => s.A.getAllPending()),
        { pendingAvatar: b } = f,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l,
                a = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
                return a;
            }
            if (
                ((a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.getOwnPropertyNames(e);
                    for (r = 0; r < a.length; r++)
                        (n = a[r]),
                            !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                    (r = n[l]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
            return a;
        })(f, ["pendingAvatar"]),
        x = (0, i.V7)({
            userId: u.id,
            image: b,
        });
    return (0, r.jsx)("div", {
        className: d.k,
        children: (0, r.jsx)(
            a.A,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        r.forEach(function (t) {
                            var r;
                            (r = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: r,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = r);
                        });
                }
                return e;
            })({}, p)),
            (n = n =
                {
                    pendingAvatar: x,
                    user: u,
                    pendingBadges: [(0, o._)()],
                    canUsePremiumCustomization: m,
                    disabledInputs: !0,
                    hideExampleButton: !0,
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
            t),
        ),
    });
};
