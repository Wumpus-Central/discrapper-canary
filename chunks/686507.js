t.d(n, { N: () => a, z: () => i });
var l = t(582128);
let u = new Set(),
    r = null;
function a(e) {
    for (let n of ((r = e), [...u])) n(e);
    return r !== e;
}
function i(e, n) {
    let t = l.useRef(n);
    (l.useLayoutEffect(() => {
        t.current = n;
    }),
        l.useEffect(() => {
            if (null == e) return;
            function n() {
                r === e && ((r = null), t.current());
            }
            n();
            let l = (t) => {
                t === e && n();
            };
            return (
                u.add(l),
                () => {
                    u.delete(l);
                }
            );
        }, [e]));
}
