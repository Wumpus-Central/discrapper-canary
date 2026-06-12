"use strict";
function i(e, t) {
    return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes;
}
function r(e) {
    return s(e, 0);
}
function s(e, t) {
    if (t < 0) return;
    let n = 0;
    for (let i of e) {
        if (n === t) return i;
        n++;
    }
}
function a(e) {
    let t;
    for (let n of e) t = n;
    return t;
}
function o(e, t, n) {
    if (t.parentKey === n.parentKey) return t.index - n.index;
    let i = [...l(e, t), t],
        r = [...l(e, n), n],
        s = i.slice(0, r.length).findIndex((e, t) => e !== r[t]);
    return -1 !== s
        ? ((t = i[s]), (n = r[s]), t.index - n.index)
        : i.findIndex((e) => e === n) >= 0
          ? 1
          : (r.findIndex((e) => e === t), -1);
}
function l(e, t) {
    let n = [],
        i = t;
    for (; (null == i ? void 0 : i.parentKey) != null; ) (i = e.getItem(i.parentKey)) && n.unshift(i);
    return n;
}
n.d(t, { W: () => a, cj: () => s, iQ: () => i, o3: () => o, ue: () => r });
