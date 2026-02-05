"use strict";
n.d(t, { A: () => m, g: () => i }), n(321073);
var r = n(741918),
    i = (function (e) {
        return (e.UPDATE_ITEMS = "UPDATE_ITEMS"), (e.SET_FOCUS_PATH = "SET_FOCUS_PATH"), e;
    })({});
function a(e, t) {
    return e.findIndex((e) => t === e.key);
}
function s(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function o(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let r = a(t, e.focusPath[n]);
        t = t[r].children;
    }
    return t;
}
function l(e, t) {
    let n = e,
        r = [];
    for (let e = 0; e < t.length && null != n; e++) {
        let i = t[e],
            s = a(n, i);
        if (s < 0 || s >= n.length) {
            let e = n[0];
            null != e && r.push(e.key);
            break;
        }
        r.push(i), (n = n[s].children);
    }
    return r;
}
function u(e, t) {
    let { items: n } = t,
        r = { ...e, items: n, focusPath: l(n, e.focusPath) };
    return { ...r, focusIndex: h(r) };
}
function c(e, t) {
    let { path: n } = t,
        r = { ...e, focusPath: l(e.items, n) };
    return { ...r, focusIndex: h(r) };
}
function d(e, t) {
    let n = s(e),
        r = o(e);
    if (null == r) return e;
    let i = (a(r, n) - 1) % r.length;
    if ((i < 0 && (i = r.length - 1), null == r[i])) return e;
    let l = { ...e, focusPath: [...e.focusPath.slice(0, -1), r[i].key] };
    return { ...l, focusIndex: h(l) };
}
function _(e, t) {
    let n = s(e),
        r = o(e);
    if (null == r) return e;
    let i = (a(r, n) + 1) % r.length;
    if (null == r[i]) return e;
    let l = { ...e, focusPath: [...e.focusPath.slice(0, -1), r[i].key] };
    return { ...l, focusIndex: h(l) };
}
function f(e, t) {
    let n = s(e),
        r = o(e);
    if (null == r) return e;
    let i = r[a(r, n)],
        l = i?.children?.[0];
    if (null == l) return e;
    let u = { ...e, focusPath: [...e.focusPath, l.key] };
    return { ...u, focusIndex: h(u) };
}
function p(e, t) {
    if (e.focusPath.length <= 1) return e;
    let n = { ...e, focusPath: e.focusPath.slice(0, -1) };
    return { ...n, focusIndex: h(n) };
}
function h(e) {
    let t = s(e),
        n = o(e);
    return null == n ? -1 : a(n, t);
}
function m(e, t) {
    switch (t.type) {
        case r.X2.NAVIGATE_UP:
            return d(e, t);
        case r.X2.NAVIGATE_DOWN:
            return _(e, t);
        case r.X2.NAVIGATE_IN:
            return f(e, t);
        case r.X2.NAVIGATE_OUT:
            return p(e, t);
        case "UPDATE_ITEMS":
            return u(e, t);
        case "SET_FOCUS_PATH":
            return c(e, t);
        case r.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${t.type}`);
    }
}
