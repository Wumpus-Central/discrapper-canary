t.d(n, { default: () => C });
var i = t(255367);
t(73800);
var r = t(481060),
    a = t(239091),
    l = t(108843),
    o = t(100527),
    d = t(299206),
    u = t(895563),
    s = t(32750),
    c = t(109764),
    f = t(323597),
    h = t(461535),
    v = t(438536),
    g = t(251746),
    p = t(193987),
    b = t(933793),
    Z = t(13736),
    _ = t(732393),
    O = t(214906),
    m = t(612856),
    E = t(137591),
    y = t(388032);
let C = (0, l.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            l = (0, c.Z)(n),
            o = (0, h.Z)(n),
            C = (0, O.Z)(n),
            j = (0, s.Z)(n),
            P = (0, p.Z)(n),
            A = (0, f.Z)(n),
            R = (0, d.Z)({
                id: n.id,
                label: y.intl.string(y.t.DQ797u)
            }),
            N = (0, v.Z)(n, 'Context Menu'),
            U = (0, b.Z)(n),
            S = (0, m.Z)(n),
            T = (0, Z.Z)(n),
            k = (0, _.Z)(n.id),
            I = (0, g.Z)(n),
            x = (0, E.Z)(n),
            D = (0, u.l)(n),
            M = (0, u.P)(n);
        return (0, i.jsxs)(r.v2r, {
            navId: 'thread-context',
            onClose: a.Zy,
            'aria-label': y.intl.string(y.t['1NBjqa']),
            onSelect: t,
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
                        children: [N, I, j, P, T, k, l]
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
                        children: [x, U, A]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.kSQ, { children: R }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
