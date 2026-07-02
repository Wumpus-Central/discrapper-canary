"use strict";
if (
    (n.d(t, {
        BN: () => D,
        ER: () => R,
        Ej: () => w,
        RK: () => C,
        UU: () => O,
        cY: () => T,
        jD: () => A,
        ll: () => S,
        rD: () => M,
    }),
    !/^(38190|98365)$/.test(n.j))
)
    var r = n(56027);
if (!/^(38190|98365)$/.test(n.j)) var a = n(764647);
if (!/^(38190|98365)$/.test(n.j)) var i = n(84157);
function o(e) {
    let t = (0, i.L9)(e),
        n = parseFloat(t.width) || 0,
        a = parseFloat(t.height) || 0,
        o = (0, i.sb)(e),
        s = o ? e.offsetWidth : n,
        l = o ? e.offsetHeight : a,
        c = (0, r.LI)(n) !== s || (0, r.LI)(a) !== l;
    return c && ((n = s), (a = l)), { width: n, height: a, $: c };
}
function s(e) {
    return (0, i.vq)(e) ? e : e.contextElement;
}
function l(e) {
    let t = s(e);
    if (!(0, i.sb)(t)) return (0, r.Jx)(1);
    let n = t.getBoundingClientRect(),
        { width: a, height: l, $: c } = o(t),
        u = (c ? (0, r.LI)(n.width) : n.width) / a,
        d = (c ? (0, r.LI)(n.height) : n.height) / l;
    return (u && Number.isFinite(u)) || (u = 1), (d && Number.isFinite(d)) || (d = 1), { x: u, y: d };
}
let c = /^(38190|98365)$/.test(n.j) ? null : (0, r.Jx)(0);
function u(e) {
    let t = (0, i.zk)(e);
    return (0, i.Tc)() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : c;
}
function d(e, t, n, a) {
    var o;
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let c = e.getBoundingClientRect(),
        d = s(e),
        _ = (0, r.Jx)(1);
    t && (a ? (0, i.vq)(a) && (_ = l(a)) : (_ = l(e)));
    let p = (void 0 === (o = n) && (o = !1), a && (!o || a === (0, i.zk)(d)) && o) ? u(d) : (0, r.Jx)(0),
        m = (c.left + p.x) / _.x,
        f = (c.top + p.y) / _.y,
        g = c.width / _.x,
        h = c.height / _.y;
    if (d) {
        let e = (0, i.zk)(d),
            t = a && (0, i.vq)(a) ? (0, i.zk)(a) : a,
            n = e,
            r = (0, i._m)(n);
        for (; r && a && t !== n; ) {
            let e = l(r),
                t = r.getBoundingClientRect(),
                a = (0, i.L9)(r),
                o = t.left + (r.clientLeft + parseFloat(a.paddingLeft)) * e.x,
                s = t.top + (r.clientTop + parseFloat(a.paddingTop)) * e.y;
            (m *= e.x), (f *= e.y), (g *= e.x), (h *= e.y), (m += o), (f += s), (n = (0, i.zk)(r)), (r = (0, i._m)(n));
        }
    }
    return (0, r.B1)({ width: g, height: h, x: m, y: f });
}
function _(e, t) {
    let n = (0, i.CP)(e).scrollLeft;
    return t ? t.left + n : d((0, i.ep)(e)).left + n;
}
function p(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - _(e, n), y: n.top + t.scrollTop };
}
let m = new Set(["absolute", "fixed"]);
function f(e, t, n) {
    var a;
    let o;
    if ("viewport" === t)
        o = (function (e, t) {
            let n = (0, i.zk)(e),
                r = (0, i.ep)(e),
                a = n.visualViewport,
                o = r.clientWidth,
                s = r.clientHeight,
                l = 0,
                c = 0;
            if (a) {
                (o = a.width), (s = a.height);
                let e = (0, i.Tc)();
                (!e || (e && "fixed" === t)) && ((l = a.offsetLeft), (c = a.offsetTop));
            }
            let u = _(r);
            if (u <= 0) {
                let e = r.ownerDocument,
                    t = e.body,
                    n = getComputedStyle(t),
                    a = ("CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
                    i = Math.abs(r.clientWidth - t.clientWidth - a);
                i <= 25 && (o -= i);
            } else u <= 25 && (o += u);
            return { width: o, height: s, x: l, y: c };
        })(e, n);
    else if ("document" === t) {
        let t, n, s, l, c, u, d;
        (a = (0, i.ep)(e)),
            (t = (0, i.ep)(a)),
            (n = (0, i.CP)(a)),
            (s = a.ownerDocument.body),
            (l = (0, r.T9)(t.scrollWidth, t.clientWidth, s.scrollWidth, s.clientWidth)),
            (c = (0, r.T9)(t.scrollHeight, t.clientHeight, s.scrollHeight, s.clientHeight)),
            (u = -n.scrollLeft + _(a)),
            (d = -n.scrollTop),
            "rtl" === (0, i.L9)(s).direction && (u += (0, r.T9)(t.clientWidth, s.clientWidth) - l),
            (o = { width: l, height: c, x: u, y: d });
    } else if ((0, i.vq)(t)) {
        let e, a, s, c, u, _;
        (a = (e = d(t, !0, "fixed" === n)).top + t.clientTop),
            (s = e.left + t.clientLeft),
            (c = (0, i.sb)(t) ? l(t) : (0, r.Jx)(1)),
            (u = t.clientWidth * c.x),
            (_ = t.clientHeight * c.y),
            (o = { width: u, height: _, x: s * c.x, y: a * c.y });
    } else {
        let n = u(e);
        o = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return (0, r.B1)(o);
}
function g(e) {
    return "static" === (0, i.L9)(e).position;
}
function h(e, t) {
    if (!(0, i.sb)(e) || "fixed" === (0, i.L9)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (0, i.ep)(e) === n && (n = n.ownerDocument.body), n;
}
function b(e, t) {
    let n = (0, i.zk)(e);
    if ((0, i.Tf)(e)) return n;
    if (!(0, i.sb)(e)) {
        let t = (0, i.$4)(e);
        for (; t && !(0, i.eu)(t); ) {
            if ((0, i.vq)(t) && !g(t)) return t;
            t = (0, i.$4)(t);
        }
        return n;
    }
    let r = h(e, t);
    for (; r && (0, i.Lv)(r) && g(r); ) r = h(r, t);
    return r && (0, i.eu)(r) && g(r) && !(0, i.sQ)(r) ? n : r || (0, i.gJ)(e) || n;
}
let E = async function (e) {
        let t = this.getOffsetParent || b,
            n = this.getDimensions,
            a = await n(e.floating);
        return {
            reference: (function (e, t, n) {
                let a = (0, i.sb)(t),
                    o = (0, i.ep)(t),
                    s = "fixed" === n,
                    l = d(e, !0, s, t),
                    c = { scrollLeft: 0, scrollTop: 0 },
                    u = (0, r.Jx)(0);
                if (a || (!a && !s))
                    if ((("body" !== (0, i.mq)(t) || (0, i.ZU)(o)) && (c = (0, i.CP)(t)), a)) {
                        let e = d(t, !0, s, t);
                        (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                    } else o && (u.x = _(o));
                s && !a && o && (u.x = _(o));
                let m = !o || a || s ? (0, r.Jx)(0) : p(o, c);
                return {
                    x: l.left + c.scrollLeft - u.x - m.x,
                    y: l.top + c.scrollTop - u.y - m.y,
                    width: l.width,
                    height: l.height,
                };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: a.width, height: a.height },
        };
    },
    y = /^(38190|98365)$/.test(n.j)
        ? null
        : {
              convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
                  let { elements: t, rect: n, offsetParent: a, strategy: o } = e,
                      s = "fixed" === o,
                      c = (0, i.ep)(a),
                      u = !!t && (0, i.Tf)(t.floating);
                  if (a === c || (u && s)) return n;
                  let _ = { scrollLeft: 0, scrollTop: 0 },
                      m = (0, r.Jx)(1),
                      f = (0, r.Jx)(0),
                      g = (0, i.sb)(a);
                  if (
                      (g || (!g && !s)) &&
                      (("body" !== (0, i.mq)(a) || (0, i.ZU)(c)) && (_ = (0, i.CP)(a)), (0, i.sb)(a))
                  ) {
                      let e = d(a);
                      (m = l(a)), (f.x = e.x + a.clientLeft), (f.y = e.y + a.clientTop);
                  }
                  let h = !c || g || s ? (0, r.Jx)(0) : p(c, _);
                  return {
                      width: n.width * m.x,
                      height: n.height * m.y,
                      x: n.x * m.x - _.scrollLeft * m.x + f.x + h.x,
                      y: n.y * m.y - _.scrollTop * m.y + f.y + h.y,
                  };
              },
              getDocumentElement: i.ep,
              getClippingRect: function (e) {
                  let { element: t, boundary: n, rootBoundary: a, strategy: o } = e,
                      s = [
                          ...("clippingAncestors" === n
                              ? (0, i.Tf)(t)
                                  ? []
                                  : (function (e, t) {
                                        let n = t.get(e);
                                        if (n) return n;
                                        let r = (0, i.v9)(e, [], !1).filter(
                                                (e) => (0, i.vq)(e) && "body" !== (0, i.mq)(e),
                                            ),
                                            a = null,
                                            o = "fixed" === (0, i.L9)(e).position,
                                            s = o ? (0, i.$4)(e) : e;
                                        for (; (0, i.vq)(s) && !(0, i.eu)(s); ) {
                                            let t = (0, i.L9)(s),
                                                n = (0, i.sQ)(s);
                                            n || "fixed" !== t.position || (a = null),
                                                (
                                                    o
                                                        ? !n && !a
                                                        : (!n && "static" === t.position && !!a && m.has(a.position)) ||
                                                          ((0, i.ZU)(s) &&
                                                              !n &&
                                                              (function e(t, n) {
                                                                  let r = (0, i.$4)(t);
                                                                  return (
                                                                      !(r === n || !(0, i.vq)(r) || (0, i.eu)(r)) &&
                                                                      ("fixed" === (0, i.L9)(r).position || e(r, n))
                                                                  );
                                                              })(e, s))
                                                )
                                                    ? (r = r.filter((e) => e !== s))
                                                    : (a = t),
                                                (s = (0, i.$4)(s));
                                        }
                                        return t.set(e, r), r;
                                    })(t, this._c)
                              : [].concat(n)),
                          a,
                      ],
                      l = s[0],
                      c = s.reduce(
                          (e, n) => {
                              let a = f(t, n, o);
                              return (
                                  (e.top = (0, r.T9)(a.top, e.top)),
                                  (e.right = (0, r.jk)(a.right, e.right)),
                                  (e.bottom = (0, r.jk)(a.bottom, e.bottom)),
                                  (e.left = (0, r.T9)(a.left, e.left)),
                                  e
                              );
                          },
                          f(t, l, o),
                      );
                  return { width: c.right - c.left, height: c.bottom - c.top, x: c.left, y: c.top };
              },
              getOffsetParent: b,
              getElementRects: E,
              getClientRects: function (e) {
                  return Array.from(e.getClientRects());
              },
              getDimensions: function (e) {
                  let { width: t, height: n } = o(e);
                  return { width: t, height: n };
              },
              getScale: l,
              isElement: i.vq,
              isRTL: function (e) {
                  return "rtl" === (0, i.L9)(e).direction;
              },
          };
function v(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function S(e, t, n, a) {
    let o;
    void 0 === a && (a = {});
    let {
            ancestorScroll: l = !0,
            ancestorResize: c = !0,
            elementResize: u = "function" == typeof ResizeObserver,
            layoutShift: _ = "function" == typeof IntersectionObserver,
            animationFrame: p = !1,
        } = a,
        m = s(e),
        f = l || c ? [...(m ? (0, i.v9)(m) : []), ...(0, i.v9)(t)] : [];
    f.forEach((e) => {
        l && e.addEventListener("scroll", n, { passive: !0 }), c && e.addEventListener("resize", n);
    });
    let g =
            m && _
                ? (function (e, t) {
                      let n,
                          a = null,
                          o = (0, i.ep)(e);
                      function s() {
                          var e;
                          clearTimeout(n), null == (e = a) || e.disconnect(), (a = null);
                      }
                      return (
                          !(function i(l, c) {
                              void 0 === l && (l = !1), void 0 === c && (c = 1), s();
                              let u = e.getBoundingClientRect(),
                                  { left: d, top: _, width: p, height: m } = u;
                              if ((l || t(), !p || !m)) return;
                              let f = {
                                      rootMargin:
                                          -(0, r.RI)(_) +
                                          "px " +
                                          -(0, r.RI)(o.clientWidth - (d + p)) +
                                          "px " +
                                          -(0, r.RI)(o.clientHeight - (_ + m)) +
                                          "px " +
                                          -(0, r.RI)(d) +
                                          "px",
                                      threshold: (0, r.T9)(0, (0, r.jk)(1, c)) || 1,
                                  },
                                  g = !0;
                              function h(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== c) {
                                      if (!g) return i();
                                      r
                                          ? i(!1, r)
                                          : (n = setTimeout(() => {
                                                i(!1, 1e-7);
                                            }, 1e3));
                                  }
                                  1 !== r || v(u, e.getBoundingClientRect()) || i(), (g = !1);
                              }
                              try {
                                  a = new IntersectionObserver(h, { ...f, root: o.ownerDocument });
                              } catch (e) {
                                  a = new IntersectionObserver(h, f);
                              }
                              a.observe(e);
                          })(!0),
                          s
                      );
                  })(m, n)
                : null,
        h = -1,
        b = null;
    u &&
        ((b = new ResizeObserver((e) => {
            let [r] = e;
            r &&
                r.target === m &&
                b &&
                (b.unobserve(t),
                cancelAnimationFrame(h),
                (h = requestAnimationFrame(() => {
                    var e;
                    null == (e = b) || e.observe(t);
                }))),
                n();
        })),
        m && !p && b.observe(m),
        b.observe(t));
    let E = p ? d(e) : null;
    return (
        p &&
            (function t() {
                let r = d(e);
                E && !v(E, r) && n(), (E = r), (o = requestAnimationFrame(t));
            })(),
        n(),
        () => {
            var e;
            f.forEach((e) => {
                l && e.removeEventListener("scroll", n), c && e.removeEventListener("resize", n);
            }),
                null == g || g(),
                null == (e = b) || e.disconnect(),
                (b = null),
                p && cancelAnimationFrame(o);
        }
    );
}
let T = /^(38190|98365)$/.test(n.j) ? null : a.cY,
    C = /^(38190|98365)$/.test(n.j) ? null : a.RK,
    D = /^(38190|98365)$/.test(n.j) ? null : a.BN,
    O = /^(38190|98365)$/.test(n.j) ? null : a.UU,
    w = /^(38190|98365)$/.test(n.j) ? null : a.Ej,
    A = /^(38190|98365)$/.test(n.j) ? null : a.jD,
    R = /^(38190|98365)$/.test(n.j) ? null : a.ER,
    M = (e, t, n) => {
        let r = new Map(),
            i = { platform: y, ...n },
            o = { ...i.platform, _c: r };
        return (0, a.rD)(e, t, { ...i, platform: o });
    };
