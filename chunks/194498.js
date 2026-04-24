n.d(t, { A: () => s });
var i = n(66455),
    a = n(964486);
function s(e) {
    let t = (0, i.A)(e);
    (0, a.Ay)(() => {
        let e = requestAnimationFrame(function n() {
            t.current?.(), (e = requestAnimationFrame(n));
        });
        return () => cancelAnimationFrame(e);
    });
}
