n.d(t, { t: () => d });
var i = n(63568),
    r = n(163400),
    s = n(995532),
    l = n(496675),
    a = n(600553),
    o = n(896007),
    c = n(981631);
let u = {
    HEADER: 'HEADER',
    DIVIDER: 'DIVIDER'
};
function d(e) {
    var t, n;
    let d = l.Z.getGuildPermissionProps(e),
        g = (0, r.p)(e.id).length > 0,
        b = (0, i.K2)(e.id, 'getGuildSettingsSections'),
        p = (0, a.i1)({
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
        })({ showDirtyGuildTemplateIndicator: !1 }, d)),
        (n = n =
            {
                canUnlinkChannels: g,
                canAccessClanSettings: d.isGuildAdmin && e.hasFeature(c.oNc.CLAN),
                welcomeScreenEmpty: s.Z.isEmpty(e.id),
                memberVerificationRolloutEnabled: b,
                isGuildSettingsFoundationEnabled: p
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
            return t !== u.HEADER && t !== u.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
