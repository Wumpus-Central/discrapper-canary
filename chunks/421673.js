r.d(n, {
    YM: function () {
        return P;
    },
    cK: function () {
        return w;
    }
});
var i = r(724458);
var a = r(653041);
var o = r(47120);
var s = r(658722),
    l = r.n(s),
    u = r(954955),
    c = r.n(u),
    d = r(339085),
    f = r(633302),
    p = r(626135),
    h = r(697426),
    _ = r(242291),
    m = r(981631);
let g = 100,
    E = 8,
    v = 7,
    y = 6,
    b = 5,
    I = 4,
    T = 3,
    S = 2,
    A = 1,
    C = [],
    N = 350,
    R = c()(D, N),
    O = c()(x, N);
function D(e, n) {
    p.default.track(m.rMx.SEARCH_STARTED, {
        channel_id: n,
        search_type: m.aib.SOUNDBOARD,
        location_stack: e
    });
}
function x(e, n, r, i) {
    p.default.track(m.rMx.SEARCH_RESULT_VIEWED, {
        search_type: m.aib.SOUNDBOARD,
        channel_id: r,
        query: i,
        total_results: e.length,
        location_stack: n
    });
}
function L(e, n, r, i) {
    var a;
    let o = 0,
        s = n.name.toLocaleLowerCase(),
        u = null != n.emojiId ? d.ZP.getCustomEmojiById(n.emojiId) : null,
        c = null != n.emojiName ? f.ZP.convertSurrogateToName(n.emojiName, !1) : null,
        p = null != c ? f.ZP.getByName(c) : null,
        h = null != u ? [u.name] : null !== (a = null == p ? void 0 : p.names) && void 0 !== a ? a : [];
    return e === s && (o += E), h.includes(e) && (o += v), s.startsWith(e) && (o += y), h.some((n) => n.startsWith(e)) && (o += b), s.endsWith(e) && (o += I), h.some((n) => n.endsWith(e)) && (o += T), l()(e, n.name.toLocaleLowerCase()) && (o += S), h.some((n) => l()(e, n)) && (o += A), o > 0 && (0, _.Nq)(r, n, i) && (o += g), o;
}
function w(e, n, r, i, a) {
    let o = n.reduce((n, o) => (R(a, null == i ? void 0 : i.id), (n[o.soundId] = L(e.toLocaleLowerCase(), o, r, i)), n), {}),
        s = n.filter((e) => o[e.soundId] > 0).sort((e, n) => o[n.soundId] - o[e.soundId]);
    return O(s, a, null == i ? void 0 : i.id, e), s;
}
function P(e, n, r, i, a) {
    return 0 === e.length
        ? C
        : w(
              e,
              n.reduce((e, n) => {
                  for (let r of n.items) n.categoryInfo.type !== h.bg.FAVORITES && r.type === h.vB.SOUND && e.push(r.sound);
                  return e;
              }, []),
              r,
              i,
              a
          );
}
