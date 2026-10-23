E.d(e, { Pu: () => u, Td: () => p });
var i = E(582128);
let n = new Map();
function p(t) {
    return (n.get(t) ?? 0) > 0;
}
function u(t) {
    i.useLayoutEffect(() => {
        if (null != t) {
            let e;
            return (
                n.set(t, (n.get(t) ?? 0) + 1),
                (e = !0),
                () => {
                    if (!e) return;
                    e = !1;
                    let E = (n.get(t) ?? 1) - 1;
                    E > 0 ? n.set(t, E) : n.delete(t);
                }
            );
        }
    }, [t]);
}
