n.d(t, { v: () => c });
var r = n(73800),
    i = n(442837),
    l = n(581883),
    o = n(592125),
    a = n(699516),
    s = n(629710),
    u = n(721360);
function c(e) {
    let { channelId: t, authorId: n } = null == e ? {} : (0, s.px)(e),
        c = (0, s.AT)(),
        d = (0, i.e7)([o.Z, a.Z], () => (0, s.hi)(t, n, [o.Z, a.Z])),
        m = (0, i.e7)(
            [l.Z],
            () =>
                c.reduce((e, t) => {
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
                }, {}),
            [c],
            u.l
        ),
        h = r.useMemo(
            () =>
                c
                    .map((e) => {
                        let t = m[e.harmType],
                            n = null == d ? null : e.getUserSettingsWithDefaults(t)[d];
                        return (0, s.aQ)(n) ? e.harmType : null;
                    })
                    .filter((e) => null != e),
            [d, c, m]
        );
    return (0, s.Hz)(h);
}
