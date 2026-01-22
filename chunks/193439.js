n.d(t, {
    BN: () => G,
    ER: () => H,
    Ej: () => F,
    RK: () => U,
    UU: () => V,
    cY: () => k,
    jD: () => B,
    ll: () => M,
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
        c = (0, r.LI)(n) !== o || (0, r.LI)(i) !== l;
    return (
        c && ((n = o), (i = l)),
        {
            width: n,
            height: i,
            $: c,
        }
    );
}
function o(e) {
    return (0, a.vq)(e) ? e : e.contextElement;
}
function l(e) {
    let t = o(e);
    if (!(0, a.sb)(t)) return (0, r.Jx)(1);
    let n = t.getBoundingClientRect(),
        { width: i, height: l, $: c } = s(t),
        u = (c ? (0, r.LI)(n.width) : n.width) / i,
        d = (c ? (0, r.LI)(n.height) : n.height) / l;
    return (
        (u && Number.isFinite(u)) || (u = 1),
        (d && Number.isFinite(d)) || (d = 1),
        {
            x: u,
            y: d,
        }
    );
}
let c = (0, r.Jx)(0);
function u(e) {
    let t = (0, a.zk)(e);
    return (0, a.Tc)() && t.visualViewport
        ? {
              x: t.visualViewport.offsetLeft,
              y: t.visualViewport.offsetTop,
          }
        : c;
}
function d(e, t, n) {
    return void 0 === t && (t = !1), !!n && (!t || n === (0, a.zk)(e)) && t;
}
function f(e, t, n, i) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let s = e.getBoundingClientRect(),
        c = o(e),
        f = (0, r.Jx)(1);
    t && (i ? (0, a.vq)(i) && (f = l(i)) : (f = l(e)));
    let p = d(c, n, i) ? u(c) : (0, r.Jx)(0),
        _ = (s.left + p.x) / f.x,
        h = (s.top + p.y) / f.y,
        m = s.width / f.x,
        g = s.height / f.y;
    if (c) {
        let e = (0, a.zk)(c),
            t = i && (0, a.vq)(i) ? (0, a.zk)(i) : i,
            n = e,
            r = (0, a._m)(n);
        for (; r && i && t !== n; ) {
            let e = l(r),
                t = r.getBoundingClientRect(),
                i = (0, a.L9)(r),
                s = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
                o = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            (_ *= e.x), (h *= e.y), (m *= e.x), (g *= e.y), (_ += s), (h += o), (n = (0, a.zk)(r)), (r = (0, a._m)(n));
        }
    }
    return (0, r.B1)({
        width: m,
        height: g,
        x: _,
        y: h,
    });
}
function p(e, t) {
    let n = (0, a.CP)(e).scrollLeft;
    return t ? t.left + n : f((0, a.ep)(e)).left + n;
}
function _(e, t) {
    let n = e.getBoundingClientRect();
    return {
        x: n.left + t.scrollLeft - p(e, n),
        y: n.top + t.scrollTop,
    };
}
function h(e) {
    let { elements: t, rect: n, offsetParent: i, strategy: s } = e,
        o = "fixed" === s,
        c = (0, a.ep)(i),
        u = !!t && (0, a.Tf)(t.floating);
    if (i === c || (u && o)) return n;
    let d = {
            scrollLeft: 0,
            scrollTop: 0,
        },
        p = (0, r.Jx)(1),
        h = (0, r.Jx)(0),
        m = (0, a.sb)(i);
    if ((m || (!m && !o)) && (("body" !== (0, a.mq)(i) || (0, a.ZU)(c)) && (d = (0, a.CP)(i)), (0, a.sb)(i))) {
        let e = f(i);
        (p = l(i)), (h.x = e.x + i.clientLeft), (h.y = e.y + i.clientTop);
    }
    let g = !c || m || o ? (0, r.Jx)(0) : _(c, d);
    return {
        width: n.width * p.x,
        height: n.height * p.y,
        x: n.x * p.x - d.scrollLeft * p.x + h.x + g.x,
        y: n.y * p.y - d.scrollTop * p.y + h.y + g.y,
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
        l = -n.scrollLeft + p(e),
        c = -n.scrollTop;
    return (
        "rtl" === (0, a.L9)(i).direction && (l += (0, r.T9)(t.clientWidth, i.clientWidth) - s),
        {
            width: s,
            height: o,
            x: l,
            y: c,
        }
    );
}
let E = 25;
function b(e, t) {
    let n = (0, a.zk)(e),
        r = (0, a.ep)(e),
        i = n.visualViewport,
        s = r.clientWidth,
        o = r.clientHeight,
        l = 0,
        c = 0;
    if (i) {
        (s = i.width), (o = i.height);
        let e = (0, a.Tc)();
        (!e || (e && "fixed" === t)) && ((l = i.offsetLeft), (c = i.offsetTop));
    }
    let u = p(r);
    if (u <= 0) {
        let e = r.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            i = ("CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
            a = Math.abs(r.clientWidth - t.clientWidth - i);
        a <= E && (s -= a);
    } else u <= E && (s += u);
    return {
        width: s,
        height: o,
        x: l,
        y: c,
    };
}
let y = new Set(["absolute", "fixed"]);
function O(e, t) {
    let n = f(e, !0, "fixed" === t),
        i = n.top + e.clientTop,
        s = n.left + e.clientLeft,
        o = (0, a.sb)(e) ? l(e) : (0, r.Jx)(1),
        c = e.clientWidth * o.x,
        u = e.clientHeight * o.y;
    return {
        width: c,
        height: u,
        x: s * o.x,
        y: i * o.y,
    };
}
function A(e, t, n) {
    let i;
    if ("viewport" === t) i = b(e, n);
    else if ("document" === t) i = g((0, a.ep)(e));
    else if ((0, a.vq)(t)) i = O(t, n);
    else {
        let n = u(e);
        i = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height,
        };
    }
    return (0, r.B1)(i);
}
function v(e, t) {
    let n = (0, a.$4)(e);
    return !(n === t || !(0, a.vq)(n) || (0, a.eu)(n)) && ("fixed" === (0, a.L9)(n).position || v(n, t));
}
function S(e, t) {
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
                    : (!n && "static" === t.position && !!i && y.has(i.position)) || ((0, a.ZU)(o) && !n && v(e, o))
            )
                ? (r = r.filter((e) => e !== o))
                : (i = t),
            (o = (0, a.$4)(o));
    }
    return t.set(e, r), r;
}
function I(e) {
    let { element: t, boundary: n, rootBoundary: i, strategy: s } = e,
        o = [...("clippingAncestors" === n ? ((0, a.Tf)(t) ? [] : S(t, this._c)) : [].concat(n)), i],
        l = o[0],
        c = o.reduce(
            (e, n) => {
                let i = A(t, n, s);
                return (
                    (e.top = (0, r.T9)(i.top, e.top)),
                    (e.right = (0, r.jk)(i.right, e.right)),
                    (e.bottom = (0, r.jk)(i.bottom, e.bottom)),
                    (e.left = (0, r.T9)(i.left, e.left)),
                    e
                );
            },
            A(t, l, s),
        );
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top,
    };
}
function T(e) {
    let { width: t, height: n } = s(e);
    return {
        width: t,
        height: n,
    };
}
function C(e, t, n) {
    let i = (0, a.sb)(t),
        s = (0, a.ep)(t),
        o = "fixed" === n,
        l = f(e, !0, o, t),
        c = {
            scrollLeft: 0,
            scrollTop: 0,
        },
        u = (0, r.Jx)(0);
    function d() {
        u.x = p(s);
    }
    if (i || (!i && !o))
        if ((("body" !== (0, a.mq)(t) || (0, a.ZU)(s)) && (c = (0, a.CP)(t)), i)) {
            let e = f(t, !0, o, t);
            (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
        } else s && d();
    o && !i && s && d();
    let h = !s || i || o ? (0, r.Jx)(0) : _(s, c);
    return {
        x: l.left + c.scrollLeft - u.x - h.x,
        y: l.top + c.scrollTop - u.y - h.y,
        width: l.width,
        height: l.height,
    };
}
function N(e) {
    return "static" === (0, a.L9)(e).position;
}
function R(e, t) {
    if (!(0, a.sb)(e) || "fixed" === (0, a.L9)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (0, a.ep)(e) === n && (n = n.ownerDocument.body), n;
}
function w(e, t) {
    let n = (0, a.zk)(e);
    if ((0, a.Tf)(e)) return n;
    if (!(0, a.sb)(e)) {
        let t = (0, a.$4)(e);
        for (; t && !(0, a.eu)(t); ) {
            if ((0, a.vq)(t) && !N(t)) return t;
            t = (0, a.$4)(t);
        }
        return n;
    }
    let r = R(e, t);
    for (; r && (0, a.Lv)(r) && N(r); ) r = R(r, t);
    return r && (0, a.eu)(r) && N(r) && !(0, a.sQ)(r) ? n : r || (0, a.gJ)(e) || n;
}
let P = async function (e) {
    let t = this.getOffsetParent || w,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: C(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height,
        },
    };
};
function D(e) {
    return "rtl" === (0, a.L9)(e).direction;
}
let x = {
    convertOffsetParentRelativeRectToViewportRelativeRect: h,
    getDocumentElement: a.ep,
    getClippingRect: I,
    getOffsetParent: w,
    getElementRects: P,
    getClientRects: m,
    getDimensions: T,
    getScale: l,
    isElement: a.vq,
    isRTL: D,
};
function L(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function j(e, t) {
    let n,
        i = null,
        s = (0, a.ep)(e);
    function o() {
        var e;
        clearTimeout(n), null == (e = i) || e.disconnect(), (i = null);
    }
    function l(a, c) {
        void 0 === a && (a = !1), void 0 === c && (c = 1), o();
        let u = e.getBoundingClientRect(),
            { left: d, top: f, width: p, height: _ } = u;
        if ((a || t(), !p || !_)) return;
        let h = {
                rootMargin:
                    -(0, r.RI)(f) +
                    "px " +
                    -(0, r.RI)(s.clientWidth - (d + p)) +
                    "px " +
                    -(0, r.RI)(s.clientHeight - (f + _)) +
                    "px " +
                    -(0, r.RI)(d) +
                    "px",
                threshold: (0, r.T9)(0, (0, r.jk)(1, c)) || 1,
            },
            m = !0;
        function g(t) {
            let r = t[0].intersectionRatio;
            if (r !== c) {
                if (!m) return l();
                r
                    ? l(!1, r)
                    : (n = setTimeout(() => {
                          l(!1, 1e-7);
                      }, 1000));
            }
            1 !== r || L(u, e.getBoundingClientRect()) || l(), (m = !1);
        }
        try {
            i = new IntersectionObserver(g, {
                ...h,
                root: s.ownerDocument,
            });
        } catch (e) {
            i = new IntersectionObserver(g, h);
        }
        i.observe(e);
    }
    return l(!0), o;
}
function M(e, t, n, r) {
    let i;
    void 0 === r && (r = {});
    let {
            ancestorScroll: s = !0,
            ancestorResize: l = !0,
            elementResize: c = "function" == typeof ResizeObserver,
            layoutShift: u = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
        } = r,
        p = o(e),
        _ = s || l ? [...(p ? (0, a.v9)(p) : []), ...(0, a.v9)(t)] : [];
    _.forEach((e) => {
        s && e.addEventListener("scroll", n, { passive: !0 }), l && e.addEventListener("resize", n);
    });
    let h = p && u ? j(p, n) : null,
        m = -1,
        g = null;
    c &&
        ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
                r.target === p &&
                g &&
                (g.unobserve(t),
                cancelAnimationFrame(m),
                (m = requestAnimationFrame(() => {
                    var e;
                    null == (e = g) || e.observe(t);
                }))),
                n();
        })),
        p && !d && g.observe(p),
        g.observe(t));
    let E = d ? f(e) : null;
    function b() {
        let t = f(e);
        E && !L(E, t) && n(), (E = t), (i = requestAnimationFrame(b));
    }
    return (
        d && b(),
        n(),
        () => {
            var e;
            _.forEach((e) => {
                s && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n);
            }),
                null == h || h(),
                null == (e = g) || e.disconnect(),
                (g = null),
                d && cancelAnimationFrame(i);
        }
    );
}
let k = i.cY,
    U = i.RK,
    G = i.BN,
    V = i.UU,
    F = i.Ej,
    B = i.jD,
    H = i.ER,
    Y = (e, t, n) => {
        let r = new Map(),
            a = {
                platform: x,
                ...n,
            },
            s = {
                ...a.platform,
                _c: r,
            };
        return (0, i.rD)(e, t, {
            ...a,
            platform: s,
        });
    };
