n.d(t, { Q: () => o, l: () => u });
var l = n(582128);
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
async function o(e, t) {
    if (a.has(e)) return null;
    (a.add(e), r());
    try {
        return await t();
    } finally {
        (a.delete(e), r());
    }
}
function u(e) {
    let t = l.useCallback(() => a.has(e), [e]);
    return l.useSyncExternalStore(s, t);
}
