t.d(e, { default: () => T });
var l = t(200651);
t(192379);
var i = t(481060),
    r = t(239091),
    o = t(883385),
    c = t(108843),
    a = t(947440),
    s = t(100527),
    d = t(299206),
    u = t(916069),
    h = t(895563),
    Z = t(212205),
    p = t(478035),
    x = t(62420),
    f = t(423589),
    j = t(398048),
    b = t(109764),
    k = t(3689),
    S = t(323597),
    C = t(852245),
    E = t(367722),
    N = t(461535),
    P = t(776568),
    _ = t(218035),
    v = t(775666),
    g = t(593589),
    Q = t(442754),
    m = t(981631),
    y = t(388032);
function O(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                })
            )),
            l.forEach(function (e) {
                var l;
                (l = t[e]),
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (n[e] = l);
            });
    }
    return n;
}
function w(n) {
    let { channel: e, onSelect: t } = n,
        o = (0, N.Z)(e),
        c = (0, b.Z)(e),
        s = (0, h.l)(e),
        u = (0, h.P)(e),
        j = (0, Z.Z)(e),
        k = (0, p.Z)(e),
        S = (0, x.Z)(e),
        E = (0, P.ZP)(e),
        g = (0, _.Z)(e),
        Q = (0, C.Z)(e),
        m = (0, d.Z)({
            id: e.id,
            label: y.intl.string(y.t.gFHI3t)
        }),
        O = (0, a.Z)(e),
        w = (0, v.ZP)(e),
        A = (0, f.Mn)('ChannelContextFavoritesMenu');
    return (0, l.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': y.intl.string(y.t.Xm41aW),
        onSelect: t,
        children: [
            (0, l.jsx)(i.kSQ, { children: o }),
            (0, l.jsxs)(i.kSQ, {
                children: [k, S, j, s]
            }),
            (0, l.jsxs)(i.kSQ, {
                children: [E, A ? w : g]
            }),
            (0, l.jsx)(i.kSQ, { children: Q }),
            (0, l.jsx)(i.kSQ, { children: O }),
            (0, l.jsx)(i.kSQ, { children: u }),
            (0, l.jsx)(i.kSQ, { children: c }),
            (0, l.jsx)(i.kSQ, { children: m })
        ]
    });
}
function A(n) {
    let { channel: e, guild: t, onSelect: o } = n,
        c = (0, N.Z)(e),
        s = (0, b.Z)(e),
        u = (0, h.l)(e),
        Z = (0, h.P)(e),
        p = (0, Q.Z)(e),
        x = (0, P.ZP)(e),
        m = (0, C.Z)(e),
        O = (0, E.Z)(e, t),
        w = (0, j.Z)(e, t),
        A = (0, k.Z)(e, t),
        T = (0, S.Z)(e),
        M = (0, d.Z)({
            id: e.id,
            label: y.intl.string(y.t.gFHI3t)
        }),
        H = (0, a.Z)(e),
        I = (0, g.Z)(e, 'list_text_channel_context_menu'),
        L = (0, _.Z)(e),
        X = (0, v.ZP)(e),
        q = (0, f.Mn)('ChannelContextMenuNormal');
    return (0, l.jsxs)(i.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': y.intl.string(y.t.Xm41aW),
        onSelect: o,
        children: [
            (0, l.jsxs)(
                i.kSQ,
                {
                    children: [c, u]
                },
                'mark-as-read-or-favorite'
            ),
            (0, l.jsxs)(
                i.kSQ,
                {
                    children: [O, p, s, I]
                },
                'channel-actions'
            ),
            (0, l.jsxs)(
                i.kSQ,
                {
                    children: [x, q ? X : L]
                },
                'notifications'
            ),
            (0, l.jsxs)(
                i.kSQ,
                {
                    children: [m, w, A, T]
                },
                'admin-actions'
            ),
            (0, l.jsx)(i.kSQ, { children: H }),
            (0, l.jsx)(i.kSQ, { children: Z }),
            (0, l.jsx)(i.kSQ, { children: M }, 'developer-actions')
        ]
    });
}
let T = (0, c.Z)(
    (0, o.Z)(
        function (n) {
            return (0, u.Z)() ? (0, l.jsx)(w, O({}, n)) : (0, l.jsx)(A, O({}, n));
        },
        { object: m.qAy.CONTEXT_MENU }
    ),
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU]
);
