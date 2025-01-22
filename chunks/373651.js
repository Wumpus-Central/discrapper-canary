t.r(e);
var i = t(200651);
t(192379);
var u = t(481060),
    l = t(239091),
    o = t(883385),
    r = t(108843),
    c = t(947440),
    a = t(100527),
    d = t(299206),
    s = t(916069),
    p = t(895563),
    h = t(212205),
    Z = t(478035),
    x = t(62420),
    M = t(423589),
    f = t(398048),
    j = t(109764),
    C = t(3689),
    E = t(323597),
    N = t(852245),
    _ = t(367722),
    b = t(461535),
    G = t(776568),
    P = t(218035),
    v = t(775666),
    g = t(593589),
    m = t(442754),
    A = t(981631),
    T = t(388032);
function k(n) {
    let { channel: e, onSelect: t } = n,
        o = (0, b.Z)(e),
        r = (0, j.Z)(e),
        a = (0, p.l)(e),
        s = (0, p.P)(e),
        f = (0, h.Z)(e),
        C = (0, Z.Z)(e),
        E = (0, x.Z)(e),
        _ = (0, G.ZP)(e),
        g = (0, P.Z)(e),
        m = (0, N.Z)(e),
        A = (0, d.Z)({
            id: e.id,
            label: T.intl.string(T.t.gFHI3t)
        }),
        k = (0, c.Z)(e),
        H = (0, v.ZP)(e),
        I = (0, M.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(u.Menu, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': T.intl.string(T.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(u.MenuGroup, { children: o }),
            (0, i.jsxs)(u.MenuGroup, {
                children: [C, E, f, a]
            }),
            (0, i.jsxs)(u.MenuGroup, {
                children: [_, I ? H : g]
            }),
            (0, i.jsx)(u.MenuGroup, { children: m }),
            (0, i.jsx)(u.MenuGroup, { children: k }),
            (0, i.jsx)(u.MenuGroup, { children: s }),
            (0, i.jsx)(u.MenuGroup, { children: r }),
            (0, i.jsx)(u.MenuGroup, { children: A })
        ]
    });
}
function H(n) {
    let { channel: e, guild: t, onSelect: o } = n,
        r = (0, b.Z)(e),
        a = (0, j.Z)(e),
        s = (0, p.l)(e),
        h = (0, p.P)(e),
        Z = (0, m.Z)(e),
        x = (0, G.ZP)(e),
        A = (0, N.Z)(e),
        k = (0, _.Z)(e, t),
        H = (0, f.Z)(e, t),
        I = (0, C.Z)(e, t),
        S = (0, E.Z)(e),
        w = (0, d.Z)({
            id: e.id,
            label: T.intl.string(T.t.gFHI3t)
        }),
        L = (0, c.Z)(e),
        y = (0, g.Z)(e, 'list_text_channel_context_menu'),
        O = (0, P.Z)(e),
        X = (0, v.ZP)(e),
        q = (0, M.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(u.Menu, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': T.intl.string(T.t.Xm41aW),
        onSelect: o,
        children: [
            (0, i.jsxs)(
                u.MenuGroup,
                {
                    children: [r, s]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                u.MenuGroup,
                {
                    children: [k, Z, a, y]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                u.MenuGroup,
                {
                    children: [x, q ? X : O]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                u.MenuGroup,
                {
                    children: [A, H, I, S]
                },
                'admin-actions'
            ),
            (0, i.jsx)(u.MenuGroup, { children: L }),
            (0, i.jsx)(u.MenuGroup, { children: h }),
            (0, i.jsx)(u.MenuGroup, { children: w }, 'developer-actions')
        ]
    });
}
e.default = (0, r.Z)(
    (0, o.Z)(
        function (n) {
            return (0, s.Z)() ? (0, i.jsx)(k, { ...n }) : (0, i.jsx)(H, { ...n });
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
