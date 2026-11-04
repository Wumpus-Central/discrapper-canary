n.d(e, { N: () => r, z: () => u });
var l = n(582128);
let a = new Set(),
    i = null;
function r(t) {
    for (let e of ((i = t), [...a])) e(t);
    return i !== t;
}
function u(t, e) {
    let n = l.useRef(e);
    (l.useLayoutEffect(() => {
        n.current = e;
    }),
        l.useEffect(() => {
            if (null == t) return;
            function e() {
                i === t && ((i = null), n.current());
            }
            e();
            let l = (n) => {
                n === t && e();
            };
            return (
                a.add(l),
                () => {
                    a.delete(l);
                }
            );
        }, [t]));
}
