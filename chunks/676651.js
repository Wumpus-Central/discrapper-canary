n.d(t, { h: () => l });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(302463);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    (0, i.ZDy)(
        async () => {
            let { default: i } = await Promise.all([n.e("63575"), n.e("73628")]).then(n.bind(n, 458961));
            return (n) =>
                (0, r.jsx)(
                    i,
                    s(
                        {
                            guildId: e,
                            productId: t,
                        },
                        n,
                    ),
                );
        },
        { modalKey: a.Yz },
    );
}
