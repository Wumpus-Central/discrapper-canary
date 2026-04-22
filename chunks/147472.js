"use strict";
n.d(t, { lG: () => E });
var r = n(91871),
    i = n.n(r),
    s = n(111956),
    a = n.n(s),
    o = n(508675),
    l = n(7584),
    u = n(954571),
    d = n(536432),
    c = n(652215);
let _ = a()(function (e, t) {
        u.default.track(c.HAw.SEARCH_STARTED, { channel_id: t, search_type: c.I4_.SOUNDBOARD, location_stack: e });
    }, 350),
    f = a()(function (e, t, n, r) {
        u.default.track(c.HAw.SEARCH_RESULT_VIEWED, {
            search_type: c.I4_.SOUNDBOARD,
            channel_id: n,
            query: r,
            total_results: e.length,
            location_stack: t,
        });
    }, 350);
function E(e, t, n, r, s) {
    let a = t.reduce((t, a) => {
            var u;
            let c, f, E, h, p, m;
            return (
                _(s, r?.id),
                (t[a.soundId] =
                    ((u = e.toLocaleLowerCase()),
                    (c = 0),
                    (f = a.name.toLocaleLowerCase()),
                    (E = null != a.emojiId ? o.Ay.getCustomEmojiById(a.emojiId) : null),
                    (p =
                        null != (h = null != a.emojiName ? l.Ay.convertSurrogateToName(a.emojiName, !1) : null)
                            ? l.Ay.getByName(h)
                            : null),
                    (m = null != E ? [E.name] : (p?.names ?? [])),
                    u === f && (c += 8),
                    m.includes(u) && (c += 7),
                    f.startsWith(u) && (c += 6),
                    m.some((e) => e.startsWith(u)) && (c += 5),
                    f.endsWith(u) && (c += 4),
                    m.some((e) => e.endsWith(u)) && (c += 3),
                    i()(u, a.name.toLocaleLowerCase()) && (c += 2),
                    m.some((e) => i()(u, e)) && (c += 1),
                    c > 0 && (0, d.Ir)(n, a, r) && (c += 100),
                    c)),
                t
            );
        }, {}),
        u = t.filter((e) => a[e.soundId] > 0).sort((e, t) => a[t.soundId] - a[e.soundId]);
    return f(u, s, r?.id, e), u;
}
