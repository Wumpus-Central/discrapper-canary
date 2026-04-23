"use strict";
n.d(t, { A: () => d, g: () => s }), n(321073);
var r,
    i = n(741918),
    s = (((r = {}).UPDATE_ITEMS = "UPDATE_ITEMS"), (r.SET_FOCUS_PATH = "SET_FOCUS_PATH"), r);
function a(e, t) {
    return e.findIndex((e) => t === e.key);
}
function o(e) {
    return e.focusPath[e.focusPath.length - 1];
}
function l(e) {
    let t = e.items;
    for (let n = 0; n < e.focusPath.length - 1; n++) {
        if (null == t) return;
        let r = a(t, e.focusPath[n]);
        t = t[r].children;
    }
    return t;
}
function u(e, t) {
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
function c(e) {
    let t = o(e),
        n = l(e);
    return null == n ? -1 : a(n, t);
}
function d(e, t) {
    switch (t.type) {
        case i.X2.NAVIGATE_UP:
            let n = o(e),
                r = l(e);
            if (null == r) return e;
            let s = (a(r, n) - 1) % r.length;
            if ((s < 0 && (s = r.length - 1), null == r[s])) return e;
            let d = { ...e, focusPath: [...e.focusPath.slice(0, -1), r[s].key] };
            return { ...d, focusIndex: c(d) };
        case i.X2.NAVIGATE_DOWN:
            let _ = o(e),
                f = l(e);
            if (null == f) return e;
            let p = (a(f, _) + 1) % f.length;
            if (null == f[p]) return e;
            let h = { ...e, focusPath: [...e.focusPath.slice(0, -1), f[p].key] };
            return { ...h, focusIndex: c(h) };
        case i.X2.NAVIGATE_IN:
            return (function (e) {
                let t = o(e),
                    n = l(e);
                if (null == n) return e;
                let r = n[a(n, t)],
                    i = r?.children?.[0];
                if (null == i) return e;
                let s = { ...e, focusPath: [...e.focusPath, i.key] };
                return { ...s, focusIndex: c(s) };
            })(e);
        case i.X2.NAVIGATE_OUT:
            if (e.focusPath.length <= 1) return e;
            let E = { ...e, focusPath: e.focusPath.slice(0, -1) };
            return { ...E, focusIndex: c(E) };
        case "UPDATE_ITEMS":
            return (function (e, t) {
                let { items: n } = t,
                    r = { ...e, items: n, focusPath: u(n, e.focusPath) };
                return { ...r, focusIndex: c(r) };
            })(e, t);
        case "SET_FOCUS_PATH":
            return (function (e, t) {
                let { path: n } = t,
                    r = { ...e, focusPath: u(e.items, n) };
                return { ...r, focusIndex: c(r) };
            })(e, t);
        case i.X2.SELECT_FOCUSED_ITEM:
            return e;
        default:
            throw Error(`Menu navigator was given an unhandled action ${t.type}`);
    }
}
