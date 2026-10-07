l.d(t, { u: () => u, x: () => o });
var n = l(582128);
let a = new Set(),
    r = new Set();
function i() {
    for (let e of r) e();
}
function s(e) {
    return (
        r.add(e),
        () => {
            r.delete(e);
        }
    );
}
async function o(e, t) {
    if (a.has(e)) return null;
    (a.add(e), i());
    try {
        return await t();
    } finally {
        (a.delete(e), i());
    }
}
function u(e) {
    let t = n.useCallback(() => a.has(e), [e]);
    return n.useSyncExternalStore(s, t);
}
