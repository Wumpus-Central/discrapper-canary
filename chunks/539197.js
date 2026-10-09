let r, i;
n.d(t, { Ie: () => f, NL: () => p, W8: () => h, X2: () => v, bq: () => w, nI: () => m, t$: () => o });
var l = n(582128);
let o = "data-conjure-agent-cursor",
    a = null,
    u = !1,
    s = new Set();
function d(e) {
    for (let t of ((a = e), s)) t();
}
function c(e) {
    null != a && d({ ...a, ...e });
}
function f(e) {
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
function h(e, t) {
    if (((u = !0), clearTimeout(r), a?.projectId === e && a.iframe === t)) return void c({ shown: !0 });
    let n = Math.round(t.clientWidth / 2),
        i = Math.round(t.clientHeight / 2);
    d({ projectId: e, iframe: t, x: n, y: i, pressX: n, pressY: i, shown: !0, pressed: !1, presses: 0, dipping: !1 });
}
function p(e, t) {
    let { x: n, y: r, type: l } = t;
    if (a?.projectId === e) {
        if ("mousePressed" !== l) return void c({ x: n, y: r, shown: !0, dipping: !1 });
        (c({ x: n, y: r, pressX: n, pressY: r, shown: !0, pressed: !0, presses: a.presses + 1, dipping: !0 }),
            clearTimeout(i),
            (i = setTimeout(() => c({ pressed: !1 }), 140)));
    }
}
function w(e) {
    a?.projectId === e &&
        ((u = !1),
        clearTimeout(r),
        (r = setTimeout(() => {
            u || c({ shown: !1 });
        }, 8e3)));
}
function m(e) {
    (null == a || a.projectId === e) && ((u = !1), clearTimeout(r), clearTimeout(i), d(null));
}
function g(e) {
    return (s.add(e), () => s.delete(e));
}
function v(e) {
    let t = l.useSyncExternalStore(g, () => a);
    return t?.projectId === e ? t : null;
}
