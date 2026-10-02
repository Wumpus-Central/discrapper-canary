l.d(t, { T: () => s, Y: () => u });
var n = l(803306),
    a = l(287809);
let i = new Set(),
    r = new Map();
function s(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function u(e) {
    if (null == e || i.has(e) || null != a.default.getUser(e)) return;
    let t = r.get(e) ?? 0;
    t >= 3 ||
        (r.set(e, t + 1),
        i.add(e),
        n
            .wz(e)
            .finally(() => i.delete(e))
            .catch(() => {}));
}
