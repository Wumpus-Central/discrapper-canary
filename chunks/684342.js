r.d(n, {
    p: function () {
        return p;
    },
    t: function () {
        return h;
    }
});
var i = r(468343),
    a = r(559972),
    o = r(789741),
    s = 0,
    l = function () {
        return !!s;
    },
    u = 12,
    c = {
        attributes: !0,
        characterData: !0,
        childList: !0,
        subtree: !0
    },
    d = ['resize', 'load', 'transitionend', 'animationend', 'animationstart', 'animationiteration', 'keyup', 'keydown', 'mouseup', 'mousedown', 'mouseover', 'mouseout', 'blur', 'focus'],
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
                var n = this;
                if (!f)
                    (f = !0),
                        (0, o.p)(function () {
                            var r = !1;
                            try {
                                r = (0, i.N)();
                            } finally {
                                if (((f = !1), !l())) return;
                                r ? n.run(60) : e ? n.run(e - 1) : n.start();
                            }
                        });
            }),
            (e.prototype.schedule = function () {
                this.stop(), this.run(u);
            }),
            (e.prototype.observe = function () {
                var e = this,
                    n = function () {
                        return e.observer && e.observer.observe(document.body, c);
                    };
                document.body ? n() : a.C.addEventListener('DOMContentLoaded', n);
            }),
            (e.prototype.start = function () {
                var e = this;
                this.stopped &&
                    ((this.stopped = !1),
                    (this.observer = new MutationObserver(this.listener)),
                    this.observe(),
                    d.forEach(function (n) {
                        return a.C.addEventListener(n, e.listener, !0);
                    }));
            }),
            (e.prototype.stop = function () {
                var e = this;
                !this.stopped &&
                    (this.observer && this.observer.disconnect(),
                    d.forEach(function (n) {
                        return a.C.removeEventListener(n, e.listener, !0);
                    }),
                    (this.stopped = !0));
            }),
            e
        );
    })())(),
    h = function (e) {
        !s && e > 0 && p.start(), (s += e) || p.stop();
    };
