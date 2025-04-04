n.d(t, {
    p: () => f,
    t: () => _
});
var r = n(468343),
    i = n(559972),
    o = n(789741),
    a = 0,
    s = function () {
        return !!a;
    },
    l = 12,
    c = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    },
    u = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'],
    d = !1,
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
                d ||
                    ((d = !0),
                    (0, o.p)(function () {
                        var n = !1;
                        try {
                            n = (0, r.N)();
                        } finally {
                            if (((d = !1), !s())) return;
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
        !a && e > 0 && f.start(), (a += e) || f.stop();
    };
