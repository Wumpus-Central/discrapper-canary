n.d(t, { A: () => m }), n(321073);
var i = n(627968),
    a = n(64700),
    l = n(397927),
    r = n(292455),
    s = n(701508),
    o = n(979590),
    d = n(783531),
    c = n(965660),
    u = n(599907),
    A = n(652215),
    h = n(173629);
let _ = { page: A.liQ.GUILD_DISCOVERY, object: A.ZSU.CARD, section: A.JJy.DISCOVER_POPULAR };
function m(e) {
    let { tab: t, guildIds: n, loading: A, onScroll: m, onGuildCardClick: g, onGuildCardSeen: p } = e,
        E = (0, c.kc)(t),
        I = (0, c.Ot)(t),
        f = (0, c.UW)(t),
        C = (0, c.Ub)(t),
        T = a.useMemo(() => {
            let e = A ? 30 : n.length,
                t = [];
            for (let a = 0; a < e; a++)
                t.push(
                    (0, i.jsx)(
                        u.jO,
                        { guildId: n[a] ?? null, index: a, onClick: (e) => g(e, a, C, _), onView: (e) => p(e, C) },
                        n[a] ?? a,
                    ),
                );
            return t;
        }, [C, n, A, g, p]);
    return (0, i.jsxs)(d.A, {
        onScroll: m,
        children: [
            (0, i.jsx)(s.A, { title: E, description: I, children: (0, i.jsx)(r.A, {}) }),
            (0, i.jsxs)(o.A, {
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: h.G,
                        variant: "heading-lg/semibold",
                        color: "text-strong",
                        children: f,
                    }),
                    (0, i.jsx)("div", { className: h.Q, children: T }),
                ],
            }),
        ],
    });
}
