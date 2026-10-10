n.d(t, { u: () => u, x: () => o });
var l = n(582128);
let r = new Set(),
    a = new Set();
function i() {
    for (let e of a) e();
}
function s(e) {
    return (
        a.add(e),
        () => {
            a.delete(e);
        }
    );
}
async function o(e, t) {
    if (r.has(e)) return null;
    (r.add(e), i());
    try {
        return await t();
    } finally {
        (r.delete(e), i());
    }
}
function u(e) {
    let t = l.useCallback(() => r.has(e), [e]);
    return l.useSyncExternalStore(s, t);
}
