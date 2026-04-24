"use strict";
n.d(t, { rL: () => te, f7: () => tg, RV: () => td, o$: () => t6, A: () => t5, Fo: () => tX, zL: () => t1 });
var r,
    i,
    a,
    u = n(877413),
    o = n.n(u),
    s = n(805353),
    l = n.n(s),
    d = n(879378),
    c = n.n(d),
    f = n(64700);
function h(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function p(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function m(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n,
            r = getComputedStyle(e, null);
        return (
            p(r.overflowY, t) ||
            p(r.overflowX, t) ||
            (!!(n = (function (e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement;
                } catch (e) {
                    return null;
                }
            })(e)) &&
                (n.clientHeight < e.scrollHeight || n.clientWidth < e.scrollWidth))
        );
    }
    return !1;
}
function _(e, t, n, r, i, a, u, o) {
    return (a < e && u > t) || (a > e && u < t)
        ? 0
        : (a <= e && o <= n) || (u >= t && o >= n)
          ? a - e - r
          : (u > t && o < n) || (a < e && o > n)
            ? u - t + i
            : 0;
}
var v = function (e, t) {
    var n = window,
        r = t.scrollMode,
        i = t.block,
        a = t.inline,
        u = t.boundary,
        o = t.skipOverflowHiddenElements,
        s =
            "function" == typeof u
                ? u
                : function (e) {
                      return e !== u;
                  };
    if (!h(e)) throw TypeError("Invalid target");
    for (var l, d, c = document.scrollingElement || document.documentElement, f = [], p = e; h(p) && s(p); ) {
        if ((p = null == (d = (l = p).parentElement) ? l.getRootNode().host || null : d) === c) {
            f.push(p);
            break;
        }
        (null != p && p === document.body && m(p) && !m(document.documentElement)) ||
            (null != p && m(p, o) && f.push(p));
    }
    for (
        var v = n.visualViewport ? n.visualViewport.width : innerWidth,
            g = n.visualViewport ? n.visualViewport.height : innerHeight,
            y = window.scrollX || pageXOffset,
            D = window.scrollY || pageYOffset,
            b = e.getBoundingClientRect(),
            C = b.height,
            E = b.width,
            w = b.top,
            A = b.right,
            B = b.bottom,
            F = b.left,
            V = "start" === i || "nearest" === i ? w : "end" === i ? B : w + C / 2,
            T = "center" === a ? F + E / 2 : "end" === a ? A : F,
            k = [],
            x = 0;
        x < f.length;
        x++
    ) {
        var P = f[x],
            O = P.getBoundingClientRect(),
            S = O.height,
            R = O.width,
            M = O.top,
            N = O.right,
            L = O.bottom,
            I = O.left;
        if ("if-needed" === r && w >= 0 && F >= 0 && B <= g && A <= v && w >= M && B <= L && F >= I && A <= N) break;
        var j = getComputedStyle(P),
            G = parseInt(j.borderLeftWidth, 10),
            W = parseInt(j.borderTopWidth, 10),
            K = parseInt(j.borderRightWidth, 10),
            U = parseInt(j.borderBottomWidth, 10),
            H = 0,
            q = 0,
            z = "offsetWidth" in P ? P.offsetWidth - P.clientWidth - G - K : 0,
            X = "offsetHeight" in P ? P.offsetHeight - P.clientHeight - W - U : 0,
            Q = "offsetWidth" in P ? (0 === P.offsetWidth ? 0 : R / P.offsetWidth) : 0,
            Z = "offsetHeight" in P ? (0 === P.offsetHeight ? 0 : S / P.offsetHeight) : 0;
        if (c === P)
            (H =
                "start" === i
                    ? V
                    : "end" === i
                      ? V - g
                      : "nearest" === i
                        ? _(D, D + g, g, W, U, D + V, D + V + C, C)
                        : V - g / 2),
                (q =
                    "start" === a
                        ? T
                        : "center" === a
                          ? T - v / 2
                          : "end" === a
                            ? T - v
                            : _(y, y + v, v, G, K, y + T, y + T + E, E)),
                (H = Math.max(0, H + D)),
                (q = Math.max(0, q + y));
        else {
            (H =
                "start" === i
                    ? V - M - W
                    : "end" === i
                      ? V - L + U + X
                      : "nearest" === i
                        ? _(M, L, S, W, U + X, V, V + C, C)
                        : V - (M + S / 2) + X / 2),
                (q =
                    "start" === a
                        ? T - I - G
                        : "center" === a
                          ? T - (I + R / 2) + z / 2
                          : "end" === a
                            ? T - N + K + z
                            : _(I, N, R, G, K + z, T, T + E, E));
            var Y = P.scrollLeft,
                J = P.scrollTop;
            (V += J - (H = Math.max(0, Math.min(J + H / Z, P.scrollHeight - S / Z + X)))),
                (T += Y - (q = Math.max(0, Math.min(Y + q / Q, P.scrollWidth - R / Q + z))));
        }
        k.push({ el: P, top: H, left: q });
    }
    return k;
};
function g(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let y = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (g(t) && "function" == typeof t.behavior) return t.behavior(n ? v(e, t) : []);
    if (n) {
        var r,
            i,
            a,
            u = !1 === t ? { block: "end", inline: "nearest" } : g(t) ? t : { block: "start", inline: "nearest" };
        return (
            (r = v(e, u)),
            void 0 === (i = u.behavior) && (i = "auto"),
            (a = "scrollBehavior" in document.body.style),
            void r.forEach(function (e) {
                var t = e.el,
                    n = e.top,
                    r = e.left;
                t.scroll && a ? t.scroll({ top: n, left: r, behavior: i }) : ((t.scrollTop = n), (t.scrollLeft = r));
            })
        );
    }
};
var D = n(154283),
    b = [],
    C = "ResizeObserver loop completed with undelivered notifications.",
    E = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: C }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = C)),
            window.dispatchEvent(e);
    };
((r = i || (i = {})).BORDER_BOX = "border-box"),
    (r.CONTENT_BOX = "content-box"),
    (r.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
var w = function (e) {
        return Object.freeze(e);
    },
    A = function (e, t) {
        (this.inlineSize = e), (this.blockSize = t), w(this);
    },
    B = (function () {
        function e(e, t, n, r) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = n),
                (this.height = r),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                w(this)
            );
        }
        return (
            (e.prototype.toJSON = function () {
                return {
                    x: this.x,
                    y: this.y,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    width: this.width,
                    height: this.height,
                };
            }),
            (e.fromRect = function (t) {
                return new e(t.x, t.y, t.width, t.height);
            }),
            e
        );
    })(),
    F = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    V = function (e) {
        if (F(e)) {
            var t = e.getBBox(),
                n = t.width,
                r = t.height;
            return !n && !r;
        }
        var i = e.offsetWidth,
            a = e.offsetHeight;
        return !(i || a || e.getClientRects().length);
    },
    T = function (e) {
        if (e instanceof Element) return !0;
        var t,
            n = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(n && e instanceof n.Element);
    },
    k = function (e) {
        switch (e.tagName) {
            case "INPUT":
                if ("image" !== e.type) break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
                return !0;
        }
        return !1;
    },
    x = "u" > typeof window ? window : {},
    P = new WeakMap(),
    O = /auto|scroll/,
    S = /^tb|vertical/,
    R = /msie|trident/i.test(x.navigator && x.navigator.userAgent),
    M = function (e) {
        return parseFloat(e || "0");
    },
    N = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new A((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    L = w({ devicePixelContentBoxSize: N(), borderBoxSize: N(), contentBoxSize: N(), contentRect: new B(0, 0, 0, 0) }),
    I = function (e, t) {
        if ((void 0 === t && (t = !1), P.has(e) && !t)) return P.get(e);
        if (V(e)) return P.set(e, L), L;
        var n = getComputedStyle(e),
            r = F(e) && e.ownerSVGElement && e.getBBox(),
            i = !R && "border-box" === n.boxSizing,
            a = S.test(n.writingMode || ""),
            u = !r && O.test(n.overflowY || ""),
            o = !r && O.test(n.overflowX || ""),
            s = r ? 0 : M(n.paddingTop),
            l = r ? 0 : M(n.paddingRight),
            d = r ? 0 : M(n.paddingBottom),
            c = r ? 0 : M(n.paddingLeft),
            f = r ? 0 : M(n.borderTopWidth),
            h = r ? 0 : M(n.borderRightWidth),
            p = r ? 0 : M(n.borderBottomWidth),
            m = r ? 0 : M(n.borderLeftWidth),
            _ = c + l,
            v = s + d,
            g = m + h,
            y = f + p,
            D = o ? e.offsetHeight - y - e.clientHeight : 0,
            b = u ? e.offsetWidth - g - e.clientWidth : 0,
            C = r ? r.width : M(n.width) - (i ? _ + g : 0) - b,
            E = r ? r.height : M(n.height) - (i ? v + y : 0) - D,
            A = C + _ + b + g,
            T = E + v + D + y,
            k = w({
                devicePixelContentBoxSize: N(Math.round(C * devicePixelRatio), Math.round(E * devicePixelRatio), a),
                borderBoxSize: N(A, T, a),
                contentBoxSize: N(C, E, a),
                contentRect: new B(c, s, C, E),
            });
        return P.set(e, k), k;
    },
    j = function (e, t, n) {
        var r = I(e, n),
            a = r.borderBoxSize,
            u = r.contentBoxSize,
            o = r.devicePixelContentBoxSize;
        switch (t) {
            case i.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case i.BORDER_BOX:
                return a;
            default:
                return u;
        }
    },
    G = function (e) {
        var t = I(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = w([t.borderBoxSize])),
            (this.contentBoxSize = w([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = w([t.devicePixelContentBoxSize]));
    },
    W = function (e) {
        if (V(e)) return 1 / 0;
        for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
        return t;
    },
    K = function () {
        var e = 1 / 0,
            t = [];
        b.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new G(t.target),
                        i = W(t.target);
                    r.push(n), (t.lastReportedSize = j(t.target, t.observedBox)), i < e && (e = i);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, r, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0; n < t.length; n++) (0, t[n])();
        return e;
    },
    U = function (e) {
        b.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (n) {
                    n.isActive() && (W(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                });
        });
    },
    H = function () {
        var e = 0;
        for (
            U(0);
            b.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            U((e = K()));
        return (
            b.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && E(),
            e > 0
        );
    },
    q = [],
    z = function (e) {
        if (!a) {
            var t = 0,
                n = document.createTextNode("");
            new MutationObserver(function () {
                return q.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(n, { characterData: !0 }),
                (a = function () {
                    n.textContent = "".concat(t ? t-- : t++);
                });
        }
        q.push(e), a();
    },
    X = function (e) {
        z(function () {
            requestAnimationFrame(e);
        });
    },
    Q = 0,
    Z = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    Y = [
        "resize",
        "load",
        "transitionend",
        "animationend",
        "animationstart",
        "animationiteration",
        "keyup",
        "keydown",
        "mouseup",
        "mousedown",
        "mouseover",
        "mouseout",
        "blur",
        "focus",
    ],
    J = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    $ = !1,
    ee = new ((function () {
        function e() {
            var e = this;
            (this.stopped = !0),
                (this.listener = function () {
                    return e.schedule();
                });
        }
        return (
            (e.prototype.run = function (e) {
                var t = this;
                if ((void 0 === e && (e = 250), !$)) {
                    $ = !0;
                    var n = J(e);
                    X(function () {
                        var r = !1;
                        try {
                            r = H();
                        } finally {
                            if ((($ = !1), (e = n - J()), !Q)) return;
                            r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                        }
                    });
                }
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
                var e = this,
                    t = function () {
                        return e.observer && e.observer.observe(document.body, Z);
                    };
                document.body ? t() : x.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    Y.forEach(function (t) {
                        return x.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    Y.forEach(function (t) {
                        return x.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    et = function (e) {
        !Q && e > 0 && ee.start(), (Q += e) || ee.stop();
    },
    en = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || i.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = j(this.target, this.observedBox, !0);
                return (
                    F((e = this.target)) ||
                        k(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    er = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    ei = new WeakMap(),
    ea = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    eu = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new er(e, t);
                ei.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var r = ei.get(e),
                    i = 0 === r.observationTargets.length;
                0 > ea(r.observationTargets, t) &&
                    (i && b.push(r), r.observationTargets.push(new en(t, n && n.box)), et(1), ee.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = ei.get(e),
                    r = ea(n.observationTargets, t),
                    i = 1 === n.observationTargets.length;
                r >= 0 && (i && b.splice(b.indexOf(n), 1), n.observationTargets.splice(r, 1), et(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = ei.get(e);
                n.observationTargets.slice().forEach(function (n) {
                    return t.unobserve(e, n.target);
                }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
        );
    })(),
    eo = (function () {
        function e(e) {
            if (0 == arguments.length)
                throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof e)
                throw TypeError(
                    "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
                );
            eu.connect(this, e);
        }
        return (
            (e.prototype.observe = function (e, t) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!T(e))
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                eu.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!T(e))
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                eu.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                eu.disconnect(this);
            }),
            (e.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
            }),
            e
        );
    })(),
    es = n(294106),
    el = n(340287);
function ed(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function ec(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
var ef = 0;
class eh {
    constructor() {
        this.id = "".concat(ef++);
    }
}
var ep = new WeakMap(),
    em = new WeakMap(),
    e_ = new WeakMap(),
    ev = new WeakMap(),
    eg = new WeakMap(),
    ey = new WeakMap(),
    eD = new WeakMap(),
    eb = new WeakMap(),
    eC = new WeakMap(),
    eE = new WeakMap(),
    ew = new WeakMap(),
    eA = new WeakMap(),
    eB = new WeakMap(),
    eF = new WeakMap(),
    eV = new WeakMap(),
    eT = new WeakMap(),
    ek = new WeakMap(),
    ex = new WeakMap(),
    eP = new WeakMap(),
    eO = new WeakMap(),
    eS = new WeakMap(),
    eR = Symbol("placeholder"),
    eM = Symbol("mark-placeholder"),
    eN = globalThis.Text,
    eL = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    eI = (e) => eG(e) && 8 === e.nodeType,
    ej = (e) => eG(e) && 1 === e.nodeType,
    eG = (e) => {
        var t = eL(e);
        return !!t && e instanceof t.Node;
    },
    eW = (e) => {
        var t = e && e.anchorNode && eL(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    eK = (e) => eG(e) && 3 === e.nodeType,
    eU = (e, t, n) => {
        for (
            var { childNodes: r } = e, i = r[t], a = t, u = !1, o = !1;
            (eI(i) ||
                (ej(i) && 0 === i.childNodes.length) ||
                (ej(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!u || !o);
        ) {
            if (a >= r.length) {
                (u = !0), (a = t - 1), (n = "backward");
                continue;
            }
            if (a < 0) {
                (o = !0), (a = t + 1), (n = "forward");
                continue;
            }
            (i = r[a]), (t = a), (a += "forward" === n ? 1 : -1);
        }
        return [i, t];
    },
    eH = (e, t, n) => {
        var [r] = eU(e, t, n);
        return r;
    },
    eq = (e) => {
        var t = "";
        if (eK(e) && e.nodeValue) return e.nodeValue;
        if (ej(e)) {
            for (var n of Array.from(e.childNodes)) t += eq(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    ez = /data-slate-fragment="(.+?)"/m,
    eX = (e, t, n) => {
        var { target: r } = t;
        if (ej(r) && r.matches('[contentEditable="false"]')) return !1;
        var { document: i } = te.getWindow(e);
        if (i.contains(r)) return te.hasDOMNode(e, r, { editable: !0 });
        var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
        });
        return !!a && a !== t && eX(e, a, n);
    },
    eQ = parseInt(f.version.split(".")[0], 10) >= 17,
    eZ =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    eY = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eJ = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    e$ = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    e0 = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    e1 = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    e2 = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    e3 = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    e5 = eJ && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    e8 =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    e7 = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    e4 = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    e9 = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    e6 =
        (!e3 || !e5) &&
        !e1 &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    te = {
        isComposing: (e) => !!eA.get(e),
        getWindow(e) {
            var t = e_.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = eb.get(t);
            return n || ((n = new eh()), eb.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], r = t; ; ) {
                var i = em.get(r);
                if (null == i)
                    if (D.KE.isEditor(r)) return n;
                    else break;
                var a = ep.get(r);
                if (null == a) break;
                n.unshift(a), (r = i);
            }
            throw Error("Unable to find the path for Slate node: ".concat(D.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = te.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!ew.get(e),
        isReadOnly: (e) => !!eE.get(e),
        blur(e) {
            var t = te.toDOMNode(e, e),
                n = te.findDocumentOrShadowRoot(e);
            ew.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = te.toDOMNode(e, e),
                n = te.findDocumentOrShadowRoot(e);
            ew.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = te.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && D.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: i = !1 } = r,
                a = te.toDOMNode(e, e);
            try {
                n = ej(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!n &&
                n.closest("[data-slate-editor]") === a &&
                (!i ||
                    !!n.isContentEditable ||
                    ("boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === a) ||
                    !!n.getAttribute("data-slate-zero-width"))
            );
        },
        insertData(e, t) {
            e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, n) {
            e.setFragmentData(t, n);
        },
        toDOMNode(e, t) {
            var n = eC.get(e),
                r = D.KE.isEditor(t) ? ev.get(e) : null == n ? void 0 : n.get(te.findKey(e, t));
            if (!r) throw Error("Cannot resolve a DOM node from Slate node: ".concat(D.h6.stringify(t)));
            return r;
        },
        toDOMPoint(e, t) {
            var [n] = D.KE.node(e, t.path),
                r = te.toDOMNode(e, n);
            D.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var i = Array.from(r.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), a = 0, u = 0;
                u < i.length;
                u++
            ) {
                var o = i[u],
                    s = o.childNodes[0];
                if (null != s && null != s.textContent) {
                    var { length: l } = s.textContent,
                        d = o.getAttribute("data-slate-length"),
                        c = a + (null == d ? l : parseInt(d, 10)),
                        f = i[u + 1];
                    if (t.offset === c && null != f && f.hasAttribute("data-slate-mark-placeholder")) {
                        var h,
                            p,
                            m = f.childNodes[0];
                        h = [m instanceof eN ? m : f, null != (p = f.textContent) && p.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= c) {
                        h = [s, Math.min(l, Math.max(0, t.offset - a))];
                        break;
                    }
                    a = c;
                }
            }
            if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(D.h6.stringify(t)));
            return h;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
                i = D.Q6.isBackward(t),
                a = te.toDOMPoint(e, n),
                u = D.Q6.isCollapsed(t) ? a : te.toDOMPoint(e, r),
                o = te.getWindow(e).document.createRange(),
                [s, l] = i ? u : a,
                [d, c] = i ? a : u,
                f = !!(ej(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"),
                h = !!(ej(d) ? d : d.parentElement).getAttribute("data-slate-zero-width");
            return o.setStart(s, f ? 1 : l), o.setEnd(d, h ? 1 : c), o;
        },
        toSlateNode(e, t) {
            var n = ej(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var r = n ? ey.get(n) : null;
            if (!r) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return r;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var u = te.toSlateNode(e, t.target),
                o = te.findPath(e, u);
            if (D.Hg.isElement(u) && D.KE.isVoid(e, u)) {
                var s = a.getBoundingClientRect(),
                    l = e.isInline(u) ? r - s.left < s.left + s.width - r : i - s.top < s.top + s.height - i,
                    d = D.KE.point(e, o, { edge: l ? "start" : "end" }),
                    c = l ? D.KE.before(e, d) : D.KE.after(e, d);
                if (c) return D.KE.range(e, c);
            }
            var { document: f } = te.getWindow(e);
            if (f.caretRangeFromPoint) n = f.caretRangeFromPoint(r, i);
            else {
                var h = f.caretPositionFromPoint(r, i);
                h && ((n = f.createRange()).setStart(h.offsetNode, h.offset), n.setEnd(h.offsetNode, h.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return te.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
                [a, u] = r
                    ? t
                    : ((e) => {
                          var [t, n] = e;
                          if (ej(t) && t.childNodes.length) {
                              var r = n === t.childNodes.length,
                                  i = r ? n - 1 : n;
                              for (
                                  [t, i] = eU(t, i, r ? "backward" : "forward"), r = i < n;
                                  ej(t) && t.childNodes.length;
                              ) {
                                  var a = r ? t.childNodes.length - 1 : 0;
                                  t = eH(t, a, r ? "backward" : "forward");
                              }
                              n = r && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, n];
                      })(t),
                o = a.parentNode,
                s = null,
                l = 0;
            if (o) {
                var d,
                    c,
                    f = te.toDOMNode(e, e),
                    h = o.closest('[data-slate-void="true"]'),
                    p = h && f.contains(h) ? h : null,
                    m = o.closest("[data-slate-leaf]"),
                    _ = null;
                if (m) {
                    if ((s = m.closest('[data-slate-node="text"]'))) {
                        var v = te.getWindow(e).document.createRange();
                        v.setStart(s, 0), v.setEnd(a, u);
                        var g = v.cloneContents();
                        [
                            ...Array.prototype.slice.call(g.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(g.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                eJ &&
                                !r &&
                                e.hasAttribute("data-slate-zero-width") &&
                                e.textContent.length > 0 &&
                                "\uFEFF" !== e.textContext
                            ) {
                                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (l = g.textContent.length),
                            (_ = s);
                    }
                } else if (p) {
                    for (var y = p.querySelectorAll("[data-slate-leaf]"), b = 0; b < y.length; b++) {
                        var C = y[b];
                        if (te.hasDOMNode(e, C)) {
                            m = C;
                            break;
                        }
                    }
                    m
                        ? ((s = m.closest('[data-slate-node="text"]')),
                          (l = (_ = m).textContent.length),
                          _.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              l -= e.textContent.length;
                          }))
                        : (l = 1);
                }
                _ &&
                    l === _.textContent.length &&
                    eJ &&
                    "z" === _.getAttribute("data-slate-zero-width") &&
                    null != (d = _.textContent) &&
                    d.startsWith("\uFEFF") &&
                    (o.hasAttribute("data-slate-zero-width") ||
                        (e$ && null != (c = _.textContent) && c.endsWith("\n\n"))) &&
                    l--;
            }
            if (eJ && !s && !r) {
                var E = o.hasAttribute("data-slate-node") ? o : o.closest("[data-slate-node]");
                if (E && te.hasDOMNode(e, E, { editable: !0 })) {
                    var w = te.toSlateNode(e, E),
                        { path: A, offset: B } = D.KE.start(e, te.findPath(e, w));
                    return E.querySelector("[data-slate-leaf]") || (B = u), { path: A, offset: B };
                }
            }
            if (!s) {
                if (i) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var F = te.toSlateNode(e, s);
            return { path: te.findPath(e, F), offset: l };
        },
        toSlateRange(e, t, n) {
            var r,
                i,
                a,
                u,
                o,
                s,
                { exactMatch: l, suppressThrow: d } = n;
            if (
                ((eW(t) ? t.anchorNode : t.startContainer) &&
                    (eW(t)
                        ? ((r = t.anchorNode),
                          (i = t.anchorOffset),
                          (a = t.focusNode),
                          (u = t.focusOffset),
                          (o =
                              e2 &&
                              ((e) => {
                                  for (var t = e && e.parentNode; t; ) {
                                      if ("[object ShadowRoot]" === t.toString()) return !0;
                                      t = t.parentNode;
                                  }
                                  return !1;
                              })(r)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((r = t.startContainer),
                          (i = t.startOffset),
                          (a = t.endContainer),
                          (u = t.endOffset),
                          (o = t.collapsed))),
                null == r || null == a || null == i || null == u)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in a &&
                "false" === a.getAttribute("contenteditable") &&
                ((a = r), (u = (null == (s = r.textContent) ? void 0 : s.length) || 0));
            var c = te.toSlatePoint(e, [r, i], { exactMatch: l, suppressThrow: d });
            if (!c) return null;
            var f = o ? c : te.toSlatePoint(e, [a, u], { exactMatch: l, suppressThrow: d });
            if (!f) return null;
            if (e$ && !o && r !== a) {
                var h = D.KE.isEnd(e, c, c.path),
                    p = D.KE.isStart(e, f, f.path);
                h && (c = D.KE.after(e, c) || c), p && (f = D.KE.before(e, f) || f);
            }
            var m = { anchor: c, focus: f };
            return (
                D.Q6.isExpanded(m) &&
                    D.Q6.isForward(m) &&
                    ej(a) &&
                    D.KE.void(e, { at: m.focus, mode: "highest" }) &&
                    (m = D.KE.unhangRange(e, m, { voids: !0 })),
                m
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return D.KE.hasPath(e, n.path) && D.KE.hasPath(e, r.path);
        },
        hasTarget: (e, t) => eG(t) && te.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => eG(t) && te.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => te.hasEditableTarget(e, t) || te.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (eE.get(e)) return !1;
            var n = te.hasTarget(e, t) && te.toSlateNode(e, t);
            return D.Hg.isElement(n) && D.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = eV.get(e)) || t();
        },
        androidPendingDiffs: (e) => ex.get(e),
    },
    tt = ["anchor", "focus"],
    tn = ["anchor", "focus"],
    tr = (e, t) => {
        var n = ec(e, tt),
            r = ec(t, tn);
        return (
            e[eR] === t[eR] &&
            Object.keys(n).length === Object.keys(r).length &&
            Object.keys(n).every((e) => r.hasOwnProperty(e) && n[e] === r[e])
        );
    },
    ti = e9 ? f.useLayoutEffect : f.useEffect,
    ta = (e) => {
        var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = td(),
            u = te.findPath(a, i),
            o = D.wA.parent(u),
            s = !0 === n[eM];
        return a.isVoid(r)
            ? f.createElement(ts, { length: D.bP.string(r).length })
            : "" !== n.text || r.children[r.children.length - 1] !== i || a.isInline(r) || "" !== D.KE.string(a, o)
              ? "" === n.text
                  ? f.createElement(ts, { isMarkPlaceholder: s })
                  : t && "\n" === n.text.slice(-1)
                    ? f.createElement(tu, { isTrailing: !0, text: n.text })
                    : f.createElement(tu, { text: n.text })
              : f.createElement(ts, { isLineBreak: !0, isMarkPlaceholder: s });
    },
    tu = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            r = (0, f.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [a] = (0, f.useState)(i);
        return (
            ti(() => {
                var e = i();
                r.current && r.current.textContent !== e && (r.current.textContent = e);
            }),
            f.createElement(to, { ref: r }, a)
        );
    },
    to = (0, f.memo)(
        (0, f.forwardRef)((e, t) => f.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    ts = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: r = !1 } = e,
            i = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            r && (i["data-slate-mark-placeholder"] = !0),
            f.createElement(
                "span",
                Object.assign({}, i),
                eJ && n ? null : "\uFEFF",
                n ? f.createElement("br", null) : null,
            )
        );
    },
    tl = (0, f.createContext)(null),
    td = () => {
        var e = (0, f.useContext)(tl);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    tc = f.memo(
        (e) => {
            var {
                    leaf: t,
                    isLast: n,
                    text: r,
                    parent: i,
                    renderPlaceholder: a,
                    renderLeaf: u = (e) => f.createElement(tf, Object.assign({}, e)),
                } = e,
                o = (0, f.useRef)(null),
                s = (0, f.useRef)(null),
                l = td(),
                d = (0, f.useRef)(null);
            (0, f.useEffect)(
                () => () => {
                    d.current && d.current.disconnect();
                },
                [],
            ),
                (0, f.useEffect)(() => {
                    var e = null == s ? void 0 : s.current;
                    if (
                        (e ? eg.set(l, e) : eg.delete(l),
                        d.current
                            ? (d.current.disconnect(), e && d.current.observe(e))
                            : e &&
                              ((d.current = new (window.ResizeObserver || eo)(() => {
                                  var e = eS.get(l);
                                  null == e || e();
                              })),
                              d.current.observe(e)),
                        !e && o.current)
                    ) {
                        var t = eS.get(l);
                        null == t || t();
                    }
                    return (
                        (o.current = s.current),
                        () => {
                            eg.delete(l);
                        }
                    );
                }, [s, t]);
            var c = f.createElement(ta, { isLast: n, leaf: t, parent: i, text: r });
            if (t[eR]) {
                var h = {
                    children: t.placeholder,
                    attributes: {
                        "data-slate-placeholder": !0,
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            width: "100%",
                            maxWidth: "100%",
                            display: "block",
                            opacity: "0.333",
                            userSelect: "none",
                            textDecoration: "none",
                        },
                        contentEditable: !1,
                        ref: s,
                    },
                };
                c = f.createElement(f.Fragment, null, a(h), c);
            }
            return u({ attributes: { "data-slate-leaf": !0 }, children: c, leaf: t, text: r });
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            D.EY.equals(t.leaf, e.leaf) &&
            t.leaf[eR] === e.leaf[eR],
    ),
    tf = (e) => {
        var { attributes: t, children: n } = e;
        return f.createElement("span", Object.assign({}, t), n);
    },
    th = f.memo(
        (e) => {
            for (
                var { decorations: t, isLast: n, parent: r, renderPlaceholder: i, renderLeaf: a, text: u } = e,
                    o = td(),
                    s = (0, f.useRef)(null),
                    l = D.EY.decorations(u, t),
                    d = te.findKey(o, u),
                    c = [],
                    h = 0;
                h < l.length;
                h++
            ) {
                var p = l[h];
                c.push(
                    f.createElement(tc, {
                        isLast: n && h === l.length - 1,
                        key: "".concat(d.id, "-").concat(h),
                        renderPlaceholder: i,
                        leaf: p,
                        text: u,
                        parent: r,
                        renderLeaf: a,
                    }),
                );
            }
            var m = (0, f.useCallback)(
                (e) => {
                    var t = eC.get(o);
                    e
                        ? (null == t || t.set(d, e), eD.set(u, e), ey.set(e, u))
                        : (null == t || t.delete(d), eD.delete(u), s.current && ey.delete(s.current)),
                        (s.current = e);
                },
                [s, o, d, u],
            );
            return f.createElement("span", { "data-slate-node": "text", ref: m }, c);
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = t[n];
                    if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !tr(r, i))
                        return !1;
                }
                return !0;
            })(t.decorations, e.decorations),
    ),
    tp = f.memo(
        (e) => {
            var {
                    decorations: t,
                    element: n,
                    renderElement: r = (e) => f.createElement(tm, Object.assign({}, e)),
                    renderPlaceholder: i,
                    renderLeaf: a,
                    selection: u,
                } = e,
                s = td(),
                l = tb(),
                d = s.isInline(n),
                c = te.findKey(s, n),
                h = (0, f.useCallback)(
                    (e) => {
                        var t = eC.get(s);
                        e
                            ? (null == t || t.set(c, e), eD.set(n, e), ey.set(e, n))
                            : (null == t || t.delete(c), eD.delete(n));
                    },
                    [s, c, n],
                ),
                p = ty({
                    decorations: t,
                    node: n,
                    renderElement: r,
                    renderPlaceholder: i,
                    renderLeaf: a,
                    selection: u,
                }),
                m = { "data-slate-node": "element", ref: h };
            if ((d && (m["data-slate-inline"] = !0), !d && D.KE.hasInlines(s, n))) {
                var _ = D.bP.string(n),
                    v = o()(_);
                "rtl" === v && (m.dir = v);
            }
            if (D.KE.isVoid(s, n)) {
                (m["data-slate-void"] = !0), !l && d && (m.contentEditable = !1);
                var [[g]] = D.bP.texts(n);
                (p = f.createElement(
                    d ? "span" : "div",
                    {
                        "data-slate-spacer": !0,
                        style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                    },
                    f.createElement(th, { renderPlaceholder: i, decorations: [], isLast: !1, parent: n, text: g }),
                )),
                    ep.set(g, 0),
                    em.set(g, n);
            }
            return r({ attributes: m, children: p, element: n, decorations: t });
        },
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        i = t[n];
                    if (!D.Q6.equals(r, i) || !tr(r, i)) return !1;
                }
                return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && D.Q6.equals(e.selection, t.selection))),
    ),
    tm = (e) => {
        var { attributes: t, children: n, element: r } = e,
            i = td().isInline(r) ? "span" : "div";
        return f.createElement(i, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    t_ = (0, f.createContext)(() => []),
    tv = (0, f.createContext)(!1),
    tg = () => (0, f.useContext)(tv),
    ty = (e) => {
        for (
            var { decorations: t, node: n, renderElement: r, renderPlaceholder: i, renderLeaf: a, selection: u } = e,
                o = (0, f.useContext)(t_),
                s = td(),
                l = te.findPath(s, n),
                d = [],
                c = D.Hg.isElement(n) && !s.isInline(n) && D.KE.hasInlines(s, n),
                h = 0;
            h < n.children.length;
            h++
        ) {
            var p = l.concat(h),
                m = n.children[h],
                _ = te.findKey(s, m),
                v = D.KE.range(s, p),
                g = u && D.Q6.intersection(v, u),
                y = o([m, p]);
            for (var b of t) {
                var C = D.Q6.intersection(b, v);
                C && y.push(C);
            }
            D.Hg.isElement(m)
                ? d.push(
                      f.createElement(
                          tv.Provider,
                          { key: "provider-".concat(_.id), value: !!g },
                          f.createElement(tp, {
                              decorations: y,
                              element: m,
                              key: _.id,
                              renderElement: r,
                              renderPlaceholder: i,
                              renderLeaf: a,
                              selection: g,
                          }),
                      ),
                  )
                : d.push(
                      f.createElement(th, {
                          decorations: y,
                          key: _.id,
                          isLast: c && h === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: i,
                          renderLeaf: a,
                          text: m,
                      }),
                  ),
                ep.set(m, h),
                em.set(m, n);
        }
        return d;
    },
    tD = (0, f.createContext)(!1),
    tb = () => (0, f.useContext)(tD),
    tC = (0, f.createContext)(null),
    tE = {
        bold: "mod+b",
        compose: ["down", "left", "right", "up", "backspace", "enter"],
        moveBackward: "left",
        moveForward: "right",
        moveWordBackward: "ctrl+left",
        moveWordForward: "ctrl+right",
        deleteBackward: "shift?+backspace",
        deleteForward: "shift?+delete",
        extendBackward: "shift+left",
        extendForward: "shift+right",
        italic: "mod+i",
        insertSoftBreak: "shift+enter",
        splitBlock: "enter",
        undo: "mod+z",
    },
    tw = {
        moveLineBackward: "opt+up",
        moveLineForward: "opt+down",
        moveWordBackward: "opt+left",
        moveWordForward: "opt+right",
        deleteBackward: ["ctrl+backspace", "ctrl+h"],
        deleteForward: ["ctrl+delete", "ctrl+d"],
        deleteLineBackward: "cmd+shift?+backspace",
        deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
        deleteWordBackward: "opt+shift?+backspace",
        deleteWordForward: "opt+shift?+delete",
        extendLineBackward: "opt+shift+up",
        extendLineForward: "opt+shift+down",
        redo: "cmd+shift+z",
        transposeCharacter: "ctrl+t",
    },
    tA = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    tB = (e) => {
        var t = tE[e],
            n = tw[e],
            r = tA[e],
            i = t && (0, es.isKeyHotkey)(t),
            a = n && (0, es.isKeyHotkey)(n),
            u = r && (0, es.isKeyHotkey)(r);
        return (e) => !!((i && i(e)) || (eY && a && a(e)) || (!eY && u && u(e)));
    },
    tF = {
        isBold: tB("bold"),
        isCompose: tB("compose"),
        isMoveBackward: tB("moveBackward"),
        isMoveForward: tB("moveForward"),
        isDeleteBackward: tB("deleteBackward"),
        isDeleteForward: tB("deleteForward"),
        isDeleteLineBackward: tB("deleteLineBackward"),
        isDeleteLineForward: tB("deleteLineForward"),
        isDeleteWordBackward: tB("deleteWordBackward"),
        isDeleteWordForward: tB("deleteWordForward"),
        isExtendBackward: tB("extendBackward"),
        isExtendForward: tB("extendForward"),
        isExtendLineBackward: tB("extendLineBackward"),
        isExtendLineForward: tB("extendLineForward"),
        isItalic: tB("italic"),
        isMoveLineBackward: tB("moveLineBackward"),
        isMoveLineForward: tB("moveLineForward"),
        isMoveWordBackward: tB("moveWordBackward"),
        isMoveWordForward: tB("moveWordForward"),
        isRedo: tB("redo"),
        isSoftBreak: tB("insertSoftBreak"),
        isSplitBlock: tB("splitBlock"),
        isTransposeCharacter: tB("transposeCharacter"),
        isUndo: tB("undo"),
    },
    tV = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class tT extends f.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, tV);
    }
    componentDidMount() {
        var e,
            t,
            { receivedUserInput: n } = this.props,
            r = this.context;
        (this.manager =
            ((e = []),
            {
                registerMutations: (t) => {
                    if (n.current) {
                        var i = t.filter((e) => eX(r, e, t));
                        e.push(...i);
                    }
                },
                restoreDOM: function () {
                    e.length > 0 &&
                        (e.reverse().forEach((e) => {
                            "characterData" !== e.type &&
                                (e.removedNodes.forEach((t) => {
                                    e.target.insertBefore(t, e.nextSibling);
                                }),
                                e.addedNodes.forEach((t) => {
                                    e.target.removeChild(t);
                                }));
                        }),
                        t());
                },
                clear: (t = () => {
                    e = [];
                }),
            })),
            (this.mutationObserver = new MutationObserver(this.manager.registerMutations)),
            this.observe();
    }
    getSnapshotBeforeUpdate() {
        var e,
            t,
            n,
            r,
            i = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
        return (
            null != i && i.length && (null == (r = this.manager) || r.registerMutations(i)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (n = this.manager) || n.restoreDOM(),
            null
        );
    }
    componentDidUpdate() {
        var e;
        null == (e = this.manager) || e.clear(), this.observe();
    }
    componentWillUnmount() {
        var e;
        null == (e = this.mutationObserver) || e.disconnect();
    }
    render() {
        return this.props.children;
    }
}
tT.contextType = tl;
var tk = eJ
    ? tT
    : (e) => {
          var { children: t } = e;
          return f.createElement(f.Fragment, null, t);
      };
function tx(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function tP(e, t) {
    var { start: n, end: r, text: i } = t,
        a = e.slice(n, r),
        u = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
        })(a, i),
        o = Math.min(a.length - u, i.length - u),
        s = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
                if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
            return r;
        })(a, i, o),
        l = { start: n + u, end: r - s, text: i.slice(u, i.length - s) };
    return l.start === l.end && 0 === l.text.length ? null : l;
}
function tO(e, t) {
    var { path: n, offset: r } = t;
    if (!D.KE.hasPath(e, n)) return null;
    var i = D.bP.get(e, n);
    if (!D.EY.isText(i)) return null;
    var a = D.KE.above(e, { match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t), at: n });
    if (!a) return null;
    for (; r > i.text.length; ) {
        var u = D.KE.next(e, { at: n, match: D.EY.isText });
        if (!u || !D.wA.isDescendant(u[1], a[1])) return null;
        (r -= i.text.length), (i = u[0]), (n = u[1]);
    }
    return { path: n, offset: r };
}
function tS(e, t) {
    var n = tO(e, t.anchor);
    if (!n) return null;
    if (D.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var r = tO(e, t.focus);
    return r ? { anchor: n, focus: r } : null;
}
function tR(e, t, n) {
    var r = ex.get(e),
        i =
            null == r
                ? void 0
                : r.find((e) => {
                      var { path: n } = e;
                      return D.wA.equals(n, t.path);
                  });
    if (!i || t.offset <= i.diff.start) return D.bR.transform(t, n, { affinity: "backward" });
    var { diff: a } = i;
    if (t.offset <= a.start + a.text.length) {
        var u = { path: t.path, offset: a.start },
            o = D.bR.transform(u, n, { affinity: "backward" });
        return o ? { path: o.path, offset: o.offset + t.offset - a.start } : null;
    }
    var s = { path: t.path, offset: t.offset - a.text.length + a.end - a.start },
        l = D.bR.transform(s, n, { affinity: "backward" });
    return l
        ? "split_node" === n.type && D.wA.equals(n.path, t.path) && s.offset < n.position && a.start < n.position
            ? l
            : { path: l.path, offset: l.offset + a.text.length - a.end + a.start }
        : null;
}
function tM(e, t, n) {
    var r = tR(e, t.anchor, n);
    if (!r) return null;
    if (D.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var i = tR(e, t.focus, n);
    return i ? { anchor: r, focus: i } : null;
}
function tN(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tL(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tN(Object(n), !0).forEach(function (t) {
                  ed(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tN(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tI = function () {},
    tj = ["node"];
function tG(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
var tW = { subtree: !0, childList: !0, characterData: !0 },
    tK = [
        "autoFocus",
        "decorate",
        "onDOMBeforeInput",
        "placeholder",
        "readOnly",
        "renderElement",
        "renderLeaf",
        "renderPlaceholder",
        "scrollSelectionIntoView",
        "style",
        "as",
        "disableDefaultStyles",
    ],
    tU = ["text"];
function tH(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function tq(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tH(Object(n), !0).forEach(function (t) {
                  ed(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tH(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tz = (e) => f.createElement(f.Fragment, null, ty(e)),
    tX = (e) => {
        var t,
            n,
            r,
            i,
            a,
            u,
            s = (0, f.useCallback)((e) => f.createElement(tQ, Object.assign({}, e)), []),
            {
                autoFocus: d,
                decorate: h = tZ,
                onDOMBeforeInput: p,
                placeholder: m,
                readOnly: _ = !1,
                renderElement: v,
                renderLeaf: g,
                renderPlaceholder: y = s,
                scrollSelectionIntoView: b = tY,
                style: C = {},
                as: E = "div",
                disableDefaultStyles: w = !1,
            } = e,
            A = ec(e, tK),
            B = (() => {
                var e = (0, f.useContext)(tC);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [F, V] = (0, f.useState)(!1),
            T = (0, f.useRef)(null),
            k = (0, f.useRef)([]),
            { onUserInput: x, receivedUserInput: P } =
                ((t = td()),
                (n = (0, f.useRef)(!1)),
                (r = (0, f.useRef)(0)),
                (i = (0, f.useCallback)(() => {
                    if (!n.current) {
                        n.current = !0;
                        var e = te.getWindow(t);
                        e.cancelAnimationFrame(r.current),
                            (r.current = e.requestAnimationFrame(() => {
                                n.current = !1;
                            }));
                    }
                }, [])),
                (0, f.useEffect)(() => () => cancelAnimationFrame(r.current), []),
                { receivedUserInput: n, onUserInput: i }),
            [, O] = (0, f.useReducer)((e) => e + 1, 0);
        eS.set(B, O), eE.set(B, _);
        var S = (0, f.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, f.useLayoutEffect)(
            () => () => {
                null == S || (null != S.latestElement && (S.latestElement.remove(), (S.latestElement = null)));
            },
            [],
        ),
            (0, f.useEffect)(() => {
                T.current && d && T.current.focus();
            }, [d]);
        var R = (0, f.useCallback)(
                c()(() => {
                    if (
                        (eJ || !te.isComposing(B)) &&
                        (!S.isUpdatingSelection || (null != N && N.isFlushing())) &&
                        !S.isDraggingInternally
                    ) {
                        var e = te.findDocumentOrShadowRoot(B),
                            { activeElement: t } = e,
                            n = te.toDOMNode(B, B),
                            r = e.getSelection();
                        if ((t === n ? ((S.latestElement = t), ew.set(B, !0)) : ew.delete(B), !r))
                            return D.gB.deselect(B);
                        var { anchorNode: i, focusNode: a } = r,
                            u = te.hasEditableTarget(B, i) || te.isTargetInsideNonReadonlyVoid(B, i),
                            o = te.hasEditableTarget(B, a) || te.isTargetInsideNonReadonlyVoid(B, a);
                        if (u && o) {
                            var s = te.toSlateRange(B, r, { exactMatch: !1, suppressThrow: !0 });
                            s &&
                                (te.isComposing(B) ||
                                (null != N && N.hasPendingChanges()) ||
                                (null != N && N.isFlushing())
                                    ? null == N || N.handleUserSelect(s)
                                    : D.gB.select(B, s));
                        }
                        !_ || (u && o) || D.gB.deselect(B);
                    }
                }, 100),
                [_],
            ),
            M = (0, f.useMemo)(() => l()(R, 0), [R]),
            N = (function (e) {
                var t,
                    { node: n } = e,
                    r = ec(e, tj);
                if (!eJ) return null;
                var i = td(),
                    a =
                        ((t = (0, f.useRef)(!1)),
                        (0, f.useEffect)(
                            () => (
                                (t.current = !0),
                                () => {
                                    t.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.current),
                    [u] = (0, f.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: r } = e,
                                i = !1,
                                a = null,
                                u = null,
                                o = null,
                                s = 0,
                                l = !1,
                                d = () => {
                                    var e = eO.get(t);
                                    if ((eO.delete(t), e)) {
                                        var { selection: n } = t,
                                            r = tS(t, e);
                                        !r || (n && D.Q6.equals(r, n)) || D.gB.select(t, r);
                                    }
                                },
                                c = () => {
                                    if (
                                        (u && (clearTimeout(u), (u = null)),
                                        o && (clearTimeout(o), (o = null)),
                                        !_() && !m())
                                    )
                                        return void d();
                                    i || ((i = !0), setTimeout(() => (i = !1))), m() && (i = "action");
                                    var e = t.selection && D.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    ek.set(t, t.marks), tI("flush", eP.get(t), ex.get(t));
                                    for (var a = _(); (s = null == (c = ex.get(t)) ? void 0 : c[0]); ) {
                                        var s,
                                            c,
                                            f,
                                            h = eT.get(t);
                                        void 0 !== h && (eT.delete(t), (t.marks = h)), h && !1 === l && (l = null);
                                        var p = (function (e) {
                                            var { path: t, diff: n } = e;
                                            return {
                                                anchor: { path: t, offset: n.start },
                                                focus: { path: t, offset: n.end },
                                            };
                                        })(s);
                                        (t.selection && D.Q6.equals(t.selection, p)) || D.gB.select(t, p),
                                            s.diff.text ? D.KE.insertText(t, s.diff.text) : D.KE.deleteFragment(t),
                                            ex.set(
                                                t,
                                                null == (f = ex.get(t))
                                                    ? void 0
                                                    : f.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== s.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: n, diff: r } = t;
                                                if (!D.KE.hasPath(e, n)) return !1;
                                                var i = D.bP.get(e, n);
                                                if (!D.EY.isText(i)) return !1;
                                                if (r.start !== i.text.length || 0 === r.text.length)
                                                    return i.text.slice(r.start, r.start + r.text.length) === r.text;
                                                var a = D.wA.next(n);
                                                if (!D.KE.hasPath(e, a)) return !1;
                                                var u = D.bP.get(e, a);
                                                return D.EY.isText(u) && u.text.startsWith(r.text);
                                            })(t, s) &&
                                                ((a = !1),
                                                eP.delete(t),
                                                ek.delete(t),
                                                (i = "action"),
                                                eO.delete(t),
                                                n.cancel(),
                                                r.cancel(),
                                                null == e || e.unref());
                                    }
                                    var v = null == e ? void 0 : e.unref();
                                    if (
                                        (!v ||
                                            eO.get(t) ||
                                            (t.selection && D.Q6.equals(v, t.selection)) ||
                                            D.gB.select(t, v),
                                        m())
                                    )
                                        return void (() => {
                                            var e = eP.get(t);
                                            if ((eP.delete(t), e)) {
                                                if (e.at) {
                                                    var n = D.bR.isPoint(e.at) ? tO(t, e.at) : tS(t, e.at);
                                                    if (!n) return;
                                                    var r = D.KE.range(t, n);
                                                    (t.selection && D.Q6.equals(t.selection, r)) || D.gB.select(t, n);
                                                }
                                                e.run();
                                            }
                                        })();
                                    a && n(), n.flush(), r.flush(), d();
                                    var g = ek.get(t);
                                    ek.delete(t), void 0 !== g && ((t.marks = g), t.onChange());
                                },
                                f = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = eg.get(t);
                                    if (n) {
                                        if (_() || e) {
                                            n.style.display = "none";
                                            return;
                                        }
                                        n.style.removeProperty("display");
                                    }
                                },
                                h = (e, n) => {
                                    var r,
                                        i,
                                        a,
                                        u,
                                        o,
                                        l,
                                        d,
                                        c,
                                        h = null != (c = ex.get(t)) ? c : [];
                                    ex.set(t, h);
                                    var p = D.bP.leaf(t, e),
                                        m = h.findIndex((t) => D.wA.equals(t.path, e));
                                    if (m < 0) {
                                        tP(p.text, n) && h.push({ path: e, diff: n, id: s++ }), f();
                                        return;
                                    }
                                    var _ =
                                        ((r = p.text),
                                        (i = h[m].diff),
                                        (a = Math.min(i.start, n.start)),
                                        (u = Math.max(0, Math.min(i.start + i.text.length, n.end) - n.start)),
                                        (o = tx(r, i, n)),
                                        (l = Math.max(
                                            n.start + n.text.length,
                                            i.start +
                                                i.text.length +
                                                (i.start + i.text.length > n.start ? n.text.length : 0) -
                                                u,
                                        )),
                                        (d = o.slice(a, l)),
                                        tP(r, {
                                            start: a,
                                            end: Math.max(i.end, n.end - i.text.length + (i.end - i.start)),
                                            text: d,
                                        }));
                                    if (!_) {
                                        h.splice(m, 1), f();
                                        return;
                                    }
                                    h[m] = tL(tL({}, h[m]), {}, { diff: _ });
                                },
                                p = function (e) {
                                    var { at: i } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (l = !1),
                                        eO.delete(t),
                                        n.cancel(),
                                        r.cancel(),
                                        m() && c(),
                                        eP.set(t, { at: i, run: e }),
                                        (o = setTimeout(c));
                                },
                                m = () => !!eP.get(t),
                                _ = () => {
                                    var e;
                                    return !!(null != (e = ex.get(t)) && e.length);
                                },
                                v = (e) => {
                                    eO.set(t, e), u && (clearTimeout(u), (u = null));
                                    var { selection: n } = t;
                                    if (e) {
                                        var r = !n || !D.wA.equals(n.anchor.path, e.anchor.path),
                                            i =
                                                !n ||
                                                !D.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        ((r && l) || i) && (l = !1), (r || _()) && (u = setTimeout(c, 200));
                                    }
                                },
                                g = () => {
                                    m() || (o = setTimeout(c));
                                };
                            return {
                                flush: c,
                                scheduleFlush: g,
                                hasPendingDiffs: _,
                                hasPendingAction: m,
                                hasPendingChanges: () => m() || _(),
                                isFlushing: () => i,
                                handleUserSelect: v,
                                handleCompositionEnd: (e) => {
                                    a && clearTimeout(a),
                                        (a = setTimeout(() => {
                                            eA.set(t, !1), c();
                                        }, 25));
                                },
                                handleCompositionStart: (e) => {
                                    eA.set(t, !0), a && (clearTimeout(a), (a = null));
                                },
                                handleDOMBeforeInput: (e) => {
                                    u && (clearTimeout(u), (u = null));
                                    var { inputType: n } = e,
                                        r = null,
                                        i = e.dataTransfer || e.data || void 0;
                                    !1 !== l && "insertText" !== n && "insertCompositionText" !== n && (l = !1);
                                    var [a] = e.getTargetRanges();
                                    a && (r = te.toSlateRange(t, a, { exactMatch: !1, suppressThrow: !0 }));
                                    var o = te.getWindow(t).getSelection();
                                    if (
                                        (!r &&
                                            o &&
                                            ((a = o),
                                            (r = te.toSlateRange(t, o, { exactMatch: !1, suppressThrow: !0 }))),
                                        (r = null != (k = r) ? k : t.selection))
                                    ) {
                                        var s = !0;
                                        if (n.startsWith("delete")) {
                                            if (D.Q6.isExpanded(r)) {
                                                var [d, c] = D.Q6.edges(r);
                                                if (D.bP.leaf(t, d.path).text.length === d.offset && 0 === c.offset) {
                                                    var f = D.KE.next(t, { at: d.path, match: D.EY.isText });
                                                    f && D.wA.equals(f[1], c.path) && (r = { anchor: c, focus: c });
                                                }
                                            }
                                            var m = n.endsWith("Backward") ? "backward" : "forward",
                                                [_, y] = D.Q6.edges(r),
                                                [b, C] = D.KE.leaf(t, _.path),
                                                E = { text: "", start: _.offset, end: y.offset },
                                                w = ex.get(t),
                                                A = null == w ? void 0 : w.find((e) => D.wA.equals(e.path, C)),
                                                B = A ? [A.diff, E] : [E];
                                            if ((0 === tx(b.text, ...B).length && (s = !1), D.Q6.isExpanded(r))) {
                                                if (s && D.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var F = { path: r.anchor.path, offset: _.offset };
                                                    return (
                                                        v(D.KE.range(t, F, F)),
                                                        h(r.anchor.path, { text: "", end: y.offset, start: _.offset })
                                                    );
                                                }
                                                return p(() => D.KE.deleteFragment(t, { direction: m }), { at: r });
                                            }
                                        }
                                        switch (n) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return p(() => D.KE.deleteFragment(t), { at: r });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: V } = r;
                                                if (s && D.Q6.isCollapsed(r)) {
                                                    var T = D.bP.leaf(t, V.path);
                                                    if (V.offset < T.text.length)
                                                        return h(V.path, {
                                                            text: "",
                                                            start: V.offset,
                                                            end: V.offset + 1,
                                                        });
                                                }
                                                return p(() => D.KE.deleteForward(t), { at: r });
                                            case "deleteContentBackward":
                                                var k,
                                                    x,
                                                    { anchor: P } = r,
                                                    O = eW(a) ? a.isCollapsed : !!(null != (x = a) && x.collapsed);
                                                if (s && O && D.Q6.isCollapsed(r) && P.offset > 0)
                                                    return h(P.path, { text: "", start: P.offset - 1, end: P.offset });
                                                return p(() => D.KE.deleteBackward(t), { at: r });
                                            case "deleteEntireSoftLine":
                                                return p(
                                                    () => {
                                                        D.KE.deleteBackward(t, { unit: "line" }),
                                                            D.KE.deleteForward(t, { unit: "line" });
                                                    },
                                                    { at: r },
                                                );
                                            case "deleteHardLineBackward":
                                                return p(() => D.KE.deleteBackward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineBackward":
                                                return p(() => D.KE.deleteBackward(t, { unit: "line" }), { at: r });
                                            case "deleteHardLineForward":
                                                return p(() => D.KE.deleteForward(t, { unit: "block" }), { at: r });
                                            case "deleteSoftLineForward":
                                                return p(() => D.KE.deleteForward(t, { unit: "line" }), { at: r });
                                            case "deleteWordBackward":
                                                return p(() => D.KE.deleteBackward(t, { unit: "word" }), { at: r });
                                            case "deleteWordForward":
                                                return p(() => D.KE.deleteForward(t, { unit: "word" }), { at: r });
                                            case "insertLineBreak":
                                                return p(() => D.KE.insertSoftBreak(t), { at: r });
                                            case "insertParagraph":
                                                return p(() => D.KE.insertBreak(t), { at: r });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == i ? void 0 : i.constructor.name) === "DataTransfer")
                                                    return p(() => te.insertData(t, i), { at: r });
                                                var S = null != i ? i : "";
                                                if (
                                                    (eT.get(t) && (S = S.replace("\uFEFF", "")),
                                                    "insertText" === n && /.*\n.*\n$/.test(S) && (S = S.slice(0, -1)),
                                                    S.includes("\n"))
                                                )
                                                    return p(
                                                        () => {
                                                            var e = S.split("\n");
                                                            e.forEach((n, r) => {
                                                                n && D.KE.insertText(t, n),
                                                                    r !== e.length - 1 && D.KE.insertSoftBreak(t);
                                                            });
                                                        },
                                                        { at: r },
                                                    );
                                                if (D.wA.equals(r.anchor.path, r.focus.path)) {
                                                    var [R, M] = D.Q6.edges(r),
                                                        N = { start: R.offset, end: M.offset, text: S };
                                                    if (S && l && "insertCompositionText" === n) {
                                                        var L = l.start + l.text.search(/\S|$/);
                                                        N.start + N.text.search(/\S|$/) === L + 1 &&
                                                        N.end === l.start + l.text.length
                                                            ? ((N.start -= 1), (l = null), g())
                                                            : (l = !1);
                                                    } else
                                                        l =
                                                            "insertText" === n &&
                                                            (null === l
                                                                ? N
                                                                : !!(l && D.Q6.isCollapsed(r)) &&
                                                                  l.end + l.text.length === R.offset &&
                                                                  tL(tL({}, l), {}, { text: l.text + S }));
                                                    if (s) return void h(R.path, N);
                                                }
                                                return p(() => D.KE.insertText(t, S), { at: r });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    _() || (f(!0), setTimeout(f));
                                },
                                handleDomMutations: (e) => {
                                    if (!(_() || m()) && e.some((n) => eX(t, n, e))) {
                                        var n;
                                        null == (n = eS.get(t)) || n();
                                    }
                                },
                                handleInput: () => {
                                    (m() || !_()) && c();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? tG(Object(n), !0).forEach(function (t) {
                                              ed(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                          : tG(Object(n)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                            });
                                }
                                return e;
                            })({ editor: i }, r),
                        ),
                    );
                return (
                    !(function (e, t, n) {
                        var [r] = (0, f.useState)(() => new MutationObserver(t));
                        ti(() => {
                            r.takeRecords();
                        }),
                            (0, f.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return r.observe(e.current, n), () => r.disconnect();
                            }, []);
                    })(n, u.handleDomMutations, tW),
                    eV.set(i, u.scheduleFlush),
                    a && u.flush(),
                    u
                );
            })({ node: T, onDOMSelectionChange: R, scheduleOnDOMSelectionChange: M });
        ti(() => {
            T.current && (e = eL(T.current))
                ? (e_.set(B, e), ev.set(B, T.current), eD.set(B, T.current), ey.set(T.current, B))
                : eD.delete(B);
            var e,
                { selection: t } = B,
                n = te.findDocumentOrShadowRoot(B).getSelection();
            if (!(!n || !te.isFocused(B) || (null != N && N.hasPendingAction()))) {
                var r = (e) => {
                        var r = "None" !== n.type;
                        if (t || r) {
                            var i = ev.get(B),
                                a = !1;
                            if ((i.contains(n.anchorNode) && i.contains(n.focusNode) && (a = !0), r && a && t && !e)) {
                                var u = te.toSlateRange(B, n, { exactMatch: !0, suppressThrow: !0 });
                                if (u && D.Q6.equals(u, t)) {
                                    if (!S.hasMarkPlaceholder) return;
                                    var o,
                                        { anchorNode: s } = n;
                                    if (
                                        null != s &&
                                        null != (o = s.parentElement) &&
                                        o.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !te.hasRange(B, t)) {
                                B.selection = te.toSlateRange(B, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            S.isUpdatingSelection = !0;
                            var l = t && te.toDOMRange(B, t);
                            return (
                                l
                                    ? (D.Q6.isBackward(t)
                                          ? n.setBaseAndExtent(
                                                l.endContainer,
                                                l.endOffset,
                                                l.startContainer,
                                                l.startOffset,
                                            )
                                          : n.setBaseAndExtent(
                                                l.startContainer,
                                                l.startOffset,
                                                l.endContainer,
                                                l.endOffset,
                                            ),
                                      b(B, l))
                                    : n.removeAllRanges(),
                                l
                            );
                        }
                    },
                    i = r(),
                    a = (null == N ? void 0 : N.isFlushing()) === "action";
                if (!eJ || !a)
                    return void setTimeout(() => {
                        i && e$ && te.toDOMNode(B, B).focus(), (S.isUpdatingSelection = !1);
                    });
                var u = null,
                    o = requestAnimationFrame(() => {
                        if (a) {
                            var e = (e) => {
                                try {
                                    te.toDOMNode(B, B).focus(), r(e);
                                } catch (e) {}
                            };
                            e(),
                                (u = setTimeout(() => {
                                    e(!0), (S.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), u && clearTimeout(u);
                };
            }
        });
        var L = (0, f.useCallback)(
                (e) => {
                    if ((x(), !_ && te.hasEditableTarget(B, e.target) && !t$(e, p))) {
                        if (N) return N.handleDOMBeforeInput(e);
                        M.flush(), R.flush();
                        var { selection: t } = B,
                            { inputType: n } = e,
                            r = e.dataTransfer || e.data || void 0,
                            i = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(i && te.isComposing(B))) {
                            var a = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                D.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (a = !0), B.marks && (a = !1);
                                var { anchor: u } = t,
                                    [o, s] = te.toDOMPoint(B, u),
                                    l = null == (f = o.parentElement) ? void 0 : f.closest("a"),
                                    d = te.getWindow(B);
                                if (a && l && te.hasDOMNode(B, l)) {
                                    var c,
                                        f,
                                        h,
                                        m,
                                        v =
                                            null == d
                                                ? void 0
                                                : d.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                    v === o && (null == (m = v.textContent) ? void 0 : m.length) === s && (a = !1);
                                }
                                if (
                                    a &&
                                    o.parentElement &&
                                    (null == d || null == (h = d.getComputedStyle(o.parentElement))
                                        ? void 0
                                        : h.whiteSpace) === "pre"
                                ) {
                                    var g = D.KE.above(B, {
                                        at: u.path,
                                        match: (e) => D.Hg.isElement(e) && D.KE.isBlock(B, e),
                                    });
                                    g && D.bP.string(g[0]).includes("	") && (a = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [y] = e.getTargetRanges();
                                if (y) {
                                    var b = te.toSlateRange(B, y, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !D.Q6.equals(t, b)) {
                                        a = !1;
                                        var C = !i && B.selection && D.KE.rangeRef(B, B.selection);
                                        D.gB.select(B, b), C && eB.set(B, C);
                                    }
                                }
                            }
                            if (!i) {
                                if ((a || e.preventDefault(), t && D.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var E = n.endsWith("Backward") ? "backward" : "forward";
                                    D.KE.deleteFragment(B, { direction: E });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        D.KE.deleteFragment(B);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        D.KE.deleteForward(B);
                                        break;
                                    case "deleteContentBackward":
                                        D.KE.deleteBackward(B);
                                        break;
                                    case "deleteEntireSoftLine":
                                        D.KE.deleteBackward(B, { unit: "line" }),
                                            D.KE.deleteForward(B, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        D.KE.deleteBackward(B, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        D.KE.deleteBackward(B, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        D.KE.deleteForward(B, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        D.KE.deleteForward(B, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        D.KE.deleteBackward(B, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        D.KE.deleteForward(B, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        D.KE.insertSoftBreak(B);
                                        break;
                                    case "insertParagraph":
                                        D.KE.insertBreak(B);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && te.isComposing(B) && (V(!1), eA.set(B, !1)),
                                            (null == r ? void 0 : r.constructor.name) === "DataTransfer"
                                                ? te.insertData(B, r)
                                                : "string" == typeof r &&
                                                  (a
                                                      ? k.current.push(() => D.KE.insertText(B, r))
                                                      : D.KE.insertText(B, r));
                                }
                                var w = null == (c = eB.get(B)) ? void 0 : c.unref();
                                eB.delete(B), !w || (B.selection && D.Q6.equals(B.selection, w)) || D.gB.select(B, w);
                            }
                        }
                    }
                },
                [_, p],
            ),
            I = (0, f.useCallback)(
                (e) => {
                    null == e
                        ? (R.cancel(),
                          M.cancel(),
                          ev.delete(B),
                          eD.delete(B),
                          T.current && e6 && T.current.removeEventListener("beforeinput", L))
                        : e6 && e.addEventListener("beforeinput", L),
                        (T.current = e);
                },
                [T, L, R, M],
            );
        ti(() => {
            var e = te.getWindow(B);
            return (
                e.document.addEventListener("selectionchange", M),
                () => {
                    e.document.removeEventListener("selectionchange", M);
                }
            );
        }, [M]);
        var j = h([B, []]);
        if (m && 1 === B.children.length && 1 === Array.from(D.bP.texts(B)).length && "" === D.bP.string(B) && !F) {
            var G = D.KE.start(B, []);
            j.push({ [eR]: !0, placeholder: m, anchor: G, focus: G });
        }
        var { marks: W } = B;
        if (((S.hasMarkPlaceholder = !1), B.selection && D.Q6.isCollapsed(B.selection) && W)) {
            var { anchor: K } = B.selection,
                U = D.bP.leaf(B, K.path),
                H = ec(U, tU);
            if (!D.EY.equals(U, W, { loose: !0 })) {
                S.hasMarkPlaceholder = !0;
                var q = Object.fromEntries(Object.keys(H).map((e) => [e, null]));
                j.push(tq(tq(tq({ [eM]: !0 }, q), W), {}, { anchor: K, focus: K }));
            }
        }
        (0, f.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = B;
                if (e) {
                    var { anchor: t } = e,
                        n = D.bP.leaf(B, t.path);
                    if (W && !D.EY.equals(n, W, { loose: !0 })) return void eT.set(B, W);
                }
                eT.delete(B);
            });
        });
        var z = null == (a = eg.get(B)) || null == (u = a.getBoundingClientRect()) ? void 0 : u.height;
        return f.createElement(
            tD.Provider,
            { value: _ },
            f.createElement(
                t_.Provider,
                { value: h },
                f.createElement(
                    tk,
                    { node: T, receivedUserInput: P },
                    f.createElement(
                        E,
                        Object.assign({ role: _ ? void 0 : "textbox", "aria-multiline": !_ || void 0 }, A, {
                            spellCheck: (!!e6 || !e9) && A.spellCheck,
                            autoCorrect: e6 || !e9 ? A.autoCorrect : "false",
                            autoCapitalize: e6 || !e9 ? A.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !_,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: I,
                            style: tq(
                                tq(
                                    {},
                                    w
                                        ? {}
                                        : tq(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              z ? { minHeight: z } : {},
                                          ),
                                ),
                                C,
                            ),
                            onBeforeInput: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        !e6 &&
                                        !_ &&
                                        !tJ(e, A.onBeforeInput) &&
                                        te.hasSelectableTarget(B, e.target) &&
                                        (e.preventDefault(), !te.isComposing(B))
                                    ) {
                                        var t = e.data;
                                        D.KE.insertText(B, t);
                                    }
                                },
                                [_],
                            ),
                            onInput: (0, f.useCallback)((e) => {
                                if (!tJ(e, A.onInput)) {
                                    if (N) return void N.handleInput();
                                    for (var t of k.current) t();
                                    k.current = [];
                                }
                            }, []),
                            onBlur: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        _ ||
                                        S.isUpdatingSelection ||
                                        !te.hasSelectableTarget(B, e.target) ||
                                        tJ(e, A.onBlur)
                                    )
                                        return;
                                    var t = te.findDocumentOrShadowRoot(B);
                                    if (S.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== te.toDOMNode(B, B) &&
                                            !(ej(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && eG(n) && te.hasDOMNode(B, n)) {
                                                var r = te.toSlateNode(B, n);
                                                if (D.Hg.isElement(r) && !B.isVoid(r)) return;
                                            }
                                            if (e0) {
                                                var i = t.getSelection();
                                                null == i || i.removeAllRanges();
                                            }
                                            ew.delete(B);
                                        }
                                    }
                                },
                                [_, A.onBlur],
                            ),
                            onClick: (0, f.useCallback)(
                                (e) => {
                                    if (te.hasTarget(B, e.target) && !tJ(e, A.onClick) && eG(e.target)) {
                                        var t = te.toSlateNode(B, e.target),
                                            n = te.findPath(B, t);
                                        if (D.KE.hasPath(B, n) && D.bP.get(B, n) === t) {
                                            if (3 === e.detail && n.length >= 1) {
                                                var r = n;
                                                if (!(D.Hg.isElement(t) && D.KE.isBlock(B, t))) {
                                                    var i,
                                                        a = D.KE.above(B, {
                                                            match: (e) => D.Hg.isElement(e) && D.KE.isBlock(B, e),
                                                            at: n,
                                                        });
                                                    r = null != (i = null == a ? void 0 : a[1]) ? i : n.slice(0, 1);
                                                }
                                                var u = D.KE.range(B, r);
                                                D.gB.select(B, u);
                                                return;
                                            }
                                            if (!_) {
                                                var o = D.KE.start(B, n),
                                                    s = D.KE.end(B, n),
                                                    l = D.KE.void(B, { at: o }),
                                                    d = D.KE.void(B, { at: s });
                                                if (l && d && D.wA.equals(l[1], d[1])) {
                                                    var c = D.KE.range(B, o);
                                                    D.gB.select(B, c);
                                                }
                                            }
                                        }
                                    }
                                },
                                [_, A.onClick],
                            ),
                            onCompositionEnd: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        te.hasSelectableTarget(B, e.target) &&
                                        (te.isComposing(B) && (V(!1), eA.set(B, !1)),
                                        null == N || N.handleCompositionEnd(e),
                                        !tJ(e, A.onCompositionEnd) && !eJ && !e0 && !e8 && !eZ && !e4 && !e7) &&
                                        e.data
                                    ) {
                                        var t = eT.get(B);
                                        eT.delete(B),
                                            void 0 !== t && (ek.set(B, B.marks), (B.marks = t)),
                                            D.KE.insertText(B, e.data);
                                        var n = ek.get(B);
                                        ek.delete(B), void 0 !== n && (B.marks = n);
                                    }
                                },
                                [A.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, f.useCallback)(
                                (e) => {
                                    !te.hasSelectableTarget(B, e.target) ||
                                        tJ(e, A.onCompositionUpdate) ||
                                        te.isComposing(B) ||
                                        (V(!0), eA.set(B, !0));
                                },
                                [A.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        te.hasSelectableTarget(B, e.target) &&
                                        (null == N || N.handleCompositionStart(e), !tJ(e, A.onCompositionStart) && !eJ)
                                    ) {
                                        V(!0);
                                        var { selection: t } = B;
                                        if (t) {
                                            if (D.Q6.isExpanded(t)) return void D.KE.deleteFragment(B);
                                            var n = D.KE.above(B, {
                                                match: (e) => D.Hg.isElement(e) && D.KE.isInline(B, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, r] = n;
                                                if (D.KE.isEnd(B, t.anchor, r)) {
                                                    var i = D.KE.after(B, r);
                                                    D.gB.setSelection(B, { anchor: i, focus: i });
                                                }
                                            }
                                        }
                                    }
                                },
                                [A.onCompositionStart],
                            ),
                            onCopy: (0, f.useCallback)(
                                (e) => {
                                    te.hasSelectableTarget(B, e.target) &&
                                        !tJ(e, A.onCopy) &&
                                        (e.preventDefault(), te.setFragmentData(B, e.clipboardData, "copy"));
                                },
                                [A.onCopy],
                            ),
                            onCut: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasSelectableTarget(B, e.target) && !tJ(e, A.onCut)) {
                                        e.preventDefault(), te.setFragmentData(B, e.clipboardData, "cut");
                                        var { selection: t } = B;
                                        if (t)
                                            if (D.Q6.isExpanded(t)) D.KE.deleteFragment(B);
                                            else {
                                                var n = D.bP.parent(B, t.anchor.path);
                                                D.KE.isVoid(B, n) && D.gB.delete(B);
                                            }
                                    }
                                },
                                [_, A.onCut],
                            ),
                            onDragOver: (0, f.useCallback)(
                                (e) => {
                                    if (te.hasTarget(B, e.target) && !tJ(e, A.onDragOver)) {
                                        var t = te.toSlateNode(B, e.target);
                                        D.Hg.isElement(t) && D.KE.isVoid(B, t) && e.preventDefault();
                                    }
                                },
                                [A.onDragOver],
                            ),
                            onDragStart: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasTarget(B, e.target) && !tJ(e, A.onDragStart)) {
                                        var t = te.toSlateNode(B, e.target),
                                            n = te.findPath(B, t);
                                        if (
                                            (D.Hg.isElement(t) && D.KE.isVoid(B, t)) ||
                                            D.KE.void(B, { at: n, voids: !0 })
                                        ) {
                                            var r = D.KE.range(B, n);
                                            D.gB.select(B, r);
                                        }
                                        (S.isDraggingInternally = !0), te.setFragmentData(B, e.dataTransfer, "drag");
                                    }
                                },
                                [_, A.onDragStart],
                            ),
                            onDrop: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasTarget(B, e.target) && !tJ(e, A.onDrop)) {
                                        e.preventDefault();
                                        var t = B.selection,
                                            n = te.findEventRange(B, e),
                                            r = e.dataTransfer;
                                        D.gB.select(B, n),
                                            S.isDraggingInternally &&
                                                t &&
                                                !D.Q6.equals(t, n) &&
                                                !D.KE.void(B, { at: n, voids: !0 }) &&
                                                D.gB.delete(B, { at: t }),
                                            te.insertData(B, r),
                                            te.isFocused(B) || te.focus(B);
                                    }
                                    S.isDraggingInternally = !1;
                                },
                                [_, A.onDrop],
                            ),
                            onDragEnd: (0, f.useCallback)(
                                (e) => {
                                    !_ &&
                                        S.isDraggingInternally &&
                                        A.onDragEnd &&
                                        te.hasTarget(B, e.target) &&
                                        A.onDragEnd(e),
                                        (S.isDraggingInternally = !1);
                                },
                                [_, A.onDragEnd],
                            ),
                            onFocus: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        !_ &&
                                        !S.isUpdatingSelection &&
                                        te.hasEditableTarget(B, e.target) &&
                                        !tJ(e, A.onFocus)
                                    ) {
                                        var t = te.toDOMNode(B, B);
                                        if (
                                            ((S.latestElement = te.findDocumentOrShadowRoot(B).activeElement),
                                            e$ && e.target !== t)
                                        )
                                            return void t.focus();
                                        ew.set(B, !0);
                                    }
                                },
                                [_, A.onFocus],
                            ),
                            onKeyDown: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasEditableTarget(B, e.target)) {
                                        null == N || N.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (te.isComposing(B) && !1 === t.isComposing && (eA.set(B, !1), V(!1)),
                                            !(tJ(e, A.onKeyDown) || te.isComposing(B)))
                                        ) {
                                            var { selection: n } = B,
                                                r = B.children[null !== n ? n.focus.path[0] : 0],
                                                i = "rtl" === o()(D.bP.string(r));
                                            if (tF.isRedo(t)) {
                                                e.preventDefault(), "function" == typeof B.redo && B.redo();
                                                return;
                                            }
                                            if (tF.isUndo(t)) {
                                                e.preventDefault(), "function" == typeof B.undo && B.undo();
                                                return;
                                            }
                                            if (tF.isMoveLineBackward(t)) {
                                                e.preventDefault(), D.gB.move(B, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (tF.isMoveLineForward(t)) {
                                                e.preventDefault(), D.gB.move(B, { unit: "line" });
                                                return;
                                            }
                                            if (tF.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    D.gB.move(B, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (tF.isExtendLineForward(t)) {
                                                e.preventDefault(), D.gB.move(B, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (tF.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    n && D.Q6.isCollapsed(n)
                                                        ? D.gB.move(B, { reverse: !i })
                                                        : D.gB.collapse(B, { edge: "start" });
                                                return;
                                            }
                                            if (tF.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    n && D.Q6.isCollapsed(n)
                                                        ? D.gB.move(B, { reverse: i })
                                                        : D.gB.collapse(B, { edge: "end" });
                                                return;
                                            }
                                            if (tF.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    n && D.Q6.isExpanded(n) && D.gB.collapse(B, { edge: "focus" }),
                                                    D.gB.move(B, { unit: "word", reverse: !i });
                                                return;
                                            }
                                            if (tF.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    n && D.Q6.isExpanded(n) && D.gB.collapse(B, { edge: "focus" }),
                                                    D.gB.move(B, { unit: "word", reverse: i });
                                                return;
                                            }
                                            if (e6) {
                                                if (
                                                    (e2 || e0) &&
                                                    n &&
                                                    (tF.isDeleteBackward(t) || tF.isDeleteForward(t)) &&
                                                    D.Q6.isCollapsed(n)
                                                ) {
                                                    var a = D.bP.parent(B, n.anchor.path);
                                                    if (
                                                        D.Hg.isElement(a) &&
                                                        D.KE.isVoid(B, a) &&
                                                        (D.KE.isInline(B, a) || D.KE.isBlock(B, a))
                                                    ) {
                                                        e.preventDefault(), D.KE.deleteBackward(B, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (tF.isBold(t) || tF.isItalic(t) || tF.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (tF.isSoftBreak(t)) {
                                                    e.preventDefault(), D.KE.insertSoftBreak(B);
                                                    return;
                                                }
                                                if (tF.isSplitBlock(t)) {
                                                    e.preventDefault(), D.KE.insertBreak(B);
                                                    return;
                                                }
                                                if (tF.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        n && D.Q6.isExpanded(n)
                                                            ? D.KE.deleteFragment(B, { direction: "backward" })
                                                            : D.KE.deleteBackward(B);
                                                    return;
                                                }
                                                if (tF.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        n && D.Q6.isExpanded(n)
                                                            ? D.KE.deleteFragment(B, { direction: "forward" })
                                                            : D.KE.deleteForward(B);
                                                    return;
                                                }
                                                if (tF.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        n && D.Q6.isExpanded(n)
                                                            ? D.KE.deleteFragment(B, { direction: "backward" })
                                                            : D.KE.deleteBackward(B, { unit: "line" });
                                                    return;
                                                }
                                                if (tF.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        n && D.Q6.isExpanded(n)
                                                            ? D.KE.deleteFragment(B, { direction: "forward" })
                                                            : D.KE.deleteForward(B, { unit: "line" });
                                                    return;
                                                }
                                                if (tF.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && D.Q6.isExpanded(n)
                                                            ? D.KE.deleteFragment(B, { direction: "backward" })
                                                            : D.KE.deleteBackward(B, { unit: "word" });
                                                    return;
                                                }
                                                if (tF.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && D.Q6.isExpanded(n)
                                                            ? D.KE.deleteFragment(B, { direction: "forward" })
                                                            : D.KE.deleteForward(B, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [_, A.onKeyDown],
                            ),
                            onPaste: (0, f.useCallback)(
                                (e) => {
                                    let t;
                                    !_ &&
                                        te.hasEditableTarget(B, e.target) &&
                                        !tJ(e, A.onPaste) &&
                                        (!e6 ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            e0) &&
                                        (e.preventDefault(), te.insertData(B, e.clipboardData));
                                },
                                [_, A.onPaste],
                            ),
                        }),
                        f.createElement(tz, {
                            decorations: j,
                            node: B,
                            renderElement: v,
                            renderPlaceholder: y,
                            renderLeaf: g,
                            selection: B.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    tQ = (e) => {
        var { attributes: t, children: n } = e;
        return f.createElement("span", Object.assign({}, t), n, eJ && f.createElement("br", null));
    },
    tZ = () => [],
    tY = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && D.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                y(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect;
        }
    },
    tJ = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    t$ = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    t0 = (0, f.createContext)(!1),
    t1 = () => (0, f.useContext)(t0),
    t2 = (0, f.createContext)({}),
    t3 = ["editor", "children", "onChange", "value"],
    t5 = (e) => {
        var t,
            n,
            r,
            { editor: i, children: a, onChange: u, value: o } = e,
            s = ec(e, t3),
            l = (0, f.useRef)(!1),
            [d, c] = f.useState(() => {
                if (!D.bP.isNodeList(o))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(D.h6.stringify(o)),
                    );
                if (!D.KE.isEditor(i)) throw Error("[Slate] editor is invalid! You passed: ".concat(D.h6.stringify(i)));
                return (i.children = o), Object.assign(i, s), { v: 0, editor: i };
            }),
            { selectorContext: h, onChange: p } =
                ((t = (0, f.useRef)([]).current),
                (n = (0, f.useRef)({ editor: i }).current),
                (r = (0, f.useCallback)((e) => {
                    (n.editor = e), t.forEach((t) => t(e));
                }, [])),
                {
                    selectorContext: (0, f.useMemo)(
                        () => ({
                            getSlate: () => n.editor,
                            addEventListener: (e) => (
                                t.push(e),
                                () => {
                                    t.splice(t.indexOf(e), 1);
                                }
                            ),
                        }),
                        [t, n],
                    ),
                    onChange: r,
                }),
            m = (0, f.useCallback)(() => {
                u && u(i.children), c((e) => ({ v: e.v + 1, editor: i })), p(i);
            }, [u]);
        (0, f.useEffect)(
            () => (
                eF.set(i, m),
                () => {
                    eF.set(i, () => {}), (l.current = !0);
                }
            ),
            [m],
        );
        var [_, v] = (0, f.useState)(te.isFocused(i));
        return (
            (0, f.useEffect)(() => {
                v(te.isFocused(i));
            }),
            ti(() => {
                var e = () => v(te.isFocused(i));
                return eQ
                    ? (document.addEventListener("focusin", e),
                      document.addEventListener("focusout", e),
                      () => {
                          document.removeEventListener("focusin", e), document.removeEventListener("focusout", e);
                      })
                    : (document.addEventListener("focus", e, !0),
                      document.addEventListener("blur", e, !0),
                      () => {
                          document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0);
                      });
            }, []),
            f.createElement(
                t2.Provider,
                { value: h },
                f.createElement(
                    tC.Provider,
                    { value: d },
                    f.createElement(tl.Provider, { value: d.editor }, f.createElement(t0.Provider, { value: _ }, a)),
                ),
            )
        );
    },
    t8 = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    t7 = (e, t, n) => {
        var r = te.toDOMRange(e, t).getBoundingClientRect(),
            i = te.toDOMRange(e, n).getBoundingClientRect();
        return t8(r, i) && t8(i, r);
    };
function t4(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function t9(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? t4(Object(n), !0).forEach(function (t) {
                  ed(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t4(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var t6 = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: n, onChange: r, deleteBackward: i, addMark: a, removeMark: u } = e;
        return (
            eC.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
                var r, i;
                null == (r = eV.get(e)) || r(),
                    !eT.get(e) && null != (i = ex.get(e)) && i.length && eT.set(e, null),
                    ek.delete(e),
                    a(t, n);
            }),
            (e.removeMark = (t) => {
                var n;
                !eT.get(e) && null != (n = ex.get(e)) && n.length && eT.set(e, null), ek.delete(e), u(t);
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return i(t);
                if (e.selection && D.Q6.isCollapsed(e.selection)) {
                    var n = D.KE.above(e, { match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t), at: e.selection });
                    if (n) {
                        var [, r] = n,
                            a = D.KE.range(e, r, e.selection.anchor),
                            u = ((e, t) => {
                                var n = D.KE.range(e, D.Q6.end(t)),
                                    r = Array.from(D.KE.positions(e, { at: t })),
                                    i = 0,
                                    a = r.length,
                                    u = Math.floor(a / 2);
                                if (t7(e, D.KE.range(e, r[i]), n)) return D.KE.range(e, r[i], n);
                                if (r.length < 2) return D.KE.range(e, r[r.length - 1], n);
                                for (; u !== r.length && u !== i; )
                                    t7(e, D.KE.range(e, r[u]), n) ? (a = u) : (i = u), (u = Math.floor((i + a) / 2));
                                return D.KE.range(e, r[a], n);
                            })(e, a);
                        D.Q6.isCollapsed(u) || D.gB.delete(e, { at: u });
                    }
                }
            }),
            (e.apply = (t) => {
                var r,
                    i = [],
                    a = ex.get(e);
                if (null != a && a.length) {
                    var u = a
                        .map((e) =>
                            (function (e, t) {
                                var { path: n, diff: r, id: i } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!D.wA.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset <= r.start)
                                            return {
                                                diff: {
                                                    start: t.text.length + r.start,
                                                    end: t.text.length + r.end,
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end + t.text.length, text: r.text },
                                            id: i,
                                            path: n,
                                        };
                                    case "remove_text":
                                        if (!D.wA.equals(t.path, n) || t.offset >= r.end) return e;
                                        if (t.offset + t.text.length <= r.start)
                                            return {
                                                diff: {
                                                    start: r.start - t.text.length,
                                                    end: r.end - t.text.length,
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: r.start, end: r.end - t.text.length, text: r.text },
                                            id: i,
                                            path: n,
                                        };
                                    case "split_node":
                                        if (!D.wA.equals(t.path, n) || t.position >= r.end)
                                            return {
                                                diff: r,
                                                id: i,
                                                path: D.wA.transform(n, t, { affinity: "backward" }),
                                            };
                                        if (t.position > r.start)
                                            return {
                                                diff: {
                                                    start: r.start,
                                                    end: Math.min(t.position, r.end),
                                                    text: r.text,
                                                },
                                                id: i,
                                                path: n,
                                            };
                                        return {
                                            diff: {
                                                start: r.start - t.position,
                                                end: r.end - t.position,
                                                text: r.text,
                                            },
                                            id: i,
                                            path: D.wA.transform(n, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!D.wA.equals(t.path, n))
                                            return { diff: r, id: i, path: D.wA.transform(n, t) };
                                        return {
                                            diff: {
                                                start: r.start + t.position,
                                                end: r.end + t.position,
                                                text: r.text,
                                            },
                                            id: i,
                                            path: D.wA.transform(n, t),
                                        };
                                }
                                var a = D.wA.transform(n, t);
                                return a ? { diff: r, path: a, id: i } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    ex.set(e, u);
                }
                var o = eO.get(e);
                o && eO.set(e, tM(e, o, t));
                var s = eP.get(e);
                if (null != s && s.at) {
                    var l = D.bR.isPoint(null == s ? void 0 : s.at) ? tR(e, s.at, t) : tM(e, s.at, t);
                    eP.set(e, l ? t9(t9({}, s), {}, { at: l }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        i.push(...ne(e, t.path));
                        break;
                    case "set_selection":
                        null == (r = eB.get(e)) || r.unref(), eB.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        i.push(...ne(e, D.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        i.push(...ne(e, D.wA.previous(t.path)));
                        break;
                    case "move_node":
                        i.push(...ne(e, D.wA.common(D.wA.parent(t.path), D.wA.parent(t.newPath))));
                }
                for (var [d, c] of (n(t), i)) {
                    var [f] = D.KE.node(e, d);
                    eb.set(f, c);
                }
            }),
            (e.setFragmentData = (n) => {
                var { selection: r } = e;
                if (r) {
                    var [i, a] = D.Q6.edges(r),
                        u = D.KE.void(e, { at: i.path }),
                        o = D.KE.void(e, { at: a.path });
                    if (!D.Q6.isCollapsed(r) || u) {
                        var s = te.toDOMRange(e, r),
                            l = s.cloneContents(),
                            d = l.childNodes[0];
                        if (
                            (l.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (d = e);
                            }),
                            o)
                        ) {
                            var [c] = o,
                                f = s.cloneRange(),
                                h = te.toDOMNode(e, c);
                            f.setEndAfter(h), (l = f.cloneContents());
                        }
                        if (
                            (u && (d = l.querySelector("[data-slate-spacer]")),
                            Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            eK(d))
                        ) {
                            var p = d.ownerDocument.createElement("span");
                            (p.style.whiteSpace = "pre"), p.appendChild(d), l.appendChild(p), (d = p);
                        }
                        var m = JSON.stringify(e.getFragment()),
                            _ = window.btoa(encodeURIComponent(m));
                        d.setAttribute("data-slate-fragment", _), n.setData("application/".concat(t), _);
                        var v = l.ownerDocument.createElement("div");
                        return (
                            v.appendChild(l),
                            v.setAttribute("hidden", "true"),
                            l.ownerDocument.body.appendChild(v),
                            n.setData("text/html", v.innerHTML),
                            n.setData("text/plain", eq(v)),
                            l.ownerDocument.body.removeChild(v),
                            n
                        );
                    }
                }
            }),
            (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (n) => {
                var r =
                    n.getData("application/".concat(t)) ||
                    ((e) => {
                        var [, t] = e.getData("text/html").match(ez) || [];
                        return t;
                    })(n);
                if (r) {
                    var i = JSON.parse(decodeURIComponent(window.atob(r)));
                    return e.insertFragment(i), !0;
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var n = t.getData("text/plain");
                if (n) {
                    var r = n.split(/\r\n|\r|\n/),
                        i = !1;
                    for (var a of r) i && D.gB.splitNodes(e, { always: !0 }), e.insertText(a), (i = !0);
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                el.unstable_batchedUpdates(() => {
                    var n = eF.get(e);
                    n && n(), r(t);
                });
            }),
            e
        );
    },
    ne = (e, t) => {
        var n = [];
        for (var [r, i] of D.KE.levels(e, { at: t })) {
            var a = te.findKey(e, r);
            n.push([i, a]);
        }
        return n;
    };
