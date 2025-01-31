n.d(t, { z: () => s }), n(47120);
var i = n(192379),
    r = n(409813),
    a = n(45572);
function s(e) {
    let { purchaseState: t, currentStep: n, initialScene: s, purchaseScene: o, errorScene: l, successScene: u } = e,
        [c, d] = (0, i.useState)(s);
    return (
        (0, i.useEffect)(() => {
            t === a.A.PURCHASING ? d(o) : t === a.A.FAIL && d(l);
        }, [t, o, l]),
        (0, i.useEffect)(() => {
            n === r.h8.CONFIRM && d(u);
        }, [n, u]),
        [c, d]
    );
}
