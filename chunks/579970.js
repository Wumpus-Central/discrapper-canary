n.d(t, {
    q: () => l,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(500208);

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

function o(e) {
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

function l(e, t) {
    (0, i.mMO)(
        async () => {
            let { default: i } = await Promise.all([n.e("49862"), n.e("67096")]).then(n.bind(n, 559947));
            return (n) =>
                (0, r.jsx)(
                    i,
                    o(
                        {
                            guildId: e,
                            productId: t,
                        },
                        n,
                    ),
                );
        },
        {
            modalKey: a.DG,
        },
    );
}
