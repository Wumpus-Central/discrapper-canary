n.d(t, { Z: () => o }), n(388685);
var r = n(73800);
let i = !1,
    l = new Set();
function a(e) {
    e !== i && ((i = e), l.forEach((e) => e(i)));
}
function o() {
    let [e, t] = r.useState(i);
    return (
        r.useEffect(() => {
            let e = (e) => {
                t(e);
            };
            return (
                l.add(e),
                () => {
                    l.delete(e);
                }
            );
        }, []),
        e
    );
}
window.addEventListener('keydown', (e) => {
    a(e.shiftKey);
}),
    window.addEventListener('keyup', (e) => {
        a(e.shiftKey);
    }),
    window.addEventListener('mousemove', (e) => {
        a(e.shiftKey);
    }),
    window.addEventListener('blur', () => {
        a(!1);
    });
