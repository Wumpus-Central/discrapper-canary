n.d(t, { default: () => O });
var r = n(200651),
    o = n(192379),
    l = n(442837),
    i = n(481060),
    c = n(541099),
    a = n(827498),
    u = n(421591),
    s = n(496977),
    p = n(314734),
    f = n(388032),
    d = n(472088);
let O = o.memo(function (e) {
    var t,
        n,
        { context: O } = e,
        b = (function (e, t) {
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
    let m = (0, l.e7)([c.Z], () => c.Z.shouldShowModal());
    o.useEffect(() => {
        m || (0, i.Fvk)(p.e9);
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
                b
            )),
            (n = n =
                {
                    children: (0, r.jsx)(u.Z, {
                        context: O,
                        entrypoint: a._b.VOICE,
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
