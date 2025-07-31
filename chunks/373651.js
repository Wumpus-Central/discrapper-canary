n.d(t, { default: () => E });
var i = n(255367);
n(73800);
var r = n(481060),
    o = n(239091),
    a = n(883385),
    c = n(108843),
    s = n(947440),
    d = n(100527),
    l = n(299206),
    _ = n(916069),
    p = n(895563),
    u = n(212205),
    f = n(478035),
    b = n(62420),
    m = n(423589),
    h = n(398048),
    g = n(109764),
    C = n(3689),
    x = n(323597),
    v = n(852245),
    y = n(367722),
    I = n(461535),
    T = n(776568),
    j = n(218035),
    P = n(775666),
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
function k(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, I.Z)(t),
        c = (0, g.Z)(t),
        d = (0, p.l)(t),
        _ = (0, p.P)(t),
        h = (0, u.Z)(t),
        C = (0, f.Z)(t),
        x = (0, b.Z)(t),
        y = (0, T.ZP)(t),
        S = (0, j.Z)(t),
        O = (0, v.Z)(t),
        Z = (0, l.Z)({
            id: t.id,
            label: w.intl.string(w.t.gFHI3t)
        }),
        L = (0, s.Z)(t),
        k = (0, P.ZP)(t),
        W = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': w.intl.string(w.t.Xm41aW),
        onSelect: n,
        children: [
            (0, i.jsx)(r.kSQ, { children: a }),
            (0, i.jsxs)(r.kSQ, {
                children: [C, x, h, d]
            }),
            (0, i.jsxs)(r.kSQ, {
                children: [y, W ? k : S]
            }),
            (0, i.jsx)(r.kSQ, { children: O }),
            (0, i.jsx)(r.kSQ, { children: L }),
            (0, i.jsx)(r.kSQ, { children: _ }),
            (0, i.jsx)(r.kSQ, { children: c }),
            (0, i.jsx)(r.kSQ, { children: Z })
        ]
    });
}
function W(e) {
    let { channel: t, guild: n, onSelect: a } = e,
        c = (0, I.Z)(t),
        d = (0, g.Z)(t),
        _ = (0, p.l)(t),
        u = (0, p.P)(t),
        f = (0, O.Z)(t),
        b = (0, T.ZP)(t),
        Z = (0, v.Z)(t),
        L = (0, y.Z)(t, n),
        k = (0, h.Z)(t, n),
        W = (0, C.Z)(t, n),
        E = (0, x.Z)(t),
        B = (0, l.Z)({
            id: t.id,
            label: w.intl.string(w.t.gFHI3t)
        }),
        A = (0, s.Z)(t),
        R = (0, S.Z)(t, 'list_text_channel_context_menu'),
        N = (0, j.Z)(t),
        H = (0, P.ZP)(t),
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
                    children: [c, _]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [L, f, d, R]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [b, U ? H : N]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [Z, k, W, E]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.kSQ, { children: A }),
            (0, i.jsx)(r.kSQ, { children: u }),
            (0, i.jsx)(r.kSQ, { children: B }, 'developer-actions')
        ]
    });
}
let E = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, _.Z)() ? (0, i.jsx)(k, L({}, e)) : (0, i.jsx)(W, L({}, e));
        },
        { object: Z.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
