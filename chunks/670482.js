"use strict";
n.d(t, { rL: () => te, f7: () => tg, RV: () => tc, o$: () => t9, A: () => t6, Fo: () => tz, zL: () => t1 });
var i,
    r,
    s,
    a = n(877413),
    o = n.n(a),
    l = n(805353),
    u = n.n(l),
    c = n(879378),
    d = n.n(c),
    _ = n(64700);
function h(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function f(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function p(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var n,
            i = getComputedStyle(e, null);
        return (
            f(i.overflowY, t) ||
            f(i.overflowX, t) ||
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
function E(e, t, n, i, r, s, a, o) {
    return (s < e && a > t) || (s > e && a < t)
        ? 0
        : (s <= e && o <= n) || (a >= t && o >= n)
          ? s - e - i
          : (a > t && o < n) || (s < e && o > n)
            ? a - t + r
            : 0;
}
var m = function (e, t) {
    var n = window,
        i = t.scrollMode,
        r = t.block,
        s = t.inline,
        a = t.boundary,
        o = t.skipOverflowHiddenElements,
        l =
            "function" == typeof a
                ? a
                : function (e) {
                      return e !== a;
                  };
    if (!h(e)) throw TypeError("Invalid target");
    for (var u, c, d = document.scrollingElement || document.documentElement, _ = [], f = e; h(f) && l(f); ) {
        if ((f = null == (c = (u = f).parentElement) ? u.getRootNode().host || null : c) === d) {
            _.push(f);
            break;
        }
        (null != f && f === document.body && p(f) && !p(document.documentElement)) ||
            (null != f && p(f, o) && _.push(f));
    }
    for (
        var m = n.visualViewport ? n.visualViewport.width : innerWidth,
            g = n.visualViewport ? n.visualViewport.height : innerHeight,
            A = window.scrollX || pageXOffset,
            I = window.scrollY || pageYOffset,
            T = e.getBoundingClientRect(),
            S = T.height,
            y = T.width,
            C = T.top,
            N = T.right,
            v = T.bottom,
            R = T.left,
            O = "start" === r || "nearest" === r ? C : "end" === r ? v : C + S / 2,
            b = "center" === s ? R + y / 2 : "end" === s ? N : R,
            D = [],
            L = 0;
        L < _.length;
        L++
    ) {
        var w = _[L],
            M = w.getBoundingClientRect(),
            P = M.height,
            x = M.width,
            k = M.top,
            U = M.right,
            G = M.bottom,
            F = M.left;
        if ("if-needed" === i && C >= 0 && R >= 0 && v <= g && N <= m && C >= k && v <= G && R >= F && N <= U) break;
        var V = getComputedStyle(w),
            B = parseInt(V.borderLeftWidth, 10),
            j = parseInt(V.borderTopWidth, 10),
            H = parseInt(V.borderRightWidth, 10),
            Y = parseInt(V.borderBottomWidth, 10),
            W = 0,
            K = 0,
            $ = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - B - H : 0,
            z = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - j - Y : 0,
            q = "offsetWidth" in w ? (0 === w.offsetWidth ? 0 : x / w.offsetWidth) : 0,
            Z = "offsetHeight" in w ? (0 === w.offsetHeight ? 0 : P / w.offsetHeight) : 0;
        if (d === w)
            (W =
                "start" === r
                    ? O
                    : "end" === r
                      ? O - g
                      : "nearest" === r
                        ? E(I, I + g, g, j, Y, I + O, I + O + S, S)
                        : O - g / 2),
                (K =
                    "start" === s
                        ? b
                        : "center" === s
                          ? b - m / 2
                          : "end" === s
                            ? b - m
                            : E(A, A + m, m, B, H, A + b, A + b + y, y)),
                (W = Math.max(0, W + I)),
                (K = Math.max(0, K + A));
        else {
            (W =
                "start" === r
                    ? O - k - j
                    : "end" === r
                      ? O - G + Y + z
                      : "nearest" === r
                        ? E(k, G, P, j, Y + z, O, O + S, S)
                        : O - (k + P / 2) + z / 2),
                (K =
                    "start" === s
                        ? b - F - B
                        : "center" === s
                          ? b - (F + x / 2) + $ / 2
                          : "end" === s
                            ? b - U + H + $
                            : E(F, U, x, B, H + $, b, b + y, y));
            var X = w.scrollLeft,
                Q = w.scrollTop;
            (O += Q - (W = Math.max(0, Math.min(Q + W / Z, w.scrollHeight - P / Z + z)))),
                (b += X - (K = Math.max(0, Math.min(X + K / q, w.scrollWidth - x / q + $))));
        }
        D.push({ el: w, top: W, left: K });
    }
    return D;
};
function g(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let A = function (e, t) {
    var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (g(t) && "function" == typeof t.behavior) return t.behavior(n ? m(e, t) : []);
    if (n) {
        var i,
            r,
            s,
            a = !1 === t ? { block: "end", inline: "nearest" } : g(t) ? t : { block: "start", inline: "nearest" };
        return (
            (i = m(e, a)),
            void 0 === (r = a.behavior) && (r = "auto"),
            (s = "scrollBehavior" in document.body.style),
            void i.forEach(function (e) {
                var t = e.el,
                    n = e.top,
                    i = e.left;
                t.scroll && s ? t.scroll({ top: n, left: i, behavior: r }) : ((t.scrollTop = n), (t.scrollLeft = i));
            })
        );
    }
};
var I = n(154283),
    T = [],
    S = "ResizeObserver loop completed with undelivered notifications.",
    y = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: S }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = S)),
            window.dispatchEvent(e);
    };
((i = r || (r = {})).BORDER_BOX = "border-box"),
    (i.CONTENT_BOX = "content-box"),
    (i.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
var C = function (e) {
        return Object.freeze(e);
    },
    N = function (e, t) {
        (this.inlineSize = e), (this.blockSize = t), C(this);
    },
    v = (function () {
        function e(e, t, n, i) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = n),
                (this.height = i),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                C(this)
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
    R = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    O = function (e) {
        if (R(e)) {
            var t = e.getBBox(),
                n = t.width,
                i = t.height;
            return !n && !i;
        }
        var r = e.offsetWidth,
            s = e.offsetHeight;
        return !(r || s || e.getClientRects().length);
    },
    b = function (e) {
        if (e instanceof Element) return !0;
        var t,
            n = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(n && e instanceof n.Element);
    },
    D = function (e) {
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
    L = "u" > typeof window ? window : {},
    w = new WeakMap(),
    M = /auto|scroll/,
    P = /^tb|vertical/,
    x = /msie|trident/i.test(L.navigator && L.navigator.userAgent),
    k = function (e) {
        return parseFloat(e || "0");
    },
    U = function (e, t, n) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new N((n ? t : e) || 0, (n ? e : t) || 0)
        );
    },
    G = C({ devicePixelContentBoxSize: U(), borderBoxSize: U(), contentBoxSize: U(), contentRect: new v(0, 0, 0, 0) }),
    F = function (e, t) {
        if ((void 0 === t && (t = !1), w.has(e) && !t)) return w.get(e);
        if (O(e)) return w.set(e, G), G;
        var n = getComputedStyle(e),
            i = R(e) && e.ownerSVGElement && e.getBBox(),
            r = !x && "border-box" === n.boxSizing,
            s = P.test(n.writingMode || ""),
            a = !i && M.test(n.overflowY || ""),
            o = !i && M.test(n.overflowX || ""),
            l = i ? 0 : k(n.paddingTop),
            u = i ? 0 : k(n.paddingRight),
            c = i ? 0 : k(n.paddingBottom),
            d = i ? 0 : k(n.paddingLeft),
            _ = i ? 0 : k(n.borderTopWidth),
            h = i ? 0 : k(n.borderRightWidth),
            f = i ? 0 : k(n.borderBottomWidth),
            p = i ? 0 : k(n.borderLeftWidth),
            E = d + u,
            m = l + c,
            g = p + h,
            A = _ + f,
            I = o ? e.offsetHeight - A - e.clientHeight : 0,
            T = a ? e.offsetWidth - g - e.clientWidth : 0,
            S = i ? i.width : k(n.width) - (r ? E + g : 0) - T,
            y = i ? i.height : k(n.height) - (r ? m + A : 0) - I,
            N = S + E + T + g,
            b = y + m + I + A,
            D = C({
                devicePixelContentBoxSize: U(Math.round(S * devicePixelRatio), Math.round(y * devicePixelRatio), s),
                borderBoxSize: U(N, b, s),
                contentBoxSize: U(S, y, s),
                contentRect: new v(d, l, S, y),
            });
        return w.set(e, D), D;
    },
    V = function (e, t, n) {
        var i = F(e, n),
            s = i.borderBoxSize,
            a = i.contentBoxSize,
            o = i.devicePixelContentBoxSize;
        switch (t) {
            case r.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case r.BORDER_BOX:
                return s;
            default:
                return a;
        }
    },
    B = function (e) {
        var t = F(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = C([t.borderBoxSize])),
            (this.contentBoxSize = C([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = C([t.devicePixelContentBoxSize]));
    },
    j = function (e) {
        if (O(e)) return 1 / 0;
        for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
        return t;
    },
    H = function () {
        var e = 1 / 0,
            t = [];
        T.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var i = [];
                n.activeTargets.forEach(function (t) {
                    var n = new B(t.target),
                        r = j(t.target);
                    i.push(n), (t.lastReportedSize = V(t.target, t.observedBox)), r < e && (e = r);
                }),
                    t.push(function () {
                        n.callback.call(n.observer, i, n.observer);
                    }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }
        });
        for (var n = 0; n < t.length; n++) (0, t[n])();
        return e;
    },
    Y = function (e) {
        T.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (n) {
                    n.isActive() && (j(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                });
        });
    },
    W = function () {
        var e = 0;
        for (
            Y(0);
            T.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            Y((e = H()));
        return (
            T.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && y(),
            e > 0
        );
    },
    K = [],
    $ = function (e) {
        if (!s) {
            var t = 0,
                n = document.createTextNode("");
            new MutationObserver(function () {
                return K.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(n, { characterData: !0 }),
                (s = function () {
                    n.textContent = "".concat(t ? t-- : t++);
                });
        }
        K.push(e), s();
    },
    z = function (e) {
        $(function () {
            requestAnimationFrame(e);
        });
    },
    q = 0,
    Z = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    X = [
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
    Q = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    J = !1,
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
                if ((void 0 === e && (e = 250), !J)) {
                    J = !0;
                    var n = Q(e);
                    z(function () {
                        var i = !1;
                        try {
                            i = W();
                        } finally {
                            if (((J = !1), (e = n - Q()), !q)) return;
                            i ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
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
                document.body ? t() : L.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    X.forEach(function (t) {
                        return L.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    X.forEach(function (t) {
                        return L.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    et = function (e) {
        !q && e > 0 && ee.start(), (q += e) || ee.stop();
    },
    en = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || r.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = V(this.target, this.observedBox, !0);
                return (
                    R((e = this.target)) ||
                        D(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    ei = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    er = new WeakMap(),
    es = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    ea = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new ei(e, t);
                er.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var i = er.get(e),
                    r = 0 === i.observationTargets.length;
                0 > es(i.observationTargets, t) &&
                    (r && T.push(i), i.observationTargets.push(new en(t, n && n.box)), et(1), ee.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = er.get(e),
                    i = es(n.observationTargets, t),
                    r = 1 === n.observationTargets.length;
                i >= 0 && (r && T.splice(T.indexOf(n), 1), n.observationTargets.splice(i, 1), et(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = er.get(e);
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
            ea.connect(this, e);
        }
        return (
            (e.prototype.observe = function (e, t) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!b(e))
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                ea.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!b(e))
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                ea.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                ea.disconnect(this);
            }),
            (e.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
            }),
            e
        );
    })(),
    el = n(294106),
    eu = n(340287);
function ec(e, t, n) {
    return (
        t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
        e
    );
}
function ed(e, t) {
    if (null == e) return {};
    var n,
        i,
        r = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = {},
                s = Object.keys(e);
            for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (i = 0; i < s.length; i++)
            (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
    }
    return r;
}
var e_ = 0;
class eh {
    constructor() {
        this.id = "".concat(e_++);
    }
}
var ef = new WeakMap(),
    ep = new WeakMap(),
    eE = new WeakMap(),
    em = new WeakMap(),
    eg = new WeakMap(),
    eA = new WeakMap(),
    eI = new WeakMap(),
    eT = new WeakMap(),
    eS = new WeakMap(),
    ey = new WeakMap(),
    eC = new WeakMap(),
    eN = new WeakMap(),
    ev = new WeakMap(),
    eR = new WeakMap(),
    eO = new WeakMap(),
    eb = new WeakMap(),
    eD = new WeakMap(),
    eL = new WeakMap(),
    ew = new WeakMap(),
    eM = new WeakMap(),
    eP = new WeakMap(),
    ex = Symbol("placeholder"),
    ek = Symbol("mark-placeholder"),
    eU = globalThis.Text,
    eG = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    eF = (e) => eB(e) && 8 === e.nodeType,
    eV = (e) => eB(e) && 1 === e.nodeType,
    eB = (e) => {
        var t = eG(e);
        return !!t && e instanceof t.Node;
    },
    ej = (e) => {
        var t = e && e.anchorNode && eG(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    eH = (e) => eB(e) && 3 === e.nodeType,
    eY = (e, t, n) => {
        for (
            var { childNodes: i } = e, r = i[t], s = t, a = !1, o = !1;
            (eF(r) ||
                (eV(r) && 0 === r.childNodes.length) ||
                (eV(r) && "false" === r.getAttribute("contenteditable"))) &&
            (!a || !o);
        ) {
            if (s >= i.length) {
                (a = !0), (s = t - 1), (n = "backward");
                continue;
            }
            if (s < 0) {
                (o = !0), (s = t + 1), (n = "forward");
                continue;
            }
            (r = i[s]), (t = s), (s += "forward" === n ? 1 : -1);
        }
        return [r, t];
    },
    eW = (e, t, n) => {
        var [i] = eY(e, t, n);
        return i;
    },
    eK = (e) => {
        var t = "";
        if (eH(e) && e.nodeValue) return e.nodeValue;
        if (eV(e)) {
            for (var n of Array.from(e.childNodes)) t += eK(n);
            var i = getComputedStyle(e).getPropertyValue("display");
            ("block" === i || "list" === i || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    e$ = /data-slate-fragment="(.+?)"/m,
    ez = (e, t, n) => {
        var { target: i } = t;
        if (eV(i) && i.matches('[contentEditable="false"]')) return !1;
        var { document: r } = te.getWindow(e);
        if (r.contains(i)) return te.hasDOMNode(e, i, { editable: !0 });
        var s = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var r of t) if (r === i || r.contains(i)) return !0;
            for (var s of n) if (s === i || s.contains(i)) return !0;
        });
        return !!s && s !== t && ez(e, s, n);
    },
    eq = parseInt(_.version.split(".")[0], 10) >= 17,
    eZ =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    eX = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eQ = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    eJ = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    e0 = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    e1 = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    e2 = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    e3 = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    e6 = eQ && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    e4 =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    e5 = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    e7 = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    e8 = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    e9 =
        (!e3 || !e6) &&
        !e1 &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    te = {
        isComposing: (e) => !!eN.get(e),
        getWindow(e) {
            var t = eE.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var n = eT.get(t);
            return n || ((n = new eh()), eT.set(t, n)), n;
        },
        findPath(e, t) {
            for (var n = [], i = t; ; ) {
                var r = ep.get(i);
                if (null == r)
                    if (I.KE.isEditor(i)) return n;
                    else break;
                var s = ef.get(i);
                if (null == s) break;
                n.unshift(s), (i = r);
            }
            throw Error("Unable to find the path for Slate node: ".concat(I.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = te.toDOMNode(e, e),
                n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) && null != n.getSelection ? n : t.ownerDocument;
        },
        isFocused: (e) => !!eC.get(e),
        isReadOnly: (e) => !!ey.get(e),
        blur(e) {
            var t = te.toDOMNode(e, e),
                n = te.findDocumentOrShadowRoot(e);
            eC.set(e, !1), n.activeElement === t && t.blur();
        },
        focus(e) {
            var t = te.toDOMNode(e, e),
                n = te.findDocumentOrShadowRoot(e);
            eC.set(e, !0), n.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                n = te.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && I.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var n,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: r = !1 } = i,
                s = te.toDOMNode(e, e);
            try {
                n = eV(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!n &&
                n.closest("[data-slate-editor]") === s &&
                (!r ||
                    !!n.isContentEditable ||
                    ("boolean" == typeof n.isContentEditable && n.closest('[contenteditable="false"]') === s) ||
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
            var n = eS.get(e),
                i = I.KE.isEditor(t) ? em.get(e) : null == n ? void 0 : n.get(te.findKey(e, t));
            if (!i) throw Error("Cannot resolve a DOM node from Slate node: ".concat(I.h6.stringify(t)));
            return i;
        },
        toDOMPoint(e, t) {
            var [n] = I.KE.node(e, t.path),
                i = te.toDOMNode(e, n);
            I.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var r = Array.from(i.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), s = 0, a = 0;
                a < r.length;
                a++
            ) {
                var o = r[a],
                    l = o.childNodes[0];
                if (null != l && null != l.textContent) {
                    var { length: u } = l.textContent,
                        c = o.getAttribute("data-slate-length"),
                        d = s + (null == c ? u : parseInt(c, 10)),
                        _ = r[a + 1];
                    if (t.offset === d && null != _ && _.hasAttribute("data-slate-mark-placeholder")) {
                        var h,
                            f,
                            p = _.childNodes[0];
                        h = [p instanceof eU ? p : _, null != (f = _.textContent) && f.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= d) {
                        h = [l, Math.min(u, Math.max(0, t.offset - s))];
                        break;
                    }
                    s = d;
                }
            }
            if (!h) throw Error("Cannot resolve a DOM point from Slate point: ".concat(I.h6.stringify(t)));
            return h;
        },
        toDOMRange(e, t) {
            var { anchor: n, focus: i } = t,
                r = I.Q6.isBackward(t),
                s = te.toDOMPoint(e, n),
                a = I.Q6.isCollapsed(t) ? s : te.toDOMPoint(e, i),
                o = te.getWindow(e).document.createRange(),
                [l, u] = r ? a : s,
                [c, d] = r ? s : a,
                _ = !!(eV(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"),
                h = !!(eV(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
            return o.setStart(l, _ ? 1 : u), o.setEnd(c, h ? 1 : d), o;
        },
        toSlateNode(e, t) {
            var n = eV(t) ? t : t.parentElement;
            n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
            var i = n ? eA.get(n) : null;
            if (!i) throw Error("Cannot resolve a Slate node from DOM node: ".concat(n));
            return i;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
                { clientX: i, clientY: r, target: s } = t;
            if (null == i || null == r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var a = te.toSlateNode(e, t.target),
                o = te.findPath(e, a);
            if (I.Hg.isElement(a) && I.KE.isVoid(e, a)) {
                var l = s.getBoundingClientRect(),
                    u = e.isInline(a) ? i - l.left < l.left + l.width - i : r - l.top < l.top + l.height - r,
                    c = I.KE.point(e, o, { edge: u ? "start" : "end" }),
                    d = u ? I.KE.before(e, c) : I.KE.after(e, c);
                if (d) return I.KE.range(e, d);
            }
            var { document: _ } = te.getWindow(e);
            if (_.caretRangeFromPoint) n = _.caretRangeFromPoint(i, r);
            else {
                var h = _.caretPositionFromPoint(i, r);
                h && ((n = _.createRange()).setStart(h.offsetNode, h.offset), n.setEnd(h.offsetNode, h.offset));
            }
            if (!n) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return te.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, n) {
            var { exactMatch: i, suppressThrow: r } = n,
                [s, a] = i
                    ? t
                    : ((e) => {
                          var [t, n] = e;
                          if (eV(t) && t.childNodes.length) {
                              var i = n === t.childNodes.length,
                                  r = i ? n - 1 : n;
                              for (
                                  [t, r] = eY(t, r, i ? "backward" : "forward"), i = r < n;
                                  eV(t) && t.childNodes.length;
                              ) {
                                  var s = i ? t.childNodes.length - 1 : 0;
                                  t = eW(t, s, i ? "backward" : "forward");
                              }
                              n = i && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, n];
                      })(t),
                o = s.parentNode,
                l = null,
                u = 0;
            if (o) {
                var c,
                    d,
                    _ = te.toDOMNode(e, e),
                    h = o.closest('[data-slate-void="true"]'),
                    f = h && _.contains(h) ? h : null,
                    p = o.closest("[data-slate-leaf]"),
                    E = null;
                if (p) {
                    if ((l = p.closest('[data-slate-node="text"]'))) {
                        var m = te.getWindow(e).document.createRange();
                        m.setStart(l, 0), m.setEnd(s, a);
                        var g = m.cloneContents();
                        [
                            ...Array.prototype.slice.call(g.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(g.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                eQ &&
                                !i &&
                                e.hasAttribute("data-slate-zero-width") &&
                                e.textContent.length > 0 &&
                                "\uFEFF" !== e.textContext
                            ) {
                                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (u = g.textContent.length),
                            (E = l);
                    }
                } else if (f) {
                    for (var A = f.querySelectorAll("[data-slate-leaf]"), T = 0; T < A.length; T++) {
                        var S = A[T];
                        if (te.hasDOMNode(e, S)) {
                            p = S;
                            break;
                        }
                    }
                    p
                        ? ((l = p.closest('[data-slate-node="text"]')),
                          (u = (E = p).textContent.length),
                          E.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                E &&
                    u === E.textContent.length &&
                    eQ &&
                    "z" === E.getAttribute("data-slate-zero-width") &&
                    null != (c = E.textContent) &&
                    c.startsWith("\uFEFF") &&
                    (o.hasAttribute("data-slate-zero-width") ||
                        (eJ && null != (d = E.textContent) && d.endsWith("\n\n"))) &&
                    u--;
            }
            if (eQ && !l && !i) {
                var y = o.hasAttribute("data-slate-node") ? o : o.closest("[data-slate-node]");
                if (y && te.hasDOMNode(e, y, { editable: !0 })) {
                    var C = te.toSlateNode(e, y),
                        { path: N, offset: v } = I.KE.start(e, te.findPath(e, C));
                    return y.querySelector("[data-slate-leaf]") || (v = a), { path: N, offset: v };
                }
            }
            if (!l) {
                if (r) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var R = te.toSlateNode(e, l);
            return { path: te.findPath(e, R), offset: u };
        },
        toSlateRange(e, t, n) {
            var i,
                r,
                s,
                a,
                o,
                l,
                { exactMatch: u, suppressThrow: c } = n;
            if (
                ((ej(t) ? t.anchorNode : t.startContainer) &&
                    (ej(t)
                        ? ((i = t.anchorNode),
                          (r = t.anchorOffset),
                          (s = t.focusNode),
                          (a = t.focusOffset),
                          (o =
                              e2 &&
                              ((e) => {
                                  for (var t = e && e.parentNode; t; ) {
                                      if ("[object ShadowRoot]" === t.toString()) return !0;
                                      t = t.parentNode;
                                  }
                                  return !1;
                              })(i)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((i = t.startContainer),
                          (r = t.startOffset),
                          (s = t.endContainer),
                          (a = t.endOffset),
                          (o = t.collapsed))),
                null == i || null == s || null == r || null == a)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in s &&
                "false" === s.getAttribute("contenteditable") &&
                ((s = i), (a = (null == (l = i.textContent) ? void 0 : l.length) || 0));
            var d = te.toSlatePoint(e, [i, r], { exactMatch: u, suppressThrow: c });
            if (!d) return null;
            var _ = o ? d : te.toSlatePoint(e, [s, a], { exactMatch: u, suppressThrow: c });
            if (!_) return null;
            if (eJ && !o && i !== s) {
                var h = I.KE.isEnd(e, d, d.path),
                    f = I.KE.isStart(e, _, _.path);
                h && (d = I.KE.after(e, d) || d), f && (_ = I.KE.before(e, _) || _);
            }
            var p = { anchor: d, focus: _ };
            return (
                I.Q6.isExpanded(p) &&
                    I.Q6.isForward(p) &&
                    eV(s) &&
                    I.KE.void(e, { at: p.focus, mode: "highest" }) &&
                    (p = I.KE.unhangRange(e, p, { voids: !0 })),
                p
            );
        },
        hasRange(e, t) {
            var { anchor: n, focus: i } = t;
            return I.KE.hasPath(e, n.path) && I.KE.hasPath(e, i.path);
        },
        hasTarget: (e, t) => eB(t) && te.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => eB(t) && te.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => te.hasEditableTarget(e, t) || te.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (ey.get(e)) return !1;
            var n = te.hasTarget(e, t) && te.toSlateNode(e, t);
            return I.Hg.isElement(n) && I.KE.isVoid(e, n);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = eO.get(e)) || t();
        },
        androidPendingDiffs: (e) => eL.get(e),
    },
    tt = ["anchor", "focus"],
    tn = ["anchor", "focus"],
    ti = (e, t) => {
        var n = ed(e, tt),
            i = ed(t, tn);
        return (
            e[ex] === t[ex] &&
            Object.keys(n).length === Object.keys(i).length &&
            Object.keys(n).every((e) => i.hasOwnProperty(e) && n[e] === i[e])
        );
    },
    tr = e8 ? _.useLayoutEffect : _.useEffect,
    ts = (e) => {
        var { isLast: t, leaf: n, parent: i, text: r } = e,
            s = tc(),
            a = te.findPath(s, r),
            o = I.wA.parent(a),
            l = !0 === n[ek];
        return s.isVoid(i)
            ? _.createElement(tl, { length: I.bP.string(i).length })
            : "" !== n.text || i.children[i.children.length - 1] !== r || s.isInline(i) || "" !== I.KE.string(s, o)
              ? "" === n.text
                  ? _.createElement(tl, { isMarkPlaceholder: l })
                  : t && "\n" === n.text.slice(-1)
                    ? _.createElement(ta, { isTrailing: !0, text: n.text })
                    : _.createElement(ta, { text: n.text })
              : _.createElement(tl, { isLineBreak: !0, isMarkPlaceholder: l });
    },
    ta = (e) => {
        var { text: t, isTrailing: n = !1 } = e,
            i = (0, _.useRef)(null),
            r = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [s] = (0, _.useState)(r);
        return (
            tr(() => {
                var e = r();
                i.current && i.current.textContent !== e && (i.current.textContent = e);
            }),
            _.createElement(to, { ref: i }, s)
        );
    },
    to = (0, _.memo)(
        (0, _.forwardRef)((e, t) => _.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    tl = (e) => {
        var { length: t = 0, isLineBreak: n = !1, isMarkPlaceholder: i = !1 } = e,
            r = { "data-slate-zero-width": n ? "n" : "z", "data-slate-length": t };
        return (
            i && (r["data-slate-mark-placeholder"] = !0),
            _.createElement(
                "span",
                Object.assign({}, r),
                eQ && n ? null : "\uFEFF",
                n ? _.createElement("br", null) : null,
            )
        );
    },
    tu = (0, _.createContext)(null),
    tc = () => {
        var e = (0, _.useContext)(tu);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    td = _.memo(
        (e) => {
            var {
                    leaf: t,
                    isLast: n,
                    text: i,
                    parent: r,
                    renderPlaceholder: s,
                    renderLeaf: a = (e) => _.createElement(t_, Object.assign({}, e)),
                } = e,
                o = (0, _.useRef)(null),
                l = (0, _.useRef)(null),
                u = tc(),
                c = (0, _.useRef)(null);
            (0, _.useEffect)(
                () => () => {
                    c.current && c.current.disconnect();
                },
                [],
            ),
                (0, _.useEffect)(() => {
                    var e = null == l ? void 0 : l.current;
                    if (
                        (e ? eg.set(u, e) : eg.delete(u),
                        c.current
                            ? (c.current.disconnect(), e && c.current.observe(e))
                            : e &&
                              ((c.current = new (window.ResizeObserver || eo)(() => {
                                  var e = eP.get(u);
                                  null == e || e();
                              })),
                              c.current.observe(e)),
                        !e && o.current)
                    ) {
                        var t = eP.get(u);
                        null == t || t();
                    }
                    return (
                        (o.current = l.current),
                        () => {
                            eg.delete(u);
                        }
                    );
                }, [l, t]);
            var d = _.createElement(ts, { isLast: n, leaf: t, parent: r, text: i });
            if (t[ex]) {
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
                        ref: l,
                    },
                };
                d = _.createElement(_.Fragment, null, s(h), d);
            }
            return a({ attributes: { "data-slate-leaf": !0 }, children: d, leaf: t, text: i });
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            I.EY.equals(t.leaf, e.leaf) &&
            t.leaf[ex] === e.leaf[ex],
    ),
    t_ = (e) => {
        var { attributes: t, children: n } = e;
        return _.createElement("span", Object.assign({}, t), n);
    },
    th = _.memo(
        (e) => {
            for (
                var { decorations: t, isLast: n, parent: i, renderPlaceholder: r, renderLeaf: s, text: a } = e,
                    o = tc(),
                    l = (0, _.useRef)(null),
                    u = I.EY.decorations(a, t),
                    c = te.findKey(o, a),
                    d = [],
                    h = 0;
                h < u.length;
                h++
            ) {
                var f = u[h];
                d.push(
                    _.createElement(td, {
                        isLast: n && h === u.length - 1,
                        key: "".concat(c.id, "-").concat(h),
                        renderPlaceholder: r,
                        leaf: f,
                        text: a,
                        parent: i,
                        renderLeaf: s,
                    }),
                );
            }
            var p = (0, _.useCallback)(
                (e) => {
                    var t = eS.get(o);
                    e
                        ? (null == t || t.set(c, e), eI.set(a, e), eA.set(e, a))
                        : (null == t || t.delete(c), eI.delete(a), l.current && eA.delete(l.current)),
                        (l.current = e);
                },
                [l, o, c, a],
            );
            return _.createElement("span", { "data-slate-node": "text", ref: p }, d);
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
                    var i = e[n],
                        r = t[n];
                    if (i.anchor.offset !== r.anchor.offset || i.focus.offset !== r.focus.offset || !ti(i, r))
                        return !1;
                }
                return !0;
            })(t.decorations, e.decorations),
    ),
    tf = _.memo(
        (e) => {
            var {
                    decorations: t,
                    element: n,
                    renderElement: i = (e) => _.createElement(tp, Object.assign({}, e)),
                    renderPlaceholder: r,
                    renderLeaf: s,
                    selection: a,
                } = e,
                l = tc(),
                u = tT(),
                c = l.isInline(n),
                d = te.findKey(l, n),
                h = (0, _.useCallback)(
                    (e) => {
                        var t = eS.get(l);
                        e
                            ? (null == t || t.set(d, e), eI.set(n, e), eA.set(e, n))
                            : (null == t || t.delete(d), eI.delete(n));
                    },
                    [l, d, n],
                ),
                f = tA({
                    decorations: t,
                    node: n,
                    renderElement: i,
                    renderPlaceholder: r,
                    renderLeaf: s,
                    selection: a,
                }),
                p = { "data-slate-node": "element", ref: h };
            if ((c && (p["data-slate-inline"] = !0), !c && I.KE.hasInlines(l, n))) {
                var E = I.bP.string(n),
                    m = o()(E);
                "rtl" === m && (p.dir = m);
            }
            if (I.KE.isVoid(l, n)) {
                (p["data-slate-void"] = !0), !u && c && (p.contentEditable = !1);
                var [[g]] = I.bP.texts(n);
                (f = _.createElement(
                    c ? "span" : "div",
                    {
                        "data-slate-spacer": !0,
                        style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                    },
                    _.createElement(th, { renderPlaceholder: r, decorations: [], isLast: !1, parent: n, text: g }),
                )),
                    ef.set(g, 0),
                    ep.set(g, n);
            }
            return i({ attributes: p, children: f, element: n, decorations: t });
        },
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var n = 0; n < e.length; n++) {
                    var i = e[n],
                        r = t[n];
                    if (!I.Q6.equals(i, r) || !ti(i, r)) return !1;
                }
                return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && I.Q6.equals(e.selection, t.selection))),
    ),
    tp = (e) => {
        var { attributes: t, children: n, element: i } = e,
            r = tc().isInline(i) ? "span" : "div";
        return _.createElement(r, Object.assign({}, t, { style: { position: "relative" } }), n);
    },
    tE = (0, _.createContext)(() => []),
    tm = (0, _.createContext)(!1),
    tg = () => (0, _.useContext)(tm),
    tA = (e) => {
        for (
            var { decorations: t, node: n, renderElement: i, renderPlaceholder: r, renderLeaf: s, selection: a } = e,
                o = (0, _.useContext)(tE),
                l = tc(),
                u = te.findPath(l, n),
                c = [],
                d = I.Hg.isElement(n) && !l.isInline(n) && I.KE.hasInlines(l, n),
                h = 0;
            h < n.children.length;
            h++
        ) {
            var f = u.concat(h),
                p = n.children[h],
                E = te.findKey(l, p),
                m = I.KE.range(l, f),
                g = a && I.Q6.intersection(m, a),
                A = o([p, f]);
            for (var T of t) {
                var S = I.Q6.intersection(T, m);
                S && A.push(S);
            }
            I.Hg.isElement(p)
                ? c.push(
                      _.createElement(
                          tm.Provider,
                          { key: "provider-".concat(E.id), value: !!g },
                          _.createElement(tf, {
                              decorations: A,
                              element: p,
                              key: E.id,
                              renderElement: i,
                              renderPlaceholder: r,
                              renderLeaf: s,
                              selection: g,
                          }),
                      ),
                  )
                : c.push(
                      _.createElement(th, {
                          decorations: A,
                          key: E.id,
                          isLast: d && h === n.children.length - 1,
                          parent: n,
                          renderPlaceholder: r,
                          renderLeaf: s,
                          text: p,
                      }),
                  ),
                ef.set(p, h),
                ep.set(p, n);
        }
        return c;
    },
    tI = (0, _.createContext)(!1),
    tT = () => (0, _.useContext)(tI),
    tS = (0, _.createContext)(null),
    ty = {
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
    tC = {
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
    tN = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    tv = (e) => {
        var t = ty[e],
            n = tC[e],
            i = tN[e],
            r = t && (0, el.isKeyHotkey)(t),
            s = n && (0, el.isKeyHotkey)(n),
            a = i && (0, el.isKeyHotkey)(i);
        return (e) => !!((r && r(e)) || (eX && s && s(e)) || (!eX && a && a(e)));
    },
    tR = {
        isBold: tv("bold"),
        isCompose: tv("compose"),
        isMoveBackward: tv("moveBackward"),
        isMoveForward: tv("moveForward"),
        isDeleteBackward: tv("deleteBackward"),
        isDeleteForward: tv("deleteForward"),
        isDeleteLineBackward: tv("deleteLineBackward"),
        isDeleteLineForward: tv("deleteLineForward"),
        isDeleteWordBackward: tv("deleteWordBackward"),
        isDeleteWordForward: tv("deleteWordForward"),
        isExtendBackward: tv("extendBackward"),
        isExtendForward: tv("extendForward"),
        isExtendLineBackward: tv("extendLineBackward"),
        isExtendLineForward: tv("extendLineForward"),
        isItalic: tv("italic"),
        isMoveLineBackward: tv("moveLineBackward"),
        isMoveLineForward: tv("moveLineForward"),
        isMoveWordBackward: tv("moveWordBackward"),
        isMoveWordForward: tv("moveWordForward"),
        isRedo: tv("redo"),
        isSoftBreak: tv("insertSoftBreak"),
        isSplitBlock: tv("splitBlock"),
        isTransposeCharacter: tv("transposeCharacter"),
        isUndo: tv("undo"),
    },
    tO = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class tb extends _.Component {
    constructor() {
        super(...arguments), (this.context = null), (this.manager = null), (this.mutationObserver = null);
    }
    observe() {
        var e,
            { node: t } = this.props;
        if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
        null == (e = this.mutationObserver) || e.observe(t.current, tO);
    }
    componentDidMount() {
        var e,
            t,
            { receivedUserInput: n } = this.props,
            i = this.context;
        (this.manager =
            ((e = []),
            {
                registerMutations: (t) => {
                    if (n.current) {
                        var r = t.filter((e) => ez(i, e, t));
                        e.push(...r);
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
            i,
            r = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
        return (
            null != r && r.length && (null == (i = this.manager) || i.registerMutations(r)),
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
tb.contextType = tu;
var tD = eQ
    ? tb
    : (e) => {
          var { children: t } = e;
          return _.createElement(_.Fragment, null, t);
      };
function tL(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
    return n.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function tw(e, t) {
    var { start: n, end: i, text: r } = t,
        s = e.slice(n, i),
        a = (function (e, t) {
            for (var n = Math.min(e.length, t.length), i = 0; i < n; i++) if (e.charAt(i) !== t.charAt(i)) return i;
            return n;
        })(s, r),
        o = Math.min(s.length - a, r.length - a),
        l = (function (e, t, n) {
            for (var i = Math.min(e.length, t.length, n), r = 0; r < i; r++)
                if (e.charAt(e.length - r - 1) !== t.charAt(t.length - r - 1)) return r;
            return i;
        })(s, r, o),
        u = { start: n + a, end: i - l, text: r.slice(a, r.length - l) };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function tM(e, t) {
    var { path: n, offset: i } = t;
    if (!I.KE.hasPath(e, n)) return null;
    var r = I.bP.get(e, n);
    if (!I.EY.isText(r)) return null;
    var s = I.KE.above(e, { match: (t) => I.Hg.isElement(t) && I.KE.isBlock(e, t), at: n });
    if (!s) return null;
    for (; i > r.text.length; ) {
        var a = I.KE.next(e, { at: n, match: I.EY.isText });
        if (!a || !I.wA.isDescendant(a[1], s[1])) return null;
        (i -= r.text.length), (r = a[0]), (n = a[1]);
    }
    return { path: n, offset: i };
}
function tP(e, t) {
    var n = tM(e, t.anchor);
    if (!n) return null;
    if (I.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var i = tM(e, t.focus);
    return i ? { anchor: n, focus: i } : null;
}
function tx(e, t, n) {
    var i = eL.get(e),
        r =
            null == i
                ? void 0
                : i.find((e) => {
                      var { path: n } = e;
                      return I.wA.equals(n, t.path);
                  });
    if (!r || t.offset <= r.diff.start) return I.bR.transform(t, n, { affinity: "backward" });
    var { diff: s } = r;
    if (t.offset <= s.start + s.text.length) {
        var a = { path: t.path, offset: s.start },
            o = I.bR.transform(a, n, { affinity: "backward" });
        return o ? { path: o.path, offset: o.offset + t.offset - s.start } : null;
    }
    var l = { path: t.path, offset: t.offset - s.text.length + s.end - s.start },
        u = I.bR.transform(l, n, { affinity: "backward" });
    return u
        ? "split_node" === n.type && I.wA.equals(n.path, t.path) && l.offset < n.position && s.start < n.position
            ? u
            : { path: u.path, offset: u.offset + s.text.length - s.end + s.start }
        : null;
}
function tk(e, t, n) {
    var i = tx(e, t.anchor, n);
    if (!i) return null;
    if (I.Q6.isCollapsed(t)) return { anchor: i, focus: i };
    var r = tx(e, t.focus, n);
    return r ? { anchor: i, focus: r } : null;
}
function tU(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function tG(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tU(Object(n), !0).forEach(function (t) {
                  ec(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tU(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var tF = function () {},
    tV = ["node"];
function tB(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
var tj = { subtree: !0, childList: !0, characterData: !0 },
    tH = [
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
    tY = ["text"];
function tW(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function tK(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tW(Object(n), !0).forEach(function (t) {
                  ec(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tW(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var t$ = (e) => _.createElement(_.Fragment, null, tA(e)),
    tz = (e) => {
        var t,
            n,
            i,
            r,
            s,
            a,
            l = (0, _.useCallback)((e) => _.createElement(tq, Object.assign({}, e)), []),
            {
                autoFocus: c,
                decorate: h = tZ,
                onDOMBeforeInput: f,
                placeholder: p,
                readOnly: E = !1,
                renderElement: m,
                renderLeaf: g,
                renderPlaceholder: A = l,
                scrollSelectionIntoView: T = tX,
                style: S = {},
                as: y = "div",
                disableDefaultStyles: C = !1,
            } = e,
            N = ed(e, tH),
            v = (() => {
                var e = (0, _.useContext)(tS);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [R, O] = (0, _.useState)(!1),
            b = (0, _.useRef)(null),
            D = (0, _.useRef)([]),
            { onUserInput: L, receivedUserInput: w } =
                ((t = tc()),
                (n = (0, _.useRef)(!1)),
                (i = (0, _.useRef)(0)),
                (r = (0, _.useCallback)(() => {
                    if (!n.current) {
                        n.current = !0;
                        var e = te.getWindow(t);
                        e.cancelAnimationFrame(i.current),
                            (i.current = e.requestAnimationFrame(() => {
                                n.current = !1;
                            }));
                    }
                }, [])),
                (0, _.useEffect)(() => () => cancelAnimationFrame(i.current), []),
                { receivedUserInput: n, onUserInput: r }),
            [, M] = (0, _.useReducer)((e) => e + 1, 0);
        eP.set(v, M), ey.set(v, E);
        var P = (0, _.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, _.useLayoutEffect)(
            () => () => {
                null == P || (null != P.latestElement && (P.latestElement.remove(), (P.latestElement = null)));
            },
            [],
        ),
            (0, _.useEffect)(() => {
                b.current && c && b.current.focus();
            }, [c]);
        var x = (0, _.useCallback)(
                d()(() => {
                    if (
                        (eQ || !te.isComposing(v)) &&
                        (!P.isUpdatingSelection || (null != U && U.isFlushing())) &&
                        !P.isDraggingInternally
                    ) {
                        var e = te.findDocumentOrShadowRoot(v),
                            { activeElement: t } = e,
                            n = te.toDOMNode(v, v),
                            i = e.getSelection();
                        if ((t === n ? ((P.latestElement = t), eC.set(v, !0)) : eC.delete(v), !i))
                            return I.gB.deselect(v);
                        var { anchorNode: r, focusNode: s } = i,
                            a = te.hasEditableTarget(v, r) || te.isTargetInsideNonReadonlyVoid(v, r),
                            o = te.hasEditableTarget(v, s) || te.isTargetInsideNonReadonlyVoid(v, s);
                        if (a && o) {
                            var l = te.toSlateRange(v, i, { exactMatch: !1, suppressThrow: !0 });
                            l &&
                                (te.isComposing(v) ||
                                (null != U && U.hasPendingChanges()) ||
                                (null != U && U.isFlushing())
                                    ? null == U || U.handleUserSelect(l)
                                    : I.gB.select(v, l));
                        }
                        !E || (a && o) || I.gB.deselect(v);
                    }
                }, 100),
                [E],
            ),
            k = (0, _.useMemo)(() => u()(x, 0), [x]),
            U = (function (e) {
                var t,
                    { node: n } = e,
                    i = ed(e, tV);
                if (!eQ) return null;
                var r = tc(),
                    s =
                        ((t = (0, _.useRef)(!1)),
                        (0, _.useEffect)(
                            () => (
                                (t.current = !0),
                                () => {
                                    t.current = !1;
                                }
                            ),
                            [],
                        ),
                        t.current),
                    [a] = (0, _.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: n, onDOMSelectionChange: i } = e,
                                r = !1,
                                s = null,
                                a = null,
                                o = null,
                                l = 0,
                                u = !1,
                                c = () => {
                                    var e = eM.get(t);
                                    if ((eM.delete(t), e)) {
                                        var { selection: n } = t,
                                            i = tP(t, e);
                                        !i || (n && I.Q6.equals(i, n)) || I.gB.select(t, i);
                                    }
                                },
                                d = () => {
                                    if (
                                        (a && (clearTimeout(a), (a = null)),
                                        o && (clearTimeout(o), (o = null)),
                                        !E() && !p())
                                    )
                                        return void c();
                                    r || ((r = !0), setTimeout(() => (r = !1))), p() && (r = "action");
                                    var e = t.selection && I.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    eD.set(t, t.marks), tF("flush", ew.get(t), eL.get(t));
                                    for (var s = E(); (l = null == (d = eL.get(t)) ? void 0 : d[0]); ) {
                                        var l,
                                            d,
                                            _,
                                            h = eb.get(t);
                                        void 0 !== h && (eb.delete(t), (t.marks = h)), h && !1 === u && (u = null);
                                        var f = (function (e) {
                                            var { path: t, diff: n } = e;
                                            return {
                                                anchor: { path: t, offset: n.start },
                                                focus: { path: t, offset: n.end },
                                            };
                                        })(l);
                                        (t.selection && I.Q6.equals(t.selection, f)) || I.gB.select(t, f),
                                            l.diff.text ? I.KE.insertText(t, l.diff.text) : I.KE.deleteFragment(t),
                                            eL.set(
                                                t,
                                                null == (_ = eL.get(t))
                                                    ? void 0
                                                    : _.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== l.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: n, diff: i } = t;
                                                if (!I.KE.hasPath(e, n)) return !1;
                                                var r = I.bP.get(e, n);
                                                if (!I.EY.isText(r)) return !1;
                                                if (i.start !== r.text.length || 0 === i.text.length)
                                                    return r.text.slice(i.start, i.start + i.text.length) === i.text;
                                                var s = I.wA.next(n);
                                                if (!I.KE.hasPath(e, s)) return !1;
                                                var a = I.bP.get(e, s);
                                                return I.EY.isText(a) && a.text.startsWith(i.text);
                                            })(t, l) &&
                                                ((s = !1),
                                                ew.delete(t),
                                                eD.delete(t),
                                                (r = "action"),
                                                eM.delete(t),
                                                n.cancel(),
                                                i.cancel(),
                                                null == e || e.unref());
                                    }
                                    var m = null == e ? void 0 : e.unref();
                                    if (
                                        (!m ||
                                            eM.get(t) ||
                                            (t.selection && I.Q6.equals(m, t.selection)) ||
                                            I.gB.select(t, m),
                                        p())
                                    )
                                        return void (() => {
                                            var e = ew.get(t);
                                            if ((ew.delete(t), e)) {
                                                if (e.at) {
                                                    var n = I.bR.isPoint(e.at) ? tM(t, e.at) : tP(t, e.at);
                                                    if (!n) return;
                                                    var i = I.KE.range(t, n);
                                                    (t.selection && I.Q6.equals(t.selection, i)) || I.gB.select(t, n);
                                                }
                                                e.run();
                                            }
                                        })();
                                    s && n(), n.flush(), i.flush(), c();
                                    var g = eD.get(t);
                                    eD.delete(t), void 0 !== g && ((t.marks = g), t.onChange());
                                },
                                _ = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        n = eg.get(t);
                                    if (n) {
                                        if (E() || e) {
                                            n.style.display = "none";
                                            return;
                                        }
                                        n.style.removeProperty("display");
                                    }
                                },
                                h = (e, n) => {
                                    var i,
                                        r,
                                        s,
                                        a,
                                        o,
                                        u,
                                        c,
                                        d,
                                        h = null != (d = eL.get(t)) ? d : [];
                                    eL.set(t, h);
                                    var f = I.bP.leaf(t, e),
                                        p = h.findIndex((t) => I.wA.equals(t.path, e));
                                    if (p < 0) {
                                        tw(f.text, n) && h.push({ path: e, diff: n, id: l++ }), _();
                                        return;
                                    }
                                    var E =
                                        ((i = f.text),
                                        (r = h[p].diff),
                                        (s = Math.min(r.start, n.start)),
                                        (a = Math.max(0, Math.min(r.start + r.text.length, n.end) - n.start)),
                                        (o = tL(i, r, n)),
                                        (u = Math.max(
                                            n.start + n.text.length,
                                            r.start +
                                                r.text.length +
                                                (r.start + r.text.length > n.start ? n.text.length : 0) -
                                                a,
                                        )),
                                        (c = o.slice(s, u)),
                                        tw(i, {
                                            start: s,
                                            end: Math.max(r.end, n.end - r.text.length + (r.end - r.start)),
                                            text: c,
                                        }));
                                    if (!E) {
                                        h.splice(p, 1), _();
                                        return;
                                    }
                                    h[p] = tG(tG({}, h[p]), {}, { diff: E });
                                },
                                f = function (e) {
                                    var { at: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (u = !1),
                                        eM.delete(t),
                                        n.cancel(),
                                        i.cancel(),
                                        p() && d(),
                                        ew.set(t, { at: r, run: e }),
                                        (o = setTimeout(d));
                                },
                                p = () => !!ew.get(t),
                                E = () => {
                                    var e;
                                    return !!(null != (e = eL.get(t)) && e.length);
                                },
                                m = (e) => {
                                    eM.set(t, e), a && (clearTimeout(a), (a = null));
                                    var { selection: n } = t;
                                    if (e) {
                                        var i = !n || !I.wA.equals(n.anchor.path, e.anchor.path),
                                            r =
                                                !n ||
                                                !I.wA.equals(n.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        ((i && u) || r) && (u = !1), (i || E()) && (a = setTimeout(d, 200));
                                    }
                                },
                                g = () => {
                                    p() || (o = setTimeout(d));
                                };
                            return {
                                flush: d,
                                scheduleFlush: g,
                                hasPendingDiffs: E,
                                hasPendingAction: p,
                                hasPendingChanges: () => p() || E(),
                                isFlushing: () => r,
                                handleUserSelect: m,
                                handleCompositionEnd: (e) => {
                                    s && clearTimeout(s),
                                        (s = setTimeout(() => {
                                            eN.set(t, !1), d();
                                        }, 25));
                                },
                                handleCompositionStart: (e) => {
                                    eN.set(t, !0), s && (clearTimeout(s), (s = null));
                                },
                                handleDOMBeforeInput: (e) => {
                                    a && (clearTimeout(a), (a = null));
                                    var { inputType: n } = e,
                                        i = null,
                                        r = e.dataTransfer || e.data || void 0;
                                    !1 !== u && "insertText" !== n && "insertCompositionText" !== n && (u = !1);
                                    var [s] = e.getTargetRanges();
                                    s && (i = te.toSlateRange(t, s, { exactMatch: !1, suppressThrow: !0 }));
                                    var o = te.getWindow(t).getSelection();
                                    if (
                                        (!i &&
                                            o &&
                                            ((s = o),
                                            (i = te.toSlateRange(t, o, { exactMatch: !1, suppressThrow: !0 }))),
                                        (i = null != (D = i) ? D : t.selection))
                                    ) {
                                        var l = !0;
                                        if (n.startsWith("delete")) {
                                            if (I.Q6.isExpanded(i)) {
                                                var [c, d] = I.Q6.edges(i);
                                                if (I.bP.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                                                    var _ = I.KE.next(t, { at: c.path, match: I.EY.isText });
                                                    _ && I.wA.equals(_[1], d.path) && (i = { anchor: d, focus: d });
                                                }
                                            }
                                            var p = n.endsWith("Backward") ? "backward" : "forward",
                                                [E, A] = I.Q6.edges(i),
                                                [T, S] = I.KE.leaf(t, E.path),
                                                y = { text: "", start: E.offset, end: A.offset },
                                                C = eL.get(t),
                                                N = null == C ? void 0 : C.find((e) => I.wA.equals(e.path, S)),
                                                v = N ? [N.diff, y] : [y];
                                            if ((0 === tL(T.text, ...v).length && (l = !1), I.Q6.isExpanded(i))) {
                                                if (l && I.wA.equals(i.anchor.path, i.focus.path)) {
                                                    var R = { path: i.anchor.path, offset: E.offset };
                                                    return (
                                                        m(I.KE.range(t, R, R)),
                                                        h(i.anchor.path, { text: "", end: A.offset, start: E.offset })
                                                    );
                                                }
                                                return f(() => I.KE.deleteFragment(t, { direction: p }), { at: i });
                                            }
                                        }
                                        switch (n) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return f(() => I.KE.deleteFragment(t), { at: i });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: O } = i;
                                                if (l && I.Q6.isCollapsed(i)) {
                                                    var b = I.bP.leaf(t, O.path);
                                                    if (O.offset < b.text.length)
                                                        return h(O.path, {
                                                            text: "",
                                                            start: O.offset,
                                                            end: O.offset + 1,
                                                        });
                                                }
                                                return f(() => I.KE.deleteForward(t), { at: i });
                                            case "deleteContentBackward":
                                                var D,
                                                    L,
                                                    { anchor: w } = i,
                                                    M = ej(s) ? s.isCollapsed : !!(null != (L = s) && L.collapsed);
                                                if (l && M && I.Q6.isCollapsed(i) && w.offset > 0)
                                                    return h(w.path, { text: "", start: w.offset - 1, end: w.offset });
                                                return f(() => I.KE.deleteBackward(t), { at: i });
                                            case "deleteEntireSoftLine":
                                                return f(
                                                    () => {
                                                        I.KE.deleteBackward(t, { unit: "line" }),
                                                            I.KE.deleteForward(t, { unit: "line" });
                                                    },
                                                    { at: i },
                                                );
                                            case "deleteHardLineBackward":
                                                return f(() => I.KE.deleteBackward(t, { unit: "block" }), { at: i });
                                            case "deleteSoftLineBackward":
                                                return f(() => I.KE.deleteBackward(t, { unit: "line" }), { at: i });
                                            case "deleteHardLineForward":
                                                return f(() => I.KE.deleteForward(t, { unit: "block" }), { at: i });
                                            case "deleteSoftLineForward":
                                                return f(() => I.KE.deleteForward(t, { unit: "line" }), { at: i });
                                            case "deleteWordBackward":
                                                return f(() => I.KE.deleteBackward(t, { unit: "word" }), { at: i });
                                            case "deleteWordForward":
                                                return f(() => I.KE.deleteForward(t, { unit: "word" }), { at: i });
                                            case "insertLineBreak":
                                                return f(() => I.KE.insertSoftBreak(t), { at: i });
                                            case "insertParagraph":
                                                return f(() => I.KE.insertBreak(t), { at: i });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == r ? void 0 : r.constructor.name) === "DataTransfer")
                                                    return f(() => te.insertData(t, r), { at: i });
                                                var P = null != r ? r : "";
                                                if (
                                                    (eb.get(t) && (P = P.replace("\uFEFF", "")),
                                                    "insertText" === n && /.*\n.*\n$/.test(P) && (P = P.slice(0, -1)),
                                                    P.includes("\n"))
                                                )
                                                    return f(
                                                        () => {
                                                            var e = P.split("\n");
                                                            e.forEach((n, i) => {
                                                                n && I.KE.insertText(t, n),
                                                                    i !== e.length - 1 && I.KE.insertSoftBreak(t);
                                                            });
                                                        },
                                                        { at: i },
                                                    );
                                                if (I.wA.equals(i.anchor.path, i.focus.path)) {
                                                    var [x, k] = I.Q6.edges(i),
                                                        U = { start: x.offset, end: k.offset, text: P };
                                                    if (P && u && "insertCompositionText" === n) {
                                                        var G = u.start + u.text.search(/\S|$/);
                                                        U.start + U.text.search(/\S|$/) === G + 1 &&
                                                        U.end === u.start + u.text.length
                                                            ? ((U.start -= 1), (u = null), g())
                                                            : (u = !1);
                                                    } else
                                                        u =
                                                            "insertText" === n &&
                                                            (null === u
                                                                ? U
                                                                : !!(u && I.Q6.isCollapsed(i)) &&
                                                                  u.end + u.text.length === x.offset &&
                                                                  tG(tG({}, u), {}, { text: u.text + P }));
                                                    if (l) return void h(x.path, U);
                                                }
                                                return f(() => I.KE.insertText(t, P), { at: i });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    E() || (_(!0), setTimeout(_));
                                },
                                handleDomMutations: (e) => {
                                    if (!(E() || p()) && e.some((n) => ez(t, n, e))) {
                                        var n;
                                        null == (n = eP.get(t)) || n();
                                    }
                                },
                                handleInput: () => {
                                    (p() || !E()) && d();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? tB(Object(n), !0).forEach(function (t) {
                                              ec(e, t, n[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                                          : tB(Object(n)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                            });
                                }
                                return e;
                            })({ editor: r }, i),
                        ),
                    );
                return (
                    !(function (e, t, n) {
                        var [i] = (0, _.useState)(() => new MutationObserver(t));
                        tr(() => {
                            i.takeRecords();
                        }),
                            (0, _.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return i.observe(e.current, n), () => i.disconnect();
                            }, []);
                    })(n, a.handleDomMutations, tj),
                    eO.set(r, a.scheduleFlush),
                    s && a.flush(),
                    a
                );
            })({ node: b, onDOMSelectionChange: x, scheduleOnDOMSelectionChange: k });
        tr(() => {
            b.current && (e = eG(b.current))
                ? (eE.set(v, e), em.set(v, b.current), eI.set(v, b.current), eA.set(b.current, v))
                : eI.delete(v);
            var e,
                { selection: t } = v,
                n = te.findDocumentOrShadowRoot(v).getSelection();
            if (!(!n || !te.isFocused(v) || (null != U && U.hasPendingAction()))) {
                var i = (e) => {
                        var i = "None" !== n.type;
                        if (t || i) {
                            var r = em.get(v),
                                s = !1;
                            if ((r.contains(n.anchorNode) && r.contains(n.focusNode) && (s = !0), i && s && t && !e)) {
                                var a = te.toSlateRange(v, n, { exactMatch: !0, suppressThrow: !0 });
                                if (a && I.Q6.equals(a, t)) {
                                    if (!P.hasMarkPlaceholder) return;
                                    var o,
                                        { anchorNode: l } = n;
                                    if (
                                        null != l &&
                                        null != (o = l.parentElement) &&
                                        o.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !te.hasRange(v, t)) {
                                v.selection = te.toSlateRange(v, n, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            P.isUpdatingSelection = !0;
                            var u = t && te.toDOMRange(v, t);
                            return (
                                u
                                    ? (I.Q6.isBackward(t)
                                          ? n.setBaseAndExtent(
                                                u.endContainer,
                                                u.endOffset,
                                                u.startContainer,
                                                u.startOffset,
                                            )
                                          : n.setBaseAndExtent(
                                                u.startContainer,
                                                u.startOffset,
                                                u.endContainer,
                                                u.endOffset,
                                            ),
                                      T(v, u))
                                    : n.removeAllRanges(),
                                u
                            );
                        }
                    },
                    r = i(),
                    s = (null == U ? void 0 : U.isFlushing()) === "action";
                if (!eQ || !s)
                    return void setTimeout(() => {
                        r && eJ && te.toDOMNode(v, v).focus(), (P.isUpdatingSelection = !1);
                    });
                var a = null,
                    o = requestAnimationFrame(() => {
                        if (s) {
                            var e = (e) => {
                                try {
                                    te.toDOMNode(v, v).focus(), i(e);
                                } catch (e) {}
                            };
                            e(),
                                (a = setTimeout(() => {
                                    e(!0), (P.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), a && clearTimeout(a);
                };
            }
        });
        var G = (0, _.useCallback)(
                (e) => {
                    if ((L(), !E && te.hasEditableTarget(v, e.target) && !tJ(e, f))) {
                        if (U) return U.handleDOMBeforeInput(e);
                        k.flush(), x.flush();
                        var { selection: t } = v,
                            { inputType: n } = e,
                            i = e.dataTransfer || e.data || void 0,
                            r = "insertCompositionText" === n || "deleteCompositionText" === n;
                        if (!(r && te.isComposing(v))) {
                            var s = !1;
                            if (
                                "insertText" === n &&
                                t &&
                                I.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (s = !0), v.marks && (s = !1);
                                var { anchor: a } = t,
                                    [o, l] = te.toDOMPoint(v, a),
                                    u = null == (_ = o.parentElement) ? void 0 : _.closest("a"),
                                    c = te.getWindow(v);
                                if (s && u && te.hasDOMNode(v, u)) {
                                    var d,
                                        _,
                                        h,
                                        p,
                                        m =
                                            null == c
                                                ? void 0
                                                : c.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                    m === o && (null == (p = m.textContent) ? void 0 : p.length) === l && (s = !1);
                                }
                                if (
                                    s &&
                                    o.parentElement &&
                                    (null == c || null == (h = c.getComputedStyle(o.parentElement))
                                        ? void 0
                                        : h.whiteSpace) === "pre"
                                ) {
                                    var g = I.KE.above(v, {
                                        at: a.path,
                                        match: (e) => I.Hg.isElement(e) && I.KE.isBlock(v, e),
                                    });
                                    g && I.bP.string(g[0]).includes("	") && (s = !1);
                                }
                            }
                            if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                                var [A] = e.getTargetRanges();
                                if (A) {
                                    var T = te.toSlateRange(v, A, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !I.Q6.equals(t, T)) {
                                        s = !1;
                                        var S = !r && v.selection && I.KE.rangeRef(v, v.selection);
                                        I.gB.select(v, T), S && ev.set(v, S);
                                    }
                                }
                            }
                            if (!r) {
                                if ((s || e.preventDefault(), t && I.Q6.isExpanded(t) && n.startsWith("delete"))) {
                                    var y = n.endsWith("Backward") ? "backward" : "forward";
                                    I.KE.deleteFragment(v, { direction: y });
                                    return;
                                }
                                switch (n) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        I.KE.deleteFragment(v);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        I.KE.deleteForward(v);
                                        break;
                                    case "deleteContentBackward":
                                        I.KE.deleteBackward(v);
                                        break;
                                    case "deleteEntireSoftLine":
                                        I.KE.deleteBackward(v, { unit: "line" }),
                                            I.KE.deleteForward(v, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        I.KE.deleteBackward(v, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        I.KE.deleteBackward(v, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        I.KE.deleteForward(v, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        I.KE.deleteForward(v, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        I.KE.deleteBackward(v, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        I.KE.deleteForward(v, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        I.KE.insertSoftBreak(v);
                                        break;
                                    case "insertParagraph":
                                        I.KE.insertBreak(v);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === n && te.isComposing(v) && (O(!1), eN.set(v, !1)),
                                            (null == i ? void 0 : i.constructor.name) === "DataTransfer"
                                                ? te.insertData(v, i)
                                                : "string" == typeof i &&
                                                  (s
                                                      ? D.current.push(() => I.KE.insertText(v, i))
                                                      : I.KE.insertText(v, i));
                                }
                                var C = null == (d = ev.get(v)) ? void 0 : d.unref();
                                ev.delete(v), !C || (v.selection && I.Q6.equals(v.selection, C)) || I.gB.select(v, C);
                            }
                        }
                    }
                },
                [E, f],
            ),
            F = (0, _.useCallback)(
                (e) => {
                    null == e
                        ? (x.cancel(),
                          k.cancel(),
                          em.delete(v),
                          eI.delete(v),
                          b.current && e9 && b.current.removeEventListener("beforeinput", G))
                        : e9 && e.addEventListener("beforeinput", G),
                        (b.current = e);
                },
                [b, G, x, k],
            );
        tr(() => {
            var e = te.getWindow(v);
            return (
                e.document.addEventListener("selectionchange", k),
                () => {
                    e.document.removeEventListener("selectionchange", k);
                }
            );
        }, [k]);
        var V = h([v, []]);
        if (p && 1 === v.children.length && 1 === Array.from(I.bP.texts(v)).length && "" === I.bP.string(v) && !R) {
            var B = I.KE.start(v, []);
            V.push({ [ex]: !0, placeholder: p, anchor: B, focus: B });
        }
        var { marks: j } = v;
        if (((P.hasMarkPlaceholder = !1), v.selection && I.Q6.isCollapsed(v.selection) && j)) {
            var { anchor: H } = v.selection,
                Y = I.bP.leaf(v, H.path),
                W = ed(Y, tY);
            if (!I.EY.equals(Y, j, { loose: !0 })) {
                P.hasMarkPlaceholder = !0;
                var K = Object.fromEntries(Object.keys(W).map((e) => [e, null]));
                V.push(tK(tK(tK({ [ek]: !0 }, K), j), {}, { anchor: H, focus: H }));
            }
        }
        (0, _.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = v;
                if (e) {
                    var { anchor: t } = e,
                        n = I.bP.leaf(v, t.path);
                    if (j && !I.EY.equals(n, j, { loose: !0 })) return void eb.set(v, j);
                }
                eb.delete(v);
            });
        });
        var $ = null == (s = eg.get(v)) || null == (a = s.getBoundingClientRect()) ? void 0 : a.height;
        return _.createElement(
            tI.Provider,
            { value: E },
            _.createElement(
                tE.Provider,
                { value: h },
                _.createElement(
                    tD,
                    { node: b, receivedUserInput: w },
                    _.createElement(
                        y,
                        Object.assign({ role: E ? void 0 : "textbox", "aria-multiline": !E || void 0 }, N, {
                            spellCheck: (!!e9 || !e8) && N.spellCheck,
                            autoCorrect: e9 || !e8 ? N.autoCorrect : "false",
                            autoCapitalize: e9 || !e8 ? N.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !E,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: F,
                            style: tK(
                                tK(
                                    {},
                                    C
                                        ? {}
                                        : tK(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              $ ? { minHeight: $ } : {},
                                          ),
                                ),
                                S,
                            ),
                            onBeforeInput: (0, _.useCallback)(
                                (e) => {
                                    if (
                                        !e9 &&
                                        !E &&
                                        !tQ(e, N.onBeforeInput) &&
                                        te.hasSelectableTarget(v, e.target) &&
                                        (e.preventDefault(), !te.isComposing(v))
                                    ) {
                                        var t = e.data;
                                        I.KE.insertText(v, t);
                                    }
                                },
                                [E],
                            ),
                            onInput: (0, _.useCallback)((e) => {
                                if (!tQ(e, N.onInput)) {
                                    if (U) return void U.handleInput();
                                    for (var t of D.current) t();
                                    D.current = [];
                                }
                            }, []),
                            onBlur: (0, _.useCallback)(
                                (e) => {
                                    if (
                                        E ||
                                        P.isUpdatingSelection ||
                                        !te.hasSelectableTarget(v, e.target) ||
                                        tQ(e, N.onBlur)
                                    )
                                        return;
                                    var t = te.findDocumentOrShadowRoot(v);
                                    if (P.latestElement !== t.activeElement) {
                                        var { relatedTarget: n } = e;
                                        if (
                                            n !== te.toDOMNode(v, v) &&
                                            !(eV(n) && n.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != n && eB(n) && te.hasDOMNode(v, n)) {
                                                var i = te.toSlateNode(v, n);
                                                if (I.Hg.isElement(i) && !v.isVoid(i)) return;
                                            }
                                            if (e0) {
                                                var r = t.getSelection();
                                                null == r || r.removeAllRanges();
                                            }
                                            eC.delete(v);
                                        }
                                    }
                                },
                                [E, N.onBlur],
                            ),
                            onClick: (0, _.useCallback)(
                                (e) => {
                                    if (te.hasTarget(v, e.target) && !tQ(e, N.onClick) && eB(e.target)) {
                                        var t = te.toSlateNode(v, e.target),
                                            n = te.findPath(v, t);
                                        if (I.KE.hasPath(v, n) && I.bP.get(v, n) === t) {
                                            if (3 === e.detail && n.length >= 1) {
                                                var i = n;
                                                if (!(I.Hg.isElement(t) && I.KE.isBlock(v, t))) {
                                                    var r,
                                                        s = I.KE.above(v, {
                                                            match: (e) => I.Hg.isElement(e) && I.KE.isBlock(v, e),
                                                            at: n,
                                                        });
                                                    i = null != (r = null == s ? void 0 : s[1]) ? r : n.slice(0, 1);
                                                }
                                                var a = I.KE.range(v, i);
                                                I.gB.select(v, a);
                                                return;
                                            }
                                            if (!E) {
                                                var o = I.KE.start(v, n),
                                                    l = I.KE.end(v, n),
                                                    u = I.KE.void(v, { at: o }),
                                                    c = I.KE.void(v, { at: l });
                                                if (u && c && I.wA.equals(u[1], c[1])) {
                                                    var d = I.KE.range(v, o);
                                                    I.gB.select(v, d);
                                                }
                                            }
                                        }
                                    }
                                },
                                [E, N.onClick],
                            ),
                            onCompositionEnd: (0, _.useCallback)(
                                (e) => {
                                    if (
                                        te.hasSelectableTarget(v, e.target) &&
                                        (te.isComposing(v) && (O(!1), eN.set(v, !1)),
                                        null == U || U.handleCompositionEnd(e),
                                        !tQ(e, N.onCompositionEnd) && !eQ && !e0 && !e4 && !eZ && !e7 && !e5) &&
                                        e.data
                                    ) {
                                        var t = eb.get(v);
                                        eb.delete(v),
                                            void 0 !== t && (eD.set(v, v.marks), (v.marks = t)),
                                            I.KE.insertText(v, e.data);
                                        var n = eD.get(v);
                                        eD.delete(v), void 0 !== n && (v.marks = n);
                                    }
                                },
                                [N.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, _.useCallback)(
                                (e) => {
                                    !te.hasSelectableTarget(v, e.target) ||
                                        tQ(e, N.onCompositionUpdate) ||
                                        te.isComposing(v) ||
                                        (O(!0), eN.set(v, !0));
                                },
                                [N.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, _.useCallback)(
                                (e) => {
                                    if (
                                        te.hasSelectableTarget(v, e.target) &&
                                        (null == U || U.handleCompositionStart(e), !tQ(e, N.onCompositionStart) && !eQ)
                                    ) {
                                        O(!0);
                                        var { selection: t } = v;
                                        if (t) {
                                            if (I.Q6.isExpanded(t)) return void I.KE.deleteFragment(v);
                                            var n = I.KE.above(v, {
                                                match: (e) => I.Hg.isElement(e) && I.KE.isInline(v, e),
                                                mode: "highest",
                                            });
                                            if (n) {
                                                var [, i] = n;
                                                if (I.KE.isEnd(v, t.anchor, i)) {
                                                    var r = I.KE.after(v, i);
                                                    I.gB.setSelection(v, { anchor: r, focus: r });
                                                }
                                            }
                                        }
                                    }
                                },
                                [N.onCompositionStart],
                            ),
                            onCopy: (0, _.useCallback)(
                                (e) => {
                                    te.hasSelectableTarget(v, e.target) &&
                                        !tQ(e, N.onCopy) &&
                                        (e.preventDefault(), te.setFragmentData(v, e.clipboardData, "copy"));
                                },
                                [N.onCopy],
                            ),
                            onCut: (0, _.useCallback)(
                                (e) => {
                                    if (!E && te.hasSelectableTarget(v, e.target) && !tQ(e, N.onCut)) {
                                        e.preventDefault(), te.setFragmentData(v, e.clipboardData, "cut");
                                        var { selection: t } = v;
                                        if (t)
                                            if (I.Q6.isExpanded(t)) I.KE.deleteFragment(v);
                                            else {
                                                var n = I.bP.parent(v, t.anchor.path);
                                                I.KE.isVoid(v, n) && I.gB.delete(v);
                                            }
                                    }
                                },
                                [E, N.onCut],
                            ),
                            onDragOver: (0, _.useCallback)(
                                (e) => {
                                    if (te.hasTarget(v, e.target) && !tQ(e, N.onDragOver)) {
                                        var t = te.toSlateNode(v, e.target);
                                        I.Hg.isElement(t) && I.KE.isVoid(v, t) && e.preventDefault();
                                    }
                                },
                                [N.onDragOver],
                            ),
                            onDragStart: (0, _.useCallback)(
                                (e) => {
                                    if (!E && te.hasTarget(v, e.target) && !tQ(e, N.onDragStart)) {
                                        var t = te.toSlateNode(v, e.target),
                                            n = te.findPath(v, t);
                                        if (
                                            (I.Hg.isElement(t) && I.KE.isVoid(v, t)) ||
                                            I.KE.void(v, { at: n, voids: !0 })
                                        ) {
                                            var i = I.KE.range(v, n);
                                            I.gB.select(v, i);
                                        }
                                        (P.isDraggingInternally = !0), te.setFragmentData(v, e.dataTransfer, "drag");
                                    }
                                },
                                [E, N.onDragStart],
                            ),
                            onDrop: (0, _.useCallback)(
                                (e) => {
                                    if (!E && te.hasTarget(v, e.target) && !tQ(e, N.onDrop)) {
                                        e.preventDefault();
                                        var t = v.selection,
                                            n = te.findEventRange(v, e),
                                            i = e.dataTransfer;
                                        I.gB.select(v, n),
                                            P.isDraggingInternally &&
                                                t &&
                                                !I.Q6.equals(t, n) &&
                                                !I.KE.void(v, { at: n, voids: !0 }) &&
                                                I.gB.delete(v, { at: t }),
                                            te.insertData(v, i),
                                            te.isFocused(v) || te.focus(v);
                                    }
                                    P.isDraggingInternally = !1;
                                },
                                [E, N.onDrop],
                            ),
                            onDragEnd: (0, _.useCallback)(
                                (e) => {
                                    !E &&
                                        P.isDraggingInternally &&
                                        N.onDragEnd &&
                                        te.hasTarget(v, e.target) &&
                                        N.onDragEnd(e),
                                        (P.isDraggingInternally = !1);
                                },
                                [E, N.onDragEnd],
                            ),
                            onFocus: (0, _.useCallback)(
                                (e) => {
                                    if (
                                        !E &&
                                        !P.isUpdatingSelection &&
                                        te.hasEditableTarget(v, e.target) &&
                                        !tQ(e, N.onFocus)
                                    ) {
                                        var t = te.toDOMNode(v, v);
                                        if (
                                            ((P.latestElement = te.findDocumentOrShadowRoot(v).activeElement),
                                            eJ && e.target !== t)
                                        )
                                            return void t.focus();
                                        eC.set(v, !0);
                                    }
                                },
                                [E, N.onFocus],
                            ),
                            onKeyDown: (0, _.useCallback)(
                                (e) => {
                                    if (!E && te.hasEditableTarget(v, e.target)) {
                                        null == U || U.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (te.isComposing(v) && !1 === t.isComposing && (eN.set(v, !1), O(!1)),
                                            !(tQ(e, N.onKeyDown) || te.isComposing(v)))
                                        ) {
                                            var { selection: n } = v,
                                                i = v.children[null !== n ? n.focus.path[0] : 0],
                                                r = "rtl" === o()(I.bP.string(i));
                                            if (tR.isRedo(t)) {
                                                e.preventDefault(), "function" == typeof v.redo && v.redo();
                                                return;
                                            }
                                            if (tR.isUndo(t)) {
                                                e.preventDefault(), "function" == typeof v.undo && v.undo();
                                                return;
                                            }
                                            if (tR.isMoveLineBackward(t)) {
                                                e.preventDefault(), I.gB.move(v, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (tR.isMoveLineForward(t)) {
                                                e.preventDefault(), I.gB.move(v, { unit: "line" });
                                                return;
                                            }
                                            if (tR.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    I.gB.move(v, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (tR.isExtendLineForward(t)) {
                                                e.preventDefault(), I.gB.move(v, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (tR.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    n && I.Q6.isCollapsed(n)
                                                        ? I.gB.move(v, { reverse: !r })
                                                        : I.gB.collapse(v, { edge: "start" });
                                                return;
                                            }
                                            if (tR.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    n && I.Q6.isCollapsed(n)
                                                        ? I.gB.move(v, { reverse: r })
                                                        : I.gB.collapse(v, { edge: "end" });
                                                return;
                                            }
                                            if (tR.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    n && I.Q6.isExpanded(n) && I.gB.collapse(v, { edge: "focus" }),
                                                    I.gB.move(v, { unit: "word", reverse: !r });
                                                return;
                                            }
                                            if (tR.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    n && I.Q6.isExpanded(n) && I.gB.collapse(v, { edge: "focus" }),
                                                    I.gB.move(v, { unit: "word", reverse: r });
                                                return;
                                            }
                                            if (e9) {
                                                if (
                                                    (e2 || e0) &&
                                                    n &&
                                                    (tR.isDeleteBackward(t) || tR.isDeleteForward(t)) &&
                                                    I.Q6.isCollapsed(n)
                                                ) {
                                                    var s = I.bP.parent(v, n.anchor.path);
                                                    if (
                                                        I.Hg.isElement(s) &&
                                                        I.KE.isVoid(v, s) &&
                                                        (I.KE.isInline(v, s) || I.KE.isBlock(v, s))
                                                    ) {
                                                        e.preventDefault(), I.KE.deleteBackward(v, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (tR.isBold(t) || tR.isItalic(t) || tR.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (tR.isSoftBreak(t)) {
                                                    e.preventDefault(), I.KE.insertSoftBreak(v);
                                                    return;
                                                }
                                                if (tR.isSplitBlock(t)) {
                                                    e.preventDefault(), I.KE.insertBreak(v);
                                                    return;
                                                }
                                                if (tR.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        n && I.Q6.isExpanded(n)
                                                            ? I.KE.deleteFragment(v, { direction: "backward" })
                                                            : I.KE.deleteBackward(v);
                                                    return;
                                                }
                                                if (tR.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        n && I.Q6.isExpanded(n)
                                                            ? I.KE.deleteFragment(v, { direction: "forward" })
                                                            : I.KE.deleteForward(v);
                                                    return;
                                                }
                                                if (tR.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        n && I.Q6.isExpanded(n)
                                                            ? I.KE.deleteFragment(v, { direction: "backward" })
                                                            : I.KE.deleteBackward(v, { unit: "line" });
                                                    return;
                                                }
                                                if (tR.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        n && I.Q6.isExpanded(n)
                                                            ? I.KE.deleteFragment(v, { direction: "forward" })
                                                            : I.KE.deleteForward(v, { unit: "line" });
                                                    return;
                                                }
                                                if (tR.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        n && I.Q6.isExpanded(n)
                                                            ? I.KE.deleteFragment(v, { direction: "backward" })
                                                            : I.KE.deleteBackward(v, { unit: "word" });
                                                    return;
                                                }
                                                if (tR.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        n && I.Q6.isExpanded(n)
                                                            ? I.KE.deleteFragment(v, { direction: "forward" })
                                                            : I.KE.deleteForward(v, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [E, N.onKeyDown],
                            ),
                            onPaste: (0, _.useCallback)(
                                (e) => {
                                    let t;
                                    !E &&
                                        te.hasEditableTarget(v, e.target) &&
                                        !tQ(e, N.onPaste) &&
                                        (!e9 ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            e0) &&
                                        (e.preventDefault(), te.insertData(v, e.clipboardData));
                                },
                                [E, N.onPaste],
                            ),
                        }),
                        _.createElement(t$, {
                            decorations: V,
                            node: v,
                            renderElement: m,
                            renderPlaceholder: A,
                            renderLeaf: g,
                            selection: v.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    tq = (e) => {
        var { attributes: t, children: n } = e;
        return _.createElement("span", Object.assign({}, t), n, eQ && _.createElement("br", null));
    },
    tZ = () => [],
    tX = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && I.Q6.isCollapsed(e.selection)))) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                A(n, { scrollMode: "if-needed" }),
                delete n.getBoundingClientRect;
        }
    },
    tQ = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tJ = (e, t) => {
        if (!t) return !1;
        var n = t(e);
        return null != n ? n : e.defaultPrevented;
    },
    t0 = (0, _.createContext)(!1),
    t1 = () => (0, _.useContext)(t0),
    t2 = (0, _.createContext)({}),
    t3 = ["editor", "children", "onChange", "value"],
    t6 = (e) => {
        var t,
            n,
            i,
            { editor: r, children: s, onChange: a, value: o } = e,
            l = ed(e, t3),
            u = (0, _.useRef)(!1),
            [c, d] = _.useState(() => {
                if (!I.bP.isNodeList(o))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(I.h6.stringify(o)),
                    );
                if (!I.KE.isEditor(r)) throw Error("[Slate] editor is invalid! You passed: ".concat(I.h6.stringify(r)));
                return (r.children = o), Object.assign(r, l), { v: 0, editor: r };
            }),
            { selectorContext: h, onChange: f } =
                ((t = (0, _.useRef)([]).current),
                (n = (0, _.useRef)({ editor: r }).current),
                (i = (0, _.useCallback)((e) => {
                    (n.editor = e), t.forEach((t) => t(e));
                }, [])),
                {
                    selectorContext: (0, _.useMemo)(
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
                    onChange: i,
                }),
            p = (0, _.useCallback)(() => {
                a && a(r.children), d((e) => ({ v: e.v + 1, editor: r })), f(r);
            }, [a]);
        (0, _.useEffect)(
            () => (
                eR.set(r, p),
                () => {
                    eR.set(r, () => {}), (u.current = !0);
                }
            ),
            [p],
        );
        var [E, m] = (0, _.useState)(te.isFocused(r));
        return (
            (0, _.useEffect)(() => {
                m(te.isFocused(r));
            }),
            tr(() => {
                var e = () => m(te.isFocused(r));
                return eq
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
            _.createElement(
                t2.Provider,
                { value: h },
                _.createElement(
                    tS.Provider,
                    { value: c },
                    _.createElement(tu.Provider, { value: c.editor }, _.createElement(t0.Provider, { value: E }, s)),
                ),
            )
        );
    },
    t4 = (e, t) => {
        var n = (t.top + t.bottom) / 2;
        return e.top <= n && e.bottom >= n;
    },
    t5 = (e, t, n) => {
        var i = te.toDOMRange(e, t).getBoundingClientRect(),
            r = te.toDOMRange(e, n).getBoundingClientRect();
        return t4(i, r) && t4(r, i);
    };
function t7(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t &&
            (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
    }
    return n;
}
function t8(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? t7(Object(n), !0).forEach(function (t) {
                  ec(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t7(Object(n)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
    }
    return e;
}
var t9 = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: n, onChange: i, deleteBackward: r, addMark: s, removeMark: a } = e;
        return (
            eS.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
                var i, r;
                null == (i = eO.get(e)) || i(),
                    !eb.get(e) && null != (r = eL.get(e)) && r.length && eb.set(e, null),
                    eD.delete(e),
                    s(t, n);
            }),
            (e.removeMark = (t) => {
                var n;
                !eb.get(e) && null != (n = eL.get(e)) && n.length && eb.set(e, null), eD.delete(e), a(t);
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return r(t);
                if (e.selection && I.Q6.isCollapsed(e.selection)) {
                    var n = I.KE.above(e, { match: (t) => I.Hg.isElement(t) && I.KE.isBlock(e, t), at: e.selection });
                    if (n) {
                        var [, i] = n,
                            s = I.KE.range(e, i, e.selection.anchor),
                            a = ((e, t) => {
                                var n = I.KE.range(e, I.Q6.end(t)),
                                    i = Array.from(I.KE.positions(e, { at: t })),
                                    r = 0,
                                    s = i.length,
                                    a = Math.floor(s / 2);
                                if (t5(e, I.KE.range(e, i[r]), n)) return I.KE.range(e, i[r], n);
                                if (i.length < 2) return I.KE.range(e, i[i.length - 1], n);
                                for (; a !== i.length && a !== r; )
                                    t5(e, I.KE.range(e, i[a]), n) ? (s = a) : (r = a), (a = Math.floor((r + s) / 2));
                                return I.KE.range(e, i[s], n);
                            })(e, s);
                        I.Q6.isCollapsed(a) || I.gB.delete(e, { at: a });
                    }
                }
            }),
            (e.apply = (t) => {
                var i,
                    r = [],
                    s = eL.get(e);
                if (null != s && s.length) {
                    var a = s
                        .map((e) =>
                            (function (e, t) {
                                var { path: n, diff: i, id: r } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!I.wA.equals(t.path, n) || t.offset >= i.end) return e;
                                        if (t.offset <= i.start)
                                            return {
                                                diff: {
                                                    start: t.text.length + i.start,
                                                    end: t.text.length + i.end,
                                                    text: i.text,
                                                },
                                                id: r,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: i.start, end: i.end + t.text.length, text: i.text },
                                            id: r,
                                            path: n,
                                        };
                                    case "remove_text":
                                        if (!I.wA.equals(t.path, n) || t.offset >= i.end) return e;
                                        if (t.offset + t.text.length <= i.start)
                                            return {
                                                diff: {
                                                    start: i.start - t.text.length,
                                                    end: i.end - t.text.length,
                                                    text: i.text,
                                                },
                                                id: r,
                                                path: n,
                                            };
                                        return {
                                            diff: { start: i.start, end: i.end - t.text.length, text: i.text },
                                            id: r,
                                            path: n,
                                        };
                                    case "split_node":
                                        if (!I.wA.equals(t.path, n) || t.position >= i.end)
                                            return {
                                                diff: i,
                                                id: r,
                                                path: I.wA.transform(n, t, { affinity: "backward" }),
                                            };
                                        if (t.position > i.start)
                                            return {
                                                diff: {
                                                    start: i.start,
                                                    end: Math.min(t.position, i.end),
                                                    text: i.text,
                                                },
                                                id: r,
                                                path: n,
                                            };
                                        return {
                                            diff: {
                                                start: i.start - t.position,
                                                end: i.end - t.position,
                                                text: i.text,
                                            },
                                            id: r,
                                            path: I.wA.transform(n, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!I.wA.equals(t.path, n))
                                            return { diff: i, id: r, path: I.wA.transform(n, t) };
                                        return {
                                            diff: {
                                                start: i.start + t.position,
                                                end: i.end + t.position,
                                                text: i.text,
                                            },
                                            id: r,
                                            path: I.wA.transform(n, t),
                                        };
                                }
                                var s = I.wA.transform(n, t);
                                return s ? { diff: i, path: s, id: r } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    eL.set(e, a);
                }
                var o = eM.get(e);
                o && eM.set(e, tk(e, o, t));
                var l = ew.get(e);
                if (null != l && l.at) {
                    var u = I.bR.isPoint(null == l ? void 0 : l.at) ? tx(e, l.at, t) : tk(e, l.at, t);
                    ew.set(e, u ? t8(t8({}, l), {}, { at: u }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        r.push(...ne(e, t.path));
                        break;
                    case "set_selection":
                        null == (i = ev.get(e)) || i.unref(), ev.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        r.push(...ne(e, I.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        r.push(...ne(e, I.wA.previous(t.path)));
                        break;
                    case "move_node":
                        r.push(...ne(e, I.wA.common(I.wA.parent(t.path), I.wA.parent(t.newPath))));
                }
                for (var [c, d] of (n(t), r)) {
                    var [_] = I.KE.node(e, c);
                    eT.set(_, d);
                }
            }),
            (e.setFragmentData = (n) => {
                var { selection: i } = e;
                if (i) {
                    var [r, s] = I.Q6.edges(i),
                        a = I.KE.void(e, { at: r.path }),
                        o = I.KE.void(e, { at: s.path });
                    if (!I.Q6.isCollapsed(i) || a) {
                        var l = te.toDOMRange(e, i),
                            u = l.cloneContents(),
                            c = u.childNodes[0];
                        if (
                            (u.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (c = e);
                            }),
                            o)
                        ) {
                            var [d] = o,
                                _ = l.cloneRange(),
                                h = te.toDOMNode(e, d);
                            _.setEndAfter(h), (u = _.cloneContents());
                        }
                        if (
                            (a && (c = u.querySelector("[data-slate-spacer]")),
                            Array.from(u.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            eH(c))
                        ) {
                            var f = c.ownerDocument.createElement("span");
                            (f.style.whiteSpace = "pre"), f.appendChild(c), u.appendChild(f), (c = f);
                        }
                        var p = JSON.stringify(e.getFragment()),
                            E = window.btoa(encodeURIComponent(p));
                        c.setAttribute("data-slate-fragment", E), n.setData("application/".concat(t), E);
                        var m = u.ownerDocument.createElement("div");
                        return (
                            m.appendChild(u),
                            m.setAttribute("hidden", "true"),
                            u.ownerDocument.body.appendChild(m),
                            n.setData("text/html", m.innerHTML),
                            n.setData("text/plain", eK(m)),
                            u.ownerDocument.body.removeChild(m),
                            n
                        );
                    }
                }
            }),
            (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (n) => {
                var i =
                    n.getData("application/".concat(t)) ||
                    ((e) => {
                        var [, t] = e.getData("text/html").match(e$) || [];
                        return t;
                    })(n);
                if (i) {
                    var r = JSON.parse(decodeURIComponent(window.atob(i)));
                    return e.insertFragment(r), !0;
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var n = t.getData("text/plain");
                if (n) {
                    var i = n.split(/\r\n|\r|\n/),
                        r = !1;
                    for (var s of i) r && I.gB.splitNodes(e, { always: !0 }), e.insertText(s), (r = !0);
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                eu.unstable_batchedUpdates(() => {
                    var n = eR.get(e);
                    n && n(), i(t);
                });
            }),
            e
        );
    },
    ne = (e, t) => {
        var n = [];
        for (var [i, r] of I.KE.levels(e, { at: t })) {
            var s = te.findKey(e, i);
            n.push([r, s]);
        }
        return n;
    };
