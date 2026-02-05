"use strict";
n.d(t, { L: () => p, c: () => f });
var r = n(25611),
    i = n(353563),
    a = n(325691),
    s = 0,
    o = function () {
        return !!s;
    },
    l = 250,
    u = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
    c = [
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
    d = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    _ = !1,
    f = new ((function () {
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
                if ((void 0 === e && (e = l), !_)) {
                    _ = !0;
                    var n = d(e);
                    (0, a.Y)(function () {
                        var i = !1;
                        try {
                            i = (0, r.e)();
                        } finally {
                            if (((_ = !1), (e = n - d()), !o())) return;
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
                        return e.observer && e.observer.observe(document.body, u);
                    };
                document.body ? t() : i.S.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    c.forEach(function (t) {
                        return i.S.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    c.forEach(function (t) {
                        return i.S.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    p = function (e) {
        !s && e > 0 && f.start(), (s += e) || f.stop();
    };
