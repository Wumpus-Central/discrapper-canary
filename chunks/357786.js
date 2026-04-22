"use strict";
n.d(t, {
    $4: () => I,
    CM: () =>
        function e(t, n, r) {
            return (
                void 0 === r && (r = !0),
                t
                    .filter((e) => {
                        var t;
                        return e.parentId === n && (!r || (null == (t = e.context) ? void 0 : t.open));
                    })
                    .flatMap((n) => [n, ...e(t, n.id, r)])
            );
        },
    EW: () => E,
    F2: () => h,
    Go: () => O,
    Jt: () => b,
    N: () => U,
    OS: () => R,
    O_: () => S,
    Pg: () => N,
    Qp: () => P,
    RS: () => _,
    SE: () => v,
    WZ: () => g,
    XJ: () => M,
    YE: () => m,
    YF: () => y,
    gR: () => f,
    jo: () => T,
    kQ: () => D,
    nd: () => A,
    nr: () => u,
    tZ: () => p,
    uo: () => o,
    vF: () => w,
    yV: () => k,
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
function d() {
    let e = /android/i;
    return e.test(o()) || e.test(l());
}
let c = "data-floating-ui-focusable";
function _(e) {
    let t = e.activeElement;
    for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null; ) {
        var n;
        t = t.shadowRoot.activeElement;
    }
    return t;
}
function f(e, t) {
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
function E(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function h(e, t) {
    return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
}
function p(e) {
    return e.matches("html,body");
}
function m(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
function g(e) {
    return (
        !!e &&
        "combobox" === e.getAttribute("role") &&
        (0, i.sb)(e) &&
        e.matches(
            "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])",
        )
    );
}
function A(e) {
    return e ? (e.hasAttribute(c) ? e : e.querySelector("[" + c + "]") || e) : null;
}
function I(e, t) {
    var n;
    let r = [],
        i = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
    for (; i; ) {
        let t = e.find((e) => e.id === i);
        (i = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
    }
    return r;
}
function T(e) {
    e.preventDefault(), e.stopPropagation();
}
function S(e) {
    return "nativeEvent" in e;
}
function y(e) {
    return (
        (0 === e.mozInputSource && !!e.isTrusted) ||
        (d() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    );
}
function N(e) {
    return (
        !l().includes("jsdom/") &&
        ((!d() && 0 === e.width && 0 === e.height) ||
            (d() &&
                1 === e.width &&
                1 === e.height &&
                0 === e.pressure &&
                0 === e.detail &&
                "mouse" === e.pointerType) ||
            (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType))
    );
}
function O(e, t) {
    let n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e);
}
var R = "u" > typeof document ? s.useLayoutEffect : function () {};
function v(e) {
    let t = s.useRef(e);
    return (
        R(() => {
            t.current = e;
        }),
        t
    );
}
let C = { ...(r || (r = n.t(s, 2))) }.useInsertionEffect || ((e) => e());
function b(e) {
    let t = s.useRef(() => {});
    return (
        C(() => {
            t.current = e;
        }),
        s.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
        }, [])
    );
}
let D = () => ({
    getShadowRoot: !0,
    displayCheck:
        "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none",
});
function L(e, t) {
    let n = (0, a.Kr)(e, D()),
        r = n.length;
    if (0 === r) return;
    let i = _(m(e)),
        s = n.indexOf(i);
    return n[-1 === s ? (1 === t ? 0 : r - 1) : s + t];
}
function w(e) {
    return L(m(e).body, 1) || e;
}
function M(e) {
    return L(m(e).body, -1) || e;
}
function P(e, t) {
    let n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !f(n, r);
}
function U(e) {
    (0, a.Kr)(e, D()).forEach((e) => {
        (e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1");
    });
}
function k(e) {
    e.querySelectorAll("[data-tabindex]").forEach((e) => {
        let t = e.dataset.tabindex;
        delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
    });
}
