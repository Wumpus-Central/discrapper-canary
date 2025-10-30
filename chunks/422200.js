t.d(n, { default: () => E });
var r = t(951288);
t(647438);
var i = t(481060),
    l = t(239091),
    a = t(108843),
    o = t(100527),
    c = t(299206),
    s = t(895563),
    u = t(32750),
    d = t(109764),
    f = t(323597),
    h = t(461535),
    b = t(438536),
    p = t(251746),
    Z = t(193987),
    j = t(933793),
    O = t(765483),
    g = t(192127),
    v = t(13736),
    m = t(732393),
    _ = t(71991),
    y = t(612856),
    P = t(137591),
    A = t(388032);
let E = (0, a.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            a = (0, d.Z)(n),
            o = (0, h.Z)(n),
            E = (0, _.Z)(n),
            N = (0, u.Z)(n),
            C = (0, Z.Z)(n),
            x = (0, f.Z)(n),
            S = (0, c.Z)({
                id: n.id,
                label: A.intl.string(A.t.DQ797g),
            }),
            T = (0, b.Z)(n, "Context Menu"),
            w = (0, j.Z)(n),
            M = (0, g.Z)(n),
            k = (0, y.Z)(n),
            R = (0, v.Z)(n),
            I = (0, m.Z)(n.id),
            D = (0, p.Z)(n),
            U = (0, P.Z)(n),
            F = (0, s.l)(n),
            G = (0, s.P)(n),
            L = (0, O.Z)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": A.intl.string(A.t["1NBjqb"]),
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
                        children: [T, D, N, C, R, I, a],
                    },
                    "thread-actions",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [E, k],
                    },
                    "notifications",
                ),
                (0, r.jsx)(i.kSQ, { children: G }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [U, w, x, L, M],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(i.kSQ, { children: S }, "developer-actions"),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU],
);
