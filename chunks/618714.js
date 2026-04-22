var r;
(r = function () {
    "use strict";
    var e,
        t,
        r,
        i,
        s,
        a,
        o,
        l,
        u = "u" > typeof window ? window : (n.g, n.g),
        d = (u.cancelRequestAnimationFrame && u.requestAnimationFrame) || setTimeout,
        c = u.cancelRequestAnimationFrame || clearTimeout,
        _ = [],
        f = 0,
        E = !1,
        h = 7,
        p = 35,
        m = 125,
        g = 0,
        A = 0,
        I = 0,
        T = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = h - (Date.now() - A);
                return e < 0 ? 0 : e;
            },
        },
        S =
            ((e = function () {
                (h = 22), (m = 66), (p = 0);
            }),
            (i = function () {
                var n = Date.now() - r;
                n < 99 ? (t = setTimeout(i, 99 - n)) : ((t = null), e());
            }),
            function () {
                (r = Date.now()), t || (t = setTimeout(i, 99));
            });
    function y() {
        125 != m && ((h = 7), (m = 125), (p = 35), E && (E && (l && c(l), o && clearTimeout(o), (E = !1)), R())), S();
    }
    function N() {
        (l = null), (o = setTimeout(v, 0));
    }
    function O() {
        (o = null), d(N);
    }
    function R() {
        E ||
            ((a = m - (Date.now() - A)),
            (s = Date.now()),
            (E = !0),
            p && a < p && (a = p),
            a > 9 ? (o = setTimeout(O, a)) : ((a = 0), O()));
    }
    function v() {
        var e,
            t,
            n,
            r = h > 9 ? 9 : 1;
        if (((A = Date.now()), (E = !1), (o = null), f > 2 || A - a - 50 < s))
            for (t = 0, n = _.length; t < n && T.timeRemaining() > r; t++) (e = _.shift()), I++, e && e(T);
        _.length ? R() : (f = 0);
    }
    function C(e) {
        return g++, _.push(e), R(), g;
    }
    function b(e) {
        var t = e - 1 - I;
        _[t] && (_[t] = null);
    }
    if (u.requestIdleCallback && u.cancelIdleCallback)
        try {
            u.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var t, n;
                if (
                    ((u.requestIdleCallback = function (t, n) {
                        return n && "number" == typeof n.timeout ? e(t, n.timeout) : e(t);
                    }),
                    u.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
                ) {
                    if (!(n = Object.getOwnPropertyDescriptor(t, "timeRemaining")) || !n.configurable || !n.get) return;
                    Object.defineProperty(t, "timeRemaining", {
                        value: function () {
                            return n.get.call(this);
                        },
                        enumerable: !0,
                        configurable: !0,
                    });
                }
            })(u.requestIdleCallback);
        }
    else
        (u.requestIdleCallback = C),
            (u.cancelIdleCallback = b),
            u.document &&
                document.addEventListener &&
                (u.addEventListener("scroll", y, !0),
                u.addEventListener("resize", y),
                document.addEventListener("focus", y, !0),
                document.addEventListener("mouseover", y, !0),
                ["click", "keypress", "touchstart", "mousedown"].forEach(function (e) {
                    document.addEventListener(e, y, { capture: !0, passive: !0 });
                }),
                u.MutationObserver &&
                    new MutationObserver(y).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                    }));
    return { request: C, cancel: b };
}),
    "function" == typeof define && define.amd
        ? define([], r)
        : e.exports
          ? (e.exports = r())
          : (window.idleCallbackShim = r());
