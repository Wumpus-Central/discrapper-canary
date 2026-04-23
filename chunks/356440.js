t(321073);
var n,
    a,
    o = t(91871),
    l = t.n(o);
String.prototype.normalize;
let i =
        null == String.prototype.normalize
            ? (e) => e
            : function (e) {
                  let r = t(209034),
                      n = "";
                  return (
                      [...e.normalize("NFD")].forEach((e) => {
                          n += r[e] ?? e;
                      }),
                      n.normalize("NFD").toLocaleLowerCase()
                  );
              },
    u = (e, r) => {
        let t = s(e, r);
        if (t > 0) {
            let n = f(e, r),
                a = (t / e.length + t / r.length + (t - n) / t) / 3;
            return a < 0.7 ? a : a + 0.1 * h(e, r) * (1 - a);
        }
        return 0;
    },
    s = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            n = [],
            a = 0;
        for (var o = 0; o < e.length; o++)
            for (var l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !n[l]) {
                    (n[l] = !0), a++;
                    break;
                }
        return a;
    },
    f = (e, r) => {
        let t = Math.floor(Math.max(e.length, r.length) / 2) - 1,
            n = { a: "", b: "" },
            a = [];
        for (let o = 0; o < e.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(r.length, o + t); l++)
                if (e[o] === r[l] && !a[l]) {
                    (n.a += e[o]), (a[l] = !0);
                    break;
                }
        a = [];
        for (let o = 0; o < r.length; o++)
            for (let l = Math.max(0, o - t); l <= Math.min(e.length, o + t); l++)
                if (r[o] === e[l] && !a[l]) {
                    (n.b += r[o]), (a[l] = !0);
                    break;
                }
        let o = 0;
        for (let e = 0; e < n.a.length; e++) n.a[e] !== n.b[e] && o++;
        return Math.floor(o / 2);
    },
    h = (e, r) => {
        let t = 0;
        for (; t < 4; t++) if (e[t] !== r[t]) return t;
        return ++t;
    };
function c(e, r, t) {
    let { caseSensitive: n = !1 } = t ?? {};
    return n ? u(e, r) : u(e.toLowerCase(), r.toLowerCase());
}
var p = (((n = {}).FUZZY = "fuzzy"), (n.EXACT = "exact"), (n.REGEX = "regex"), (n.JARO_WINKLER = "jaro_winkler"), n),
    m = (((a = {}).NONE = "none"), (a.JARO_WINKLER = "jaro_winkler"), a);
function d(e) {
    return e
        .split(",")
        .map((e) => e.trim())
        .filter((e) => "" !== e);
}
function g(e) {
    return "string" == typeof e ? [e.trim()] : e.map((e) => e.trim());
}
self.addEventListener("message", (e) => {
    var r;
    let t,
        {
            data: {
                id: n,
                searchTerm: a,
                searchStrings: o,
                searchType: u,
                sortType: s,
                jaroWinklerSearchThreshold: f,
                maxSearchResults: h,
            },
        } = e,
        b = [];
    for (let e of d(a))
        switch (u) {
            case p.REGEX:
                b.push(
                    ...(function (e, r) {
                        let t = RegExp(e, "i");
                        return r.reduce((e, r, n) => (g(r).some((e) => t.test(e)) ? [...e, n] : e), []);
                    })(e, o),
                );
                break;
            case p.FUZZY:
                b.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, n) =>
                                g(t).some((r) => {
                                    let t, n;
                                    return (t = i(e)), (n = i(r)), l()(e, r) || l()(t, r) || l()(t, n);
                                })
                                    ? [...r, n]
                                    : r,
                            [],
                        );
                    })(e, o),
                );
                break;
            case p.JARO_WINKLER:
                b.push(
                    ...(function (e, r, t) {
                        return r.reduce((r, n, a) => (Math.max(...g(n).map((r) => c(e, r))) >= t ? [...r, a] : r), []);
                    })(e, o, f),
                );
                break;
            case p.EXACT:
                b.push(
                    ...(function (e, r) {
                        return r.reduce(
                            (r, t, n) =>
                                g(t).some((r) => r.toLocaleLowerCase() === e.toLocaleLowerCase()) ? [...r, n] : r,
                            [],
                        );
                    })(e, o),
                );
        }
    let v = [...new Set(b)];
    s === m.JARO_WINKLER &&
        ((r = v),
        (t = d(a)),
        (v = r
            .map((e) => {
                let r = g(o[e]);
                return { index: e, rank: Math.max(...t.flatMap((e) => r.map((r) => c(e, r)))) };
            })
            .sort((e, r) => r.rank - e.rank)
            .map((e) => e.index))),
        h > 0 && (v = v.slice(0, h));
    let x = { id: n, foundItemIndexes: v };
    self.postMessage(x);
});
