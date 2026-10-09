n.d(t, {
    CU: () => m,
    GU: () => h,
    T7: () => v,
    W3: () => y,
    Wg: () => s,
    YN: () => f,
    Zv: () => M,
    h2: () => b,
    oJ: () => c,
    pF: () => w,
    wK: () => g,
});
var r = n(582128);
let i = new Map(),
    l = new Set(),
    o = new Set();
function a() {
    for (let e of [...l])
        try {
            e();
        } catch (e) {
            console.error("[vibegrations] control lease subscriber threw", e);
        }
}
function u(e) {
    for (let t of [...o])
        try {
            t(e);
        } catch (e) {
            console.error("[vibegrations] control release subscriber threw", e);
        }
}
function s(e) {
    let t = i.get(e) ?? { holders: 0, timers: new Set() };
    ((t.holders += 1), i.set(e, t));
    let n = !1,
        r = setTimeout(() => {
            (console.warn("[vibegrations] control lease expired without release", { projectId: e }), l());
        }, 35e3);
    function l() {
        if (n || ((n = !0), clearTimeout(r), i.get(e) !== t)) return;
        (t.timers.delete(r), (t.holders -= 1));
        let l = t.holders <= 0;
        (l && i.delete(e), a(), l && u(e));
    }
    return (t.timers.add(r), a(), l);
}
let d = new Map();
function c(e) {
    let t = d.get(e),
        n = setTimeout(() => f(e), 2e4);
    if (null != t) {
        clearTimeout(t.timer);
        let r = s(e);
        (t.release(), d.set(e, { release: r, timer: n }));
        return;
    }
    d.set(e, { release: s(e), timer: n });
}
function f(e) {
    let t = d.get(e);
    null != t && (d.delete(e), clearTimeout(t.timer), t.release());
}
function h(e) {
    p.delete(e);
    let t = d.get(e);
    null != t && (d.delete(e), clearTimeout(t.timer));
    let n = i.get(e);
    if (null != n) {
        for (let e of n.timers) clearTimeout(e);
        (i.delete(e), a(), u(e));
    }
}
let p = new Set();
function w(e, t) {
    p.has(e) !== t && (t ? p.add(e) : p.delete(e), a());
}
function m(e) {
    let t = r.useCallback(() => null != e && p.has(e), [e]);
    return r.useSyncExternalStore(y, t, t);
}
function g(e) {
    return (i.get(e)?.holders ?? 0) > 0;
}
function v() {
    return [...i.keys()];
}
function y(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
function b(e) {
    return (
        o.add(e),
        () => {
            o.delete(e);
        }
    );
}
function M(e) {
    let t = r.useCallback(() => null != e && g(e), [e]);
    return r.useSyncExternalStore(y, t, t);
}
