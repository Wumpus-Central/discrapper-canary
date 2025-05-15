function r(e) {
    return function (t) {
        var n,
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            a = r.width,
            s = (a && e.matchPatterns[a]) || e.matchPatterns[e.defaultMatchWidth],
            l = t.match(s);
        if (!l) return null;
        var c = l[0],
            u = (a && e.parsePatterns[a]) || e.parsePatterns[e.defaultParseWidth],
            d = Array.isArray(u)
                ? o(u, function (e) {
                      return e.test(c);
                  })
                : i(u, function (e) {
                      return e.test(c);
                  });
        return (
            (n = e.valueCallback ? e.valueCallback(d) : d),
            {
                value: (n = r.valueCallback ? r.valueCallback(n) : n),
                rest: t.slice(c.length)
            }
        );
    };
}
function i(e, t) {
    for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function o(e, t) {
    for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
n.d(t, { Z: () => r });
