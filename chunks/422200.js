t.d(n, { default: () => m });
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
    j = t(193987),
    O = t(933793),
    Z = t(13736),
    y = t(732393),
    g = t(214906),
    v = t(612856),
    P = t(137591),
    _ = t(388032);
let m = (0, a.Z)(
    function (e) {
        let { channel: n, onSelect: t } = e,
            a = (0, d.Z)(n),
            o = (0, h.Z)(n),
            m = (0, g.Z)(n),
            x = (0, u.Z)(n),
            E = (0, j.Z)(n),
            w = (0, f.Z)(n),
            C = (0, c.Z)({
                id: n.id,
                label: _.intl.string(_.t.DQ797u)
            }),
            N = (0, b.Z)(n, 'Context Menu'),
            k = (0, O.Z)(n),
            S = (0, v.Z)(n),
            A = (0, Z.Z)(n),
            D = (0, y.Z)(n.id),
            T = (0, p.Z)(n),
            U = (0, P.Z)(n),
            M = (0, s.l)(n),
            G = (0, s.P)(n);
        return (0, r.jsxs)(i.v2r, {
            navId: 'thread-context',
            onClose: l.Zy,
            'aria-label': _.intl.string(_.t['1NBjqa']),
            onSelect: t,
            children: [
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [o, M]
                    },
                    'mark-as-read-or-favorite'
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [N, T, x, E, A, D, a]
                    },
                    'thread-actions'
                ),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [m, S]
                    },
                    'notifications'
                ),
                (0, r.jsx)(i.kSQ, { children: G }),
                (0, r.jsxs)(
                    i.kSQ,
                    {
                        children: [U, k, w]
                    },
                    'admin-actions'
                ),
                (0, r.jsx)(i.kSQ, { children: C }, 'developer-actions')
            ]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_THREAD_MENU]
);
