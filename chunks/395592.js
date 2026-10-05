l.d(t, { u: () => o, x: () => u });
var n = l(582128);
let a = new Set(),
    i = new Set();
function r() {
    for (let e of i) e();
}
function s(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
async function u(e, t) {
    if (a.has(e)) return null;
    (a.add(e), r());
    try {
        return await t();
    } finally {
        (a.delete(e), r());
    }
}
function o(e) {
    let t = n.useCallback(() => a.has(e), [e]);
    return n.useSyncExternalStore(s, t);
}
