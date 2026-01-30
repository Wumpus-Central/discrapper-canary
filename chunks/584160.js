n.d(t, {
    u: () => c,
});
var r = n(397927),
    i = n(788868),
    a = n(756366),
    o = n(985018);

function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
let c = (e) => {
    let { skuId: t, showTrialBadge: n, showPromoBadge: s } = e,
        c = o.intl.string(o.t.q9EGps),
        u = {
            headerBadgeText: void 0,
            headerBadgeIcon: void 0,
        };
    return (n
        ? ((u.headerBadgeText = o.intl.string(a.default["mWL08+"])), (u.headerBadgeIcon = r.gqV))
        : s && (u.headerBadgeText = o.intl.string(a.default.Fjpyfj)),
    null == t)
        ? l(
              {
                  title: c,
                  gradientColor: void 0,
              },
              u,
          )
        : t === i.pe.TIER_0 || t === i.pe.TIER_1
          ? l(
                {
                    title: c,
                    gradientColor: "nitro-green",
                },
                u,
            )
          : t === i.pe.TIER_2
            ? l(
                  {
                      title: c,
                      gradientColor: "nitro-pink",
                  },
                  u,
              )
            : l(
                  {
                      title: c,
                  },
                  u,
              );
};
