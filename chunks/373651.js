t.d(n, { default: () => L });
var i = t(255367);
t(73800);
var o = t(481060),
    r = t(239091),
    a = t(883385),
    c = t(108843),
    _ = t(947440),
    d = t(100527),
    l = t(299206),
    u = t(916069),
    s = t(895563),
    p = t(212205),
    m = t(478035),
    b = t(62420),
    f = t(423589),
    h = t(398048),
    g = t(109764),
    C = t(3689),
    x = t(323597),
    w = t(852245),
    I = t(367722),
    y = t(461535),
    j = t(776568),
    O = t(218035),
    B = t(775666),
    v = t(593589),
    P = t(442754),
    k = t(981631),
    T = t(388032);
function S(e) {
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
function Z(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, y.Z)(n),
        c = (0, g.Z)(n),
        d = (0, s.l)(n),
        u = (0, s.P)(n),
        h = (0, p.Z)(n),
        C = (0, m.Z)(n),
        x = (0, b.Z)(n),
        I = (0, j.ZP)(n),
        v = (0, O.Z)(n),
        P = (0, w.Z)(n),
        k = (0, l.Z)({
            id: n.id,
            label: T.intl.string(T.t.gFHI3t)
        }),
        S = (0, _.Z)(n),
        Z = (0, B.ZP)(n),
        E = (0, f.Mn)('ChannelContextFavoritesMenu');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': T.intl.string(T.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(o.kSQ, { children: a }),
            (0, i.jsxs)(o.kSQ, {
                children: [C, x, h, d]
            }),
            (0, i.jsxs)(o.kSQ, {
                children: [I, E ? Z : v]
            }),
            (0, i.jsx)(o.kSQ, { children: P }),
            (0, i.jsx)(o.kSQ, { children: S }),
            (0, i.jsx)(o.kSQ, { children: u }),
            (0, i.jsx)(o.kSQ, { children: c }),
            (0, i.jsx)(o.kSQ, { children: k })
        ]
    });
}
function E(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        c = (0, y.Z)(n),
        d = (0, g.Z)(n),
        u = (0, s.l)(n),
        p = (0, s.P)(n),
        m = (0, P.Z)(n),
        b = (0, j.ZP)(n),
        k = (0, w.Z)(n),
        S = (0, I.Z)(n, t),
        Z = (0, h.Z)(n, t),
        E = (0, C.Z)(n, t),
        L = (0, x.Z)(n),
        M = (0, l.Z)({
            id: n.id,
            label: T.intl.string(T.t.gFHI3t)
        }),
        N = (0, _.Z)(n),
        A = (0, v.Z)(n, 'list_text_channel_context_menu'),
        W = (0, O.Z)(n),
        D = (0, B.ZP)(n),
        U = (0, f.Mn)('ChannelContextMenuNormal');
    return (0, i.jsxs)(o.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': T.intl.string(T.t.Xm41aW),
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
                    children: [S, m, d, A]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [b, U ? D : W]
                },
                'notifications'
            ),
            (0, i.jsxs)(
                o.kSQ,
                {
                    children: [k, Z, E, L]
                },
                'admin-actions'
            ),
            (0, i.jsx)(o.kSQ, { children: N }),
            (0, i.jsx)(o.kSQ, { children: p }),
            (0, i.jsx)(o.kSQ, { children: M }, 'developer-actions')
        ]
    });
}
let L = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, u.Z)() ? (0, i.jsx)(Z, S({}, e)) : (0, i.jsx)(E, S({}, e));
        },
        { object: k.qAy.CONTEXT_MENU }
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
