n.d(r, { default: () => q });
var i = n(477900);
n(582128);
var t = n(980707),
    s = n(477782),
    l = n(442433),
    a = n(358367),
    d = n(793574),
    c = n(50268),
    o = n(93055),
    A = n(438653),
    h = n(687340),
    x = n(182061),
    j = n(886393),
    u = n(307623),
    X = n(848977),
    g = n(660273),
    v = n(40389),
    b = n(707792),
    f = n(41402),
    p = n(17928),
    C = n(969043),
    m = n(226698),
    _ = n(892340),
    N = n(375708),
    k = n(544482),
    D = n(271456),
    E = n(200273),
    M = n(565846),
    T = n(57907),
    I = n(375500),
    S = n(707653);
function W(e) {
    let { channel: r, onSelect: n } = e,
        a = (0, j.A)(r),
        d = (0, X.A)(r),
        o = (0, T.A)(r),
        h = (0, I.A)(r),
        x = (0, c.A)({ id: r.id, label: N.intl.string(N.t.DQ797g) }),
        u = (0, A.z)(r),
        b = (0, g.A)(r, "Context Menu"),
        f = (0, v.A)(r),
        p = (0, D.A)(r),
        C = (0, A.C)(r);
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": N.intl.string(N.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, i.jsx)(s.rX, { children: d }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: u }),
            (0, i.jsxs)(s.rX, { children: [b, f, a] }, "thread-actions"),
            (0, i.jsxs)(s.rX, { children: [o, h] }, "notifications"),
            (0, i.jsx)(s.rX, { children: p }),
            (0, i.jsx)(s.rX, { children: C }),
            (0, i.jsx)(s.rX, { children: x }, "developer-actions"),
        ],
    });
}
function Z(e) {
    let { channel: r, onSelect: n } = e,
        a = (0, j.A)(r),
        d = (0, X.A)(r),
        o = (0, T.A)(r),
        W = (0, x.A)(r),
        Z = (0, b.A)(r),
        q = (0, u.A)(r),
        w = (0, c.A)({ id: r.id, label: N.intl.string(N.t.DQ797g) }),
        z = (0, g.A)(r, "Context Menu"),
        B = (0, f.A)(r),
        H = (0, D.A)(r),
        L = (0, I.A)(r),
        Q = (0, E.A)(r),
        U = (0, M.A)(r.id),
        y = (0, v.A)(r),
        F = (0, S.A)(r),
        G = (0, A.z)(r),
        K = (0, A.C)(r),
        O = (function (e) {
            let r = e.isArchivedThread(),
                n = (0, _.uW)(e),
                { firstMessage: t } = (0, p.bG)([C.A], () => C.A.getMessage(e.id), [e.id]);
            return !n || r || null == t
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "resolve-report",
                      label: N.intl.string(k.default["8yIKem"]),
                      action: () => m.A.resolveFlag(e.id),
                  });
        })(r),
        R = (0, h.A)(r);
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": N.intl.string(N.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, i.jsx)(s.rX, { children: d }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: G }),
            (0, i.jsxs)(s.rX, { children: [R, z, y, W, Z, Q, U, a] }, "thread-actions"),
            (0, i.jsxs)(s.rX, { children: [o, L] }, "notifications"),
            (0, i.jsxs)(s.rX, { children: [F, B, O, H, q] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: K }),
            (0, i.jsx)(s.rX, { children: w }, "developer-actions"),
        ],
    });
}
let q = (0, a.A)(
    function (e) {
        return (0, o.DZ)() ? (0, i.jsx)(W, { ...e }) : (0, i.jsx)(Z, { ...e });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_THREAD_MENU],
);
