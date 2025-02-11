n.d(t, {
    Mm: () => u,
    cb: () => m,
    jj: () => d,
    wH: () => c
});
var i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(751648),
    l = n(479766);
let o = 'balance-widget-menu-coachmark-modal',
    c = () => (0, a.nfh)(o),
    d = () => (0, a.Mr3)(o);
function u(e) {
    let { renderEarnedOrbsCoachmark: t } = e,
        n = (0, r.cj)([l.Z], () => l.Z.earnedOrbsCoachmark),
        { shouldOpen: a, earnedOrbsQuantity: s } = n;
    return (
        (0, i.useEffect)(() => {
            let e = c();
            a && !e ? t({ earnedOrbsQuantity: s }) : !a && e && d();
        }, [a, t, s]),
        { ...n }
    );
}
let m = {
    modalKey: o,
    onCloseCallback: s.j2,
    onCloseRequest: async () => {
        await (0, s.j2)(), (0, a.Mr3)(o);
    }
};
