n.d(t, {
    YM: () => D,
    cK: () => O
}),
    n(724458),
    n(653041),
    n(47120);
var i = n(658722),
    r = n.n(i),
    a = n(954955),
    s = n.n(a),
    o = n(339085),
    l = n(633302),
    u = n(626135),
    c = n(697426),
    d = n(242291),
    f = n(981631);
let _ = 100,
    p = 8,
    h = 7,
    m = 6,
    g = 5,
    E = 4,
    v = 3,
    y = 2,
    I = 1,
    T = [],
    b = 350,
    S = s()(N, b),
    A = s()(C, b);
function N(e, t) {
    u.default.track(f.rMx.SEARCH_STARTED, {
        channel_id: t,
        search_type: f.aib.SOUNDBOARD,
        location_stack: e
    });
}
function C(e, t, n, i) {
    u.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
        search_type: f.aib.SOUNDBOARD,
        channel_id: n,
        query: i,
        total_results: e.length,
        location_stack: t
    });
}
function R(e, t, n, i) {
    var a;
    let s = 0,
        u = t.name.toLocaleLowerCase(),
        c = null != t.emojiId ? o.ZP.getCustomEmojiById(t.emojiId) : null,
        f = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
        T = null != f ? l.ZP.getByName(f) : null,
        b = null != c ? [c.name] : null !== (a = null == T ? void 0 : T.names) && void 0 !== a ? a : [];
    return e === u && (s += p), b.includes(e) && (s += h), u.startsWith(e) && (s += m), b.some((t) => t.startsWith(e)) && (s += g), u.endsWith(e) && (s += E), b.some((t) => t.endsWith(e)) && (s += v), r()(e, t.name.toLocaleLowerCase()) && (s += y), b.some((t) => r()(e, t)) && (s += I), s > 0 && (0, d.Nq)(n, t, i) && (s += _), s;
}
function O(e, t, n, i, r) {
    let a = t.reduce((t, a) => (S(r, null == i ? void 0 : i.id), (t[a.soundId] = R(e.toLocaleLowerCase(), a, n, i)), t), {}),
        s = t.filter((e) => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
    return A(s, r, null == i ? void 0 : i.id, e), s;
}
function D(e, t, n, i, r) {
    return 0 === e.length
        ? T
        : O(
              e,
              t.reduce((e, t) => {
                  for (let n of t.items) t.categoryInfo.type !== c.bg.FAVORITES && n.type === c.vB.SOUND && e.push(n.sound);
                  return e;
              }, []),
              n,
              i,
              r
          );
}
