n.d(t, { default: () => U });
var r = n(627968);
n(64700);
var l = n(550079),
    i = n(477782),
    a = n(442433),
    u = n(358367),
    o = n(793574),
    d = n(50268),
    s = n(313281),
    c = n(133238),
    _ = n(182061),
    h = n(886393),
    A = n(307623),
    E = n(848977),
    T = n(660273),
    f = n(40389),
    N = n(707792),
    S = n(41402),
    m = n(17928),
    C = n(969043),
    g = n(226698),
    I = n(376708),
    p = n(985018),
    v = n(221314),
    L = n(271456),
    y = n(200273),
    j = n(565846),
    b = n(57907),
    O = n(375500),
    G = n(707653);
function R(e) {
    let { channel: t, onSelect: n } = e,
        u = (0, h.A)(t),
        o = (0, E.A)(t),
        s = (0, b.A)(t),
        _ = (0, O.A)(t),
        A = (0, d.A)({ id: t.id, label: p.intl.string(p.t.DQ797g) }),
        N = (0, c.m)(t),
        S = (0, T.A)(t, "Context Menu"),
        m = (0, f.A)(t),
        C = (0, L.A)(t),
        g = (0, c.y)(t);
    return (0, r.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, r.jsx)(i.rX, { children: o }, "mark-as-read-or-favorite"),
            (0, r.jsx)(i.rX, { children: N }),
            (0, r.jsxs)(i.rX, { children: [S, m, u] }, "thread-actions"),
            (0, r.jsxs)(i.rX, { children: [s, _] }, "notifications"),
            (0, r.jsx)(i.rX, { children: C }),
            (0, r.jsx)(i.rX, { children: g }),
            (0, r.jsx)(i.rX, { children: A }, "developer-actions"),
        ],
    });
}
function x(e) {
    let { channel: t, onSelect: n } = e,
        u = (0, h.A)(t),
        o = (0, E.A)(t),
        s = (0, b.A)(t),
        R = (0, _.A)(t),
        x = (0, N.A)(t),
        U = (0, A.A)(t),
        H = (0, d.A)({ id: t.id, label: p.intl.string(p.t.DQ797g) }),
        M = (0, T.A)(t, "Context Menu"),
        D = (0, S.A)(t),
        X = (0, L.A)(t),
        P = (0, O.A)(t),
        F = (0, y.A)(t),
        w = (0, j.A)(t.id),
        B = (0, f.A)(t),
        V = (0, G.A)(t),
        W = (0, c.m)(t),
        k = (0, c.y)(t),
        Y = (function (e) {
            let t = e.isArchivedThread(),
                n = (0, I.uW)(e),
                { firstMessage: l } = (0, m.bG)([C.A], () => C.A.getMessage(e.id), [e.id]);
            return !n || t || null == l
                ? null
                : (0, r.jsx)(i.Dr, {
                      id: "resolve-report",
                      label: p.intl.string(v.default["8yIKem"]),
                      action: () => g.A.resolveFlag(e.id),
                  });
        })(t);
    return (0, r.jsxs)(l.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: a.Z_,
        "aria-label": p.intl.string(p.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, r.jsx)(i.rX, { children: o }, "mark-as-read-or-favorite"),
            (0, r.jsx)(i.rX, { children: W }),
            (0, r.jsxs)(i.rX, { children: [M, B, R, x, F, w, u] }, "thread-actions"),
            (0, r.jsxs)(i.rX, { children: [s, P] }, "notifications"),
            (0, r.jsxs)(i.rX, { children: [V, D, Y, X, U] }, "admin-actions"),
            (0, r.jsx)(i.rX, { children: k }),
            (0, r.jsx)(i.rX, { children: H }, "developer-actions"),
        ],
    });
}
let U = (0, u.A)(
    function (e) {
        return (0, s.DZ)() ? (0, r.jsx)(R, { ...e }) : (0, r.jsx)(x, { ...e });
    },
    [o.A.CONTEXT_MENU, o.A.CHANNEL_LIST_THREAD_MENU],
);
