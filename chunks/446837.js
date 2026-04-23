"use strict";
r.d(t, { t: () => H });
var n,
    a,
    s,
    i = [],
    o = "ResizeObserver loop completed with undelivered notifications.",
    l = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: o }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = o)),
            window.dispatchEvent(e);
    };
((n = a || (a = {})).BORDER_BOX = "border-box"),
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
    d = function (e) {
        if (c(e)) {
            var t = e.getBBox(),
                r = t.width,
                n = t.height;
            return !r && !n;
        }
        var a = e.offsetWidth,
            s = e.offsetHeight;
        return !(a || s || e.getClientRects().length);
    },
    f = function (e) {
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
    _ = /auto|scroll/,
    g = /^tb|vertical/,
    v = /msie|trident/i.test(h.navigator && h.navigator.userAgent),
    b = function (e) {
        return parseFloat(e || "0");
    },
    y = function (e, t, r) {
        return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === r && (r = !1),
            Object.freeze({ inlineSize: (r ? t : e) || 0, blockSize: (r ? e : t) || 0 })
        );
    },
    E = Object.freeze({
        devicePixelContentBoxSize: y(),
        borderBoxSize: y(),
        contentBoxSize: y(),
        contentRect: new u(0, 0, 0, 0),
    }),
    S = function (e) {
        if (m.has(e)) return m.get(e);
        if (d(e)) return m.set(e, E), E;
        var t = getComputedStyle(e),
            r = c(e) && e.ownerSVGElement && e.getBBox(),
            n = !v && "border-box" === t.boxSizing,
            a = g.test(t.writingMode || ""),
            s = !r && _.test(t.overflowY || ""),
            i = !r && _.test(t.overflowX || ""),
            o = r ? 0 : b(t.paddingTop),
            l = r ? 0 : b(t.paddingRight),
            f = r ? 0 : b(t.paddingBottom),
            p = r ? 0 : b(t.paddingLeft),
            h = r ? 0 : b(t.borderTopWidth),
            S = r ? 0 : b(t.borderRightWidth),
            T = r ? 0 : b(t.borderBottomWidth),
            x = r ? 0 : b(t.borderLeftWidth),
            w = p + l,
            C = o + f,
            D = x + S,
            O = h + T,
            A = i ? e.offsetHeight - O - e.clientHeight : 0,
            M = s ? e.offsetWidth - D - e.clientWidth : 0,
            R = r ? r.width : b(t.width) - (n ? w + D : 0) - M,
            k = r ? r.height : b(t.height) - (n ? C + O : 0) - A,
            N = R + w + M + D,
            L = k + C + A + O,
            I = Object.freeze({
                devicePixelContentBoxSize: y(Math.round(R * devicePixelRatio), Math.round(k * devicePixelRatio), a),
                borderBoxSize: y(N, L, a),
                contentBoxSize: y(R, k, a),
                contentRect: new u(p, o, R, k),
            });
        return m.set(e, I), I;
    },
    T = function (e, t) {
        var r = S(e),
            n = r.borderBoxSize,
            s = r.contentBoxSize,
            i = r.devicePixelContentBoxSize;
        switch (t) {
            case a.DEVICE_PIXEL_CONTENT_BOX:
                return i;
            case a.BORDER_BOX:
                return n;
            default:
                return s;
        }
    },
    x = function (e) {
        var t = S(e);
        (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = [t.borderBoxSize]),
            (this.contentBoxSize = [t.contentBoxSize]),
            (this.devicePixelContentBoxSize = [t.devicePixelContentBoxSize]);
    },
    w = function (e) {
        if (d(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r; ) (t += 1), (r = r.parentNode);
        return t;
    },
    C = function () {
        var e = 1 / 0,
            t = [];
        i.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var n = [];
                r.activeTargets.forEach(function (t) {
                    var r = new x(t.target),
                        a = w(t.target);
                    n.push(r), (t.lastReportedSize = T(t.target, t.observedBox)), a < e && (e = a);
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
    D = function (e) {
        m.clear(),
            i.forEach(function (t) {
                t.activeTargets.splice(0, t.activeTargets.length),
                    t.skippedTargets.splice(0, t.skippedTargets.length),
                    t.observationTargets.forEach(function (r) {
                        r.isActive() && (w(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
                    });
            });
    },
    O = function () {
        var e = 0;
        for (
            D(0);
            i.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            D((e = C()));
        return (
            i.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && l(),
            e > 0
        );
    },
    A = [],
    M = function (e) {
        if (!s) {
            var t = 0,
                r = document.createTextNode("");
            new MutationObserver(function () {
                return A.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(r, { characterData: !0 }),
                (s = function () {
                    r.textContent = "" + (t ? t-- : t++);
                });
        }
        A.push(e), s();
    },
    R = function (e) {
        M(function () {
            requestAnimationFrame(e);
        });
    },
    k = 0,
    N = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    L = [
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
    I = !1,
    P = new ((function () {
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
                I ||
                    ((I = !0),
                    R(function () {
                        var r = !1;
                        try {
                            r = O();
                        } finally {
                            if (((I = !1), !k)) return;
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
                        return e.observer && e.observer.observe(document.body, N);
                    };
                document.body ? t() : h.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    L.forEach(function (t) {
                        return h.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    L.forEach(function (t) {
                        return h.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    F = function (e) {
        !k && e > 0 && P.start(), (k += e) || P.stop();
    },
    B = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || a.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = T(this.target, this.observedBox);
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
    Y = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    U = new Map(),
    j = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
    },
    V = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var r = new Y(e, t);
                i.push(r), U.set(e, r);
            }),
            (e.observe = function (e, t, r) {
                if (U.has(e)) {
                    var n = U.get(e);
                    0 > j(n.observationTargets, t) &&
                        (n.observationTargets.push(new B(t, r && r.box)), F(1), P.schedule());
                }
            }),
            (e.unobserve = function (e, t) {
                if (U.has(e)) {
                    var r = U.get(e),
                        n = j(r.observationTargets, t);
                    n >= 0 && (r.observationTargets.splice(n, 1), F(-1));
                }
            }),
            (e.disconnect = function (e) {
                if (U.has(e)) {
                    var t = U.get(e);
                    i.splice(i.indexOf(t), 1), U.delete(e), F(-t.observationTargets.length);
                }
            }),
            e
        );
    })(),
    H = (function () {
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
                if (!f(e))
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
                if (!f(e))
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
