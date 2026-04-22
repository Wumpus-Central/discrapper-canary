n.d(t, { A: () => l });
var a = n(627968);
n(64700);
var i = n(292036),
    r = n(265872);
let d = (0, n(268218).Fe)({
    createPromise: () =>
        Promise.all([n.e("24199"), n.e("55202"), n.e("51793"), n.e("63070"), n.e("97386"), n.e("70008")]).then(
            n.bind(n, 283823),
        ),
    webpackId: 283823,
    renderLoader: () => (0, a.jsx)(i.s, {}),
});
function l(e) {
    let { guildId: t, name: n, position: i = "right", onClose: l, targetElementRef: s, ...u } = e;
    return (0, a.jsx)(r.Y, {
        targetElementRef: s,
        position: i,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, a.jsx)(d, {
                ...e,
                onClose: () => {
                    e.closePopout(), l?.();
                },
                guildId: t,
                name: n,
            }),
        ...u,
    });
}
