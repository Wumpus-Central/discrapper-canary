t.d(n, { default: () => L });
var i = t(255367);
t(73800);
var r = t(481060),
    o = t(239091),
    a = t(883385),
    l = t(108843),
    c = t(947440),
    u = t(100527),
    d = t(299206),
    _ = t(916069),
    s = t(895563),
    p = t(212205),
    b = t(478035),
    m = t(62420),
    f = t(423589),
    h = t(398048),
    g = t(109764),
    x = t(3689),
    O = t(323597),
    C = t(852245),
    y = t(367722),
    v = t(461535),
    E = t(776568),
    Z = t(218035),
    j = t(775666),
    k = t(593589),
    w = t(442754),
    P = t(981631),
    S = t(388032);
function T(e) {
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
function I(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, v.Z)(n),
        l = (0, g.Z)(n),
        u = (0, s.l)(n),
        _ = (0, s.P)(n),
        h = (0, p.Z)(n),
        x = (0, b.Z)(n),
        O = (0, m.Z)(n),
        y = (0, E.ZP)(n),
        k = (0, Z.Z)(n),
        w = (0, C.Z)(n),
        P = (0, d.Z)({
            id: n.id,
            label: S.intl.string(S.t.gFHI3t)
        }),
        T = (0, c.Z)(n),
        I = (0, j.ZP)(n),
        A = (0, f.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': S.intl.string(S.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(r.kSQ, { children: a }),
            (0, i.jsxs)(r.kSQ, {
                children: [x, O, h, u]
            }),
            (0, i.jsxs)(r.kSQ, {
                children: [y, A ? I : k]
            }),
            (0, i.jsx)(r.kSQ, { children: w }),
            (0, i.jsx)(r.kSQ, { children: T }),
            (0, i.jsx)(r.kSQ, { children: _ }),
            (0, i.jsx)(r.kSQ, { children: l }),
            (0, i.jsx)(r.kSQ, { children: P })
        ]
    });
}
function A(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        l = (0, v.Z)(n),
        u = (0, g.Z)(n),
        _ = (0, s.l)(n),
        p = (0, s.P)(n),
        b = (0, w.Z)(n),
        m = (0, E.ZP)(n),
        P = (0, C.Z)(n),
        T = (0, y.Z)(n, t),
        I = (0, h.Z)(n, t),
        A = (0, x.Z)(n, t),
        L = (0, O.Z)(n),
        N = (0, d.Z)({
            id: n.id,
            label: S.intl.string(S.t.gFHI3t)
        }),
        D = (0, c.Z)(n),
        U = (0, k.Z)(n, 'list_text_channel_context_menu'),
        M = (0, Z.Z)(n),
        R = (0, j.ZP)(n),
        B = (0, f.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': S.intl.string(S.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [l, _]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [T, b, u, U]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [m, B ? R : M]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [P, I, A, L]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.kSQ, { children: D }),
            (0, i.jsx)(r.kSQ, { children: p }),
            (0, i.jsx)(r.kSQ, { children: N }, 'developer-actions')
        ]
    });
}
let L = (0, l.Z)(
    (0, a.Z)(
        function (e) {
            return (0, _.Z)() ? (0, i.jsx)(I, T({}, e)) : (0, i.jsx)(A, T({}, e));
        },
        { object: P.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
