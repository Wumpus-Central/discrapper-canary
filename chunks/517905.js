n.d(t, { A: () => l });
var a = n(627968);
n(64700);
var i = n(292036),
    r = n(922016);
let d = (0, n(268218).Fe)({
    createPromise: () =>
        Promise.all([
            n.e("24199"),
            n.e("58710"),
            n.e("1040"),
            n.e("20861"),
            n.e("45723"),
            n.e("95208"),
            n.e("76390"),
            n.e("70008"),
        ]).then(n.bind(n, 109026)),
    webpackId: 109026,
    renderLoader: () => (0, a.jsx)(i.s, {}),
});
function l(e) {
    let { guildId: t, name: n, position: i = "right", onClose: l, targetElementRef: s, ...c } = e;
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
        ...c,
    });
}
