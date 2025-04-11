n.d(t, { default: () => N });
var r = n(200651);
n(192379);
var o = n(481060),
    i = n(239091),
    c = n(883385),
    a = n(108843),
    l = n(947440),
    u = n(100527),
    d = n(299206),
    _ = n(916069),
    s = n(895563),
    p = n(212205),
    b = n(478035),
    f = n(62420),
    m = n(423589),
    h = n(398048),
    x = n(109764),
    C = n(3689),
    g = n(323597),
    v = n(852245),
    y = n(367722),
    O = n(461535),
    Z = n(776568),
    j = n(218035),
    k = n(775666),
    P = n(593589),
    S = n(442754),
    I = n(981631),
    w = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function L(e) {
    let { channel: t, onSelect: n } = e,
        c = (0, O.Z)(t),
        a = (0, x.Z)(t),
        u = (0, s.l)(t),
        _ = (0, s.P)(t),
        h = (0, p.Z)(t),
        C = (0, b.Z)(t),
        g = (0, f.Z)(t),
        y = (0, Z.ZP)(t),
        P = (0, j.Z)(t),
        S = (0, v.Z)(t),
        I = (0, d.Z)({
            id: t.id,
            label: w.NW.string(w.t.gFHI3t)
        }),
        E = (0, l.Z)(t),
        L = (0, k.ZP)(t),
        T = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, r.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: i.Zy,
        'aria-label': w.NW.string(w.t.Xm41aW),
        onSelect: n,
        children: [
            (0, r.jsx)(o.kSQ, { children: c }),
            (0, r.jsxs)(o.kSQ, {
                children: [C, g, h, u]
            }),
            (0, r.jsxs)(o.kSQ, {
                children: [y, T ? L : P]
            }),
            (0, r.jsx)(o.kSQ, { children: S }),
            (0, r.jsx)(o.kSQ, { children: E }),
            (0, r.jsx)(o.kSQ, { children: _ }),
            (0, r.jsx)(o.kSQ, { children: a }),
            (0, r.jsx)(o.kSQ, { children: I })
        ]
    });
}
function T(e) {
    let { channel: t, guild: n, onSelect: c } = e,
        a = (0, O.Z)(t),
        u = (0, x.Z)(t),
        _ = (0, s.l)(t),
        p = (0, s.P)(t),
        b = (0, S.Z)(t),
        f = (0, Z.ZP)(t),
        I = (0, v.Z)(t),
        E = (0, y.Z)(t, n),
        L = (0, h.Z)(t, n),
        T = (0, C.Z)(t, n),
        N = (0, g.Z)(t),
        A = (0, d.Z)({
            id: t.id,
            label: w.NW.string(w.t.gFHI3t)
        }),
        U = (0, l.Z)(t),
        M = (0, P.Z)(t, 'list_text_channel_context_menu'),
        B = (0, j.Z)(t),
        D = (0, k.ZP)(t),
        G = (0, m.Mn)('ChannelContextMenuNormal');
    return (0, r.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: i.Zy,
        'aria-label': w.NW.string(w.t.Xm41aW),
        onSelect: c,
        children: [
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [a, _]
                },
                'mark-as-read-or-favorite'
            ),
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [E, b, u, M]
                },
                'channel-actions'
            ),
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [f, G ? D : B]
                },
                'notifications'
            ),
            (0, r.jsxs)(
                o.kSQ,
                {
                    children: [I, L, T, N]
                },
                'admin-actions'
            ),
            (0, r.jsx)(o.kSQ, { children: U }),
            (0, r.jsx)(o.kSQ, { children: p }),
            (0, r.jsx)(o.kSQ, { children: A }, 'developer-actions')
        ]
    });
}
let N = (0, a.Z)(
    (0, c.Z)(
        function (e) {
            return (0, _.Z)() ? (0, r.jsx)(L, E({}, e)) : (0, r.jsx)(T, E({}, e));
        },
        { object: I.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
