n.d(t, { default: () => Y });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(239091),
    c = n(883385),
    a = n(108843),
    s = n(947440),
    u = n(100527),
    d = n(299206),
    Z = n(916069),
    f = n(895563),
    b = n(212205),
    j = n(478035),
    O = n(62420),
    g = n(420529),
    p = n(554747),
    h = n(924952),
    y = n(423589),
    v = n(427679),
    P = n(398048),
    x = n(109764),
    S = n(3689),
    m = n(323597),
    C = n(852245),
    E = n(493802),
    N = n(367722),
    w = n(461535),
    _ = n(776568),
    k = n(218035),
    T = n(775666),
    L = n(442754),
    D = n(333805),
    Q = n(567521),
    V = n(624514),
    G = n(917327),
    M = n(381924),
    I = n(601274),
    A = n(981631),
    U = n(388032);
function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function X(e) {
    let { channel: t, guild: n, onSelect: c } = e,
        a = t.isGuildStageVoice(),
        u = (0, i.e7)([v.Z], () => (a ? v.Z.getStageInstanceByChannel(t.id) : void 0), [a, t.id]),
        Z = (0, x.Z)(t),
        g = (0, p.qY)(t.id),
        P = (0, h.Z)(null == g ? void 0 : g.id, n, t),
        S = (0, Q.Z)(t, u),
        m = (0, f.l)(t),
        N = (0, f.P)(t),
        w = (0, b.Z)(t),
        _ = (0, j.Z)(t),
        L = (0, O.Z)(t),
        G = (0, E.Z)(t),
        M = (0, k.Z)(t),
        A = (0, C.Z)(t),
        R = (0, I.Z)(t, n),
        X = (0, d.Z)({
            id: t.id,
            label: U.intl.string(U.t.gFHI3t)
        }),
        q = (0, D.Z)(t),
        Y = (0, s.Z)(t),
        H = (0, y.Mn)('ChannelListVoiceContextMenuFavorite'),
        F = (0, T.ZP)(t),
        W = (0, V.Z)();
    return (0, r.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': U.intl.string(U.t.Xm41aW),
        onSelect: c,
        children: [
            (0, r.jsx)(l.kSQ, { children: null != g ? P : S }),
            (0, r.jsxs)(l.kSQ, {
                children: [_, L, w, m]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [G, H ? F : M, A]
            }),
            (0, r.jsx)(l.kSQ, { children: Y }),
            (0, r.jsx)(l.kSQ, { children: N }),
            (0, r.jsxs)(l.kSQ, {
                children: [R, Z]
            }),
            (0, r.jsx)(l.kSQ, { children: q }),
            (0, r.jsxs)(l.kSQ, {
                children: [X, W]
            })
        ]
    });
}
function q(e) {
    let { channel: t, guild: n, onSelect: c } = e,
        a = t.isGuildStageVoice(),
        u = (0, i.e7)([v.Z], () => (a ? v.Z.getStageInstanceByChannel(t.id) : void 0), [a, t.id]),
        Z = (0, w.Z)(t),
        b = (0, x.Z)(t),
        j = (0, p.qY)(t.id),
        O = (0, h.Z)(null == j ? void 0 : j.id, n, t),
        A = (0, Q.Z)(t, u),
        R = (0, f.l)(t),
        X = (0, f.P)(t),
        q = (0, E.Z)(t),
        Y = (0, k.Z)(t),
        H = (0, C.Z)(t),
        F = (0, N.Z)(t, n, u),
        W = (0, I.Z)(t, n),
        z = (0, G.Z)(t, n),
        B = (0, M.Z)(t, n.id),
        K = (0, P.Z)(t, n),
        J = (0, S.Z)(t, n),
        $ = (0, m.Z)(t),
        ee = (0, d.Z)({
            id: t.id,
            label: U.intl.string(U.t.gFHI3t)
        }),
        et = (0, D.Z)(t),
        en = (0, s.Z)(t),
        er = (0, L.Z)(t),
        ei = (0, g.Z)(t),
        el = (0, _.ZP)(t),
        eo = (0, y.Mn)('ChannelListVoiceContextMenuNormal'),
        ec = (0, T.ZP)(t),
        ea = (0, V.Z)();
    return (0, r.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': U.intl.string(U.t.Xm41aW),
        onSelect: c,
        children: [
            (0, r.jsx)(l.kSQ, { children: null != j ? O : A }),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [Z, R]
                },
                'mark-as-read-or-favorite'
            ),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [F, en, er, b]
                },
                'channel-actions'
            ),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [B, W, z, q, ei, et]
                },
                'voice-actions'
            ),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [el, eo ? ec : Y]
                },
                'notifications'
            ),
            (0, r.jsx)(l.kSQ, { children: X }),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [H, K, J, $]
                },
                'admin-actions'
            ),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [ee, ea]
                },
                'developer-actions'
            )
        ]
    });
}
let Y = (0, a.Z)(
    (0, c.Z)(
        function (e) {
            return (0, Z.Z)() ? (0, r.jsx)(X, R({}, e)) : (0, r.jsx)(q, R({}, e));
        },
        { object: A.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
