n.d(t, { default: () => O });
var r = n(627968);
n(64700);
var l = n(861672),
    i = n(477782),
    a = n(442433),
    u = n(358367),
    o = n(793574),
    d = n(50268),
    s = n(93055),
    c = n(133238),
    _ = n(182061),
    h = n(886393),
    A = n(307623),
    E = n(848977),
    T = n(660273),
    f = n(40389),
    N = n(707792),
    S = n(41402),
    m = n(990028),
    C = n(271456),
    g = n(200273),
    I = n(565846),
    p = n(57907),
    v = n(375500),
    L = n(707653),
    y = n(985018);
function j(e) {
    let { channel: t, onSelect: n } = e,
        u = (0, h.A)(t),
        o = (0, E.A)(t),
        s = (0, p.A)(t),
        _ = (0, v.A)(t),
        A = (0, d.A)({ id: t.id, label: y.intl.string(y.t.DQ797g) }),
        N = (0, c.m)(t),
        S = (0, T.A)(t, "Context Menu"),
        m = (0, f.A)(t),
        g = (0, C.A)(t),
        I = (0, c.y)(t);
    return (0, r.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: a.Z_,
        "aria-label": y.intl.string(y.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, r.jsx)(i.rX, { children: o }, "mark-as-read-or-favorite"),
            (0, r.jsx)(i.rX, { children: N }),
            (0, r.jsxs)(i.rX, { children: [S, m, u] }, "thread-actions"),
            (0, r.jsxs)(i.rX, { children: [s, _] }, "notifications"),
            (0, r.jsx)(i.rX, { children: g }),
            (0, r.jsx)(i.rX, { children: I }),
            (0, r.jsx)(i.rX, { children: A }, "developer-actions"),
        ],
    });
}
function b(e) {
    let { channel: t, onSelect: n } = e,
        u = (0, h.A)(t),
        o = (0, E.A)(t),
        s = (0, p.A)(t),
        j = (0, _.A)(t),
        b = (0, N.A)(t),
        O = (0, A.A)(t),
        G = (0, d.A)({ id: t.id, label: y.intl.string(y.t.DQ797g) }),
        R = (0, T.A)(t, "Context Menu"),
        x = (0, S.A)(t),
        U = (0, C.A)(t),
        H = (0, v.A)(t),
        M = (0, g.A)(t),
        D = (0, I.A)(t.id),
        X = (0, f.A)(t),
        P = (0, L.A)(t),
        F = (0, c.m)(t),
        w = (0, c.y)(t),
        B = (0, m.A)(t);
    return (0, r.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: a.Z_,
        "aria-label": y.intl.string(y.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, r.jsx)(i.rX, { children: o }, "mark-as-read-or-favorite"),
            (0, r.jsx)(i.rX, { children: F }),
            (0, r.jsxs)(i.rX, { children: [R, X, j, b, M, D, u] }, "thread-actions"),
            (0, r.jsxs)(i.rX, { children: [s, H] }, "notifications"),
            (0, r.jsxs)(i.rX, { children: [P, x, B, U, O] }, "admin-actions"),
            (0, r.jsx)(i.rX, { children: w }),
            (0, r.jsx)(i.rX, { children: G }, "developer-actions"),
        ],
    });
}
let O = (0, u.A)(
    function (e) {
        return (0, s.DZ)() ? (0, r.jsx)(j, { ...e }) : (0, r.jsx)(b, { ...e });
    },
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_THREAD_MENU],
);
