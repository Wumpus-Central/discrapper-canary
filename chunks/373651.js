n.d(t, { default: () => L });
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(239091),
    a = n(883385),
    c = n(108843),
    d = n(947440),
    l = n(100527),
    _ = n(299206),
    s = n(916069),
    p = n(895563),
    u = n(212205),
    b = n(478035),
    f = n(62420),
    m = n(423589),
    h = n(398048),
    g = n(109764),
    C = n(3689),
    v = n(323597),
    x = n(852245),
    j = n(367722),
    y = n(461535),
    P = n(776568),
    I = n(218035),
    T = n(775666),
    O = n(593589),
    w = n(442754),
    S = n(981631),
    Z = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function k(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, y.Z)(t),
        c = (0, g.Z)(t),
        l = (0, p.l)(t),
        s = (0, p.P)(t),
        h = (0, u.Z)(t),
        C = (0, b.Z)(t),
        v = (0, f.Z)(t),
        j = (0, P.ZP)(t),
        O = (0, I.Z)(t),
        w = (0, x.Z)(t),
        S = (0, _.Z)({
            id: t.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        E = (0, d.Z)(t),
        k = (0, T.ZP)(t),
        B = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': Z.intl.string(Z.t.Xm41aW),
        onSelect: n,
        children: [
            (0, i.jsx)(r.kSQ, { children: a }),
            (0, i.jsxs)(r.kSQ, {
                children: [C, v, h, l]
            }),
            (0, i.jsxs)(r.kSQ, {
                children: [j, B ? k : O]
            }),
            (0, i.jsx)(r.kSQ, { children: w }),
            (0, i.jsx)(r.kSQ, { children: E }),
            (0, i.jsx)(r.kSQ, { children: s }),
            (0, i.jsx)(r.kSQ, { children: c }),
            (0, i.jsx)(r.kSQ, { children: S })
        ]
    });
}
function B(e) {
    let { channel: t, guild: n, onSelect: a } = e,
        c = (0, y.Z)(t),
        l = (0, g.Z)(t),
        s = (0, p.l)(t),
        u = (0, p.P)(t),
        b = (0, w.Z)(t),
        f = (0, P.ZP)(t),
        S = (0, x.Z)(t),
        E = (0, j.Z)(t, n),
        k = (0, h.Z)(t, n),
        B = (0, C.Z)(t, n),
        L = (0, v.Z)(t),
        A = (0, _.Z)({
            id: t.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        N = (0, d.Z)(t),
        W = (0, O.Z)(t, 'list_text_channel_context_menu'),
        U = (0, I.Z)(t),
        G = (0, T.ZP)(t),
        Q = (0, m.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': Z.intl.string(Z.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [c, s]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [E, b, l, W]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [f, Q ? G : U]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [S, k, B, L]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.kSQ, { children: N }),
            (0, i.jsx)(r.kSQ, { children: u }),
            (0, i.jsx)(r.kSQ, { children: A }, 'developer-actions')
        ]
    });
}
let L = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, s.Z)() ? (0, i.jsx)(k, E({}, e)) : (0, i.jsx)(B, E({}, e));
        },
        { object: S.qAy.CONTEXT_MENU }
    ),
    [l.Z.CONTEXT_MENU, l.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
