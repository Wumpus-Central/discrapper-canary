n.d(t, {
    V4: () => r,
    VJ: () => o,
    un: () => s,
    zD: () => a,
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

function s(e, t, n) {
    let a = r.get(e);
    if (!a) throw Error("Unknown grid");
    return `${a}-${i(t)}-${i(n)}`;
}

function o(e, t) {
    return [...e.collection.rowHeaderColumnKeys].map((n) => s(e, t, n)).join(" ");
}
