t.d(n, { default: () => B });
var i = t(255367);
t(73800);
var o = t(481060),
    r = t(239091),
    a = t(883385),
    c = t(108843),
    l = t(947440),
    _ = t(100527),
    d = t(299206),
    u = t(916069),
    s = t(895563),
    p = t(212205),
    b = t(478035),
    f = t(62420),
    m = t(423589),
    h = t(398048),
    g = t(109764),
    C = t(3689),
    x = t(323597),
    I = t(852245),
    j = t(367722),
    y = t(461535),
    P = t(776568),
    T = t(218035),
    v = t(775666),
    O = t(593589),
    w = t(442754),
    S = t(981631),
    Z = t(388032);
function k(e) {
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
function E(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, y.Z)(n),
        c = (0, g.Z)(n),
        _ = (0, s.l)(n),
        u = (0, s.P)(n),
        h = (0, p.Z)(n),
        C = (0, b.Z)(n),
        x = (0, f.Z)(n),
        j = (0, P.ZP)(n),
        O = (0, T.Z)(n),
        w = (0, I.Z)(n),
        S = (0, d.Z)({
            id: n.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        k = (0, l.Z)(n),
        E = (0, v.ZP)(n),
        L = (0, m.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': Z.intl.string(Z.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(o.kSQ, { children: a }),
            (0, i.jsxs)(o.kSQ, {
                children: [C, x, h, _]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [j, L ? E : O]
            }),
            (0, i.jsx)(o.kSQ, { children: w }),
            (0, i.jsx)(o.kSQ, { children: k }),
            (0, i.jsx)(o.kSQ, { children: u }),
            (0, i.jsx)(o.kSQ, { children: c }),
            (0, i.jsx)(o.kSQ, { children: S })
        ]
    });
}
function L(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        c = (0, y.Z)(n),
        _ = (0, g.Z)(n),
        u = (0, s.l)(n),
        p = (0, s.P)(n),
        b = (0, w.Z)(n),
        f = (0, P.ZP)(n),
        S = (0, I.Z)(n),
        k = (0, j.Z)(n, t),
        E = (0, h.Z)(n, t),
        L = (0, C.Z)(n, t),
        B = (0, x.Z)(n),
        N = (0, d.Z)({
            id: n.id,
            label: Z.intl.string(Z.t.gFHI3t)
        }),
        A = (0, l.Z)(n),
        D = (0, O.Z)(n, 'list_text_channel_context_menu'),
        M = (0, T.Z)(n),
        U = (0, v.ZP)(n),
        W = (0, m.Mn)('ChannelContextMenuNormal');
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
                    children: [k, b, _, D]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [f, W ? U : M]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [S, E, L, B]
                },
                'admin-actions'
            ),
            (0, i.jsx)(o.kSQ, { children: A }),
            (0, i.jsx)(o.kSQ, { children: p }),
            (0, i.jsx)(o.kSQ, { children: N }, 'developer-actions')
        ]
    });
}
let B = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, u.Z)() ? (0, i.jsx)(E, k({}, e)) : (0, i.jsx)(L, k({}, e));
        },
        { object: S.qAy.CONTEXT_MENU }
    ),
    [_.Z.CONTEXT_MENU, _.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
