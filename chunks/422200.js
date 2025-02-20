t.d(n, { default: () => N });
var r = t(200651);
t(192379);
var i = t(481060),
    a = t(239091),
    o = t(108843),
    l = t(100527),
    d = t(299206),
    c = t(895563),
    s = t(32750),
    u = t(109764),
    f = t(323597),
    h = t(461535),
    v = t(438536),
    p = t(251746),
    y = t(193987),
    Z = t(933793),
    O = t(13736),
    b = t(732393),
    C = t(214906),
    E = t(612856),
    _ = t(137591),
    j = t(388032);
let N = (0, o.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            o = (0, u.Z)(n),
            l = (0, h.Z)(n),
            N = (0, C.Z)(n),
            g = (0, s.Z)(n),
            A = (0, y.Z)(n),
            m = (0, f.Z)(n),
            P = (0, d.Z)({
                id: n.id,
                label: j.NW.string(j.t.DQ797u)
            }),
            I = (0, v.Z)(n, 'Context Menu'),
            T = (0, Z.Z)(n),
            R = (0, E.Z)(n),
            U = (0, O.Z)(n),
            k = (0, b.Z)(n.id),
            F = (0, p.Z)(n),
            S = (0, _.Z)(n),
            x = (0, c.l)(n),
            w = (0, c.P)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: 'thread-context',
            onClose: a.Zy,
            'aria-label': j.NW.string(j.t['1NBjqa']),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [l, x]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [I, F, g, A, U, k, o]
                    },
                    'thread-actions'
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [N, R]
                    },
                    'notifications'
                ),
                (0, r.jsx)(i.kSQ, { children: w }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [S, T, m]
                    },
                    'admin-actions'
                ),
                (0, r.jsx)(i.kSQ, { children: P }, 'developer-actions')
            ]
        });
    },
    [l.Z.CONTEXT_MENU, l.Z.CHANNEL_LIST_THREAD_MENU]
);
