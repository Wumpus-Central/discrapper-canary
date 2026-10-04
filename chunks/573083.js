n.d(t, {
    CU: () => _,
    GU: () => h,
    T7: () => w,
    W3: () => E,
    Wg: () => u,
    YN: () => f,
    Zv: () => v,
    h2: () => A,
    oJ: () => c,
    pF: () => g,
    wK: () => m,
});
var i = n(582128);
let r = new Map(),
    l = new Set(),
    a = new Set();
function o() {
    for (let e of [...l])
        try {
            e();
        } catch (e) {
            console.error("[vibegrations] control lease subscriber threw", e);
        }
}
function s(e) {
    for (let t of [...a])
        try {
            t(e);
        } catch (e) {
            console.error("[vibegrations] control release subscriber threw", e);
        }
}
function u(e) {
    let t = r.get(e) ?? { holders: 0, timers: new Set() };
    ((t.holders += 1), r.set(e, t));
    let n = !1,
        i = setTimeout(() => {
            (console.warn("[vibegrations] control lease expired without release", { projectId: e }), l());
        }, 35e3);
    function l() {
        if (n || ((n = !0), clearTimeout(i), r.get(e) !== t)) return;
        (t.timers.delete(i), (t.holders -= 1));
        let l = t.holders <= 0;
        (l && r.delete(e), o(), l && s(e));
    }
    return (t.timers.add(i), o(), l);
}
let d = new Map();
function c(e) {
    let t = d.get(e),
        n = setTimeout(() => f(e), 2e4);
    if (null != t) {
        clearTimeout(t.timer);
        let i = u(e);
        (t.release(), d.set(e, { release: i, timer: n }));
        return;
    }
    d.set(e, { release: u(e), timer: n });
}
function f(e) {
    let t = d.get(e);
    null != t && (d.delete(e), clearTimeout(t.timer), t.release());
}
function h(e) {
    p.delete(e);
    let t = d.get(e);
    null != t && (d.delete(e), clearTimeout(t.timer));
    let n = r.get(e);
    if (null != n) {
        for (let e of n.timers) clearTimeout(e);
        (r.delete(e), o(), s(e));
    }
}
let p = new Set();
function g(e, t) {
    p.has(e) !== t && (t ? p.add(e) : p.delete(e), o());
}
function _(e) {
    let t = i.useCallback(() => null != e && p.has(e), [e]);
    return i.useSyncExternalStore(E, t, t);
}
function m(e) {
    return (r.get(e)?.holders ?? 0) > 0;
}
function w() {
    return [...r.keys()];
}
function E(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
function A(e) {
    return (
        a.add(e),
        () => {
            a.delete(e);
        }
    );
}
function v(e) {
    let t = i.useCallback(() => null != e && m(e), [e]);
    return i.useSyncExternalStore(E, t, t);
}
