n.d(r, { default: () => w });
var t = n(477900);
n(582128);
var i = n(980707),
    s = n(477782),
    l = n(442433),
    a = n(358367),
    d = n(793574),
    c = n(50268),
    o = n(93055),
    A = n(438653),
    h = n(687340),
    x = n(182061),
    u = n(886393),
    j = n(307623),
    X = n(868548),
    g = n(660273),
    C = n(40389),
    v = n(804006),
    b = n(707792),
    f = n(41402),
    p = n(17928),
    m = n(969043),
    _ = n(226698),
    M = n(892340),
    N = n(105292),
    k = n(812676),
    D = n(271456),
    E = n(200273),
    T = n(565846),
    I = n(57907),
    S = n(375500),
    W = n(707653);
function Z(e) {
    let { channel: r, onSelect: n } = e,
        a = (0, u.A)(r),
        d = (0, X.A)(r),
        o = (0, I.A)(r),
        h = (0, S.A)(r),
        x = (0, c.A)({ id: r.id, label: N.intl.string(N.t.DQ797g) }),
        j = (0, A.z)(r),
        b = (0, g.A)(r, "Context Menu"),
        f = (0, v.A)(r, "Context Menu"),
        p = (0, C.A)(r),
        m = (0, D.A)(r),
        _ = (0, A.C)(r);
    return (0, t.jsxs)(i.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": N.intl.string(N.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, t.jsx)(s.rX, { children: d }, "mark-as-read-or-favorite"),
            (0, t.jsx)(s.rX, { children: j }),
            (0, t.jsxs)(s.rX, { children: [b, p, a] }, "thread-actions"),
            (0, t.jsxs)(s.rX, { children: [o, h] }, "notifications"),
            (0, t.jsx)(s.rX, { children: m }),
            (0, t.jsxs)(s.rX, { children: [f, _] }),
            (0, t.jsx)(s.rX, { children: x }, "developer-actions"),
        ],
    });
}
function q(e) {
    let { channel: r, onSelect: n } = e,
        a = (0, u.A)(r),
        d = (0, X.A)(r),
        o = (0, I.A)(r),
        Z = (0, x.A)(r),
        q = (0, b.A)(r),
        w = (0, j.A)(r),
        z = (0, c.A)({ id: r.id, label: N.intl.string(N.t.DQ797g) }),
        B = (0, g.A)(r, "Context Menu"),
        H = (0, v.A)(r, "Context Menu"),
        L = (0, f.A)(r),
        Q = (0, D.A)(r),
        U = (0, S.A)(r),
        y = (0, E.A)(r),
        F = (0, T.A)(r.id),
        G = (0, C.A)(r),
        K = (0, W.A)(r),
        O = (0, A.z)(r),
        R = (0, A.C)(r),
        J = (function (e) {
            let r = e.isArchivedThread(),
                n = (0, M.uW)(e),
                { firstMessage: i } = (0, p.bG)([m.A], () => m.A.getMessage(e.id), [e.id]);
            return !n || r || null == i
                ? null
                : (0, t.jsx)(s.Dr, {
                      id: "resolve-report",
                      label: N.intl.string(k.default["8yIKem"]),
                      action: () => _.A.resolveFlag(e.id),
                  });
        })(r),
        P = (0, h.A)(r);
    return (0, t.jsxs)(i.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": N.intl.string(N.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, t.jsx)(s.rX, { children: d }, "mark-as-read-or-favorite"),
            (0, t.jsx)(s.rX, { children: O }),
            (0, t.jsxs)(s.rX, { children: [P, B, G, Z, q, y, F, a] }, "thread-actions"),
            (0, t.jsxs)(s.rX, { children: [o, U] }, "notifications"),
            (0, t.jsxs)(s.rX, { children: [K, L, J, Q, w] }, "admin-actions"),
            (0, t.jsxs)(s.rX, { children: [H, R] }),
            (0, t.jsx)(s.rX, { children: z }, "developer-actions"),
        ],
    });
}
let w = (0, a.A)(
    function (e) {
        return (0, o.DZ)() ? (0, t.jsx)(Z, { ...e }) : (0, t.jsx)(q, { ...e });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_THREAD_MENU],
);
