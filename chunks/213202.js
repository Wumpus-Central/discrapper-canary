n.d(t, { default: () => Y });
var i = n(255367);
n(73800);
var r = n(442837),
    l = n(481060),
    a = n(239091),
    o = n(883385),
    c = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(299206),
    Z = n(916069),
    f = n(895563),
    g = n(212205),
    h = n(478035),
    b = n(62420),
    j = n(420529),
    v = n(554747),
    p = n(924952),
    O = n(423589),
    y = n(427679),
    x = n(398048),
    S = n(109764),
    P = n(3689),
    C = n(323597),
    m = n(852245),
    E = n(493802),
    N = n(367722),
    _ = n(461535),
    k = n(776568),
    T = n(218035),
    w = n(775666),
    L = n(442754),
    Q = n(333805),
    V = n(567521),
    D = n(624514),
    G = n(917327),
    M = n(381924),
    I = n(601274),
    A = n(981631),
    U = n(388032);
function R(e) {
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
function X(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        c = t.isGuildStageVoice(),
        u = (0, r.e7)([y.Z], () => (c ? y.Z.getStageInstanceByChannel(t.id) : void 0), [c, t.id]),
        Z = (0, S.Z)(t),
        j = (0, v.qY)(t.id),
        x = (0, p.Z)(null == j ? void 0 : j.id, n, t),
        P = (0, V.Z)(t, u),
        C = (0, f.l)(t),
        N = (0, f.P)(t),
        _ = (0, g.Z)(t),
        k = (0, h.Z)(t),
        L = (0, b.Z)(t),
        G = (0, E.Z)(t),
        M = (0, T.Z)(t),
        A = (0, m.Z)(t),
        R = (0, I.Z)(t, n),
        X = (0, d.Z)({
            id: t.id,
            label: U.intl.string(U.t.gFHI3t)
        }),
        q = (0, Q.Z)(t),
        Y = (0, s.Z)(t),
        H = (0, O.Mn)('ChannelListVoiceContextMenuFavorite'),
        F = (0, w.ZP)(t),
        W = (0, D.Z)();
    return (0, i.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': U.intl.string(U.t.Xm41aW),
        onSelect: o,
        children: [
            (0, i.jsx)(l.kSQ, { children: null != j ? x : P }),
            (0, i.jsxs)(l.kSQ, {
                children: [k, L, _, C]
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [G, H ? F : M, A]
            }),
            (0, i.jsx)(l.kSQ, { children: Y }),
            (0, i.jsx)(l.kSQ, { children: N }),
            (0, i.jsxs)(l.kSQ, {
                children: [R, Z]
            }),
            (0, i.jsx)(l.kSQ, { children: q }),
            (0, i.jsxs)(l.kSQ, {
                children: [X, W]
            })
        ]
    });
}
function q(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        c = t.isGuildStageVoice(),
        u = (0, r.e7)([y.Z], () => (c ? y.Z.getStageInstanceByChannel(t.id) : void 0), [c, t.id]),
        Z = (0, _.Z)(t),
        g = (0, S.Z)(t),
        h = (0, v.qY)(t.id),
        b = (0, p.Z)(null == h ? void 0 : h.id, n, t),
        A = (0, V.Z)(t, u),
        R = (0, f.l)(t),
        X = (0, f.P)(t),
        q = (0, E.Z)(t),
        Y = (0, T.Z)(t),
        H = (0, m.Z)(t),
        F = (0, N.Z)(t, n, u),
        W = (0, I.Z)(t, n),
        z = (0, G.Z)(t, n),
        B = (0, M.Z)(t, n.id),
        K = (0, x.Z)(t, n),
        J = (0, P.Z)(t, n),
        $ = (0, C.Z)(t),
        ee = (0, d.Z)({
            id: t.id,
            label: U.intl.string(U.t.gFHI3t)
        }),
        et = (0, Q.Z)(t),
        en = (0, s.Z)(t),
        ei = (0, L.Z)(t),
        er = (0, j.Z)(t),
        el = (0, k.ZP)(t),
        ea = (0, O.Mn)('ChannelListVoiceContextMenuNormal'),
        eo = (0, w.ZP)(t),
        ec = (0, D.Z)();
    return (0, i.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: a.Zy,
        'aria-label': U.intl.string(U.t.Xm41aW),
        onSelect: o,
        children: [
            (0, i.jsx)(l.kSQ, { children: null != h ? b : A }),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [Z, R]
                },
                'mark-as-read-or-favorite'
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [F, en, ei, g]
                },
                'channel-actions'
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [B, W, z, q, er, et]
                },
                'voice-actions'
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [el, ea ? eo : Y]
                },
                'notifications'
            ),
            (0, i.jsx)(l.kSQ, { children: X }),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [H, K, J, $]
                },
                'admin-actions'
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [ee, ec]
                },
                'developer-actions'
            )
        ]
    });
}
let Y = (0, c.Z)(
    (0, o.Z)(
        function (e) {
            return (0, Z.Z)() ? (0, i.jsx)(X, R({}, e)) : (0, i.jsx)(q, R({}, e));
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
