n.d(t, {
    AW: () => h,
    F5: () => f,
    It: () => m,
    _c: () => s,
    aC: () => g,
    mB: () => d,
    pV: () => p,
    qX: () => c,
    rt: () => y,
    w4: () => o,
});
var l = n(582128);
n(71637);
let r = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    a = new Map(),
    i = new Set();
function s(e) {
    return a.get(e) ?? r;
}
function u(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? a.set(e, t) : a.delete(e), [...i]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function o(e) {
    let t = s(e);
    t.active || u(e, { ...t, active: !0 });
}
function c(e) {
    let t = s(e);
    t.active && u(e, { ...t, active: !1 });
}
function d(e) {
    a.has(e) && u(e, r);
}
function f(e, t) {
    let n = s(e);
    n.active && u(e, { ...n, context: t });
}
function h(e, t) {
    let n = s(e);
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
function m(e, t) {
    return null != t && e.authorId === t;
}
function p(e, t, n, l) {
    let r = s(e),
        a = r.annotations.find((e) => e.id === n);
    null != a &&
        m(a, t) &&
        u(e, { ...r, annotations: r.annotations.map((e) => (e.id === n ? { ...e, comment: l } : e)) });
}
function g(e, t, n) {
    let l = s(e),
        r = l.annotations.find((e) => e.id === n);
    null != r && m(r, t) && u(e, { ...l, annotations: l.annotations.filter((e) => e.id !== n) });
}
function x(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
function y(e) {
    let t = l.useCallback(() => (null == e ? r : s(e)), [e]);
    return l.useSyncExternalStore(x, t, t);
}
