n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(123791),
    o = n(627363),
    l = n(985018);

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
        { data: i } = (0, o.YY)(t);
    return null == i
        ? null
        : (0, r.jsx)(f, {
              app: i,
              guildId: n,
          });
}

function f(e) {
    let { app: t, guildId: o } = e;
    (0, s.C)(t.id);
    let c = i.useCallback(() => {
        (0, a.mMO)(async () => {
            let { default: e } = await Promise.all([n.e("33563"), n.e("80212")]).then(n.bind(n, 719847));
            return (n) =>
                (0, r.jsx)(
                    e,
                    u(
                        {
                            appId: t.id,
                            guildId: o,
                        },
                        n,
                    ),
                );
        });
    }, [t, o]);
    return (0, r.jsx)(a.Button, {
        size: "sm",
        onClick: c,
        icon: a.Uzv,
        text: l.intl.format(l.t.XDRjs5, {
            appName: t.name,
        }),
    });
}
