n.d(t, { Pu: () => i, Td: () => s });
var u = n(582128);
let r = new Map();
function s(e) {
    return (r.get(e) ?? 0) > 0;
}
function i(e) {
    u.useLayoutEffect(() => {
        if (null != e) {
            let t;
            return (
                r.set(e, (r.get(e) ?? 0) + 1),
                (t = !0),
                () => {
                    if (!t) return;
                    t = !1;
                    let n = (r.get(e) ?? 1) - 1;
                    n > 0 ? r.set(e, n) : r.delete(e);
                }
            );
        }
    }, [e]);
}
