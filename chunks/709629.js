n.d(t, {
    _e: () => r,
    iS: () => o,
    u: () => s,
    z9: () => a,
});
let r = new WeakMap();
function i(e) {
    return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e;
}
function a(e, t) {
    let n = r.get(e);
    if (!n) throw Error("Unknown grid");
    return `${n}-${i(t)}`;
}
function o(e, t, n) {
    let a = r.get(e);
    if (!a) throw Error("Unknown grid");
    return `${a}-${i(t)}-${i(n)}`;
}
function s(e, t) {
    return [...e.collection.rowHeaderColumnKeys].map((n) => o(e, t, n)).join(" ");
}
