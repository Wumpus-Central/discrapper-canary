r.d(t, { S: () => n, h: () => i });
let n = new WeakMap();
function i(e, t) {
    let r = n.get(e);
    if (!r) throw Error("Unknown slider state");
    return `${r.id}-${t}`;
}
