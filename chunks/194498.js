n.d(t, {
    A: () => a,
});
var r = n(66455),
    i = n(964486);

function a(e) {
    let t = (0, r.A)(e);
    (0, i.Ay)(() => {
        function e() {
            var r;
            null == (r = t.current) || r.call(t), (n = requestAnimationFrame(e));
        }
        let n = requestAnimationFrame(e);
        return () => cancelAnimationFrame(n);
    });
}
