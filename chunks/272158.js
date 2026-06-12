"use strict";
n.r(t), n.d(t, { Manager: () => d, usePopper: () => ey, Reference: () => eD, Popper: () => eR });
var i,
    r,
    s,
    a,
    o,
    l = n(64700),
    u = l.createContext(),
    c = l.createContext();
function d(e) {
    var t = e.children,
        n = l.useState(null),
        i = n[0],
        r = n[1],
        s = l.useRef(!1);
    l.useEffect(function () {
        return function () {
            s.current = !0;
        };
    }, []);
    var a = l.useCallback(function (e) {
        s.current || r(e);
    }, []);
    return l.createElement(u.Provider, { value: i }, l.createElement(c.Provider, { value: a }, t));
}
var _ = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    h = function (e) {
        if ("function" == typeof e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return e.apply(void 0, n);
        }
    },
    f = function (e, t) {
        if ("function" == typeof e) return h(e, t);
        null != e && (e.current = t);
    },
    p = function (e) {
        return e.reduce(function (e, t) {
            var n = t[0],
                i = t[1];
            return (e[n] = i), e;
        }, {});
    },
    E = "u" > typeof window && window.document && window.document.createElement ? l.useLayoutEffect : l.useEffect,
    m = n(340287);
function g(e) {
    if (null == e) return window;
    if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
    }
    return e;
}
function A(e) {
    var t = g(e).Element;
    return e instanceof t || e instanceof Element;
}
function I(e) {
    var t = g(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement;
}
function T(e) {
    if ("u" < typeof ShadowRoot) return !1;
    var t = g(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot;
}
var S = Math.max,
    y = Math.min,
    N = Math.round;
function v() {
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
    return !/^((?!chrome|android).)*safari/i.test(v());
}
function R(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    var i = e.getBoundingClientRect(),
        r = 1,
        s = 1;
    t &&
        I(e) &&
        ((r = (e.offsetWidth > 0 && N(i.width) / e.offsetWidth) || 1),
        (s = (e.offsetHeight > 0 && N(i.height) / e.offsetHeight) || 1));
    var a = (A(e) ? g(e) : window).visualViewport,
        o = !C() && n,
        l = (i.left + (o && a ? a.offsetLeft : 0)) / r,
        u = (i.top + (o && a ? a.offsetTop : 0)) / s,
        c = i.width / r,
        d = i.height / s;
    return { width: c, height: d, top: u, right: l + c, bottom: u + d, left: l, x: l, y: u };
}
function O(e) {
    var t = g(e);
    return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
}
function b(e) {
    return e ? (e.nodeName || "").toLowerCase() : null;
}
function D(e) {
    return ((A(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function L(e) {
    return R(D(e)).left + O(e).scrollLeft;
}
function w(e) {
    return g(e).getComputedStyle(e);
}
function M(e) {
    var t = w(e),
        n = t.overflow,
        i = t.overflowX,
        r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(n + r + i);
}
function P(e) {
    var t = R(e),
        n = e.offsetWidth,
        i = e.offsetHeight;
    return (
        1 >= Math.abs(t.width - n) && (n = t.width),
        1 >= Math.abs(t.height - i) && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: n, height: i }
    );
}
function x(e) {
    return "html" === b(e) ? e : e.assignedSlot || e.parentNode || (T(e) ? e.host : null) || D(e);
}
function k(e, t) {
    void 0 === t && (t = []);
    var n,
        i = (function e(t) {
            return ["html", "body", "#document"].indexOf(b(t)) >= 0 ? t.ownerDocument.body : I(t) && M(t) ? t : e(x(t));
        })(e),
        r = i === (null == (n = e.ownerDocument) ? void 0 : n.body),
        s = g(i),
        a = r ? [s].concat(s.visualViewport || [], M(i) ? i : []) : i,
        o = t.concat(a);
    return r ? o : o.concat(k(x(a)));
}
function U(e) {
    return I(e) && "fixed" !== w(e).position ? e.offsetParent : null;
}
function G(e) {
    for (var t = g(e), n = U(e); n && ["table", "td", "th"].indexOf(b(n)) >= 0 && "static" === w(n).position; )
        n = U(n);
    return n && ("html" === b(n) || ("body" === b(n) && "static" === w(n).position))
        ? t
        : n ||
              (function (e) {
                  var t = /firefox/i.test(v());
                  if (/Trident/i.test(v()) && I(e) && "fixed" === w(e).position) return null;
                  var n = x(e);
                  for (T(n) && (n = n.host); I(n) && 0 > ["html", "body"].indexOf(b(n)); ) {
                      var i = w(n);
                      if (
                          "none" !== i.transform ||
                          "none" !== i.perspective ||
                          "paint" === i.contain ||
                          -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                          (t && "filter" === i.willChange) ||
                          (t && i.filter && "none" !== i.filter)
                      )
                          return n;
                      n = n.parentNode;
                  }
                  return null;
              })(e) ||
              t;
}
var F = "bottom",
    V = "right",
    B = "left",
    H = "auto",
    j = ["top", F, V, B],
    Y = "start",
    W = "viewport",
    K = "popper",
    $ = j.reduce(function (e, t) {
        return e.concat([t + "-" + Y, t + "-end"]);
    }, []),
    z = [].concat(j, [H]).reduce(function (e, t) {
        return e.concat([t, t + "-" + Y, t + "-end"]);
    }, []),
    q = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"],
    X = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Z() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
    });
}
var Q = { passive: !0 };
function J(e) {
    return e.split("-")[0];
}
function ee(e) {
    return e.split("-")[1];
}
function et(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function en(e) {
    var t,
        n = e.reference,
        i = e.element,
        r = e.placement,
        s = r ? J(r) : null,
        a = r ? ee(r) : null,
        o = n.x + n.width / 2 - i.width / 2,
        l = n.y + n.height / 2 - i.height / 2;
    switch (s) {
        case "top":
            t = { x: o, y: n.y - i.height };
            break;
        case F:
            t = { x: o, y: n.y + n.height };
            break;
        case V:
            t = { x: n.x + n.width, y: l };
            break;
        case B:
            t = { x: n.x - i.width, y: l };
            break;
        default:
            t = { x: n.x, y: n.y };
    }
    var u = s ? et(s) : null;
    if (null != u) {
        var c = "y" === u ? "height" : "width";
        switch (a) {
            case Y:
                t[u] = t[u] - (n[c] / 2 - i[c] / 2);
                break;
            case "end":
                t[u] = t[u] + (n[c] / 2 - i[c] / 2);
        }
    }
    return t;
}
var ei = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function er(e) {
    var t,
        n,
        i,
        r,
        s,
        a,
        o,
        l = e.popper,
        u = e.popperRect,
        c = e.placement,
        d = e.variation,
        _ = e.offsets,
        h = e.position,
        f = e.gpuAcceleration,
        p = e.adaptive,
        E = e.roundOffsets,
        m = e.isFixed,
        A = _.x,
        I = void 0 === A ? 0 : A,
        T = _.y,
        S = void 0 === T ? 0 : T,
        y = "function" == typeof E ? E({ x: I, y: S }) : { x: I, y: S };
    (I = y.x), (S = y.y);
    var v = _.hasOwnProperty("x"),
        C = _.hasOwnProperty("y"),
        R = B,
        O = "top",
        b = window;
    if (p) {
        var L = G(l),
            M = "clientHeight",
            P = "clientWidth";
        L === g(l) &&
            "static" !== w((L = D(l))).position &&
            "absolute" === h &&
            ((M = "scrollHeight"), (P = "scrollWidth")),
            ("top" === c || ((c === B || c === V) && "end" === d)) &&
                ((O = F),
                (S -= (m && L === b && b.visualViewport ? b.visualViewport.height : L[M]) - u.height),
                (S *= f ? 1 : -1)),
            (c === B || (("top" === c || c === F) && "end" === d)) &&
                ((R = V),
                (I -= (m && L === b && b.visualViewport ? b.visualViewport.width : L[P]) - u.width),
                (I *= f ? 1 : -1));
    }
    var x = Object.assign({ position: h }, p && ei),
        k =
            !0 === E
                ? ((t = { x: I, y: S }),
                  (n = g(l)),
                  (i = t.x),
                  (r = t.y),
                  { x: N(i * (s = n.devicePixelRatio || 1)) / s || 0, y: N(r * s) / s || 0 })
                : { x: I, y: S };
    return ((I = k.x), (S = k.y), f)
        ? Object.assign(
              {},
              x,
              (((o = {})[O] = C ? "0" : ""),
              (o[R] = v ? "0" : ""),
              (o.transform =
                  1 >= (b.devicePixelRatio || 1)
                      ? "translate(" + I + "px, " + S + "px)"
                      : "translate3d(" + I + "px, " + S + "px, 0)"),
              o),
          )
        : Object.assign({}, x, (((a = {})[O] = C ? S + "px" : ""), (a[R] = v ? I + "px" : ""), (a.transform = ""), a));
}
var es = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ea(e) {
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
    var n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && T(n)) {
        var i = t;
        do {
            if (i && e.isSameNode(i)) return !0;
            i = i.parentNode || i.host;
        } while (i);
    }
    return !1;
}
function ec(e) {
    return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function ed(e, t, n) {
    var i, r, s, a, o, l, u, c, d, _;
    return t === W
        ? ec(
              (function (e, t) {
                  var n = g(e),
                      i = D(e),
                      r = n.visualViewport,
                      s = i.clientWidth,
                      a = i.clientHeight,
                      o = 0,
                      l = 0;
                  if (r) {
                      (s = r.width), (a = r.height);
                      var u = C();
                      (u || (!u && "fixed" === t)) && ((o = r.offsetLeft), (l = r.offsetTop));
                  }
                  return { width: s, height: a, x: o + L(e), y: l };
              })(e, n),
          )
        : A(t)
          ? (((i = R(t, !1, "fixed" === n)).top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i)
          : ec(
                ((r = D(e)),
                (a = D(r)),
                (o = O(r)),
                (l = null == (s = r.ownerDocument) ? void 0 : s.body),
                (u = S(a.scrollWidth, a.clientWidth, l ? l.scrollWidth : 0, l ? l.clientWidth : 0)),
                (c = S(a.scrollHeight, a.clientHeight, l ? l.scrollHeight : 0, l ? l.clientHeight : 0)),
                (d = -o.scrollLeft + L(r)),
                (_ = -o.scrollTop),
                "rtl" === w(l || a).direction && (d += S(a.clientWidth, l ? l.clientWidth : 0) - u),
                { width: u, height: c, x: d, y: _ }),
            );
}
function e_() {
    return { top: 0, right: 0, bottom: 0, left: 0 };
}
function eh(e) {
    return Object.assign({}, e_(), e);
}
function ef(e, t) {
    return t.reduce(function (t, n) {
        return (t[n] = e), t;
    }, {});
}
function ep(e, t) {
    void 0 === t && (t = {});
    var n,
        i,
        r,
        s,
        a,
        o,
        l,
        u,
        c = t,
        d = c.placement,
        _ = void 0 === d ? e.placement : d,
        h = c.strategy,
        f = void 0 === h ? e.strategy : h,
        p = c.boundary,
        E = c.rootBoundary,
        m = c.elementContext,
        g = void 0 === m ? K : m,
        T = c.altBoundary,
        N = c.padding,
        v = void 0 === N ? 0 : N,
        C = eh("number" != typeof v ? v : ef(v, j)),
        O = e.rects.popper,
        L = e.elements[void 0 !== T && T ? (g === K ? "reference" : K) : g],
        M =
            ((n = A(L) ? L : L.contextElement || D(e.elements.popper)),
            (i = void 0 === p ? "clippingParents" : p),
            (r = void 0 === E ? W : E),
            (l = (o = [].concat(
                "clippingParents" === i
                    ? ((s = k(x(n))),
                      !A((a = ["absolute", "fixed"].indexOf(w(n).position) >= 0 && I(n) ? G(n) : n))
                          ? []
                          : s.filter(function (e) {
                                return A(e) && eu(e, a) && "body" !== b(e);
                            }))
                    : [].concat(i),
                [r],
            ))[0]),
            ((u = o.reduce(
                function (e, t) {
                    var i = ed(n, t, f);
                    return (
                        (e.top = S(i.top, e.top)),
                        (e.right = y(i.right, e.right)),
                        (e.bottom = y(i.bottom, e.bottom)),
                        (e.left = S(i.left, e.left)),
                        e
                    );
                },
                ed(n, l, f),
            )).width = u.right - u.left),
            (u.height = u.bottom - u.top),
            (u.x = u.left),
            (u.y = u.top),
            u),
        P = R(e.elements.reference),
        U = en({ reference: P, element: O, strategy: "absolute", placement: _ }),
        B = ec(Object.assign({}, O, U)),
        H = g === K ? B : P,
        Y = {
            top: M.top - H.top + C.top,
            bottom: H.bottom - M.bottom + C.bottom,
            left: M.left - H.left + C.left,
            right: H.right - M.right + C.right,
        },
        $ = e.modifiersData.offset;
    if (g === K && $) {
        var z = $[_];
        Object.keys(Y).forEach(function (e) {
            var t = [V, F].indexOf(e) >= 0 ? 1 : -1,
                n = ["top", F].indexOf(e) >= 0 ? "y" : "x";
            Y[e] += z[n] * t;
        });
    }
    return Y;
}
function eE(e, t, n) {
    return S(e, y(t, n));
}
function em(e, t, n) {
    return (
        void 0 === n && (n = { x: 0, y: 0 }),
        {
            top: e.top - t.height - n.y,
            right: e.right - t.width + n.x,
            bottom: e.bottom - t.height + n.y,
            left: e.left - t.width - n.x,
        }
    );
}
function eg(e) {
    return ["top", V, F, B].some(function (t) {
        return e[t] >= 0;
    });
}
var eA =
        ((s =
            void 0 ===
            (r = (i = {
                defaultModifiers: [
                    {
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function () {},
                        effect: function (e) {
                            var t = e.state,
                                n = e.instance,
                                i = e.options,
                                r = i.scroll,
                                s = void 0 === r || r,
                                a = i.resize,
                                o = void 0 === a || a,
                                l = g(t.elements.popper),
                                u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return (
                                s &&
                                    u.forEach(function (e) {
                                        e.addEventListener("scroll", n.update, Q);
                                    }),
                                o && l.addEventListener("resize", n.update, Q),
                                function () {
                                    s &&
                                        u.forEach(function (e) {
                                            e.removeEventListener("scroll", n.update, Q);
                                        }),
                                        o && l.removeEventListener("resize", n.update, Q);
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
                                n = e.name;
                            t.modifiersData[n] = en({
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
                                n = e.options,
                                i = n.gpuAcceleration,
                                r = n.adaptive,
                                s = n.roundOffsets,
                                a = void 0 === s || s,
                                o = {
                                    placement: J(t.placement),
                                    variation: ee(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: void 0 === i || i,
                                    isFixed: "fixed" === t.options.strategy,
                                };
                            null != t.modifiersData.popperOffsets &&
                                (t.styles.popper = Object.assign(
                                    {},
                                    t.styles.popper,
                                    er(
                                        Object.assign({}, o, {
                                            offsets: t.modifiersData.popperOffsets,
                                            position: t.options.strategy,
                                            adaptive: void 0 === r || r,
                                            roundOffsets: a,
                                        }),
                                    ),
                                )),
                                null != t.modifiersData.arrow &&
                                    (t.styles.arrow = Object.assign(
                                        {},
                                        t.styles.arrow,
                                        er(
                                            Object.assign({}, o, {
                                                offsets: t.modifiersData.arrow,
                                                position: "absolute",
                                                adaptive: !1,
                                                roundOffsets: a,
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
                                var n = t.styles[e] || {},
                                    i = t.attributes[e] || {},
                                    r = t.elements[e];
                                I(r) &&
                                    b(r) &&
                                    (Object.assign(r.style, n),
                                    Object.keys(i).forEach(function (e) {
                                        var t = i[e];
                                        !1 === t ? r.removeAttribute(e) : r.setAttribute(e, !0 === t ? "" : t);
                                    }));
                            });
                        },
                        effect: function (e) {
                            var t = e.state,
                                n = {
                                    popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" },
                                    arrow: { position: "absolute" },
                                    reference: {},
                                };
                            return (
                                Object.assign(t.elements.popper.style, n.popper),
                                (t.styles = n),
                                t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function () {
                                    Object.keys(t.elements).forEach(function (e) {
                                        var i = t.elements[e],
                                            r = t.attributes[e] || {},
                                            s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(
                                                function (e, t) {
                                                    return (e[t] = ""), e;
                                                },
                                                {},
                                            );
                                        I(i) &&
                                            b(i) &&
                                            (Object.assign(i.style, s),
                                            Object.keys(r).forEach(function (e) {
                                                i.removeAttribute(e);
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
                                n = e.options,
                                i = e.name,
                                r = n.offset,
                                s = void 0 === r ? [0, 0] : r,
                                a = z.reduce(function (e, n) {
                                    var i, r, a, o, l, u;
                                    return (
                                        (e[n] =
                                            ((i = t.rects),
                                            (a = [B, "top"].indexOf((r = J(n))) >= 0 ? -1 : 1),
                                            (l = (o =
                                                "function" == typeof s
                                                    ? s(Object.assign({}, i, { placement: n }))
                                                    : s)[0]),
                                            (u = o[1]),
                                            (l = l || 0),
                                            (u = (u || 0) * a),
                                            [B, V].indexOf(r) >= 0 ? { x: u, y: l } : { x: l, y: u })),
                                        e
                                    );
                                }, {}),
                                o = a[t.placement],
                                l = o.x,
                                u = o.y;
                            null != t.modifiersData.popperOffsets &&
                                ((t.modifiersData.popperOffsets.x += l), (t.modifiersData.popperOffsets.y += u)),
                                (t.modifiersData[i] = a);
                        },
                    },
                    {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function (e) {
                            var t = e.state,
                                n = e.options,
                                i = e.name;
                            if (!t.modifiersData[i]._skip) {
                                for (
                                    var r = n.mainAxis,
                                        s = void 0 === r || r,
                                        a = n.altAxis,
                                        o = void 0 === a || a,
                                        l = n.fallbackPlacements,
                                        u = n.padding,
                                        c = n.boundary,
                                        d = n.rootBoundary,
                                        _ = n.altBoundary,
                                        h = n.flipVariations,
                                        f = void 0 === h || h,
                                        p = n.allowedAutoPlacements,
                                        E = t.options.placement,
                                        m = J(E) === E,
                                        g =
                                            l ||
                                            (m || !f
                                                ? [ea(E)]
                                                : (function (e) {
                                                      if (J(e) === H) return [];
                                                      var t = ea(e);
                                                      return [el(e), t, el(t)];
                                                  })(E)),
                                        A = [E].concat(g).reduce(function (e, n) {
                                            var i, r, s, a, o, l, _, h, E, m, g, A;
                                            return e.concat(
                                                J(n) === H
                                                    ? ((r = (i = {
                                                          placement: n,
                                                          boundary: c,
                                                          rootBoundary: d,
                                                          padding: u,
                                                          flipVariations: f,
                                                          allowedAutoPlacements: p,
                                                      }).placement),
                                                      (s = i.boundary),
                                                      (a = i.rootBoundary),
                                                      (o = i.padding),
                                                      (l = i.flipVariations),
                                                      (h = void 0 === (_ = i.allowedAutoPlacements) ? z : _),
                                                      0 ===
                                                          (g = (m = (E = ee(r))
                                                              ? l
                                                                  ? $
                                                                  : $.filter(function (e) {
                                                                        return ee(e) === E;
                                                                    })
                                                              : j).filter(function (e) {
                                                              return h.indexOf(e) >= 0;
                                                          })).length && (g = m),
                                                      Object.keys(
                                                          (A = g.reduce(function (e, n) {
                                                              return (
                                                                  (e[n] = ep(t, {
                                                                      placement: n,
                                                                      boundary: s,
                                                                      rootBoundary: a,
                                                                      padding: o,
                                                                  })[J(n)]),
                                                                  e
                                                              );
                                                          }, {})),
                                                      ).sort(function (e, t) {
                                                          return A[e] - A[t];
                                                      }))
                                                    : n,
                                            );
                                        }, []),
                                        I = t.rects.reference,
                                        T = t.rects.popper,
                                        S = new Map(),
                                        y = !0,
                                        N = A[0],
                                        v = 0;
                                    v < A.length;
                                    v++
                                ) {
                                    var C = A[v],
                                        R = J(C),
                                        O = ee(C) === Y,
                                        b = ["top", F].indexOf(R) >= 0,
                                        D = b ? "width" : "height",
                                        L = ep(t, {
                                            placement: C,
                                            boundary: c,
                                            rootBoundary: d,
                                            altBoundary: _,
                                            padding: u,
                                        }),
                                        w = b ? (O ? V : B) : O ? F : "top";
                                    I[D] > T[D] && (w = ea(w));
                                    var M = ea(w),
                                        P = [];
                                    if (
                                        (s && P.push(L[R] <= 0),
                                        o && P.push(L[w] <= 0, L[M] <= 0),
                                        P.every(function (e) {
                                            return e;
                                        }))
                                    ) {
                                        (N = C), (y = !1);
                                        break;
                                    }
                                    S.set(C, P);
                                }
                                if (y)
                                    for (
                                        var x = f ? 3 : 1,
                                            k = function (e) {
                                                var t = A.find(function (t) {
                                                    var n = S.get(t);
                                                    if (n)
                                                        return n.slice(0, e).every(function (e) {
                                                            return e;
                                                        });
                                                });
                                                if (t) return (N = t), "break";
                                            },
                                            U = x;
                                        U > 0 && "break" !== k(U);
                                        U--
                                    );
                                t.placement !== N &&
                                    ((t.modifiersData[i]._skip = !0), (t.placement = N), (t.reset = !0));
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
                                n = e.options,
                                i = e.name,
                                r = n.mainAxis,
                                s = n.altAxis,
                                a = n.boundary,
                                o = n.rootBoundary,
                                l = n.altBoundary,
                                u = n.padding,
                                c = n.tether,
                                d = void 0 === c || c,
                                _ = n.tetherOffset,
                                h = void 0 === _ ? 0 : _,
                                f = ep(t, { boundary: a, rootBoundary: o, padding: u, altBoundary: l }),
                                p = J(t.placement),
                                E = ee(t.placement),
                                m = !E,
                                g = et(p),
                                A = "x" === g ? "y" : "x",
                                I = t.modifiersData.popperOffsets,
                                T = t.rects.reference,
                                N = t.rects.popper,
                                v =
                                    "function" == typeof h
                                        ? h(Object.assign({}, t.rects, { placement: t.placement }))
                                        : h,
                                C =
                                    "number" == typeof v
                                        ? { mainAxis: v, altAxis: v }
                                        : Object.assign({ mainAxis: 0, altAxis: 0 }, v),
                                R = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                                O = { x: 0, y: 0 };
                            if (I) {
                                if (void 0 === r || r) {
                                    var b,
                                        D = "y" === g ? "top" : B,
                                        L = "y" === g ? F : V,
                                        w = "y" === g ? "height" : "width",
                                        M = I[g],
                                        x = M + f[D],
                                        k = M - f[L],
                                        U = d ? -N[w] / 2 : 0,
                                        H = E === Y ? T[w] : N[w],
                                        j = E === Y ? -N[w] : -T[w],
                                        W = t.elements.arrow,
                                        K = d && W ? P(W) : { width: 0, height: 0 },
                                        $ = t.modifiersData["arrow#persistent"]
                                            ? t.modifiersData["arrow#persistent"].padding
                                            : e_(),
                                        z = $[D],
                                        q = $[L],
                                        X = eE(0, T[w], K[w]),
                                        Z = m ? T[w] / 2 - U - X - z - C.mainAxis : H - X - z - C.mainAxis,
                                        Q = m ? -T[w] / 2 + U + X + q + C.mainAxis : j + X + q + C.mainAxis,
                                        en = t.elements.arrow && G(t.elements.arrow),
                                        ei = en ? ("y" === g ? en.clientTop || 0 : en.clientLeft || 0) : 0,
                                        er = null != (b = null == R ? void 0 : R[g]) ? b : 0,
                                        es = eE(d ? y(x, M + Z - er - ei) : x, M, d ? S(k, M + Q - er) : k);
                                    (I[g] = es), (O[g] = es - M);
                                }
                                if (void 0 !== s && s) {
                                    var ea,
                                        eo,
                                        el = "x" === g ? "top" : B,
                                        eu = "x" === g ? F : V,
                                        ec = I[A],
                                        ed = "y" === A ? "height" : "width",
                                        eh = ec + f[el],
                                        ef = ec - f[eu],
                                        em = -1 !== ["top", B].indexOf(p),
                                        eg = null != (eo = null == R ? void 0 : R[A]) ? eo : 0,
                                        eA = em ? eh : ec - T[ed] - N[ed] - eg + C.altAxis,
                                        eI = em ? ec + T[ed] + N[ed] - eg - C.altAxis : ef,
                                        eT =
                                            d && em
                                                ? (ea = eE(eA, ec, eI)) > eI
                                                    ? eI
                                                    : ea
                                                : eE(d ? eA : eh, ec, d ? eI : ef);
                                    (I[A] = eT), (O[A] = eT - ec);
                                }
                                t.modifiersData[i] = O;
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
                                n = e.state,
                                i = e.name,
                                r = e.options,
                                s = n.elements.arrow,
                                a = n.modifiersData.popperOffsets,
                                o = J(n.placement),
                                l = et(o),
                                u = [B, V].indexOf(o) >= 0 ? "height" : "width";
                            if (s && a) {
                                var c,
                                    d =
                                        ((c = r.padding),
                                        eh(
                                            "number" !=
                                                typeof (c =
                                                    "function" == typeof c
                                                        ? c(Object.assign({}, n.rects, { placement: n.placement }))
                                                        : c)
                                                ? c
                                                : ef(c, j),
                                        )),
                                    _ = P(s),
                                    h = "y" === l ? "top" : B,
                                    f = "y" === l ? F : V,
                                    p = n.rects.reference[u] + n.rects.reference[l] - a[l] - n.rects.popper[u],
                                    E = a[l] - n.rects.reference[l],
                                    m = G(s),
                                    g = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
                                    A = d[h],
                                    I = g - _[u] - d[f],
                                    T = g / 2 - _[u] / 2 + (p / 2 - E / 2),
                                    S = eE(A, T, I);
                                n.modifiersData[i] = (((t = {})[l] = S), (t.centerOffset = S - T), t);
                            }
                        },
                        effect: function (e) {
                            var t = e.state,
                                n = e.options.element,
                                i = void 0 === n ? "[data-popper-arrow]" : n;
                            null == i ||
                                (("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
                                    eu(t.elements.popper, i) &&
                                    (t.elements.arrow = i));
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
                                n = e.name,
                                i = t.rects.reference,
                                r = t.rects.popper,
                                s = t.modifiersData.preventOverflow,
                                a = ep(t, { elementContext: "reference" }),
                                o = ep(t, { altBoundary: !0 }),
                                l = em(a, i),
                                u = em(o, r, s),
                                c = eg(l),
                                d = eg(u);
                            (t.modifiersData[n] = {
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
                : r),
        (o = void 0 === (a = i.defaultOptions) ? X : a),
        function (e, t, n) {
            void 0 === n && (n = o);
            var i,
                r,
                a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, X, o),
                    modifiersData: {},
                    elements: { reference: e, popper: t },
                    attributes: {},
                    styles: {},
                },
                l = [],
                u = !1,
                c = {
                    state: a,
                    setOptions: function (n) {
                        var i,
                            r,
                            u,
                            _,
                            h,
                            f,
                            p = "function" == typeof n ? n(a.options) : n;
                        d(),
                            (a.options = Object.assign({}, o, a.options, p)),
                            (a.scrollParents = {
                                reference: A(e) ? k(e) : e.contextElement ? k(e.contextElement) : [],
                                popper: k(t),
                            });
                        var E =
                            ((r = Object.keys(
                                (i = [].concat(s, a.options.modifiers).reduce(function (e, t) {
                                    var n = e[t.name];
                                    return (
                                        (e[t.name] = n
                                            ? Object.assign({}, n, t, {
                                                  options: Object.assign({}, n.options, t.options),
                                                  data: Object.assign({}, n.data, t.data),
                                              })
                                            : t),
                                        e
                                    );
                                }, {})),
                            ).map(function (e) {
                                return i[e];
                            })),
                            (u = new Map()),
                            (_ = new Set()),
                            (h = []),
                            r.forEach(function (e) {
                                u.set(e.name, e);
                            }),
                            r.forEach(function (e) {
                                _.has(e.name) ||
                                    (function e(t) {
                                        _.add(t.name),
                                            [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
                                                if (!_.has(t)) {
                                                    var n = u.get(t);
                                                    n && e(n);
                                                }
                                            }),
                                            h.push(t);
                                    })(e);
                            }),
                            (f = h),
                            q.reduce(function (e, t) {
                                return e.concat(
                                    f.filter(function (e) {
                                        return e.phase === t;
                                    }),
                                );
                            }, []));
                        return (
                            (a.orderedModifiers = E.filter(function (e) {
                                return e.enabled;
                            })),
                            a.orderedModifiers.forEach(function (e) {
                                var t = e.name,
                                    n = e.options,
                                    i = e.effect;
                                if ("function" == typeof i) {
                                    var r = i({ state: a, name: t, instance: c, options: void 0 === n ? {} : n });
                                    l.push(r || function () {});
                                }
                            }),
                            c.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!u) {
                            var e = a.elements,
                                t = e.reference,
                                n = e.popper;
                            if (Z(t, n)) {
                                (a.rects = {
                                    reference:
                                        ((i = G(n)),
                                        (r = "fixed" === a.options.strategy),
                                        (s = I(i)),
                                        (_ =
                                            I(i) &&
                                            ((l = N((o = i.getBoundingClientRect()).width) / i.offsetWidth || 1),
                                            (d = N(o.height) / i.offsetHeight || 1),
                                            1 !== l || 1 !== d)),
                                        (h = D(i)),
                                        (f = R(t, _, r)),
                                        (p = { scrollLeft: 0, scrollTop: 0 }),
                                        (E = { x: 0, y: 0 }),
                                        (s || (!s && !r)) &&
                                            (("body" !== b(i) || M(h)) &&
                                                (p = (function (e) {
                                                    return e !== g(e) && I(e)
                                                        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
                                                        : O(e);
                                                })(i)),
                                            I(i)
                                                ? ((E = R(i, !0)), (E.x += i.clientLeft), (E.y += i.clientTop))
                                                : h && (E.x = L(h))),
                                        {
                                            x: f.left + p.scrollLeft - E.x,
                                            y: f.top + p.scrollTop - E.y,
                                            width: f.width,
                                            height: f.height,
                                        }),
                                    popper: P(n),
                                }),
                                    (a.reset = !1),
                                    (a.placement = a.options.placement),
                                    a.orderedModifiers.forEach(function (e) {
                                        return (a.modifiersData[e.name] = Object.assign({}, e.data));
                                    });
                                for (var i, r, s, o, l, d, _, h, f, p, E, m = 0; m < a.orderedModifiers.length; m++) {
                                    if (!0 === a.reset) {
                                        (a.reset = !1), (m = -1);
                                        continue;
                                    }
                                    var A = a.orderedModifiers[m],
                                        T = A.fn,
                                        S = A.options,
                                        y = void 0 === S ? {} : S,
                                        v = A.name;
                                    "function" == typeof T &&
                                        (a = T({ state: a, options: y, name: v, instance: c }) || a);
                                }
                            }
                        }
                    },
                    update:
                        ((i = function () {
                            return new Promise(function (e) {
                                c.forceUpdate(), e(a);
                            });
                        }),
                        function () {
                            return (
                                r ||
                                    (r = new Promise(function (e) {
                                        Promise.resolve().then(function () {
                                            (r = void 0), e(i());
                                        });
                                    })),
                                r
                            );
                        }),
                    destroy: function () {
                        d(), (u = !0);
                    },
                };
            if (!Z(e, t)) return c;
            function d() {
                l.forEach(function (e) {
                    return e();
                }),
                    (l = []);
            }
            return (
                c.setOptions(n).then(function (e) {
                    !u && n.onFirstUpdate && n.onFirstUpdate(e);
                }),
                c
            );
        }),
    eI = n(412700),
    eT = n.n(eI),
    eS = [],
    ey = function (e, t, n) {
        void 0 === n && (n = {});
        var i = l.useRef(null),
            r = {
                onFirstUpdate: n.onFirstUpdate,
                placement: n.placement || "bottom",
                strategy: n.strategy || "absolute",
                modifiers: n.modifiers || eS,
            },
            s = l.useState({
                styles: { popper: { position: r.strategy, left: "0", top: "0" }, arrow: { position: "absolute" } },
                attributes: {},
            }),
            a = s[0],
            o = s[1],
            u = l.useMemo(function () {
                return {
                    name: "updateState",
                    enabled: !0,
                    phase: "write",
                    fn: function (e) {
                        var t = e.state,
                            n = Object.keys(t.elements);
                        m.flushSync(function () {
                            o({
                                styles: p(
                                    n.map(function (e) {
                                        return [e, t.styles[e] || {}];
                                    }),
                                ),
                                attributes: p(
                                    n.map(function (e) {
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
                        onFirstUpdate: r.onFirstUpdate,
                        placement: r.placement,
                        strategy: r.strategy,
                        modifiers: [].concat(r.modifiers, [u, { name: "applyStyles", enabled: !1 }]),
                    };
                    return eT()(i.current, e) ? i.current || e : ((i.current = e), e);
                },
                [r.onFirstUpdate, r.placement, r.strategy, r.modifiers, u],
            ),
            d = l.useRef();
        return (
            E(
                function () {
                    d.current && d.current.setOptions(c);
                },
                [c],
            ),
            E(
                function () {
                    if (null != e && null != t) {
                        var i = (n.createPopper || eA)(e, t, c);
                        return (
                            (d.current = i),
                            function () {
                                i.destroy(), (d.current = null);
                            }
                        );
                    }
                },
                [e, t, n.createPopper],
            ),
            {
                state: d.current ? d.current.state : null,
                styles: a.styles,
                attributes: a.attributes,
                update: d.current ? d.current.update : null,
                forceUpdate: d.current ? d.current.forceUpdate : null,
            }
        );
    },
    eN = function () {},
    ev = function () {
        return Promise.resolve(null);
    },
    eC = [];
function eR(e) {
    var t = e.placement,
        n = void 0 === t ? "bottom" : t,
        i = e.strategy,
        r = void 0 === i ? "absolute" : i,
        s = e.modifiers,
        a = void 0 === s ? eC : s,
        o = e.referenceElement,
        c = e.onFirstUpdate,
        d = e.innerRef,
        h = e.children,
        p = l.useContext(u),
        E = l.useState(null),
        m = E[0],
        g = E[1],
        A = l.useState(null),
        I = A[0],
        T = A[1];
    l.useEffect(
        function () {
            f(d, m);
        },
        [d, m],
    );
    var S = ey(
            o || p,
            m,
            l.useMemo(
                function () {
                    return {
                        placement: n,
                        strategy: r,
                        onFirstUpdate: c,
                        modifiers: [].concat(a, [{ name: "arrow", enabled: null != I, options: { element: I } }]),
                    };
                },
                [n, r, c, a, I],
            ),
        ),
        y = S.state,
        N = S.styles,
        v = S.forceUpdate,
        C = S.update,
        R = l.useMemo(
            function () {
                return {
                    ref: g,
                    style: N.popper,
                    placement: y ? y.placement : n,
                    hasPopperEscaped: y && y.modifiersData.hide ? y.modifiersData.hide.hasPopperEscaped : null,
                    isReferenceHidden: y && y.modifiersData.hide ? y.modifiersData.hide.isReferenceHidden : null,
                    arrowProps: { style: N.arrow, ref: T },
                    forceUpdate: v || eN,
                    update: C || ev,
                };
            },
            [g, T, n, y, N, C, v],
        );
    return _(h)(R);
}
var eO = n(916822),
    eb = n.n(eO);
function eD(e) {
    var t = e.children,
        n = e.innerRef,
        i = l.useContext(c),
        r = l.useCallback(
            function (e) {
                f(n, e), h(i, e);
            },
            [n, i],
        );
    return (
        l.useEffect(function () {
            return function () {
                return f(n, null);
            };
        }, []),
        l.useEffect(
            function () {
                eb()(!!i, "`Reference` should not be used outside of a `Manager` component.");
            },
            [i],
        ),
        _(t)({ ref: r })
    );
}
