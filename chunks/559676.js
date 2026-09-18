n.d(t, { BP: () => a, FQ: () => h, RW: () => f, Rh: () => d, k: () => p, o4: () => _, t_: () => s, xm: () => c });
var i = n(582128);
let r = new Map(),
    l = new Set();
function o() {
    for (let e of [...l])
        try {
            e();
        } catch (e) {
            console.error("[vibegrations] control lease subscriber threw", e);
        }
}
function s(e) {
    let t = r.get(e) ?? { holders: 0, timers: new Set() };
    ((t.holders += 1), r.set(e, t));
    let n = !1,
        i = setTimeout(() => {
            (console.warn("[vibegrations] control lease expired without release", { projectId: e }), l());
        }, 35e3);
    function l() {
        n ||
            ((n = !0),
            clearTimeout(i),
            r.get(e) === t && (t.timers.delete(i), (t.holders -= 1), t.holders <= 0 && r.delete(e), o()));
    }
    return (t.timers.add(i), o(), l);
}
let u = new Map();
function a(e) {
    let t = u.get(e),
        n = setTimeout(() => d(e), 2e4);
    if (null != t) {
        clearTimeout(t.timer);
        let i = s(e);
        (t.release(), u.set(e, { release: i, timer: n }));
        return;
    }
    u.set(e, { release: s(e), timer: n });
}
function d(e) {
    let t = u.get(e);
    null != t && (u.delete(e), clearTimeout(t.timer), t.release());
}
function c(e) {
    let t = u.get(e);
    null != t && (u.delete(e), clearTimeout(t.timer));
    let n = r.get(e);
    if (null != n) {
        for (let e of n.timers) clearTimeout(e);
        (r.delete(e), o());
    }
}
function f(e) {
    return (r.get(e)?.holders ?? 0) > 0;
}
function p() {
    return [...r.keys()];
}
function h(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
function _(e) {
    let t = i.useCallback(() => null != e && f(e), [e]);
    return i.useSyncExternalStore(h, t, t);
}
