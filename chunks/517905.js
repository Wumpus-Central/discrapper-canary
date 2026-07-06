"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var r = n(292036),
    s = n(922016);
let a = (0, n(268218).Fe)({
    createPromise: () =>
        Promise.all([
            n.e("23549"),
            n.e("83566"),
            n.e("69722"),
            n.e("80083"),
            n.e("28510"),
            n.e("78104"),
            n.e("8502"),
            n.e("29483"),
            n.e("43437"),
            n.e("86127"),
            n.e("75842"),
            n.e("3589"),
            n.e("90757"),
            n.e("14285"),
            n.e("82783"),
            n.e("28152"),
            n.e("65826"),
            n.e("49520"),
            n.e("58164"),
            n.e("71470"),
            n.e("37490"),
            n.e("70008"),
        ]).then(n.bind(n, 109026)),
    webpackId: 109026,
    renderLoader: () => (0, i.jsx)(r.s, {}),
});
function o(e) {
    let { guildId: t, name: n, position: r = "right", onClose: o, targetElementRef: l, ...u } = e;
    return (0, i.jsx)(s.Y, {
        targetElementRef: l,
        position: r,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, i.jsx)(a, {
                ...e,
                onClose: () => {
                    e.closePopout(), o?.();
                },
                guildId: t,
                name: n,
            }),
        ...u,
    });
}
