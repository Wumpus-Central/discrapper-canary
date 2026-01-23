n.d(t, {
    default: () => w,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(358367),
    o = n(793574),
    s = n(50268),
    c = n(133238),
    u = n(182061),
    d = n(886393),
    f = n(307623),
    A = n(848977),
    b = n(660273),
    p = n(40389),
    v = n(707792),
    g = n(41402),
    h = n(990028),
    O = n(271456),
    m = n(200273),
    y = n(565846),
    _ = n(57907),
    j = n(375500),
    C = n(707653),
    E = n(985018);
let w = (0, a.A)(
    function (e) {
        let { channel: t, onSelect: n } = e,
            a = (0, d.A)(t),
            o = (0, A.A)(t),
            w = (0, _.A)(t),
            S = (0, u.A)(t),
            T = (0, v.A)(t),
            x = (0, f.A)(t),
            R = (0, s.A)({
                id: t.id,
                label: E.intl.string(E.t.DQ797g),
            }),
            N = (0, b.A)(t, "Context Menu"),
            I = (0, g.A)(t),
            D = (0, O.A)(t),
            G = (0, j.A)(t),
            U = (0, m.A)(t),
            P = (0, y.A)(t.id),
            M = (0, p.A)(t),
            L = (0, C.A)(t),
            F = (0, c.m)(t),
            k = (0, c.y)(t),
            X = (0, h.A)(t);
        return (0, r.jsxs)(i.W1t, {
            "data-menu-mixed": !0,
            navId: "thread-context",
            onClose: l.Z_,
            "aria-label": E.intl.string(E.t["1NBjqb"]),
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
                        children: [N, M, S, T, U, P, a],
                    },
                    "thread-actions",
                ),
                (0, r.jsxs)(
                    i.rXV,
                    {
                        children: [w, G],
                    },
                    "notifications",
                ),
                (0, r.jsx)(i.rXV, {
                    children: k,
                }),
                (0, r.jsxs)(
                    i.rXV,
                    {
                        children: [L, I, x, X, D],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(
                    i.rXV,
                    {
                        children: R,
                    },
                    "developer-actions",
                ),
            ],
        });
    },
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_THREAD_MENU],
);
