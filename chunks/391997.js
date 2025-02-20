n.d(t, {
    p: () => p,
    t: () => _
});
var r = n(608748),
    i = n(388388),
    o = n(203731),
    a = 0,
    s = function () {
        return !!a;
    },
    l = 250,
    c = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    },
    u = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'],
    d = function (e) {
        return void 0 === e && (e = 0), Date.now() + e;
    },
    f = !1,
    p = new ((function () {
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
                if ((void 0 === e && (e = l), !f)) {
                    f = !0;
                    var n = d(e);
                    (0, o.p)(function () {
                        var i = !1;
                        try {
                            i = (0, r.N)();
                        } finally {
                            if (((f = !1), (e = n - d()), !s())) return;
                            i ? t.run(1000) : e > 0 ? t.run(e) : t.start();
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
                        return e.observer && e.observer.observe(document.body, c);
                    };
                document.body ? t() : i.C.addEventListener('DOMContentLoaded', t);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    u.forEach(function (t) {
                        return i.C.addEventListener(t, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                this.stopped ||
                    (this.observer && this.observer.disconnect(),
                    u.forEach(function (t) {
                        return i.C.removeEventListener(t, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    _ = function (e) {
        !a && e > 0 && p.start(), (a += e) || p.stop();
    };
