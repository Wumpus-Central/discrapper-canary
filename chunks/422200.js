n.d(t, { default: () => C });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(239091),
    a = n(108843),
    o = n(100527),
    s = n(299206),
    d = n(895563),
    u = n(32750),
    c = n(109764),
    f = n(323597),
    h = n(461535),
    g = n(438536),
    v = n(251746),
    b = n(193987),
    Z = n(933793),
    p = n(765483),
    m = n(13736),
    O = n(732393),
    _ = n(214906),
    j = n(612856),
    E = n(137591),
    y = n(388032);
let C = (0, a.Z)(
    function (e) {
        let { channel: t, onSelect: n } = e,
            a = (0, c.Z)(t),
            o = (0, h.Z)(t),
            C = (0, _.Z)(t),
            P = (0, u.Z)(t),
            N = (0, b.Z)(t),
            A = (0, f.Z)(t),
            T = (0, s.Z)({
                id: t.id,
                label: y.intl.string(y.t.DQ797u)
            }),
            R = (0, g.Z)(t, 'Context Menu'),
            x = (0, Z.Z)(t),
            S = (0, j.Z)(t),
            k = (0, m.Z)(t),
            M = (0, O.Z)(t.id),
            I = (0, v.Z)(t),
            U = (0, E.Z)(t),
            D = (0, d.l)(t),
            w = (0, d.P)(t),
            F = (0, p.Z)(t);
        return (0, i.jsxs)(r.v2r, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': y.intl.string(y.t['1NBjqa']),
            onSelect: n,
            children: [
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [o, D]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [R, I, P, N, k, M, a]
                    },
                    'thread-actions'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [C, S]
                    },
                    'notifications'
                ),
                (0, i.jsx)(r.kSQ, { children: w }),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [U, x, A, F]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.kSQ, { children: T }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
