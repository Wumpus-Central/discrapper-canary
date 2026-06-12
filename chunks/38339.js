"use strict";
n.d(t, {
    UU: () => et,
    cY: () => Q,
    ll: () => Z,
    jD: () => ei,
    RK: () => J,
    BN: () => ee,
    ER: () => er,
    rD: () => es,
    Ej: () => en,
});
let i = ["top", "right", "bottom", "left"],
    r = i.reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []),
    s = Math.min,
    a = Math.max,
    o = Math.round,
    l = Math.floor,
    u = (e) => ({ x: e, y: e }),
    c = { left: "right", right: "left", bottom: "top", top: "bottom" },
    d = { start: "end", end: "start" };
function _(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function h(e) {
    return e.split("-")[0];
}
function f(e) {
    return e.split("-")[1];
}
function p(e) {
    return "x" === e ? "y" : "x";
}
function E(e) {
    return "y" === e ? "height" : "width";
}
let m = new Set(["top", "bottom"]);
function g(e) {
    return m.has(h(e)) ? "y" : "x";
}
function A(e, t, n) {
    void 0 === n && (n = !1);
    let i = f(e),
        r = p(g(e)),
        s = E(r),
        a = "x" === r ? (i === (n ? "end" : "start") ? "right" : "left") : "start" === i ? "bottom" : "top";
    return t.reference[s] > t.floating[s] && (a = v(a)), [a, v(a)];
}
function I(e) {
    return e.replace(/start|end/g, (e) => d[e]);
}
let T = ["left", "right"],
    S = ["right", "left"],
    y = ["top", "bottom"],
    N = ["bottom", "top"];
function v(e) {
    return e.replace(/left|right|bottom|top/g, (e) => c[e]);
}
function C(e) {
    let { x: t, y: n, width: i, height: r } = e;
    return { width: i, height: r, top: n, left: t, right: t + i, bottom: n + r, x: t, y: n };
}
function R(e, t, n) {
    let i,
        { reference: r, floating: s } = e,
        a = g(t),
        o = p(g(t)),
        l = E(o),
        u = h(t),
        c = "y" === a,
        d = r.x + r.width / 2 - s.width / 2,
        _ = r.y + r.height / 2 - s.height / 2,
        m = r[l] / 2 - s[l] / 2;
    switch (u) {
        case "top":
            i = { x: d, y: r.y - s.height };
            break;
        case "bottom":
            i = { x: d, y: r.y + r.height };
            break;
        case "right":
            i = { x: r.x + r.width, y: _ };
            break;
        case "left":
            i = { x: r.x - s.width, y: _ };
            break;
        default:
            i = { x: r.x, y: r.y };
    }
    switch (f(t)) {
        case "start":
            i[o] -= m * (n && c ? -1 : 1);
            break;
        case "end":
            i[o] += m * (n && c ? -1 : 1);
    }
    return i;
}
let O = async (e, t, n) => {
    let { placement: i = "bottom", strategy: r = "absolute", middleware: s = [], platform: a } = n,
        o = s.filter(Boolean),
        l = await (null == a.isRTL ? void 0 : a.isRTL(t)),
        u = await a.getElementRects({ reference: e, floating: t, strategy: r }),
        { x: c, y: d } = R(u, i, l),
        _ = i,
        h = {},
        f = 0;
    for (let n = 0; n < o.length; n++) {
        let { name: s, fn: p } = o[n],
            {
                x: E,
                y: m,
                data: g,
                reset: A,
            } = await p({
                x: c,
                y: d,
                initialPlacement: i,
                placement: _,
                strategy: r,
                middlewareData: h,
                rects: u,
                platform: a,
                elements: { reference: e, floating: t },
            });
        (c = null != E ? E : c),
            (d = null != m ? m : d),
            (h = { ...h, [s]: { ...h[s], ...g } }),
            A &&
                f <= 50 &&
                (f++,
                "object" == typeof A &&
                    (A.placement && (_ = A.placement),
                    A.rects &&
                        (u =
                            !0 === A.rects
                                ? await a.getElementRects({ reference: e, floating: t, strategy: r })
                                : A.rects),
                    ({ x: c, y: d } = R(u, _, l))),
                (n = -1));
    }
    return { x: c, y: d, placement: _, strategy: r, middlewareData: h };
};
async function b(e, t) {
    var n, i;
    void 0 === t && (t = {});
    let { x: r, y: s, platform: a, rects: o, elements: l, strategy: u } = e,
        {
            boundary: c = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: h = "floating",
            altBoundary: f = !1,
            padding: p = 0,
        } = _(t, e),
        E =
            "number" != typeof (i = p)
                ? { top: 0, right: 0, bottom: 0, left: 0, ...i }
                : { top: i, right: i, bottom: i, left: i },
        m = l[f ? ("floating" === h ? "reference" : "floating") : h],
        g = C(
            await a.getClippingRect({
                element:
                    null == (n = await (null == a.isElement ? void 0 : a.isElement(m))) || n
                        ? m
                        : m.contextElement ||
                          (await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(l.floating))),
                boundary: c,
                rootBoundary: d,
                strategy: u,
            }),
        ),
        A = "floating" === h ? { x: r, y: s, width: o.floating.width, height: o.floating.height } : o.reference,
        I = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(l.floating)),
        T = ((await (null == a.isElement ? void 0 : a.isElement(I))) &&
            (await (null == a.getScale ? void 0 : a.getScale(I)))) || { x: 1, y: 1 },
        S = C(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: l,
                      rect: A,
                      offsetParent: I,
                      strategy: u,
                  })
                : A,
        );
    return {
        top: (g.top - S.top + E.top) / T.y,
        bottom: (S.bottom - g.bottom + E.bottom) / T.y,
        left: (g.left - S.left + E.left) / T.x,
        right: (S.right - g.right + E.right) / T.x,
    };
}
function D(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function L(e) {
    return i.some((t) => e[t] >= 0);
}
let w = new Set(["left", "top"]);
async function M(e, t) {
    let { placement: n, platform: i, elements: r } = e,
        s = await (null == i.isRTL ? void 0 : i.isRTL(r.floating)),
        a = h(n),
        o = f(n),
        l = "y" === g(n),
        u = w.has(a) ? -1 : 1,
        c = s && l ? -1 : 1,
        d = _(t, e),
        {
            mainAxis: p,
            crossAxis: E,
            alignmentAxis: m,
        } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
    return (
        o && "number" == typeof m && (E = "end" === o ? -1 * m : m), l ? { x: E * c, y: p * u } : { x: p * u, y: E * c }
    );
}
var P = n(84157);
function x(e) {
    let t = (0, P.L9)(e),
        n = parseFloat(t.width) || 0,
        i = parseFloat(t.height) || 0,
        r = (0, P.sb)(e),
        s = r ? e.offsetWidth : n,
        a = r ? e.offsetHeight : i,
        l = o(n) !== s || o(i) !== a;
    return l && ((n = s), (i = a)), { width: n, height: i, $: l };
}
function k(e) {
    return (0, P.vq)(e) ? e : e.contextElement;
}
function U(e) {
    let t = k(e);
    if (!(0, P.sb)(t)) return u(1);
    let n = t.getBoundingClientRect(),
        { width: i, height: r, $: s } = x(t),
        a = (s ? o(n.width) : n.width) / i,
        l = (s ? o(n.height) : n.height) / r;
    return (a && Number.isFinite(a)) || (a = 1), (l && Number.isFinite(l)) || (l = 1), { x: a, y: l };
}
let G = u(0);
function F(e) {
    let t = (0, P.zk)(e);
    return (0, P.Tc)() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : G;
}
function V(e, t, n, i) {
    var r;
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let s = e.getBoundingClientRect(),
        a = k(e),
        o = u(1);
    t && (i ? (0, P.vq)(i) && (o = U(i)) : (o = U(e)));
    let l = (void 0 === (r = n) && (r = !1), i && (!r || i === (0, P.zk)(a)) && r) ? F(a) : u(0),
        c = (s.left + l.x) / o.x,
        d = (s.top + l.y) / o.y,
        _ = s.width / o.x,
        h = s.height / o.y;
    if (a) {
        let e = (0, P.zk)(a),
            t = i && (0, P.vq)(i) ? (0, P.zk)(i) : i,
            n = e,
            r = (0, P._m)(n);
        for (; r && i && t !== n; ) {
            let e = U(r),
                t = r.getBoundingClientRect(),
                i = (0, P.L9)(r),
                s = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
                a = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            (c *= e.x), (d *= e.y), (_ *= e.x), (h *= e.y), (c += s), (d += a), (n = (0, P.zk)(r)), (r = (0, P._m)(n));
        }
    }
    return C({ width: _, height: h, x: c, y: d });
}
function B(e, t) {
    let n = (0, P.CP)(e).scrollLeft;
    return t ? t.left + n : V((0, P.ep)(e)).left + n;
}
function H(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - B(e, n), y: n.top + t.scrollTop };
}
let j = new Set(["absolute", "fixed"]);
function Y(e, t, n) {
    var i;
    let r;
    if ("viewport" === t)
        r = (function (e, t) {
            let n = (0, P.zk)(e),
                i = (0, P.ep)(e),
                r = n.visualViewport,
                s = i.clientWidth,
                a = i.clientHeight,
                o = 0,
                l = 0;
            if (r) {
                (s = r.width), (a = r.height);
                let e = (0, P.Tc)();
                (!e || (e && "fixed" === t)) && ((o = r.offsetLeft), (l = r.offsetTop));
            }
            let u = B(i);
            if (u <= 0) {
                let e = i.ownerDocument,
                    t = e.body,
                    n = getComputedStyle(t),
                    r = ("CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
                    a = Math.abs(i.clientWidth - t.clientWidth - r);
                a <= 25 && (s -= a);
            } else u <= 25 && (s += u);
            return { width: s, height: a, x: o, y: l };
        })(e, n);
    else if ("document" === t) {
        let t, n, s, o, l, u, c;
        (i = (0, P.ep)(e)),
            (t = (0, P.ep)(i)),
            (n = (0, P.CP)(i)),
            (s = i.ownerDocument.body),
            (o = a(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth)),
            (l = a(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight)),
            (u = -n.scrollLeft + B(i)),
            (c = -n.scrollTop),
            "rtl" === (0, P.L9)(s).direction && (u += a(t.clientWidth, s.clientWidth) - o),
            (r = { width: o, height: l, x: u, y: c });
    } else if ((0, P.vq)(t)) {
        let e, i, s, a, o, l;
        (i = (e = V(t, !0, "fixed" === n)).top + t.clientTop),
            (s = e.left + t.clientLeft),
            (a = (0, P.sb)(t) ? U(t) : u(1)),
            (o = t.clientWidth * a.x),
            (l = t.clientHeight * a.y),
            (r = { width: o, height: l, x: s * a.x, y: i * a.y });
    } else {
        let n = F(e);
        r = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return C(r);
}
function W(e) {
    return "static" === (0, P.L9)(e).position;
}
function K(e, t) {
    if (!(0, P.sb)(e) || "fixed" === (0, P.L9)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (0, P.ep)(e) === n && (n = n.ownerDocument.body), n;
}
function $(e, t) {
    let n = (0, P.zk)(e);
    if ((0, P.Tf)(e)) return n;
    if (!(0, P.sb)(e)) {
        let t = (0, P.$4)(e);
        for (; t && !(0, P.eu)(t); ) {
            if ((0, P.vq)(t) && !W(t)) return t;
            t = (0, P.$4)(t);
        }
        return n;
    }
    let i = K(e, t);
    for (; i && (0, P.Lv)(i) && W(i); ) i = K(i, t);
    return i && (0, P.eu)(i) && W(i) && !(0, P.sQ)(i) ? n : i || (0, P.gJ)(e) || n;
}
let z = async function (e) {
        let t = this.getOffsetParent || $,
            n = this.getDimensions,
            i = await n(e.floating);
        return {
            reference: (function (e, t, n) {
                let i = (0, P.sb)(t),
                    r = (0, P.ep)(t),
                    s = "fixed" === n,
                    a = V(e, !0, s, t),
                    o = { scrollLeft: 0, scrollTop: 0 },
                    l = u(0);
                if (i || (!i && !s))
                    if ((("body" !== (0, P.mq)(t) || (0, P.ZU)(r)) && (o = (0, P.CP)(t)), i)) {
                        let e = V(t, !0, s, t);
                        (l.x = e.x + t.clientLeft), (l.y = e.y + t.clientTop);
                    } else r && (l.x = B(r));
                s && !i && r && (l.x = B(r));
                let c = !r || i || s ? u(0) : H(r, o);
                return {
                    x: a.left + o.scrollLeft - l.x - c.x,
                    y: a.top + o.scrollTop - l.y - c.y,
                    width: a.width,
                    height: a.height,
                };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
        };
    },
    q = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: i, strategy: r } = e,
                s = "fixed" === r,
                a = (0, P.ep)(i),
                o = !!t && (0, P.Tf)(t.floating);
            if (i === a || (o && s)) return n;
            let l = { scrollLeft: 0, scrollTop: 0 },
                c = u(1),
                d = u(0),
                _ = (0, P.sb)(i);
            if ((_ || (!_ && !s)) && (("body" !== (0, P.mq)(i) || (0, P.ZU)(a)) && (l = (0, P.CP)(i)), (0, P.sb)(i))) {
                let e = V(i);
                (c = U(i)), (d.x = e.x + i.clientLeft), (d.y = e.y + i.clientTop);
            }
            let h = !a || _ || s ? u(0) : H(a, l);
            return {
                width: n.width * c.x,
                height: n.height * c.y,
                x: n.x * c.x - l.scrollLeft * c.x + d.x + h.x,
                y: n.y * c.y - l.scrollTop * c.y + d.y + h.y,
            };
        },
        getDocumentElement: P.ep,
        getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: i, strategy: r } = e,
                o = [
                    ...("clippingAncestors" === n
                        ? (0, P.Tf)(t)
                            ? []
                            : (function (e, t) {
                                  let n = t.get(e);
                                  if (n) return n;
                                  let i = (0, P.v9)(e, [], !1).filter((e) => (0, P.vq)(e) && "body" !== (0, P.mq)(e)),
                                      r = null,
                                      s = "fixed" === (0, P.L9)(e).position,
                                      a = s ? (0, P.$4)(e) : e;
                                  for (; (0, P.vq)(a) && !(0, P.eu)(a); ) {
                                      let t = (0, P.L9)(a),
                                          n = (0, P.sQ)(a);
                                      n || "fixed" !== t.position || (r = null),
                                          (
                                              s
                                                  ? !n && !r
                                                  : (!n && "static" === t.position && !!r && j.has(r.position)) ||
                                                    ((0, P.ZU)(a) &&
                                                        !n &&
                                                        (function e(t, n) {
                                                            let i = (0, P.$4)(t);
                                                            return (
                                                                !(i === n || !(0, P.vq)(i) || (0, P.eu)(i)) &&
                                                                ("fixed" === (0, P.L9)(i).position || e(i, n))
                                                            );
                                                        })(e, a))
                                          )
                                              ? (i = i.filter((e) => e !== a))
                                              : (r = t),
                                          (a = (0, P.$4)(a));
                                  }
                                  return t.set(e, i), i;
                              })(t, this._c)
                        : [].concat(n)),
                    i,
                ],
                l = o[0],
                u = o.reduce(
                    (e, n) => {
                        let i = Y(t, n, r);
                        return (
                            (e.top = a(i.top, e.top)),
                            (e.right = s(i.right, e.right)),
                            (e.bottom = s(i.bottom, e.bottom)),
                            (e.left = a(i.left, e.left)),
                            e
                        );
                    },
                    Y(t, l, r),
                );
            return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
        },
        getOffsetParent: $,
        getElementRects: z,
        getClientRects: function (e) {
            return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
            let { width: t, height: n } = x(e);
            return { width: t, height: n };
        },
        getScale: U,
        isElement: P.vq,
        isRTL: function (e) {
            return "rtl" === (0, P.L9)(e).direction;
        },
    };
function X(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function Z(e, t, n, i) {
    let r;
    void 0 === i && (i = {});
    let {
            ancestorScroll: o = !0,
            ancestorResize: u = !0,
            elementResize: c = "function" == typeof ResizeObserver,
            layoutShift: d = "function" == typeof IntersectionObserver,
            animationFrame: _ = !1,
        } = i,
        h = k(e),
        f = o || u ? [...(h ? (0, P.v9)(h) : []), ...(0, P.v9)(t)] : [];
    f.forEach((e) => {
        o && e.addEventListener("scroll", n, { passive: !0 }), u && e.addEventListener("resize", n);
    });
    let p =
            h && d
                ? (function (e, t) {
                      let n,
                          i = null,
                          r = (0, P.ep)(e);
                      function o() {
                          var e;
                          clearTimeout(n), null == (e = i) || e.disconnect(), (i = null);
                      }
                      return (
                          !(function u(c, d) {
                              void 0 === c && (c = !1), void 0 === d && (d = 1), o();
                              let _ = e.getBoundingClientRect(),
                                  { left: h, top: f, width: p, height: E } = _;
                              if ((c || t(), !p || !E)) return;
                              let m = {
                                      rootMargin:
                                          -l(f) +
                                          "px " +
                                          -l(r.clientWidth - (h + p)) +
                                          "px " +
                                          -l(r.clientHeight - (f + E)) +
                                          "px " +
                                          -l(h) +
                                          "px",
                                      threshold: a(0, s(1, d)) || 1,
                                  },
                                  g = !0;
                              function A(t) {
                                  let i = t[0].intersectionRatio;
                                  if (i !== d) {
                                      if (!g) return u();
                                      i
                                          ? u(!1, i)
                                          : (n = setTimeout(() => {
                                                u(!1, 1e-7);
                                            }, 1e3));
                                  }
                                  1 !== i || X(_, e.getBoundingClientRect()) || u(), (g = !1);
                              }
                              try {
                                  i = new IntersectionObserver(A, { ...m, root: r.ownerDocument });
                              } catch (e) {
                                  i = new IntersectionObserver(A, m);
                              }
                              i.observe(e);
                          })(!0),
                          o
                      );
                  })(h, n)
                : null,
        E = -1,
        m = null;
    c &&
        ((m = new ResizeObserver((e) => {
            let [i] = e;
            i &&
                i.target === h &&
                m &&
                (m.unobserve(t),
                cancelAnimationFrame(E),
                (E = requestAnimationFrame(() => {
                    var e;
                    null == (e = m) || e.observe(t);
                }))),
                n();
        })),
        h && !_ && m.observe(h),
        m.observe(t));
    let g = _ ? V(e) : null;
    return (
        _ &&
            (function t() {
                let i = V(e);
                g && !X(g, i) && n(), (g = i), (r = requestAnimationFrame(t));
            })(),
        n(),
        () => {
            var e;
            f.forEach((e) => {
                o && e.removeEventListener("scroll", n), u && e.removeEventListener("resize", n);
            }),
                null == p || p(),
                null == (e = m) || e.disconnect(),
                (m = null),
                _ && cancelAnimationFrame(r);
        }
    );
}
let Q = function (e) {
        return (
            void 0 === e && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, i;
                    let { x: r, y: s, placement: a, middlewareData: o } = t,
                        l = await M(t, e);
                    return a === (null == (n = o.offset) ? void 0 : n.placement) &&
                        null != (i = o.arrow) &&
                        i.alignmentOffset
                        ? {}
                        : { x: r + l.x, y: s + l.y, data: { ...l, placement: a } };
                },
            }
        );
    },
    J = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "autoPlacement",
                options: e,
                async fn(t) {
                    var n, i, s, a;
                    let { rects: o, middlewareData: l, placement: u, platform: c, elements: d } = t,
                        {
                            crossAxis: p = !1,
                            alignment: E,
                            allowedPlacements: m = r,
                            autoAlignment: g = !0,
                            ...T
                        } = _(e, t),
                        S =
                            void 0 !== E || m === r
                                ? ((a = E || null)
                                      ? [...m.filter((e) => f(e) === a), ...m.filter((e) => f(e) !== a)]
                                      : m.filter((e) => h(e) === e)
                                  ).filter((e) => !a || f(e) === a || (!!g && I(e) !== e))
                                : m,
                        y = await b(t, T),
                        N = (null == (n = l.autoPlacement) ? void 0 : n.index) || 0,
                        v = S[N];
                    if (null == v) return {};
                    let C = A(v, o, await (null == c.isRTL ? void 0 : c.isRTL(d.floating)));
                    if (u !== v) return { reset: { placement: S[0] } };
                    let R = [y[h(v)], y[C[0]], y[C[1]]],
                        O = [
                            ...((null == (i = l.autoPlacement) ? void 0 : i.overflows) || []),
                            { placement: v, overflows: R },
                        ],
                        D = S[N + 1];
                    if (D) return { data: { index: N + 1, overflows: O }, reset: { placement: D } };
                    let L = O.map((e) => {
                            let t = f(e.placement);
                            return [
                                e.placement,
                                t && p ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0],
                                e.overflows,
                            ];
                        }).sort((e, t) => e[1] - t[1]),
                        w =
                            (null == (s = L.filter((e) => e[2].slice(0, f(e[0]) ? 2 : 3).every((e) => e <= 0))[0])
                                ? void 0
                                : s[0]) || L[0][0];
                    return w !== u ? { data: { index: N + 1, overflows: O }, reset: { placement: w } } : {};
                },
            }
        );
    },
    ee = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    let { x: n, y: i, placement: r } = t,
                        {
                            mainAxis: o = !0,
                            crossAxis: l = !1,
                            limiter: u = {
                                fn: (e) => {
                                    let { x: t, y: n } = e;
                                    return { x: t, y: n };
                                },
                            },
                            ...c
                        } = _(e, t),
                        d = { x: n, y: i },
                        f = await b(t, c),
                        E = g(h(r)),
                        m = p(E),
                        A = d[m],
                        I = d[E];
                    if (o) {
                        let e = "y" === m ? "top" : "left",
                            t = "y" === m ? "bottom" : "right",
                            n = A + f[e],
                            i = A - f[t];
                        A = a(n, s(A, i));
                    }
                    if (l) {
                        let e = "y" === E ? "top" : "left",
                            t = "y" === E ? "bottom" : "right",
                            n = I + f[e],
                            i = I - f[t];
                        I = a(n, s(I, i));
                    }
                    let T = u.fn({ ...t, [m]: A, [E]: I });
                    return { ...T, data: { x: T.x - n, y: T.y - i, enabled: { [m]: o, [E]: l } } };
                },
            }
        );
    },
    et = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, i, r, s, a;
                    let o,
                        l,
                        u,
                        {
                            placement: c,
                            middlewareData: d,
                            rects: p,
                            initialPlacement: E,
                            platform: m,
                            elements: C,
                        } = t,
                        {
                            mainAxis: R = !0,
                            crossAxis: O = !0,
                            fallbackPlacements: D,
                            fallbackStrategy: L = "bestFit",
                            fallbackAxisSideDirection: w = "none",
                            flipAlignment: M = !0,
                            ...P
                        } = _(e, t);
                    if (null != (n = d.arrow) && n.alignmentOffset) return {};
                    let x = h(c),
                        k = g(E),
                        U = h(E) === E,
                        G = await (null == m.isRTL ? void 0 : m.isRTL(C.floating)),
                        F = D || (U || !M ? [v(E)] : ((o = v(E)), [I(E), o, I(o)])),
                        V = "none" !== w;
                    !D &&
                        V &&
                        F.push(
                            ...((l = f(E)),
                            (u = (function (e, t, n) {
                                switch (e) {
                                    case "top":
                                    case "bottom":
                                        if (n) return t ? S : T;
                                        return t ? T : S;
                                    case "left":
                                    case "right":
                                        return t ? y : N;
                                    default:
                                        return [];
                                }
                            })(h(E), "start" === w, G)),
                            l && ((u = u.map((e) => e + "-" + l)), M && (u = u.concat(u.map(I)))),
                            u),
                        );
                    let B = [E, ...F],
                        H = await b(t, P),
                        j = [],
                        Y = (null == (i = d.flip) ? void 0 : i.overflows) || [];
                    if ((R && j.push(H[x]), O)) {
                        let e = A(c, p, G);
                        j.push(H[e[0]], H[e[1]]);
                    }
                    if (((Y = [...Y, { placement: c, overflows: j }]), !j.every((e) => e <= 0))) {
                        let e = ((null == (r = d.flip) ? void 0 : r.index) || 0) + 1,
                            t = B[e];
                        if (
                            t &&
                            ("alignment" !== O ||
                                k === g(t) ||
                                Y.every((e) => g(e.placement) !== k || e.overflows[0] > 0))
                        )
                            return { data: { index: e, overflows: Y }, reset: { placement: t } };
                        let n =
                            null ==
                            (s = Y.filter((e) => e.overflows[0] <= 0).sort(
                                (e, t) => e.overflows[1] - t.overflows[1],
                            )[0])
                                ? void 0
                                : s.placement;
                        if (!n)
                            switch (L) {
                                case "bestFit": {
                                    let e =
                                        null ==
                                        (a = Y.filter((e) => {
                                            if (V) {
                                                let t = g(e.placement);
                                                return t === k || "y" === t;
                                            }
                                            return !0;
                                        })
                                            .map((e) => [
                                                e.placement,
                                                e.overflows.filter((e) => e > 0).reduce((e, t) => e + t, 0),
                                            ])
                                            .sort((e, t) => e[1] - t[1])[0])
                                            ? void 0
                                            : a[0];
                                    e && (n = e);
                                    break;
                                }
                                case "initialPlacement":
                                    n = E;
                            }
                        if (c !== n) return { reset: { placement: n } };
                    }
                    return {};
                },
            }
        );
    },
    en = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, i;
                    let r,
                        o,
                        { placement: l, rects: u, platform: c, elements: d } = t,
                        { apply: p = () => {}, ...E } = _(e, t),
                        m = await b(t, E),
                        A = h(l),
                        I = f(l),
                        T = "y" === g(l),
                        { width: S, height: y } = u.floating;
                    "top" === A || "bottom" === A
                        ? ((r = A),
                          (o =
                              I === ((await (null == c.isRTL ? void 0 : c.isRTL(d.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((o = A), (r = "end" === I ? "top" : "bottom"));
                    let N = y - m.top - m.bottom,
                        v = S - m.left - m.right,
                        C = s(y - m[r], N),
                        R = s(S - m[o], v),
                        O = !t.middlewareData.shift,
                        D = C,
                        L = R;
                    if (
                        (null != (n = t.middlewareData.shift) && n.enabled.x && (L = v),
                        null != (i = t.middlewareData.shift) && i.enabled.y && (D = N),
                        O && !I)
                    ) {
                        let e = a(m.left, 0),
                            t = a(m.right, 0),
                            n = a(m.top, 0),
                            i = a(m.bottom, 0);
                        T
                            ? (L = S - 2 * (0 !== e || 0 !== t ? e + t : a(m.left, m.right)))
                            : (D = y - 2 * (0 !== n || 0 !== i ? n + i : a(m.top, m.bottom)));
                    }
                    await p({ ...t, availableWidth: L, availableHeight: D });
                    let w = await c.getDimensions(d.floating);
                    return S !== w.width || y !== w.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    },
    ei = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    let { rects: n } = t,
                        { strategy: i = "referenceHidden", ...r } = _(e, t);
                    switch (i) {
                        case "referenceHidden": {
                            let e = D(await b(t, { ...r, elementContext: "reference" }), n.reference);
                            return { data: { referenceHiddenOffsets: e, referenceHidden: L(e) } };
                        }
                        case "escaped": {
                            let e = D(await b(t, { ...r, altBoundary: !0 }), n.floating);
                            return { data: { escapedOffsets: e, escaped: L(e) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    er = function (e) {
        return (
            void 0 === e && (e = {}),
            {
                options: e,
                fn(t) {
                    let { x: n, y: i, placement: r, rects: s, middlewareData: a } = t,
                        { offset: o = 0, mainAxis: l = !0, crossAxis: u = !0 } = _(e, t),
                        c = { x: n, y: i },
                        d = g(r),
                        f = p(d),
                        E = c[f],
                        m = c[d],
                        A = _(o, t),
                        I = "number" == typeof A ? { mainAxis: A, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...A };
                    if (l) {
                        let e = "y" === f ? "height" : "width",
                            t = s.reference[f] - s.floating[e] + I.mainAxis,
                            n = s.reference[f] + s.reference[e] - I.mainAxis;
                        E < t ? (E = t) : E > n && (E = n);
                    }
                    if (u) {
                        var T, S;
                        let e = "y" === f ? "width" : "height",
                            t = w.has(h(r)),
                            n =
                                s.reference[d] -
                                s.floating[e] +
                                ((t && (null == (T = a.offset) ? void 0 : T[d])) || 0) +
                                (t ? 0 : I.crossAxis),
                            i =
                                s.reference[d] +
                                s.reference[e] +
                                (t ? 0 : (null == (S = a.offset) ? void 0 : S[d]) || 0) -
                                (t ? I.crossAxis : 0);
                        m < n ? (m = n) : m > i && (m = i);
                    }
                    return { [f]: E, [d]: m };
                },
            }
        );
    },
    es = (e, t, n) => {
        let i = new Map(),
            r = { platform: q, ...n },
            s = { ...r.platform, _c: i };
        return O(e, t, { ...r, platform: s });
    };
