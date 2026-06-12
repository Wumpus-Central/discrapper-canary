n.d(r, { default: () => W });
var i = n(627968);
n(64700);
var t = n(980707),
    s = n(477782),
    l = n(442433),
    a = n(358367),
    d = n(793574),
    c = n(50268),
    o = n(313281),
    A = n(133238),
    h = n(182061),
    x = n(886393),
    j = n(307623),
    u = n(848977),
    X = n(660273),
    g = n(40389),
    v = n(707792),
    b = n(41402),
    f = n(17928),
    m = n(969043),
    p = n(226698),
    C = n(892340),
    _ = n(375708),
    N = n(221314),
    k = n(271456),
    D = n(200273),
    E = n(565846),
    M = n(57907),
    T = n(375500),
    I = n(707653);
function y(e) {
    let { channel: r, onSelect: n } = e,
        a = (0, x.A)(r),
        d = (0, u.A)(r),
        o = (0, M.A)(r),
        h = (0, T.A)(r),
        j = (0, c.A)({ id: r.id, label: _.intl.string(_.t.DQ797g) }),
        v = (0, A.m)(r),
        b = (0, X.A)(r, "Context Menu"),
        f = (0, g.A)(r),
        m = (0, k.A)(r),
        p = (0, A.y)(r);
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": _.intl.string(_.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, i.jsx)(s.rX, { children: d }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: v }),
            (0, i.jsxs)(s.rX, { children: [b, f, a] }, "thread-actions"),
            (0, i.jsxs)(s.rX, { children: [o, h] }, "notifications"),
            (0, i.jsx)(s.rX, { children: m }),
            (0, i.jsx)(s.rX, { children: p }),
            (0, i.jsx)(s.rX, { children: j }, "developer-actions"),
        ],
    });
}
function S(e) {
    let { channel: r, onSelect: n } = e,
        a = (0, x.A)(r),
        d = (0, u.A)(r),
        o = (0, M.A)(r),
        y = (0, h.A)(r),
        S = (0, v.A)(r),
        W = (0, j.A)(r),
        Z = (0, c.A)({ id: r.id, label: _.intl.string(_.t.DQ797g) }),
        q = (0, X.A)(r, "Context Menu"),
        w = (0, b.A)(r),
        B = (0, k.A)(r),
        H = (0, T.A)(r),
        L = (0, D.A)(r),
        Q = (0, E.A)(r.id),
        U = (0, g.A)(r),
        F = (0, I.A)(r),
        G = (0, A.m)(r),
        K = (0, A.y)(r),
        O = (function (e) {
            let r = e.isArchivedThread(),
                n = (0, C.uW)(e),
                { firstMessage: t } = (0, f.bG)([m.A], () => m.A.getMessage(e.id), [e.id]);
            return !n || r || null == t
                ? null
                : (0, i.jsx)(s.Dr, {
                      id: "resolve-report",
                      label: _.intl.string(N.default["8yIKem"]),
                      action: () => p.A.resolveFlag(e.id),
                  });
        })(r);
    return (0, i.jsxs)(t.W, {
        "data-menu-migrated": !0,
        navId: "thread-context",
        onClose: l.Z_,
        "aria-label": _.intl.string(_.t["1NBjqb"]),
        onSelect: n,
        children: [
            (0, i.jsx)(s.rX, { children: d }, "mark-as-read-or-favorite"),
            (0, i.jsx)(s.rX, { children: G }),
            (0, i.jsxs)(s.rX, { children: [q, U, y, S, L, Q, a] }, "thread-actions"),
            (0, i.jsxs)(s.rX, { children: [o, H] }, "notifications"),
            (0, i.jsxs)(s.rX, { children: [F, w, O, B, W] }, "admin-actions"),
            (0, i.jsx)(s.rX, { children: K }),
            (0, i.jsx)(s.rX, { children: Z }, "developer-actions"),
        ],
    });
}
let W = (0, a.A)(
    function (e) {
        return (0, o.DZ)() ? (0, i.jsx)(y, { ...e }) : (0, i.jsx)(S, { ...e });
    },
    [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_THREAD_MENU],
);
