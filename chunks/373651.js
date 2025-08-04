n.d(t, { default: () => W });
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(239091),
    a = n(883385),
    c = n(108843),
    l = n(947440),
    s = n(100527),
    _ = n(299206),
    d = n(916069),
    p = n(895563),
    u = n(212205),
    b = n(478035),
    f = n(62420),
    m = n(423589),
    h = n(398048),
    g = n(109764),
    C = n(3689),
    x = n(323597),
    T = n(852245),
    j = n(367722),
    y = n(461535),
    P = n(776568),
    I = n(218035),
    v = n(775666),
    S = n(593589),
    O = n(442754),
    Z = n(981631),
    w = n(388032);
function L(e) {
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
function E(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, y.Z)(t),
        c = (0, g.Z)(t),
        s = (0, p.l)(t),
        d = (0, p.P)(t),
        h = (0, u.Z)(t),
        C = (0, b.Z)(t),
        x = (0, f.Z)(t),
        j = (0, P.ZP)(t),
        S = (0, I.Z)(t),
        O = (0, T.Z)(t),
        Z = (0, _.Z)({
            id: t.id,
            label: w.intl.string(w.t.gFHI3t)
        }),
        L = (0, l.Z)(t),
        E = (0, v.ZP)(t),
        k = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': w.intl.string(w.t.Xm41aW),
        onSelect: n,
        children: [
            (0, i.jsx)(r.kSQ, { children: a }),
            (0, i.jsxs)(r.kSQ, {
                children: [C, x, h, s]
            }),
            (0, i.jsxs)(r.kSQ, {
                children: [j, k ? E : S]
            }),
            (0, i.jsx)(r.kSQ, { children: O }),
            (0, i.jsx)(r.kSQ, { children: L }),
            (0, i.jsx)(r.kSQ, { children: d }),
            (0, i.jsx)(r.kSQ, { children: c }),
            (0, i.jsx)(r.kSQ, { children: Z })
        ]
    });
}
function k(e) {
    let { channel: t, guild: n, onSelect: a } = e,
        c = (0, y.Z)(t),
        s = (0, g.Z)(t),
        d = (0, p.l)(t),
        u = (0, p.P)(t),
        b = (0, O.Z)(t),
        f = (0, P.ZP)(t),
        Z = (0, T.Z)(t),
        L = (0, j.Z)(t, n),
        E = (0, h.Z)(t, n),
        k = (0, C.Z)(t, n),
        W = (0, x.Z)(t),
        R = (0, _.Z)({
            id: t.id,
            label: w.intl.string(w.t.gFHI3t)
        }),
        N = (0, l.Z)(t),
        B = (0, S.Z)(t, 'list_text_channel_context_menu'),
        H = (0, I.Z)(t),
        A = (0, v.ZP)(t),
        U = (0, m.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': w.intl.string(w.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [c, d]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [L, b, s, B]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [f, U ? A : H]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [Z, E, k, W]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.kSQ, { children: N }),
            (0, i.jsx)(r.kSQ, { children: u }),
            (0, i.jsx)(r.kSQ, { children: R }, 'developer-actions')
        ]
    });
}
let W = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, d.Z)() ? (0, i.jsx)(E, L({}, e)) : (0, i.jsx)(k, L({}, e));
        },
        { object: Z.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
