t.r(e);
var l = t(200651);
t(192379);
var a = t(481060),
    i = t(239091),
    r = t(108843),
    u = t(100527),
    c = t(299206),
    o = t(398048),
    d = t(3689),
    s = t(323597),
    E = t(852245),
    _ = t(367722),
    Z = t(388032);
e.default = (0, r.Z)(
    function (n) {
        let { channel: e, guild: t, onSelect: r } = n,
            u = (0, E.Z)(e),
            f = (0, _.Z)(e, t),
            h = (0, o.Z)(e, t),
            N = (0, d.Z)(e, t),
            A = (0, s.Z)(e),
            p = (0, c.Z)({
                id: e.id,
                label: Z.intl.string(Z.t.gFHI3t)
            });
        return (0, l.jsxs)(a.Menu, {
            navId: 'channel-context',
            onClose: i.Zy,
            'aria-label': Z.intl.string(Z.t.Xm41aW),
            onSelect: r,
            children: [
                (0, l.jsx)(a.MenuGroup, { children: u }),
                (0, l.jsxs)(a.MenuGroup, {
                    children: [f, h, N]
                }),
                (0, l.jsx)(a.MenuGroup, { children: A }),
                (0, l.jsx)(a.MenuGroup, { children: p })
            ]
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_ACTIVITY_FEED_VOICE_MENU]
);
