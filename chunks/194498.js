r.d(e, { A: () => u });
var n = r(66455),
    s = r(964486);
function u(t) {
    let e = (0, n.A)(t);
    (0, s.Ay)(() => {
        let t = requestAnimationFrame(function r() {
            e.current?.(), (t = requestAnimationFrame(r));
        });
        return () => cancelAnimationFrame(t);
    });
}
