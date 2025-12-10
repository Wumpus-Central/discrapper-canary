n.d(t, { cK: () => A }), n(642613);
var r = n(658722),
    i = n.n(r),
    a = n(954955),
    o = n.n(a),
    s = n(339085),
    l = n(633302),
    c = n(626135),
    u = n(242291),
    d = n(981631);
let f = 100,
    p = 8,
    _ = 7,
    m = 6,
    h = 5,
    g = 4,
    E = 3,
    b = 2,
    y = 1,
    O = 350,
    v = o()(I, O),
    S = o()(T, O);
function I(e, t) {
    c.default.track(d.rMx.SEARCH_STARTED, {
        channel_id: t,
        search_type: d.aib.SOUNDBOARD,
        location_stack: e,
    });
}
function T(e, t, n, r) {
    c.default.track(d.rMx.SEARCH_RESULT_VIEWED, {
        search_type: d.aib.SOUNDBOARD,
        channel_id: n,
        query: r,
        total_results: e.length,
        location_stack: t,
    });
}
function C(e, t, n, r) {
    var a;
    let o = 0,
        c = t.name.toLocaleLowerCase(),
        d = null != t.emojiId ? s.ZP.getCustomEmojiById(t.emojiId) : null,
        O = null != t.emojiName ? l.ZP.convertSurrogateToName(t.emojiName, !1) : null,
        v = null != O ? l.ZP.getByName(O) : null,
        S = null != d ? [d.name] : null != (a = null == v ? void 0 : v.names) ? a : [];
    return (
        e === c && (o += p),
        S.includes(e) && (o += _),
        c.startsWith(e) && (o += m),
        S.some((t) => t.startsWith(e)) && (o += h),
        c.endsWith(e) && (o += g),
        S.some((t) => t.endsWith(e)) && (o += E),
        i()(e, t.name.toLocaleLowerCase()) && (o += b),
        S.some((t) => i()(e, t)) && (o += y),
        o > 0 && (0, u.Nq)(n, t, r) && (o += f),
        o
    );
}
function A(e, t, n, r, i) {
    let a = t.reduce(
            (t, a) => (v(i, null == r ? void 0 : r.id), (t[a.soundId] = C(e.toLocaleLowerCase(), a, n, r)), t),
            {},
        ),
        o = t.filter((e) => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
    return S(o, i, null == r ? void 0 : r.id, e), o;
}
