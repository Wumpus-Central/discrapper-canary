n.d(t, { z: () => a }), n(47120);
var r = n(192379),
    i = n(409813),
    o = n(45572);
function a(e) {
    let { purchaseState: t, currentStep: n, initialScene: a, purchaseScene: s, errorScene: l, successScene: c } = e,
        [u, d] = (0, r.useState)(a);
    return (
        (0, r.useEffect)(() => {
            t === o.A.PURCHASING ? d(s) : t === o.A.FAIL && d(l);
        }, [t, s, l]),
        (0, r.useEffect)(() => {
            n === i.h8.CONFIRM && d(c);
        }, [n, c]),
        [u, d]
    );
}
