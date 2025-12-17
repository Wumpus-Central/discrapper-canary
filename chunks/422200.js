t.d(n, { default: () => x });
var r = t(54381);
t(473749);
var i = t(481060),
    l = t(239091),
    o = t(108843),
    a = t(100527),
    u = t(299206),
    c = t(895563),
    d = t(32750),
    s = t(109764),
    f = t(323597),
    h = t(461535),
    b = t(438536),
    p = t(251746),
    j = t(193987),
    m = t(933793),
    v = t(765483),
    Z = t(192127),
    g = t(13736),
    O = t(732393),
    y = t(214906),
    _ = t(612856),
    P = t(137591),
    E = t(388032);
let x = (0, o.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            o = (0, s.Z)(n),
            a = (0, h.Z)(n),
            x = (0, y.Z)(n),
            A = (0, d.Z)(n),
            N = (0, j.Z)(n),
            S = (0, f.Z)(n),
            T = (0, u.Z)({
                id: n.id,
                label: E.intl.string(E.t.DQ797g),
            }),
            C = (0, b.Z)(n, "Context Menu"),
            w = (0, m.Z)(n),
            M = (0, Z.Z)(n),
            k = (0, _.Z)(n),
            R = (0, g.Z)(n),
            D = (0, O.Z)(n.id),
            U = (0, p.Z)(n),
            L = (0, P.Z)(n),
            I = (0, c.l)(n),
            G = (0, c.P)(n),
            Q = (0, v.Z)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": E.intl.string(E.t["1NBjqb"]),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [a, I],
                    },
                    "mark-as-read-or-favorite",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [C, U, A, N, R, D, o],
                    },
                    "thread-actions",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [x, k],
                    },
                    "notifications",
                ),
                (0, r.jsx)(i.kSQ, { children: G }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [L, w, S, Q, M],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(i.kSQ, { children: T }, "developer-actions"),
            ],
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU],
);
