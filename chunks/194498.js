t.d(a, { A: () => i });
var n = t(66455),
    r = t(964486);
function i(e) {
    let a = (0, n.A)(e);
    (0, r.Ay)(() => {
        let e = requestAnimationFrame(function t() {
            a.current?.(), (e = requestAnimationFrame(t));
        });
        return () => cancelAnimationFrame(e);
    });
}
