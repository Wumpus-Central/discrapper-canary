"use strict";
n.d(t, { J: () => M });
var r,
    i = [],
    a = "ResizeObserver loop completed with undelivered notifications.",
    o = function () {
        var e;
        "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: a }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = a)),
            window.dispatchEvent(e);
    },
    s = n(522816),
    l = n(916784),
    u = function (e) {
        if ((0, l.dK)(e)) return 1 / 0;
        for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
        return t;
    },
    c = n(623577),
    d = function () {
        var e = 1 / 0,
            t = [];
        i.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new s.Z(t.target),
                        i = u(t.target);
                    r.push(n), (t.lastReportedSize = (0, c.P)(t.target, t.observedBox)), i < e && (e = i);
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
    f = function (e) {
        i.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (n) {
                    n.isActive() && (u(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                });
        });
    },
    p = function () {
        var e = 0;
        for (
            f(0);
            i.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            f((e = d()));
        return (
            i.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && o(),
            e > 0
        );
    },
    h = n(717205),
    m = [],
    g = function (e) {
        if (!r) {
            var t = 0,
                n = document.createTextNode("");
            new MutationObserver(function () {
                return m.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(n, { characterData: !0 }),
                (r = function () {
                    n.textContent = "".concat(t ? t-- : t++);
                });
        }
        m.push(e), r();
    },
    v = function (e) {
        g(function () {
            requestAnimationFrame(e);
        });
    },
    y = 0,
    b = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    _ = [
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
    w = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    x = !1,
    E = new ((function () {
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
                if ((void 0 === e && (e = 250), !x)) {
                    x = !0;
                    var n = w(e);
                    v(function () {
                        var r = !1;
                        try {
                            r = p();
                        } finally {
                            if (((x = !1), (e = n - w()), !y)) return;
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
                        return e.observer && e.observer.observe(document.body, b);
                    };
                document.body ? t() : h.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    _.forEach(function (t) {
                        return h.S.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    _.forEach(function (t) {
                        return h.S.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    S = function (e) {
        !y && e > 0 && E.start(), (y += e) || E.stop();
    },
    k = n(838259),
    T = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || k.U.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = (0, c.P)(this.target, this.observedBox, !0);
                return (
                    (e = this.target),
                    (0, l.XJ)(e) ||
                        (0, l.td)(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    C = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    P = new WeakMap(),
    A = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    M = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new C(e, t);
                P.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var r = P.get(e),
                    a = 0 === r.observationTargets.length;
                0 > A(r.observationTargets, t) &&
                    (a && i.push(r), r.observationTargets.push(new T(t, n && n.box)), S(1), E.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = P.get(e),
                    r = A(n.observationTargets, t),
                    a = 1 === n.observationTargets.length;
                r >= 0 && (a && i.splice(i.indexOf(n), 1), n.observationTargets.splice(r, 1), S(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = P.get(e);
                n.observationTargets.slice().forEach(function (n) {
                    return t.unobserve(e, n.target);
                }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
        );
    })();
