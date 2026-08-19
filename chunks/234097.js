"use strict";
n.d(t, { J: () => V });
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
    u = n(522816),
    s = n(916784),
    l = function (e) {
        if ((0, s.dK)(e)) return 1 / 0;
        for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
        return t;
    },
    d = n(623577),
    c = function () {
        var e = 1 / 0,
            t = [];
        i.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
                var r = [];
                n.activeTargets.forEach(function (t) {
                    var n = new u.Z(t.target),
                        i = l(t.target);
                    r.push(n), (t.lastReportedSize = (0, d.P)(t.target, t.observedBox)), i < e && (e = i);
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
                    n.isActive() && (l(n.target) > e ? t.activeTargets.push(n) : t.skippedTargets.push(n));
                });
        });
    },
    h = function () {
        var e = 0;
        for (
            f(0);
            i.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            f((e = c()));
        return (
            i.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && o(),
            e > 0
        );
    },
    p = n(717205),
    m = [],
    v = function (e) {
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
    _ = function (e) {
        v(function () {
            requestAnimationFrame(e);
        });
    },
    g = 0,
    y = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    b = [
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
    D = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    w = !1,
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
                if ((void 0 === e && (e = 250), !w)) {
                    w = !0;
                    var n = D(e);
                    _(function () {
                        var r = !1;
                        try {
                            r = h();
                        } finally {
                            if (((w = !1), (e = n - D()), !g)) return;
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
                        return e.observer && e.observer.observe(document.body, y);
                    };
                document.body ? t() : p.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    b.forEach(function (t) {
                        return p.S.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    b.forEach(function (t) {
                        return p.S.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    C = function (e) {
        !g && e > 0 && E.start(), (g += e) || E.stop();
    },
    A = n(838259),
    B = (function () {
        function e(e, t) {
            (this.target = e),
                (this.observedBox = t || A.U.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = (0, d.P)(this.target, this.observedBox, !0);
                return (
                    (e = this.target),
                    (0, s.XJ)(e) ||
                        (0, s.td)(e) ||
                        "inline" !== getComputedStyle(e).display ||
                        (this.lastReportedSize = t),
                    this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
                );
            }),
            e
        );
    })(),
    k = function (e, t) {
        (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
    },
    F = new WeakMap(),
    T = function (e, t) {
        for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
        return -1;
    },
    V = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var n = new k(e, t);
                F.set(e, n);
            }),
            (e.observe = function (e, t, n) {
                var r = F.get(e),
                    a = 0 === r.observationTargets.length;
                0 > T(r.observationTargets, t) &&
                    (a && i.push(r), r.observationTargets.push(new B(t, n && n.box)), C(1), E.schedule());
            }),
            (e.unobserve = function (e, t) {
                var n = F.get(e),
                    r = T(n.observationTargets, t),
                    a = 1 === n.observationTargets.length;
                r >= 0 && (a && i.splice(i.indexOf(n), 1), n.observationTargets.splice(r, 1), C(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    n = F.get(e);
                n.observationTargets.slice().forEach(function (n) {
                    return t.unobserve(e, n.target);
                }),
                    n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
        );
    })();
