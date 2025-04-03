n.d(t, { o: () => o }), n(230036);
var i = n(192379),
    r = n(442837),
    l = n(115130),
    a = n(701488);
let o = () => {
    let { isEnabled: e, lastUsedObject: t } = (0, r.cj)(
            [l.Z],
            () => ({
                isEnabled: l.Z.getIsEnabled(),
                lastUsedObject: l.Z.getLastUsedObject()
            }),
            []
        ),
        n = (0, r.Wu)([l.Z], () => l.Z.getDeveloperShelfItems(), []);
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
                                  })({}, a.wT, e.embeddedActivityConfig)),
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
                              r = t[n.application.id];
                          return null == i ? 1 : null == r ? -1 : r - i;
                      })
                : [],
        [n, e, t]
    );
};
