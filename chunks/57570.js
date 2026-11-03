n.d(t, {
    AW: () => h,
    F5: () => f,
    It: () => p,
    _c: () => o,
    aC: () => g,
    mB: () => d,
    pV: () => m,
    qX: () => s,
    rt: () => x,
    w4: () => c,
});
var r = n(582128);
n(71637);
let l = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    i = new Map(),
    a = new Set();
function o(e) {
    return i.get(e) ?? l;
}
function u(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? i.set(e, t) : i.delete(e), [...a]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function c(e) {
    let t = o(e);
    t.active || u(e, { ...t, active: !0 });
}
function s(e) {
    let t = o(e);
    t.active && u(e, { ...t, active: !1 });
}
function d(e) {
    i.has(e) && u(e, l);
}
function f(e, t) {
    let n = o(e);
    n.active && u(e, { ...n, context: t });
}
function h(e, t) {
    let n = o(e);
    n.active &&
        0 !== t.size &&
        u(e, {
            ...n,
            annotations: n.annotations.map((e) => {
                let n = t.get(e.id);
                return null == n ? e : { ...e, target: n };
            }),
        });
}
function p(e, t) {
    return null != t && e.authorId === t;
}
function m(e, t, n, r) {
    let l = o(e),
        i = l.annotations.find((e) => e.id === n);
    null != i &&
        p(i, t) &&
        u(e, { ...l, annotations: l.annotations.map((e) => (e.id === n ? { ...e, comment: r } : e)) });
}
function g(e, t, n) {
    let r = o(e),
        l = r.annotations.find((e) => e.id === n);
    null != l && p(l, t) && u(e, { ...r, annotations: r.annotations.filter((e) => e.id !== n) });
}
function y(e) {
    return (
        a.add(e),
        () => {
            a.delete(e);
        }
    );
}
function x(e) {
    let t = r.useCallback(() => (null == e ? l : o(e)), [e]);
    return r.useSyncExternalStore(y, t, t);
}
