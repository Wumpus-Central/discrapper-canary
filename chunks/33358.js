n.d(t, {
    P: () => m,
});
var r = n(64700),
    i = n(311907),
    l = n(617617),
    s = n(734057),
    o = n(994500),
    a = n(287809),
    u = n(811602),
    c = n(282108),
    d = n(975214);

function m(e) {
    let t,
        n,
        m,
        h,
        p,
        { channelId: y, authorId: f } = null == e ? {} : (0, c.nx)(e);
    return (
        (t = (0, c.ku)()),
        (n = (0, i.bG)([a.default], () => a.default.getCurrentUser())),
        (m = (0, i.bG)([s.A, o.A], () => (0, c.c2)(y, f, [s.A, o.A]))),
        (h = (0, i.bG)(
            [l.A],
            () =>
                t.reduce((e, t) => {
                    var n, r;
                    return (
                        (n = (function (e) {
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
                        })({}, e)),
                        (r = r =
                            {
                                [t.harmType]: t.getProtoUserSettings(l.A.settings),
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(r)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e));
                              }),
                        n
                    );
                }, {}),
            [t],
            d.M,
        )),
        0 ===
        (p = r.useMemo(
            () =>
                null == m || f === (null == n ? void 0 : n.id) || null == n
                    ? []
                    : t
                          .map((e) => {
                              let t = h[e.harmType],
                                  n = null == m ? null : e.getUserSettingsWithDefaults(t)[m];
                              return (0, c.f)(n) ? e.harmType : null;
                          })
                          .filter((e) => null != e),
            [m, t, h, f, n],
        )).length
            ? u.LO.NONE
            : (0, c.LE)(p)
    );
}
