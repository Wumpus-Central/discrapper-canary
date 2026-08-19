n.d(t, { A: () => u });
var s = n(582128);
let i = new Map(),
    l = new Map(),
    a = new Map();
function o(e) {
    return i.has(e) || i.set(e, !1), i.get(e);
}
function r(e) {
    var t;
    let n, s, i, o;
    return (
        l.has(e) ||
            (l.set(e, new Set()),
            a.set(
                e,
                ((t = e),
                (n = (e) => {
                    c(e.shiftKey, t);
                }),
                (s = (e) => {
                    c(e.shiftKey, t);
                }),
                (i = (e) => {
                    c(e.shiftKey, t);
                }),
                (o = () => {
                    c(!1, t);
                }),
                t.addEventListener("keydown", n),
                t.addEventListener("keyup", s),
                t.addEventListener("mousemove", i),
                t.addEventListener("blur", o),
                () => {
                    t.removeEventListener("keydown", n),
                        t.removeEventListener("keyup", s),
                        t.removeEventListener("mousemove", i),
                        t.removeEventListener("blur", o);
                }),
            )),
        l.get(e)
    );
}
function c(e, t) {
    e !== o(t) && (i.set(t, e), r(t).forEach((t) => t(e)));
}
function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        [t, n] = s.useState(o(e));
    return (
        s.useEffect(() => {
            let t = (e) => {
                n(e);
            };
            return (
                r(e).add(t),
                () => {
                    r(e).delete(t), 0 === r(e).size && (a.get(e)?.(), a.delete(e), l.delete(e), i.delete(e));
                }
            );
        }, [e]),
        t
    );
}
