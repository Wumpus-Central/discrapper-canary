n.d(t, { L1: () => a, Pn: () => d });
var i = n(582128);
let r = new Map(),
    u = new Set();
function h(e) {
    return (u.add(e), () => u.delete(e));
}
function d(e, t) {
    let n = r.get(e);
    if (n?.width === t?.width && n?.height === t?.height) return;
    let i = new Map(r);
    (null != t ? i.set(e, t) : i.delete(e), (r = i), u.forEach((e) => e()));
}
function a(e) {
    return i.useSyncExternalStore(h, () => r.get(e) ?? null);
}
