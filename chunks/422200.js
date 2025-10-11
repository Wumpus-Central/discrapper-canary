t.d(n, { default: () => E });
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
    v = t(13736),
    g = t(732393),
    m = t(214906),
    y = t(612856),
    _ = t(137591),
    P = t(388032);
let E = (0, o.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            o = (0, d.Z)(n),
            a = (0, h.Z)(n),
            E = (0, m.Z)(n),
            A = (0, s.Z)(n),
            N = (0, Z.Z)(n),
            x = (0, f.Z)(n),
            C = (0, c.Z)({
                id: n.id,
                label: P.intl.string(P.t.DQ797u),
            }),
            w = (0, b.Z)(n, "Context Menu"),
            S = (0, j.Z)(n),
            M = (0, y.Z)(n),
            T = (0, v.Z)(n),
            k = (0, g.Z)(n.id),
            R = (0, p.Z)(n),
            D = (0, _.Z)(n),
            U = (0, u.l)(n),
            I = (0, u.P)(n),
            G = (0, O.Z)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": P.intl.string(P.t["1NBjqa"]),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [a, U],
                    },
                    "mark-as-read-or-favorite",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [w, R, A, N, T, k, o],
                    },
                    "thread-actions",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [E, M],
                    },
                    "notifications",
                ),
                (0, r.jsx)(i.kSQ, { children: I }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [D, S, x, G],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(i.kSQ, { children: C }, "developer-actions"),
            ],
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_THREAD_MENU],
);
