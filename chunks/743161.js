n.d(t, { default: () => O });
var r = n(200651),
    l = n(192379),
    o = n(442837),
    i = n(481060),
    a = n(541099),
    c = n(827498),
    u = n(421591),
    s = n(496977),
    p = n(314734),
    f = n(388032),
    d = n(472088);
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
    let b = (0, o.e7)([a.Z], () => a.Z.shouldShowModal());
    l.useEffect(() => {
        b || (0, i.Fvk)(p.e9);
    });
    let y = (0, s.Z)();
    return (0, r.jsx)('span', {
        style: p.u$,
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
                    className: d.root,
                    'aria-label': f.NW.string(f.t.shUONj),
                    size: i.CgR.DYNAMIC
                },
                m
            )),
            (n = n =
                {
                    children: (0, r.jsx)(u.Z, {
                        context: O,
                        entrypoint: c._b.VOICE,
                        initHistory: y
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
