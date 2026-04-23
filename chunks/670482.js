"use strict";
r.d(t, { rL: () => te, f7: () => tv, RV: () => tc, o$: () => t7, A: () => t4, Fo: () => t$, zL: () => t1 });
var n,
    a,
    s,
    i = r(877413),
    o = r.n(i),
    l = r(805353),
    u = r.n(l),
    c = r(879378),
    d = r.n(c),
    f = r(64700);
function p(e) {
    return "object" == typeof e && null != e && 1 === e.nodeType;
}
function h(e, t) {
    return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
}
function m(e, t) {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
        var r,
            n = getComputedStyle(e, null);
        return (
            h(n.overflowY, t) ||
            h(n.overflowX, t) ||
            (!!(r = (function (e) {
                if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                try {
                    return e.ownerDocument.defaultView.frameElement;
                } catch (e) {
                    return null;
                }
            })(e)) &&
                (r.clientHeight < e.scrollHeight || r.clientWidth < e.scrollWidth))
        );
    }
    return !1;
}
function _(e, t, r, n, a, s, i, o) {
    return (s < e && i > t) || (s > e && i < t)
        ? 0
        : (s <= e && o <= r) || (i >= t && o >= r)
          ? s - e - n
          : (i > t && o < r) || (s < e && o > r)
            ? i - t + a
            : 0;
}
var g = function (e, t) {
    var r = window,
        n = t.scrollMode,
        a = t.block,
        s = t.inline,
        i = t.boundary,
        o = t.skipOverflowHiddenElements,
        l =
            "function" == typeof i
                ? i
                : function (e) {
                      return e !== i;
                  };
    if (!p(e)) throw TypeError("Invalid target");
    for (var u, c, d = document.scrollingElement || document.documentElement, f = [], h = e; p(h) && l(h); ) {
        if ((h = null == (c = (u = h).parentElement) ? u.getRootNode().host || null : c) === d) {
            f.push(h);
            break;
        }
        (null != h && h === document.body && m(h) && !m(document.documentElement)) ||
            (null != h && m(h, o) && f.push(h));
    }
    for (
        var g = r.visualViewport ? r.visualViewport.width : innerWidth,
            v = r.visualViewport ? r.visualViewport.height : innerHeight,
            b = window.scrollX || pageXOffset,
            y = window.scrollY || pageYOffset,
            E = e.getBoundingClientRect(),
            S = E.height,
            T = E.width,
            x = E.top,
            w = E.right,
            C = E.bottom,
            D = E.left,
            O = "start" === a || "nearest" === a ? x : "end" === a ? C : x + S / 2,
            A = "center" === s ? D + T / 2 : "end" === s ? w : D,
            M = [],
            R = 0;
        R < f.length;
        R++
    ) {
        var k = f[R],
            N = k.getBoundingClientRect(),
            L = N.height,
            I = N.width,
            P = N.top,
            F = N.right,
            B = N.bottom,
            Y = N.left;
        if ("if-needed" === n && x >= 0 && D >= 0 && C <= v && w <= g && x >= P && C <= B && D >= Y && w <= F) break;
        var U = getComputedStyle(k),
            j = parseInt(U.borderLeftWidth, 10),
            V = parseInt(U.borderTopWidth, 10),
            H = parseInt(U.borderRightWidth, 10),
            G = parseInt(U.borderBottomWidth, 10),
            z = 0,
            W = 0,
            q = "offsetWidth" in k ? k.offsetWidth - k.clientWidth - j - H : 0,
            $ = "offsetHeight" in k ? k.offsetHeight - k.clientHeight - V - G : 0,
            K = "offsetWidth" in k ? (0 === k.offsetWidth ? 0 : I / k.offsetWidth) : 0,
            Q = "offsetHeight" in k ? (0 === k.offsetHeight ? 0 : L / k.offsetHeight) : 0;
        if (d === k)
            (z =
                "start" === a
                    ? O
                    : "end" === a
                      ? O - v
                      : "nearest" === a
                        ? _(y, y + v, v, V, G, y + O, y + O + S, S)
                        : O - v / 2),
                (W =
                    "start" === s
                        ? A
                        : "center" === s
                          ? A - g / 2
                          : "end" === s
                            ? A - g
                            : _(b, b + g, g, j, H, b + A, b + A + T, T)),
                (z = Math.max(0, z + y)),
                (W = Math.max(0, W + b));
        else {
            (z =
                "start" === a
                    ? O - P - V
                    : "end" === a
                      ? O - B + G + $
                      : "nearest" === a
                        ? _(P, B, L, V, G + $, O, O + S, S)
                        : O - (P + L / 2) + $ / 2),
                (W =
                    "start" === s
                        ? A - Y - j
                        : "center" === s
                          ? A - (Y + I / 2) + q / 2
                          : "end" === s
                            ? A - F + H + q
                            : _(Y, F, I, j, H + q, A, A + T, T));
            var X = k.scrollLeft,
                Z = k.scrollTop;
            (O += Z - (z = Math.max(0, Math.min(Z + z / Q, k.scrollHeight - L / Q + $)))),
                (A += X - (W = Math.max(0, Math.min(X + W / K, k.scrollWidth - I / K + q))));
        }
        M.push({ el: k, top: z, left: W });
    }
    return M;
};
function v(e) {
    return e === Object(e) && 0 !== Object.keys(e).length;
}
let b = function (e, t) {
    var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
    if (v(t) && "function" == typeof t.behavior) return t.behavior(r ? g(e, t) : []);
    if (r) {
        var n,
            a,
            s,
            i = !1 === t ? { block: "end", inline: "nearest" } : v(t) ? t : { block: "start", inline: "nearest" };
        return (
            (n = g(e, i)),
            void 0 === (a = i.behavior) && (a = "auto"),
            (s = "scrollBehavior" in document.body.style),
            void n.forEach(function (e) {
                var t = e.el,
                    r = e.top,
                    n = e.left;
                t.scroll && s ? t.scroll({ top: r, left: n, behavior: a }) : ((t.scrollTop = r), (t.scrollLeft = n));
            })
        );
    }
};
var y = r(154283),
    E = [],
    S = "ResizeObserver loop completed with undelivered notifications.",
    T = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: S }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = S)),
            window.dispatchEvent(e);
    };
((n = a || (a = {})).BORDER_BOX = "border-box"),
    (n.CONTENT_BOX = "content-box"),
    (n.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
var x = function (e) {
        return Object.freeze(e);
    },
    w = function (e, t) {
        (this.inlineSize = e), (this.blockSize = t), x(this);
    },
    C = (function () {
        function e(e, t, r, n) {
            return (
                (this.x = e),
                (this.y = t),
                (this.width = r),
                (this.height = n),
                (this.top = this.y),
                (this.left = this.x),
                (this.bottom = this.top + this.height),
                (this.right = this.left + this.width),
                x(this)
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
    D = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    O = function (e) {
        if (D(e)) {
            var t = e.getBBox(),
                r = t.width,
                n = t.height;
            return !r && !n;
        }
        var a = e.offsetWidth,
            s = e.offsetHeight;
        return !(a || s || e.getClientRects().length);
    },
    A = function (e) {
        if (e instanceof Element) return !0;
        var t,
            r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(r && e instanceof r.Element);
    },
    M = function (e) {
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
    R = "u" > typeof window ? window : {},
    k = new WeakMap(),
    N = /auto|scroll/,
    L = /^tb|vertical/,
    I = /msie|trident/i.test(R.navigator && R.navigator.userAgent),
    P = function (e) {
        return parseFloat(e || "0");
    },
    F = function (e, t, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            new w((r ? t : e) || 0, (r ? e : t) || 0)
        );
    },
    B = x({ devicePixelContentBoxSize: F(), borderBoxSize: F(), contentBoxSize: F(), contentRect: new C(0, 0, 0, 0) }),
    Y = function (e, t) {
        if ((void 0 === t && (t = !1), k.has(e) && !t)) return k.get(e);
        if (O(e)) return k.set(e, B), B;
        var r = getComputedStyle(e),
            n = D(e) && e.ownerSVGElement && e.getBBox(),
            a = !I && "border-box" === r.boxSizing,
            s = L.test(r.writingMode || ""),
            i = !n && N.test(r.overflowY || ""),
            o = !n && N.test(r.overflowX || ""),
            l = n ? 0 : P(r.paddingTop),
            u = n ? 0 : P(r.paddingRight),
            c = n ? 0 : P(r.paddingBottom),
            d = n ? 0 : P(r.paddingLeft),
            f = n ? 0 : P(r.borderTopWidth),
            p = n ? 0 : P(r.borderRightWidth),
            h = n ? 0 : P(r.borderBottomWidth),
            m = n ? 0 : P(r.borderLeftWidth),
            _ = d + u,
            g = l + c,
            v = m + p,
            b = f + h,
            y = o ? e.offsetHeight - b - e.clientHeight : 0,
            E = i ? e.offsetWidth - v - e.clientWidth : 0,
            S = n ? n.width : P(r.width) - (a ? _ + v : 0) - E,
            T = n ? n.height : P(r.height) - (a ? g + b : 0) - y,
            w = S + _ + E + v,
            A = T + g + y + b,
            M = x({
                devicePixelContentBoxSize: F(Math.round(S * devicePixelRatio), Math.round(T * devicePixelRatio), s),
                borderBoxSize: F(w, A, s),
                contentBoxSize: F(S, T, s),
                contentRect: new C(d, l, S, T),
            });
        return k.set(e, M), M;
    },
    U = function (e, t, r) {
        var n = Y(e, r),
            s = n.borderBoxSize,
            i = n.contentBoxSize,
            o = n.devicePixelContentBoxSize;
        switch (t) {
            case a.DEVICE_PIXEL_CONTENT_BOX:
                return o;
            case a.BORDER_BOX:
                return s;
            default:
                return i;
        }
    },
    j = function (e) {
        var t = Y(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = x([t.borderBoxSize])),
            (this.contentBoxSize = x([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = x([t.devicePixelContentBoxSize]));
    },
    V = function (e) {
        if (O(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
        return t;
    },
    H = function () {
        var e = 1 / 0,
            t = [];
        E.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var n = [];
                r.activeTargets.forEach(function (t) {
                    var r = new j(t.target),
                        a = V(t.target);
                    n.push(r), (t.lastReportedSize = U(t.target, t.observedBox)), a < e && (e = a);
                }),
                    t.push(function () {
                        r.callback.call(r.observer, n, r.observer);
                    }),
                    r.activeTargets.splice(0, r.activeTargets.length);
            }
        });
        for (var r = 0; r < t.length; r++) (0, t[r])();
        return e;
    },
    G = function (e) {
        E.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (r) {
                    r.isActive() && (V(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
                });
        });
    },
    z = function () {
        var e = 0;
        for (
            G(0);
            E.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            G((e = H()));
        return (
            E.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && T(),
            e > 0
        );
    },
    W = [],
    q = function (e) {
        if (!s) {
            var t = 0,
                r = document.createTextNode("");
            new MutationObserver(function () {
                return W.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(r, { characterData: !0 }),
                (s = function () {
                    r.textContent = "".concat(t ? t-- : t++);
                });
        }
        W.push(e), s();
    },
    $ = function (e) {
        q(function () {
            requestAnimationFrame(e);
        });
    },
    K = 0,
    Q = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
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
    Z = function (e) {
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
                    var r = Z(e);
                    $(function () {
                        var n = !1;
                        try {
                            n = z();
                        } finally {
                            if (((J = !1), (e = r - Z()), !K)) return;
                            n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
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
                        return e.observer && e.observer.observe(document.body, Q);
                    };
                document.body ? t() : R.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    X.forEach(function (t) {
                        return R.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    X.forEach(function (t) {
                        return R.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    et = function (e) {
        !K && e > 0 && ee.start(), (K += e) || ee.stop();
    },
    er = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || a.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = U(this.target, this.observedBox, !0);
                return (
                    D((e = this.target)) ||
                        M(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    en = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    ea = new WeakMap(),
    es = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
    },
    ei = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var r = new en(e, t);
                ea.set(e, r);
            }),
            (e.observe = function (e, t, r) {
                var n = ea.get(e),
                    a = 0 === n.observationTargets.length;
                0 > es(n.observationTargets, t) &&
                    (a && E.push(n), n.observationTargets.push(new er(t, r && r.box)), et(1), ee.schedule());
            }),
            (e.unobserve = function (e, t) {
                var r = ea.get(e),
                    n = es(r.observationTargets, t),
                    a = 1 === r.observationTargets.length;
                n >= 0 && (a && E.splice(E.indexOf(r), 1), r.observationTargets.splice(n, 1), et(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    r = ea.get(e);
                r.observationTargets.slice().forEach(function (r) {
                    return t.unobserve(e, r.target);
                }),
                    r.activeTargets.splice(0, r.activeTargets.length);
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
            ei.connect(this, e);
        }
        return (
            (e.prototype.observe = function (e, t) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!A(e))
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                ei.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!A(e))
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                ei.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                ei.disconnect(this);
            }),
            (e.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
            }),
            e
        );
    })(),
    el = r(294106),
    eu = r(340287);
function ec(e, t, r) {
    return (
        t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
        e
    );
}
function ed(e, t) {
    if (null == e) return {};
    var r,
        n,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                s = Object.keys(e);
            for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var s = Object.getOwnPropertySymbols(e);
        for (n = 0; n < s.length; n++)
            (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    }
    return a;
}
var ef = 0;
class ep {
    constructor() {
        this.id = "".concat(ef++);
    }
}
var eh = new WeakMap(),
    em = new WeakMap(),
    e_ = new WeakMap(),
    eg = new WeakMap(),
    ev = new WeakMap(),
    eb = new WeakMap(),
    ey = new WeakMap(),
    eE = new WeakMap(),
    eS = new WeakMap(),
    eT = new WeakMap(),
    ex = new WeakMap(),
    ew = new WeakMap(),
    eC = new WeakMap(),
    eD = new WeakMap(),
    eO = new WeakMap(),
    eA = new WeakMap(),
    eM = new WeakMap(),
    eR = new WeakMap(),
    ek = new WeakMap(),
    eN = new WeakMap(),
    eL = new WeakMap(),
    eI = Symbol("placeholder"),
    eP = Symbol("mark-placeholder"),
    eF = globalThis.Text,
    eB = (e) => (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
    eY = (e) => ej(e) && 8 === e.nodeType,
    eU = (e) => ej(e) && 1 === e.nodeType,
    ej = (e) => {
        var t = eB(e);
        return !!t && e instanceof t.Node;
    },
    eV = (e) => {
        var t = e && e.anchorNode && eB(e.anchorNode);
        return !!t && e instanceof t.Selection;
    },
    eH = (e) => ej(e) && 3 === e.nodeType,
    eG = (e, t, r) => {
        for (
            var { childNodes: n } = e, a = n[t], s = t, i = !1, o = !1;
            (eY(a) ||
                (eU(a) && 0 === a.childNodes.length) ||
                (eU(a) && "false" === a.getAttribute("contenteditable"))) &&
            (!i || !o);
        ) {
            if (s >= n.length) {
                (i = !0), (s = t - 1), (r = "backward");
                continue;
            }
            if (s < 0) {
                (o = !0), (s = t + 1), (r = "forward");
                continue;
            }
            (a = n[s]), (t = s), (s += "forward" === r ? 1 : -1);
        }
        return [a, t];
    },
    ez = (e, t, r) => {
        var [n] = eG(e, t, r);
        return n;
    },
    eW = (e) => {
        var t = "";
        if (eH(e) && e.nodeValue) return e.nodeValue;
        if (eU(e)) {
            for (var r of Array.from(e.childNodes)) t += eW(r);
            var n = getComputedStyle(e).getPropertyValue("display");
            ("block" === n || "list" === n || "BR" === e.tagName) && (t += "\n");
        }
        return t;
    },
    eq = /data-slate-fragment="(.+?)"/m,
    e$ = (e, t, r) => {
        var { target: n } = t;
        if (eU(n) && n.matches('[contentEditable="false"]')) return !1;
        var { document: a } = te.getWindow(e);
        if (a.contains(n)) return te.hasDOMNode(e, n, { editable: !0 });
        var s = r.find((e) => {
            var { addedNodes: t, removedNodes: r } = e;
            for (var a of t) if (a === n || a.contains(n)) return !0;
            for (var s of r) if (s === n || s.contains(n)) return !0;
        });
        return !!s && s !== t && e$(e, s, r);
    },
    eK = parseInt(f.version.split(".")[0], 10) >= 17,
    eQ =
        "u" > typeof navigator &&
        "u" > typeof window &&
        /iPad|iPhone|iPod/.test(navigator.userAgent) &&
        !window.MSStream,
    eX = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
    eZ = "u" > typeof navigator && /Android/.test(navigator.userAgent),
    eJ = "u" > typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
    e0 = "u" > typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
    e1 = "u" > typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
    e2 = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
    e3 = "u" > typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
    e4 = eZ && "u" > typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
    e6 =
        "u" > typeof navigator &&
        /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
    e5 = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
    e8 = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
    e9 = "u" > typeof window && void 0 !== window.document && void 0 !== window.document.createElement,
    e7 =
        (!e3 || !e4) &&
        !e1 &&
        "u" > typeof globalThis &&
        globalThis.InputEvent &&
        "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
    te = {
        isComposing: (e) => !!ew.get(e),
        getWindow(e) {
            var t = e_.get(e);
            if (!t) throw Error("Unable to find a host window element for this editor");
            return t;
        },
        findKey(e, t) {
            var r = eE.get(t);
            return r || ((r = new ep()), eE.set(t, r)), r;
        },
        findPath(e, t) {
            for (var r = [], n = t; ; ) {
                var a = em.get(n);
                if (null == a)
                    if (y.KE.isEditor(n)) return r;
                    else break;
                var s = eh.get(n);
                if (null == s) break;
                r.unshift(s), (n = a);
            }
            throw Error("Unable to find the path for Slate node: ".concat(y.h6.stringify(t)));
        },
        findDocumentOrShadowRoot(e) {
            var t = te.toDOMNode(e, e),
                r = t.getRootNode();
            return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument;
        },
        isFocused: (e) => !!ex.get(e),
        isReadOnly: (e) => !!eT.get(e),
        blur(e) {
            var t = te.toDOMNode(e, e),
                r = te.findDocumentOrShadowRoot(e);
            ex.set(e, !1), r.activeElement === t && t.blur();
        },
        focus(e) {
            var t = te.toDOMNode(e, e),
                r = te.findDocumentOrShadowRoot(e);
            ex.set(e, !0), r.activeElement !== t && t.focus({ preventScroll: !0 });
        },
        deselect(e) {
            var { selection: t } = e,
                r = te.findDocumentOrShadowRoot(e).getSelection();
            r && r.rangeCount > 0 && r.removeAllRanges(), t && y.gB.deselect(e);
        },
        hasDOMNode(e, t) {
            var r,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { editable: a = !1 } = n,
                s = te.toDOMNode(e, e);
            try {
                r = eU(t) ? t : t.parentElement;
            } catch (e) {
                if (!e.message.includes('Permission denied to access property "nodeType"')) throw e;
            }
            return (
                !!r &&
                r.closest("[data-slate-editor]") === s &&
                (!a ||
                    !!r.isContentEditable ||
                    ("boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === s) ||
                    !!r.getAttribute("data-slate-zero-width"))
            );
        },
        insertData(e, t) {
            e.insertData(t);
        },
        insertFragmentData: (e, t) => e.insertFragmentData(t),
        insertTextData: (e, t) => e.insertTextData(t),
        setFragmentData(e, t, r) {
            e.setFragmentData(t, r);
        },
        toDOMNode(e, t) {
            var r = eS.get(e),
                n = y.KE.isEditor(t) ? eg.get(e) : null == r ? void 0 : r.get(te.findKey(e, t));
            if (!n) throw Error("Cannot resolve a DOM node from Slate node: ".concat(y.h6.stringify(t)));
            return n;
        },
        toDOMPoint(e, t) {
            var [r] = y.KE.node(e, t.path),
                n = te.toDOMNode(e, r);
            y.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
                var a = Array.from(n.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), s = 0, i = 0;
                i < a.length;
                i++
            ) {
                var o = a[i],
                    l = o.childNodes[0];
                if (null != l && null != l.textContent) {
                    var { length: u } = l.textContent,
                        c = o.getAttribute("data-slate-length"),
                        d = s + (null == c ? u : parseInt(c, 10)),
                        f = a[i + 1];
                    if (t.offset === d && null != f && f.hasAttribute("data-slate-mark-placeholder")) {
                        var p,
                            h,
                            m = f.childNodes[0];
                        p = [m instanceof eF ? m : f, null != (h = f.textContent) && h.startsWith("\uFEFF") ? 1 : 0];
                        break;
                    }
                    if (t.offset <= d) {
                        p = [l, Math.min(u, Math.max(0, t.offset - s))];
                        break;
                    }
                    s = d;
                }
            }
            if (!p) throw Error("Cannot resolve a DOM point from Slate point: ".concat(y.h6.stringify(t)));
            return p;
        },
        toDOMRange(e, t) {
            var { anchor: r, focus: n } = t,
                a = y.Q6.isBackward(t),
                s = te.toDOMPoint(e, r),
                i = y.Q6.isCollapsed(t) ? s : te.toDOMPoint(e, n),
                o = te.getWindow(e).document.createRange(),
                [l, u] = a ? i : s,
                [c, d] = a ? s : i,
                f = !!(eU(l) ? l : l.parentElement).getAttribute("data-slate-zero-width"),
                p = !!(eU(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
            return o.setStart(l, f ? 1 : u), o.setEnd(c, p ? 1 : d), o;
        },
        toSlateNode(e, t) {
            var r = eU(t) ? t : t.parentElement;
            r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
            var n = r ? eb.get(r) : null;
            if (!n) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
            return n;
        },
        findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var r,
                { clientX: n, clientY: a, target: s } = t;
            if (null == n || null == a) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            var i = te.toSlateNode(e, t.target),
                o = te.findPath(e, i);
            if (y.Hg.isElement(i) && y.KE.isVoid(e, i)) {
                var l = s.getBoundingClientRect(),
                    u = e.isInline(i) ? n - l.left < l.left + l.width - n : a - l.top < l.top + l.height - a,
                    c = y.KE.point(e, o, { edge: u ? "start" : "end" }),
                    d = u ? y.KE.before(e, c) : y.KE.after(e, c);
                if (d) return y.KE.range(e, d);
            }
            var { document: f } = te.getWindow(e);
            if (f.caretRangeFromPoint) r = f.caretRangeFromPoint(n, a);
            else {
                var p = f.caretPositionFromPoint(n, a);
                p && ((r = f.createRange()).setStart(p.offsetNode, p.offset), r.setEnd(p.offsetNode, p.offset));
            }
            if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
            return te.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !1 });
        },
        toSlatePoint(e, t, r) {
            var { exactMatch: n, suppressThrow: a } = r,
                [s, i] = n
                    ? t
                    : ((e) => {
                          var [t, r] = e;
                          if (eU(t) && t.childNodes.length) {
                              var n = r === t.childNodes.length,
                                  a = n ? r - 1 : r;
                              for (
                                  [t, a] = eG(t, a, n ? "backward" : "forward"), n = a < r;
                                  eU(t) && t.childNodes.length;
                              ) {
                                  var s = n ? t.childNodes.length - 1 : 0;
                                  t = ez(t, s, n ? "backward" : "forward");
                              }
                              r = n && null != t.textContent ? t.textContent.length : 0;
                          }
                          return [t, r];
                      })(t),
                o = s.parentNode,
                l = null,
                u = 0;
            if (o) {
                var c,
                    d,
                    f = te.toDOMNode(e, e),
                    p = o.closest('[data-slate-void="true"]'),
                    h = p && f.contains(p) ? p : null,
                    m = o.closest("[data-slate-leaf]"),
                    _ = null;
                if (m) {
                    if ((l = m.closest('[data-slate-node="text"]'))) {
                        var g = te.getWindow(e).document.createRange();
                        g.setStart(l, 0), g.setEnd(s, i);
                        var v = g.cloneContents();
                        [
                            ...Array.prototype.slice.call(v.querySelectorAll("[data-slate-zero-width]")),
                            ...Array.prototype.slice.call(v.querySelectorAll("[contenteditable=false]")),
                        ].forEach((e) => {
                            if (
                                eZ &&
                                !n &&
                                e.hasAttribute("data-slate-zero-width") &&
                                e.textContent.length > 0 &&
                                "\uFEFF" !== e.textContext
                            ) {
                                e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                return;
                            }
                            e.parentNode.removeChild(e);
                        }),
                            (u = v.textContent.length),
                            (_ = l);
                    }
                } else if (h) {
                    for (var b = h.querySelectorAll("[data-slate-leaf]"), E = 0; E < b.length; E++) {
                        var S = b[E];
                        if (te.hasDOMNode(e, S)) {
                            m = S;
                            break;
                        }
                    }
                    m
                        ? ((l = m.closest('[data-slate-node="text"]')),
                          (u = (_ = m).textContent.length),
                          _.querySelectorAll("[data-slate-zero-width]").forEach((e) => {
                              u -= e.textContent.length;
                          }))
                        : (u = 1);
                }
                _ &&
                    u === _.textContent.length &&
                    eZ &&
                    "z" === _.getAttribute("data-slate-zero-width") &&
                    null != (c = _.textContent) &&
                    c.startsWith("\uFEFF") &&
                    (o.hasAttribute("data-slate-zero-width") ||
                        (eJ && null != (d = _.textContent) && d.endsWith("\n\n"))) &&
                    u--;
            }
            if (eZ && !l && !n) {
                var T = o.hasAttribute("data-slate-node") ? o : o.closest("[data-slate-node]");
                if (T && te.hasDOMNode(e, T, { editable: !0 })) {
                    var x = te.toSlateNode(e, T),
                        { path: w, offset: C } = y.KE.start(e, te.findPath(e, x));
                    return T.querySelector("[data-slate-leaf]") || (C = i), { path: w, offset: C };
                }
            }
            if (!l) {
                if (a) return null;
                throw Error("Cannot resolve a Slate point from DOM point: ".concat(t));
            }
            var D = te.toSlateNode(e, l);
            return { path: te.findPath(e, D), offset: u };
        },
        toSlateRange(e, t, r) {
            var n,
                a,
                s,
                i,
                o,
                l,
                { exactMatch: u, suppressThrow: c } = r;
            if (
                ((eV(t) ? t.anchorNode : t.startContainer) &&
                    (eV(t)
                        ? ((n = t.anchorNode),
                          (a = t.anchorOffset),
                          (s = t.focusNode),
                          (i = t.focusOffset),
                          (o =
                              e2 &&
                              ((e) => {
                                  for (var t = e && e.parentNode; t; ) {
                                      if ("[object ShadowRoot]" === t.toString()) return !0;
                                      t = t.parentNode;
                                  }
                                  return !1;
                              })(n)
                                  ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset
                                  : t.isCollapsed))
                        : ((n = t.startContainer),
                          (a = t.startOffset),
                          (s = t.endContainer),
                          (i = t.endOffset),
                          (o = t.collapsed))),
                null == n || null == s || null == a || null == i)
            )
                throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
            "getAttribute" in s &&
                "false" === s.getAttribute("contenteditable") &&
                ((s = n), (i = (null == (l = n.textContent) ? void 0 : l.length) || 0));
            var d = te.toSlatePoint(e, [n, a], { exactMatch: u, suppressThrow: c });
            if (!d) return null;
            var f = o ? d : te.toSlatePoint(e, [s, i], { exactMatch: u, suppressThrow: c });
            if (!f) return null;
            if (eJ && !o && n !== s) {
                var p = y.KE.isEnd(e, d, d.path),
                    h = y.KE.isStart(e, f, f.path);
                p && (d = y.KE.after(e, d) || d), h && (f = y.KE.before(e, f) || f);
            }
            var m = { anchor: d, focus: f };
            return (
                y.Q6.isExpanded(m) &&
                    y.Q6.isForward(m) &&
                    eU(s) &&
                    y.KE.void(e, { at: m.focus, mode: "highest" }) &&
                    (m = y.KE.unhangRange(e, m, { voids: !0 })),
                m
            );
        },
        hasRange(e, t) {
            var { anchor: r, focus: n } = t;
            return y.KE.hasPath(e, r.path) && y.KE.hasPath(e, n.path);
        },
        hasTarget: (e, t) => ej(t) && te.hasDOMNode(e, t),
        hasEditableTarget: (e, t) => ej(t) && te.hasDOMNode(e, t, { editable: !0 }),
        hasSelectableTarget: (e, t) => te.hasEditableTarget(e, t) || te.isTargetInsideNonReadonlyVoid(e, t),
        isTargetInsideNonReadonlyVoid(e, t) {
            if (eT.get(e)) return !1;
            var r = te.hasTarget(e, t) && te.toSlateNode(e, t);
            return y.Hg.isElement(r) && y.KE.isVoid(e, r);
        },
        androidScheduleFlush(e) {
            var t;
            null == (t = eO.get(e)) || t();
        },
        androidPendingDiffs: (e) => eR.get(e),
    },
    tt = ["anchor", "focus"],
    tr = ["anchor", "focus"],
    tn = (e, t) => {
        var r = ed(e, tt),
            n = ed(t, tr);
        return (
            e[eI] === t[eI] &&
            Object.keys(r).length === Object.keys(n).length &&
            Object.keys(r).every((e) => n.hasOwnProperty(e) && r[e] === n[e])
        );
    },
    ta = e9 ? f.useLayoutEffect : f.useEffect,
    ts = (e) => {
        var { isLast: t, leaf: r, parent: n, text: a } = e,
            s = tc(),
            i = te.findPath(s, a),
            o = y.wA.parent(i),
            l = !0 === r[eP];
        return s.isVoid(n)
            ? f.createElement(tl, { length: y.bP.string(n).length })
            : "" !== r.text || n.children[n.children.length - 1] !== a || s.isInline(n) || "" !== y.KE.string(s, o)
              ? "" === r.text
                  ? f.createElement(tl, { isMarkPlaceholder: l })
                  : t && "\n" === r.text.slice(-1)
                    ? f.createElement(ti, { isTrailing: !0, text: r.text })
                    : f.createElement(ti, { text: r.text })
              : f.createElement(tl, { isLineBreak: !0, isMarkPlaceholder: l });
    },
    ti = (e) => {
        var { text: t, isTrailing: r = !1 } = e,
            n = (0, f.useRef)(null),
            a = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""),
            [s] = (0, f.useState)(a);
        return (
            ta(() => {
                var e = a();
                n.current && n.current.textContent !== e && (n.current.textContent = e);
            }),
            f.createElement(to, { ref: n }, s)
        );
    },
    to = (0, f.memo)(
        (0, f.forwardRef)((e, t) => f.createElement("span", { "data-slate-string": !0, ref: t }, e.children)),
    ),
    tl = (e) => {
        var { length: t = 0, isLineBreak: r = !1, isMarkPlaceholder: n = !1 } = e,
            a = { "data-slate-zero-width": r ? "n" : "z", "data-slate-length": t };
        return (
            n && (a["data-slate-mark-placeholder"] = !0),
            f.createElement(
                "span",
                Object.assign({}, a),
                eZ && r ? null : "\uFEFF",
                r ? f.createElement("br", null) : null,
            )
        );
    },
    tu = (0, f.createContext)(null),
    tc = () => {
        var e = (0, f.useContext)(tu);
        if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
        return e;
    },
    td = f.memo(
        (e) => {
            var {
                    leaf: t,
                    isLast: r,
                    text: n,
                    parent: a,
                    renderPlaceholder: s,
                    renderLeaf: i = (e) => f.createElement(tf, Object.assign({}, e)),
                } = e,
                o = (0, f.useRef)(null),
                l = (0, f.useRef)(null),
                u = tc(),
                c = (0, f.useRef)(null);
            (0, f.useEffect)(
                () => () => {
                    c.current && c.current.disconnect();
                },
                [],
            ),
                (0, f.useEffect)(() => {
                    var e = null == l ? void 0 : l.current;
                    if (
                        (e ? ev.set(u, e) : ev.delete(u),
                        c.current
                            ? (c.current.disconnect(), e && c.current.observe(e))
                            : e &&
                              ((c.current = new (window.ResizeObserver || eo)(() => {
                                  var e = eL.get(u);
                                  null == e || e();
                              })),
                              c.current.observe(e)),
                        !e && o.current)
                    ) {
                        var t = eL.get(u);
                        null == t || t();
                    }
                    return (
                        (o.current = l.current),
                        () => {
                            ev.delete(u);
                        }
                    );
                }, [l, t]);
            var d = f.createElement(ts, { isLast: r, leaf: t, parent: a, text: n });
            if (t[eI]) {
                var p = {
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
                d = f.createElement(f.Fragment, null, s(p), d);
            }
            return i({ attributes: { "data-slate-leaf": !0 }, children: d, leaf: t, text: n });
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            y.EY.equals(t.leaf, e.leaf) &&
            t.leaf[eI] === e.leaf[eI],
    ),
    tf = (e) => {
        var { attributes: t, children: r } = e;
        return f.createElement("span", Object.assign({}, t), r);
    },
    tp = f.memo(
        (e) => {
            for (
                var { decorations: t, isLast: r, parent: n, renderPlaceholder: a, renderLeaf: s, text: i } = e,
                    o = tc(),
                    l = (0, f.useRef)(null),
                    u = y.EY.decorations(i, t),
                    c = te.findKey(o, i),
                    d = [],
                    p = 0;
                p < u.length;
                p++
            ) {
                var h = u[p];
                d.push(
                    f.createElement(td, {
                        isLast: r && p === u.length - 1,
                        key: "".concat(c.id, "-").concat(p),
                        renderPlaceholder: a,
                        leaf: h,
                        text: i,
                        parent: n,
                        renderLeaf: s,
                    }),
                );
            }
            var m = (0, f.useCallback)(
                (e) => {
                    var t = eS.get(o);
                    e
                        ? (null == t || t.set(c, e), ey.set(i, e), eb.set(e, i))
                        : (null == t || t.delete(c), ey.delete(i), l.current && eb.delete(l.current)),
                        (l.current = e);
                },
                [l, o, c, i],
            );
            return f.createElement("span", { "data-slate-node": "text", ref: m }, d);
        },
        (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++) {
                    var n = e[r],
                        a = t[r];
                    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !tn(n, a))
                        return !1;
                }
                return !0;
            })(t.decorations, e.decorations),
    ),
    th = f.memo(
        (e) => {
            var {
                    decorations: t,
                    element: r,
                    renderElement: n = (e) => f.createElement(tm, Object.assign({}, e)),
                    renderPlaceholder: a,
                    renderLeaf: s,
                    selection: i,
                } = e,
                l = tc(),
                u = tE(),
                c = l.isInline(r),
                d = te.findKey(l, r),
                p = (0, f.useCallback)(
                    (e) => {
                        var t = eS.get(l);
                        e
                            ? (null == t || t.set(d, e), ey.set(r, e), eb.set(e, r))
                            : (null == t || t.delete(d), ey.delete(r));
                    },
                    [l, d, r],
                ),
                h = tb({
                    decorations: t,
                    node: r,
                    renderElement: n,
                    renderPlaceholder: a,
                    renderLeaf: s,
                    selection: i,
                }),
                m = { "data-slate-node": "element", ref: p };
            if ((c && (m["data-slate-inline"] = !0), !c && y.KE.hasInlines(l, r))) {
                var _ = y.bP.string(r),
                    g = o()(_);
                "rtl" === g && (m.dir = g);
            }
            if (y.KE.isVoid(l, r)) {
                (m["data-slate-void"] = !0), !u && c && (m.contentEditable = !1);
                var [[v]] = y.bP.texts(r);
                (h = f.createElement(
                    c ? "span" : "div",
                    {
                        "data-slate-spacer": !0,
                        style: { height: "0", color: "transparent", outline: "none", position: "absolute" },
                    },
                    f.createElement(tp, { renderPlaceholder: a, decorations: [], isLast: !1, parent: r, text: v }),
                )),
                    eh.set(v, 0),
                    em.set(v, r);
            }
            return n({ attributes: m, children: h, element: r, decorations: t });
        },
        (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
                if (e.length !== t.length) return !1;
                for (var r = 0; r < e.length; r++) {
                    var n = e[r],
                        a = t[r];
                    if (!y.Q6.equals(n, a) || !tn(n, a)) return !1;
                }
                return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection || (!!e.selection && !!t.selection && y.Q6.equals(e.selection, t.selection))),
    ),
    tm = (e) => {
        var { attributes: t, children: r, element: n } = e,
            a = tc().isInline(n) ? "span" : "div";
        return f.createElement(a, Object.assign({}, t, { style: { position: "relative" } }), r);
    },
    t_ = (0, f.createContext)(() => []),
    tg = (0, f.createContext)(!1),
    tv = () => (0, f.useContext)(tg),
    tb = (e) => {
        for (
            var { decorations: t, node: r, renderElement: n, renderPlaceholder: a, renderLeaf: s, selection: i } = e,
                o = (0, f.useContext)(t_),
                l = tc(),
                u = te.findPath(l, r),
                c = [],
                d = y.Hg.isElement(r) && !l.isInline(r) && y.KE.hasInlines(l, r),
                p = 0;
            p < r.children.length;
            p++
        ) {
            var h = u.concat(p),
                m = r.children[p],
                _ = te.findKey(l, m),
                g = y.KE.range(l, h),
                v = i && y.Q6.intersection(g, i),
                b = o([m, h]);
            for (var E of t) {
                var S = y.Q6.intersection(E, g);
                S && b.push(S);
            }
            y.Hg.isElement(m)
                ? c.push(
                      f.createElement(
                          tg.Provider,
                          { key: "provider-".concat(_.id), value: !!v },
                          f.createElement(th, {
                              decorations: b,
                              element: m,
                              key: _.id,
                              renderElement: n,
                              renderPlaceholder: a,
                              renderLeaf: s,
                              selection: v,
                          }),
                      ),
                  )
                : c.push(
                      f.createElement(tp, {
                          decorations: b,
                          key: _.id,
                          isLast: d && p === r.children.length - 1,
                          parent: r,
                          renderPlaceholder: a,
                          renderLeaf: s,
                          text: m,
                      }),
                  ),
                eh.set(m, p),
                em.set(m, r);
        }
        return c;
    },
    ty = (0, f.createContext)(!1),
    tE = () => (0, f.useContext)(ty),
    tS = (0, f.createContext)(null),
    tT = {
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
    tx = {
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
    tw = {
        deleteWordBackward: "ctrl+shift?+backspace",
        deleteWordForward: "ctrl+shift?+delete",
        redo: ["ctrl+y", "ctrl+shift+z"],
    },
    tC = (e) => {
        var t = tT[e],
            r = tx[e],
            n = tw[e],
            a = t && (0, el.isKeyHotkey)(t),
            s = r && (0, el.isKeyHotkey)(r),
            i = n && (0, el.isKeyHotkey)(n);
        return (e) => !!((a && a(e)) || (eX && s && s(e)) || (!eX && i && i(e)));
    },
    tD = {
        isBold: tC("bold"),
        isCompose: tC("compose"),
        isMoveBackward: tC("moveBackward"),
        isMoveForward: tC("moveForward"),
        isDeleteBackward: tC("deleteBackward"),
        isDeleteForward: tC("deleteForward"),
        isDeleteLineBackward: tC("deleteLineBackward"),
        isDeleteLineForward: tC("deleteLineForward"),
        isDeleteWordBackward: tC("deleteWordBackward"),
        isDeleteWordForward: tC("deleteWordForward"),
        isExtendBackward: tC("extendBackward"),
        isExtendForward: tC("extendForward"),
        isExtendLineBackward: tC("extendLineBackward"),
        isExtendLineForward: tC("extendLineForward"),
        isItalic: tC("italic"),
        isMoveLineBackward: tC("moveLineBackward"),
        isMoveLineForward: tC("moveLineForward"),
        isMoveWordBackward: tC("moveWordBackward"),
        isMoveWordForward: tC("moveWordForward"),
        isRedo: tC("redo"),
        isSoftBreak: tC("insertSoftBreak"),
        isSplitBlock: tC("splitBlock"),
        isTransposeCharacter: tC("transposeCharacter"),
        isUndo: tC("undo"),
    },
    tO = { subtree: !0, childList: !0, characterData: !0, characterDataOldValue: !0 };
class tA extends f.Component {
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
            { receivedUserInput: r } = this.props,
            n = this.context;
        (this.manager =
            ((e = []),
            {
                registerMutations: (t) => {
                    if (r.current) {
                        var a = t.filter((e) => e$(n, e, t));
                        e.push(...a);
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
            r,
            n,
            a = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
        return (
            null != a && a.length && (null == (n = this.manager) || n.registerMutations(a)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (r = this.manager) || r.restoreDOM(),
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
tA.contextType = tu;
var tM = eZ
    ? tA
    : (e) => {
          var { children: t } = e;
          return f.createElement(f.Fragment, null, t);
      };
function tR(e) {
    for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
    return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
}
function tk(e, t) {
    var { start: r, end: n, text: a } = t,
        s = e.slice(r, n),
        i = (function (e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) if (e.charAt(n) !== t.charAt(n)) return n;
            return r;
        })(s, a),
        o = Math.min(s.length - i, a.length - i),
        l = (function (e, t, r) {
            for (var n = Math.min(e.length, t.length, r), a = 0; a < n; a++)
                if (e.charAt(e.length - a - 1) !== t.charAt(t.length - a - 1)) return a;
            return n;
        })(s, a, o),
        u = { start: r + i, end: n - l, text: a.slice(i, a.length - l) };
    return u.start === u.end && 0 === u.text.length ? null : u;
}
function tN(e, t) {
    var { path: r, offset: n } = t;
    if (!y.KE.hasPath(e, r)) return null;
    var a = y.bP.get(e, r);
    if (!y.EY.isText(a)) return null;
    var s = y.KE.above(e, { match: (t) => y.Hg.isElement(t) && y.KE.isBlock(e, t), at: r });
    if (!s) return null;
    for (; n > a.text.length; ) {
        var i = y.KE.next(e, { at: r, match: y.EY.isText });
        if (!i || !y.wA.isDescendant(i[1], s[1])) return null;
        (n -= a.text.length), (a = i[0]), (r = i[1]);
    }
    return { path: r, offset: n };
}
function tL(e, t) {
    var r = tN(e, t.anchor);
    if (!r) return null;
    if (y.Q6.isCollapsed(t)) return { anchor: r, focus: r };
    var n = tN(e, t.focus);
    return n ? { anchor: r, focus: n } : null;
}
function tI(e, t, r) {
    var n = eR.get(e),
        a =
            null == n
                ? void 0
                : n.find((e) => {
                      var { path: r } = e;
                      return y.wA.equals(r, t.path);
                  });
    if (!a || t.offset <= a.diff.start) return y.bR.transform(t, r, { affinity: "backward" });
    var { diff: s } = a;
    if (t.offset <= s.start + s.text.length) {
        var i = { path: t.path, offset: s.start },
            o = y.bR.transform(i, r, { affinity: "backward" });
        return o ? { path: o.path, offset: o.offset + t.offset - s.start } : null;
    }
    var l = { path: t.path, offset: t.offset - s.text.length + s.end - s.start },
        u = y.bR.transform(l, r, { affinity: "backward" });
    return u
        ? "split_node" === r.type && y.wA.equals(r.path, t.path) && l.offset < r.position && s.start < r.position
            ? u
            : { path: u.path, offset: u.offset + s.text.length - s.end + s.start }
        : null;
}
function tP(e, t, r) {
    var n = tI(e, t.anchor, r);
    if (!n) return null;
    if (y.Q6.isCollapsed(t)) return { anchor: n, focus: n };
    var a = tI(e, t.focus, r);
    return a ? { anchor: n, focus: a } : null;
}
function tF(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function tB(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tF(Object(r), !0).forEach(function (t) {
                  ec(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tF(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var tY = function () {},
    tU = ["node"];
function tj(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
var tV = { subtree: !0, childList: !0, characterData: !0 },
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
    tG = ["text"];
function tz(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function tW(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? tz(Object(r), !0).forEach(function (t) {
                  ec(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : tz(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var tq = (e) => f.createElement(f.Fragment, null, tb(e)),
    t$ = (e) => {
        var t,
            r,
            n,
            a,
            s,
            i,
            l = (0, f.useCallback)((e) => f.createElement(tK, Object.assign({}, e)), []),
            {
                autoFocus: c,
                decorate: p = tQ,
                onDOMBeforeInput: h,
                placeholder: m,
                readOnly: _ = !1,
                renderElement: g,
                renderLeaf: v,
                renderPlaceholder: b = l,
                scrollSelectionIntoView: E = tX,
                style: S = {},
                as: T = "div",
                disableDefaultStyles: x = !1,
            } = e,
            w = ed(e, tH),
            C = (() => {
                var e = (0, f.useContext)(tS);
                if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                var { editor: t } = e;
                return t;
            })(),
            [D, O] = (0, f.useState)(!1),
            A = (0, f.useRef)(null),
            M = (0, f.useRef)([]),
            { onUserInput: R, receivedUserInput: k } =
                ((t = tc()),
                (r = (0, f.useRef)(!1)),
                (n = (0, f.useRef)(0)),
                (a = (0, f.useCallback)(() => {
                    if (!r.current) {
                        r.current = !0;
                        var e = te.getWindow(t);
                        e.cancelAnimationFrame(n.current),
                            (n.current = e.requestAnimationFrame(() => {
                                r.current = !1;
                            }));
                    }
                }, [])),
                (0, f.useEffect)(() => () => cancelAnimationFrame(n.current), []),
                { receivedUserInput: r, onUserInput: a }),
            [, N] = (0, f.useReducer)((e) => e + 1, 0);
        eL.set(C, N), eT.set(C, _);
        var L = (0, f.useMemo)(
            () => ({ isDraggingInternally: !1, isUpdatingSelection: !1, latestElement: null, hasMarkPlaceholder: !1 }),
            [],
        );
        (0, f.useLayoutEffect)(
            () => () => {
                null == L || (null != L.latestElement && (L.latestElement.remove(), (L.latestElement = null)));
            },
            [],
        ),
            (0, f.useEffect)(() => {
                A.current && c && A.current.focus();
            }, [c]);
        var I = (0, f.useCallback)(
                d()(() => {
                    if (
                        (eZ || !te.isComposing(C)) &&
                        (!L.isUpdatingSelection || (null != F && F.isFlushing())) &&
                        !L.isDraggingInternally
                    ) {
                        var e = te.findDocumentOrShadowRoot(C),
                            { activeElement: t } = e,
                            r = te.toDOMNode(C, C),
                            n = e.getSelection();
                        if ((t === r ? ((L.latestElement = t), ex.set(C, !0)) : ex.delete(C), !n))
                            return y.gB.deselect(C);
                        var { anchorNode: a, focusNode: s } = n,
                            i = te.hasEditableTarget(C, a) || te.isTargetInsideNonReadonlyVoid(C, a),
                            o = te.hasEditableTarget(C, s) || te.isTargetInsideNonReadonlyVoid(C, s);
                        if (i && o) {
                            var l = te.toSlateRange(C, n, { exactMatch: !1, suppressThrow: !0 });
                            l &&
                                (te.isComposing(C) ||
                                (null != F && F.hasPendingChanges()) ||
                                (null != F && F.isFlushing())
                                    ? null == F || F.handleUserSelect(l)
                                    : y.gB.select(C, l));
                        }
                        !_ || (i && o) || y.gB.deselect(C);
                    }
                }, 100),
                [_],
            ),
            P = (0, f.useMemo)(() => u()(I, 0), [I]),
            F = (function (e) {
                var t,
                    { node: r } = e,
                    n = ed(e, tU);
                if (!eZ) return null;
                var a = tc(),
                    s =
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
                    [i] = (0, f.useState)(() =>
                        (function (e) {
                            var { editor: t, scheduleOnDOMSelectionChange: r, onDOMSelectionChange: n } = e,
                                a = !1,
                                s = null,
                                i = null,
                                o = null,
                                l = 0,
                                u = !1,
                                c = () => {
                                    var e = eN.get(t);
                                    if ((eN.delete(t), e)) {
                                        var { selection: r } = t,
                                            n = tL(t, e);
                                        !n || (r && y.Q6.equals(n, r)) || y.gB.select(t, n);
                                    }
                                },
                                d = () => {
                                    if (
                                        (i && (clearTimeout(i), (i = null)),
                                        o && (clearTimeout(o), (o = null)),
                                        !_() && !m())
                                    )
                                        return void c();
                                    a || ((a = !0), setTimeout(() => (a = !1))), m() && (a = "action");
                                    var e = t.selection && y.KE.rangeRef(t, t.selection, { affinity: "forward" });
                                    eM.set(t, t.marks), tY("flush", ek.get(t), eR.get(t));
                                    for (var s = _(); (l = null == (d = eR.get(t)) ? void 0 : d[0]); ) {
                                        var l,
                                            d,
                                            f,
                                            p = eA.get(t);
                                        void 0 !== p && (eA.delete(t), (t.marks = p)), p && !1 === u && (u = null);
                                        var h = (function (e) {
                                            var { path: t, diff: r } = e;
                                            return {
                                                anchor: { path: t, offset: r.start },
                                                focus: { path: t, offset: r.end },
                                            };
                                        })(l);
                                        (t.selection && y.Q6.equals(t.selection, h)) || y.gB.select(t, h),
                                            l.diff.text ? y.KE.insertText(t, l.diff.text) : y.KE.deleteFragment(t),
                                            eR.set(
                                                t,
                                                null == (f = eR.get(t))
                                                    ? void 0
                                                    : f.filter((e) => {
                                                          var { id: t } = e;
                                                          return t !== l.id;
                                                      }),
                                            ),
                                            !(function (e, t) {
                                                var { path: r, diff: n } = t;
                                                if (!y.KE.hasPath(e, r)) return !1;
                                                var a = y.bP.get(e, r);
                                                if (!y.EY.isText(a)) return !1;
                                                if (n.start !== a.text.length || 0 === n.text.length)
                                                    return a.text.slice(n.start, n.start + n.text.length) === n.text;
                                                var s = y.wA.next(r);
                                                if (!y.KE.hasPath(e, s)) return !1;
                                                var i = y.bP.get(e, s);
                                                return y.EY.isText(i) && i.text.startsWith(n.text);
                                            })(t, l) &&
                                                ((s = !1),
                                                ek.delete(t),
                                                eM.delete(t),
                                                (a = "action"),
                                                eN.delete(t),
                                                r.cancel(),
                                                n.cancel(),
                                                null == e || e.unref());
                                    }
                                    var g = null == e ? void 0 : e.unref();
                                    if (
                                        (!g ||
                                            eN.get(t) ||
                                            (t.selection && y.Q6.equals(g, t.selection)) ||
                                            y.gB.select(t, g),
                                        m())
                                    )
                                        return void (() => {
                                            var e = ek.get(t);
                                            if ((ek.delete(t), e)) {
                                                if (e.at) {
                                                    var r = y.bR.isPoint(e.at) ? tN(t, e.at) : tL(t, e.at);
                                                    if (!r) return;
                                                    var n = y.KE.range(t, r);
                                                    (t.selection && y.Q6.equals(t.selection, n)) || y.gB.select(t, r);
                                                }
                                                e.run();
                                            }
                                        })();
                                    s && r(), r.flush(), n.flush(), c();
                                    var v = eM.get(t);
                                    eM.delete(t), void 0 !== v && ((t.marks = v), t.onChange());
                                },
                                f = function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                        r = ev.get(t);
                                    if (r) {
                                        if (_() || e) {
                                            r.style.display = "none";
                                            return;
                                        }
                                        r.style.removeProperty("display");
                                    }
                                },
                                p = (e, r) => {
                                    var n,
                                        a,
                                        s,
                                        i,
                                        o,
                                        u,
                                        c,
                                        d,
                                        p = null != (d = eR.get(t)) ? d : [];
                                    eR.set(t, p);
                                    var h = y.bP.leaf(t, e),
                                        m = p.findIndex((t) => y.wA.equals(t.path, e));
                                    if (m < 0) {
                                        tk(h.text, r) && p.push({ path: e, diff: r, id: l++ }), f();
                                        return;
                                    }
                                    var _ =
                                        ((n = h.text),
                                        (a = p[m].diff),
                                        (s = Math.min(a.start, r.start)),
                                        (i = Math.max(0, Math.min(a.start + a.text.length, r.end) - r.start)),
                                        (o = tR(n, a, r)),
                                        (u = Math.max(
                                            r.start + r.text.length,
                                            a.start +
                                                a.text.length +
                                                (a.start + a.text.length > r.start ? r.text.length : 0) -
                                                i,
                                        )),
                                        (c = o.slice(s, u)),
                                        tk(n, {
                                            start: s,
                                            end: Math.max(a.end, r.end - a.text.length + (a.end - a.start)),
                                            text: c,
                                        }));
                                    if (!_) {
                                        p.splice(m, 1), f();
                                        return;
                                    }
                                    p[m] = tB(tB({}, p[m]), {}, { diff: _ });
                                },
                                h = function (e) {
                                    var { at: a } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    (u = !1),
                                        eN.delete(t),
                                        r.cancel(),
                                        n.cancel(),
                                        m() && d(),
                                        ek.set(t, { at: a, run: e }),
                                        (o = setTimeout(d));
                                },
                                m = () => !!ek.get(t),
                                _ = () => {
                                    var e;
                                    return !!(null != (e = eR.get(t)) && e.length);
                                },
                                g = (e) => {
                                    eN.set(t, e), i && (clearTimeout(i), (i = null));
                                    var { selection: r } = t;
                                    if (e) {
                                        var n = !r || !y.wA.equals(r.anchor.path, e.anchor.path),
                                            a =
                                                !r ||
                                                !y.wA.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                        ((n && u) || a) && (u = !1), (n || _()) && (i = setTimeout(d, 200));
                                    }
                                },
                                v = () => {
                                    m() || (o = setTimeout(d));
                                };
                            return {
                                flush: d,
                                scheduleFlush: v,
                                hasPendingDiffs: _,
                                hasPendingAction: m,
                                hasPendingChanges: () => m() || _(),
                                isFlushing: () => a,
                                handleUserSelect: g,
                                handleCompositionEnd: (e) => {
                                    s && clearTimeout(s),
                                        (s = setTimeout(() => {
                                            ew.set(t, !1), d();
                                        }, 25));
                                },
                                handleCompositionStart: (e) => {
                                    ew.set(t, !0), s && (clearTimeout(s), (s = null));
                                },
                                handleDOMBeforeInput: (e) => {
                                    i && (clearTimeout(i), (i = null));
                                    var { inputType: r } = e,
                                        n = null,
                                        a = e.dataTransfer || e.data || void 0;
                                    !1 !== u && "insertText" !== r && "insertCompositionText" !== r && (u = !1);
                                    var [s] = e.getTargetRanges();
                                    s && (n = te.toSlateRange(t, s, { exactMatch: !1, suppressThrow: !0 }));
                                    var o = te.getWindow(t).getSelection();
                                    if (
                                        (!n &&
                                            o &&
                                            ((s = o),
                                            (n = te.toSlateRange(t, o, { exactMatch: !1, suppressThrow: !0 }))),
                                        (n = null != (M = n) ? M : t.selection))
                                    ) {
                                        var l = !0;
                                        if (r.startsWith("delete")) {
                                            if (y.Q6.isExpanded(n)) {
                                                var [c, d] = y.Q6.edges(n);
                                                if (y.bP.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                                                    var f = y.KE.next(t, { at: c.path, match: y.EY.isText });
                                                    f && y.wA.equals(f[1], d.path) && (n = { anchor: d, focus: d });
                                                }
                                            }
                                            var m = r.endsWith("Backward") ? "backward" : "forward",
                                                [_, b] = y.Q6.edges(n),
                                                [E, S] = y.KE.leaf(t, _.path),
                                                T = { text: "", start: _.offset, end: b.offset },
                                                x = eR.get(t),
                                                w = null == x ? void 0 : x.find((e) => y.wA.equals(e.path, S)),
                                                C = w ? [w.diff, T] : [T];
                                            if ((0 === tR(E.text, ...C).length && (l = !1), y.Q6.isExpanded(n))) {
                                                if (l && y.wA.equals(n.anchor.path, n.focus.path)) {
                                                    var D = { path: n.anchor.path, offset: _.offset };
                                                    return (
                                                        g(y.KE.range(t, D, D)),
                                                        p(n.anchor.path, { text: "", end: b.offset, start: _.offset })
                                                    );
                                                }
                                                return h(() => y.KE.deleteFragment(t, { direction: m }), { at: n });
                                            }
                                        }
                                        switch (r) {
                                            case "deleteByComposition":
                                            case "deleteByCut":
                                            case "deleteByDrag":
                                                return h(() => y.KE.deleteFragment(t), { at: n });
                                            case "deleteContent":
                                            case "deleteContentForward":
                                                var { anchor: O } = n;
                                                if (l && y.Q6.isCollapsed(n)) {
                                                    var A = y.bP.leaf(t, O.path);
                                                    if (O.offset < A.text.length)
                                                        return p(O.path, {
                                                            text: "",
                                                            start: O.offset,
                                                            end: O.offset + 1,
                                                        });
                                                }
                                                return h(() => y.KE.deleteForward(t), { at: n });
                                            case "deleteContentBackward":
                                                var M,
                                                    R,
                                                    { anchor: k } = n,
                                                    N = eV(s) ? s.isCollapsed : !!(null != (R = s) && R.collapsed);
                                                if (l && N && y.Q6.isCollapsed(n) && k.offset > 0)
                                                    return p(k.path, { text: "", start: k.offset - 1, end: k.offset });
                                                return h(() => y.KE.deleteBackward(t), { at: n });
                                            case "deleteEntireSoftLine":
                                                return h(
                                                    () => {
                                                        y.KE.deleteBackward(t, { unit: "line" }),
                                                            y.KE.deleteForward(t, { unit: "line" });
                                                    },
                                                    { at: n },
                                                );
                                            case "deleteHardLineBackward":
                                                return h(() => y.KE.deleteBackward(t, { unit: "block" }), { at: n });
                                            case "deleteSoftLineBackward":
                                                return h(() => y.KE.deleteBackward(t, { unit: "line" }), { at: n });
                                            case "deleteHardLineForward":
                                                return h(() => y.KE.deleteForward(t, { unit: "block" }), { at: n });
                                            case "deleteSoftLineForward":
                                                return h(() => y.KE.deleteForward(t, { unit: "line" }), { at: n });
                                            case "deleteWordBackward":
                                                return h(() => y.KE.deleteBackward(t, { unit: "word" }), { at: n });
                                            case "deleteWordForward":
                                                return h(() => y.KE.deleteForward(t, { unit: "word" }), { at: n });
                                            case "insertLineBreak":
                                                return h(() => y.KE.insertSoftBreak(t), { at: n });
                                            case "insertParagraph":
                                                return h(() => y.KE.insertBreak(t), { at: n });
                                            case "insertCompositionText":
                                            case "deleteCompositionText":
                                            case "insertFromComposition":
                                            case "insertFromDrop":
                                            case "insertFromPaste":
                                            case "insertFromYank":
                                            case "insertReplacementText":
                                            case "insertText":
                                                if ((null == a ? void 0 : a.constructor.name) === "DataTransfer")
                                                    return h(() => te.insertData(t, a), { at: n });
                                                var L = null != a ? a : "";
                                                if (
                                                    (eA.get(t) && (L = L.replace("\uFEFF", "")),
                                                    "insertText" === r && /.*\n.*\n$/.test(L) && (L = L.slice(0, -1)),
                                                    L.includes("\n"))
                                                )
                                                    return h(
                                                        () => {
                                                            var e = L.split("\n");
                                                            e.forEach((r, n) => {
                                                                r && y.KE.insertText(t, r),
                                                                    n !== e.length - 1 && y.KE.insertSoftBreak(t);
                                                            });
                                                        },
                                                        { at: n },
                                                    );
                                                if (y.wA.equals(n.anchor.path, n.focus.path)) {
                                                    var [I, P] = y.Q6.edges(n),
                                                        F = { start: I.offset, end: P.offset, text: L };
                                                    if (L && u && "insertCompositionText" === r) {
                                                        var B = u.start + u.text.search(/\S|$/);
                                                        F.start + F.text.search(/\S|$/) === B + 1 &&
                                                        F.end === u.start + u.text.length
                                                            ? ((F.start -= 1), (u = null), v())
                                                            : (u = !1);
                                                    } else
                                                        u =
                                                            "insertText" === r &&
                                                            (null === u
                                                                ? F
                                                                : !!(u && y.Q6.isCollapsed(n)) &&
                                                                  u.end + u.text.length === I.offset &&
                                                                  tB(tB({}, u), {}, { text: u.text + L }));
                                                    if (l) return void p(I.path, F);
                                                }
                                                return h(() => y.KE.insertText(t, L), { at: n });
                                        }
                                    }
                                },
                                handleKeyDown: (e) => {
                                    _() || (f(!0), setTimeout(f));
                                },
                                handleDomMutations: (e) => {
                                    if (!(_() || m()) && e.some((r) => e$(t, r, e))) {
                                        var r;
                                        null == (r = eL.get(t)) || r();
                                    }
                                },
                                handleInput: () => {
                                    (m() || !_()) && d();
                                },
                            };
                        })(
                            (function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = null != arguments[t] ? arguments[t] : {};
                                    t % 2
                                        ? tj(Object(r), !0).forEach(function (t) {
                                              ec(e, t, r[t]);
                                          })
                                        : Object.getOwnPropertyDescriptors
                                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                          : tj(Object(r)).forEach(function (t) {
                                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                            });
                                }
                                return e;
                            })({ editor: a }, n),
                        ),
                    );
                return (
                    !(function (e, t, r) {
                        var [n] = (0, f.useState)(() => new MutationObserver(t));
                        ta(() => {
                            n.takeRecords();
                        }),
                            (0, f.useEffect)(() => {
                                if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                return n.observe(e.current, r), () => n.disconnect();
                            }, []);
                    })(r, i.handleDomMutations, tV),
                    eO.set(a, i.scheduleFlush),
                    s && i.flush(),
                    i
                );
            })({ node: A, onDOMSelectionChange: I, scheduleOnDOMSelectionChange: P });
        ta(() => {
            A.current && (e = eB(A.current))
                ? (e_.set(C, e), eg.set(C, A.current), ey.set(C, A.current), eb.set(A.current, C))
                : ey.delete(C);
            var e,
                { selection: t } = C,
                r = te.findDocumentOrShadowRoot(C).getSelection();
            if (!(!r || !te.isFocused(C) || (null != F && F.hasPendingAction()))) {
                var n = (e) => {
                        var n = "None" !== r.type;
                        if (t || n) {
                            var a = eg.get(C),
                                s = !1;
                            if ((a.contains(r.anchorNode) && a.contains(r.focusNode) && (s = !0), n && s && t && !e)) {
                                var i = te.toSlateRange(C, r, { exactMatch: !0, suppressThrow: !0 });
                                if (i && y.Q6.equals(i, t)) {
                                    if (!L.hasMarkPlaceholder) return;
                                    var o,
                                        { anchorNode: l } = r;
                                    if (
                                        null != l &&
                                        null != (o = l.parentElement) &&
                                        o.hasAttribute("data-slate-mark-placeholder")
                                    )
                                        return;
                                }
                            }
                            if (t && !te.hasRange(C, t)) {
                                C.selection = te.toSlateRange(C, r, { exactMatch: !1, suppressThrow: !0 });
                                return;
                            }
                            L.isUpdatingSelection = !0;
                            var u = t && te.toDOMRange(C, t);
                            return (
                                u
                                    ? (y.Q6.isBackward(t)
                                          ? r.setBaseAndExtent(
                                                u.endContainer,
                                                u.endOffset,
                                                u.startContainer,
                                                u.startOffset,
                                            )
                                          : r.setBaseAndExtent(
                                                u.startContainer,
                                                u.startOffset,
                                                u.endContainer,
                                                u.endOffset,
                                            ),
                                      E(C, u))
                                    : r.removeAllRanges(),
                                u
                            );
                        }
                    },
                    a = n(),
                    s = (null == F ? void 0 : F.isFlushing()) === "action";
                if (!eZ || !s)
                    return void setTimeout(() => {
                        a && eJ && te.toDOMNode(C, C).focus(), (L.isUpdatingSelection = !1);
                    });
                var i = null,
                    o = requestAnimationFrame(() => {
                        if (s) {
                            var e = (e) => {
                                try {
                                    te.toDOMNode(C, C).focus(), n(e);
                                } catch (e) {}
                            };
                            e(),
                                (i = setTimeout(() => {
                                    e(!0), (L.isUpdatingSelection = !1);
                                }));
                        }
                    });
                return () => {
                    cancelAnimationFrame(o), i && clearTimeout(i);
                };
            }
        });
        var B = (0, f.useCallback)(
                (e) => {
                    if ((R(), !_ && te.hasEditableTarget(C, e.target) && !tJ(e, h))) {
                        if (F) return F.handleDOMBeforeInput(e);
                        P.flush(), I.flush();
                        var { selection: t } = C,
                            { inputType: r } = e,
                            n = e.dataTransfer || e.data || void 0,
                            a = "insertCompositionText" === r || "deleteCompositionText" === r;
                        if (!(a && te.isComposing(C))) {
                            var s = !1;
                            if (
                                "insertText" === r &&
                                t &&
                                y.Q6.isCollapsed(t) &&
                                e.data &&
                                1 === e.data.length &&
                                /[a-z ]/i.test(e.data) &&
                                0 !== t.anchor.offset
                            ) {
                                (s = !0), C.marks && (s = !1);
                                var { anchor: i } = t,
                                    [o, l] = te.toDOMPoint(C, i),
                                    u = null == (f = o.parentElement) ? void 0 : f.closest("a"),
                                    c = te.getWindow(C);
                                if (s && u && te.hasDOMNode(C, u)) {
                                    var d,
                                        f,
                                        p,
                                        m,
                                        g =
                                            null == c
                                                ? void 0
                                                : c.document.createTreeWalker(u, NodeFilter.SHOW_TEXT).lastChild();
                                    g === o && (null == (m = g.textContent) ? void 0 : m.length) === l && (s = !1);
                                }
                                if (
                                    s &&
                                    o.parentElement &&
                                    (null == c || null == (p = c.getComputedStyle(o.parentElement))
                                        ? void 0
                                        : p.whiteSpace) === "pre"
                                ) {
                                    var v = y.KE.above(C, {
                                        at: i.path,
                                        match: (e) => y.Hg.isElement(e) && y.KE.isBlock(C, e),
                                    });
                                    v && y.bP.string(v[0]).includes("	") && (s = !1);
                                }
                            }
                            if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                                var [b] = e.getTargetRanges();
                                if (b) {
                                    var E = te.toSlateRange(C, b, { exactMatch: !1, suppressThrow: !1 });
                                    if (!t || !y.Q6.equals(t, E)) {
                                        s = !1;
                                        var S = !a && C.selection && y.KE.rangeRef(C, C.selection);
                                        y.gB.select(C, E), S && eC.set(C, S);
                                    }
                                }
                            }
                            if (!a) {
                                if ((s || e.preventDefault(), t && y.Q6.isExpanded(t) && r.startsWith("delete"))) {
                                    var T = r.endsWith("Backward") ? "backward" : "forward";
                                    y.KE.deleteFragment(C, { direction: T });
                                    return;
                                }
                                switch (r) {
                                    case "deleteByComposition":
                                    case "deleteByCut":
                                    case "deleteByDrag":
                                        y.KE.deleteFragment(C);
                                        break;
                                    case "deleteContent":
                                    case "deleteContentForward":
                                        y.KE.deleteForward(C);
                                        break;
                                    case "deleteContentBackward":
                                        y.KE.deleteBackward(C);
                                        break;
                                    case "deleteEntireSoftLine":
                                        y.KE.deleteBackward(C, { unit: "line" }),
                                            y.KE.deleteForward(C, { unit: "line" });
                                        break;
                                    case "deleteHardLineBackward":
                                        y.KE.deleteBackward(C, { unit: "block" });
                                        break;
                                    case "deleteSoftLineBackward":
                                        y.KE.deleteBackward(C, { unit: "line" });
                                        break;
                                    case "deleteHardLineForward":
                                        y.KE.deleteForward(C, { unit: "block" });
                                        break;
                                    case "deleteSoftLineForward":
                                        y.KE.deleteForward(C, { unit: "line" });
                                        break;
                                    case "deleteWordBackward":
                                        y.KE.deleteBackward(C, { unit: "word" });
                                        break;
                                    case "deleteWordForward":
                                        y.KE.deleteForward(C, { unit: "word" });
                                        break;
                                    case "insertLineBreak":
                                        y.KE.insertSoftBreak(C);
                                        break;
                                    case "insertParagraph":
                                        y.KE.insertBreak(C);
                                        break;
                                    case "insertFromComposition":
                                    case "insertFromDrop":
                                    case "insertFromPaste":
                                    case "insertFromYank":
                                    case "insertReplacementText":
                                    case "insertText":
                                        "insertFromComposition" === r && te.isComposing(C) && (O(!1), ew.set(C, !1)),
                                            (null == n ? void 0 : n.constructor.name) === "DataTransfer"
                                                ? te.insertData(C, n)
                                                : "string" == typeof n &&
                                                  (s
                                                      ? M.current.push(() => y.KE.insertText(C, n))
                                                      : y.KE.insertText(C, n));
                                }
                                var x = null == (d = eC.get(C)) ? void 0 : d.unref();
                                eC.delete(C), !x || (C.selection && y.Q6.equals(C.selection, x)) || y.gB.select(C, x);
                            }
                        }
                    }
                },
                [_, h],
            ),
            Y = (0, f.useCallback)(
                (e) => {
                    null == e
                        ? (I.cancel(),
                          P.cancel(),
                          eg.delete(C),
                          ey.delete(C),
                          A.current && e7 && A.current.removeEventListener("beforeinput", B))
                        : e7 && e.addEventListener("beforeinput", B),
                        (A.current = e);
                },
                [A, B, I, P],
            );
        ta(() => {
            var e = te.getWindow(C);
            return (
                e.document.addEventListener("selectionchange", P),
                () => {
                    e.document.removeEventListener("selectionchange", P);
                }
            );
        }, [P]);
        var U = p([C, []]);
        if (m && 1 === C.children.length && 1 === Array.from(y.bP.texts(C)).length && "" === y.bP.string(C) && !D) {
            var j = y.KE.start(C, []);
            U.push({ [eI]: !0, placeholder: m, anchor: j, focus: j });
        }
        var { marks: V } = C;
        if (((L.hasMarkPlaceholder = !1), C.selection && y.Q6.isCollapsed(C.selection) && V)) {
            var { anchor: H } = C.selection,
                G = y.bP.leaf(C, H.path),
                z = ed(G, tG);
            if (!y.EY.equals(G, V, { loose: !0 })) {
                L.hasMarkPlaceholder = !0;
                var W = Object.fromEntries(Object.keys(z).map((e) => [e, null]));
                U.push(tW(tW(tW({ [eP]: !0 }, W), V), {}, { anchor: H, focus: H }));
            }
        }
        (0, f.useEffect)(() => {
            setTimeout(() => {
                var { selection: e } = C;
                if (e) {
                    var { anchor: t } = e,
                        r = y.bP.leaf(C, t.path);
                    if (V && !y.EY.equals(r, V, { loose: !0 })) return void eA.set(C, V);
                }
                eA.delete(C);
            });
        });
        var q = null == (s = ev.get(C)) || null == (i = s.getBoundingClientRect()) ? void 0 : i.height;
        return f.createElement(
            ty.Provider,
            { value: _ },
            f.createElement(
                t_.Provider,
                { value: p },
                f.createElement(
                    tM,
                    { node: A, receivedUserInput: k },
                    f.createElement(
                        T,
                        Object.assign({ role: _ ? void 0 : "textbox", "aria-multiline": !_ || void 0 }, w, {
                            spellCheck: (!!e7 || !e9) && w.spellCheck,
                            autoCorrect: e7 || !e9 ? w.autoCorrect : "false",
                            autoCapitalize: e7 || !e9 ? w.autoCapitalize : "false",
                            "data-slate-editor": !0,
                            "data-slate-node": "value",
                            contentEditable: !_,
                            zindex: -1,
                            suppressContentEditableWarning: !0,
                            ref: Y,
                            style: tW(
                                tW(
                                    {},
                                    x
                                        ? {}
                                        : tW(
                                              {
                                                  position: "relative",
                                                  outline: "none",
                                                  whiteSpace: "pre-wrap",
                                                  wordWrap: "break-word",
                                              },
                                              q ? { minHeight: q } : {},
                                          ),
                                ),
                                S,
                            ),
                            onBeforeInput: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        !e7 &&
                                        !_ &&
                                        !tZ(e, w.onBeforeInput) &&
                                        te.hasSelectableTarget(C, e.target) &&
                                        (e.preventDefault(), !te.isComposing(C))
                                    ) {
                                        var t = e.data;
                                        y.KE.insertText(C, t);
                                    }
                                },
                                [_],
                            ),
                            onInput: (0, f.useCallback)((e) => {
                                if (!tZ(e, w.onInput)) {
                                    if (F) return void F.handleInput();
                                    for (var t of M.current) t();
                                    M.current = [];
                                }
                            }, []),
                            onBlur: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        _ ||
                                        L.isUpdatingSelection ||
                                        !te.hasSelectableTarget(C, e.target) ||
                                        tZ(e, w.onBlur)
                                    )
                                        return;
                                    var t = te.findDocumentOrShadowRoot(C);
                                    if (L.latestElement !== t.activeElement) {
                                        var { relatedTarget: r } = e;
                                        if (
                                            r !== te.toDOMNode(C, C) &&
                                            !(eU(r) && r.hasAttribute("data-slate-spacer"))
                                        ) {
                                            if (null != r && ej(r) && te.hasDOMNode(C, r)) {
                                                var n = te.toSlateNode(C, r);
                                                if (y.Hg.isElement(n) && !C.isVoid(n)) return;
                                            }
                                            if (e0) {
                                                var a = t.getSelection();
                                                null == a || a.removeAllRanges();
                                            }
                                            ex.delete(C);
                                        }
                                    }
                                },
                                [_, w.onBlur],
                            ),
                            onClick: (0, f.useCallback)(
                                (e) => {
                                    if (te.hasTarget(C, e.target) && !tZ(e, w.onClick) && ej(e.target)) {
                                        var t = te.toSlateNode(C, e.target),
                                            r = te.findPath(C, t);
                                        if (y.KE.hasPath(C, r) && y.bP.get(C, r) === t) {
                                            if (3 === e.detail && r.length >= 1) {
                                                var n = r;
                                                if (!(y.Hg.isElement(t) && y.KE.isBlock(C, t))) {
                                                    var a,
                                                        s = y.KE.above(C, {
                                                            match: (e) => y.Hg.isElement(e) && y.KE.isBlock(C, e),
                                                            at: r,
                                                        });
                                                    n = null != (a = null == s ? void 0 : s[1]) ? a : r.slice(0, 1);
                                                }
                                                var i = y.KE.range(C, n);
                                                y.gB.select(C, i);
                                                return;
                                            }
                                            if (!_) {
                                                var o = y.KE.start(C, r),
                                                    l = y.KE.end(C, r),
                                                    u = y.KE.void(C, { at: o }),
                                                    c = y.KE.void(C, { at: l });
                                                if (u && c && y.wA.equals(u[1], c[1])) {
                                                    var d = y.KE.range(C, o);
                                                    y.gB.select(C, d);
                                                }
                                            }
                                        }
                                    }
                                },
                                [_, w.onClick],
                            ),
                            onCompositionEnd: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        te.hasSelectableTarget(C, e.target) &&
                                        (te.isComposing(C) && (O(!1), ew.set(C, !1)),
                                        null == F || F.handleCompositionEnd(e),
                                        !tZ(e, w.onCompositionEnd) && !eZ && !e0 && !e6 && !eQ && !e8 && !e5) &&
                                        e.data
                                    ) {
                                        var t = eA.get(C);
                                        eA.delete(C),
                                            void 0 !== t && (eM.set(C, C.marks), (C.marks = t)),
                                            y.KE.insertText(C, e.data);
                                        var r = eM.get(C);
                                        eM.delete(C), void 0 !== r && (C.marks = r);
                                    }
                                },
                                [w.onCompositionEnd],
                            ),
                            onCompositionUpdate: (0, f.useCallback)(
                                (e) => {
                                    !te.hasSelectableTarget(C, e.target) ||
                                        tZ(e, w.onCompositionUpdate) ||
                                        te.isComposing(C) ||
                                        (O(!0), ew.set(C, !0));
                                },
                                [w.onCompositionUpdate],
                            ),
                            onCompositionStart: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        te.hasSelectableTarget(C, e.target) &&
                                        (null == F || F.handleCompositionStart(e), !tZ(e, w.onCompositionStart) && !eZ)
                                    ) {
                                        O(!0);
                                        var { selection: t } = C;
                                        if (t) {
                                            if (y.Q6.isExpanded(t)) return void y.KE.deleteFragment(C);
                                            var r = y.KE.above(C, {
                                                match: (e) => y.Hg.isElement(e) && y.KE.isInline(C, e),
                                                mode: "highest",
                                            });
                                            if (r) {
                                                var [, n] = r;
                                                if (y.KE.isEnd(C, t.anchor, n)) {
                                                    var a = y.KE.after(C, n);
                                                    y.gB.setSelection(C, { anchor: a, focus: a });
                                                }
                                            }
                                        }
                                    }
                                },
                                [w.onCompositionStart],
                            ),
                            onCopy: (0, f.useCallback)(
                                (e) => {
                                    te.hasSelectableTarget(C, e.target) &&
                                        !tZ(e, w.onCopy) &&
                                        (e.preventDefault(), te.setFragmentData(C, e.clipboardData, "copy"));
                                },
                                [w.onCopy],
                            ),
                            onCut: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasSelectableTarget(C, e.target) && !tZ(e, w.onCut)) {
                                        e.preventDefault(), te.setFragmentData(C, e.clipboardData, "cut");
                                        var { selection: t } = C;
                                        if (t)
                                            if (y.Q6.isExpanded(t)) y.KE.deleteFragment(C);
                                            else {
                                                var r = y.bP.parent(C, t.anchor.path);
                                                y.KE.isVoid(C, r) && y.gB.delete(C);
                                            }
                                    }
                                },
                                [_, w.onCut],
                            ),
                            onDragOver: (0, f.useCallback)(
                                (e) => {
                                    if (te.hasTarget(C, e.target) && !tZ(e, w.onDragOver)) {
                                        var t = te.toSlateNode(C, e.target);
                                        y.Hg.isElement(t) && y.KE.isVoid(C, t) && e.preventDefault();
                                    }
                                },
                                [w.onDragOver],
                            ),
                            onDragStart: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasTarget(C, e.target) && !tZ(e, w.onDragStart)) {
                                        var t = te.toSlateNode(C, e.target),
                                            r = te.findPath(C, t);
                                        if (
                                            (y.Hg.isElement(t) && y.KE.isVoid(C, t)) ||
                                            y.KE.void(C, { at: r, voids: !0 })
                                        ) {
                                            var n = y.KE.range(C, r);
                                            y.gB.select(C, n);
                                        }
                                        (L.isDraggingInternally = !0), te.setFragmentData(C, e.dataTransfer, "drag");
                                    }
                                },
                                [_, w.onDragStart],
                            ),
                            onDrop: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasTarget(C, e.target) && !tZ(e, w.onDrop)) {
                                        e.preventDefault();
                                        var t = C.selection,
                                            r = te.findEventRange(C, e),
                                            n = e.dataTransfer;
                                        y.gB.select(C, r),
                                            L.isDraggingInternally &&
                                                t &&
                                                !y.Q6.equals(t, r) &&
                                                !y.KE.void(C, { at: r, voids: !0 }) &&
                                                y.gB.delete(C, { at: t }),
                                            te.insertData(C, n),
                                            te.isFocused(C) || te.focus(C);
                                    }
                                    L.isDraggingInternally = !1;
                                },
                                [_, w.onDrop],
                            ),
                            onDragEnd: (0, f.useCallback)(
                                (e) => {
                                    !_ &&
                                        L.isDraggingInternally &&
                                        w.onDragEnd &&
                                        te.hasTarget(C, e.target) &&
                                        w.onDragEnd(e),
                                        (L.isDraggingInternally = !1);
                                },
                                [_, w.onDragEnd],
                            ),
                            onFocus: (0, f.useCallback)(
                                (e) => {
                                    if (
                                        !_ &&
                                        !L.isUpdatingSelection &&
                                        te.hasEditableTarget(C, e.target) &&
                                        !tZ(e, w.onFocus)
                                    ) {
                                        var t = te.toDOMNode(C, C);
                                        if (
                                            ((L.latestElement = te.findDocumentOrShadowRoot(C).activeElement),
                                            eJ && e.target !== t)
                                        )
                                            return void t.focus();
                                        ex.set(C, !0);
                                    }
                                },
                                [_, w.onFocus],
                            ),
                            onKeyDown: (0, f.useCallback)(
                                (e) => {
                                    if (!_ && te.hasEditableTarget(C, e.target)) {
                                        null == F || F.handleKeyDown(e);
                                        var { nativeEvent: t } = e;
                                        if (
                                            (te.isComposing(C) && !1 === t.isComposing && (ew.set(C, !1), O(!1)),
                                            !(tZ(e, w.onKeyDown) || te.isComposing(C)))
                                        ) {
                                            var { selection: r } = C,
                                                n = C.children[null !== r ? r.focus.path[0] : 0],
                                                a = "rtl" === o()(y.bP.string(n));
                                            if (tD.isRedo(t)) {
                                                e.preventDefault(), "function" == typeof C.redo && C.redo();
                                                return;
                                            }
                                            if (tD.isUndo(t)) {
                                                e.preventDefault(), "function" == typeof C.undo && C.undo();
                                                return;
                                            }
                                            if (tD.isMoveLineBackward(t)) {
                                                e.preventDefault(), y.gB.move(C, { unit: "line", reverse: !0 });
                                                return;
                                            }
                                            if (tD.isMoveLineForward(t)) {
                                                e.preventDefault(), y.gB.move(C, { unit: "line" });
                                                return;
                                            }
                                            if (tD.isExtendLineBackward(t)) {
                                                e.preventDefault(),
                                                    y.gB.move(C, { unit: "line", edge: "focus", reverse: !0 });
                                                return;
                                            }
                                            if (tD.isExtendLineForward(t)) {
                                                e.preventDefault(), y.gB.move(C, { unit: "line", edge: "focus" });
                                                return;
                                            }
                                            if (tD.isMoveBackward(t)) {
                                                e.preventDefault(),
                                                    r && y.Q6.isCollapsed(r)
                                                        ? y.gB.move(C, { reverse: !a })
                                                        : y.gB.collapse(C, { edge: "start" });
                                                return;
                                            }
                                            if (tD.isMoveForward(t)) {
                                                e.preventDefault(),
                                                    r && y.Q6.isCollapsed(r)
                                                        ? y.gB.move(C, { reverse: a })
                                                        : y.gB.collapse(C, { edge: "end" });
                                                return;
                                            }
                                            if (tD.isMoveWordBackward(t)) {
                                                e.preventDefault(),
                                                    r && y.Q6.isExpanded(r) && y.gB.collapse(C, { edge: "focus" }),
                                                    y.gB.move(C, { unit: "word", reverse: !a });
                                                return;
                                            }
                                            if (tD.isMoveWordForward(t)) {
                                                e.preventDefault(),
                                                    r && y.Q6.isExpanded(r) && y.gB.collapse(C, { edge: "focus" }),
                                                    y.gB.move(C, { unit: "word", reverse: a });
                                                return;
                                            }
                                            if (e7) {
                                                if (
                                                    (e2 || e0) &&
                                                    r &&
                                                    (tD.isDeleteBackward(t) || tD.isDeleteForward(t)) &&
                                                    y.Q6.isCollapsed(r)
                                                ) {
                                                    var s = y.bP.parent(C, r.anchor.path);
                                                    if (
                                                        y.Hg.isElement(s) &&
                                                        y.KE.isVoid(C, s) &&
                                                        (y.KE.isInline(C, s) || y.KE.isBlock(C, s))
                                                    ) {
                                                        e.preventDefault(), y.KE.deleteBackward(C, { unit: "block" });
                                                        return;
                                                    }
                                                }
                                            } else {
                                                if (tD.isBold(t) || tD.isItalic(t) || tD.isTransposeCharacter(t))
                                                    return void e.preventDefault();
                                                if (tD.isSoftBreak(t)) {
                                                    e.preventDefault(), y.KE.insertSoftBreak(C);
                                                    return;
                                                }
                                                if (tD.isSplitBlock(t)) {
                                                    e.preventDefault(), y.KE.insertBreak(C);
                                                    return;
                                                }
                                                if (tD.isDeleteBackward(t)) {
                                                    e.preventDefault(),
                                                        r && y.Q6.isExpanded(r)
                                                            ? y.KE.deleteFragment(C, { direction: "backward" })
                                                            : y.KE.deleteBackward(C);
                                                    return;
                                                }
                                                if (tD.isDeleteForward(t)) {
                                                    e.preventDefault(),
                                                        r && y.Q6.isExpanded(r)
                                                            ? y.KE.deleteFragment(C, { direction: "forward" })
                                                            : y.KE.deleteForward(C);
                                                    return;
                                                }
                                                if (tD.isDeleteLineBackward(t)) {
                                                    e.preventDefault(),
                                                        r && y.Q6.isExpanded(r)
                                                            ? y.KE.deleteFragment(C, { direction: "backward" })
                                                            : y.KE.deleteBackward(C, { unit: "line" });
                                                    return;
                                                }
                                                if (tD.isDeleteLineForward(t)) {
                                                    e.preventDefault(),
                                                        r && y.Q6.isExpanded(r)
                                                            ? y.KE.deleteFragment(C, { direction: "forward" })
                                                            : y.KE.deleteForward(C, { unit: "line" });
                                                    return;
                                                }
                                                if (tD.isDeleteWordBackward(t)) {
                                                    e.preventDefault(),
                                                        r && y.Q6.isExpanded(r)
                                                            ? y.KE.deleteFragment(C, { direction: "backward" })
                                                            : y.KE.deleteBackward(C, { unit: "word" });
                                                    return;
                                                }
                                                if (tD.isDeleteWordForward(t)) {
                                                    e.preventDefault(),
                                                        r && y.Q6.isExpanded(r)
                                                            ? y.KE.deleteFragment(C, { direction: "forward" })
                                                            : y.KE.deleteForward(C, { unit: "word" });
                                                    return;
                                                }
                                            }
                                        }
                                    }
                                },
                                [_, w.onKeyDown],
                            ),
                            onPaste: (0, f.useCallback)(
                                (e) => {
                                    let t;
                                    !_ &&
                                        te.hasEditableTarget(C, e.target) &&
                                        !tZ(e, w.onPaste) &&
                                        (!e7 ||
                                            ((t = e.nativeEvent).clipboardData &&
                                                "" !== t.clipboardData.getData("text/plain") &&
                                                1 === t.clipboardData.types.length) ||
                                            e0) &&
                                        (e.preventDefault(), te.insertData(C, e.clipboardData));
                                },
                                [_, w.onPaste],
                            ),
                        }),
                        f.createElement(tq, {
                            decorations: U,
                            node: C,
                            renderElement: g,
                            renderPlaceholder: b,
                            renderLeaf: v,
                            selection: C.selection,
                        }),
                    ),
                ),
            ),
        );
    },
    tK = (e) => {
        var { attributes: t, children: r } = e;
        return f.createElement("span", Object.assign({}, t), r, eZ && f.createElement("br", null));
    },
    tQ = () => [],
    tX = (e, t) => {
        if (t.getBoundingClientRect && (!e.selection || (e.selection && y.Q6.isCollapsed(e.selection)))) {
            var r = t.startContainer.parentElement;
            (r.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
                b(r, { scrollMode: "if-needed" }),
                delete r.getBoundingClientRect;
        }
    },
    tZ = (e, t) => {
        if (!t) return !1;
        var r = t(e);
        return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped();
    },
    tJ = (e, t) => {
        if (!t) return !1;
        var r = t(e);
        return null != r ? r : e.defaultPrevented;
    },
    t0 = (0, f.createContext)(!1),
    t1 = () => (0, f.useContext)(t0),
    t2 = (0, f.createContext)({}),
    t3 = ["editor", "children", "onChange", "value"],
    t4 = (e) => {
        var t,
            r,
            n,
            { editor: a, children: s, onChange: i, value: o } = e,
            l = ed(e, t3),
            u = (0, f.useRef)(!1),
            [c, d] = f.useState(() => {
                if (!y.bP.isNodeList(o))
                    throw Error(
                        "[Slate] value is invalid! Expected a list of elements but got: ".concat(y.h6.stringify(o)),
                    );
                if (!y.KE.isEditor(a)) throw Error("[Slate] editor is invalid! You passed: ".concat(y.h6.stringify(a)));
                return (a.children = o), Object.assign(a, l), { v: 0, editor: a };
            }),
            { selectorContext: p, onChange: h } =
                ((t = (0, f.useRef)([]).current),
                (r = (0, f.useRef)({ editor: a }).current),
                (n = (0, f.useCallback)((e) => {
                    (r.editor = e), t.forEach((t) => t(e));
                }, [])),
                {
                    selectorContext: (0, f.useMemo)(
                        () => ({
                            getSlate: () => r.editor,
                            addEventListener: (e) => (
                                t.push(e),
                                () => {
                                    t.splice(t.indexOf(e), 1);
                                }
                            ),
                        }),
                        [t, r],
                    ),
                    onChange: n,
                }),
            m = (0, f.useCallback)(() => {
                i && i(a.children), d((e) => ({ v: e.v + 1, editor: a })), h(a);
            }, [i]);
        (0, f.useEffect)(
            () => (
                eD.set(a, m),
                () => {
                    eD.set(a, () => {}), (u.current = !0);
                }
            ),
            [m],
        );
        var [_, g] = (0, f.useState)(te.isFocused(a));
        return (
            (0, f.useEffect)(() => {
                g(te.isFocused(a));
            }),
            ta(() => {
                var e = () => g(te.isFocused(a));
                return eK
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
                { value: p },
                f.createElement(
                    tS.Provider,
                    { value: c },
                    f.createElement(tu.Provider, { value: c.editor }, f.createElement(t0.Provider, { value: _ }, s)),
                ),
            )
        );
    },
    t6 = (e, t) => {
        var r = (t.top + t.bottom) / 2;
        return e.top <= r && e.bottom >= r;
    },
    t5 = (e, t, r) => {
        var n = te.toDOMRange(e, t).getBoundingClientRect(),
            a = te.toDOMRange(e, r).getBoundingClientRect();
        return t6(n, a) && t6(a, n);
    };
function t8(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(e);
        t &&
            (n = n.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
    }
    return r;
}
function t9(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2
            ? t8(Object(r), !0).forEach(function (t) {
                  ec(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : t8(Object(r)).forEach(function (t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                });
    }
    return e;
}
var t7 = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
            { apply: r, onChange: n, deleteBackward: a, addMark: s, removeMark: i } = e;
        return (
            eS.set(e, new WeakMap()),
            (e.addMark = (t, r) => {
                var n, a;
                null == (n = eO.get(e)) || n(),
                    !eA.get(e) && null != (a = eR.get(e)) && a.length && eA.set(e, null),
                    eM.delete(e),
                    s(t, r);
            }),
            (e.removeMark = (t) => {
                var r;
                !eA.get(e) && null != (r = eR.get(e)) && r.length && eA.set(e, null), eM.delete(e), i(t);
            }),
            (e.deleteBackward = (t) => {
                if ("line" !== t) return a(t);
                if (e.selection && y.Q6.isCollapsed(e.selection)) {
                    var r = y.KE.above(e, { match: (t) => y.Hg.isElement(t) && y.KE.isBlock(e, t), at: e.selection });
                    if (r) {
                        var [, n] = r,
                            s = y.KE.range(e, n, e.selection.anchor),
                            i = ((e, t) => {
                                var r = y.KE.range(e, y.Q6.end(t)),
                                    n = Array.from(y.KE.positions(e, { at: t })),
                                    a = 0,
                                    s = n.length,
                                    i = Math.floor(s / 2);
                                if (t5(e, y.KE.range(e, n[a]), r)) return y.KE.range(e, n[a], r);
                                if (n.length < 2) return y.KE.range(e, n[n.length - 1], r);
                                for (; i !== n.length && i !== a; )
                                    t5(e, y.KE.range(e, n[i]), r) ? (s = i) : (a = i), (i = Math.floor((a + s) / 2));
                                return y.KE.range(e, n[s], r);
                            })(e, s);
                        y.Q6.isCollapsed(i) || y.gB.delete(e, { at: i });
                    }
                }
            }),
            (e.apply = (t) => {
                var n,
                    a = [],
                    s = eR.get(e);
                if (null != s && s.length) {
                    var i = s
                        .map((e) =>
                            (function (e, t) {
                                var { path: r, diff: n, id: a } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!y.wA.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset <= n.start)
                                            return {
                                                diff: {
                                                    start: t.text.length + n.start,
                                                    end: t.text.length + n.end,
                                                    text: n.text,
                                                },
                                                id: a,
                                                path: r,
                                            };
                                        return {
                                            diff: { start: n.start, end: n.end + t.text.length, text: n.text },
                                            id: a,
                                            path: r,
                                        };
                                    case "remove_text":
                                        if (!y.wA.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset + t.text.length <= n.start)
                                            return {
                                                diff: {
                                                    start: n.start - t.text.length,
                                                    end: n.end - t.text.length,
                                                    text: n.text,
                                                },
                                                id: a,
                                                path: r,
                                            };
                                        return {
                                            diff: { start: n.start, end: n.end - t.text.length, text: n.text },
                                            id: a,
                                            path: r,
                                        };
                                    case "split_node":
                                        if (!y.wA.equals(t.path, r) || t.position >= n.end)
                                            return {
                                                diff: n,
                                                id: a,
                                                path: y.wA.transform(r, t, { affinity: "backward" }),
                                            };
                                        if (t.position > n.start)
                                            return {
                                                diff: {
                                                    start: n.start,
                                                    end: Math.min(t.position, n.end),
                                                    text: n.text,
                                                },
                                                id: a,
                                                path: r,
                                            };
                                        return {
                                            diff: {
                                                start: n.start - t.position,
                                                end: n.end - t.position,
                                                text: n.text,
                                            },
                                            id: a,
                                            path: y.wA.transform(r, t, { affinity: "forward" }),
                                        };
                                    case "merge_node":
                                        if (!y.wA.equals(t.path, r))
                                            return { diff: n, id: a, path: y.wA.transform(r, t) };
                                        return {
                                            diff: {
                                                start: n.start + t.position,
                                                end: n.end + t.position,
                                                text: n.text,
                                            },
                                            id: a,
                                            path: y.wA.transform(r, t),
                                        };
                                }
                                var s = y.wA.transform(r, t);
                                return s ? { diff: n, path: s, id: a } : null;
                            })(e, t),
                        )
                        .filter(Boolean);
                    eR.set(e, i);
                }
                var o = eN.get(e);
                o && eN.set(e, tP(e, o, t));
                var l = ek.get(e);
                if (null != l && l.at) {
                    var u = y.bR.isPoint(null == l ? void 0 : l.at) ? tI(e, l.at, t) : tP(e, l.at, t);
                    ek.set(e, u ? t9(t9({}, l), {}, { at: u }) : null);
                }
                switch (t.type) {
                    case "insert_text":
                    case "remove_text":
                    case "set_node":
                    case "split_node":
                        a.push(...re(e, t.path));
                        break;
                    case "set_selection":
                        null == (n = eC.get(e)) || n.unref(), eC.delete(e);
                        break;
                    case "insert_node":
                    case "remove_node":
                        a.push(...re(e, y.wA.parent(t.path)));
                        break;
                    case "merge_node":
                        a.push(...re(e, y.wA.previous(t.path)));
                        break;
                    case "move_node":
                        a.push(...re(e, y.wA.common(y.wA.parent(t.path), y.wA.parent(t.newPath))));
                }
                for (var [c, d] of (r(t), a)) {
                    var [f] = y.KE.node(e, c);
                    eE.set(f, d);
                }
            }),
            (e.setFragmentData = (r) => {
                var { selection: n } = e;
                if (n) {
                    var [a, s] = y.Q6.edges(n),
                        i = y.KE.void(e, { at: a.path }),
                        o = y.KE.void(e, { at: s.path });
                    if (!y.Q6.isCollapsed(n) || i) {
                        var l = te.toDOMRange(e, n),
                            u = l.cloneContents(),
                            c = u.childNodes[0];
                        if (
                            (u.childNodes.forEach((e) => {
                                e.textContent && "" !== e.textContent.trim() && (c = e);
                            }),
                            o)
                        ) {
                            var [d] = o,
                                f = l.cloneRange(),
                                p = te.toDOMNode(e, d);
                            f.setEndAfter(p), (u = f.cloneContents());
                        }
                        if (
                            (i && (c = u.querySelector("[data-slate-spacer]")),
                            Array.from(u.querySelectorAll("[data-slate-zero-width]")).forEach((e) => {
                                var t = "n" === e.getAttribute("data-slate-zero-width");
                                e.textContent = t ? "\n" : "";
                            }),
                            eH(c))
                        ) {
                            var h = c.ownerDocument.createElement("span");
                            (h.style.whiteSpace = "pre"), h.appendChild(c), u.appendChild(h), (c = h);
                        }
                        var m = JSON.stringify(e.getFragment()),
                            _ = window.btoa(encodeURIComponent(m));
                        c.setAttribute("data-slate-fragment", _), r.setData("application/".concat(t), _);
                        var g = u.ownerDocument.createElement("div");
                        return (
                            g.appendChild(u),
                            g.setAttribute("hidden", "true"),
                            u.ownerDocument.body.appendChild(g),
                            r.setData("text/html", g.innerHTML),
                            r.setData("text/plain", eW(g)),
                            u.ownerDocument.body.removeChild(g),
                            r
                        );
                    }
                }
            }),
            (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (r) => {
                var n =
                    r.getData("application/".concat(t)) ||
                    ((e) => {
                        var [, t] = e.getData("text/html").match(eq) || [];
                        return t;
                    })(r);
                if (n) {
                    var a = JSON.parse(decodeURIComponent(window.atob(n)));
                    return e.insertFragment(a), !0;
                }
                return !1;
            }),
            (e.insertTextData = (t) => {
                var r = t.getData("text/plain");
                if (r) {
                    var n = r.split(/\r\n|\r|\n/),
                        a = !1;
                    for (var s of n) a && y.gB.splitNodes(e, { always: !0 }), e.insertText(s), (a = !0);
                    return !0;
                }
                return !1;
            }),
            (e.onChange = (t) => {
                eu.unstable_batchedUpdates(() => {
                    var r = eD.get(e);
                    r && r(), n(t);
                });
            }),
            e
        );
    },
    re = (e, t) => {
        var r = [];
        for (var [n, a] of y.KE.levels(e, { at: t })) {
            var s = te.findKey(e, n);
            r.push([a, s]);
        }
        return r;
    };
