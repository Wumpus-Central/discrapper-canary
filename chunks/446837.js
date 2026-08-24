"use strict";
r.d(t, { t: () => U });
var n,
    i,
    o,
    a = [],
    s = "ResizeObserver loop completed with undelivered notifications.",
    l = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: s }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = s)),
            window.dispatchEvent(e);
    };
((n = i || (i = {})).BORDER_BOX = "border-box"),
    (n.CONTENT_BOX = "content-box"),
    (n.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
var u = (function () {
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
                Object.freeze(this)
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
    c = function (e) {
        return e instanceof SVGElement && "getBBox" in e;
    },
    f = function (e) {
        if (c(e)) {
            var t = e.getBBox(),
                r = t.width,
                n = t.height;
            return !r && !n;
        }
        var i = e.offsetWidth,
            o = e.offsetHeight;
        return !(i || o || e.getClientRects().length);
    },
    d = function (e) {
        var t,
            r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
        return !!(r && e instanceof r.Element);
    },
    p = function (e) {
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
    h = "u" > typeof window ? window : {},
    m = new Map(),
    v = /auto|scroll/,
    y = /^tb|vertical/,
    g = /msie|trident/i.test(h.navigator && h.navigator.userAgent),
    b = function (e) {
        return parseFloat(e || "0");
    },
    w = function (e, t, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            Object.freeze({ inlineSize: (r ? t : e) || 0, blockSize: (r ? e : t) || 0 })
        );
    },
    _ = Object.freeze({
        devicePixelContentBoxSize: w(),
        borderBoxSize: w(),
        contentBoxSize: w(),
        contentRect: new u(0, 0, 0, 0),
    }),
    S = function (e) {
        if (m.has(e)) return m.get(e);
        if (f(e)) return m.set(e, _), _;
        var t = getComputedStyle(e),
            r = c(e) && e.ownerSVGElement && e.getBBox(),
            n = !g && "border-box" === t.boxSizing,
            i = y.test(t.writingMode || ""),
            o = !r && v.test(t.overflowY || ""),
            a = !r && v.test(t.overflowX || ""),
            s = r ? 0 : b(t.paddingTop),
            l = r ? 0 : b(t.paddingRight),
            d = r ? 0 : b(t.paddingBottom),
            p = r ? 0 : b(t.paddingLeft),
            h = r ? 0 : b(t.borderTopWidth),
            S = r ? 0 : b(t.borderRightWidth),
            x = r ? 0 : b(t.borderBottomWidth),
            E = r ? 0 : b(t.borderLeftWidth),
            k = p + l,
            C = s + d,
            T = E + S,
            M = h + x,
            P = a ? e.offsetHeight - M - e.clientHeight : 0,
            A = o ? e.offsetWidth - T - e.clientWidth : 0,
            I = r ? r.width : b(t.width) - (n ? k + T : 0) - A,
            O = r ? r.height : b(t.height) - (n ? C + M : 0) - P,
            D = I + k + A + T,
            R = O + C + P + M,
            L = Object.freeze({
                devicePixelContentBoxSize: w(Math.round(I * devicePixelRatio), Math.round(O * devicePixelRatio), i),
                borderBoxSize: w(D, R, i),
                contentBoxSize: w(I, O, i),
                contentRect: new u(p, s, I, O),
            });
        return m.set(e, L), L;
    },
    x = function (e, t) {
        var r = S(e),
            n = r.borderBoxSize,
            o = r.contentBoxSize,
            a = r.devicePixelContentBoxSize;
        switch (t) {
            case i.DEVICE_PIXEL_CONTENT_BOX:
                return a;
            case i.BORDER_BOX:
                return n;
            default:
                return o;
        }
    },
    E = function (e) {
        var t = S(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = [t.borderBoxSize]),
            (this.contentBoxSize = [t.contentBoxSize]),
            (this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]);
    },
    k = function (e) {
        if (f(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
        return t;
    },
    C = function () {
        var e = 1 / 0,
            t = [];
        a.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var n = [];
                r.activeTargets.forEach(function (t) {
                    var r = new E(t.target),
                        i = k(t.target);
                    n.push(r), (t.lastReportedSize = x(t.target, t.observedBox)), i < e && (e = i);
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
    T = function (e) {
        m.clear(),
            a.forEach(function (t) {
                t.activeTargets.splice(0, t.activeTargets.length),
                    t.skippedTargets.splice(0, t.skippedTargets.length),
                    t.observationTargets.forEach(function (r) {
                        r.isActive() && (k(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
                    });
            });
    },
    M = function () {
        var e = 0;
        for (
            T(0);
            a.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            T((e = C()));
        return (
            a.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && l(),
            e > 0
        );
    },
    P = [],
    A = function (e) {
        if (!o) {
            var t = 0,
                r = document.createTextNode("");
            new MutationObserver(function () {
                return P.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(r, { characterData: !0 }),
                (o = function () {
                    r.textContent = "" + (t ? t-- : t++);
                });
        }
        P.push(e), o();
    },
    I = function (e) {
        A(function () {
            requestAnimationFrame(e);
        });
    },
    O = 0,
    D = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    R = [
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
    L = !1,
    F = new ((function () {
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
                L ||
                    ((L = !0),
                    I(function () {
                        var r = !1;
                        try {
                            r = M();
                        } finally {
                            if (((L = !1), !O)) return;
                            r ? t.run(60) : e ? t.run(e - 1) : t.start();
                        }
                    }));
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run(12);
            }),
            (e.prototype.observe = function () {
                var e = this,
                    t = function () {
                        return e.observer && e.observer.observe(document.body, D);
                    };
                document.body ? t() : h.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    R.forEach(function (t) {
                        return h.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    R.forEach(function (t) {
                        return h.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    N = function (e) {
        !O && e > 0 && F.start(), (O += e) || F.stop();
    },
    j = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || i.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = x(this.target, this.observedBox);
                return (
                    c((e = this.target)) ||
                        p(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    B = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    K = new Map(),
    $ = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
    },
    V = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var r = new B(e, t);
                a.push(r), K.set(e, r);
            }),
            (e.observe = function (e, t, r) {
                if (K.has(e)) {
                    var n = K.get(e);
                    0 > $(n.observationTargets, t) &&
                        (n.observationTargets.push(new j(t, r && r.box)), N(1), F.schedule());
                }
            }),
            (e.unobserve = function (e, t) {
                if (K.has(e)) {
                    var r = K.get(e),
                        n = $(r.observationTargets, t);
                    n >= 0 && (r.observationTargets.splice(n, 1), N(-1));
                }
            }),
            (e.disconnect = function (e) {
                if (K.has(e)) {
                    var t = K.get(e);
                    a.splice(a.indexOf(t), 1), K.delete(e), N(-t.observationTargets.length);
                }
            }),
            e
        );
    })(),
    U = (function () {
        function e(e) {
            if (0 == arguments.length)
                throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
            if ("function" != typeof e)
                throw TypeError(
                    "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
                );
            V.connect(this, e);
        }
        return (
            (e.prototype.observe = function (e, t) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!d(e))
                    throw TypeError(
                        "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                V.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
                if (0 == arguments.length)
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                    );
                if (!d(e))
                    throw TypeError(
                        "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                    );
                V.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
                V.disconnect(this);
            }),
            (e.toString = function () {
                return "function ResizeObserver () { [polyfill code] }";
            }),
            e
        );
    })();
