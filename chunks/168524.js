n.d(t, { Z: () => f });
var r = n(73800),
    i = n(835473),
    a = n(817788),
    o = n(492423),
    s = n(774073),
    l = n(981631);
function c(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function u(e) {
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
                c(e, t, n[t]);
            }));
    }
    return e;
}
function d(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : d(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    let { onOpened: t } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        { applicationId: n } = e,
        c = (0, i.q)(n),
        d = r.useMemo(() => (null == c ? n : null != c.thirdPartySkus.find((e) => e.distributor === l.GQo.ROBLOX) ? a.eB : n), [c, n]),
        f = (0, s.ZP)(_(u({}, e), { applicationId: d }));
    return f.shouldOpenGameProfile && null != d
        ? (n) => {
              (n.stopPropagation(),
                  n.preventDefault(),
                  o.Z.openGameProfileModal(
                      _(u({}, e), {
                          applicationId: d,
                          gameProfileModalChecks: f
                      })
                  ),
                  null == t || t());
          }
        : void 0;
}
