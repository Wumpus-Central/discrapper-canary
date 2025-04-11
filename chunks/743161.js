r.d(t, { default: () => b });
var n = r(200651),
    o = r(192379),
    l = r(442837),
    s = r(481060),
    a = r(541099),
    c = r(827498),
    i = r(421591),
    u = r(496977),
    f = r(314734),
    d = r(388032),
    p = r(472088);
let b = o.memo(function (e) {
    var t,
        r,
        { context: b } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) (r = l[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ['context']);
    let y = (0, l.e7)([a.Z], () => a.Z.shouldShowModal());
    o.useEffect(() => {
        y || (0, s.Fvk)(f.e9);
    });
    let m = (0, u.Z)();
    return (0, n.jsx)('span', {
        style: f.u$,
        children: (0, n.jsx)(
            s.Y0X,
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
                    className: p.root,
                    'aria-label': d.NW.string(d.t.shUONj),
                    size: s.CgR.DYNAMIC
                },
                O
            )),
            (r = r =
                {
                    children: (0, n.jsx)(i.Z, {
                        context: b,
                        entrypoint: c._b.VOICE,
                        initHistory: m
                    })
                }),
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
        )
    });
});
