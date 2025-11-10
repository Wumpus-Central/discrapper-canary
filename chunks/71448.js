n.d(t, {
    El: () => h,
    II: () => y,
    MM: () => m,
    Me: () => p,
    Pe: () => f,
    U9: () => d,
    Xf: () => o,
    Xj: () => b,
    ex: () => _,
    iW: () => v,
    r: () => g,
    r3: () => u,
});
var r,
    i = n(274676),
    a = n(647438);
function o() {
    let e = navigator.userAgentData;
    return null != e && e.platform ? e.platform : navigator.platform;
}
function s() {
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
let l = null;
function c(e) {
    let t = e.activeElement;
    for (; (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement) != null; ) {
        var n;
        t = t.shadowRoot.activeElement;
    }
    return t;
}
function u(e, t) {
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
function d(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function f(e, t) {
    if (null == t) return !1;
    if ("composedPath" in e) return e.composedPath().includes(t);
    let n = e;
    return null != n.target && t.contains(n.target);
}
function _(e) {
    return e.matches("html,body");
}
function p(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
function h(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...h(e, t.id, n)])
    );
}
function m(e) {
    return "nativeEvent" in e;
}
function g(e, t) {
    let n = ["mouse", "pen"];
    return t || n.push("", void 0), n.includes(e);
}
var E = function () {},
    b = "undefined" != typeof document ? a.useLayoutEffect : E;
function y(e) {
    let t = a.useRef(e);
    return (
        b(() => {
            t.current = e;
        }),
        t
    );
}
let O = { ...(r || (r = n.t(a, 2))) }.useInsertionEffect || ((e) => e());
function v(e) {
    let t = a.useRef(() => {});
    return (
        O(() => {
            t.current = e;
        }),
        a.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
        }, [])
    );
}
function I(e, t, n) {
    if ("function" == typeof n) return n(t);
    if (n) return n.includes(t);
    let r = e.current[t];
    return null == r || r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled");
}
let S = () => ({
    getShadowRoot: !0,
    displayCheck:
        "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none",
});
