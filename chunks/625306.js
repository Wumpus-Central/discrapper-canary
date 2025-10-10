n.d(t, {
    IH: () => a,
    Z$: () => s,
    qC: () => o,
}),
    n(539854);
let r = 10,
    i = [];
function a(e) {
    for (i.push(e); i.length > r; ) i.shift();
}
function o() {
    return i.join(" -> ");
}
function s() {
    return i.length > 0 ? i[i.length - 1] : null;
}
