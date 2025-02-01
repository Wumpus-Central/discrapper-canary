i.d(t, { default: () => Y });
var e = i(200651);
i(192379);
var l = i(442837),
    a = i(481060),
    r = i(239091),
    d = i(883385),
    s = i(108843),
    c = i(947440),
    o = i(100527),
    u = i(299206),
    Z = i(916069),
    h = i(895563),
    x = i(212205),
    g = i(478035),
    v = i(62420),
    j = i(420529),
    f = i(554747),
    C = i(924952),
    S = i(423589),
    N = i(427679),
    E = i(398048),
    _ = i(109764),
    p = i(3689),
    m = i(323597),
    P = i(852245),
    k = i(493802),
    T = i(367722),
    L = i(461535),
    b = i(776568),
    Q = i(218035),
    O = i(775666),
    V = i(442754),
    G = i(333805),
    M = i(567521),
    y = i(624514),
    A = i(917327),
    I = i(381924),
    U = i(601274),
    X = i(981631),
    q = i(388032);
function R(n) {
    let { channel: t, guild: i, onSelect: d } = n,
        s = t.isGuildStageVoice(),
        o = (0, l.e7)([N.Z], () => (s ? N.Z.getStageInstanceByChannel(t.id) : void 0), [s, t.id]),
        Z = (0, _.Z)(t),
        j = (0, f.qY)(t.id),
        E = (0, C.Z)(null == j ? void 0 : j.id, i, t),
        p = (0, M.Z)(t, o),
        m = (0, h.l)(t),
        T = (0, h.P)(t),
        L = (0, x.Z)(t),
        b = (0, g.Z)(t),
        V = (0, v.Z)(t),
        A = (0, k.Z)(t),
        I = (0, Q.Z)(t),
        X = (0, P.Z)(t),
        R = (0, U.Z)(t, i),
        D = (0, u.Z)({
            id: t.id,
            label: q.intl.string(q.t.gFHI3t)
        }),
        Y = (0, G.Z)(t),
        H = (0, c.Z)(t),
        W = (0, S.Mn)('ChannelListVoiceContextMenuFavorite'),
        F = (0, O.ZP)(t),
        w = (0, y.Z)();
    return (0, e.jsxs)(a.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': q.intl.string(q.t.Xm41aW),
        onSelect: d,
        children: [
            (0, e.jsx)(a.kSQ, { children: null != j ? E : p }),
            (0, e.jsxs)(a.kSQ, {
                children: [b, V, L, m]
            }),
            (0, e.jsxs)(a.kSQ, {
                children: [A, W ? F : I, X]
            }),
            (0, e.jsx)(a.kSQ, { children: H }),
            (0, e.jsx)(a.kSQ, { children: T }),
            (0, e.jsxs)(a.kSQ, {
                children: [R, Z]
            }),
            (0, e.jsx)(a.kSQ, { children: Y }),
            (0, e.jsxs)(a.kSQ, {
                children: [D, w]
            })
        ]
    });
}
function D(n) {
    let { channel: t, guild: i, onSelect: d } = n,
        s = t.isGuildStageVoice(),
        o = (0, l.e7)([N.Z], () => (s ? N.Z.getStageInstanceByChannel(t.id) : void 0), [s, t.id]),
        Z = (0, L.Z)(t),
        x = (0, _.Z)(t),
        g = (0, f.qY)(t.id),
        v = (0, C.Z)(null == g ? void 0 : g.id, i, t),
        X = (0, M.Z)(t, o),
        R = (0, h.l)(t),
        D = (0, h.P)(t),
        Y = (0, k.Z)(t),
        H = (0, Q.Z)(t),
        W = (0, P.Z)(t),
        F = (0, T.Z)(t, i, o),
        w = (0, U.Z)(t, i),
        z = (0, A.Z)(t, i),
        B = (0, I.Z)(t, i.id),
        K = (0, E.Z)(t, i),
        J = (0, p.Z)(t, i),
        $ = (0, m.Z)(t),
        nn = (0, u.Z)({
            id: t.id,
            label: q.intl.string(q.t.gFHI3t)
        }),
        nt = (0, G.Z)(t),
        ni = (0, c.Z)(t),
        ne = (0, V.Z)(t),
        nl = (0, j.Z)(t),
        na = (0, b.ZP)(t),
        nr = (0, S.Mn)('ChannelListVoiceContextMenuNormal'),
        nd = (0, O.ZP)(t),
        ns = (0, y.Z)();
    return (0, e.jsxs)(a.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': q.intl.string(q.t.Xm41aW),
        onSelect: d,
        children: [
            (0, e.jsx)(a.kSQ, { children: null != g ? v : X }),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [Z, R]
                },
                'mark-as-read-or-favorite'
            ),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [F, ni, ne, x]
                },
                'channel-actions'
            ),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [B, w, z, Y, nl, nt]
                },
                'voice-actions'
            ),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [na, nr ? nd : H]
                },
                'notifications'
            ),
            (0, e.jsx)(a.kSQ, { children: D }),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [W, K, J, $]
                },
                'admin-actions'
            ),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [nn, ns]
                },
                'developer-actions'
            )
        ]
    });
}
let Y = (0, s.Z)(
    (0, d.Z)(
        function (n) {
            return (0, Z.Z)() ? (0, e.jsx)(R, { ...n }) : (0, e.jsx)(D, { ...n });
        },
        { object: X.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
