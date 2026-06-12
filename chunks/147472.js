"use strict";
n.d(t, { lG: () => f });
var i = n(91871),
    r = n.n(i),
    s = n(111956),
    a = n.n(s),
    o = n(159273),
    l = n(7584),
    u = n(174459),
    c = n(813564),
    d = n(652215);
let _ = a()(function (e, t) {
        u.default.track(d.HAw.SEARCH_STARTED, { channel_id: t, search_type: d.I4_.SOUNDBOARD, location_stack: e });
    }, 350),
    h = a()(function (e, t, n, i) {
        u.default.track(d.HAw.SEARCH_RESULT_VIEWED, {
            search_type: d.I4_.SOUNDBOARD,
            channel_id: n,
            query: i,
            total_results: e.length,
            location_stack: t,
        });
    }, 350);
function f(e, t, n, i, s) {
    let a = t.reduce((t, a) => {
            var u;
            let d, h, f, p, E, m;
            return (
                _(s, i?.id),
                (t[a.soundId] =
                    ((u = e.toLocaleLowerCase()),
                    (d = 0),
                    (h = a.name.toLocaleLowerCase()),
                    (f = null != a.emojiId ? o.Ay.getCustomEmojiById(a.emojiId) : null),
                    (E =
                        null != (p = null != a.emojiName ? l.Ay.convertSurrogateToName(a.emojiName, !1) : null)
                            ? l.Ay.getByName(p)
                            : null),
                    (m = null != f ? [f.name] : (E?.names ?? [])),
                    u === h && (d += 8),
                    m.includes(u) && (d += 7),
                    h.startsWith(u) && (d += 6),
                    m.some((e) => e.startsWith(u)) && (d += 5),
                    h.endsWith(u) && (d += 4),
                    m.some((e) => e.endsWith(u)) && (d += 3),
                    r()(u, a.name.toLocaleLowerCase()) && (d += 2),
                    m.some((e) => r()(u, e)) && (d += 1),
                    d > 0 && (0, c.Ir)(n, a, i) && (d += 100),
                    d)),
                t
            );
        }, {}),
        u = t.filter((e) => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
    return h(u, s, i?.id, e), u;
}
