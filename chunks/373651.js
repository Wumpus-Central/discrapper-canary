n.d(t, { default: () => N });
var i = n(200651);
n(192379);
var o = n(481060),
    r = n(239091),
    a = n(883385),
    c = n(108843),
    l = n(947440),
    d = n(100527),
    u = n(299206),
    _ = n(916069),
    s = n(895563),
    p = n(212205),
    b = n(478035),
    f = n(62420),
    m = n(423589),
    h = n(398048),
    x = n(109764),
    g = n(3689),
    C = n(323597),
    v = n(852245),
    y = n(367722),
    O = n(461535),
    P = n(776568),
    S = n(218035),
    Z = n(775666),
    j = n(593589),
    I = n(442754),
    k = n(981631),
    w = n(388032);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function T(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, O.Z)(t),
        c = (0, x.Z)(t),
        d = (0, s.l)(t),
        _ = (0, s.P)(t),
        h = (0, p.Z)(t),
        g = (0, b.Z)(t),
        C = (0, f.Z)(t),
        y = (0, P.ZP)(t),
        j = (0, S.Z)(t),
        I = (0, v.Z)(t),
        k = (0, u.Z)({
            id: t.id,
            label: w.NW.string(w.t.gFHI3t)
        }),
        E = (0, l.Z)(t),
        T = (0, Z.ZP)(t),
        L = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': w.NW.string(w.t.Xm41aW),
        onSelect: n,
        children: [
            (0, i.jsx)(o.kSQ, { children: a }),
            (0, i.jsxs)(o.kSQ, {
                children: [g, C, h, d]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [y, L ? T : j]
            }),
            (0, i.jsx)(o.kSQ, { children: I }),
            (0, i.jsx)(o.kSQ, { children: E }),
            (0, i.jsx)(o.kSQ, { children: _ }),
            (0, i.jsx)(o.kSQ, { children: c }),
            (0, i.jsx)(o.kSQ, { children: k })
        ]
    });
}
function L(e) {
    let { channel: t, guild: n, onSelect: a } = e,
        c = (0, O.Z)(t),
        d = (0, x.Z)(t),
        _ = (0, s.l)(t),
        p = (0, s.P)(t),
        b = (0, I.Z)(t),
        f = (0, P.ZP)(t),
        k = (0, v.Z)(t),
        E = (0, y.Z)(t, n),
        T = (0, h.Z)(t, n),
        L = (0, g.Z)(t, n),
        N = (0, C.Z)(t),
        A = (0, u.Z)({
            id: t.id,
            label: w.NW.string(w.t.gFHI3t)
        }),
        B = (0, l.Z)(t),
        U = (0, j.Z)(t, 'list_text_channel_context_menu'),
        M = (0, S.Z)(t),
        D = (0, Z.ZP)(t),
        G = (0, m.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': w.NW.string(w.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [c, _]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [E, b, d, U]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [f, G ? D : M]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [k, T, L, N]
                },
                'admin-actions'
            ),
            (0, i.jsx)(o.kSQ, { children: B }),
            (0, i.jsx)(o.kSQ, { children: p }),
            (0, i.jsx)(o.kSQ, { children: A }, 'developer-actions')
        ]
    });
}
let N = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, _.Z)() ? (0, i.jsx)(T, E({}, e)) : (0, i.jsx)(L, E({}, e));
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
