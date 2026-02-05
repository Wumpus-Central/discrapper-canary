"use strict";
n.d(t, { L: () => f, c: () => _ });
var r = n(947399),
    i = n(687567),
    a = n(756055),
    s = 0,
    o = function () {
        return !!s;
    },
    l = 12,
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
    d = !1,
    _ = new ((function () {
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
                d ||
                    ((d = !0),
                    (0, a.Y)(function () {
                        var n = !1;
                        try {
                            n = (0, r.e)();
                        } finally {
                            if (((d = !1), !o())) return;
                            n ? t.run(60) : e ? t.run(e - 1) : t.start();
                        }
                    }));
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run(l);
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
    f = function (e) {
        !s && e > 0 && _.start(), (s += e) || _.stop();
    };
