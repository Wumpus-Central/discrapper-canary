n.d(t, { T: () => l, Y: () => o });
var i = n(803306),
    r = n(287809);
let a = new Set(),
    s = new Map();
function l(e, t, n) {
    return null == e ? (n ?? null) : (t ?? null);
}
function o(e) {
    if (null == e || a.has(e) || null != r.default.getUser(e)) return;
    let t = s.get(e) ?? 0;
    t >= 3 ||
        (s.set(e, t + 1),
        a.add(e),
        i
            .wz(e)
            .finally(() => a.delete(e))
            .catch(() => {}));
}
