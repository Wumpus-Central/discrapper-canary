e.d(E, { Pu: () => _, Td: () => p });
var i = e(582128);
let n = new Map();
function p(t) {
    return (n.get(t) ?? 0) > 0;
}
function _(t) {
    i.useLayoutEffect(() => {
        if (null != t) {
            let E;
            return (
                n.set(t, (n.get(t) ?? 0) + 1),
                (E = !0),
                () => {
                    if (!E) return;
                    E = !1;
                    let e = (n.get(t) ?? 1) - 1;
                    e > 0 ? n.set(t, e) : n.delete(t);
                }
            );
        }
    }, [t]);
}
