i.d(e, { default: () => b });
var t = i(200651);
i(192379);
var l = i(481060),
    r = i(239091),
    a = i(108843),
    d = i(100527),
    s = i(299206),
    o = i(895563),
    c = i(32750),
    u = i(109764),
    h = i(323597),
    Z = i(461535),
    f = i(438536),
    j = i(251746),
    x = i(193987),
    v = i(933793),
    _ = i(13736),
    g = i(732393),
    p = i(214906),
    k = i(612856),
    m = i(137591),
    C = i(388032);
let b = (0, a.Z)(
    function (n) {
        let { channel: e, onSelect: i } = n,
            a = (0, u.Z)(e),
            d = (0, Z.Z)(e),
            b = (0, p.Z)(e),
            P = (0, c.Z)(e),
            E = (0, x.Z)(e),
            N = (0, h.Z)(e),
            S = (0, s.Z)({
                id: e.id,
                label: C.intl.string(C.t.DQ797u)
            }),
            G = (0, f.Z)(e, 'Context Menu'),
            U = (0, v.Z)(e),
            O = (0, k.Z)(e),
            D = (0, _.Z)(e),
            M = (0, g.Z)(e.id),
            Q = (0, j.Z)(e),
            T = (0, m.Z)(e),
            y = (0, o.l)(e),
            w = (0, o.P)(e);
        return (0, t.jsxs)(l.v2r, {
            navId: 'thread-context',
            onClose: r.Zy,
            'aria-label': C.intl.string(C.t['1NBjqa']),
            onSelect: i,
            children: [
                (0, t.jsxs)(
                    l.kSQ,
                    {
                        children: [d, y]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, t.jsxs)(
                    l.kSQ,
                    {
                        children: [G, Q, P, E, D, M, a]
                    },
                    'thread-actions'
                ),
                (0, t.jsxs)(
                    l.kSQ,
                    {
                        children: [b, O]
                    },
                    'notifications'
                ),
                (0, t.jsx)(l.kSQ, { children: w }),
                (0, t.jsxs)(
                    l.kSQ,
                    {
                        children: [T, U, N]
                    },
                    'admin-actions'
                ),
                (0, t.jsx)(l.kSQ, { children: S }, 'developer-actions')
            ]
        });
    },
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_THREAD_MENU]
);
