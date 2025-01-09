t.r(e);
var i = t(200651);
t(192379);
var r = t(481060),
    l = t(239091),
    a = t(108843),
    u = t(100527),
    d = t(299206),
    s = t(916069),
    o = t(697229),
    c = t(212205),
    Z = t(423589),
    g = t(411567),
    h = t(672824),
    f = t(3689),
    M = t(323597),
    _ = t(852245),
    p = t(461535),
    C = t(776568),
    x = t(218035),
    I = t(775666),
    j = t(442754),
    m = t(623483),
    E = t(388032);
function G(n) {
    let { channel: e, onSelect: t } = n,
        a = (0, p.Z)(e),
        u = (0, C.ZP)(e),
        s = (0, x.Z)(e),
        f = (0, h.Z)(e),
        M = (0, g.Z)(e),
        _ = (0, c.Z)(e),
        j = (0, o.Z)(e),
        G = (0, m.Z)(e),
        v = (0, d.Z)({
            id: e.id,
            label: E.intl.string(E.t.gFHI3t)
        }),
        y = (0, Z.Mn)('ChannelCategoryFavoritesMenu'),
        b = (0, I.ZP)(e);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': E.intl.string(E.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsxs)(r.MenuGroup, {
                children: [a, j, _]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [u, y ? b : s]
            }),
            (0, i.jsxs)(r.MenuGroup, {
                children: [f, M]
            }),
            (0, i.jsx)(r.MenuGroup, { children: G }),
            (0, i.jsx)(r.MenuGroup, { children: v })
        ]
    });
}
function v(n) {
    let { channel: e, guild: t, onSelect: a } = n,
        u = (0, p.Z)(e),
        s = (0, C.ZP)(e),
        o = (0, x.Z)(e),
        m = (0, h.Z)(e),
        G = (0, g.Z)(e),
        v = (0, _.Z)(e),
        y = (0, c.Z)(e),
        b = (0, f.Z)(e, t),
        O = (0, M.Z)(e),
        P = (0, d.Z)({
            id: e.id,
            label: E.intl.string(E.t.gFHI3t)
        }),
        A = (0, j.Z)(e),
        N = (0, Z.Mn)('ChannelCategoryNormalMenu'),
        T = (0, I.ZP)(e);
    return (0, i.jsxs)(r.Menu, {
        navId: 'channel-context',
        onClose: l.Zy,
        'aria-label': E.intl.string(E.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsx)(r.MenuGroup, { children: u }, 'mark-as-read'),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [A, m, G]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [s, N ? T : o]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                r.MenuGroup,
                {
                    children: [v, y, b, O]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.MenuGroup, { children: P }, 'developer-actions')
        ]
    });
}
e.default = (0, a.Z)(
    function (n) {
        return (0, s.Z)() ? (0, i.jsx)(G, { ...n }) : (0, i.jsx)(v, { ...n });
    },
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_CATEGORY_MENU]
);
