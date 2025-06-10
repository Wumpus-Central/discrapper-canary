n.d(t, { v: () => u });
var r = n(73800),
    i = n(442837),
    l = n(581883),
    o = n(592125),
    a = n(699516),
    s = n(629710);
function u(e) {
    let { channelId: t, authorId: n } = null == e ? {} : (0, s.px)(e),
        u = (0, s.AT)(),
        c = (0, i.e7)([o.Z, a.Z], () => (0, s.hi)(t, n, [o.Z, a.Z])),
        d = (0, i.cj)([l.Z], () =>
            u.reduce((e, t) => {
                var n, r;
                return (
                    (n = (function (e) {
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
                    })({}, e)),
                    (r = r = { [t.harmType]: t.getProtoUserSettings(l.Z.settings) }),
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
            }, {})
        ),
        m = r.useMemo(
            () =>
                u
                    .map((e) => {
                        let t = d[e.harmType],
                            n = null == c ? null : e.getUserSettingsWithDefaults(t)[c];
                        return (0, s.aQ)(n) ? e.harmType : null;
                    })
                    .filter((e) => null != e),
            [c, u, d]
        );
    return (0, s.Hz)(m);
}
