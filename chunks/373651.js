t.d(n, { default: () => L });
var i = t(255367);
t(73800);
var r = t(481060),
    o = t(239091),
    a = t(883385),
    c = t(108843),
    d = t(947440),
    _ = t(100527),
    l = t(299206),
    s = t(916069),
    u = t(895563),
    m = t(212205),
    p = t(478035),
    f = t(62420),
    b = t(423589),
    h = t(398048),
    g = t(109764),
    C = t(3689),
    w = t(323597),
    x = t(852245),
    j = t(367722),
    y = t(461535),
    O = t(776568),
    v = t(218035),
    P = t(775666),
    I = t(593589),
    S = t(442754),
    B = t(981631),
    T = t(388032);
function Z(e) {
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
function k(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, y.Z)(n),
        c = (0, g.Z)(n),
        _ = (0, u.l)(n),
        s = (0, u.P)(n),
        h = (0, m.Z)(n),
        C = (0, p.Z)(n),
        w = (0, f.Z)(n),
        j = (0, O.ZP)(n),
        I = (0, v.Z)(n),
        S = (0, x.Z)(n),
        B = (0, l.Z)({
            id: n.id,
            label: T.intl.string(T.t.gFHI3t)
        }),
        Z = (0, d.Z)(n),
        k = (0, P.ZP)(n),
        E = (0, b.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': T.intl.string(T.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(r.kSQ, { children: a }),
            (0, i.jsxs)(r.kSQ, {
                children: [C, w, h, _]
            }),
            (0, i.jsxs)(r.kSQ, {
                children: [j, E ? k : I]
            }),
            (0, i.jsx)(r.kSQ, { children: S }),
            (0, i.jsx)(r.kSQ, { children: Z }),
            (0, i.jsx)(r.kSQ, { children: s }),
            (0, i.jsx)(r.kSQ, { children: c }),
            (0, i.jsx)(r.kSQ, { children: B })
        ]
    });
}
function E(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        c = (0, y.Z)(n),
        _ = (0, g.Z)(n),
        s = (0, u.l)(n),
        m = (0, u.P)(n),
        p = (0, S.Z)(n),
        f = (0, O.ZP)(n),
        B = (0, x.Z)(n),
        Z = (0, j.Z)(n, t),
        k = (0, h.Z)(n, t),
        E = (0, C.Z)(n, t),
        L = (0, w.Z)(n),
        M = (0, l.Z)({
            id: n.id,
            label: T.intl.string(T.t.gFHI3t)
        }),
        N = (0, d.Z)(n),
        W = (0, I.Z)(n, 'list_text_channel_context_menu'),
        A = (0, v.Z)(n),
        U = (0, P.ZP)(n),
        Q = (0, b.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(r.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': T.intl.string(T.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [c, s]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [Z, p, _, W]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [f, Q ? U : A]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [B, k, E, L]
                },
                'admin-actions'
            ),
            (0, i.jsx)(r.kSQ, { children: N }),
            (0, i.jsx)(r.kSQ, { children: m }),
            (0, i.jsx)(r.kSQ, { children: M }, 'developer-actions')
        ]
    });
}
let L = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, s.Z)() ? (0, i.jsx)(k, Z({}, e)) : (0, i.jsx)(E, Z({}, e));
        },
        { object: B.qAy.CONTEXT_MENU }
    ),
    [_.Z.CONTEXT_MENU, _.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
