var i;
(i = function () {
    "use strict";
    var e,
        t,
        i,
        r,
        s,
        a,
        o,
        l,
        u = "u" > typeof window ? window : (n.g, n.g),
        c = (u.cancelRequestAnimationFrame && u.requestAnimationFrame) || setTimeout,
        d = u.cancelRequestAnimationFrame || clearTimeout,
        _ = [],
        h = 0,
        f = !1,
        p = 7,
        E = 35,
        m = 125,
        g = 0,
        A = 0,
        I = 0,
        T = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = p - (Date.now() - A);
                return e < 0 ? 0 : e;
            },
        },
        S =
            ((e = function () {
                (p = 22), (m = 66), (E = 0);
            }),
            (r = function () {
                var n = Date.now() - i;
                n < 99 ? (t = setTimeout(r, 99 - n)) : ((t = null), e());
            }),
            function () {
                (i = Date.now()), t || (t = setTimeout(r, 99));
            });
    function y() {
        125 != m && ((p = 7), (m = 125), (E = 35), f && (f && (l && d(l), o && clearTimeout(o), (f = !1)), v())), S();
    }
    function C() {
        (l = null), (o = setTimeout(R, 0));
    }
    function N() {
        (o = null), c(C);
    }
    function v() {
        f ||
            ((a = m - (Date.now() - A)),
            (s = Date.now()),
            (f = !0),
            E && a < E && (a = E),
            a > 9 ? (o = setTimeout(N, a)) : ((a = 0), N()));
    }
    function R() {
        var e,
            t,
            n,
            i = p > 9 ? 9 : 1;
        if (((A = Date.now()), (f = !1), (o = null), h > 2 || A - a - 50 < s))
            for (t = 0, n = _.length; t < n && T.timeRemaining() > i; t++) (e = _.shift()), I++, e && e(T);
        _.length ? v() : (h = 0);
    }
    function O(e) {
        return g++, _.push(e), v(), g;
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
        (u.requestIdleCallback = O),
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
    return { request: O, cancel: b };
}),
    "function" == typeof define && define.amd
        ? define([], i)
        : e.exports
          ? (e.exports = i())
          : (window.idleCallbackShim = i());
