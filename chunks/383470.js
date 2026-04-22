a.d(t, { A: () => _ }), a(321073);
var s = a(627968),
    l = a(64700),
    r = a(534514),
    i = a(292455),
    n = a(701508),
    c = a(979590),
    o = a(783531),
    d = a(965660),
    u = a(599907),
    h = a(652215),
    g = a(41389);
let A = { page: h.liQ.GUILD_DISCOVERY, object: h.ZSU.CARD, section: h.JJy.DISCOVER_POPULAR };
function _(e) {
    let { tab: t, guildIds: a, loading: h, onScroll: _, onGuildCardClick: m, onGuildCardSeen: C } = e,
        f = (0, d.kc)(t),
        y = (0, d.Ot)(t),
        I = (0, d.UW)(t),
        S = (0, d.Ub)(t),
        E = l.useMemo(() => {
            let e = h ? 30 : a.length,
                t = [];
            for (let l = 0; l < e; l++)
                t.push(
                    (0, s.jsx)(
                        u.jO,
                        { guildId: a[l] ?? null, index: l, onClick: (e) => m(e, l, S, A), onView: (e) => C(e, S) },
                        a[l] ?? l,
                    ),
                );
            return t;
        }, [S, a, h, m, C]);
    return (0, s.jsxs)(o.A, {
        onScroll: _,
        children: [
            (0, s.jsx)(n.A, { title: f, description: y, children: (0, s.jsx)(i.A, {}) }),
            (0, s.jsxs)(c.A, {
                children: [
                    (0, s.jsx)(r.D, {
                        className: g.G,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: I,
                    }),
                    (0, s.jsx)("div", { className: g.Q, children: E }),
                ],
            }),
        ],
    });
}
