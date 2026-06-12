n.d(t, { A: () => u });
var a = n(64700);
let i = new Map(),
    s = new Map(),
    l = new Map();
function r(e) {
    return i.has(e) || i.set(e, !1), i.get(e);
}
function d(e) {
    var t;
    let n, a, i, r;
    return (
        s.has(e) ||
            (s.set(e, new Set()),
            l.set(
                e,
                ((t = e),
                (n = (e) => {
                    o(e.shiftKey, t);
                }),
                (a = (e) => {
                    o(e.shiftKey, t);
                }),
                (i = (e) => {
                    o(e.shiftKey, t);
                }),
                (r = () => {
                    o(!1, t);
                }),
                t.addEventListener("keydown", n),
                t.addEventListener("keyup", a),
                t.addEventListener("mousemove", i),
                t.addEventListener("blur", r),
                () => {
                    t.removeEventListener("keydown", n),
                        t.removeEventListener("keyup", a),
                        t.removeEventListener("mousemove", i),
                        t.removeEventListener("blur", r);
                }),
            )),
        s.get(e)
    );
}
function o(e, t) {
    e !== r(t) && (i.set(t, e), d(t).forEach((t) => t(e)));
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        [t, n] = a.useState(r(e));
    return (
        a.useEffect(() => {
            let t = (e) => {
                n(e);
            };
            return (
                d(e).add(t),
                () => {
                    d(e).delete(t), 0 === d(e).size && (l.get(e)?.(), l.delete(e), s.delete(e), i.delete(e));
                }
            );
        }, [e]),
        t
    );
}
