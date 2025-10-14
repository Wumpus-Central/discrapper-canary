n.d(t, {
    Q: () => f,
    r: () => O,
}),
    n(35282),
    n(388685);
var r = n(392711),
    i = n(212819),
    a = n(590921),
    o = n(375954),
    s = n(483360),
    l = n(657871),
    c = n(389458);
let u = {
        startIndex: 0,
        query: "",
        prefix: "",
        suffix: "",
    },
    d = {
        results: {
            suggestions: [],
            queryInfo: u,
        },
    },
    f = 3,
    _ = 5,
    p = 100,
    h = /\w/,
    m = /[^\w\s]/;
function g(e, t) {
    if (t < 0 || t > e.length) return u;
    let n = t;
    for (; n > 0 && m.test(e[n - 1]); ) n--;
    let r = n;
    for (; n > 0 && h.test(e[n - 1]); ) n--;
    for (; r < e.length && h.test(e[r]); ) r++;
    let i = e.substring(n, r),
        a = e.substring(0, n);
    return {
        startIndex: n,
        query: i,
        prefix: a,
        suffix: e.substring(r, e.length),
    };
}
function E(e, t, n, r) {
    let { isIdle: u, currentAutocompleteType: h } = r;
    if (0 === t.length) return d;
    let { onlyExactMatch: m, eagerRecentSenders: E } = (0, l.kB)("getMentionSuggestions", { autoTrackExposure: !1 }),
        b = g(t, n),
        { query: y } = b;
    if (y.length < f || c.Z.getMaxWordCount() < p || c.Z.isFrequentlyUsedWord(y)) return d;
    let O = (0, s.Cq)(i.h8.USER),
        v = o.Z.getMessages(e.id).toArray(),
        I = new Set();
    for (let e = 0; e < v.length; e++) {
        var T;
        let t = v[e];
        (O[t.author.id] = (null != (T = O[t.author.id]) ? T : 1) + (v.length - e) / v.length), I.add(t.author.id);
    }
    let S = s.ZP.queryMentionSuggestionResults({
        query: y,
        channel: e,
        boosters: O,
        onlyExactMatch: m && !E,
    });
    return (E && (S = S.filter((e) => "exact" === e.matchType || I.has(e.user.id))),
    u ||
        h === a.eq.MENTION_SUGGESTIONS ||
        !(y.length < _) ||
        S.some((e) => "exact" === e.matchType || (E && I.has(e.user.id))))
        ? {
              results: {
                  suggestions: S,
                  queryInfo: b,
              },
          }
        : d;
}
let b = (0, r.memoize)(E, (e, t, n, r) =>
        "".concat(e.id, "-").concat(r.isIdle, "-").concat(r.currentAutocompleteType, "-").concat(t, "-").concat(n),
    ),
    y = null;
function O(e, t, n, r) {
    return (
        null == y &&
            (y = setTimeout(() => {
                var e, t;
                null == (e = (t = b.cache).clear) || e.call(t), (y = null);
            }, 0)),
        b(e, t, n, r)
    );
}
