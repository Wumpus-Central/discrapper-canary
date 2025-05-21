n.d(t, { default: () => C });
var i = n(255367);
n(73800);
var r = n(481060),
    a = n(239091),
    l = n(108843),
    o = n(100527),
    d = n(299206),
    u = n(895563),
    s = n(32750),
    c = n(109764),
    f = n(323597),
    h = n(461535),
    v = n(438536),
    g = n(251746),
    p = n(193987),
    b = n(933793),
    Z = n(13736),
    O = n(732393),
    _ = n(214906),
    m = n(612856),
    E = n(137591),
    y = n(388032);
let C = (0, l.Z)(
    function (e) {
        let { channel: t, onSelect: n } = e,
            l = (0, c.Z)(t),
            o = (0, h.Z)(t),
            C = (0, _.Z)(t),
            j = (0, s.Z)(t),
            A = (0, p.Z)(t),
            P = (0, f.Z)(t),
            N = (0, d.Z)({
                id: t.id,
                label: y.intl.string(y.t.DQ797u)
            }),
            R = (0, v.Z)(t, 'Context Menu'),
            U = (0, b.Z)(t),
            S = (0, m.Z)(t),
            T = (0, Z.Z)(t),
            k = (0, O.Z)(t.id),
            I = (0, g.Z)(t),
            x = (0, E.Z)(t),
            D = (0, u.l)(t),
            M = (0, u.P)(t);
        return (0, i.jsxs)(r.v2r, {
            navId: 'thread-context',
            onClose: a.Zy,
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
                        children: [R, I, j, A, T, k, l]
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
                (0, i.jsx)(r.kSQ, { children: M }),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [x, U, P]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.kSQ, { children: N }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
