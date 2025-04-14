t.d(n, { default: () => f });
var r = t(200651);
t(192379);
var c = t(481060),
    i = t(239091),
    l = t(108843),
    o = t(100527),
    a = t(299206),
    u = t(323597),
    s = t(852245),
    b = t(367722),
    d = t(388032);
let f = (0, l.Z)(
    function (e) {
        let { channel: n, guild: t, onSelect: l } = e,
            o = (0, s.Z)(n),
            f = (0, b.Z)(n, t),
            p = (0, u.Z)(n),
            E = (0, a.Z)({
                id: n.id,
                label: d.NW.string(d.t.gFHI3t)
            });
        return (0, r.jsxs)(c.v2r, {
            navId: 'channel-context',
            onClose: i.Zy,
            'aria-label': d.NW.string(d.t.Xm41aW),
            onSelect: l,
            children: [(0, r.jsx)(c.kSQ, { children: o }), (0, r.jsx)(c.kSQ, { children: f }), (0, r.jsx)(c.kSQ, { children: p }), (0, r.jsx)(c.kSQ, { children: E })]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_STORE_CHANNEL_MENU]
);
