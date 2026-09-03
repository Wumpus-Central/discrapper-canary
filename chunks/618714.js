var n;
(n = function () {
    var e,
        t,
        n,
        i,
        o,
        a,
        s,
        l,
        u = "u" > typeof window ? window : (r.g, r.g),
        c = (u.cancelRequestAnimationFrame && u.requestAnimationFrame) || setTimeout,
        f = u.cancelRequestAnimationFrame || clearTimeout,
        d = [],
        p = 0,
        h = !1,
        m = 7,
        v = 35,
        y = 125,
        g = 0,
        b = 0,
        w = 0,
        _ = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = m - (Date.now() - b);
                return e < 0 ? 0 : e;
            },
        },
        S =
            ((e = function () {
                (m = 22), (y = 66), (v = 0);
            }),
            (i = function () {
                var r = Date.now() - n;
                r < 99 ? (t = setTimeout(i, 99 - r)) : ((t = null), e());
            }),
            function () {
                (n = Date.now()), t || (t = setTimeout(i, 99));
            });
    function x() {
        125 != y && ((m = 7), (y = 125), (v = 35), h && (h && (l && f(l), s && clearTimeout(s), (h = !1)), C())), S();
    }
    function E() {
        (l = null), (s = setTimeout(T, 0));
    }
    function k() {
        (s = null), c(E);
    }
    function C() {
        h ||
            ((a = y - (Date.now() - b)),
            (o = Date.now()),
            (h = !0),
            v && a < v && (a = v),
            a > 9 ? (s = setTimeout(k, a)) : ((a = 0), k()));
    }
    function T() {
        var e,
            t,
            r,
            n = m > 9 ? 9 : 1;
        if (((b = Date.now()), (h = !1), (s = null), p > 2 || b - a - 50 < o))
            for (t = 0, r = d.length; t < r && _.timeRemaining() > n; t++) (e = d.shift()), w++, e && e(_);
        d.length ? C() : (p = 0);
    }
    function M(e) {
        return g++, d.push(e), C(), g;
    }
    function P(e) {
        var t = e - 1 - w;
        d[t] && (d[t] = null);
    }
    if (u.requestIdleCallback && u.cancelIdleCallback)
        try {
            u.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var t, r;
                if (
                    ((u.requestIdleCallback = function (t, r) {
                        return r && "number" == typeof r.timeout ? e(t, r.timeout) : e(t);
                    }),
                    u.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
                ) {
                    if (!(r = Object.getOwnPropertyDescriptor(t, "timeRemaining")) || !r.configurable || !r.get) return;
                    Object.defineProperty(t, "timeRemaining", {
                        value: function () {
                            return r.get.call(this);
                        },
                        enumerable: !0,
                        configurable: !0,
                    });
                }
            })(u.requestIdleCallback);
        }
    else
        (u.requestIdleCallback = M),
            (u.cancelIdleCallback = P),
            u.document &&
                document.addEventListener &&
                (u.addEventListener("scroll", x, !0),
                u.addEventListener("resize", x),
                document.addEventListener("focus", x, !0),
                document.addEventListener("mouseover", x, !0),
                ["click", "keypress", "touchstart", "mousedown"].forEach(function (e) {
                    document.addEventListener(e, x, { capture: !0, passive: !0 });
                }),
                u.MutationObserver &&
                    new MutationObserver(x).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                    }));
    return { request: M, cancel: P };
}),
    "function" == typeof define && define.amd
        ? define([], n)
        : e.exports
          ? (e.exports = n())
          : (window.idleCallbackShim = n());
