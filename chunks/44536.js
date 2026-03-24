n.d(t, { default: () => x });
var i = n(627968);
n(64700);
var r = n(397927),
    l = n(442433),
    a = n(358367),
    d = n(793574),
    o = n(50268),
    u = n(93055),
    s = n(133238),
    c = n(182061),
    f = n(886393),
    A = n(307623),
    h = n(848977),
    _ = n(660273),
    v = n(40389),
    b = n(707792),
    g = n(41402),
    p = n(990028),
    E = n(271456),
    m = n(200273),
    C = n(565846),
    O = n(57907),
    R = n(375500),
    T = n(707653),
    I = n(985018);
function G(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, f.A)(t),
        d = (0, h.A)(t),
        u = (0, O.A)(t),
        c = (0, R.A)(t),
        A = (0, o.A)({ id: t.id, label: I.intl.string(I.t.DQ797g) }),
        _ = (0, s.m)(t);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": I.intl.string(I.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, i.jsx)(r.rXV, { children: d }, "mark-as-read-or-favorite"),
            (0, i.jsx)(r.rXV, { children: _ }),
            (0, i.jsx)(r.rXV, { children: a }, "thread-actions"),
            (0, i.jsxs)(r.rXV, { children: [u, c] }, "notifications"),
            (0, i.jsx)(r.rXV, { children: A }, "developer-actions"),
        ],
    });
}
function y(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, f.A)(t),
        d = (0, h.A)(t),
        u = (0, O.A)(t),
        G = (0, c.A)(t),
        y = (0, b.A)(t),
        x = (0, A.A)(t),
        S = (0, o.A)({ id: t.id, label: I.intl.string(I.t.DQ797g) }),
        D = (0, _.A)(t, "Context Menu"),
        L = (0, g.A)(t),
        U = (0, E.A)(t),
        N = (0, R.A)(t),
        j = (0, m.A)(t),
        F = (0, C.A)(t.id),
        w = (0, v.A)(t),
        M = (0, T.A)(t),
        V = (0, s.m)(t),
        X = (0, s.y)(t),
        k = (0, p.A)(t);
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": I.intl.string(I.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, i.jsx)(r.rXV, { children: d }, "mark-as-read-or-favorite"),
            (0, i.jsx)(r.rXV, { children: V }),
            (0, i.jsxs)(r.rXV, { children: [D, w, G, y, j, F, a] }, "thread-actions"),
            (0, i.jsxs)(r.rXV, { children: [u, N] }, "notifications"),
            (0, i.jsxs)(r.rXV, { children: [M, L, k, U, x] }, "admin-actions"),
            (0, i.jsx)(r.rXV, { children: X }),
            (0, i.jsx)(r.rXV, { children: S }, "developer-actions"),
        ],
    });
}
let x = (0, a.A)(
    function (e) {
        return (0, u.DZ)() ? (0, i.jsx)(G, { ...e }) : (0, i.jsx)(y, { ...e });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_THREAD_MENU],
);
