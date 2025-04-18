r.d(t, { default: () => O });
var n = r(200651),
    o = r(192379),
    l = r(442837),
    s = r(481060),
    a = r(541099),
    c = r(827498),
    i = r(421591),
    u = r(176412),
    f = r(496977),
    d = r(314734),
    p = r(388032),
    b = r(472088);
let O = o.memo(function (e) {
    var t,
        r,
        { context: O } = e,
        y = (function (e, t) {
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
    let m = (0, l.e7)([a.Z], () => a.Z.shouldShowModal());
    o.useEffect(() => {
        m || (0, s.Fvk)(d.e9);
    });
    let j = (0, f.Z)();
    return (0, n.jsx)('span', {
        style: (0, u.kU)(),
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
                    className: b.root,
                    'aria-label': p.NW.string(p.t.shUONj),
                    size: s.CgR.DYNAMIC
                },
                y
            )),
            (r = r =
                {
                    children: (0, n.jsx)(i.Z, {
                        context: O,
                        entrypoint: c._b.VOICE,
                        initHistory: j
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
