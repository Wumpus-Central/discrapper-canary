let i, r;
n.d(t, { Ie: () => _, NL: () => A, W8: () => E, X2: () => p, bq: () => h, nI: () => f, t$: () => s });
var a = n(582128);
let s = "data-conjure-agent-cursor",
    l = null,
    o = !1,
    d = new Set();
function c(e) {
    for (let t of ((l = e), d)) t();
}
function u(e) {
    null != l && c({ ...l, ...e });
}
function _(e) {
    let t = e.getBoundingClientRect(),
        n = e.offsetWidth > 0 ? t.width / e.offsetWidth : 1;
    return {
        left: t.left + e.clientLeft * n,
        top: t.top + e.clientTop * n,
        width: e.clientWidth * n,
        height: e.clientHeight * n,
        scale: n,
    };
}
function E(e, t) {
    if (((o = !0), clearTimeout(i), l?.projectId === e && l.iframe === t)) return void u({ shown: !0 });
    let n = Math.round(t.clientWidth / 2),
        r = Math.round(t.clientHeight / 2);
    c({ projectId: e, iframe: t, x: n, y: r, pressX: n, pressY: r, shown: !0, pressed: !1, presses: 0, dipping: !1 });
}
function A(e, t) {
    let { x: n, y: i, type: a } = t;
    if (l?.projectId === e) {
        if ("mousePressed" !== a) return void u({ x: n, y: i, shown: !0, dipping: !1 });
        (u({ x: n, y: i, pressX: n, pressY: i, shown: !0, pressed: !0, presses: l.presses + 1, dipping: !0 }),
            clearTimeout(r),
            (r = setTimeout(() => u({ pressed: !1 }), 140)));
    }
}
function h(e) {
    l?.projectId === e &&
        ((o = !1),
        clearTimeout(i),
        (i = setTimeout(() => {
            o || u({ shown: !1 });
        }, 8e3)));
}
function f(e) {
    (null == l || l.projectId === e) && ((o = !1), clearTimeout(i), clearTimeout(r), c(null));
}
function I(e) {
    return (d.add(e), () => d.delete(e));
}
function p(e) {
    let t = a.useSyncExternalStore(I, () => l);
    return t?.projectId === e ? t : null;
}
