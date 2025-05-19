t.d(n, { default: () => x });
var r = t(255367);
t(73800);
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
    O = t(193987),
    j = t(933793),
    Z = t(13736),
    y = t(732393),
    g = t(214906),
    v = t(612856),
    P = t(137591),
    m = t(388032);
let x = (0, a.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            a = (0, d.Z)(n),
            o = (0, h.Z)(n),
            x = (0, g.Z)(n),
            w = (0, u.Z)(n),
            k = (0, O.Z)(n),
            S = (0, f.Z)(n),
            _ = (0, c.Z)({
                id: n.id,
                label: m.intl.string(m.t.DQ797u)
            }),
            C = (0, b.Z)(n, 'Context Menu'),
            E = (0, j.Z)(n),
            D = (0, v.Z)(n),
            N = (0, Z.Z)(n),
            G = (0, y.Z)(n.id),
            U = (0, p.Z)(n),
            M = (0, P.Z)(n),
            Q = (0, s.l)(n),
            T = (0, s.P)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': m.intl.string(m.t['1NBjqa']),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [o, Q]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [C, U, w, k, N, G, a]
                    },
                    'thread-actions'
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [x, D]
                    },
                    'notifications'
                ),
                (0, r.jsx)(i.kSQ, { children: T }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [M, E, S]
                    },
                    'admin-actions'
                ),
                (0, r.jsx)(i.kSQ, { children: _ }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
