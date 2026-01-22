n.d(t, {
    nV: () => r,
    uk: () => i,
});
let r = new WeakMap();

function i(e, t) {
    var n;
    let { id: i } = null != (n = r.get(e)) ? n : {};
    if (!i) throw Error("Unknown list");
    return `${i}-${a(t)}`;
}

function a(e) {
    return "string" == typeof e ? e.replace(/\s*/g, "") : "" + e;
}
