n.d(t, {
    A: () => c,
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(123791),
    s = n(627363),
    o = n(985018);

function c(e) {
    let { applicationId: t, guildId: n } = e,
        { data: i } = (0, s.YY)(t);
    return null == i
        ? null
        : (0, r.jsx)(u, {
              app: i,
              guildId: n,
          });
}

function u(e) {
    let { app: t, guildId: s } = e;
    (0, a.C)(t.id);
    let c = i.useCallback(() => {
        (0, l.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("43245")]).then(n.bind(n, 719847));
            return (n) =>
                (0, r.jsx)(
                    e,
                    (function (e) {
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
                                    var r;
                                    (r = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: r,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = r);
                                });
                        }
                        return e;
                    })(
                        {
                            appId: t.id,
                            guildId: s,
                        },
                        n,
                    ),
                );
        });
    }, [t, s]);
    return (0, r.jsx)(l.Button, {
        size: "sm",
        onClick: c,
        icon: l.Uzv,
        text: o.intl.format(o.t.XDRjs5, {
            appName: t.name,
        }),
    });
}
