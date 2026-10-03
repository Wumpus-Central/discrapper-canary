n.d(t, {
    BP: () => c,
    FQ: () => _,
    Qg: () => m,
    RW: () => p,
    Rh: () => f,
    k: () => g,
    o4: () => w,
    t_: () => u,
    xm: () => h,
});
var i = n(582128);
let r = new Map(),
    l = new Set(),
    a = new Set();
function s() {
    for (let e of [...l])
        try {
            e();
        } catch (e) {
            console.error("[vibegrations] control lease subscriber threw", e);
        }
}
function o(e) {
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
        (l && r.delete(e), s(), l && o(e));
    }
    return (t.timers.add(i), s(), l);
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
    let t = d.get(e);
    null != t && (d.delete(e), clearTimeout(t.timer));
    let n = r.get(e);
    if (null != n) {
        for (let e of n.timers) clearTimeout(e);
        (r.delete(e), s(), o(e));
    }
}
function p(e) {
    return (r.get(e)?.holders ?? 0) > 0;
}
function g() {
    return [...r.keys()];
}
function _(e) {
    return (
        l.add(e),
        () => {
            l.delete(e);
        }
    );
}
function m(e) {
    return (
        a.add(e),
        () => {
            a.delete(e);
        }
    );
}
function w(e) {
    let t = i.useCallback(() => null != e && p(e), [e]);
    return i.useSyncExternalStore(_, t, t);
}
