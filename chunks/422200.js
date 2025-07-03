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
    p = n(13736),
    m = n(732393),
    O = n(214906),
    _ = n(612856),
    j = n(137591),
    y = n(388032);
let C = (0, a.Z)(
    function (e) {
        let { channel: t, onSelect: n } = e,
            a = (0, c.Z)(t),
            o = (0, h.Z)(t),
            C = (0, O.Z)(t),
            E = (0, u.Z)(t),
            P = (0, b.Z)(t),
            N = (0, f.Z)(t),
            A = (0, s.Z)({
                id: t.id,
                label: y.intl.string(y.t.DQ797u)
            }),
            T = (0, g.Z)(t, 'Context Menu'),
            x = (0, Z.Z)(t),
            R = (0, _.Z)(t),
            S = (0, p.Z)(t),
            k = (0, m.Z)(t.id),
            U = (0, v.Z)(t),
            M = (0, j.Z)(t),
            w = (0, d.l)(t),
            D = (0, d.P)(t);
        return (0, i.jsxs)(r.v2r, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': y.intl.string(y.t['1NBjqa']),
            onSelect: n,
            children: [
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [o, w]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [T, U, E, P, S, k, a]
                    },
                    'thread-actions'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [C, R]
                    },
                    'notifications'
                ),
                (0, i.jsx)(r.kSQ, { children: D }),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [M, x, N]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.kSQ, { children: A }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
