n.d(t, { Z: () => l }), n(47120);
var r = n(192379);
let i = !1,
    a = new Set();
function o(e) {
    e !== i && ((i = e), a.forEach((e) => e(i)));
}
function l() {
    let [e, t] = r.useState(i);
    return (
        r.useEffect(() => {
            let e = (e) => {
                t(e);
            };
            return (
                a.add(e),
                () => {
                    a.delete(e);
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
