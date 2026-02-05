"use strict";
n.d(t, { lG: () => N });
var r = n(91871),
    i = n.n(r),
    a = n(111956),
    s = n.n(a),
    o = n(508675),
    l = n(7584),
    u = n(954571),
    c = n(536432),
    d = n(652215);
let _ = 100,
    f = 8,
    p = 7,
    h = 6,
    m = 5,
    g = 4,
    E = 3,
    A = 2,
    I = 1,
    T = 350,
    y = s()(v, T),
    S = s()(C, T);
function v(e, t) {
    u.default.track(d.HAw.SEARCH_STARTED, { channel_id: t, search_type: d.I4_.SOUNDBOARD, location_stack: e });
}
function C(e, t, n, r) {
    u.default.track(d.HAw.SEARCH_RESULT_VIEWED, {
        search_type: d.I4_.SOUNDBOARD,
        channel_id: n,
        query: r,
        total_results: e.length,
        location_stack: t,
    });
}
function b(e, t, n, r) {
    let a = 0,
        s = t.name.toLocaleLowerCase(),
        u = null != t.emojiId ? o.Ay.getCustomEmojiById(t.emojiId) : null,
        d = null != t.emojiName ? l.Ay.convertSurrogateToName(t.emojiName, !1) : null,
        T = null != d ? l.Ay.getByName(d) : null,
        y = null != u ? [u.name] : (T?.names ?? []);
    return (
        e === s && (a += f),
        y.includes(e) && (a += p),
        s.startsWith(e) && (a += h),
        y.some((t) => t.startsWith(e)) && (a += m),
        s.endsWith(e) && (a += g),
        y.some((t) => t.endsWith(e)) && (a += E),
        i()(e, t.name.toLocaleLowerCase()) && (a += A),
        y.some((t) => i()(e, t)) && (a += I),
        a > 0 && (0, c.Ir)(n, t, r) && (a += _),
        a
    );
}
function N(e, t, n, r, i) {
    let a = t.reduce((t, a) => (y(i, r?.id), (t[a.soundId] = b(e.toLocaleLowerCase(), a, n, r)), t), {}),
        s = t.filter((e) => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
    return S(s, i, r?.id, e), s;
}
