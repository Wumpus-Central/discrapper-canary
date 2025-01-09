t.r(e);
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    u = t(108843),
    a = t(100527),
    c = t(299206),
    o = t(323597),
    s = t(852245),
    d = t(367722),
    E = t(388032);
e.default = (0, u.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: u } = n,
            a = (0, s.Z)(e),
            Z = (0, d.Z)(e, t),
            N = (0, o.Z)(e),
            _ = (0, c.Z)({
                id: e.id,
                label: E.intl.string(E.t.gFHI3t)
            });
        return (0, l.jsxs)(i.Menu, {
            navId: 'channel-context',
            onClose: r.Zy,
            'aria-label': E.intl.string(E.t.Xm41aW),
            onSelect: u,
            children: [(0, l.jsx)(i.MenuGroup, { children: a }), (0, l.jsx)(i.MenuGroup, { children: Z }), (0, l.jsx)(i.MenuGroup, { children: N }), (0, l.jsx)(i.MenuGroup, { children: _ })]
        });
    },
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_STORE_CHANNEL_MENU]
);
