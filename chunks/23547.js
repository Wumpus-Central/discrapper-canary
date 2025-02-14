n.d(t, {
    Mm: () => u,
    cb: () => m,
    jj: () => d,
    wH: () => c
});
var i = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(751648),
    a = n(479766);
let o = 'balance-widget-menu-coachmark-modal',
    c = () => (0, r.nfh)(o),
    d = () => (0, r.Mr3)(o);
function u(e) {
    let { renderEarnedOrbsCoachmark: t } = e,
        n = (0, s.cj)([a.Z], () => a.Z.earnedOrbsCoachmark),
        { shouldOpen: r, earnedOrbsQuantity: l } = n;
    return (
        (0, i.useEffect)(() => {
            let e = c();
            r && !e ? t({ earnedOrbsQuantity: l }) : !r && e && d();
        }, [r, t, l]),
        { ...n }
    );
}
let m = {
    modalKey: o,
    onCloseCallback: l.j2,
    onCloseRequest: async () => {
        await (0, l.j2)(), (0, r.Mr3)(o);
    }
};
