t(321073);
var a = t(91871),
    n = t.n(a);
t(621466);
String.prototype.normalize;
let o =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let r = t(209034),
                      a = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          a += r[e] ?? e;
                      }),
                      a.normalize("NFD").toLocaleLowerCase()
                  );
              },
    l = (e, r) => {
        let t = i(e, r);
        if (t > 0) {
            let a = s(e, r),
                n = (t / e.length + t / r.length + (t - a) / t) / 3;
            return n < 0.7 ? n : n + 0.1 * u(e, r) * (1 - n);
        }
        return 0;
    },
    i = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            a = [],
            n = 0;
        for (var o = 0; o < e.length; o++)
            for (var l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !a[l]) {
                    (a[l] = !0), n++;
                    break;
                }
        return n;
    },
    s = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            a = { a: "", b: "" },
            n = [];
        for (let o = 0; o < e.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !n[l]) {
                    (a.a += e[o]), (n[l] = !0);
                    break;
                }
        n = [];
        for (let o = 0; o < r.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(e.length, o + t); l++)
                if (r[o] === e[l] && !n[l]) {
                    (a.b += r[o]), (n[l] = !0);
                    break;
                }
        let o = 0;
        for (let e = 0; e < a.a.length; e++) a.a[e] !== a.b[e] && o++;
        return Math.floor(o / 2);
    },
    u = (e, r) => {
        let t = 0;
        for (; t < 4; t++) if (e[t] !== r[t]) return t;
        return ++t;
    };
function f(e, r, t) {
    let { caseSensitive: a = !1 } = t ?? {};
    return a ? l(e, r) : l(e.toLowerCase(), r.toLowerCase());
}
var h = t(379078);
function c(e) {
    return e
        .split(",")
        .map((e) => e.trim())
        .filter((e) => "" !== e);
}
function p(e) {
    return "string" == typeof e ? [e.trim()] : e.map((e) => e.trim());
}
self.addEventListener("message", (e) => {
    var r;
    let t,
        {
            data: {
                id: a,
                searchTerm: l,
                searchStrings: i,
                searchType: s,
                sortType: u,
                jaroWinklerSearchThreshold: m,
                maxSearchResults: d,
            },
        } = e,
        b = [];
    for (let e of c(l))
        switch (s) {
            case h.n.REGEX:
                b.push(
                    ...(function (e, r) {
                        let t = RegExp(e, "i");
                        return r.reduce((e, r, a) => (p(r).some((e) => t.test(e)) ? [...e, a] : e), []);
                    })(e, i),
                );
                break;
            case h.n.FUZZY:
                b.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, a) =>
                                p(t).some((r) => {
                                    let t, a;
                                    return (t = o(e)), (a = o(r)), n()(e, r) || n()(t, r) || n()(t, a);
                                })
                                    ? [...r, a]
                                    : r,
                            [],
                        );
                    })(e, i),
                );
                break;
            case h.n.JARO_WINKLER:
                b.push(
                    ...(function (e, r, t) {
                        return r.reduce((r, a, n) => (Math.max(...p(a).map((r) => f(e, r))) >= t ? [...r, n] : r), []);
                    })(e, i, m),
                );
                break;
            case h.n.EXACT:
                b.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, a) =>
                                p(t).some((r) => r.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...r, a] : r,
                            [],
                        );
                    })(e, i),
                );
        }
    let g = [...new Set(b)];
    u === h.r.JARO_WINKLER &&
        ((r = g),
        (t = c(l)),
        (g = r
            .map((e) => {
                let r = p(i[e]);
                return { index: e, rank: Math.max(...t.flatMap((e) => r.map((r) => f(e, r)))) };
            })
            .sort((e, r) => r.rank - e.rank)
            .map((e) => e.index))),
        d > 0 && (g = g.slice(0, d));
    let v = { id: a, foundItemIndexes: g };
    self.postMessage(v);
});
