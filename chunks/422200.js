e.d(n, { default: () => y });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(239091),
    a = e(108843),
    o = e(100527),
    s = e(299206),
    d = e(895563),
    u = e(32750),
    c = e(109764),
    f = e(323597),
    h = e(461535),
    v = e(438536),
    g = e(251746),
    Z = e(193987),
    b = e(933793),
    p = e(765483),
    m = e(13736),
    O = e(732393),
    _ = e(214906),
    j = e(612856),
    C = e(137591),
    E = e(388032);
let y = (0, a.Z)(
    function (t) {
        let { channel: n, onSelect: e } = t,
            a = (0, c.Z)(n),
            o = (0, h.Z)(n),
            y = (0, _.Z)(n),
            N = (0, u.Z)(n),
            P = (0, Z.Z)(n),
            A = (0, f.Z)(n),
            T = (0, s.Z)({
                id: n.id,
                label: E.intl.string(E.t.DQ797u)
            }),
            R = (0, v.Z)(n, 'Context Menu'),
            x = (0, b.Z)(n),
            S = (0, j.Z)(n),
            I = (0, m.Z)(n),
            k = (0, O.Z)(n.id),
            M = (0, g.Z)(n),
            U = (0, C.Z)(n),
            F = (0, d.l)(n),
            w = (0, d.P)(n),
            D = (0, p.Z)(n);
        return (0, i.jsxs)(r.v2r, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': E.intl.string(E.t['1NBjqa']),
            onSelect: e,
            children: [
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [o, F]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [R, M, N, P, I, k, a]
                    },
                    'thread-actions'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [y, S]
                    },
                    'notifications'
                ),
                (0, i.jsx)(r.kSQ, { children: w }),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [U, x, A, D]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.kSQ, { children: T }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
