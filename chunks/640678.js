n.d(t, { t: () => u });
var i = n(163400),
    r = n(995532),
    s = n(496675),
    l = n(600553),
    o = n(896007),
    a = n(981631);
let c = {
    HEADER: 'HEADER',
    DIVIDER: 'DIVIDER'
};
function u(e) {
    var t, n;
    let u = s.Z.getGuildPermissionProps(e),
        d = (0, i.p)(e.id).length > 0,
        g = (0, l.i1)({
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
        })({ showDirtyGuildTemplateIndicator: !1 }, u)),
        (n = n =
            {
                canUnlinkChannels: d,
                canAccessClanSettings: u.isGuildAdmin && e.hasFeature(a.oNc.CLAN),
                welcomeScreenEmpty: r.Z.isEmpty(e.id),
                isGuildSettingsFoundationEnabled: g
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
            return t !== c.HEADER && t !== c.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
