u.d(t, { Pu: () => i, Td: () => s });
var n = u(582128);
let r = new Map();
function s(e) {
    return (r.get(e) ?? 0) > 0;
}
function i(e) {
    n.useLayoutEffect(() => {
        if (null != e) {
            let t;
            return (
                r.set(e, (r.get(e) ?? 0) + 1),
                (t = !0),
                () => {
                    if (!t) return;
                    t = !1;
                    let u = (r.get(e) ?? 1) - 1;
                    u > 0 ? r.set(e, u) : r.delete(e);
                }
            );
        }
    }, [e]);
}
