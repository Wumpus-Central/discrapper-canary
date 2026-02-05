!(function (t) {
    "function" == typeof define && define.amd
        ? define([], t)
        : e.exports
          ? (e.exports = t())
          : (window.idleCallbackShim = t());
})(function () {
    "use strict";
    var e,
        t,
        r,
        i,
        a = "u" > typeof window ? window : (n.g, n.g),
        s = (a.cancelRequestAnimationFrame && a.requestAnimationFrame) || setTimeout,
        o = a.cancelRequestAnimationFrame || clearTimeout,
        l = [],
        u = 0,
        c = !1,
        d = 7,
        _ = 35,
        f = 125,
        p = 0,
        h = 0,
        m = 0,
        g = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = d - (Date.now() - h);
                return e < 0 ? 0 : e;
            },
        },
        E = A(function () {
            (d = 22), (f = 66), (_ = 0);
        });
    function A(e) {
        var t,
            n,
            r = 99,
            i = function () {
                var a = Date.now() - n;
                a < r ? (t = setTimeout(i, r - a)) : ((t = null), e());
            };
        return function () {
            (n = Date.now()), t || (t = setTimeout(i, r));
        };
    }
    function I() {
        c && (i && o(i), r && clearTimeout(r), (c = !1));
    }
    function T() {
        125 != f && ((d = 7), (f = 125), (_ = 35), c && (I(), v())), E();
    }
    function y() {
        (i = null), (r = setTimeout(C, 0));
    }
    function S() {
        (r = null), s(y);
    }
    function v() {
        c ||
            ((t = f - (Date.now() - h)),
            (e = Date.now()),
            (c = !0),
            _ && t < _ && (t = _),
            t > 9 ? (r = setTimeout(S, t)) : ((t = 0), S()));
    }
    function C() {
        var n,
            i,
            a,
            s = d > 9 ? 9 : 1;
        if (((h = Date.now()), (c = !1), (r = null), u > 2 || h - t - 50 < e))
            for (i = 0, a = l.length; i < a && g.timeRemaining() > s; i++) (n = l.shift()), m++, n && n(g);
        l.length ? v() : (u = 0);
    }
    function b(e) {
        return p++, l.push(e), v(), p;
    }
    function N(e) {
        var t = e - 1 - m;
        l[t] && (l[t] = null);
    }
    if (a.requestIdleCallback && a.cancelIdleCallback)
        try {
            a.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var t, n;
                if (
                    ((a.requestIdleCallback = function (t, n) {
                        return n && "number" == typeof n.timeout ? e(t, n.timeout) : e(t);
                    }),
                    a.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
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
            })(a.requestIdleCallback);
        }
    else
        (a.requestIdleCallback = b),
            (a.cancelIdleCallback = N),
            a.document &&
                document.addEventListener &&
                (a.addEventListener("scroll", T, !0),
                a.addEventListener("resize", T),
                document.addEventListener("focus", T, !0),
                document.addEventListener("mouseover", T, !0),
                ["click", "keypress", "touchstart", "mousedown"].forEach(function (e) {
                    document.addEventListener(e, T, { capture: !0, passive: !0 });
                }),
                a.MutationObserver &&
                    new MutationObserver(T).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0,
                    }));
    return { request: b, cancel: N };
});
