function r() {
    return "undefined" != typeof window;
}
function i(e) {
    return s(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function a(e) {
    var t;
    return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window;
}
function o(e) {
    var t;
    return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement;
}
function s(e) {
    return !!r() && (e instanceof Node || e instanceof a(e).Node);
}
function l(e) {
    return !!r() && (e instanceof Element || e instanceof a(e).Element);
}
function c(e) {
    return !!r() && (e instanceof HTMLElement || e instanceof a(e).HTMLElement);
}
function u(e) {
    return !!r() && "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof a(e).ShadowRoot);
}
n.d(t, {
    Dx: () => S,
    Jj: () => a,
    Kx: () => R,
    Lw: () => A,
    Ow: () => C,
    Pf: () => v,
    Py: () => T,
    Re: () => c,
    Ze: () => p,
    Zq: () => u,
    ao: () => f,
    gQ: () => O,
    hT: () => y,
    kK: () => l,
    tF: () => o,
    tR: () => m,
    wK: () => P,
    wk: () => i,
});
let d = new Set(["inline", "contents"]);
function f(e) {
    let { overflow: t, overflowX: n, overflowY: r, display: i } = S(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !d.has(i);
}
let _ = new Set(["table", "td", "th"]);
function p(e) {
    return _.has(i(e));
}
let h = [":popover-open", ":modal"];
function m(e) {
    return h.some((t) => {
        try {
            return e.matches(t);
        } catch (e) {
            return !1;
        }
    });
}
let g = ["transform", "translate", "scale", "rotate", "perspective"],
    E = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    b = ["paint", "layout", "strict", "content"];
function y(e) {
    let t = v(),
        n = l(e) ? S(e) : e;
    return (
        g.some((e) => !!n[e] && "none" !== n[e]) ||
        (!!n.containerType && "normal" !== n.containerType) ||
        (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
        (!t && !!n.filter && "none" !== n.filter) ||
        E.some((e) => (n.willChange || "").includes(e)) ||
        b.some((e) => (n.contain || "").includes(e))
    );
}
function O(e) {
    let t = C(e);
    for (; c(t) && !T(t); ) {
        if (y(t)) return t;
        if (m(t)) break;
        t = C(t);
    }
    return null;
}
function v() {
    return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
}
let I = new Set(["html", "body", "#document"]);
function T(e) {
    return I.has(i(e));
}
function S(e) {
    return a(e).getComputedStyle(e);
}
function A(e) {
    return l(e)
        ? {
              scrollLeft: e.scrollLeft,
              scrollTop: e.scrollTop,
          }
        : {
              scrollLeft: e.scrollX,
              scrollTop: e.scrollY,
          };
}
function C(e) {
    if ("html" === i(e)) return e;
    let t = e.assignedSlot || e.parentNode || (u(e) && e.host) || o(e);
    return u(t) ? t.host : t;
}
function N(e) {
    let t = C(e);
    return T(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : c(t) && f(t) ? t : N(t);
}
function R(e, t, n) {
    var r;
    void 0 === t && (t = []), void 0 === n && (n = !0);
    let i = N(e),
        o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
        s = a(i);
    if (o) {
        let e = P(s);
        return t.concat(s, s.visualViewport || [], f(i) ? i : [], e && n ? R(e) : []);
    }
    return t.concat(i, R(i, [], n));
}
function P(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
