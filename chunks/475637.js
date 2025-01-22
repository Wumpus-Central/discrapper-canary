function i(e) {
    return function (n) {
        var r,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = i.width,
            l = (s && e.matchPatterns[s]) || e.matchPatterns[e.defaultMatchWidth],
            u = n.match(l);
        if (!u) return null;
        var c = u[0],
            d = (s && e.parsePatterns[s]) || e.parsePatterns[e.defaultParseWidth],
            f = Array.isArray(d)
                ? o(d, function (e) {
                      return e.test(c);
                  })
                : a(d, function (e) {
                      return e.test(c);
                  });
        return (
            (r = e.valueCallback ? e.valueCallback(f) : f),
            {
                value: (r = i.valueCallback ? i.valueCallback(r) : r),
                rest: n.slice(c.length)
            }
        );
    };
}
function a(e, n) {
    for (var r in e) if (e.hasOwnProperty(r) && n(e[r])) return r;
}
function o(e, n) {
    for (var r = 0; r < e.length; r++) if (n(e[r])) return r;
}
r.d(n, {
    Z: function () {
        return i;
    }
});
