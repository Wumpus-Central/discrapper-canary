r.d(e, { A: () => a });
var s = r(66455),
    n = r(964486);
function a(t) {
    let e = (0, s.A)(t);
    (0, n.Ay)(() => {
        let t = !1,
            r = requestAnimationFrame(function s() {
                t || (e.current?.(), (r = requestAnimationFrame(s)));
            });
        return () => {
            ((t = !0), cancelAnimationFrame(r));
        };
    });
}
