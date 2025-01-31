n.d(t, { Z: () => s }), n(47120);
var i = n(192379);
let l = !1,
    a = new Set();
function r(e) {
    e !== l && ((l = e), a.forEach((e) => e(l)));
}
function s() {
    let [e, t] = i.useState(l);
    return (
        i.useEffect(() => {
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
    r(e.shiftKey);
}),
    window.addEventListener('keyup', (e) => {
        r(e.shiftKey);
    }),
    window.addEventListener('mousemove', (e) => {
        r(e.shiftKey);
    }),
    window.addEventListener('blur', () => {
        r(!1);
    });
