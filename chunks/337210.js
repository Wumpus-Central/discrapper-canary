"use strict";
function n(e, t) {
    return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes;
}
function o(e) {
    return i(e, 0);
}
function i(e, t) {
    if (t < 0) return;
    let r = 0;
    for (let n of e) {
        if (r === t) return n;
        r++;
    }
}
function a(e) {
    let t;
    for (let r of e) t = r;
    return t;
}
function s(e, t, r) {
    if (t.parentKey === r.parentKey) return t.index - r.index;
    let n = [...l(e, t), t],
        o = [...l(e, r), r],
        i = n.slice(0, o.length).findIndex((e, t) => e !== o[t]);
    return -1 !== i
        ? ((t = n[i]), (r = o[i]), t.index - r.index)
        : n.findIndex((e) => e === r) >= 0
          ? 1
          : (o.findIndex((e) => e === t), -1);
}
function l(e, t) {
    let r = [],
        n = t;
    for (; (null == n ? void 0 : n.parentKey) != null; ) (n = e.getItem(n.parentKey)) && r.unshift(n);
    return r;
}
r.d(t, { W: () => a, cj: () => i, iQ: () => n, o3: () => s, ue: () => o });
