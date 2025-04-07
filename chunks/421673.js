n.d(t, { cK: () => A }), n(642613);
var r = n(658722),
    i = n.n(r),
    o = n(954955),
    a = n.n(o),
    s = n(339085),
    l = n(633302),
    c = n(626135),
    u = n(242291),
    d = n(981631);
let f = 100,
    _ = 8,
    p = 7,
    h = 6,
    m = 5,
    g = 4,
    E = 3,
    b = 2,
    y = 1,
    v = 350,
    O = a()(S, v),
    I = a()(T, v);
function S(e, t) {
    c.default.track(d.rMx.SEARCH_STARTED, {
        channel_id: t,
        search_type: d.aib.SOUNDBOARD,
        location_stack: e
    });
}
function T(e, t, n, r) {
    c.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: d.aib.SOUNDBOARD,
        channel_id: n,
        query: r,
        total_results: e.length,
        location_stack: t
    });
}
function N(e, t, n, r) {
    var o;
    let a = 0,
        c = t.name.toLocaleLowerCase(),
        d = null != t.emojiId ? s.ZP.getCustomEmojiById(t.emojiId) : null,
        v = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
        O = null != v ? l.ZP.getByName(v) : null,
        I = null != d ? [d.name] : null != (o = null == O ? void 0 : O.names) ? o : [];
    return e === c && (a += _), I.includes(e) && (a += p), c.startsWith(e) && (a += h), I.some((t) => t.startsWith(e)) && (a += m), c.endsWith(e) && (a += g), I.some((t) => t.endsWith(e)) && (a += E), i()(e, t.name.toLocaleLowerCase()) && (a += b), I.some((t) => i()(e, t)) && (a += y), a > 0 && (0, u.Nq)(n, t, r) && (a += f), a;
}
function A(e, t, n, r, i) {
    let o = t.reduce((t, o) => (O(i, null == r ? void 0 : r.id), (t[o.soundId] = N(e.toLocaleLowerCase(), o, n, r)), t), {}),
        a = t.filter((e) => o[e.soundId] > 0).sort((e, t) => o[t.soundId] - o[e.soundId]);
    return I(a, i, null == r ? void 0 : r.id, e), a;
}
