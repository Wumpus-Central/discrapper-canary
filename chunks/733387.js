n.d(t, {
    El: () => g,
    G6: () => c,
    II: () => v,
    MM: () => E,
    Me: () => h,
    N6: () => w,
    NX: () => D,
    Pe: () => _,
    U9: () => p,
    Xf: () => s,
    Xj: () => O,
    dE: () => R,
    e8: () => P,
    ex: () => m,
    iW: () => I,
    k0: () => N,
    r: () => b,
    r3: () => f,
});
var r,
    i = n(274676),
    a = n(473749),
    o = n(913281);
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
let u = null;
function d(e) {
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
    if (n && (0, i.Zq)(n)) {
        let n = t;
        for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
        }
    }
    return !1;
}
function p(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function _(e, t) {
    if (null == t) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    let n = e;
    return null != n.target && t.contains(n.target);
}
function m(e) {
    return e.matches("html,body");
}
function h(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
function g(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...g(e, t.id, n)])
    );
}
function E(e) {
    return "nativeEvent" in e;
}
function b(e, t) {
    let n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e);
}
var y = function () {},
    O = "undefined" != typeof document ? a.useLayoutEffect : y;
function v(e) {
    let t = a.useRef(e);
    return (
        O(() => {
            t.current = e;
        }),
        t
    );
}
let S = { ...(r || (r = n.t(a, 2))) }.useInsertionEffect || ((e) => e());
function I(e) {
    let t = a.useRef(() => {});
    return (
        S(() => {
            t.current = e;
        }),
        a.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
        }, [])
    );
}
function T(e, t, n) {
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
function A(e, t) {
    let n = (0, o.ht)(e, C()),
        r = n.length;
    if (0 === r) return;
    let i = d(h(e)),
        a = n.indexOf(i);
    return n[-1 === a ? (1 === t ? 0 : r - 1) : a + t];
}
function N(e) {
    return A(h(e).body, 1) || e;
}
function P(e) {
    return A(h(e).body, -1) || e;
}
function R(e, t) {
    let n = t || e.currentTarget,
        r = e.relatedTarget;
    return !r || !f(n, r);
}
function w(e) {
    (0, o.ht)(e, C()).forEach((e) => {
        (e.dataset.tabindex = e.getAttribute("tabindex") || ""), e.setAttribute("tabindex", "-1");
    });
}
function D(e) {
    e.querySelectorAll("[data-tabindex]").forEach((e) => {
        let t = e.dataset.tabindex;
        delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex");
    });
}
