"use strict";
function i(e, t) {
    if (null == e) return !1;
    let n = e?.ownerDocument?.defaultView;
    if (null == n) return console.warn("Unable to determine render window for element", e), !1;
    let i = t?.name ?? "Element",
        r = n[i];
    return null == r ? (console.warn(`Unable to find element constructor "${i}" in`, n), !1) : e instanceof r;
}
function r(e) {
    let t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
}
n.d(t, { BF: () => u, Cw: () => l, p3: () => c, vq: () => i, wB: () => d, xI: () => r });
let s = /input/i,
    a = /textarea/i,
    o = new Set([
        "text",
        "password",
        "number",
        "date",
        "datetime-local",
        "time",
        "week",
        "month",
        "email",
        "search",
        "tel",
        "url",
    ]);
function l(e) {
    if (null == e) return !1;
    if ("true" === e.getAttribute("contenteditable") || a.test(e.tagName)) return !0;
    if (s.test(e.tagName)) {
        let t = e.getAttribute("type") ?? "text";
        if (o.has(t)) return !0;
    }
    return !1;
}
function u(e) {
    let { target: t } = e;
    return null == t
        ? null
        : "ownerDocument" in t
          ? t.ownerDocument
          : "document" in t
            ? t.document
            : (console.warn("Unable to get owner document from event", e.type), null);
}
function c(e, t) {
    let n = e.parentElement;
    for (; null != n; ) {
        if (n.classList.contains(t)) return n;
        n = n.parentElement;
    }
    return null;
}
function d(e, t) {
    let n = e.parentElement;
    for (; null != n; ) {
        if (null != n.getAttribute(t)) return n;
        n = n.parentElement;
    }
    return null;
}
