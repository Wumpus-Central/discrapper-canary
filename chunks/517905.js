n.d(a, { A: () => i });
var s = n(627968);
n(64700);
var t = n(292036),
    l = n(922016);
let r = (0, n(268218).Fe)({
    createPromise: () =>
        Promise.all([
            n.e("40989"),
            n.e("83566"),
            n.e("23294"),
            n.e("76631"),
            n.e("42515"),
            n.e("11328"),
            n.e("24199"),
            n.e("43039"),
            n.e("21690"),
            n.e("32817"),
            n.e("55112"),
            n.e("13681"),
            n.e("55314"),
            n.e("89094"),
            n.e("29177"),
            n.e("32551"),
            n.e("63437"),
            n.e("50015"),
            n.e("38835"),
            n.e("41043"),
            n.e("44695"),
            n.e("18441"),
            n.e("44376"),
            n.e("31644"),
            n.e("45723"),
            n.e("70697"),
            n.e("98125"),
            n.e("43437"),
            n.e("86127"),
            n.e("47017"),
            n.e("99141"),
            n.e("88077"),
            n.e("11527"),
            n.e("63070"),
            n.e("23216"),
            n.e("18401"),
            n.e("75842"),
            n.e("1555"),
            n.e("5501"),
            n.e("23891"),
            n.e("22380"),
            n.e("3589"),
            n.e("74810"),
            n.e("58428"),
            n.e("90664"),
            n.e("14285"),
            n.e("28152"),
            n.e("82783"),
            n.e("65826"),
            n.e("49520"),
            n.e("58164"),
            n.e("71470"),
            n.e("37490"),
            n.e("70008"),
        ]).then(n.bind(n, 109026)),
    webpackId: 109026,
    renderLoader: () => (0, s.jsx)(t.s, {}),
});
function i(e) {
    let { guildId: a, name: n, position: t = "right", onClose: i, targetElementRef: o, ...d } = e;
    return (0, s.jsx)(l.Y, {
        targetElementRef: o,
        position: t,
        clickTrap: !0,
        renderPopout: (e) =>
            (0, s.jsx)(r, {
                ...e,
                onClose: () => {
                    e.closePopout(), i?.();
                },
                guildId: a,
                name: n,
            }),
        ...d,
    });
}
