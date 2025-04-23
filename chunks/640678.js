n.d(t, { t: () => a });
var i = n(163400),
    r = n(995532),
    l = n(496675),
    s = n(896007);
let o = {
    HEADER: 'HEADER',
    DIVIDER: 'DIVIDER'
};
function a(e) {
    var t, n;
    let a = l.Z.getGuildPermissionProps(e),
        c = (0, i.p)(e.id).length > 0;
    return s.ZP.generateSections(
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
        })({ showDirtyGuildTemplateIndicator: !1 }, a)),
        (n = n =
            {
                canUnlinkChannels: c,
                welcomeScreenEmpty: r.Z.isEmpty(e.id)
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
            return t !== o.HEADER && t !== o.DIVIDER;
        })
        .filter((e) => null == e.predicate || e.predicate());
}
