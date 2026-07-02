"use strict";
if (
    (n.d(t, {
        $4: () => v,
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
        EW: () => f,
        F2: () => g,
        Go: () => O,
        Jt: () => x,
        N: () => Y,
        OS: () => A,
        O_: () => T,
        Pg: () => D,
        Qp: () => F,
        RS: () => p,
        SE: () => R,
        WZ: () => E,
        XJ: () => P,
        YE: () => b,
        YF: () => C,
        gR: () => m,
        jo: () => S,
        kQ: () => L,
        nd: () => y,
        nr: () => c,
        tZ: () => h,
        uo: () => s,
        vF: () => I,
        yV: () => B,
    }),
    !/^(38190|98365)$/.test(n.j))
)
    var r,
        a = n(84157);
var i = n(64700);
if (!/^(38190|98365)$/.test(n.j)) var o = n(111975);
function s() {
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
function c() {
    return /apple/i.test(navigator.vendor);
}
function u() {
    let e = /android/i;
    return e.test(s()) || e.test(l());
}
let d = "data-floating-ui-focusable",
    _ = /^(38190|98365)$/.test(n.j)
        ? null
        : "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function p(e) {
    let t = e.activeElement;
    for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null; ) {
        var n;
        t = t.shadowRoot.activeElement;
    }
    return t;
}
function m(e, t) {
    if (!e || !t) return !1;
    let n = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, a.Ng)(n)) {
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
function g(e, t) {
    return null != t && ("composedPath" in e ? e.composedPath().includes(t) : null != e.target && t.contains(e.target));
}
function h(e) {
    return e.matches("html,body");
}
function b(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
function E(e) {
    return !!e && "combobox" === e.getAttribute("role") && (0, a.sb)(e) && e.matches(_);
}
function y(e) {
    return e ? (e.hasAttribute(d) ? e : e.querySelector("[" + d + "]") || e) : null;
}
function v(e, t) {
    var n;
    let r = [],
        a = null == (n = e.find((e) => e.id === t)) ? void 0 : n.parentId;
    for (; a; ) {
        let t = e.find((e) => e.id === a);
        (a = null == t ? void 0 : t.parentId), t && (r = r.concat(t));
    }
    return r;
}
function S(e) {
    e.preventDefault(), e.stopPropagation();
}
function T(e) {
    return "nativeEvent" in e;
}
function C(e) {
    return (
        (0 === e.mozInputSource && !!e.isTrusted) ||
        (u() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    );
}
function D(e) {
    return (
        !l().includes("jsdom/") &&
        ((!u() && 0 === e.width && 0 === e.height) ||
            (u() &&
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
var w = /^(38190|98365)$/.test(n.j) ? null : "u" > typeof document,
    A = /^(38190|98365)$/.test(n.j) ? null : w ? i.useLayoutEffect : function () {};
function R(e) {
    let t = i.useRef(e);
    return (
        A(() => {
            t.current = e;
        }),
        t
    );
}
let M = { ...(r || (r = n.t(i, 2))) }.useInsertionEffect,
    N = /^(38190|98365)$/.test(n.j) ? null : M || ((e) => e());
function x(e) {
    let t = i.useRef(() => {});
    return (
        N(() => {
            t.current = e;
        }),
        i.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
        }, [])
    );
}
let L = () => ({
    getShadowRoot: !0,
    displayCheck:
        "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none",
});
function k(e, t) {
    let n = (0, o.Kr)(e, L()),
        r = n.length;
    if (0 === r) return;
    let a = p(b(e)),
        i = n.indexOf(a);
    return n[-1 === i ? (1 === t ? 0 : r - 1) : i + t];
}
function I(e) {
    return k(b(e).body, 1) || e;
}
function P(e) {
    return k(b(e).body, -1) || e;
}
function F(e, t) {
    let n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !m(n, r);
}
function Y(e) {
    (0, o.Kr)(e, L()).forEach((e) => {
        (e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1");
    });
}
function B(e) {
    e.querySelectorAll("[data-tabindex]").forEach((e) => {
        let t = e.dataset.tabindex;
        delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
    });
}
