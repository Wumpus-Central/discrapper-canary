n.d(t, {
    r: () => h,
    x: () => u,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826);
var r = n(392711),
    i = n(212819),
    a = n(375954),
    o = n(483360),
    s = n(657871),
    l = n(389458);
let c = {
        results: {
            suggestions: [],
            trailingPunctuation: "",
        },
    },
    u = "-,.?!:;",
    d = new RegExp("([".concat((0, r.escapeRegExp)(u), "]*)$"));
function f(e, t, n) {
    let { isIdle: r, isVisible: u } = n,
        { onlyExactMatch: f } = (0, s.kB)("getMentionSuggestions", { autoTrackExposure: !1 }),
        _ = "",
        p = t.replace(d, (e) => ((_ = e), ""));
    if (l.Z.isFrequentlyUsedWord(p)) return c;
    let h = (0, o.Cq)(i.h8.USER),
        m = a.Z.getMessages(e.id).toArray();
    for (let e = 0; e < m.length; e++) {
        var g;
        let t = m[e];
        h[t.author.id] = (null != (g = h[t.author.id]) ? g : 1) + (m.length - e) / m.length;
    }
    let E = o.ZP.queryMentionSuggestionResults({
        query: p,
        channel: e,
        boosters: h,
        onlyExactMatch: f,
    });
    return r || u || !(p.length < 5) || E.some((e) => "exact" === e.matchType)
        ? {
              results: {
                  suggestions: E,
                  trailingPunctuation: _,
              },
          }
        : c;
}
let _ = (0, r.memoize)(f, (e, t, n) => "".concat(e.id, "-").concat(n.isIdle, "-").concat(n.isVisible, "-").concat(t)),
    p = null;
function h(e, t, n) {
    return (
        null == p &&
            (p = setTimeout(() => {
                var e, t;
                null == (e = (t = _.cache).clear) || e.call(t), (p = null);
            }, 0)),
        _(e, t, n)
    );
}
