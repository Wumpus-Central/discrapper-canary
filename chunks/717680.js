n.d(t, { Z: () => a }), n(388685);
var r = n(73800);
let i = !1,
    l = new Set();
function o(e) {
    e !== i && ((i = e), l.forEach((e) => e(i)));
}
function a() {
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
    o(e.shiftKey);
}),
    window.addEventListener('keyup', (e) => {
        o(e.shiftKey);
    }),
    window.addEventListener('mousemove', (e) => {
        o(e.shiftKey);
    }),
    window.addEventListener('blur', () => {
        o(!1);
    });
