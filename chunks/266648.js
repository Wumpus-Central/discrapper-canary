n.d(t, { P: () => a });
var i = n(887501),
    r = n(684407),
    s = n(576705),
    l = n(110807);
function a(e) {
    var t, n;
    let a = s.A.getGuildPermissionProps(e),
        o = (0, i.b)(e.id).length > 0;
    return l.Ay.generateSections(
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({ showDirtyGuildTemplateIndicator: !1 }, a)),
        (n = n =
            {
                canUnlinkChannels: o,
                welcomeScreenEmpty: r.A.isEmpty(e.id),
            }),
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
        t),
    )
        .filter((e) => {
            let { section: t } = e;
            return "HEADER" !== t && "DIVIDER" !== t;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
