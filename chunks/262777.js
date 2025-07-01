n.d(t, { v: () => m });
var r = n(73800),
    i = n(442837),
    l = n(581883),
    o = n(592125),
    a = n(699516),
    s = n(594174),
    u = n(294509),
    c = n(629710),
    d = n(721360);
function m(e) {
    let { channelId: t, authorId: n } = null == e ? {} : (0, c.px)(e);
    return (function (e, t) {
        let n = (0, c.AT)(),
            m = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
            h = (0, i.e7)([o.Z, a.Z], () => (0, c.hi)(e, t, [o.Z, a.Z])),
            p = (0, i.e7)(
                [l.Z],
                () =>
                    n.reduce((e, t) => {
                        var n, r;
                        return (
                            (n = (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    ('function' == typeof Object.getOwnPropertySymbols &&
                                        (r = r.concat(
                                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                            })
                                        )),
                                        r.forEach(function (t) {
                                            var r;
                                            ((r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r));
                                        }));
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
                [n],
                d.l
            ),
            f = r.useMemo(
                () =>
                    null == h || t === (null == m ? void 0 : m.id) || null == m
                        ? []
                        : n
                              .map((e) => {
                                  let t = p[e.harmType],
                                      n = null == h ? null : e.getUserSettingsWithDefaults(t)[h];
                                  return (0, c.aQ)(n) ? e.harmType : null;
                              })
                              .filter((e) => null != e),
                [h, n, p, t, m]
            );
        return 0 === f.length ? u.qn.NONE : (0, c.Hz)(f);
    })(t, n);
}
