n.d(t, { Y_: () => d, vm: () => u });
var i = n(582128),
    r = n(17928),
    a = n(803306),
    s = n(287809);
let l = new Map(),
    o = new Map();
function d(e) {
    if (null == e || null != s.default.getUser(e)) return Promise.resolve();
    let t = l.get(e);
    if (null != t) return t;
    let n = o.get(e) ?? 0;
    if (n >= 3) return Promise.resolve();
    o.set(e, n + 1);
    let i = c(a.wz(e).finally(() => l.delete(e)));
    return (l.set(e, i), i);
}
async function c(e) {
    try {
        await e;
    } catch {}
}
function u(e) {
    return (
        i.useEffect(() => {
            d(e);
        }, [e]),
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
