n.d(t, { A: () => d });
var i = n(64700);
let l = new Map(),
    s = new Map(),
    a = new Map();
function r(e) {
    return l.has(e) || l.set(e, !1), l.get(e);
}
function o(e) {
    var t;
    let n, i, l, r;
    return (
        s.has(e) ||
            (s.set(e, new Set()),
            a.set(
                e,
                ((t = e),
                (n = (e) => {
                    c(e.shiftKey, t);
                }),
                (i = (e) => {
                    c(e.shiftKey, t);
                }),
                (l = (e) => {
                    c(e.shiftKey, t);
                }),
                (r = () => {
                    c(!1, t);
                }),
                t.addEventListener("keydown", n),
                t.addEventListener("keyup", i),
                t.addEventListener("mousemove", l),
                t.addEventListener("blur", r),
                () => {
                    t.removeEventListener("keydown", n),
                        t.removeEventListener("keyup", i),
                        t.removeEventListener("mousemove", l),
                        t.removeEventListener("blur", r);
                }),
            )),
        s.get(e)
    );
}
function c(e, t) {
    e !== r(t) && (l.set(t, e), o(t).forEach((t) => t(e)));
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        [t, n] = i.useState(r(e));
    return (
        i.useEffect(() => {
            let t = (e) => {
                n(e);
            };
            return (
                o(e).add(t),
                () => {
                    o(e).delete(t), 0 === o(e).size && (a.get(e)?.(), a.delete(e), s.delete(e), l.delete(e));
                }
            );
        }, [e]),
        t
    );
}
