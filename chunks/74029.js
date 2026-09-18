l.d(t, { PR: () => g, PS: () => d, Q_: () => p, _w: () => c, dy: () => h, fA: () => m, nI: () => u, zz: () => f });
var n = l(582128);
l(29692);
let a = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    r = new Map(),
    i = new Set();
function s(e) {
    return r.get(e) ?? a;
}
function o(e, t) {
    for (let l of (t.active || 0 !== t.annotations.length ? r.set(e, t) : r.delete(e), [...i]))
        try {
            l();
        } catch (e) {
            console.error("[vibegrations] design feedback subscriber threw", e);
        }
}
function u(e) {
    let t = s(e);
    t.active || o(e, { ...t, active: !0 });
}
function d(e) {
    r.has(e) && o(e, a);
}
function c(e, t) {
    let l = s(e);
    l.active && o(e, { ...l, context: t });
}
function m(e, t) {
    let l = s(e);
    l.active &&
        0 !== t.size &&
        o(e, {
            ...l,
            annotations: l.annotations.map((e) => {
                let l = t.get(e.id);
                return null == l ? e : { ...e, target: l };
            }),
        });
}
function f(e, t) {
    return null != t && e.authorId === t;
}
function h(e, t, l, n) {
    let a = s(e),
        r = a.annotations.find((e) => e.id === l);
    null != r &&
        f(r, t) &&
        o(e, { ...a, annotations: a.annotations.map((e) => (e.id === l ? { ...e, comment: n } : e)) });
}
function g(e, t, l) {
    let n = s(e),
        a = n.annotations.find((e) => e.id === l);
    null != a && f(a, t) && o(e, { ...n, annotations: n.annotations.filter((e) => e.id !== l) });
}
function x(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
function p(e) {
    let t = n.useCallback(() => (null == e ? a : s(e)), [e]);
    return n.useSyncExternalStore(x, t, t);
}
