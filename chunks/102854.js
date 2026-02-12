"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(156828),
    s = n(311907),
    o = n(87001),
    l = n(540999),
    u = n(723702),
    c = n(538064),
    d = n(265059),
    _ = n(652215);
let f = (0, a.Fe)({
    createPromise: () =>
        Promise.all([
            n.e("41927"),
            n.e("38939"),
            n.e("94678"),
            n.e("896"),
            n.e("84511"),
            n.e("92777"),
            n.e("3795"),
            n.e("28936"),
            n.e("40396"),
            n.e("48330"),
            n.e("13088"),
            n.e("92414"),
            n.e("94857"),
            n.e("7034"),
            n.e("49559"),
            n.e("43549"),
            n.e("37372"),
            n.e("62175"),
            n.e("97283"),
            n.e("3183"),
            n.e("9753"),
            n.e("2292"),
            n.e("67231"),
            n.e("84127"),
            n.e("62733"),
            n.e("83518"),
            n.e("69733"),
            n.e("69946"),
            n.e("86713"),
            n.e("49862"),
            n.e("12664"),
            n.e("34749"),
            n.e("44667"),
            n.e("7803"),
            n.e("84704"),
            n.e("67646"),
            n.e("15207"),
            n.e("34348"),
            n.e("26320"),
            n.e("59541"),
            n.e("36059"),
            n.e("95782"),
            n.e("4787"),
            n.e("30819"),
            n.e("61486"),
            n.e("16558"),
            n.e("30485"),
            n.e("87674"),
            n.e("98082"),
            n.e("52694"),
            n.e("63786"),
            n.e("87845"),
            n.e("31294"),
        ]).then(n.bind(n, 902592)),
    webpackId: 902592,
});
function h(e) {
    let { mobile: t } = e,
        n = (0, s.bG)([l.A], () => l.A.isDeveloper),
        a = (0, s.bG)([d.A], () => d.A.displayTools),
        h = (0, s.bG)([o.A], () => o.A.getWindowOpen(_.MLl.DEVTOOLS_POPOUT)),
        p = i.useCallback((e) => {
            ((0, u.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && "KeyO" === e.code && (0, c.pf)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener("keydown", p),
            () => {
                window.removeEventListener("keydown", p);
            }
        ),
        [p],
    ),
    (t ? n : a) && !h)
        ? (0, r.jsx)(f, { mobile: t })
        : null;
}
