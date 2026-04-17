"use strict";
n.d(t, {
    $4: () => v,
    CM: () => y,
    EW: () => m,
    F2: () => E,
    Go: () => b,
    Jt: () => P,
    N: () => B,
    OS: () => L,
    O_: () => C,
    Pg: () => O,
    Qp: () => V,
    RS: () => p,
    SE: () => w,
    WZ: () => T,
    XJ: () => F,
    YE: () => A,
    YF: () => R,
    gR: () => h,
    jo: () => N,
    kQ: () => k,
    nd: () => S,
    nr: () => u,
    tZ: () => g,
    uo: () => o,
    vF: () => G,
    yV: () => H,
});
var r,
    i = n(84157),
    s = n(64700),
    a = n(111975);
function o() {
    let e = navigator.userAgentData;
    return null != e && e.platform ? e.platform : navigator.platform;
}
function l() {
    let e = navigator.userAgentData;
    return e && Array.isArray(e.brands)
        ? e.brands
              .map((e) => {
                  let { brand: t, version: n } = e;
                  return t + "/" + n;
              })
              .join(" ")
        : navigator.userAgent;
}
function u() {
    return /apple/i.test(navigator.vendor);
}
function c() {
    let e = /android/i;
    return e.test(o()) || e.test(l());
}
function d() {
    return l().includes("jsdom/");
}
let _ = "data-floating-ui-focusable",
    f =
        "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function p(e) {
    let t = e.activeElement;
    for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null; ) {
        var n;
        t = t.shadowRoot.activeElement;
    }
    return t;
}
function h(e, t) {
    if (!e || !t) return !1;
    let n = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, i.Ng)(n)) {
        let n = t;
        for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
        }
    }
    return !1;
}
function m(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function E(e, t) {
    if (null == t) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    let n = e;
    return null != n.target && t.contains(n.target);
}
function g(e) {
    return e.matches("html,body");
}
function A(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
function I(e) {
    return (0, i.sb)(e) && e.matches(f);
}
function T(e) {
    return !!e && "combobox" === e.getAttribute("role") && I(e);
}
function S(e) {
    return e ? (e.hasAttribute(_) ? e : e.querySelector("[" + _ + "]") || e) : null;
}
function y(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...y(e, t.id, n)])
    );
}
function v(e, t) {
    var n;
    let r = [],
        i = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
    for (; i; ) {
        let t = e.find((e) => e.id === i);
        (i = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
    }
    return r;
}
function N(e) {
    e.preventDefault(), e.stopPropagation();
}
function C(e) {
    return "nativeEvent" in e;
}
function R(e) {
    return (
        (0 === e.mozInputSource && !!e.isTrusted) ||
        (c() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    );
}
function O(e) {
    return (
        !d() &&
        ((!c() && 0 === e.width && 0 === e.height) ||
            (c() &&
                1 === e.width &&
                1 === e.height &&
                0 === e.pressure &&
                0 === e.detail &&
                "mouse" === e.pointerType) ||
            (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType))
    );
}
function b(e, t) {
    let n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e);
}
var D = function () {},
    L = "u" > typeof document ? s.useLayoutEffect : D;
function w(e) {
    let t = s.useRef(e);
    return (
        L(() => {
            t.current = e;
        }),
        t
    );
}
let M = { ...(r || (r = n.t(s, 2))) }.useInsertionEffect || ((e) => e());
function P(e) {
    let t = s.useRef(() => {});
    return (
        M(() => {
            t.current = e;
        }),
        s.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
        }, [])
    );
}
function x(e, t, n) {
    if ("function" == typeof n) return n(t);
    if (n) return n.includes(t);
    let r = e.current[t];
    return null == r || r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled");
}
let k = () => ({
    getShadowRoot: !0,
    displayCheck:
        "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none",
});
function U(e, t) {
    let n = (0, a.Kr)(e, k()),
        r = n.length;
    if (0 === r) return;
    let i = p(A(e)),
        s = n.indexOf(i);
    return n[-1 === s ? (1 === t ? 0 : r - 1) : s + t];
}
function G(e) {
    return U(A(e).body, 1) || e;
}
function F(e) {
    return U(A(e).body, -1) || e;
}
function V(e, t) {
    let n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !h(n, r);
}
function B(e) {
    (0, a.Kr)(e, k()).forEach((e) => {
        (e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1");
    });
}
function H(e) {
    e.querySelectorAll("[data-tabindex]").forEach((e) => {
        let t = e.dataset.tabindex;
        delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
    });
}
