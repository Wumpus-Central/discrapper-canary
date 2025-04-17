n.d(t, { Me: () => c });
var o = n(426517),
    r = n(21591);
function i(e) {
    return (0, r.kK)(e) ? e : e.contextElement;
}
function a(e) {
    let t = i(e);
    if (!(0, r.Re)(t)) return (0, o.ze)(1);
    let n = t.getBoundingClientRect(),
        {
            width: a,
            height: s,
            $: u
        } = (function (e) {
            let t = (0, r.Dx)(e),
                n = parseFloat(t.width) || 0,
                i = parseFloat(t.height) || 0,
                a = (0, r.Re)(e),
                s = a ? e.offsetWidth : n,
                u = a ? e.offsetHeight : i,
                l = (0, o.NM)(n) !== s || (0, o.NM)(i) !== u;
            return (
                l && ((n = s), (i = u)),
                {
                    width: n,
                    height: i,
                    $: l
                }
            );
        })(t),
        l = (u ? (0, o.NM)(n.width) : n.width) / a,
        c = (u ? (0, o.NM)(n.height) : n.height) / s;
    return (
        (l && Number.isFinite(l)) || (l = 1),
        (c && Number.isFinite(c)) || (c = 1),
        {
            x: l,
            y: c
        }
    );
}
let s = (0, o.ze)(0);
function u(e, t, n, u) {
    var l;
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let c = e.getBoundingClientRect(),
        d = i(e),
        p = (0, o.ze)(1);
    t && (u ? (0, r.kK)(u) && (p = a(u)) : (p = a(e)));
    let f = (void 0 === (l = n) && (l = !1), u && (!l || u === (0, r.Jj)(d)) && l)
            ? (function (e) {
                  let t = (0, r.Jj)(e);
                  return (0, r.Pf)() && t.visualViewport
                      ? {
                            x: t.visualViewport.offsetLeft,
                            y: t.visualViewport.offsetTop
                        }
                      : s;
              })(d)
            : (0, o.ze)(0),
        h = (c.left + f.x) / p.x,
        v = (c.top + f.y) / p.y,
        m = c.width / p.x,
        g = c.height / p.y;
    if (d) {
        let e = (0, r.Jj)(d),
            t = u && (0, r.kK)(u) ? (0, r.Jj)(u) : u,
            n = e,
            o = (0, r.wK)(n);
        for (; o && u && t !== n; ) {
            let e = a(o),
                t = o.getBoundingClientRect(),
                i = (0, r.Dx)(o),
                s = t.left + (o.clientLeft + parseFloat(i.paddingLeft)) * e.x,
                u = t.top + (o.clientTop + parseFloat(i.paddingTop)) * e.y;
            (h *= e.x), (v *= e.y), (m *= e.x), (g *= e.y), (h += s), (v += u), (n = (0, r.Jj)(o)), (o = (0, r.wK)(n));
        }
    }
    return (0, o.JB)({
        width: m,
        height: g,
        x: h,
        y: v
    });
}
function l(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function c(e, t, n, a) {
    let s;
    void 0 === a && (a = {});
    let { ancestorScroll: c = !0, ancestorResize: d = !0, elementResize: p = 'function' == typeof ResizeObserver, layoutShift: f = 'function' == typeof IntersectionObserver, animationFrame: h = !1 } = a,
        v = i(e),
        m = c || d ? [...(v ? (0, r.Kx)(v) : []), ...(0, r.Kx)(t)] : [];
    m.forEach((e) => {
        c && e.addEventListener('scroll', n, { passive: !0 }), d && e.addEventListener('resize', n);
    });
    let g =
            v && f
                ? (function (e, t) {
                      let n,
                          i = null,
                          a = (0, r.tF)(e);
                      function s() {
                          var e;
                          clearTimeout(n), null == (e = i) || e.disconnect(), (i = null);
                      }
                      return (
                          !(function r(u, c) {
                              void 0 === u && (u = !1), void 0 === c && (c = 1), s();
                              let d = e.getBoundingClientRect(),
                                  { left: p, top: f, width: h, height: v } = d;
                              if ((u || t(), !h || !v)) return;
                              let m = (0, o.GW)(f),
                                  g = (0, o.GW)(a.clientWidth - (p + h)),
                                  b = {
                                      rootMargin: -m + 'px ' + -g + 'px ' + -(0, o.GW)(a.clientHeight - (f + v)) + 'px ' + -(0, o.GW)(p) + 'px',
                                      threshold: (0, o.Fp)(0, (0, o.VV)(1, c)) || 1
                                  },
                                  y = !0;
                              function O(t) {
                                  let o = t[0].intersectionRatio;
                                  if (o !== c) {
                                      if (!y) return r();
                                      o
                                          ? r(!1, o)
                                          : (n = setTimeout(() => {
                                                r(!1, 1e-7);
                                            }, 1000));
                                  }
                                  1 !== o || l(d, e.getBoundingClientRect()) || r(), (y = !1);
                              }
                              try {
                                  i = new IntersectionObserver(O, {
                                      ...b,
                                      root: a.ownerDocument
                                  });
                              } catch (e) {
                                  i = new IntersectionObserver(O, b);
                              }
                              i.observe(e);
                          })(!0),
                          s
                      );
                  })(v, n)
                : null,
        b = -1,
        y = null;
    p &&
        ((y = new ResizeObserver((e) => {
            let [o] = e;
            o &&
                o.target === v &&
                y &&
                (y.unobserve(t),
                cancelAnimationFrame(b),
                (b = requestAnimationFrame(() => {
                    var e;
                    null == (e = y) || e.observe(t);
                }))),
                n();
        })),
        v && !h && y.observe(v),
        y.observe(t));
    let O = h ? u(e) : null;
    return (
        h &&
            (function t() {
                let o = u(e);
                O && !l(O, o) && n(), (O = o), (s = requestAnimationFrame(t));
            })(),
        n(),
        () => {
            var e;
            m.forEach((e) => {
                c && e.removeEventListener('scroll', n), d && e.removeEventListener('resize', n);
            }),
                null == g || g(),
                null == (e = y) || e.disconnect(),
                (y = null),
                h && cancelAnimationFrame(s);
        }
    );
}
