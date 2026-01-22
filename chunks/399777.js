n.d(t, {
    $: () => p,
    W: () => v,
}),
    n(747238),
    n(896048);
var r = n(735438),
    i = n(629357),
    a = n(374803),
    s = n(498642),
    o = n(320501),
    l = n(248465),
    c = n(968011),
    u = n(236899);
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
    h = 100,
    m = 200,
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
            eagerRecentSenders: A,
            largeGuildExactMatchRecentSenders: v,
        } = (0, c.sA)("getMentionSuggestions", {
            autoTrackExposure: !1,
        }),
        S = b(t, n),
        { query: I } = S;
    if (I.length < p || u.A.getMaxWordCount() < h || u.A.isFrequentlyUsedWord(I)) return f;
    let T = (0, l.X3)(i.rD.USER),
        C = o.A.getMessages(e.id).toArray(),
        N = new Set();
    for (let e = 0; e < C.length; e++) {
        let t = C[e];
        (T[t.author.id] = (null != (d = T[t.author.id]) ? d : 1) + (C.length - e) / C.length), N.add(t.author.id);
    }
    let R = !1;
    v && (R = null != e.guild_id && (null != (g = s.A.getMemberCount(e.guild_id)) ? g : 0) > m);
    let w = l.Ay.queryMentionSuggestionResults({
        query: I,
        channel: e,
        boosters: T,
        onlyExactMatch: O && (!A || R),
    });
    return (R
        ? (w = w.filter((e) => N.has(e.user.id)))
        : A && (w = w.filter((e) => "exact" === e.matchType || N.has(e.user.id))),
    E ||
        y === a.DB.MENTION_SUGGESTIONS ||
        !(I.length < _) ||
        w.some((e) => "exact" === e.matchType || (A && N.has(e.user.id))))
        ? {
              results: {
                  suggestions: w,
                  queryInfo: S,
              },
          }
        : f;
}
let O = (0, r.memoize)(y, (e, t, n, r) =>
        "".concat(e.id, "-").concat(r.isIdle, "-").concat(r.currentAutocompleteType, "-").concat(t, "-").concat(n),
    ),
    A = null;

function v(e, t, n, r) {
    return (
        null == A &&
            (A = setTimeout(() => {
                var e, t;
                null == (e = (t = O.cache).clear) || e.call(t), (A = null);
            }, 0)),
        O(e, t, n, r)
    );
}
