function r(e, t) {
    var n, r;
    if (null == e) return !1;
    let i = null == e || null == (r = e.ownerDocument) ? void 0 : r.defaultView;
    if (null == i) return console.warn("Unable to determine render window for element", e), !1;
    let a = null != (n = null == t ? void 0 : t.name) ? n : "Element",
        s = i[a];
    return null == s ? (console.warn('Unable to find element constructor "'.concat(a, '" in'), i), !1) : e instanceof s;
}

function i(e) {
    let t = parseInt(e, 10);
    return isNaN(t) ? 0 : t;
}
n.d(t, {
    BF: () => c,
    Cw: () => l,
    p3: () => u,
    vq: () => r,
    wB: () => d,
    xI: () => i,
}),
    n(896048),
    n(747238);
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
        var t;
        let n = null != (t = e.getAttribute("type")) ? t : "text";
        if (o.has(n)) return !0;
    }
    return !1;
}

function c(e) {
    let { target: t } = e;
    return null == t
        ? null
        : "ownerDocument" in t
          ? t.ownerDocument
          : "document" in t
            ? t.document
            : (console.warn("Unable to get owner document from event", e.type), null);
}

function u(e, t) {
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
