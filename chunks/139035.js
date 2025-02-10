e.d(t, { default: () => I });
var i = e(200651);
e(192379);
var l = e(481060),
    a = e(239091),
    r = e(108843),
    s = e(100527),
    d = e(299206),
    c = e(916069),
    o = e(697229),
    u = e(212205),
    Z = e(423589),
    h = e(411567),
    g = e(672824),
    _ = e(3689),
    f = e(323597),
    C = e(852245),
    x = e(461535),
    j = e(776568),
    v = e(218035),
    p = e(775666),
    N = e(442754),
    E = e(623483),
    y = e(388032);
function b(n) {
    let { channel: t, onSelect: e } = n,
        r = (0, x.Z)(t),
        s = (0, j.ZP)(t),
        c = (0, v.Z)(t),
        _ = (0, g.Z)(t),
        f = (0, h.Z)(t),
        C = (0, u.Z)(t),
        N = (0, o.Z)(t),
        b = (0, E.Z)(t),
        O = (0, d.Z)({
            id: t.id,
            label: y.intl.string(y.t['2visCw'])
        }),
        I = (0, Z.Mn)('ChannelCategoryFavoritesMenu'),
        P = (0, p.ZP)(t);
    return (0, i.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': y.intl.string(y.t.Xm41aW),
        onSelect: e,
        children: [
            (0, i.jsxs)(l.kSQ, {
                children: [r, N, C]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [s, I ? P : c]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [_, f]
            }),
            (0, i.jsx)(l.kSQ, { children: b }),
            (0, i.jsx)(l.kSQ, { children: O })
        ]
    });
}
function O(n) {
    let { channel: t, guild: e, onSelect: r } = n,
        s = (0, x.Z)(t),
        c = (0, j.ZP)(t),
        o = (0, v.Z)(t),
        E = (0, g.Z)(t),
        b = (0, h.Z)(t),
        O = (0, C.Z)(t),
        I = (0, u.Z)(t),
        P = (0, _.Z)(t, e),
        k = (0, f.Z)(t),
        m = (0, d.Z)({
            id: t.id,
            label: y.intl.string(y.t['2visCw'])
        }),
        G = (0, N.Z)(t),
        M = (0, Z.Mn)('ChannelCategoryNormalMenu'),
        A = (0, p.ZP)(t);
    return (0, i.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': y.intl.string(y.t.Xm41aW),
        onSelect: r,
        children: [
            (0, i.jsx)(l.kSQ, { children: s }, 'mark-as-read'),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [G, E, b]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [c, M ? A : o]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [O, I, P, k]
                },
                'admin-actions'
            ),
            (0, i.jsx)(l.kSQ, { children: m }, 'developer-actions')
        ]
    });
}
let I = (0, r.Z)(
    function (n) {
        return (0, c.Z)() ? (0, i.jsx)(b, { ...n }) : (0, i.jsx)(O, { ...n });
    },
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_CATEGORY_MENU]
);
