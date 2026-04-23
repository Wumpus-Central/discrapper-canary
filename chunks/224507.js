l.d(t, { V4: () => n, VJ: () => s, un: () => i, zD: () => r });
let n = new WeakMap();
function o(e) {
    return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e;
}
function r(e, t) {
    let l = n.get(e);
    if (!l) throw Error("Unknown grid");
    return `${l}-${o(t)}`;
}
function i(e, t, l) {
    let r = n.get(e);
    if (!r) throw Error("Unknown grid");
    return `${r}-${o(t)}-${o(l)}`;
}
function s(e, t) {
    return [...e.collection.rowHeaderColumnKeys].map((l) => i(e, t, l)).join(" ");
}
