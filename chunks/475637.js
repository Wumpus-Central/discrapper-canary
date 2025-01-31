function i(e) {
    return function (t) {
        var n,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = i.width,
            o = (s && e.matchPatterns[s]) || e.matchPatterns[e.defaultMatchWidth],
            l = t.match(o);
        if (!l) return null;
        var u = l[0],
            c = (s && e.parsePatterns[s]) || e.parsePatterns[e.defaultParseWidth],
            d = Array.isArray(c)
                ? a(c, function (e) {
                      return e.test(u);
                  })
                : r(c, function (e) {
                      return e.test(u);
                  });
        return (
            (n = e.valueCallback ? e.valueCallback(d) : d),
            {
                value: (n = i.valueCallback ? i.valueCallback(n) : n),
                rest: t.slice(u.length)
            }
        );
    };
}
function r(e, t) {
    for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
}
function a(e, t) {
    for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
}
n.d(t, { Z: () => i });
