t.d(n, { default: () => f });
var r = t(200651);
t(192379);
var l = t(481060),
    c = t(239091),
    i = t(108843),
    o = t(100527),
    a = t(299206),
    u = t(323597),
    s = t(852245),
    b = t(367722),
    d = t(388032);
let f = (0, i.Z)(
    function (e) {
        let { channel: n, guild: t, onSelect: i } = e,
            o = (0, s.Z)(n),
            f = (0, b.Z)(n, t),
            E = (0, u.Z)(n),
            O = (0, a.Z)({
                id: n.id,
                label: d.NW.string(d.t.gFHI3t)
            });
        return (0, r.jsxs)(l.v2r, {
            navId: 'channel-context',
            onClose: c.Zy,
            'aria-label': d.NW.string(d.t.Xm41aW),
            onSelect: i,
            children: [(0, r.jsx)(l.kSQ, { children: o }), (0, r.jsx)(l.kSQ, { children: f }), (0, r.jsx)(l.kSQ, { children: E }), (0, r.jsx)(l.kSQ, { children: O })]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_STORE_CHANNEL_MENU]
);
