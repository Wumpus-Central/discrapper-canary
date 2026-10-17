n.d(t, { Pu: () => u, Td: () => _ });
var i = n(582128);
let l = new Map();
function _(e) {
    return (l.get(e) ?? 0) > 0;
}
function u(e) {
    i.useLayoutEffect(() => {
        if (null != e) {
            let t;
            return (
                l.set(e, (l.get(e) ?? 0) + 1),
                (t = !0),
                () => {
                    if (!t) return;
                    t = !1;
                    let n = (l.get(e) ?? 1) - 1;
                    n > 0 ? l.set(e, n) : l.delete(e);
                }
            );
        }
    }, [e]);
}
