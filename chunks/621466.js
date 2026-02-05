"use strict";
function r(e, t) {
    if (null == e) return !1;
    let n = e?.ownerDocument?.defaultView;
    if (null == n) return console.warn("Unable to determine render window for element", e), !1;
    let r = t?.name ?? "Element",
        i = n[r];
    return null == i ? (console.warn(`Unable to find element constructor "${r}" in`, n), !1) : e instanceof i;
}
function i(e) {
    let t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
}
n.d(t, { BF: () => u, Cw: () => l, p3: () => c, vq: () => r, wB: () => d, xI: () => i });
let a = /input/i,
    s = /textarea/i,
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
    if ("true" === e.getAttribute("contenteditable") || s.test(e.tagName)) return !0;
    if (a.test(e.tagName)) {
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
