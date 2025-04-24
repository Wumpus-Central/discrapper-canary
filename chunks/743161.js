n.d(t, { default: () => b });
var r = n(200651),
    o = n(192379),
    l = n(442837),
    i = n(481060),
    a = n(541099),
    s = n(827498),
    c = n(421591),
    u = n(176412),
    d = n(496977),
    f = n(314734),
    p = n(388032),
    O = n(472088);
let b = o.memo(function (e) {
    var t,
        n,
        { context: b } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ['context']);
    let y = (0, l.e7)([a.Z], () => a.Z.shouldShowModal());
    o.useEffect(() => {
        y || (0, i.Fvk)(f.e9);
    });
    let g = (0, d.Z)();
    return (0, r.jsx)('span', {
        style: (0, u.kU)(),
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
                    className: O.root,
                    'aria-label': p.intl.string(p.t.shUONj),
                    size: i.CgR.DYNAMIC
                },
                m
            )),
            (n = n =
                {
                    children: (0, r.jsx)(c.Z, {
                        context: b,
                        entrypoint: s._b.VOICE,
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
