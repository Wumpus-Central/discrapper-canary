t.d(e, { default: () => N });
var l = t(200651);
t(192379);
var i = t(481060),
    a = t(239091),
    c = t(108843),
    r = t(100527),
    s = t(299206),
    o = t(323597),
    u = t(852245),
    d = t(367722),
    E = t(388032);
let N = (0, c.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: c } = n,
            r = (0, u.Z)(e),
            N = (0, d.Z)(e, t),
            Z = (0, o.Z)(e),
            h = (0, s.Z)({
                id: e.id,
                label: E.intl.string(E.t.gFHI3t)
            });
        return (0, l.jsxs)(i.v2r, {
            navId: 'channel-context',
            onClose: a.Zy,
            'aria-label': E.intl.string(E.t.Xm41aW),
            onSelect: c,
            children: [(0, l.jsx)(i.kSQ, { children: r }), (0, l.jsx)(i.kSQ, { children: N }), (0, l.jsx)(i.kSQ, { children: Z }), (0, l.jsx)(i.kSQ, { children: h })]
        });
    },
    [r.Z.CONTEXT_MENU, r.Z.CHANNEL_LIST_STORE_CHANNEL_MENU]
);
