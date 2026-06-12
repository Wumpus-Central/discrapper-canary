"use strict";
function i(e) {
    return function (t) {
        var n,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = i.width,
            s = (r && e.matchPatterns[r]) || e.matchPatterns[e.defaultMatchWidth],
            a = t.match(s);
        if (!a) return null;
        var o = a[0],
            l = (r && e.parsePatterns[r]) || e.parsePatterns[e.defaultParseWidth],
            u = Array.isArray(l)
                ? (function (e, t) {
                      for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
                  })(l, function (e) {
                      return e.test(o);
                  })
                : (function (e, t) {
                      for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
                  })(l, function (e) {
                      return e.test(o);
                  });
        return (
            (n = e.valueCallback ? e.valueCallback(u) : u),
            { value: (n = i.valueCallback ? i.valueCallback(n) : n), rest: t.slice(o.length) }
        );
    };
}
n.d(t, { A: () => i });
