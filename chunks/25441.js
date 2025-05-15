n.d(t, {
    N: () => i,
    h: () => a
}),
    n(388685);
let r = new Map();
function i(e, t) {
    let n = r.get(e);
    return null == n && ((n = new Set()), r.set(e, n)), n.add(t), () => (null == n ? void 0 : n.delete(t));
}
function a(e, t, n) {
    let i = r.get(e);
    if (null != i) for (let e of i) e(t, n);
}
