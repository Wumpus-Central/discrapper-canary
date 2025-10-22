t.d(n, { default: () => A });
var r = t(951288);
t(647438);
var i = t(481060),
    l = t(239091),
    a = t(108843),
    o = t(100527),
    c = t(299206),
    u = t(895563),
    s = t(32750),
    d = t(109764),
    f = t(323597),
    h = t(461535),
    b = t(438536),
    p = t(251746),
    Z = t(193987),
    g = t(933793),
    j = t(765483),
    O = t(192127),
    v = t(13736),
    m = t(732393),
    _ = t(214906),
    y = t(612856),
    P = t(137591),
    E = t(388032);
let A = (0, a.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            a = (0, d.Z)(n),
            o = (0, h.Z)(n),
            A = (0, _.Z)(n),
            N = (0, s.Z)(n),
            C = (0, Z.Z)(n),
            x = (0, f.Z)(n),
            S = (0, c.Z)({
                id: n.id,
                label: E.intl.string(E.t.DQ797g),
            }),
            w = (0, b.Z)(n, "Context Menu"),
            M = (0, g.Z)(n),
            T = (0, O.Z)(n),
            k = (0, y.Z)(n),
            R = (0, v.Z)(n),
            I = (0, m.Z)(n.id),
            D = (0, p.Z)(n),
            U = (0, P.Z)(n),
            F = (0, u.l)(n),
            G = (0, u.P)(n),
            L = (0, j.Z)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": E.intl.string(E.t["1NBjqb"]),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [o, F],
                    },
                    "mark-as-read-or-favorite",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [w, D, N, C, R, I, a],
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
                (0, r.jsx)(i.kSQ, { children: G }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [U, M, x, L, T],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(i.kSQ, { children: S }, "developer-actions"),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU],
);
