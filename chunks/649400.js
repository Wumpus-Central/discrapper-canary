t.d(e, { default: () => f });
var r = t(200651);
t(192379);
var l = t(481060),
    i = t(239091),
    c = t(108843),
    o = t(100527),
    a = t(299206),
    u = t(323597),
    s = t(852245),
    b = t(367722),
    d = t(388032);
let f = (0, c.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: c } = n,
            o = (0, s.Z)(e),
            f = (0, b.Z)(e, t),
            p = (0, u.Z)(e),
            E = (0, a.Z)({
                id: e.id,
                label: d.intl.string(d.t.gFHI3t)
            });
        return (0, r.jsxs)(l.v2r, {
            navId: 'channel-context',
            onClose: i.Zy,
            'aria-label': d.intl.string(d.t.Xm41aW),
            onSelect: c,
            children: [(0, r.jsx)(l.kSQ, { children: o }), (0, r.jsx)(l.kSQ, { children: f }), (0, r.jsx)(l.kSQ, { children: p }), (0, r.jsx)(l.kSQ, { children: E })]
        });
    },
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_STORE_CHANNEL_MENU]
);
