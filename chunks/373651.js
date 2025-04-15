t.d(n, { default: () => N });
var r = t(200651);
t(192379);
var i = t(481060),
    o = t(239091),
    a = t(883385),
    c = t(108843),
    l = t(947440),
    u = t(100527),
    d = t(299206),
    _ = t(916069),
    p = t(895563),
    s = t(212205),
    b = t(478035),
    h = t(62420),
    f = t(423589),
    m = t(398048),
    x = t(109764),
    g = t(3689),
    C = t(323597),
    y = t(852245),
    v = t(367722),
    O = t(461535),
    Z = t(776568),
    w = t(218035),
    j = t(775666),
    P = t(593589),
    k = t(442754),
    S = t(981631),
    I = t(388032);
function T(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function E(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, O.Z)(n),
        c = (0, x.Z)(n),
        u = (0, p.l)(n),
        _ = (0, p.P)(n),
        m = (0, s.Z)(n),
        g = (0, b.Z)(n),
        C = (0, h.Z)(n),
        v = (0, Z.ZP)(n),
        P = (0, w.Z)(n),
        k = (0, y.Z)(n),
        S = (0, d.Z)({
            id: n.id,
            label: I.NW.string(I.t.gFHI3t)
        }),
        T = (0, l.Z)(n),
        E = (0, j.ZP)(n),
        L = (0, f.Mn)('ChannelContextFavoritesMenu');
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': I.NW.string(I.t.Xm41aW),
        onSelect: t,
        children: [
            (0, r.jsx)(i.kSQ, { children: a }),
            (0, r.jsxs)(i.kSQ, {
                children: [g, C, m, u]
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [v, L ? E : P]
            }),
            (0, r.jsx)(i.kSQ, { children: k }),
            (0, r.jsx)(i.kSQ, { children: T }),
            (0, r.jsx)(i.kSQ, { children: _ }),
            (0, r.jsx)(i.kSQ, { children: c }),
            (0, r.jsx)(i.kSQ, { children: S })
        ]
    });
}
function L(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        c = (0, O.Z)(n),
        u = (0, x.Z)(n),
        _ = (0, p.l)(n),
        s = (0, p.P)(n),
        b = (0, k.Z)(n),
        h = (0, Z.ZP)(n),
        S = (0, y.Z)(n),
        T = (0, v.Z)(n, t),
        E = (0, m.Z)(n, t),
        L = (0, g.Z)(n, t),
        N = (0, C.Z)(n),
        A = (0, d.Z)({
            id: n.id,
            label: I.NW.string(I.t.gFHI3t)
        }),
        U = (0, l.Z)(n),
        M = (0, P.Z)(n, 'list_text_channel_context_menu'),
        D = (0, w.Z)(n),
        B = (0, j.ZP)(n),
        W = (0, f.Mn)('ChannelContextMenuNormal');
    return (0, r.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': I.NW.string(I.t.Xm41aW),
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
                    children: [T, b, u, M]
                },
                'channel-actions'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [h, W ? B : D]
                },
                'notifications'
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [S, E, L, N]
                },
                'admin-actions'
            ),
            (0, r.jsx)(i.kSQ, { children: U }),
            (0, r.jsx)(i.kSQ, { children: s }),
            (0, r.jsx)(i.kSQ, { children: A }, 'developer-actions')
        ]
    });
}
let N = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, _.Z)() ? (0, r.jsx)(E, T({}, e)) : (0, r.jsx)(L, T({}, e));
        },
        { object: S.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
