n.d(t, { Y_: () => d, vm: () => c });
var i = n(582128),
    r = n(17928),
    a = n(803306),
    s = n(287809);
let l = new Set(),
    o = new Map();
function d(e) {
    if (null == e || l.has(e) || null != s.default.getUser(e)) return;
    let t = o.get(e) ?? 0;
    t >= 3 ||
        (o.set(e, t + 1),
        l.add(e),
        a
            .wz(e)
            .finally(() => l.delete(e))
            .catch(() => {}));
}
function c(e) {
    return (
        i.useEffect(() => d(e), [e]),
        (0, r.bG)(
            [s.default],
            () => {
                var t, n;
                return (
                    (t = null != e ? s.default.getUser(e) : null),
                    (n = s.default.getCurrentUser()),
                    null == e ? (n ?? null) : (t ?? null)
                );
            },
            [e],
        )
    );
}
