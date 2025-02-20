t.d(n, { default: () => d });
var r = t(200651);
t(192379);
var c = t(481060),
    l = t(239091),
    a = t(108843),
    i = t(100527),
    o = t(299206),
    u = t(323597),
    s = t(852245),
    b = t(367722),
    f = t(388032);
let d = (0, a.Z)(
    function (e) {
        let { channel: n, guild: t, onSelect: a } = e,
            i = (0, s.Z)(n),
            d = (0, b.Z)(n, t),
            O = (0, u.Z)(n),
            p = (0, o.Z)({
                id: n.id,
                label: f.NW.string(f.t.gFHI3t)
            });
        return (0, r.jsxs)(c.v2r, {
            navId: 'channel-context',
            onClose: l.Zy,
            'aria-label': f.NW.string(f.t.Xm41aW),
            onSelect: a,
            children: [(0, r.jsx)(c.kSQ, { children: i }), (0, r.jsx)(c.kSQ, { children: d }), (0, r.jsx)(c.kSQ, { children: O }), (0, r.jsx)(c.kSQ, { children: p })]
        });
    },
    [i.Z.CONTEXT_MENU, i.Z.CHANNEL_LIST_STORE_CHANNEL_MENU]
);
