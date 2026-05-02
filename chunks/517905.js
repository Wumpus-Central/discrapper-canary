r.d(a, { A: () => d });
var l = r(627968);
r(64700);
var t = r(292036),
    n = r(922016);
let i = (0, r(268218).Fe)({
    createPromise: () =>
        Promise.all([
            r.e("84069"),
            r.e("83721"),
            r.e("90261"),
            r.e("16933"),
            r.e("6305"),
            r.e("24199"),
            r.e("43039"),
            r.e("98125"),
            r.e("18441"),
            r.e("88077"),
            r.e("18401"),
            r.e("43437"),
            r.e("13681"),
            r.e("55314"),
            r.e("89094"),
            r.e("32551"),
            r.e("32885"),
            r.e("32817"),
            r.e("86127"),
            r.e("50015"),
            r.e("47017"),
            r.e("66900"),
            r.e("1555"),
            r.e("44695"),
            r.e("21690"),
            r.e("29177"),
            r.e("44376"),
            r.e("11527"),
            r.e("31644"),
            r.e("45723"),
            r.e("63070"),
            r.e("70697"),
            r.e("61622"),
            r.e("38835"),
            r.e("5501"),
            r.e("99141"),
            r.e("23216"),
            r.e("3589"),
            r.e("75842"),
            r.e("74810"),
            r.e("90664"),
            r.e("14285"),
            r.e("82783"),
            r.e("28152"),
            r.e("65826"),
            r.e("49520"),
            r.e("58164"),
            r.e("49089"),
            r.e("37490"),
            r.e("70008"),
        ]).then(r.bind(r, 109026)),
    webpackId: 109026,
    renderLoader: () => (0, l.jsx)(t.s, {}),
});
function d(e) {
    let { guildId: a, name: r, position: t = "right", onClose: d, targetElementRef: s, ...c } = e;
    return (0, l.jsx)(n.Y, {
        targetElementRef: s,
        position: t,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, l.jsx)(i, {
                ...e,
                onClose: () => {
                    e.closePopout(), d?.();
                },
                guildId: a,
                name: r,
            }),
        ...c,
    });
}
