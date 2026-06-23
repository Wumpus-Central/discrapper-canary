r(321073);
var n = r(91871),
    a = r.n(n);
r(621466);
String.prototype.normalize;
let o =
    null == String.prototype.normalize
        ? (e) => e
        : function (e) {
              let t = r(209034),
                  n = "";
              return (
                  [...e.normalize("NFD")].forEach((e) => {
                      n += t[e] ?? e;
                  }),
                  n.normalize("NFD").toLocaleLowerCase()
              );
          };
function l(e, t) {
    let r = (function (e, t) {
        let r = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            n = [],
            a = 0;
        for (var o = 0; o < e.length; o++)
            for (var l = Math.max(0, o - r); l <= Math.min(t.length, o + r); l++)
                if (e[o] === t[l] && !n[l]) {
                    (n[l] = !0), a++;
                    break;
                }
        return a;
    })(e, t);
    if (r > 0) {
        let n = (function (e, t) {
                let r = Math.floor(Math.max(e.length, t.length) / 2) - 1,
                    n = { a: "", b: "" },
                    a = [];
                for (let o = 0; o < e.length; o++)
                    for (let l = Math.max(0, o - r); l <= Math.min(t.length, o + r); l++)
                        if (e[o] === t[l] && !a[l]) {
                            (n.a += e[o]), (a[l] = !0);
                            break;
                        }
                a = [];
                for (let o = 0; o < t.length; o++)
                    for (let l = Math.max(0, o - r); l <= Math.min(e.length, o + r); l++)
                        if (t[o] === e[l] && !a[l]) {
                            (n.b += t[o]), (a[l] = !0);
                            break;
                        }
                let o = 0;
                for (let e = 0; e < n.a.length; e++) n.a[e] !== n.b[e] && o++;
                return Math.floor(o / 2);
            })(e, t),
            a = (r / e.length + r / t.length + (r - n) / r) / 3;
        return a < 0.7
            ? a
            : a +
                  0.1 *
                      (function (e, t) {
                          let r = 0;
                          for (; r < 4; r++) if (e[r] !== t[r]) return r;
                          return ++r;
                      })(e, t) *
                      (1 - a);
    }
    return 0;
}
function i(e, t, r) {
    let { caseSensitive: n = !1 } = r ?? {};
    return n ? l(e, t) : l(e.toLowerCase(), t.toLowerCase());
}
var u = r(379078);
function s(e) {
    return e
        .split(",")
        .map((e) => e.trim())
        .filter((e) => "" !== e);
}
function f(e) {
    return "string" == typeof e ? [e.trim()] : e.map((e) => e.trim());
}
self.addEventListener("message", (e) => {
    var t;
    let r,
        {
            data: {
                id: n,
                searchTerm: l,
                searchStrings: c,
                searchType: h,
                sortType: p,
                jaroWinklerSearchThreshold: m,
                maxSearchResults: d,
            },
        } = e,
        b = [];
    for (let e of s(l))
        switch (h) {
            case u.n.REGEX:
                b.push(
                    ...(function (e, t) {
                        let r = RegExp(e, "i");
                        return t.reduce((e, t, n) => (f(t).some((e) => r.test(e)) ? [...e, n] : e), []);
                    })(e, c),
                );
                break;
            case u.n.FUZZY:
                b.push(
                    ...(function (e, t) {
                        return t.reduce(
                            (t, r, n) =>
                                f(r).some((t) => {
                                    let r, n;
                                    return (r = o(e)), (n = o(t)), a()(e, t) || a()(r, t) || a()(r, n);
                                })
                                    ? [...t, n]
                                    : t,
                            [],
                        );
                    })(e, c),
                );
                break;
            case u.n.JARO_WINKLER:
                b.push(
                    ...(function (e, t, r) {
                        return t.reduce((t, n, a) => (Math.max(...f(n).map((t) => i(e, t))) >= r ? [...t, a] : t), []);
                    })(e, c, m),
                );
                break;
            case u.n.EXACT:
                b.push(
                    ...(function (e, t) {
                        return t.reduce(
                            (t, r, n) =>
                                f(r).some((t) => t.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...t, n] : t,
                            [],
                        );
                    })(e, c),
                );
        }
    let g = [...new Set(b)];
    p === u.r.JARO_WINKLER &&
        ((t = g),
        (r = s(l)),
        (g = t
            .map((e) => {
                let t = f(c[e]);
                return { index: e, rank: Math.max(...r.flatMap((e) => t.map((t) => i(e, t)))) };
            })
            .sort((e, t) => t.rank - e.rank)
            .map((e) => e.index))),
        d > 0 && (g = g.slice(0, d));
    let v = { id: n, foundItemIndexes: g };
    self.postMessage(v);
});
