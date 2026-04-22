"use strict";
n.d(t, {
    BN: () => O,
    ER: () => b,
    Ej: () => v,
    RK: () => N,
    UU: () => R,
    cY: () => y,
    jD: () => C,
    ll: () => S,
    rD: () => D,
});
var r = n(56027),
    i = n(764647),
    s = n(84157);
function a(e) {
    let t = (0, s.L9)(e),
        n = parseFloat(t.width) || 0,
        i = parseFloat(t.height) || 0,
        a = (0, s.sb)(e),
        o = a ? e.offsetWidth : n,
        l = a ? e.offsetHeight : i,
        u = (0, r.LI)(n) !== o || (0, r.LI)(i) !== l;
    return u && ((n = o), (i = l)), { width: n, height: i, $: u };
}
function o(e) {
    return (0, s.vq)(e) ? e : e.contextElement;
}
function l(e) {
    let t = o(e);
    if (!(0, s.sb)(t)) return (0, r.Jx)(1);
    let n = t.getBoundingClientRect(),
        { width: i, height: l, $: u } = a(t),
        d = (u ? (0, r.LI)(n.width) : n.width) / i,
        c = (u ? (0, r.LI)(n.height) : n.height) / l;
    return (d && Number.isFinite(d)) || (d = 1), (c && Number.isFinite(c)) || (c = 1), { x: d, y: c };
}
let u = (0, r.Jx)(0);
function d(e) {
    let t = (0, s.zk)(e);
    return (0, s.Tc)() && t.visualViewport ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop } : u;
}
function c(e, t, n, i) {
    var a;
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let u = e.getBoundingClientRect(),
        c = o(e),
        _ = (0, r.Jx)(1);
    t && (i ? (0, s.vq)(i) && (_ = l(i)) : (_ = l(e)));
    let f = (void 0 === (a = n) && (a = !1), i && (!a || i === (0, s.zk)(c)) && a) ? d(c) : (0, r.Jx)(0),
        E = (u.left + f.x) / _.x,
        h = (u.top + f.y) / _.y,
        p = u.width / _.x,
        m = u.height / _.y;
    if (c) {
        let e = (0, s.zk)(c),
            t = i && (0, s.vq)(i) ? (0, s.zk)(i) : i,
            n = e,
            r = (0, s._m)(n);
        for (; r && i && t !== n; ) {
            let e = l(r),
                t = r.getBoundingClientRect(),
                i = (0, s.L9)(r),
                a = t.left + (r.clientLeft + parseFloat(i.paddingLeft)) * e.x,
                o = t.top + (r.clientTop + parseFloat(i.paddingTop)) * e.y;
            (E *= e.x), (h *= e.y), (p *= e.x), (m *= e.y), (E += a), (h += o), (n = (0, s.zk)(r)), (r = (0, s._m)(n));
        }
    }
    return (0, r.B1)({ width: p, height: m, x: E, y: h });
}
function _(e, t) {
    let n = (0, s.CP)(e).scrollLeft;
    return t ? t.left + n : c((0, s.ep)(e)).left + n;
}
function f(e, t) {
    let n = e.getBoundingClientRect();
    return { x: n.left + t.scrollLeft - _(e, n), y: n.top + t.scrollTop };
}
let E = new Set(["absolute", "fixed"]);
function h(e, t, n) {
    var i;
    let a;
    if ("viewport" === t)
        a = (function (e, t) {
            let n = (0, s.zk)(e),
                r = (0, s.ep)(e),
                i = n.visualViewport,
                a = r.clientWidth,
                o = r.clientHeight,
                l = 0,
                u = 0;
            if (i) {
                (a = i.width), (o = i.height);
                let e = (0, s.Tc)();
                (!e || (e && "fixed" === t)) && ((l = i.offsetLeft), (u = i.offsetTop));
            }
            let d = _(r);
            if (d <= 0) {
                let e = r.ownerDocument,
                    t = e.body,
                    n = getComputedStyle(t),
                    i = ("CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight)) || 0,
                    s = Math.abs(r.clientWidth - t.clientWidth - i);
                s <= 25 && (a -= s);
            } else d <= 25 && (a += d);
            return { width: a, height: o, x: l, y: u };
        })(e, n);
    else if ("document" === t) {
        let t, n, o, l, u, d, c;
        (i = (0, s.ep)(e)),
            (t = (0, s.ep)(i)),
            (n = (0, s.CP)(i)),
            (o = i.ownerDocument.body),
            (l = (0, r.T9)(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth)),
            (u = (0, r.T9)(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight)),
            (d = -n.scrollLeft + _(i)),
            (c = -n.scrollTop),
            "rtl" === (0, s.L9)(o).direction && (d += (0, r.T9)(t.clientWidth, o.clientWidth) - l),
            (a = { width: l, height: u, x: d, y: c });
    } else if ((0, s.vq)(t)) {
        let e, i, o, u, d, _;
        (i = (e = c(t, !0, "fixed" === n)).top + t.clientTop),
            (o = e.left + t.clientLeft),
            (u = (0, s.sb)(t) ? l(t) : (0, r.Jx)(1)),
            (d = t.clientWidth * u.x),
            (_ = t.clientHeight * u.y),
            (a = { width: d, height: _, x: o * u.x, y: i * u.y });
    } else {
        let n = d(e);
        a = { x: t.x - n.x, y: t.y - n.y, width: t.width, height: t.height };
    }
    return (0, r.B1)(a);
}
function p(e) {
    return "static" === (0, s.L9)(e).position;
}
function m(e, t) {
    if (!(0, s.sb)(e) || "fixed" === (0, s.L9)(e).position) return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return (0, s.ep)(e) === n && (n = n.ownerDocument.body), n;
}
function g(e, t) {
    let n = (0, s.zk)(e);
    if ((0, s.Tf)(e)) return n;
    if (!(0, s.sb)(e)) {
        let t = (0, s.$4)(e);
        for (; t && !(0, s.eu)(t); ) {
            if ((0, s.vq)(t) && !p(t)) return t;
            t = (0, s.$4)(t);
        }
        return n;
    }
    let r = m(e, t);
    for (; r && (0, s.Lv)(r) && p(r); ) r = m(r, t);
    return r && (0, s.eu)(r) && p(r) && !(0, s.sQ)(r) ? n : r || (0, s.gJ)(e) || n;
}
let A = async function (e) {
        let t = this.getOffsetParent || g,
            n = this.getDimensions,
            i = await n(e.floating);
        return {
            reference: (function (e, t, n) {
                let i = (0, s.sb)(t),
                    a = (0, s.ep)(t),
                    o = "fixed" === n,
                    l = c(e, !0, o, t),
                    u = { scrollLeft: 0, scrollTop: 0 },
                    d = (0, r.Jx)(0);
                if (i || (!i && !o))
                    if ((("body" !== (0, s.mq)(t) || (0, s.ZU)(a)) && (u = (0, s.CP)(t)), i)) {
                        let e = c(t, !0, o, t);
                        (d.x = e.x + t.clientLeft), (d.y = e.y + t.clientTop);
                    } else a && (d.x = _(a));
                o && !i && a && (d.x = _(a));
                let E = !a || i || o ? (0, r.Jx)(0) : f(a, u);
                return {
                    x: l.left + u.scrollLeft - d.x - E.x,
                    y: l.top + u.scrollTop - d.y - E.y,
                    width: l.width,
                    height: l.height,
                };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: i.width, height: i.height },
        };
    },
    I = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: i, strategy: a } = e,
                o = "fixed" === a,
                u = (0, s.ep)(i),
                d = !!t && (0, s.Tf)(t.floating);
            if (i === u || (d && o)) return n;
            let _ = { scrollLeft: 0, scrollTop: 0 },
                E = (0, r.Jx)(1),
                h = (0, r.Jx)(0),
                p = (0, s.sb)(i);
            if ((p || (!p && !o)) && (("body" !== (0, s.mq)(i) || (0, s.ZU)(u)) && (_ = (0, s.CP)(i)), (0, s.sb)(i))) {
                let e = c(i);
                (E = l(i)), (h.x = e.x + i.clientLeft), (h.y = e.y + i.clientTop);
            }
            let m = !u || p || o ? (0, r.Jx)(0) : f(u, _);
            return {
                width: n.width * E.x,
                height: n.height * E.y,
                x: n.x * E.x - _.scrollLeft * E.x + h.x + m.x,
                y: n.y * E.y - _.scrollTop * E.y + h.y + m.y,
            };
        },
        getDocumentElement: s.ep,
        getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: i, strategy: a } = e,
                o = [
                    ...("clippingAncestors" === n
                        ? (0, s.Tf)(t)
                            ? []
                            : (function (e, t) {
                                  let n = t.get(e);
                                  if (n) return n;
                                  let r = (0, s.v9)(e, [], !1).filter((e) => (0, s.vq)(e) && "body" !== (0, s.mq)(e)),
                                      i = null,
                                      a = "fixed" === (0, s.L9)(e).position,
                                      o = a ? (0, s.$4)(e) : e;
                                  for (; (0, s.vq)(o) && !(0, s.eu)(o); ) {
                                      let t = (0, s.L9)(o),
                                          n = (0, s.sQ)(o);
                                      n || "fixed" !== t.position || (i = null),
                                          (
                                              a
                                                  ? !n && !i
                                                  : (!n && "static" === t.position && !!i && E.has(i.position)) ||
                                                    ((0, s.ZU)(o) &&
                                                        !n &&
                                                        (function e(t, n) {
                                                            let r = (0, s.$4)(t);
                                                            return (
                                                                !(r === n || !(0, s.vq)(r) || (0, s.eu)(r)) &&
                                                                ("fixed" === (0, s.L9)(r).position || e(r, n))
                                                            );
                                                        })(e, o))
                                          )
                                              ? (r = r.filter((e) => e !== o))
                                              : (i = t),
                                          (o = (0, s.$4)(o));
                                  }
                                  return t.set(e, r), r;
                              })(t, this._c)
                        : [].concat(n)),
                    i,
                ],
                l = o[0],
                u = o.reduce(
                    (e, n) => {
                        let i = h(t, n, a);
                        return (
                            (e.top = (0, r.T9)(i.top, e.top)),
                            (e.right = (0, r.jk)(i.right, e.right)),
                            (e.bottom = (0, r.jk)(i.bottom, e.bottom)),
                            (e.left = (0, r.T9)(i.left, e.left)),
                            e
                        );
                    },
                    h(t, l, a),
                );
            return { width: u.right - u.left, height: u.bottom - u.top, x: u.left, y: u.top };
        },
        getOffsetParent: g,
        getElementRects: A,
        getClientRects: function (e) {
            return Array.from(e.getClientRects());
        },
        getDimensions: function (e) {
            let { width: t, height: n } = a(e);
            return { width: t, height: n };
        },
        getScale: l,
        isElement: s.vq,
        isRTL: function (e) {
            return "rtl" === (0, s.L9)(e).direction;
        },
    };
function T(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function S(e, t, n, i) {
    let a;
    void 0 === i && (i = {});
    let {
            ancestorScroll: l = !0,
            ancestorResize: u = !0,
            elementResize: d = "function" == typeof ResizeObserver,
            layoutShift: _ = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
        } = i,
        E = o(e),
        h = l || u ? [...(E ? (0, s.v9)(E) : []), ...(0, s.v9)(t)] : [];
    h.forEach((e) => {
        l && e.addEventListener("scroll", n, { passive: !0 }), u && e.addEventListener("resize", n);
    });
    let p =
            E && _
                ? (function (e, t) {
                      let n,
                          i = null,
                          a = (0, s.ep)(e);
                      function o() {
                          var e;
                          clearTimeout(n), null == (e = i) || e.disconnect(), (i = null);
                      }
                      return (
                          !(function s(l, u) {
                              void 0 === l && (l = !1), void 0 === u && (u = 1), o();
                              let d = e.getBoundingClientRect(),
                                  { left: c, top: _, width: f, height: E } = d;
                              if ((l || t(), !f || !E)) return;
                              let h = {
                                      rootMargin:
                                          -(0, r.RI)(_) +
                                          "px " +
                                          -(0, r.RI)(a.clientWidth - (c + f)) +
                                          "px " +
                                          -(0, r.RI)(a.clientHeight - (_ + E)) +
                                          "px " +
                                          -(0, r.RI)(c) +
                                          "px",
                                      threshold: (0, r.T9)(0, (0, r.jk)(1, u)) || 1,
                                  },
                                  p = !0;
                              function m(t) {
                                  let r = t[0].intersectionRatio;
                                  if (r !== u) {
                                      if (!p) return s();
                                      r
                                          ? s(!1, r)
                                          : (n = setTimeout(() => {
                                                s(!1, 1e-7);
                                            }, 1e3));
                                  }
                                  1 !== r || T(d, e.getBoundingClientRect()) || s(), (p = !1);
                              }
                              try {
                                  i = new IntersectionObserver(m, { ...h, root: a.ownerDocument });
                              } catch (e) {
                                  i = new IntersectionObserver(m, h);
                              }
                              i.observe(e);
                          })(!0),
                          o
                      );
                  })(E, n)
                : null,
        m = -1,
        g = null;
    d &&
        ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
                r.target === E &&
                g &&
                (g.unobserve(t),
                cancelAnimationFrame(m),
                (m = requestAnimationFrame(() => {
                    var e;
                    null == (e = g) || e.observe(t);
                }))),
                n();
        })),
        E && !f && g.observe(E),
        g.observe(t));
    let A = f ? c(e) : null;
    return (
        f &&
            (function t() {
                let r = c(e);
                A && !T(A, r) && n(), (A = r), (a = requestAnimationFrame(t));
            })(),
        n(),
        () => {
            var e;
            h.forEach((e) => {
                l && e.removeEventListener("scroll", n), u && e.removeEventListener("resize", n);
            }),
                null == p || p(),
                null == (e = g) || e.disconnect(),
                (g = null),
                f && cancelAnimationFrame(a);
        }
    );
}
let y = i.cY,
    N = i.RK,
    O = i.BN,
    R = i.UU,
    v = i.Ej,
    C = i.jD,
    b = i.ER,
    D = (e, t, n) => {
        let r = new Map(),
            s = { platform: I, ...n },
            a = { ...s.platform, _c: r };
        return (0, i.rD)(e, t, { ...s, platform: a });
    };
