"use strict";
n.d(t, {
    BN: () => V,
    ER: () => H,
    Ej: () => B,
    RK: () => G,
    UU: () => F,
    cY: () => U,
    jD: () => j,
    ll: () => k,
    rD: () => Y,
});
var r = n(56027),
    i = n(764647),
    a = n(84157);
function s(e) {
    let t = (0, a.L9)(e),
        n = parseFloat(t.width) || 0,
        i = parseFloat(t.height) || 0,
        s = (0, a.sb)(e),
        o = s ? e.offsetWidth : n,
        l = s ? e.offsetHeight : i,
        u = (0, r.LI)(n) !== o || (0, r.LI)(i) !== l;
    return u && ((n = o), (i = l)), { width: n, height: i, $: u };
}
function o(e) {
    return (0, a.vq)(e) ? e : e.contextElement;
}
function l(e) {
    let t = o(e);
    if (!(0, a.sb)(t)) return (0, r.Jx)(1);
    let n = t.getBoundingClientRect(),
        { width: i, height: l, $: u } = s(t),
        c = (u ? (0, r.LI)(n.width) : n.width) / i,
        d = (u ? (0, r.LI)(n.height) : n.height) / l;
    return (c && Number.isFinite(c)) || (c = 1), (d && Number.isFinite(d)) || (d = 1), { x: c, y: d };
}
let u = (0, r.Jx)(0);
function c(e) {
    let t = (0, a.zk)(e);
    return (0, a.Tc)() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : u;
}
function d(e, t, n) {
    return void 0 === t && (t = !1), !!n && (!t || n === (0, a.zk)(e)) && t;
}
function _(e, t, n, i) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let s = e.getBoundingClientRect(),
        u = o(e),
        _ = (0, r.Jx)(1);
    t && (i ? (0, a.vq)(i) && (_ = l(i)) : (_ = l(e)));
    let f = d(u, n, i) ? c(u) : (0, r.Jx)(0),
        p = (s.left + f.x) / _.x,
        h = (s.top + f.y) / _.y,
        m = s.width / _.x,
        g = s.height / _.y;
    if (u) {
        let e = (0, a.zk)(u),
            t = i && (0, a.vq)(i) ? (0, a.zk)(i) : i,
            n = e,
            r = (0, a._m)(n);
        for (; r && i && t !== n; ) {
            let e = l(r),
                t = r.getBoundingClientRect(),
                i = (0, a.L9)(r),
                s = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
                o = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            (p *= e.x), (h *= e.y), (m *= e.x), (g *= e.y), (p += s), (h += o), (n = (0, a.zk)(r)), (r = (0, a._m)(n));
        }
    }
    return (0, r.B1)({ width: m, height: g, x: p, y: h });
}
function f(e, t) {
    let n = (0, a.CP)(e).scrollLeft;
    return t ? t.left + n : _((0, a.ep)(e)).left + n;
}
function p(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - f(e, n), y: n.top + t.scrollTop };
}
function h(e) {
    let { elements: t, rect: n, offsetParent: i, strategy: s } = e,
        o = "fixed" === s,
        u = (0, a.ep)(i),
        c = !!t && (0, a.Tf)(t.floating);
    if (i === u || (c && o)) return n;
    let d = { scrollLeft: 0, scrollTop: 0 },
        f = (0, r.Jx)(1),
        h = (0, r.Jx)(0),
        m = (0, a.sb)(i);
    if ((m || (!m && !o)) && (("body" !== (0, a.mq)(i) || (0, a.ZU)(u)) && (d = (0, a.CP)(i)), (0, a.sb)(i))) {
        let e = _(i);
        (f = l(i)), (h.x = e.x + i.clientLeft), (h.y = e.y + i.clientTop);
    }
    let g = !u || m || o ? (0, r.Jx)(0) : p(u, d);
    return {
        width: n.width * f.x,
        height: n.height * f.y,
        x: n.x * f.x - d.scrollLeft * f.x + h.x + g.x,
        y: n.y * f.y - d.scrollTop * f.y + h.y + g.y,
    };
}
function m(e) {
    return Array.from(e.getClientRects());
}
function g(e) {
    let t = (0, a.ep)(e),
        n = (0, a.CP)(e),
        i = e.ownerDocument.body,
        s = (0, r.T9)(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
        o = (0, r.T9)(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight),
        l = -n.scrollLeft + f(e),
        u = -n.scrollTop;
    return (
        "rtl" === (0, a.L9)(i).direction && (l += (0, r.T9)(t.clientWidth, i.clientWidth) - s),
        { width: s, height: o, x: l, y: u }
    );
}
let E = 25;
function A(e, t) {
    let n = (0, a.zk)(e),
        r = (0, a.ep)(e),
        i = n.visualViewport,
        s = r.clientWidth,
        o = r.clientHeight,
        l = 0,
        u = 0;
    if (i) {
        (s = i.width), (o = i.height);
        let e = (0, a.Tc)();
        (!e || (e && "fixed" === t)) && ((l = i.offsetLeft), (u = i.offsetTop));
    }
    let c = f(r);
    if (c <= 0) {
        let e = r.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            i = ("CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
            a = Math.abs(r.clientWidth - t.clientWidth - i);
        a <= E && (s -= a);
    } else c <= E && (s += c);
    return { width: s, height: o, x: l, y: u };
}
let I = new Set(["absolute", "fixed"]);
function T(e, t) {
    let n = _(e, !0, "fixed" === t),
        i = n.top + e.clientTop,
        s = n.left + e.clientLeft,
        o = (0, a.sb)(e) ? l(e) : (0, r.Jx)(1),
        u = e.clientWidth * o.x,
        c = e.clientHeight * o.y;
    return { width: u, height: c, x: s * o.x, y: i * o.y };
}
function y(e, t, n) {
    let i;
    if ("viewport" === t) i = A(e, n);
    else if ("document" === t) i = g((0, a.ep)(e));
    else if ((0, a.vq)(t)) i = T(t, n);
    else {
        let n = c(e);
        i = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return (0, r.B1)(i);
}
function S(e, t) {
    let n = (0, a.$4)(e);
    return !(n === t || !(0, a.vq)(n) || (0, a.eu)(n)) && ("fixed" === (0, a.L9)(n).position || S(n, t));
}
function v(e, t) {
    let n = t.get(e);
    if (n) return n;
    let r = (0, a.v9)(e, [], !1).filter((e) => (0, a.vq)(e) && "body" !== (0, a.mq)(e)),
        i = null,
        s = "fixed" === (0, a.L9)(e).position,
        o = s ? (0, a.$4)(e) : e;
    for (; (0, a.vq)(o) && !(0, a.eu)(o); ) {
        let t = (0, a.L9)(o),
            n = (0, a.sQ)(o);
        n || "fixed" !== t.position || (i = null),
            (
                s
                    ? !n && !i
                    : (!n && "static" === t.position && !!i && I.has(i.position)) || ((0, a.ZU)(o) && !n && S(e, o))
            )
                ? (r = r.filter((e) => e !== o))
                : (i = t),
            (o = (0, a.$4)(o));
    }
    return t.set(e, r), r;
}
function C(e) {
    let { element: t, boundary: n, rootBoundary: i, strategy: s } = e,
        o = [...("clippingAncestors" === n ? ((0, a.Tf)(t) ? [] : v(t, this._c)) : [].concat(n)), i],
        l = o[0],
        u = o.reduce(
            (e, n) => {
                let i = y(t, n, s);
                return (
                    (e.top = (0, r.T9)(i.top, e.top)),
                    (e.right = (0, r.jk)(i.right, e.right)),
                    (e.bottom = (0, r.jk)(i.bottom, e.bottom)),
                    (e.left = (0, r.T9)(i.left, e.left)),
                    e
                );
            },
            y(t, l, s),
        );
    return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
}
function b(e) {
    let { width: t, height: n } = s(e);
    return { width: t, height: n };
}
function N(e, t, n) {
    let i = (0, a.sb)(t),
        s = (0, a.ep)(t),
        o = "fixed" === n,
        l = _(e, !0, o, t),
        u = { scrollLeft: 0, scrollTop: 0 },
        c = (0, r.Jx)(0);
    function d() {
        c.x = f(s);
    }
    if (i || (!i && !o))
        if ((("body" !== (0, a.mq)(t) || (0, a.ZU)(s)) && (u = (0, a.CP)(t)), i)) {
            let e = _(t, !0, o, t);
            (c.x = e.x + t.clientLeft), (c.y = e.y + t.clientTop);
        } else s && d();
    o && !i && s && d();
    let h = !s || i || o ? (0, r.Jx)(0) : p(s, u);
    return {
        x: l.left + u.scrollLeft - c.x - h.x,
        y: l.top + u.scrollTop - c.y - h.y,
        width: l.width,
        height: l.height,
    };
}
function R(e) {
    return "static" === (0, a.L9)(e).position;
}
function O(e, t) {
    if (!(0, a.sb)(e) || "fixed" === (0, a.L9)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (0, a.ep)(e) === n && (n = n.ownerDocument.body), n;
}
function D(e, t) {
    let n = (0, a.zk)(e);
    if ((0, a.Tf)(e)) return n;
    if (!(0, a.sb)(e)) {
        let t = (0, a.$4)(e);
        for (; t && !(0, a.eu)(t); ) {
            if ((0, a.vq)(t) && !R(t)) return t;
            t = (0, a.$4)(t);
        }
        return n;
    }
    let r = O(e, t);
    for (; r && (0, a.Lv)(r) && R(r); ) r = O(r, t);
    return r && (0, a.eu)(r) && R(r) && !(0, a.sQ)(r) ? n : r || (0, a.gJ)(e) || n;
}
let L = async function (e) {
    let t = this.getOffsetParent || D,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: N(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function w(e) {
    return "rtl" === (0, a.L9)(e).direction;
}
let x = {
    convertOffsetParentRelativeRectToViewportRelativeRect: h,
    getDocumentElement: a.ep,
    getClippingRect: C,
    getOffsetParent: D,
    getElementRects: L,
    getClientRects: m,
    getDimensions: b,
    getScale: l,
    isElement: a.vq,
    isRTL: w,
};
function P(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function M(e, t) {
    let n,
        i = null,
        s = (0, a.ep)(e);
    function o() {
        var e;
        clearTimeout(n), null == (e = i) || e.disconnect(), (i = null);
    }
    function l(a, u) {
        void 0 === a && (a = !1), void 0 === u && (u = 1), o();
        let c = e.getBoundingClientRect(),
            { left: d, top: _, width: f, height: p } = c;
        if ((a || t(), !f || !p)) return;
        let h = {
                rootMargin:
                    -(0, r.RI)(_) +
                    "px " +
                    -(0, r.RI)(s.clientWidth - (d + f)) +
                    "px " +
                    -(0, r.RI)(s.clientHeight - (_ + p)) +
                    "px " +
                    -(0, r.RI)(d) +
                    "px",
                threshold: (0, r.T9)(0, (0, r.jk)(1, u)) || 1,
            },
            m = !0;
        function g(t) {
            let r = t[0].intersectionRatio;
            if (r !== u) {
                if (!m) return l();
                r
                    ? l(!1, r)
                    : (n = setTimeout(() => {
                          l(!1, 1e-7);
                      }, 1e3));
            }
            1 !== r || P(c, e.getBoundingClientRect()) || l(), (m = !1);
        }
        try {
            i = new IntersectionObserver(g, { ...h, root: s.ownerDocument });
        } catch (e) {
            i = new IntersectionObserver(g, h);
        }
        i.observe(e);
    }
    return l(!0), o;
}
function k(e, t, n, r) {
    let i;
    void 0 === r && (r = {});
    let {
            ancestorScroll: s = !0,
            ancestorResize: l = !0,
            elementResize: u = "function" == typeof ResizeObserver,
            layoutShift: c = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
        } = r,
        f = o(e),
        p = s || l ? [...(f ? (0, a.v9)(f) : []), ...(0, a.v9)(t)] : [];
    p.forEach((e) => {
        s && e.addEventListener("scroll", n, { passive: !0 }), l && e.addEventListener("resize", n);
    });
    let h = f && c ? M(f, n) : null,
        m = -1,
        g = null;
    u &&
        ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
                r.target === f &&
                g &&
                (g.unobserve(t),
                cancelAnimationFrame(m),
                (m = requestAnimationFrame(() => {
                    var e;
                    null == (e = g) || e.observe(t);
                }))),
                n();
        })),
        f && !d && g.observe(f),
        g.observe(t));
    let E = d ? _(e) : null;
    function A() {
        let t = _(e);
        E && !P(E, t) && n(), (E = t), (i = requestAnimationFrame(A));
    }
    return (
        d && A(),
        n(),
        () => {
            var e;
            p.forEach((e) => {
                s && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n);
            }),
                null == h || h(),
                null == (e = g) || e.disconnect(),
                (g = null),
                d && cancelAnimationFrame(i);
        }
    );
}
let U = i.cY,
    G = i.RK,
    V = i.BN,
    F = i.UU,
    B = i.Ej,
    j = i.jD,
    H = i.ER,
    Y = (e, t, n) => {
        let r = new Map(),
            a = { platform: x, ...n },
            s = { ...a.platform, _c: r };
        return (0, i.rD)(e, t, { ...a, platform: s });
    };
