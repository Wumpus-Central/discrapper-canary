n.d(t, { default: () => L });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(239091),
    a = n(883385),
    c = n(108843),
    s = n(947440),
    d = n(100527),
    l = n(299206),
    _ = n(916069),
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
    y = n(367722),
    I = n(461535),
    j = n(776568),
    P = n(218035),
    T = n(775666),
    S = n(593589),
    O = n(442754),
    w = n(981631),
    Z = n(388032);
function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function E(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, I.Z)(t),
        c = (0, g.Z)(t),
        d = (0, p.l)(t),
        _ = (0, p.P)(t),
        h = (0, u.Z)(t),
        C = (0, b.Z)(t),
        v = (0, f.Z)(t),
        y = (0, j.ZP)(t),
        S = (0, P.Z)(t),
        O = (0, x.Z)(t),
        w = (0, l.Z)({
            id: t.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        k = (0, s.Z)(t),
        E = (0, T.ZP)(t),
        W = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': Z.intl.string(Z.t.Xm41aW),
        onSelect: n,
        children: [
            (0, r.jsx)(i.kSQ, { children: a }),
            (0, r.jsxs)(i.kSQ, {
                children: [C, v, h, d]
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [y, W ? E : S]
            }),
            (0, r.jsx)(i.kSQ, { children: O }),
            (0, r.jsx)(i.kSQ, { children: k }),
            (0, r.jsx)(i.kSQ, { children: _ }),
            (0, r.jsx)(i.kSQ, { children: c }),
            (0, r.jsx)(i.kSQ, { children: w })
        ]
    });
}
function W(e) {
    let { channel: t, guild: n, onSelect: a } = e,
        c = (0, I.Z)(t),
        d = (0, g.Z)(t),
        _ = (0, p.l)(t),
        u = (0, p.P)(t),
        b = (0, O.Z)(t),
        f = (0, j.ZP)(t),
        w = (0, x.Z)(t),
        k = (0, y.Z)(t, n),
        E = (0, h.Z)(t, n),
        W = (0, C.Z)(t, n),
        L = (0, v.Z)(t),
        B = (0, l.Z)({
            id: t.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        A = (0, s.Z)(t),
        N = (0, S.Z)(t, 'list_text_channel_context_menu'),
        R = (0, P.Z)(t),
        H = (0, T.ZP)(t),
        U = (0, m.Mn)('ChannelContextMenuNormal');
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': Z.intl.string(Z.t.Xm41aW),
        onSelect: a,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [c, _]
                },
                'mark-as-read-or-favorite'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [k, b, d, N]
                },
                'channel-actions'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [f, U ? H : R]
                },
                'notifications'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [w, E, W, L]
                },
                'admin-actions'
            ),
            (0, r.jsx)(i.kSQ, { children: A }),
            (0, r.jsx)(i.kSQ, { children: u }),
            (0, r.jsx)(i.kSQ, { children: B }, 'developer-actions')
        ]
    });
}
let L = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, _.Z)() ? (0, r.jsx)(E, k({}, e)) : (0, r.jsx)(W, k({}, e));
        },
        { object: w.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
