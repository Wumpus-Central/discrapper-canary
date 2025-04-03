n.d(t, { Z: () => o }), n(47120);
var r = n(192379);
let i = !1,
    a = new Set();
function l(e) {
    e !== i && ((i = e), a.forEach((e) => e(i)));
}
function o() {
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
    l(e.shiftKey);
}),
    window.addEventListener('keyup', (e) => {
        l(e.shiftKey);
    }),
    window.addEventListener('mousemove', (e) => {
        l(e.shiftKey);
    }),
    window.addEventListener('blur', () => {
        l(!1);
    });
