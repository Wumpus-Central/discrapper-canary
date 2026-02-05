"use strict";
n.d(t, { $: () => f, W: () => S });
var r = n(735438),
    i = n(629357),
    a = n(374803),
    s = n(498642),
    o = n(320501),
    l = n(248465),
    u = n(968011),
    c = n(236899);
let d = { startIndex: 0, query: "", prefix: "", suffix: "" },
    _ = { results: { suggestions: [], queryInfo: d } },
    f = 3,
    p = 5,
    h = 100,
    m = 200,
    g = /\w/,
    E = /[^\w\s]/;
function A(e, t) {
    if (t < 0 || t > e.length) return d;
    let n = t;
    for (; n > 0 && E.test(e[n - 1]); ) n--;
    let r = n;
    for (; n > 0 && g.test(e[n - 1]); ) n--;
    for (; r < e.length && g.test(e[r]); ) r++;
    let i = e.substring(n, r),
        a = e.substring(0, n);
    return { startIndex: n, query: i, prefix: a, suffix: e.substring(r, e.length) };
}
function I(e, t, n, r) {
    let { isIdle: d, currentAutocompleteType: g } = r;
    if (0 === t.length) return _;
    let {
            onlyExactMatch: E,
            eagerRecentSenders: I,
            largeGuildExactMatchRecentSenders: T,
        } = (0, u.sA)("getMentionSuggestions", { autoTrackExposure: !1 }),
        y = A(t, n),
        { query: S } = y;
    if (S.length < f || c.A.getMaxWordCount() < h || c.A.isFrequentlyUsedWord(S)) return _;
    let v = (0, l.X3)(i.rD.USER),
        C = o.A.getMessages(e.id).toArray(),
        b = new Set();
    for (let e = 0; e < C.length; e++) {
        let t = C[e];
        (v[t.author.id] = (v[t.author.id] ?? 1) + (C.length - e) / C.length), b.add(t.author.id);
    }
    let N = !1;
    T && (N = null != e.guild_id && (s.A.getMemberCount(e.guild_id) ?? 0) > m);
    let R = l.Ay.queryMentionSuggestionResults({ query: S, channel: e, boosters: v, onlyExactMatch: E && (!I || N) });
    return (N
        ? (R = R.filter((e) => b.has(e.user.id)))
        : I && (R = R.filter((e) => "exact" === e.matchType || b.has(e.user.id))),
    d ||
        g === a.DB.MENTION_SUGGESTIONS ||
        !(S.length < p) ||
        R.some((e) => "exact" === e.matchType || (I && b.has(e.user.id))))
        ? { results: { suggestions: R, queryInfo: y } }
        : _;
}
let T = (0, r.memoize)(I, (e, t, n, r) => `${e.id}-${r.isIdle}-${r.currentAutocompleteType}-${t}-${n}`),
    y = null;
function S(e, t, n, r) {
    return (
        null == y &&
            (y = setTimeout(() => {
                T.cache.clear?.(), (y = null);
            }, 0)),
        T(e, t, n, r)
    );
}
