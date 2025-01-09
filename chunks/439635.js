e.r(t);
var i = e(200651);
e(192379);
var l = e(481060),
    a = e(239091),
    r = e(108843),
    u = e(100527),
    o = e(299206),
    c = e(423589),
    d = e(398048),
    s = e(315732),
    p = e(3689),
    _ = e(323597),
    f = e(852245),
    E = e(367722),
    Z = e(776568),
    h = e(218035),
    g = e(775666),
    M = e(593589),
    C = e(442754),
    x = e(981631),
    I = e(388032);
t.default = (0, r.Z)(
    function (n) {
        let { channel: t, guild: e, includeTopic: r = !1, onSelect: u } = n,
            N = (0, C.Z)(t),
            P = (0, Z.ZP)(t),
            b = (0, h.Z)(t),
            j = (0, s.Z)(t),
            T = (0, f.Z)(t),
            v = (0, E.Z)(t, e),
            A = (0, d.Z)(t, e),
            G = (0, p.Z)(t, e, x.d4z.GUILD_TEXT),
            m = (0, p.Z)(t, e, x.d4z.GUILD_VOICE),
            y = (0, _.Z)(t),
            L = (0, o.Z)({
                id: t.id,
                label: I.intl.string(I.t.gFHI3t)
            }),
            O = (0, M.Z)(t, 'title_context_menu'),
            U = (0, c.Mn)('ChannelTitleContextMenu'),
            S = (0, g.ZP)(t);
        return (0, i.jsxs)(l.Menu, {
            navId: 'channel-context',
            onClose: a.Zy,
            'aria-label': I.intl.string(I.t.Xm41aW),
            onSelect: u,
            children: [
                (0, i.jsx)(l.MenuGroup, { children: N }),
                (0, i.jsx)(l.MenuGroup, { children: P }),
                (0, i.jsxs)(l.MenuGroup, {
                    children: [r ? j : U ? S : b, T]
                }),
                (0, i.jsxs)(l.MenuGroup, {
                    children: [v, A, G, m]
                }),
                (0, i.jsx)(l.MenuGroup, { children: O }),
                (0, i.jsx)(l.MenuGroup, { children: y }),
                (0, i.jsx)(l.MenuGroup, { children: L })
            ]
        });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_TITLE_MENU]
);
