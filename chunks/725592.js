l.d(t, { T: () => s, Y: () => o });
var n = l(803306),
    a = l(287809);
let r = new Set(),
    i = new Map();
function s(e, t, l) {
    return null == e ? (l ?? null) : (t ?? null);
}
function o(e) {
    if (null == e || r.has(e) || null != a.default.getUser(e)) return;
    let t = i.get(e) ?? 0;
    t >= 3 ||
        (i.set(e, t + 1),
        r.add(e),
        n
            .wz(e)
            .finally(() => r.delete(e))
            .catch(() => {}));
}
