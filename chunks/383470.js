n.d(t, { A: () => m }), n(321073);
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(292455),
    s = n(701508),
    o = n(979590),
    d = n(783531),
    c = n(965660),
    u = n(599907),
    A = n(652215),
    h = n(987134);
let _ = { page: A.liQ.GUILD_DISCOVERY, object: A.ZSU.CARD, section: A.JJy.DISCOVER_POPULAR };
function m(e) {
    let { tab: t, guildIds: n, loading: A, onScroll: m, onGuildCardClick: p, onGuildCardSeen: g } = e,
        E = (0, c.kc)(t),
        I = (0, c.Ot)(t),
        f = (0, c.UW)(t),
        C = (0, c.Ub)(t),
        T = r.useMemo(() => {
            let e = A ? 30 : n.length,
                t = [];
            for (let r = 0; r < e; r++)
                t.push(
                    (0, i.jsx)(
                        u.jO,
                        { guildId: n[r] ?? null, index: r, onClick: (e) => p(e, r, C, _), onView: (e) => g(e, C) },
                        n[r] ?? r,
                    ),
                );
            return t;
        }, [C, n, A, p, g]);
    return (0, i.jsxs)(d.A, {
        onScroll: m,
        children: [
            (0, i.jsx)(s.A, { title: E, description: I, children: (0, i.jsx)(a.A, {}) }),
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
