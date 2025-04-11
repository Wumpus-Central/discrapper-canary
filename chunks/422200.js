n.d(t, { default: () => E });
var i = n(200651);
n(192379);
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
    b = n(251746),
    p = n(193987),
    g = n(933793),
    Z = n(13736),
    O = n(732393),
    N = n(214906),
    _ = n(612856),
    m = n(137591),
    y = n(388032);
let E = (0, l.Z)(
    function (e) {
        let { channel: t, onSelect: n } = e,
            l = (0, c.Z)(t),
            o = (0, h.Z)(t),
            E = (0, N.Z)(t),
            C = (0, s.Z)(t),
            j = (0, p.Z)(t),
            A = (0, f.Z)(t),
            P = (0, d.Z)({
                id: t.id,
                label: y.NW.string(y.t.DQ797u)
            }),
            W = (0, v.Z)(t, 'Context Menu'),
            U = (0, g.Z)(t),
            R = (0, _.Z)(t),
            S = (0, Z.Z)(t),
            T = (0, O.Z)(t.id),
            k = (0, b.Z)(t),
            x = (0, m.Z)(t),
            D = (0, u.l)(t),
            I = (0, u.P)(t);
        return (0, i.jsxs)(r.v2r, {
            navId: 'thread-context',
            onClose: a.Zy,
            'aria-label': y.NW.string(y.t['1NBjqa']),
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
                        children: [W, k, C, j, S, T, l]
                    },
                    'thread-actions'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [E, R]
                    },
                    'notifications'
                ),
                (0, i.jsx)(r.kSQ, { children: I }),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [x, U, A]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.kSQ, { children: P }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
