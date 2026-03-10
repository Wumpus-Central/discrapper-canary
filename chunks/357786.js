"use strict";
n.d(t, {
    CM: () => E,
    EW: () => f,
    F2: () => p,
    Go: () => A,
    Jt: () => v,
    N: () => L,
    OS: () => T,
    O_: () => g,
    Qp: () => D,
    SE: () => S,
    XJ: () => b,
    YE: () => m,
    gR: () => _,
    nr: () => u,
    tZ: () => h,
    uo: () => o,
    vF: () => O,
    yV: () => w,
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
let c = null;
function d(e) {
    let t = e.activeElement;
    for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null; ) {
        var n;
        t = t.shadowRoot.activeElement;
    }
    return t;
}
function _(e, t) {
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
function f(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function p(e, t) {
    if (null == t) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    let n = e;
    return null != n.target && t.contains(n.target);
}
function h(e) {
    return e.matches("html,body");
}
function m(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
function E(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...E(e, t.id, n)])
    );
}
function g(e) {
    return "nativeEvent" in e;
}
function A(e, t) {
    let n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e);
}
var I = function () {},
    T = "u" > typeof document ? s.useLayoutEffect : I;
function S(e) {
    let t = s.useRef(e);
    return (
        T(() => {
            t.current = e;
        }),
        t
    );
}
let y = { ...(r || (r = n.t(s, 2))) }.useInsertionEffect || ((e) => e());
function v(e) {
    let t = s.useRef(() => {});
    return (
        y(() => {
            t.current = e;
        }),
        s.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
        }, [])
    );
}
function N(e, t, n) {
    if ("function" == typeof n) return n(t);
    if (n) return n.includes(t);
    let r = e.current[t];
    return null == r || r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled");
}
let C = () => ({
    getShadowRoot: !0,
    displayCheck:
        "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none",
});
function R(e, t) {
    let n = (0, a.Kr)(e, C()),
        r = n.length;
    if (0 === r) return;
    let i = d(m(e)),
        s = n.indexOf(i);
    return n[-1 === s ? (1 === t ? 0 : r - 1) : s + t];
}
function O(e) {
    return R(m(e).body, 1) || e;
}
function b(e) {
    return R(m(e).body, -1) || e;
}
function D(e, t) {
    let n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !_(n, r);
}
function L(e) {
    (0, a.Kr)(e, C()).forEach((e) => {
        (e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1");
    });
}
function w(e) {
    e.querySelectorAll("[data-tabindex]").forEach((e) => {
        let t = e.dataset.tabindex;
        delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
    });
}
