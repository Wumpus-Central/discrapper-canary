n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var a = n(292036),
    i = n(922016);
let o = (0, n(268218).Fe)({
    createPromise: () => Promise.all([n.e("97386"), n.e("70008")]).then(n.bind(n, 109026)),
    webpackId: 109026,
    renderLoader: () => (0, r.jsx)(a.s, {}),
});
function l(e) {
    let { guildId: t, name: n, position: a = "right", onClose: l, targetElementRef: s, ...d } = e;
    return (0, r.jsx)(i.Y, {
        targetElementRef: s,
        position: a,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, r.jsx)(o, {
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
