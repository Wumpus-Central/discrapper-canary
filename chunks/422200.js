t.d(n, { default: () => N });
var r = t(54381);
t(473749);
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
    j = t(193987),
    Z = t(933793),
    O = t(765483),
    y = t(192127),
    g = t(13736),
    v = t(732393),
    m = t(214906),
    P = t(612856),
    _ = t(137591),
    x = t(388032);
let N = (0, a.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            a = (0, d.Z)(n),
            o = (0, h.Z)(n),
            N = (0, m.Z)(n),
            w = (0, u.Z)(n),
            C = (0, j.Z)(n),
            E = (0, f.Z)(n),
            S = (0, c.Z)({
                id: n.id,
                label: x.intl.string(x.t.DQ797g),
            }),
            k = (0, b.Z)(n, "Context Menu"),
            A = (0, Z.Z)(n),
            T = (0, y.Z)(n),
            D = (0, P.Z)(n),
            M = (0, g.Z)(n),
            U = (0, v.Z)(n.id),
            G = (0, p.Z)(n),
            I = (0, _.Z)(n),
            L = (0, s.l)(n),
            Q = (0, s.P)(n),
            R = (0, O.Z)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: "thread-context",
            onClose: l.Zy,
            "aria-label": x.intl.string(x.t["1NBjqb"]),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [o, L],
                    },
                    "mark-as-read-or-favorite",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [k, G, w, C, M, U, a],
                    },
                    "thread-actions",
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [N, D],
                    },
                    "notifications",
                ),
                (0, r.jsx)(i.kSQ, { children: Q }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [I, A, E, R, T],
                    },
                    "admin-actions",
                ),
                (0, r.jsx)(i.kSQ, { children: S }, "developer-actions"),
            ],
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU],
);
