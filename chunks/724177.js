n.d(t, {
    Q: () => p,
    r: () => S,
}),
    n(35282),
    n(388685);
var r = n(392711),
    i = n(212819),
    a = n(590921),
    o = n(650774),
    s = n(375954),
    l = n(483360),
    c = n(657871),
    u = n(389458);
let d = {
        startIndex: 0,
        query: "",
        prefix: "",
        suffix: "",
    },
    f = {
        results: {
            suggestions: [],
            queryInfo: d,
        },
    },
    p = 3,
    _ = 5,
    m = 100,
    h = 200,
    g = /\w/,
    E = /[^\w\s]/;
function b(e, t) {
    if (t < 0 || t > e.length) return d;
    let n = t;
    for (; n > 0 && E.test(e[n - 1]); ) n--;
    let r = n;
    for (; n > 0 && g.test(e[n - 1]); ) n--;
    for (; r < e.length && g.test(e[r]); ) r++;
    let i = e.substring(n, r),
        a = e.substring(0, n);
    return {
        startIndex: n,
        query: i,
        prefix: a,
        suffix: e.substring(r, e.length),
    };
}
function y(e, t, n, r) {
    var d, g;
    let { isIdle: E, currentAutocompleteType: y } = r;
    if (0 === t.length) return f;
    let {
            onlyExactMatch: O,
            eagerRecentSenders: v,
            largeGuildExactMatchRecentSenders: S,
        } = (0, c.kB)("getMentionSuggestions", { autoTrackExposure: !1 }),
        I = b(t, n),
        { query: T } = I;
    if (T.length < p || u.Z.getMaxWordCount() < m || u.Z.isFrequentlyUsedWord(T)) return f;
    let A = (0, l.Cq)(i.h8.USER),
        C = s.Z.getMessages(e.id).toArray(),
        N = new Set();
    for (let e = 0; e < C.length; e++) {
        let t = C[e];
        (A[t.author.id] = (null != (d = A[t.author.id]) ? d : 1) + (C.length - e) / C.length), N.add(t.author.id);
    }
    let P = !1;
    S && (P = null != e.guild_id && (null != (g = o.Z.getMemberCount(e.guild_id)) ? g : 0) > h);
    let R = l.ZP.queryMentionSuggestionResults({
        query: T,
        channel: e,
        boosters: A,
        onlyExactMatch: O && (!v || P),
    });
    return (P
        ? (R = R.filter((e) => N.has(e.user.id)))
        : v && (R = R.filter((e) => "exact" === e.matchType || N.has(e.user.id))),
    E ||
        y === a.eq.MENTION_SUGGESTIONS ||
        !(T.length < _) ||
        R.some((e) => "exact" === e.matchType || (v && N.has(e.user.id))))
        ? {
              results: {
                  suggestions: R,
                  queryInfo: I,
              },
          }
        : f;
}
let O = (0, r.memoize)(y, (e, t, n, r) =>
        "".concat(e.id, "-").concat(r.isIdle, "-").concat(r.currentAutocompleteType, "-").concat(t, "-").concat(n),
    ),
    v = null;
function S(e, t, n, r) {
    return (
        null == v &&
            (v = setTimeout(() => {
                var e, t;
                null == (e = (t = O.cache).clear) || e.call(t), (v = null);
            }, 0)),
        O(e, t, n, r)
    );
}
