n.d(t, { z: () => o }), n(388685);
var r = n(73800),
    i = n(409813),
    a = n(45572);
function o(e) {
    let { purchaseState: t, currentStep: n, initialScene: o, purchaseScene: s, errorScene: l, successScene: c } = e,
        [u, d] = (0, r.useState)(o);
    return (
        (0, r.useEffect)(() => {
            t === a.A.PURCHASING ? d(s) : t === a.A.FAIL && d(l);
        }, [t, s, l]),
        (0, r.useEffect)(() => {
            n === i.h8.CONFIRM && d(c);
        }, [n, c]),
        [u, d]
    );
}
