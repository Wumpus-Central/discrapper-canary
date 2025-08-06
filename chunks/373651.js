t.d(n, { default: () => Q });
var i = t(255367);
t(73800);
var o = t(481060),
    r = t(239091),
    a = t(883385),
    c = t(108843),
    d = t(947440),
    _ = t(100527),
    l = t(299206),
    s = t(916069),
    f = t(895563),
    u = t(212205),
    m = t(478035),
    b = t(62420),
    p = t(423589),
    h = t(398048),
    C = t(109764),
    g = t(3689),
    j = t(323597),
    x = t(852245),
    I = t(367722),
    Z = t(461535),
    P = t(776568),
    k = t(218035),
    S = t(775666),
    T = t(593589),
    B = t(442754),
    v = t(981631),
    N = t(388032);
function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                ((i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i));
            }));
    }
    return e;
}
function y(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, Z.Z)(n),
        c = (0, C.Z)(n),
        _ = (0, f.l)(n),
        s = (0, f.P)(n),
        h = (0, u.Z)(n),
        g = (0, m.Z)(n),
        j = (0, b.Z)(n),
        I = (0, P.ZP)(n),
        T = (0, k.Z)(n),
        B = (0, x.Z)(n),
        v = (0, l.Z)({
            id: n.id,
            label: N.intl.string(N.t.gFHI3t)
        }),
        E = (0, d.Z)(n),
        y = (0, S.ZP)(n),
        w = (0, p.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': N.intl.string(N.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(o.kSQ, { children: a }),
            (0, i.jsxs)(o.kSQ, {
                children: [g, j, h, _]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [I, w ? y : T]
            }),
            (0, i.jsx)(o.kSQ, { children: B }),
            (0, i.jsx)(o.kSQ, { children: E }),
            (0, i.jsx)(o.kSQ, { children: s }),
            (0, i.jsx)(o.kSQ, { children: c }),
            (0, i.jsx)(o.kSQ, { children: v })
        ]
    });
}
function w(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        c = (0, Z.Z)(n),
        _ = (0, C.Z)(n),
        s = (0, f.l)(n),
        u = (0, f.P)(n),
        m = (0, B.Z)(n),
        b = (0, P.ZP)(n),
        v = (0, x.Z)(n),
        E = (0, I.Z)(n, t),
        y = (0, h.Z)(n, t),
        w = (0, g.Z)(n, t),
        Q = (0, j.Z)(n),
        O = (0, l.Z)({
            id: n.id,
            label: N.intl.string(N.t.gFHI3t)
        }),
        H = (0, d.Z)(n),
        L = (0, T.Z)(n, 'list_text_channel_context_menu'),
        M = (0, k.Z)(n),
        A = (0, S.ZP)(n),
        D = (0, p.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': N.intl.string(N.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [c, s]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [E, m, _, L]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [b, D ? A : M]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [v, y, w, Q]
                },
                'admin-actions'
            ),
            (0, i.jsx)(o.kSQ, { children: H }),
            (0, i.jsx)(o.kSQ, { children: u }),
            (0, i.jsx)(o.kSQ, { children: O }, 'developer-actions')
        ]
    });
}
let Q = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, s.Z)() ? (0, i.jsx)(y, E({}, e)) : (0, i.jsx)(w, E({}, e));
        },
        { object: v.qAy.CONTEXT_MENU }
    ),
    [_.Z.CONTEXT_MENU, _.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
