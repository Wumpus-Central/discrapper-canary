t.d(n, { default: () => A });
var r = t(951288);
t(647438);
var i = t(481060),
    l = t(239091),
    o = t(108843),
    a = t(100527),
    c = t(299206),
    u = t(895563),
    s = t(32750),
    d = t(109764),
    f = t(323597),
    h = t(461535),
    b = t(438536),
    p = t(251746),
    Z = t(193987),
    j = t(933793),
    O = t(765483),
    v = t(192127),
    g = t(13736),
    m = t(732393),
    y = t(214906),
    _ = t(612856),
    P = t(137591),
    E = t(388032);
let A = (0, o.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            o = (0, d.Z)(n),
            a = (0, h.Z)(n),
            A = (0, y.Z)(n),
            N = (0, s.Z)(n),
            x = (0, Z.Z)(n),
            C = (0, f.Z)(n),
            S = (0, c.Z)({
                id: n.id,
                label: E.intl.string(E.t.DQ797g),
            }),
            T = (0, b.Z)(n, "Context Menu"),
            w = (0, j.Z)(n),
            M = (0, v.Z)(n),
            k = (0, _.Z)(n),
            R = (0, g.Z)(n),
            D = (0, m.Z)(n.id),
            U = (0, p.Z)(n),
            I = (0, P.Z)(n),
            G = (0, u.l)(n),
            L = (0, u.P)(n),
            Q = (0, O.Z)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": E.intl.string(E.t["1NBjqb"]),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [a, G],
                    },
                    "mark-as-read-or-favorite",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [T, U, N, x, R, D, o],
                    },
                    "thread-actions",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [A, k],
                    },
                    "notifications",
                ),
                (0, r.jsx)(i.kSQ, { children: L }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [I, w, C, Q, M],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(i.kSQ, { children: S }, "developer-actions"),
            ],
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU],
);
