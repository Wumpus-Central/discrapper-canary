t.d(n, { default: () => E });
var i = t(951288);
t(647438);
var r = t(481060),
    l = t(239091),
    a = t(108843),
    o = t(100527),
    s = t(299206),
    c = t(895563),
    u = t(32750),
    d = t(109764),
    f = t(323597),
    h = t(461535),
    p = t(438536),
    g = t(251746),
    O = t(193987),
    b = t(933793),
    v = t(765483),
    y = t(13736),
    Z = t(732393),
    m = t(71991),
    _ = t(612856),
    j = t(137591),
    C = t(388032);
let E = (0, a.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            a = (0, d.Z)(n),
            o = (0, h.Z)(n),
            E = (0, m.Z)(n),
            P = (0, u.Z)(n),
            N = (0, O.Z)(n),
            A = (0, f.Z)(n),
            R = (0, s.Z)({
                id: n.id,
                label: C.intl.string(C.t.DQ797u),
            }),
            T = (0, p.Z)(n, "Context Menu"),
            S = (0, b.Z)(n),
            I = (0, _.Z)(n),
            U = (0, y.Z)(n),
            w = (0, Z.Z)(n.id),
            D = (0, g.Z)(n),
            x = (0, j.Z)(n),
            M = (0, c.l)(n),
            k = (0, c.P)(n),
            G = (0, v.Z)(n);
        return (0, i.jsxs)(r.v2r, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": C.intl.string(C.t["1NBjqa"]),
            onSelect: t,
            children: [
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [o, M],
                    },
                    "mark-as-read-or-favorite",
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [T, D, P, N, U, w, a],
                    },
                    "thread-actions",
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [E, I],
                    },
                    "notifications",
                ),
                (0, i.jsx)(r.kSQ, { children: k }),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [x, S, A, G],
                    },
                    "admin-actions",
                ),
                (0, i.jsx)(r.kSQ, { children: R }, "developer-actions"),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU],
);
