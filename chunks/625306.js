n.d(t, {
    IH: () => o,
    Z$: () => s,
    qC: () => a,
}),
    n(539854);
let r = 10,
    i = [];
function o(e) {
    for (i.push(e); i.length > r; ) i.shift();
}
function a() {
    return i.join(" -> ");
}
function s() {
    return i.length > 0 ? i[i.length - 1] : null;
}
