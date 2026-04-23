"use strict";
n.d(t, { A: () => o });
var r = n(627968);
n(64700);
var i = n(292036),
    s = n(265872);
let a = (0, n(268218).Fe)({
    createPromise: () => Promise.all([n.e("97386"), n.e("70008")]).then(n.bind(n, 283823)),
    webpackId: 283823,
    renderLoader: () => (0, r.jsx)(i.s, {}),
});
function o(e) {
    let { guildId: t, name: n, position: i = "right", onClose: o, targetElementRef: l, ...u } = e;
    return (0, r.jsx)(s.Y, {
        targetElementRef: l,
        position: i,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, r.jsx)(a, {
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
