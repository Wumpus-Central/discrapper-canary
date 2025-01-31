n.d(t, {
    $p: () => r,
    DL: () => a,
    LI: () => l,
    k$: () => s,
    sq: () => o
});
var i = n(192379),
    r = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    a = function (e) {
        if ('function' == typeof e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
            return e.apply(void 0, n);
        }
    },
    s = function (e, t) {
        if ('function' == typeof e) return a(e, t);
        null != e && (e.current = t);
    },
    o = function (e) {
        return e.reduce(function (e, t) {
            var n = t[0],
                i = t[1];
            return (e[n] = i), e;
        }, {});
    },
    l = 'undefined' != typeof window && window.document && window.document.createElement ? i.useLayoutEffect : i.useEffect;
