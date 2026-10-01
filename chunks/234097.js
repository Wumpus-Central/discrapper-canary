r.d(t, { J: () => P });
var u,
    n = [],
    a = "ResizeObserver loop completed with undelivered notifications.",
    o = function () {
        var e;
        ("function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: a }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1), (e.message = a)),
            window.dispatchEvent(e));
    },
    i = r(522816),
    s = r(916784),
    l = function (e) {
        if ((0, s.dK)(e)) return 1 / 0;
        for (var t = 0, r = e.parentNode; r;) ((t += 1), (r = r.parentNode));
        return t;
    },
    c = r(623577),
    f = function () {
        var e = 1 / 0,
            t = [];
        n.forEach(function (r) {
            if (0 !== r.activeTargets.length) {
                var u = [];
                (r.activeTargets.forEach(function (t) {
                    var r = new i.Z(t.target),
                        n = l(t.target);
                    (u.push(r), (t.lastReportedSize = (0, c.P)(t.target, t.observedBox)), n < e && (e = n));
                }),
                    t.push(function () {
                        r.callback.call(r.observer, u, r.observer);
                    }),
                    r.activeTargets.splice(0, r.activeTargets.length));
            }
        });
        for (var r = 0; r < t.length; r++) (0, t[r])();
        return e;
    },
    d = function (e) {
        n.forEach(function (t) {
            (t.activeTargets.splice(0, t.activeTargets.length),
                t.skippedTargets.splice(0, t.skippedTargets.length),
                t.observationTargets.forEach(function (r) {
                    r.isActive() && (l(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r));
                }));
        });
    },
    D = function () {
        var e = 0;
        for (
            d(0);
            n.some(function (e) {
                return e.activeTargets.length > 0;
            });
        )
            d((e = f()));
        return (
            n.some(function (e) {
                return e.skippedTargets.length > 0;
            }) && o(),
            e > 0
        );
    },
    h = r(717205),
    C = [],
    v = function (e) {
        if (!u) {
            var t = 0,
                r = document.createTextNode("");
            (new MutationObserver(function () {
                return C.splice(0).forEach(function (e) {
                    return e();
                });
            }).observe(r, { characterData: !0 }),
                (u = function () {
                    r.textContent = "".concat(t ? t-- : t++);
                }));
        }
        (C.push(e), u());
    },
    p = function (e) {
        v(function () {
            requestAnimationFrame(e);
        });
    },
    g = 0,
    B = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    E = [
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
    A = function (e) {
        return (void 0 === e && (e = 0), Date.now() + e);
    },
    F = !1,
    m = new ((function () {
        function e() {
            var e = this;
            ((this.stopped = !0),
                (this.listener = function () {
                    return e.schedule();
                }));
        }
        return (
            (e.prototype.run = function (e) {
                var t = this;
                if ((void 0 === e && (e = 250), !F)) {
                    F = !0;
                    var r = A(e);
                    p(function () {
                        var u = !1;
                        try {
                            u = D();
                        } finally {
                            if (((F = !1), (e = r - A()), !g)) return;
                            u ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                        }
                    });
                }
            }),
            (e.prototype.schedule = function () {
                (this.stop(), this.run());
            }),
            (e.prototype.observe = function () {
                var e = this,
                    t = function () {
                        return e.observer && e.observer.observe(document.body, B);
                    };
                document.body ? t() : h.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    E.forEach(function (t) {
                        return h.S.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    E.forEach(function (t) {
                        return h.S.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    b = function (e) {
        (!g && e > 0 && m.start(), (g += e) || m.stop());
    },
    w = r(838259),
    y = (function () {
        function e(e, t) {
            ((this.target = e),
                (this.observedBox = t || w.U.CONTENT_BOX),
                (this.lastReportedSize = { inlineSize: 0, blockSize: 0 }));
        }
        return (
            (e.prototype.isActive = function () {
                var e,
                    t = (0, c.P)(this.target, this.observedBox, !0);
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
    x = function (e, t) {
        ((this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t));
    },
    O = new WeakMap(),
    k = function (e, t) {
        for (var r = 0; r < e.length; r += 1) if (e[r].target === t) return r;
        return -1;
    },
    P = (function () {
        function e() {}
        return (
            (e.connect = function (e, t) {
                var r = new x(e, t);
                O.set(e, r);
            }),
            (e.observe = function (e, t, r) {
                var u = O.get(e),
                    a = 0 === u.observationTargets.length;
                0 > k(u.observationTargets, t) &&
                    (a && n.push(u), u.observationTargets.push(new y(t, r && r.box)), b(1), m.schedule());
            }),
            (e.unobserve = function (e, t) {
                var r = O.get(e),
                    u = k(r.observationTargets, t),
                    a = 1 === r.observationTargets.length;
                u >= 0 && (a && n.splice(n.indexOf(r), 1), r.observationTargets.splice(u, 1), b(-1));
            }),
            (e.disconnect = function (e) {
                var t = this,
                    r = O.get(e);
                (r.observationTargets.slice().forEach(function (r) {
                    return t.unobserve(e, r.target);
                }),
                    r.activeTargets.splice(0, r.activeTargets.length));
            }),
            e
        );
    })();
