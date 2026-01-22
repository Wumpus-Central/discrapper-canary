r.d(t, {
    A: () => s,
});
var n = r(627968);
r(64700);
var o = r(397927),
    l = r(688810),
    i = r(824744),
    c = r(796774),
    a = r(536432),
    u = r(985018);

function s() {
    let e = (0, a.wH)(),
        { analyticsLocations: t } = (0, l.Ay)();
    return (0, n.jsx)(o.aK1, {
        id: "user-volume",
        "aria-haspopup": !0,
        label: u.intl.string(u.t.kbFsAD),
        control: (r, l) => {
            var a, s;
            return (0, n.jsx)(
                o.i42,
                ((a = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {},
                            n = Object.keys(r);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(r).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                }),
                            )),
                            n.forEach(function (t) {
                                var n;
                                (n = r[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = n);
                            });
                    }
                    return e;
                })({}, r)),
                (s = s =
                    {
                        ref: l,
                        value: (0, i.M)(e),
                        maxValue: 100,
                        onChange: (e) => (0, c.iy)((0, i.w)(e), t),
                        "aria-label": u.intl.string(u.t.kbFsAD),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                    : (function (e, t) {
                          var r = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(e);
                              r.push.apply(r, n);
                          }
                          return r;
                      })(Object(s)).forEach(function (e) {
                          Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                      }),
                a),
            );
        },
    });
}
