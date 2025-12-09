n.d(t, {
    Cp: () => F,
    Me: () => M,
    RR: () => Z,
    X5: () => U,
    cv: () => k,
    dp: () => B,
    dr: () => V,
    oo: () => H,
    uY: () => G,
});
var r = n(119576),
    i = n(393347),
    a = n(274676);
function o(e) {
    let t = (0, a.Dx)(e),
        n = parseFloat(t.width) || 0,
        i = parseFloat(t.height) || 0,
        o = (0, a.Re)(e),
        s = o ? e.offsetWidth : n,
        l = o ? e.offsetHeight : i,
        c = (0, r.NM)(n) !== s || (0, r.NM)(i) !== l;
    return (
        c && ((n = s), (i = l)),
        {
            width: n,
            height: i,
            $: c,
        }
    );
}
function s(e) {
    return (0, a.kK)(e) ? e : e.contextElement;
}
function l(e) {
    let t = s(e);
    if (!(0, a.Re)(t)) return (0, r.ze)(1);
    let n = t.getBoundingClientRect(),
        { width: i, height: l, $: c } = o(t),
        u = (c ? (0, r.NM)(n.width) : n.width) / i,
        d = (c ? (0, r.NM)(n.height) : n.height) / l;
    return (
        (u && Number.isFinite(u)) || (u = 1),
        (d && Number.isFinite(d)) || (d = 1),
        {
            x: u,
            y: d,
        }
    );
}
let c = (0, r.ze)(0);
function u(e) {
    let t = (0, a.Jj)(e);
    return (0, a.Pf)() && t.visualViewport
        ? {
              x: t.visualViewport.offsetLeft,
              y: t.visualViewport.offsetTop,
          }
        : c;
}
function d(e, t, n) {
    return void 0 === t && (t = !1), !!n && (!t || n === (0, a.Jj)(e)) && t;
}
function f(e, t, n, i) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let o = e.getBoundingClientRect(),
        c = s(e),
        f = (0, r.ze)(1);
    t && (i ? (0, a.kK)(i) && (f = l(i)) : (f = l(e)));
    let p = d(c, n, i) ? u(c) : (0, r.ze)(0),
        _ = (o.left + p.x) / f.x,
        m = (o.top + p.y) / f.y,
        h = o.width / f.x,
        g = o.height / f.y;
    if (c) {
        let e = (0, a.Jj)(c),
            t = i && (0, a.kK)(i) ? (0, a.Jj)(i) : i,
            n = e,
            r = (0, a.wK)(n);
        for (; r && i && t !== n; ) {
            let e = l(r),
                t = r.getBoundingClientRect(),
                i = (0, a.Dx)(r),
                o = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
                s = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            (_ *= e.x), (m *= e.y), (h *= e.x), (g *= e.y), (_ += o), (m += s), (n = (0, a.Jj)(r)), (r = (0, a.wK)(n));
        }
    }
    return (0, r.JB)({
        width: h,
        height: g,
        x: _,
        y: m,
    });
}
function p(e, t) {
    let n = (0, a.Lw)(e).scrollLeft;
    return t ? t.left + n : f((0, a.tF)(e)).left + n;
}
function _(e, t) {
    let n = e.getBoundingClientRect();
    return {
        x: n.left + t.scrollLeft - p(e, n),
        y: n.top + t.scrollTop,
    };
}
function m(e) {
    let { elements: t, rect: n, offsetParent: i, strategy: o } = e,
        s = "fixed" === o,
        c = (0, a.tF)(i),
        u = !!t && (0, a.tR)(t.floating);
    if (i === c || (u && s)) return n;
    let d = {
            scrollLeft: 0,
            scrollTop: 0,
        },
        p = (0, r.ze)(1),
        m = (0, r.ze)(0),
        h = (0, a.Re)(i);
    if ((h || (!h && !s)) && (("body" !== (0, a.wk)(i) || (0, a.ao)(c)) && (d = (0, a.Lw)(i)), (0, a.Re)(i))) {
        let e = f(i);
        (p = l(i)), (m.x = e.x + i.clientLeft), (m.y = e.y + i.clientTop);
    }
    let g = !c || h || s ? (0, r.ze)(0) : _(c, d);
    return {
        width: n.width * p.x,
        height: n.height * p.y,
        x: n.x * p.x - d.scrollLeft * p.x + m.x + g.x,
        y: n.y * p.y - d.scrollTop * p.y + m.y + g.y,
    };
}
function h(e) {
    return Array.from(e.getClientRects());
}
function g(e) {
    let t = (0, a.tF)(e),
        n = (0, a.Lw)(e),
        i = e.ownerDocument.body,
        o = (0, r.Fp)(t.scrollWidth, t.clientWidth, i.scrollWidth, i.clientWidth),
        s = (0, r.Fp)(t.scrollHeight, t.clientHeight, i.scrollHeight, i.clientHeight),
        l = -n.scrollLeft + p(e),
        c = -n.scrollTop;
    return (
        "rtl" === (0, a.Dx)(i).direction && (l += (0, r.Fp)(t.clientWidth, i.clientWidth) - o),
        {
            width: o,
            height: s,
            x: l,
            y: c,
        }
    );
}
let E = 25;
function b(e, t) {
    let n = (0, a.Jj)(e),
        r = (0, a.tF)(e),
        i = n.visualViewport,
        o = r.clientWidth,
        s = r.clientHeight,
        l = 0,
        c = 0;
    if (i) {
        (o = i.width), (s = i.height);
        let e = (0, a.Pf)();
        (!e || (e && "fixed" === t)) && ((l = i.offsetLeft), (c = i.offsetTop));
    }
    let u = p(r);
    if (u <= 0) {
        let e = r.ownerDocument,
            t = e.body,
            n = getComputedStyle(t),
            i = ("CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
            a = Math.abs(r.clientWidth - t.clientWidth - i);
        a <= E && (o -= a);
    } else u <= E && (o += u);
    return {
        width: o,
        height: s,
        x: l,
        y: c,
    };
}
let y = new Set(["absolute", "fixed"]);
function O(e, t) {
    let n = f(e, !0, "fixed" === t),
        i = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        s = (0, a.Re)(e) ? l(e) : (0, r.ze)(1),
        c = e.clientWidth * s.x,
        u = e.clientHeight * s.y;
    return {
        width: c,
        height: u,
        x: o * s.x,
        y: i * s.y,
    };
}
function v(e, t, n) {
    let i;
    if ("viewport" === t) i = b(e, n);
    else if ("document" === t) i = g((0, a.tF)(e));
    else if ((0, a.kK)(t)) i = O(t, n);
    else {
        let n = u(e);
        i = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height,
        };
    }
    return (0, r.JB)(i);
}
function S(e, t) {
    let n = (0, a.Ow)(e);
    return !(n === t || !(0, a.kK)(n) || (0, a.Py)(n)) && ("fixed" === (0, a.Dx)(n).position || S(n, t));
}
function I(e, t) {
    let n = t.get(e);
    if (n) return n;
    let r = (0, a.Kx)(e, [], !1).filter((e) => (0, a.kK)(e) && "body" !== (0, a.wk)(e)),
        i = null,
        o = "fixed" === (0, a.Dx)(e).position,
        s = o ? (0, a.Ow)(e) : e;
    for (; (0, a.kK)(s) && !(0, a.Py)(s); ) {
        let t = (0, a.Dx)(s),
            n = (0, a.hT)(s);
        n || "fixed" !== t.position || (i = null),
            (
                o
                    ? !n && !i
                    : (!n && "static" === t.position && !!i && y.has(i.position)) || ((0, a.ao)(s) && !n && S(e, s))
            )
                ? (r = r.filter((e) => e !== s))
                : (i = t),
            (s = (0, a.Ow)(s));
    }
    return t.set(e, r), r;
}
function T(e) {
    let { element: t, boundary: n, rootBoundary: i, strategy: o } = e,
        s = [...("clippingAncestors" === n ? ((0, a.tR)(t) ? [] : I(t, this._c)) : [].concat(n)), i],
        l = s[0],
        c = s.reduce(
            (e, n) => {
                let i = v(t, n, o);
                return (
                    (e.top = (0, r.Fp)(i.top, e.top)),
                    (e.right = (0, r.VV)(i.right, e.right)),
                    (e.bottom = (0, r.VV)(i.bottom, e.bottom)),
                    (e.left = (0, r.Fp)(i.left, e.left)),
                    e
                );
            },
            v(t, l, o),
        );
    return {
        width: c.right - c.left,
        height: c.bottom - c.top,
        x: c.left,
        y: c.top,
    };
}
function A(e) {
    let { width: t, height: n } = o(e);
    return {
        width: t,
        height: n,
    };
}
function C(e, t, n) {
    let i = (0, a.Re)(t),
        o = (0, a.tF)(t),
        s = "fixed" === n,
        l = f(e, !0, s, t),
        c = {
            scrollLeft: 0,
            scrollTop: 0,
        },
        u = (0, r.ze)(0);
    function d() {
        u.x = p(o);
    }
    if (i || (!i && !s))
        if ((("body" !== (0, a.wk)(t) || (0, a.ao)(o)) && (c = (0, a.Lw)(t)), i)) {
            let e = f(t, !0, s, t);
            (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
        } else o && d();
    s && !i && o && d();
    let m = !o || i || s ? (0, r.ze)(0) : _(o, c);
    return {
        x: l.left + c.scrollLeft - u.x - m.x,
        y: l.top + c.scrollTop - u.y - m.y,
        width: l.width,
        height: l.height,
    };
}
function N(e) {
    return "static" === (0, a.Dx)(e).position;
}
function P(e, t) {
    if (!(0, a.Re)(e) || "fixed" === (0, a.Dx)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (0, a.tF)(e) === n && (n = n.ownerDocument.body), n;
}
function R(e, t) {
    let n = (0, a.Jj)(e);
    if ((0, a.tR)(e)) return n;
    if (!(0, a.Re)(e)) {
        let t = (0, a.Ow)(e);
        for (; t && !(0, a.Py)(t); ) {
            if ((0, a.kK)(t) && !N(t)) return t;
            t = (0, a.Ow)(t);
        }
        return n;
    }
    let r = P(e, t);
    for (; r && (0, a.Ze)(r) && N(r); ) r = P(r, t);
    return r && (0, a.Py)(r) && N(r) && !(0, a.hT)(r) ? n : r || (0, a.gQ)(e) || n;
}
let D = async function (e) {
    let t = this.getOffsetParent || R,
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
function w(e) {
    return "rtl" === (0, a.Dx)(e).direction;
}
let x = {
    convertOffsetParentRelativeRectToViewportRelativeRect: m,
    getDocumentElement: a.tF,
    getClippingRect: T,
    getOffsetParent: R,
    getElementRects: D,
    getClientRects: h,
    getDimensions: A,
    getScale: l,
    isElement: a.kK,
    isRTL: w,
};
function L(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function j(e, t) {
    let n,
        i = null,
        o = (0, a.tF)(e);
    function s() {
        var e;
        clearTimeout(n), null == (e = i) || e.disconnect(), (i = null);
    }
    function l(a, c) {
        void 0 === a && (a = !1), void 0 === c && (c = 1), s();
        let u = e.getBoundingClientRect(),
            { left: d, top: f, width: p, height: _ } = u;
        if ((a || t(), !p || !_)) return;
        let m = (0, r.GW)(f),
            h = (0, r.GW)(o.clientWidth - (d + p)),
            g = {
                rootMargin:
                    -m + "px " + -h + "px " + -(0, r.GW)(o.clientHeight - (f + _)) + "px " + -(0, r.GW)(d) + "px",
                threshold: (0, r.Fp)(0, (0, r.VV)(1, c)) || 1,
            },
            E = !0;
        function b(t) {
            let r = t[0].intersectionRatio;
            if (r !== c) {
                if (!E) return l();
                r
                    ? l(!1, r)
                    : (n = setTimeout(() => {
                          l(!1, 1e-7);
                      }, 1000));
            }
            1 !== r || L(u, e.getBoundingClientRect()) || l(), (E = !1);
        }
        try {
            i = new IntersectionObserver(b, {
                ...g,
                root: o.ownerDocument,
            });
        } catch (e) {
            i = new IntersectionObserver(b, g);
        }
        i.observe(e);
    }
    return l(!0), s;
}
function M(e, t, n, r) {
    let i;
    void 0 === r && (r = {});
    let {
            ancestorScroll: o = !0,
            ancestorResize: l = !0,
            elementResize: c = "function" == typeof ResizeObserver,
            layoutShift: u = "function" == typeof IntersectionObserver,
            animationFrame: d = !1,
        } = r,
        p = s(e),
        _ = o || l ? [...(p ? (0, a.Kx)(p) : []), ...(0, a.Kx)(t)] : [];
    _.forEach((e) => {
        o && e.addEventListener("scroll", n, { passive: !0 }), l && e.addEventListener("resize", n);
    });
    let m = p && u ? j(p, n) : null,
        h = -1,
        g = null;
    c &&
        ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
                r.target === p &&
                g &&
                (g.unobserve(t),
                cancelAnimationFrame(h),
                (h = requestAnimationFrame(() => {
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
                o && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n);
            }),
                null == m || m(),
                null == (e = g) || e.disconnect(),
                (g = null),
                d && cancelAnimationFrame(i);
        }
    );
}
let k = i.cv,
    U = i.X5,
    G = i.uY,
    Z = i.RR,
    B = i.dp,
    F = i.Cp,
    V = i.dr,
    H = (e, t, n) => {
        let r = new Map(),
            a = {
                platform: x,
                ...n,
            },
            o = {
                ...a.platform,
                _c: r,
            };
        return (0, i.oo)(e, t, {
            ...a,
            platform: o,
        });
    };
