t.d(n, { default: () => A });
var i = t(255367);
t(73800);
var o = t(481060),
    r = t(239091),
    a = t(883385),
    c = t(108843),
    l = t(947440),
    d = t(100527),
    _ = t(299206),
    u = t(916069),
    s = t(895563),
    p = t(212205),
    b = t(478035),
    f = t(62420),
    m = t(423589),
    g = t(398048),
    h = t(109764),
    C = t(3689),
    y = t(323597),
    I = t(852245),
    O = t(367722),
    v = t(461535),
    P = t(776568),
    x = t(218035),
    j = t(775666),
    E = t(593589),
    S = t(442754),
    T = t(981631),
    Z = t(388032);
function w(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function L(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, v.Z)(n),
        c = (0, h.Z)(n),
        d = (0, s.l)(n),
        u = (0, s.P)(n),
        g = (0, p.Z)(n),
        C = (0, b.Z)(n),
        y = (0, f.Z)(n),
        O = (0, P.ZP)(n),
        E = (0, x.Z)(n),
        S = (0, I.Z)(n),
        T = (0, _.Z)({
            id: n.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        w = (0, l.Z)(n),
        L = (0, j.ZP)(n),
        k = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': Z.intl.string(Z.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(o.kSQ, { children: a }),
            (0, i.jsxs)(o.kSQ, {
                children: [C, y, g, d]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [O, k ? L : E]
            }),
            (0, i.jsx)(o.kSQ, { children: S }),
            (0, i.jsx)(o.kSQ, { children: w }),
            (0, i.jsx)(o.kSQ, { children: u }),
            (0, i.jsx)(o.kSQ, { children: c }),
            (0, i.jsx)(o.kSQ, { children: T })
        ]
    });
}
function k(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        c = (0, v.Z)(n),
        d = (0, h.Z)(n),
        u = (0, s.l)(n),
        p = (0, s.P)(n),
        b = (0, S.Z)(n),
        f = (0, P.ZP)(n),
        T = (0, I.Z)(n),
        w = (0, O.Z)(n, t),
        L = (0, g.Z)(n, t),
        k = (0, C.Z)(n, t),
        A = (0, y.Z)(n),
        D = (0, _.Z)({
            id: n.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        B = (0, l.Z)(n),
        M = (0, E.Z)(n, 'list_text_channel_context_menu'),
        N = (0, x.Z)(n),
        U = (0, j.ZP)(n),
        F = (0, m.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': Z.intl.string(Z.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [c, u]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [w, b, d, M]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [f, F ? U : N]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [T, L, k, A]
                },
                'admin-actions'
            ),
            (0, i.jsx)(o.kSQ, { children: B }),
            (0, i.jsx)(o.kSQ, { children: p }),
            (0, i.jsx)(o.kSQ, { children: D }, 'developer-actions')
        ]
    });
}
let A = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, u.Z)() ? (0, i.jsx)(L, w({}, e)) : (0, i.jsx)(k, w({}, e));
        },
        { object: T.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
