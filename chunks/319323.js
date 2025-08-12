n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    o = n(481060),
    a = n(283836),
    s = n(728345),
    l = n(388032);
function c(e, t, n) {
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
function u(e) {
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
                c(e, t, n[t]);
            });
    }
    return e;
}
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, s.IX)(t);
    return null == i
        ? null
        : (0, r.jsx)(f, {
              app: i,
              guildId: n,
          });
}
function f(e) {
    let { app: t, guildId: s } = e;
    (0, a.q)(t.id);
    let c = i.useCallback(() => {
        (0, o.ZDy)(async () => {
            let { default: e } = await Promise.all([n.e("77803"), n.e("16721")]).then(n.bind(n, 7225));
            return (n) =>
                (0, r.jsx)(
                    e,
                    u(
                        {
                            appId: t.id,
                            guildId: s,
                        },
                        n,
                    ),
                );
        });
    }, [t, s]);
    return (0, r.jsx)(o.zxk, {
        size: "sm",
        onClick: c,
        icon: o.QJP,
        text: l.intl.format(l.t.XDRjs7, { appName: t.name }),
    });
}
