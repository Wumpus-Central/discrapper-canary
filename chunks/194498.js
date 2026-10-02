r.d(e, { A: () => a });
var s = r(66455),
    n = r(964486);
function a(t) {
    let e = (0, s.A)(t);
    (0, n.Ay)(() => {
        let t = requestAnimationFrame(function r() {
            (e.current?.(), (t = requestAnimationFrame(r)));
        });
        return () => cancelAnimationFrame(t);
    });
}
