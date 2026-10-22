n.d(t, { S: () => r, h: () => i });
let r = new WeakMap();
function i(e, t) {
    let n = r.get(e);
    if (!n) throw Error("Unknown slider state");
    return `${n.id}-${t}`;
}
