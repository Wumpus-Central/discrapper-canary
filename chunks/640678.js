n.d(t, { t: () => c });
var i = n(163400),
    r = n(995532),
    s = n(496675),
    l = n(600553),
    o = n(896007);
let a = {
    HEADER: 'HEADER',
    DIVIDER: 'DIVIDER'
};
function c(e) {
    var t, n;
    let c = s.Z.getGuildPermissionProps(e),
        u = (0, i.p)(e.id).length > 0,
        d = (0, l.i1)({
            guildId: e.id,
            location: 'getGuildSettingsSections'
        });
    return o.ZP.generateSections(
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
        })({ showDirtyGuildTemplateIndicator: !1 }, c)),
        (n = n =
            {
                canUnlinkChannels: u,
                welcomeScreenEmpty: r.Z.isEmpty(e.id),
                isGuildSettingsFoundationEnabled: d
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
        t)
    )
        .filter((e) => {
            let { section: t } = e;
            return t !== a.HEADER && t !== a.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
