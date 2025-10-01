n.d(t, {
    r: () => p,
    x: () => c,
}),
    n(413496),
    n(433524),
    n(35282),
    n(704826);
var r = n(392711),
    i = n(212819),
    a = n(375954),
    o = n(483360),
    s = n(657871);
let l = {
        results: {
            suggestions: [],
            trailingPunctuation: "",
        },
    },
    c = "-,.?!:;",
    u = new RegExp("([".concat((0, r.escapeRegExp)(c), "]*)$"));
function d(e, t, n) {
    let { isIdle: r, isVisible: c } = n,
        { onlyExactMatch: d } = (0, s.kB)("getMentionSuggestions", { autoTrackExposure: !1 }),
        f = "",
        _ = t.replace(u, (e) => ((f = e), "")),
        p = (0, o.Cq)(i.h8.USER),
        h = a.Z.getMessages(e.id).toArray();
    for (let e = 0; e < h.length; e++) {
        var m;
        let t = h[e];
        p[t.author.id] = (null != (m = p[t.author.id]) ? m : 1) + (h.length - e) / h.length;
    }
    let g = o.ZP.queryMentionSuggestionResults({
        query: _,
        channel: e,
        boosters: p,
        onlyExactMatch: d,
    });
    return r || c || !(_.length < 5) || g.some((e) => "exact" === e.matchType)
        ? {
              results: {
                  suggestions: g,
                  trailingPunctuation: f,
              },
          }
        : l;
}
let f = (0, r.memoize)(d, (e, t, n) => "".concat(e.id, "-").concat(n.isIdle, "-").concat(n.isVisible, "-").concat(t)),
    _ = null;
function p(e, t, n) {
    return (
        null == _ &&
            (_ = setTimeout(() => {
                var e, t;
                null == (e = (t = f.cache).clear) || e.call(t), (_ = null);
            }, 0)),
        f(e, t, n)
    );
}
