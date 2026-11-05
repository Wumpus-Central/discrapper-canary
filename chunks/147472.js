var i = n(91871),
    r = n.n(i),
    a = n(649852),
    s = n.n(a),
    l = n(121681),
    o = n(7584),
    d = n(129230),
    c = n(458976),
    u = n(652215);
let _ = s()(function (e, t) {
        d.default.track(u.HAw.SEARCH_STARTED, { channel_id: t, search_type: u.I4_.SOUNDBOARD, location_stack: e });
    }, 350),
    E = s()(function (e, t, n, i) {
        d.default.track(u.HAw.SEARCH_RESULT_VIEWED, {
            search_type: u.I4_.SOUNDBOARD,
            channel_id: n,
            query: i,
            total_results: e.length,
            location_stack: t,
        });
    }, 350);
n.d(
    t,
    {},
    {
        lG: function (e, t, n, i, a) {
            let s = t.reduce((t, s) => {
                    var d;
                    let u, E, A, f, h, I;
                    return (
                        _(a, i?.id),
                        (t[s.soundId] =
                            ((d = e.toLocaleLowerCase()),
                            (u = 0),
                            (E = s.name.toLocaleLowerCase()),
                            (A = null != s.emojiId ? l.Ay.getCustomEmojiById(s.emojiId) : null),
                            (h =
                                null != (f = null != s.emojiName ? o.Ay.convertSurrogateToName(s.emojiName, !1) : null)
                                    ? o.Ay.getByName(f)
                                    : null),
                            (I = null != A ? [A.name] : (h?.names ?? [])),
                            d === E && (u += 8),
                            I.includes(d) && (u += 7),
                            E.startsWith(d) && (u += 6),
                            I.some((e) => e.startsWith(d)) && (u += 5),
                            E.endsWith(d) && (u += 4),
                            I.some((e) => e.endsWith(d)) && (u += 3),
                            r()(d, s.name.toLocaleLowerCase()) && (u += 2),
                            I.some((e) => r()(d, e)) && (u += 1),
                            u > 0 && (0, c.Ir)(n, s, i) && (u += 100),
                            u)),
                        t
                    );
                }, {}),
                d = t.filter((e) => s[e.soundId] > 0).sort((e, t) => s[t.soundId] - s[e.soundId]);
            return (E(d, a, i?.id, e), d);
        },
    },
);
