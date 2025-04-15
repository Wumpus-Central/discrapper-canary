n.d(t, { default: () => q });
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
    N = n(109764),
    x = n(3689),
    S = n(323597),
    m = n(852245),
    C = n(493802),
    E = n(367722),
    w = n(461535),
    _ = n(776568),
    k = n(218035),
    W = n(775666),
    T = n(442754),
    L = n(333805),
    D = n(567521),
    Q = n(624514),
    V = n(917327),
    G = n(381924),
    M = n(601274),
    I = n(981631),
    A = n(388032);
function U(e) {
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
function R(e) {
    let { channel: t, guild: n, onSelect: c } = e,
        a = t.isGuildStageVoice(),
        u = (0, i.e7)([v.Z], () => (a ? v.Z.getStageInstanceByChannel(t.id) : void 0), [a, t.id]),
        Z = (0, N.Z)(t),
        g = (0, p.qY)(t.id),
        P = (0, h.Z)(null == g ? void 0 : g.id, n, t),
        x = (0, D.Z)(t, u),
        S = (0, f.l)(t),
        E = (0, f.P)(t),
        w = (0, b.Z)(t),
        _ = (0, j.Z)(t),
        T = (0, O.Z)(t),
        V = (0, C.Z)(t),
        G = (0, k.Z)(t),
        I = (0, m.Z)(t),
        U = (0, M.Z)(t, n),
        R = (0, d.Z)({
            id: t.id,
            label: A.NW.string(A.t.gFHI3t)
        }),
        X = (0, L.Z)(t),
        q = (0, s.Z)(t),
        Y = (0, y.Mn)('ChannelListVoiceContextMenuFavorite'),
        H = (0, W.ZP)(t),
        F = (0, Q.Z)();
    return (0, r.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': A.NW.string(A.t.Xm41aW),
        onSelect: c,
        children: [
            (0, r.jsx)(l.kSQ, { children: null != g ? P : x }),
            (0, r.jsxs)(l.kSQ, {
                children: [_, T, w, S]
            }),
            (0, r.jsxs)(l.kSQ, {
                children: [V, Y ? H : G, I]
            }),
            (0, r.jsx)(l.kSQ, { children: q }),
            (0, r.jsx)(l.kSQ, { children: E }),
            (0, r.jsxs)(l.kSQ, {
                children: [U, Z]
            }),
            (0, r.jsx)(l.kSQ, { children: X }),
            (0, r.jsxs)(l.kSQ, {
                children: [R, F]
            })
        ]
    });
}
function X(e) {
    let { channel: t, guild: n, onSelect: c } = e,
        a = t.isGuildStageVoice(),
        u = (0, i.e7)([v.Z], () => (a ? v.Z.getStageInstanceByChannel(t.id) : void 0), [a, t.id]),
        Z = (0, w.Z)(t),
        b = (0, N.Z)(t),
        j = (0, p.qY)(t.id),
        O = (0, h.Z)(null == j ? void 0 : j.id, n, t),
        I = (0, D.Z)(t, u),
        U = (0, f.l)(t),
        R = (0, f.P)(t),
        X = (0, C.Z)(t),
        q = (0, k.Z)(t),
        Y = (0, m.Z)(t),
        H = (0, E.Z)(t, n, u),
        F = (0, M.Z)(t, n),
        z = (0, V.Z)(t, n),
        B = (0, G.Z)(t, n.id),
        K = (0, P.Z)(t, n),
        J = (0, x.Z)(t, n),
        $ = (0, S.Z)(t),
        ee = (0, d.Z)({
            id: t.id,
            label: A.NW.string(A.t.gFHI3t)
        }),
        et = (0, L.Z)(t),
        en = (0, s.Z)(t),
        er = (0, T.Z)(t),
        ei = (0, g.Z)(t),
        el = (0, _.ZP)(t),
        eo = (0, y.Mn)('ChannelListVoiceContextMenuNormal'),
        ec = (0, W.ZP)(t),
        ea = (0, Q.Z)();
    return (0, r.jsxs)(l.v2r, {
        navId: 'channel-context',
        onClose: o.Zy,
        'aria-label': A.NW.string(A.t.Xm41aW),
        onSelect: c,
        children: [
            (0, r.jsx)(l.kSQ, { children: null != j ? O : I }),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [Z, U]
                },
                'mark-as-read-or-favorite'
            ),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [H, en, er, b]
                },
                'channel-actions'
            ),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [B, F, z, X, ei, et]
                },
                'voice-actions'
            ),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [el, eo ? ec : q]
                },
                'notifications'
            ),
            (0, r.jsx)(l.kSQ, { children: R }),
            (0, r.jsxs)(
                l.kSQ,
                {
                    children: [Y, K, J, $]
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
let q = (0, a.Z)(
    (0, c.Z)(
        function (e) {
            return (0, Z.Z)() ? (0, r.jsx)(R, U({}, e)) : (0, r.jsx)(X, U({}, e));
        },
        { object: I.qAy.CONTEXT_MENU }
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
