(n.d(t, { o: () => o }), n(642613));
var l = n(73800),
    i = n(442837),
    r = n(115130),
    a = n(701488);
let o = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, i.cj)(
            [r.Z],
            () => ({
                isEnabled: r.Z.getIsEnabled(),
                lastUsedObject: r.Z.getLastUsedObject()
            }),
            []
        ),
        n = (0, i.Wu)([r.Z], () => r.Z.getDeveloperShelfItems(), []);
    return l.useMemo(
        () =>
            e
                ? n
                      .map((e) => {
                          var t, n;
                          return {
                              application: e,
                              activity:
                                  ((t = (function (e) {
                                      for (var t = 1; t < arguments.length; t++) {
                                          var n = null != arguments[t] ? arguments[t] : {},
                                              l = Object.keys(n);
                                          ('function' == typeof Object.getOwnPropertySymbols &&
                                              (l = l.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              l.forEach(function (t) {
                                                  var l;
                                                  ((l = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: l,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = l));
                                              }));
                                      }
                                      return e;
                                  })({}, a.wT, e.embeddedActivityConfig)),
                                  (n = n = { application_id: e.id }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var l = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, l);
                                            }
                                            return n;
                                        })(Object(n)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                        }),
                                  t)
                          };
                      })
                      .sort((e, n) => {
                          let l = t[e.application.id],
                              i = t[n.application.id];
                          return null == l ? 1 : null == i ? -1 : i - l;
                      })
                : [],
        [n, e, t]
    );
};
