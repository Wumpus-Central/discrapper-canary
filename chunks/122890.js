r.d(n, {
    z: function () {
        return l;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(409813),
    s = r(45572);
function l(e) {
    let { purchaseState: n, currentStep: r, initialScene: i, purchaseScene: l, errorScene: u, successScene: c } = e,
        [d, f] = (0, a.useState)(i);
    return (
        (0, a.useEffect)(() => {
            n === s.A.PURCHASING ? f(l) : n === s.A.FAIL && f(u);
        }, [n, l, u]),
        (0, a.useEffect)(() => {
            r === o.h8.CONFIRM && f(c);
        }, [r, c]),
        [d, f]
    );
}
