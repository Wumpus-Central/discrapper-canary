"use strict";
r.r(t), r.d(t, { Manager: () => d, usePopper: () => eT, Reference: () => eM, Popper: () => eD });
var n,
    a,
    s,
    i,
    o,
    l = r(64700),
    u = l.createContext(),
    c = l.createContext();
function d(e) {
    var t = e.children,
        r = l.useState(null),
        n = r[0],
        a = r[1],
        s = l.useRef(!1);
    l.useEffect(function () {
        return function () {
            s.current = !0;
        };
    }, []);
    var i = l.useCallback(function (e) {
        s.current || a(e);
    }, []);
    return l.createElement(u.Provider, { value: n }, l.createElement(c.Provider, { value: i }, t));
}
var f = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    p = function (e) {
        if ("function" == typeof e) {
            for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            return e.apply(void 0, r);
        }
    },
    h = function (e, t) {
        if ("function" == typeof e) return p(e, t);
        null != e && (e.current = t);
    },
    m = function (e) {
        return e.reduce(function (e, t) {
            var r = t[0],
                n = t[1];
            return (e[r] = n), e;
        }, {});
    },
    _ = "u" > typeof window && window.document && window.document.createElement ? l.useLayoutEffect : l.useEffect,
    g = r(340287);
function v(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
    }
    return e;
}
function b(e) {
    var t = v(e).Element;
    return e instanceof t || e instanceof Element;
}
function y(e) {
    var t = v(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function E(e) {
    if ("u" < typeof ShadowRoot) return !1;
    var t = v(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
var S = Math.max,
    T = Math.min,
    x = Math.round;
function w() {
    var e = navigator.userAgentData;
    return null != e && e.brands && Array.isArray(e.brands)
        ? e.brands
              .map(function (e) {
                  return e.brand + "/" + e.version;
              })
              .join(" ")
        : navigator.userAgent;
}
function C() {
    return !/^((?!chrome|android).)*safari/i.test(w());
}
function D(e, t, r) {
    void 0 === t && (t = !1), void 0 === r && (r = !1);
    var n = e.getBoundingClientRect(),
        a = 1,
        s = 1;
    t &&
        y(e) &&
        ((a = (e.offsetWidth > 0 && x(n.width) / e.offsetWidth) || 1),
        (s = (e.offsetHeight > 0 && x(n.height) / e.offsetHeight) || 1));
    var i = (b(e) ? v(e) : window).visualViewport,
        o = !C() && r,
        l = (n.left + (o && i ? i.offsetLeft : 0)) / a,
        u = (n.top + (o && i ? i.offsetTop : 0)) / s,
        c = n.width / a,
        d = n.height / s;
    return { width: c, height: d, top: u, right: l + c, bottom: u + d, left: l, x: l, y: u };
}
function O(e) {
    var t = v(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function A(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
}
function M(e) {
    return ((b(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function R(e) {
    return D(M(e)).left + O(e).scrollLeft;
}
function k(e) {
    return v(e).getComputedStyle(e);
}
function N(e) {
    var t = k(e),
        r = t.overflow,
        n = t.overflowX,
        a = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(r + a + n);
}
function L(e) {
    var t = D(e),
        r = e.offsetWidth,
        n = e.offsetHeight;
    return (
        1 >= Math.abs(t.width - r) && (r = t.width),
        1 >= Math.abs(t.height - n) && (n = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
    );
}
function I(e) {
    return "html" === A(e) ? e : e.assignedSlot || e.parentNode || (E(e) ? e.host : null) || M(e);
}
function P(e, t) {
    void 0 === t && (t = []);
    var r,
        n = (function e(t) {
            return ["html", "body", "#document"].indexOf(A(t)) >= 0 ? t.ownerDocument.body : y(t) && N(t) ? t : e(I(t));
        })(e),
        a = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
        s = v(n),
        i = a ? [s].concat(s.visualViewport || [], N(n) ? n : []) : n,
        o = t.concat(i);
    return a ? o : o.concat(P(I(i)));
}
function F(e) {
    return y(e) && "fixed" !== k(e).position ? e.offsetParent : null;
}
function B(e) {
    for (var t = v(e), r = F(e); r && ["table", "td", "th"].indexOf(A(r)) >= 0 && "static" === k(r).position; )
        r = F(r);
    return r && ("html" === A(r) || ("body" === A(r) && "static" === k(r).position))
        ? t
        : r ||
              (function (e) {
                  var t = /firefox/i.test(w());
                  if (/Trident/i.test(w()) && y(e) && "fixed" === k(e).position) return null;
                  var r = I(e);
                  for (E(r) && (r = r.host); y(r) && 0 > ["html", "body"].indexOf(A(r)); ) {
                      var n = k(r);
                      if (
                          "none" !== n.transform ||
                          "none" !== n.perspective ||
                          "paint" === n.contain ||
                          -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                          (t && "filter" === n.willChange) ||
                          (t && n.filter && "none" !== n.filter)
                      )
                          return r;
                      r = r.parentNode;
                  }
                  return null;
              })(e) ||
              t;
}
var Y = "bottom",
    U = "right",
    j = "left",
    V = "auto",
    H = ["top", Y, U, j],
    G = "start",
    z = "viewport",
    W = "popper",
    q = H.reduce(function (e, t) {
        return e.concat([t + "-" + G, t + "-end"]);
    }, []),
    $ = [].concat(H, [V]).reduce(function (e, t) {
        return e.concat([t, t + "-" + G, t + "-end"]);
    }, []),
    K = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
    Q = { placement: "bottom", modifiers: [], strategy: "absolute" };
function X() {
    for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
    });
}
var Z = { passive: !0 };
function J(e) {
    return e.split("-")[0];
}
function ee(e) {
    return e.split("-")[1];
}
function et(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function er(e) {
    var t,
        r = e.reference,
        n = e.element,
        a = e.placement,
        s = a ? J(a) : null,
        i = a ? ee(a) : null,
        o = r.x + r.width / 2 - n.width / 2,
        l = r.y + r.height / 2 - n.height / 2;
    switch (s) {
        case "top":
            t = { x: o, y: r.y - n.height };
            break;
        case Y:
            t = { x: o, y: r.y + r.height };
            break;
        case U:
            t = { x: r.x + r.width, y: l };
            break;
        case j:
            t = { x: r.x - n.width, y: l };
            break;
        default:
            t = { x: r.x, y: r.y };
    }
    var u = s ? et(s) : null;
    if (null != u) {
        var c = "y" === u ? "height" : "width";
        switch (i) {
            case G:
                t[u] = t[u] - (r[c] / 2 - n[c] / 2);
                break;
            case "end":
                t[u] = t[u] + (r[c] / 2 - n[c] / 2);
        }
    }
    return t;
}
var en = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function ea(e) {
    var t,
        r,
        n,
        a,
        s,
        i,
        o,
        l = e.popper,
        u = e.popperRect,
        c = e.placement,
        d = e.variation,
        f = e.offsets,
        p = e.position,
        h = e.gpuAcceleration,
        m = e.adaptive,
        _ = e.roundOffsets,
        g = e.isFixed,
        b = f.x,
        y = void 0 === b ? 0 : b,
        E = f.y,
        S = void 0 === E ? 0 : E,
        T = "function" == typeof _ ? _({ x: y, y: S }) : { x: y, y: S };
    (y = T.x), (S = T.y);
    var w = f.hasOwnProperty("x"),
        C = f.hasOwnProperty("y"),
        D = j,
        O = "top",
        A = window;
    if (m) {
        var R = B(l),
            N = "clientHeight",
            L = "clientWidth";
        R === v(l) &&
            "static" !== k((R = M(l))).position &&
            "absolute" === p &&
            ((N = "scrollHeight"), (L = "scrollWidth")),
            ("top" === c || ((c === j || c === U) && "end" === d)) &&
                ((O = Y),
                (S -= (g && R === A && A.visualViewport ? A.visualViewport.height : R[N]) - u.height),
                (S *= h ? 1 : -1)),
            (c === j || (("top" === c || c === Y) && "end" === d)) &&
                ((D = U),
                (y -= (g && R === A && A.visualViewport ? A.visualViewport.width : R[L]) - u.width),
                (y *= h ? 1 : -1));
    }
    var I = Object.assign({ position: p }, m && en),
        P =
            !0 === _
                ? ((t = { x: y, y: S }),
                  (r = v(l)),
                  (n = t.x),
                  (a = t.y),
                  { x: x(n * (s = r.devicePixelRatio || 1)) / s || 0, y: x(a * s) / s || 0 })
                : { x: y, y: S };
    return ((y = P.x), (S = P.y), h)
        ? Object.assign(
              {},
              I,
              (((o = {})[O] = C ? "0" : ""),
              (o[D] = w ? "0" : ""),
              (o.transform =
                  1 >= (A.devicePixelRatio || 1)
                      ? "translate(" + y + "px, " + S + "px)"
                      : "translate3d(" + y + "px, " + S + "px, 0)"),
              o),
          )
        : Object.assign({}, I, (((i = {})[O] = C ? S + "px" : ""), (i[D] = w ? y + "px" : ""), (i.transform = ""), i));
}
var es = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ei(e) {
    return e.replace(/left|right|bottom|top/g, function (e) {
        return es[e];
    });
}
var eo = { start: "end", end: "start" };
function el(e) {
    return e.replace(/start|end/g, function (e) {
        return eo[e];
    });
}
function eu(e, t) {
    var r = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (r && E(r)) {
        var n = t;
        do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
        } while (n);
    }
    return !1;
}
function ec(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function ed(e, t, r) {
    var n, a, s, i, o, l, u, c, d, f;
    return t === z
        ? ec(
              (function (e, t) {
                  var r = v(e),
                      n = M(e),
                      a = r.visualViewport,
                      s = n.clientWidth,
                      i = n.clientHeight,
                      o = 0,
                      l = 0;
                  if (a) {
                      (s = a.width), (i = a.height);
                      var u = C();
                      (u || (!u && "fixed" === t)) && ((o = a.offsetLeft), (l = a.offsetTop));
                  }
                  return { width: s, height: i, x: o + R(e), y: l };
              })(e, r),
          )
        : b(t)
          ? (((n = D(t, !1, "fixed" === r)).top = n.top + t.clientTop),
            (n.left = n.left + t.clientLeft),
            (n.bottom = n.top + t.clientHeight),
            (n.right = n.left + t.clientWidth),
            (n.width = t.clientWidth),
            (n.height = t.clientHeight),
            (n.x = n.left),
            (n.y = n.top),
            n)
          : ec(
                ((a = M(e)),
                (i = M(a)),
                (o = O(a)),
                (l = null == (s = a.ownerDocument) ? void 0 : s.body),
                (u = S(i.scrollWidth, i.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0)),
                (c = S(i.scrollHeight, i.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0)),
                (d = -o.scrollLeft + R(a)),
                (f = -o.scrollTop),
                "rtl" === k(l || i).direction && (d += S(i.clientWidth, l ? l.clientWidth : 0) - u),
                { width: u, height: c, x: d, y: f }),
            );
}
function ef() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
}
function ep(e) {
    return Object.assign({}, ef(), e);
}
function eh(e, t) {
    return t.reduce(function (t, r) {
        return (t[r] = e), t;
    }, {});
}
function em(e, t) {
    void 0 === t && (t = {});
    var r,
        n,
        a,
        s,
        i,
        o,
        l,
        u,
        c = t,
        d = c.placement,
        f = void 0 === d ? e.placement : d,
        p = c.strategy,
        h = void 0 === p ? e.strategy : p,
        m = c.boundary,
        _ = c.rootBoundary,
        g = c.elementContext,
        v = void 0 === g ? W : g,
        E = c.altBoundary,
        x = c.padding,
        w = void 0 === x ? 0 : x,
        C = ep("number" != typeof w ? w : eh(w, H)),
        O = e.rects.popper,
        R = e.elements[void 0 !== E && E ? (v === W ? "reference" : W) : v],
        N =
            ((r = b(R) ? R : R.contextElement || M(e.elements.popper)),
            (n = void 0 === m ? "clippingParents" : m),
            (a = void 0 === _ ? z : _),
            (l = (o = [].concat(
                "clippingParents" === n
                    ? ((s = P(I(r))),
                      !b((i = ["absolute", "fixed"].indexOf(k(r).position) >= 0 && y(r) ? B(r) : r))
                          ? []
                          : s.filter(function (e) {
                                return b(e) && eu(e, i) && "body" !== A(e);
                            }))
                    : [].concat(n),
                [a],
            ))[0]),
            ((u = o.reduce(
                function (e, t) {
                    var n = ed(r, t, h);
                    return (
                        (e.top = S(n.top, e.top)),
                        (e.right = T(n.right, e.right)),
                        (e.bottom = T(n.bottom, e.bottom)),
                        (e.left = S(n.left, e.left)),
                        e
                    );
                },
                ed(r, l, h),
            )).width = u.right - u.left),
            (u.height = u.bottom - u.top),
            (u.x = u.left),
            (u.y = u.top),
            u),
        L = D(e.elements.reference),
        F = er({ reference: L, element: O, strategy: "absolute", placement: f }),
        j = ec(Object.assign({}, O, F)),
        V = v === W ? j : L,
        G = {
            top: N.top - V.top + C.top,
            bottom: V.bottom - N.bottom + C.bottom,
            left: N.left - V.left + C.left,
            right: V.right - N.right + C.right,
        },
        q = e.modifiersData.offset;
    if (v === W && q) {
        var $ = q[f];
        Object.keys(G).forEach(function (e) {
            var t = [U, Y].indexOf(e) >= 0 ? 1 : -1,
                r = ["top", Y].indexOf(e) >= 0 ? "y" : "x";
            G[e] += $[r] * t;
        });
    }
    return G;
}
function e_(e, t, r) {
    return S(e, T(t, r));
}
function eg(e, t, r) {
    return (
        void 0 === r && (r = { x: 0, y: 0 }),
        {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
        }
    );
}
function ev(e) {
    return ["top", U, Y, j].some(function (t) {
        return e[t] >= 0;
    });
}
var eb =
        ((s =
            void 0 ===
            (a = (n = {
                defaultModifiers: [
                    {
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function () {},
                        effect: function (e) {
                            var t = e.state,
                                r = e.instance,
                                n = e.options,
                                a = n.scroll,
                                s = void 0 === a || a,
                                i = n.resize,
                                o = void 0 === i || i,
                                l = v(t.elements.popper),
                                u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return (
                                s &&
                                    u.forEach(function (e) {
                                        e.addEventListener("scroll", r.update, Z);
                                    }),
                                o && l.addEventListener("resize", r.update, Z),
                                function () {
                                    s &&
                                        u.forEach(function (e) {
                                            e.removeEventListener("scroll", r.update, Z);
                                        }),
                                        o && l.removeEventListener("resize", r.update, Z);
                                }
                            );
                        },
                        data: {},
                    },
                    {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function (e) {
                            var t = e.state,
                                r = e.name;
                            t.modifiersData[r] = er({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement,
                            });
                        },
                        data: {},
                    },
                    {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function (e) {
                            var t = e.state,
                                r = e.options,
                                n = r.gpuAcceleration,
                                a = r.adaptive,
                                s = r.roundOffsets,
                                i = void 0 === s || s,
                                o = {
                                    placement: J(t.placement),
                                    variation: ee(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === n || n,
                                    isFixed: "fixed" === t.options.strategy,
                                };
                            null != t.modifiersData.popperOffsets &&
                                (t.styles.popper = Object.assign(
                                    {},
                                    t.styles.popper,
                                    ea(
                                        Object.assign({}, o, {
                                            offsets: t.modifiersData.popperOffsets,
                                            position: t.options.strategy,
                                            adaptive: void 0 === a || a,
                                            roundOffsets: i,
                                        }),
                                    ),
                                )),
                                null != t.modifiersData.arrow &&
                                    (t.styles.arrow = Object.assign(
                                        {},
                                        t.styles.arrow,
                                        ea(
                                            Object.assign({}, o, {
                                                offsets: t.modifiersData.arrow,
                                                position: "absolute",
                                                adaptive: !1,
                                                roundOffsets: i,
                                            }),
                                        ),
                                    )),
                                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                    "data-popper-placement": t.placement,
                                }));
                        },
                        data: {},
                    },
                    {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function (e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach(function (e) {
                                var r = t.styles[e] || {},
                                    n = t.attributes[e] || {},
                                    a = t.elements[e];
                                y(a) &&
                                    A(a) &&
                                    (Object.assign(a.style, r),
                                    Object.keys(n).forEach(function (e) {
                                        var t = n[e];
                                        !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? "" : t);
                                    }));
                            });
                        },
                        effect: function (e) {
                            var t = e.state,
                                r = {
                                    popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
                                    arrow: { position: "absolute" },
                                    reference: {},
                                };
                            return (
                                Object.assign(t.elements.popper.style, r.popper),
                                (t.styles = r),
                                t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
                                function () {
                                    Object.keys(t.elements).forEach(function (e) {
                                        var n = t.elements[e],
                                            a = t.attributes[e] || {},
                                            s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce(
                                                function (e, t) {
                                                    return (e[t] = ""), e;
                                                },
                                                {},
                                            );
                                        y(n) &&
                                            A(n) &&
                                            (Object.assign(n.style, s),
                                            Object.keys(a).forEach(function (e) {
                                                n.removeAttribute(e);
                                            }));
                                    });
                                }
                            );
                        },
                        requires: ["computeStyles"],
                    },
                    {
                        name: "offset",
                        enabled: !0,
                        phase: "main",
                        requires: ["popperOffsets"],
                        fn: function (e) {
                            var t = e.state,
                                r = e.options,
                                n = e.name,
                                a = r.offset,
                                s = void 0 === a ? [0, 0] : a,
                                i = $.reduce(function (e, r) {
                                    var n, a, i, o, l, u;
                                    return (
                                        (e[r] =
                                            ((n = t.rects),
                                            (i = [j, "top"].indexOf((a = J(r))) >= 0 ? -1 : 1),
                                            (l = (o =
                                                "function" == typeof s
                                                    ? s(Object.assign({}, n, { placement: r }))
                                                    : s)[0]),
                                            (u = o[1]),
                                            (l = l || 0),
                                            (u = (u || 0) * i),
                                            [j, U].indexOf(a) >= 0 ? { x: u, y: l } : { x: l, y: u })),
                                        e
                                    );
                                }, {}),
                                o = i[t.placement],
                                l = o.x,
                                u = o.y;
                            null != t.modifiersData.popperOffsets &&
                                ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += u)),
                                (t.modifiersData[n] = i);
                        },
                    },
                    {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function (e) {
                            var t = e.state,
                                r = e.options,
                                n = e.name;
                            if (!t.modifiersData[n]._skip) {
                                for (
                                    var a = r.mainAxis,
                                        s = void 0 === a || a,
                                        i = r.altAxis,
                                        o = void 0 === i || i,
                                        l = r.fallbackPlacements,
                                        u = r.padding,
                                        c = r.boundary,
                                        d = r.rootBoundary,
                                        f = r.altBoundary,
                                        p = r.flipVariations,
                                        h = void 0 === p || p,
                                        m = r.allowedAutoPlacements,
                                        _ = t.options.placement,
                                        g = J(_) === _,
                                        v =
                                            l ||
                                            (g || !h
                                                ? [ei(_)]
                                                : (function (e) {
                                                      if (J(e) === V) return [];
                                                      var t = ei(e);
                                                      return [el(e), t, el(t)];
                                                  })(_)),
                                        b = [_].concat(v).reduce(function (e, r) {
                                            var n, a, s, i, o, l, f, p, _, g, v, b;
                                            return e.concat(
                                                J(r) === V
                                                    ? ((a = (n = {
                                                          placement: r,
                                                          boundary: c,
                                                          rootBoundary: d,
                                                          padding: u,
                                                          flipVariations: h,
                                                          allowedAutoPlacements: m,
                                                      }).placement),
                                                      (s = n.boundary),
                                                      (i = n.rootBoundary),
                                                      (o = n.padding),
                                                      (l = n.flipVariations),
                                                      (p = void 0 === (f = n.allowedAutoPlacements) ? $ : f),
                                                      0 ===
                                                          (v = (g = (_ = ee(a))
                                                              ? l
                                                                  ? q
                                                                  : q.filter(function (e) {
                                                                        return ee(e) === _;
                                                                    })
                                                              : H).filter(function (e) {
                                                              return p.indexOf(e) >= 0;
                                                          })).length && (v = g),
                                                      Object.keys(
                                                          (b = v.reduce(function (e, r) {
                                                              return (
                                                                  (e[r] = em(t, {
                                                                      placement: r,
                                                                      boundary: s,
                                                                      rootBoundary: i,
                                                                      padding: o,
                                                                  })[J(r)]),
                                                                  e
                                                              );
                                                          }, {})),
                                                      ).sort(function (e, t) {
                                                          return b[e] - b[t];
                                                      }))
                                                    : r,
                                            );
                                        }, []),
                                        y = t.rects.reference,
                                        E = t.rects.popper,
                                        S = new Map(),
                                        T = !0,
                                        x = b[0],
                                        w = 0;
                                    w < b.length;
                                    w++
                                ) {
                                    var C = b[w],
                                        D = J(C),
                                        O = ee(C) === G,
                                        A = ["top", Y].indexOf(D) >= 0,
                                        M = A ? "width" : "height",
                                        R = em(t, {
                                            placement: C,
                                            boundary: c,
                                            rootBoundary: d,
                                            altBoundary: f,
                                            padding: u,
                                        }),
                                        k = A ? (O ? U : j) : O ? Y : "top";
                                    y[M] > E[M] && (k = ei(k));
                                    var N = ei(k),
                                        L = [];
                                    if (
                                        (s && L.push(R[D] <= 0),
                                        o && L.push(R[k] <= 0, R[N] <= 0),
                                        L.every(function (e) {
                                            return e;
                                        }))
                                    ) {
                                        (x = C), (T = !1);
                                        break;
                                    }
                                    S.set(C, L);
                                }
                                if (T)
                                    for (
                                        var I = h ? 3 : 1,
                                            P = function (e) {
                                                var t = b.find(function (t) {
                                                    var r = S.get(t);
                                                    if (r)
                                                        return r.slice(0, e).every(function (e) {
                                                            return e;
                                                        });
                                                });
                                                if (t) return (x = t), "break";
                                            },
                                            F = I;
                                        F > 0 && "break" !== P(F);
                                        F--
                                    );
                                t.placement !== x &&
                                    ((t.modifiersData[n]._skip = !0), (t.placement = x), (t.reset = !0));
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: { _skip: !1 },
                    },
                    {
                        name: "preventOverflow",
                        enabled: !0,
                        phase: "main",
                        fn: function (e) {
                            var t = e.state,
                                r = e.options,
                                n = e.name,
                                a = r.mainAxis,
                                s = r.altAxis,
                                i = r.boundary,
                                o = r.rootBoundary,
                                l = r.altBoundary,
                                u = r.padding,
                                c = r.tether,
                                d = void 0 === c || c,
                                f = r.tetherOffset,
                                p = void 0 === f ? 0 : f,
                                h = em(t, { boundary: i, rootBoundary: o, padding: u, altBoundary: l }),
                                m = J(t.placement),
                                _ = ee(t.placement),
                                g = !_,
                                v = et(m),
                                b = "x" === v ? "y" : "x",
                                y = t.modifiersData.popperOffsets,
                                E = t.rects.reference,
                                x = t.rects.popper,
                                w =
                                    "function" == typeof p
                                        ? p(Object.assign({}, t.rects, { placement: t.placement }))
                                        : p,
                                C =
                                    "number" == typeof w
                                        ? { mainAxis: w, altAxis: w }
                                        : Object.assign({ mainAxis: 0, altAxis: 0 }, w),
                                D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                                O = { x: 0, y: 0 };
                            if (y) {
                                if (void 0 === a || a) {
                                    var A,
                                        M = "y" === v ? "top" : j,
                                        R = "y" === v ? Y : U,
                                        k = "y" === v ? "height" : "width",
                                        N = y[v],
                                        I = N + h[M],
                                        P = N - h[R],
                                        F = d ? -x[k] / 2 : 0,
                                        V = _ === G ? E[k] : x[k],
                                        H = _ === G ? -x[k] : -E[k],
                                        z = t.elements.arrow,
                                        W = d && z ? L(z) : { width: 0, height: 0 },
                                        q = t.modifiersData["arrow#persistent"]
                                            ? t.modifiersData["arrow#persistent"].padding
                                            : ef(),
                                        $ = q[M],
                                        K = q[R],
                                        Q = e_(0, E[k], W[k]),
                                        X = g ? E[k] / 2 - F - Q - $ - C.mainAxis : V - Q - $ - C.mainAxis,
                                        Z = g ? -E[k] / 2 + F + Q + K + C.mainAxis : H + Q + K + C.mainAxis,
                                        er = t.elements.arrow && B(t.elements.arrow),
                                        en = er ? ("y" === v ? er.clientTop || 0 : er.clientLeft || 0) : 0,
                                        ea = null != (A = null == D ? void 0 : D[v]) ? A : 0,
                                        es = e_(d ? T(I, N + X - ea - en) : I, N, d ? S(P, N + Z - ea) : P);
                                    (y[v] = es), (O[v] = es - N);
                                }
                                if (void 0 !== s && s) {
                                    var ei,
                                        eo,
                                        el = "x" === v ? "top" : j,
                                        eu = "x" === v ? Y : U,
                                        ec = y[b],
                                        ed = "y" === b ? "height" : "width",
                                        ep = ec + h[el],
                                        eh = ec - h[eu],
                                        eg = -1 !== ["top", j].indexOf(m),
                                        ev = null != (eo = null == D ? void 0 : D[b]) ? eo : 0,
                                        eb = eg ? ep : ec - E[ed] - x[ed] - ev + C.altAxis,
                                        ey = eg ? ec + E[ed] + x[ed] - ev - C.altAxis : eh,
                                        eE =
                                            d && eg
                                                ? (ei = e_(eb, ec, ey)) > ey
                                                    ? ey
                                                    : ei
                                                : e_(d ? eb : ep, ec, d ? ey : eh);
                                    (y[b] = eE), (O[b] = eE - ec);
                                }
                                t.modifiersData[n] = O;
                            }
                        },
                        requiresIfExists: ["offset"],
                    },
                    {
                        name: "arrow",
                        enabled: !0,
                        phase: "main",
                        fn: function (e) {
                            var t,
                                r = e.state,
                                n = e.name,
                                a = e.options,
                                s = r.elements.arrow,
                                i = r.modifiersData.popperOffsets,
                                o = J(r.placement),
                                l = et(o),
                                u = [j, U].indexOf(o) >= 0 ? "height" : "width";
                            if (s && i) {
                                var c,
                                    d =
                                        ((c = a.padding),
                                        ep(
                                            "number" !=
                                                typeof (c =
                                                    "function" == typeof c
                                                        ? c(Object.assign({}, r.rects, { placement: r.placement }))
                                                        : c)
                                                ? c
                                                : eh(c, H),
                                        )),
                                    f = L(s),
                                    p = "y" === l ? "top" : j,
                                    h = "y" === l ? Y : U,
                                    m = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u],
                                    _ = i[l] - r.rects.reference[l],
                                    g = B(s),
                                    v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
                                    b = d[p],
                                    y = v - f[u] - d[h],
                                    E = v / 2 - f[u] / 2 + (m / 2 - _ / 2),
                                    S = e_(b, E, y);
                                r.modifiersData[n] = (((t = {})[l] = S), (t.centerOffset = S - E), t);
                            }
                        },
                        effect: function (e) {
                            var t = e.state,
                                r = e.options.element,
                                n = void 0 === r ? "[data-popper-arrow]" : r;
                            null == n ||
                                (("string" != typeof n || (n = t.elements.popper.querySelector(n))) &&
                                    eu(t.elements.popper, n) &&
                                    (t.elements.arrow = n));
                        },
                        requires: ["popperOffsets"],
                        requiresIfExists: ["preventOverflow"],
                    },
                    {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function (e) {
                            var t = e.state,
                                r = e.name,
                                n = t.rects.reference,
                                a = t.rects.popper,
                                s = t.modifiersData.preventOverflow,
                                i = em(t, { elementContext: "reference" }),
                                o = em(t, { altBoundary: !0 }),
                                l = eg(i, n),
                                u = eg(o, a, s),
                                c = ev(l),
                                d = ev(u);
                            (t.modifiersData[r] = {
                                referenceClippingOffsets: l,
                                popperEscapeOffsets: u,
                                isReferenceHidden: c,
                                hasPopperEscaped: d,
                            }),
                                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                    "data-popper-reference-hidden": c,
                                    "data-popper-escaped": d,
                                }));
                        },
                    },
                ],
            }).defaultModifiers)
                ? []
                : a),
        (o = void 0 === (i = n.defaultOptions) ? Q : i),
        function (e, t, r) {
            void 0 === r && (r = o);
            var n,
                a,
                i = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, Q, o),
                    modifiersData: {},
                    elements: { reference: e, popper: t },
                    attributes: {},
                    styles: {},
                },
                l = [],
                u = !1,
                c = {
                    state: i,
                    setOptions: function (r) {
                        var n,
                            a,
                            u,
                            f,
                            p,
                            h,
                            m = "function" == typeof r ? r(i.options) : r;
                        d(),
                            (i.options = Object.assign({}, o, i.options, m)),
                            (i.scrollParents = {
                                reference: b(e) ? P(e) : e.contextElement ? P(e.contextElement) : [],
                                popper: P(t),
                            });
                        var _ =
                            ((a = Object.keys(
                                (n = [].concat(s, i.options.modifiers).reduce(function (e, t) {
                                    var r = e[t.name];
                                    return (
                                        (e[t.name] = r
                                            ? Object.assign({}, r, t, {
                                                  options: Object.assign({}, r.options, t.options),
                                                  data: Object.assign({}, r.data, t.data),
                                              })
                                            : t),
                                        e
                                    );
                                }, {})),
                            ).map(function (e) {
                                return n[e];
                            })),
                            (u = new Map()),
                            (f = new Set()),
                            (p = []),
                            a.forEach(function (e) {
                                u.set(e.name, e);
                            }),
                            a.forEach(function (e) {
                                f.has(e.name) ||
                                    (function e(t) {
                                        f.add(t.name),
                                            [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                                                if (!f.has(t)) {
                                                    var r = u.get(t);
                                                    r && e(r);
                                                }
                                            }),
                                            p.push(t);
                                    })(e);
                            }),
                            (h = p),
                            K.reduce(function (e, t) {
                                return e.concat(
                                    h.filter(function (e) {
                                        return e.phase === t;
                                    }),
                                );
                            }, []));
                        return (
                            (i.orderedModifiers = _.filter(function (e) {
                                return e.enabled;
                            })),
                            i.orderedModifiers.forEach(function (e) {
                                var t = e.name,
                                    r = e.options,
                                    n = e.effect;
                                if ("function" == typeof n) {
                                    var a = n({ state: i, name: t, instance: c, options: void 0 === r ? {} : r });
                                    l.push(a || function () {});
                                }
                            }),
                            c.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!u) {
                            var e = i.elements,
                                t = e.reference,
                                r = e.popper;
                            if (X(t, r)) {
                                (i.rects = {
                                    reference:
                                        ((n = B(r)),
                                        (a = "fixed" === i.options.strategy),
                                        (s = y(n)),
                                        (f =
                                            y(n) &&
                                            ((l = x((o = n.getBoundingClientRect()).width) / n.offsetWidth || 1),
                                            (d = x(o.height) / n.offsetHeight || 1),
                                            1 !== l || 1 !== d)),
                                        (p = M(n)),
                                        (h = D(t, f, a)),
                                        (m = { scrollLeft: 0, scrollTop: 0 }),
                                        (_ = { x: 0, y: 0 }),
                                        (s || (!s && !a)) &&
                                            (("body" !== A(n) || N(p)) &&
                                                (m = (function (e) {
                                                    return e !== v(e) && y(e)
                                                        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                                                        : O(e);
                                                })(n)),
                                            y(n)
                                                ? ((_ = D(n, !0)), (_.x += n.clientLeft), (_.y += n.clientTop))
                                                : p && (_.x = R(p))),
                                        {
                                            x: h.left + m.scrollLeft - _.x,
                                            y: h.top + m.scrollTop - _.y,
                                            width: h.width,
                                            height: h.height,
                                        }),
                                    popper: L(r),
                                }),
                                    (i.reset = !1),
                                    (i.placement = i.options.placement),
                                    i.orderedModifiers.forEach(function (e) {
                                        return (i.modifiersData[e.name] = Object.assign({}, e.data));
                                    });
                                for (var n, a, s, o, l, d, f, p, h, m, _, g = 0; g < i.orderedModifiers.length; g++) {
                                    if (!0 === i.reset) {
                                        (i.reset = !1), (g = -1);
                                        continue;
                                    }
                                    var b = i.orderedModifiers[g],
                                        E = b.fn,
                                        S = b.options,
                                        T = void 0 === S ? {} : S,
                                        w = b.name;
                                    "function" == typeof E &&
                                        (i = E({ state: i, options: T, name: w, instance: c }) || i);
                                }
                            }
                        }
                    },
                    update:
                        ((n = function () {
                            return new Promise(function (e) {
                                c.forceUpdate(), e(i);
                            });
                        }),
                        function () {
                            return (
                                a ||
                                    (a = new Promise(function (e) {
                                        Promise.resolve().then(function () {
                                            (a = void 0), e(n());
                                        });
                                    })),
                                a
                            );
                        }),
                    destroy: function () {
                        d(), (u = !0);
                    },
                };
            if (!X(e, t)) return c;
            function d() {
                l.forEach(function (e) {
                    return e();
                }),
                    (l = []);
            }
            return (
                c.setOptions(r).then(function (e) {
                    !u && r.onFirstUpdate && r.onFirstUpdate(e);
                }),
                c
            );
        }),
    ey = r(412700),
    eE = r.n(ey),
    eS = [],
    eT = function (e, t, r) {
        void 0 === r && (r = {});
        var n = l.useRef(null),
            a = {
                onFirstUpdate: r.onFirstUpdate,
                placement: r.placement || "bottom",
                strategy: r.strategy || "absolute",
                modifiers: r.modifiers || eS,
            },
            s = l.useState({
                styles: { popper: { position: a.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
                attributes: {},
            }),
            i = s[0],
            o = s[1],
            u = l.useMemo(function () {
                return {
                    name: "updateState",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state,
                            r = Object.keys(t.elements);
                        g.flushSync(function () {
                            o({
                                styles: m(
                                    r.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    }),
                                ),
                                attributes: m(
                                    r.map(function (e) {
                                        return [e, t.attributes[e]];
                                    }),
                                ),
                            });
                        });
                    },
                    requires: ["computeStyles"],
                };
            }, []),
            c = l.useMemo(
                function () {
                    var e = {
                        onFirstUpdate: a.onFirstUpdate,
                        placement: a.placement,
                        strategy: a.strategy,
                        modifiers: [].concat(a.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
                    };
                    return eE()(n.current, e) ? n.current || e : ((n.current = e), e);
                },
                [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, u],
            ),
            d = l.useRef();
        return (
            _(
                function () {
                    d.current && d.current.setOptions(c);
                },
                [c],
            ),
            _(
                function () {
                    if (null != e && null != t) {
                        var n = (r.createPopper || eb)(e, t, c);
                        return (
                            (d.current = n),
                            function () {
                                n.destroy(), (d.current = null);
                            }
                        );
                    }
                },
                [e, t, r.createPopper],
            ),
            {
                state: d.current ? d.current.state : null,
                styles: i.styles,
                attributes: i.attributes,
                update: d.current ? d.current.update : null,
                forceUpdate: d.current ? d.current.forceUpdate : null,
            }
        );
    },
    ex = function () {},
    ew = function () {
        return Promise.resolve(null);
    },
    eC = [];
function eD(e) {
    var t = e.placement,
        r = void 0 === t ? "bottom" : t,
        n = e.strategy,
        a = void 0 === n ? "absolute" : n,
        s = e.modifiers,
        i = void 0 === s ? eC : s,
        o = e.referenceElement,
        c = e.onFirstUpdate,
        d = e.innerRef,
        p = e.children,
        m = l.useContext(u),
        _ = l.useState(null),
        g = _[0],
        v = _[1],
        b = l.useState(null),
        y = b[0],
        E = b[1];
    l.useEffect(
        function () {
            h(d, g);
        },
        [d, g],
    );
    var S = eT(
            o || m,
            g,
            l.useMemo(
                function () {
                    return {
                        placement: r,
                        strategy: a,
                        onFirstUpdate: c,
                        modifiers: [].concat(i, [{ name: "arrow", enabled: null != y, options: { element: y } }]),
                    };
                },
                [r, a, c, i, y],
            ),
        ),
        T = S.state,
        x = S.styles,
        w = S.forceUpdate,
        C = S.update,
        D = l.useMemo(
            function () {
                return {
                    ref: v,
                    style: x.popper,
                    placement: T ? T.placement : r,
                    hasPopperEscaped: T && T.modifiersData.hide ? T.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: T && T.modifiersData.hide ? T.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: { style: x.arrow, ref: E },
                    forceUpdate: w || ex,
                    update: C || ew,
                };
            },
            [v, E, r, T, x, C, w],
        );
    return f(p)(D);
}
var eO = r(916822),
    eA = r.n(eO);
function eM(e) {
    var t = e.children,
        r = e.innerRef,
        n = l.useContext(c),
        a = l.useCallback(
            function (e) {
                h(r, e), p(n, e);
            },
            [r, n],
        );
    return (
        l.useEffect(function () {
            return function () {
                return h(r, null);
            };
        }, []),
        l.useEffect(
            function () {
                eA()(!!n, "`Reference` should not be used outside of a `Manager` component.");
            },
            [n],
        ),
        f(t)({ ref: a })
    );
}
