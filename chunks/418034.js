"use strict";
n.d(t, { Es: () => l, PW: () => o, cZ: () => a, oV: () => s, vq: () => i });
var r = n(64700),
    i = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    s = function (e) {
        if ("function" == typeof e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.apply(void 0, n);
        }
    },
    a = function (e, t) {
        if ("function" == typeof e) return s(e, t);
        null != e && (e.current = t);
    },
    o = function (e) {
        return e.reduce(function (e, t) {
            var n = t[0],
                r = t[1];
            return (e[n] = r), e;
        }, {});
    },
    l = "u" > typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect;
