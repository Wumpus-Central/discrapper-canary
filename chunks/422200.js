n.d(e, { default: () => P });
var i = n(255367);
n(73800);
var r = n(481060),
    l = n(239091),
    a = n(108843),
    o = n(100527),
    c = n(299206),
    s = n(895563),
    u = n(32750),
    d = n(109764),
    f = n(323597),
    b = n(461535),
    h = n(438536),
    g = n(251746),
    O = n(193987),
    Z = n(933793),
    p = n(13736),
    m = n(732393),
    _ = n(214906),
    j = n(612856),
    v = n(137591),
    y = n(388032);
let P = (0, a.Z)(
    function (t) {
        let { channel: e, onSelect: n } = t,
            a = (0, d.Z)(e),
            o = (0, b.Z)(e),
            P = (0, _.Z)(e),
            E = (0, u.Z)(e),
            C = (0, O.Z)(e),
            S = (0, f.Z)(e),
            x = (0, c.Z)({
                id: e.id,
                label: y.intl.string(y.t.DQ797u)
            }),
            N = (0, h.Z)(e, 'Context Menu'),
            k = (0, Z.Z)(e),
            U = (0, j.Z)(e),
            A = (0, p.Z)(e),
            D = (0, m.Z)(e.id),
            M = (0, g.Z)(e),
            w = (0, v.Z)(e),
            T = (0, s.l)(e),
            L = (0, s.P)(e);
        return (0, i.jsxs)(r.v2r, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': y.intl.string(y.t['1NBjqa']),
            onSelect: n,
            children: [
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [o, T]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [N, M, E, C, A, D, a]
                    },
                    'thread-actions'
                ),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [P, U]
                    },
                    'notifications'
                ),
                (0, i.jsx)(r.kSQ, { children: L }),
                (0, i.jsxs)(
                    r.kSQ,
                    {
                        children: [w, k, S]
                    },
                    'admin-actions'
                ),
                (0, i.jsx)(r.kSQ, { children: x }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
