n.d(t, { o: () => a }), n(642613);
var i = n(73800),
    l = n(442837),
    r = n(115130),
    o = n(701488);
let a = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, l.cj)(
            [r.Z],
            () => ({
                isEnabled: r.Z.getIsEnabled(),
                lastUsedObject: r.Z.getLastUsedObject()
            }),
            []
        ),
        n = (0, l.Wu)([r.Z], () => r.Z.getDeveloperShelfItems(), []);
    return i.useMemo(
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
                                              i = Object.keys(n);
                                          'function' == typeof Object.getOwnPropertySymbols &&
                                              (i = i.concat(
                                                  Object.getOwnPropertySymbols(n).filter(function (e) {
                                                      return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                  })
                                              )),
                                              i.forEach(function (t) {
                                                  var i;
                                                  (i = n[t]),
                                                      t in e
                                                          ? Object.defineProperty(e, t, {
                                                                value: i,
                                                                enumerable: !0,
                                                                configurable: !0,
                                                                writable: !0
                                                            })
                                                          : (e[t] = i);
                                              });
                                      }
                                      return e;
                                  })({}, o.wT, e.embeddedActivityConfig)),
                                  (n = n = { application_id: e.id }),
                                  Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                      : (function (e, t) {
                                            var n = Object.keys(e);
                                            if (Object.getOwnPropertySymbols) {
                                                var i = Object.getOwnPropertySymbols(e);
                                                n.push.apply(n, i);
                                            }
                                            return n;
                                        })(Object(n)).forEach(function (e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                        }),
                                  t)
                          };
                      })
                      .sort((e, n) => {
                          let i = t[e.application.id],
                              l = t[n.application.id];
                          return null == i ? 1 : null == l ? -1 : l - i;
                      })
                : [],
        [n, e, t]
    );
};
