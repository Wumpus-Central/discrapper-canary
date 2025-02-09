n.d(t, {
    Mm: () => d,
    cb: () => u,
    wH: () => c
});
var i = n(192379),
    r = n(442837),
    a = n(481060),
    s = n(751648),
    l = n(479766);
let o = 'balance-widget-menu-coachmark-modal',
    c = () => (0, a.nfh)(o);
function d(e) {
    let { renderEarnedOrbsCoachmark: t } = e,
        n = (0, r.cj)([l.Z], () => l.Z.earnedOrbsCoachmark),
        { shouldOpen: s, earnedOrbsQuantity: d } = n;
    return (
        (0, i.useEffect)(() => {
            let e = c();
            s && !e ? t({ earnedOrbsQuantity: d }) : !s && e && (0, a.Mr3)(o);
        }, [s, t, d]),
        { ...n }
    );
}
let u = {
    modalKey: o,
    onCloseCallback: s.j2,
    onCloseRequest: async () => {
        await (0, s.j2)(), (0, a.Mr3)(o);
    }
};
