t.r(e);
var l = t(200651);
t(192379);
var i = t(481060),
    a = t(239091),
    u = t(883385),
    r = t(108843),
    o = t(947440),
    d = t(100527),
    c = t(299206),
    s = t(916069),
    h = t(895563),
    p = t(212205),
    Z = t(478035),
    f = t(62420),
    C = t(423589),
    x = t(398048),
    m = t(109764),
    g = t(3689),
    E = t(323597),
    _ = t(852245),
    M = t(367722),
    I = t(461535),
    G = t(776568),
    P = t(218035),
    T = t(775666),
    j = t(593589),
    L = t(442754),
    N = t(981631),
    O = t(388032);
function S(n) {
    let { channel: e, onSelect: t } = n,
        u = (0, I.Z)(e),
        r = (0, m.Z)(e),
        d = (0, h.l)(e),
        s = (0, h.P)(e),
        x = (0, p.Z)(e),
        g = (0, Z.Z)(e),
        E = (0, f.Z)(e),
        M = (0, G.ZP)(e),
        j = (0, P.Z)(e),
        L = (0, _.Z)(e),
        N = (0, c.Z)({
            id: e.id,
            label: O.intl.string(O.t.gFHI3t)
        }),
        S = (0, o.Z)(e),
        b = (0, T.ZP)(e),
        v = (0, C.Mn)('ChannelContextFavoritesMenu');
    return (0, l.jsxs)(i.Menu, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': O.intl.string(O.t.Xm41aW),
        onSelect: t,
        children: [
            (0, l.jsx)(i.MenuGroup, { children: u }),
            (0, l.jsxs)(i.MenuGroup, {
                children: [g, E, x, d]
            }),
            (0, l.jsxs)(i.MenuGroup, {
                children: [M, v ? b : j]
            }),
            (0, l.jsx)(i.MenuGroup, { children: L }),
            (0, l.jsx)(i.MenuGroup, { children: S }),
            (0, l.jsx)(i.MenuGroup, { children: s }),
            (0, l.jsx)(i.MenuGroup, { children: r }),
            (0, l.jsx)(i.MenuGroup, { children: N })
        ]
    });
}
function b(n) {
    let { channel: e, guild: t, onSelect: u } = n,
        r = (0, I.Z)(e),
        d = (0, m.Z)(e),
        s = (0, h.l)(e),
        p = (0, h.P)(e),
        Z = (0, L.Z)(e),
        f = (0, G.ZP)(e),
        N = (0, _.Z)(e),
        S = (0, M.Z)(e, t),
        b = (0, x.Z)(e, t),
        v = (0, g.Z)(e, t),
        U = (0, E.Z)(e),
        A = (0, c.Z)({
            id: e.id,
            label: O.intl.string(O.t.gFHI3t)
        }),
        y = (0, o.Z)(e),
        V = (0, j.Z)(e, 'list_text_channel_context_menu'),
        H = (0, P.Z)(e),
        w = (0, T.ZP)(e),
        k = (0, C.Mn)('ChannelContextMenuNormal');
    return (0, l.jsxs)(i.Menu, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': O.intl.string(O.t.Xm41aW),
        onSelect: u,
        children: [
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [r, s]
                },
                'mark-as-read-or-favorite'
            ),
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [S, Z, d, V]
                },
                'channel-actions'
            ),
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [f, k ? w : H]
                },
                'notifications'
            ),
            (0, l.jsxs)(
                i.MenuGroup,
                {
                    children: [N, b, v, U]
                },
                'admin-actions'
            ),
            (0, l.jsx)(i.MenuGroup, { children: y }),
            (0, l.jsx)(i.MenuGroup, { children: p }),
            (0, l.jsx)(i.MenuGroup, { children: A }, 'developer-actions')
        ]
    });
}
e.default = (0, r.Z)(
    (0, u.Z)(
        function (n) {
            return (0, s.Z)() ? (0, l.jsx)(S, { ...n }) : (0, l.jsx)(b, { ...n });
        },
        { object: N.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
