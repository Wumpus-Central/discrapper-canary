n.d(t, { default: () => O });
var r = n(255367),
    l = n(73800),
    o = n(442837),
    i = n(481060),
    u = n(541099),
    c = n(827498),
    a = n(421591),
    s = n(176412),
    f = n(496977),
    d = n(314734),
    p = n(388032),
    b = n(472088);
let O = l.memo(function (e) {
    var t,
        n,
        { context: O } = e,
        m = (function (e, t) {
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
        })(e, ['context']);
    let y = (0, o.e7)([u.Z], () => u.Z.shouldShowModal());
    l.useEffect(() => {
        y || (0, i.Fvk)(d.e9);
    });
    let g = (0, f.Z)();
    return (0, r.jsx)('span', {
        style: (0, s.kU)(),
        children: (0, r.jsx)(
            i.Y0X,
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
                    className: b.root,
                    'aria-label': p.intl.string(p.t.shUONj),
                    size: i.CgR.DYNAMIC
                },
                m
            )),
            (n = n =
                {
                    children: (0, r.jsx)(a.Z, {
                        context: O,
                        entrypoint: c._b.VOICE,
                        initHistory: g
                    })
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
});
