n.d(t, { M: () => o, g: () => s });
var r = n(582128);
let i = new Set();
function s(e, t) {
    for (let n of i) n(e, t);
}
function o(e, t) {
    let n = r.useRef(t);
    (r.useLayoutEffect(() => {
        n.current = t;
    }),
        r.useEffect(() => {
            if (null == e) return;
            let t = (t, r) => {
                t === e && n.current(r);
            };
            return (
                i.add(t),
                () => {
                    i.delete(t);
                }
            );
        }, [e]));
}
