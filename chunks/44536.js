n.d(t, {
    default: () => T,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(358367),
    o = n(793574),
    c = n(50268),
    s = n(133238),
    u = n(182061),
    d = n(886393),
    f = n(307623),
    A = n(848977),
    p = n(660273),
    b = n(40389),
    v = n(707792),
    h = n(41402),
    g = n(990028),
    O = n(271456),
    y = n(200273),
    m = n(565846),
    _ = n(57907),
    C = n(375500),
    E = n(707653),
    j = n(985018);
let T = (0, a.A)(
    function (e) {
        let { channel: t, onSelect: n } = e,
            a = (0, d.A)(t),
            o = (0, A.A)(t),
            T = (0, _.A)(t),
            S = (0, u.A)(t),
            w = (0, v.A)(t),
            R = (0, f.A)(t),
            N = (0, c.A)({
                id: t.id,
                label: j.intl.string(j.t.DQ797g),
            }),
            x = (0, p.A)(t, "Context Menu"),
            G = (0, h.A)(t),
            D = (0, O.A)(t),
            I = (0, C.A)(t),
            P = (0, y.A)(t),
            U = (0, m.A)(t.id),
            M = (0, b.A)(t),
            L = (0, E.A)(t),
            F = (0, s.m)(t),
            Y = (0, s.y)(t),
            k = (0, g.A)(t);
        return (0, r.jsxs)(i.W1t, {
            "data-menu-migrated": !0,
            navId: "thread-context",
            onClose: l.Z_,
            "aria-label": j.intl.string(j.t["1NBjqb"]),
            onSelect: n,
            children: [
                (0, r.jsxs)(
                    i.rXV,
                    {
                        children: [o, F],
                    },
                    "mark-as-read-or-favorite",
                ),
                (0, r.jsxs)(
                    i.rXV,
                    {
                        children: [x, M, S, w, P, U, a],
                    },
                    "thread-actions",
                ),
                (0, r.jsxs)(
                    i.rXV,
                    {
                        children: [T, I],
                    },
                    "notifications",
                ),
                (0, r.jsxs)(
                    i.rXV,
                    {
                        children: [L, G, k, D, R],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(i.rXV, {
                    children: Y,
                }),
                (0, r.jsx)(
                    i.rXV,
                    {
                        children: N,
                    },
                    "developer-actions",
                ),
            ],
        });
    },
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_THREAD_MENU],
);
