"use strict";
n.d(t, { A: () => l });
var i = n(477900);
n(582128);
var r = n(292036),
    a = n(922016);
let s = (0, n(268218).Fe)({
    createPromise: () =>
        Promise.all([
            n.e("94373"),
            n.e("35238"),
            n.e("58818"),
            n.e("63232"),
            n.e("11689"),
            n.e("14520"),
            n.e("4142"),
            n.e("19059"),
            n.e("43437"),
            n.e("86127"),
            n.e("75842"),
            n.e("3589"),
            n.e("39075"),
            n.e("14285"),
            n.e("82783"),
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
function l(e) {
    let { guildId: t, name: n, position: r = "right", onClose: l, targetElementRef: o, ...d } = e;
    return (0, i.jsx)(a.Y, {
        targetElementRef: o,
        position: r,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, i.jsx)(s, {
                ...e,
                onClose: () => {
                    e.closePopout(), l?.();
                },
                guildId: t,
                name: n,
            }),
        ...d,
    });
}
