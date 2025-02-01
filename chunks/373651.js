t.d(n, { default: () => y });
var i = t(200651);
t(192379);
var o = t(481060),
    a = t(239091),
    l = t(883385),
    r = t(108843),
    c = t(947440),
    d = t(100527),
    _ = t(299206),
    u = t(916069),
    s = t(895563),
    p = t(212205),
    b = t(478035),
    m = t(62420),
    h = t(423589),
    x = t(398048),
    f = t(109764),
    C = t(3689),
    Z = t(323597),
    I = t(852245),
    g = t(367722),
    k = t(461535),
    S = t(776568),
    v = t(218035),
    E = t(775666),
    L = t(593589),
    T = t(442754),
    P = t(981631),
    j = t(388032);
function w(e) {
    let { channel: n, onSelect: t } = e,
        l = (0, k.Z)(n),
        r = (0, f.Z)(n),
        d = (0, s.l)(n),
        u = (0, s.P)(n),
        x = (0, p.Z)(n),
        C = (0, b.Z)(n),
        Z = (0, m.Z)(n),
        g = (0, S.ZP)(n),
        L = (0, v.Z)(n),
        T = (0, I.Z)(n),
        P = (0, _.Z)({
            id: n.id,
            label: j.intl.string(j.t.gFHI3t)
        }),
        w = (0, c.Z)(n),
        A = (0, E.ZP)(n),
        y = (0, h.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': j.intl.string(j.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(o.kSQ, { children: l }),
            (0, i.jsxs)(o.kSQ, {
                children: [C, Z, x, d]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [g, y ? A : L]
            }),
            (0, i.jsx)(o.kSQ, { children: T }),
            (0, i.jsx)(o.kSQ, { children: w }),
            (0, i.jsx)(o.kSQ, { children: u }),
            (0, i.jsx)(o.kSQ, { children: r }),
            (0, i.jsx)(o.kSQ, { children: P })
        ]
    });
}
function A(e) {
    let { channel: n, guild: t, onSelect: l } = e,
        r = (0, k.Z)(n),
        d = (0, f.Z)(n),
        u = (0, s.l)(n),
        p = (0, s.P)(n),
        b = (0, T.Z)(n),
        m = (0, S.ZP)(n),
        P = (0, I.Z)(n),
        w = (0, g.Z)(n, t),
        A = (0, x.Z)(n, t),
        y = (0, C.Z)(n, t),
        N = (0, Z.Z)(n),
        U = (0, _.Z)({
            id: n.id,
            label: j.intl.string(j.t.gFHI3t)
        }),
        M = (0, c.Z)(n),
        B = (0, L.Z)(n, 'list_text_channel_context_menu'),
        O = (0, v.Z)(n),
        G = (0, E.ZP)(n),
        Q = (0, h.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': j.intl.string(j.t.Xm41aW),
        onSelect: l,
        children: [
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [r, u]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [w, b, d, B]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [m, Q ? G : O]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [P, A, y, N]
                },
                'admin-actions'
            ),
            (0, i.jsx)(o.kSQ, { children: M }),
            (0, i.jsx)(o.kSQ, { children: p }),
            (0, i.jsx)(o.kSQ, { children: U }, 'developer-actions')
        ]
    });
}
let y = (0, r.Z)(
    (0, l.Z)(
        function (e) {
            return (0, u.Z)() ? (0, i.jsx)(w, { ...e }) : (0, i.jsx)(A, { ...e });
        },
        { object: P.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
