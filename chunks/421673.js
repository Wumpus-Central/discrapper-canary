n.d(t, {
    YM: () => P,
    cK: () => R
}),
    n(230036),
    n(653041),
    n(47120);
var r = n(658722),
    i = n.n(r),
    o = n(954955),
    a = n.n(o),
    s = n(339085),
    l = n(633302),
    c = n(626135),
    u = n(697426),
    d = n(242291),
    f = n(981631);
let _ = 100,
    p = 8,
    h = 7,
    m = 6,
    g = 5,
    E = 4,
    b = 3,
    y = 2,
    v = 1,
    O = [],
    I = 350,
    S = a()(N, I),
    T = a()(A, I);
function N(e, t) {
    c.default.track(f.rMx.SEARCH_STARTED, {
        channel_id: t,
        search_type: f.aib.SOUNDBOARD,
        location_stack: e
    });
}
function A(e, t, n, r) {
    c.default.track(f.rMx.SEARCH_RESULT_VIEWED, {
        search_type: f.aib.SOUNDBOARD,
        channel_id: n,
        query: r,
        total_results: e.length,
        location_stack: t
    });
}
function C(e, t, n, r) {
    var o;
    let a = 0,
        c = t.name.toLocaleLowerCase(),
        u = null != t.emojiId ? s.ZP.getCustomEmojiById(t.emojiId) : null,
        f = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
        O = null != f ? l.ZP.getByName(f) : null,
        I = null != u ? [u.name] : null != (o = null == O ? void 0 : O.names) ? o : [];
    return e === c && (a += p), I.includes(e) && (a += h), c.startsWith(e) && (a += m), I.some((t) => t.startsWith(e)) && (a += g), c.endsWith(e) && (a += E), I.some((t) => t.endsWith(e)) && (a += b), i()(e, t.name.toLocaleLowerCase()) && (a += y), I.some((t) => i()(e, t)) && (a += v), a > 0 && (0, d.Nq)(n, t, r) && (a += _), a;
}
function R(e, t, n, r, i) {
    let o = t.reduce((t, o) => (S(i, null == r ? void 0 : r.id), (t[o.soundId] = C(e.toLocaleLowerCase(), o, n, r)), t), {}),
        a = t.filter((e) => o[e.soundId] > 0).sort((e, t) => o[t.soundId] - o[e.soundId]);
    return T(a, i, null == r ? void 0 : r.id, e), a;
}
function P(e, t, n, r, i) {
    return 0 === e.length
        ? O
        : R(
              e,
              t.reduce((e, t) => {
                  for (let n of t.items) t.categoryInfo.type !== u.bg.FAVORITES && n.type === u.vB.SOUND && e.push(n.sound);
                  return e;
              }, []),
              n,
              r,
              i
          );
}
