n.d(t, {
    Mm: () => d,
    cb: () => u,
    wH: () => c
});
var i = n(192379),
    s = n(442837),
    r = n(481060),
    l = n(751648),
    a = n(479766);
let o = 'balance-widget-menu-coachmark-modal',
    c = () => (0, r.nfh)(o);
function d(e) {
    let { renderEarnedOrbsCoachmark: t } = e,
        n = (0, s.cj)([a.Z], () => a.Z.earnedOrbsCoachmark),
        { shouldOpen: l, earnedOrbsQuantity: d } = n;
    return (
        (0, i.useEffect)(() => {
            let e = c();
            l && !e ? t({ earnedOrbsQuantity: d }) : !l && e && (0, r.Mr3)(o);
        }, [l, t, d]),
        { ...n }
    );
}
let u = {
    modalKey: o,
    onCloseCallback: l.j2,
    onCloseRequest: async () => {
        await (0, l.j2)(), (0, r.Mr3)(o);
    }
};
