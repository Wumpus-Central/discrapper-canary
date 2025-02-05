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
    C = i(554747),
    f = i(924952),
    S = i(423589),
    _ = i(427679),
    E = i(398048),
    N = i(109764),
    T = i(3689),
    p = i(323597),
    P = i(852245),
    m = i(493802),
    k = i(367722),
    O = i(461535),
    L = i(776568),
    b = i(218035),
    Q = i(775666),
    V = i(442754),
    G = i(333805),
    I = i(567521),
    M = i(624514),
    y = i(917327),
    A = i(381924),
    U = i(601274),
    R = i(981631),
    X = i(388032);
function q(n) {
    let { channel: t, guild: i, onSelect: d } = n,
        s = t.isGuildStageVoice(),
        o = (0, l.e7)([_.Z], () => (s ? _.Z.getStageInstanceByChannel(t.id) : void 0), [s, t.id]),
        Z = (0, N.Z)(t),
        j = (0, C.qY)(t.id),
        E = (0, f.Z)(null == j ? void 0 : j.id, i, t),
        T = (0, I.Z)(t, o),
        p = (0, h.l)(t),
        k = (0, h.P)(t),
        O = (0, x.Z)(t),
        L = (0, g.Z)(t),
        V = (0, v.Z)(t),
        y = (0, m.Z)(t),
        A = (0, b.Z)(t),
        R = (0, P.Z)(t),
        q = (0, U.Z)(t, i),
        D = (0, u.Z)({
            id: t.id,
            label: X.intl.string(X.t.gFHI3t)
        }),
        Y = (0, G.Z)(t),
        F = (0, c.Z)(t),
        H = (0, S.Mn)('ChannelListVoiceContextMenuFavorite'),
        W = (0, Q.ZP)(t),
        w = (0, M.Z)();
    return (0, e.jsxs)(a.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': X.intl.string(X.t.Xm41aW),
        onSelect: d,
        children: [
            (0, e.jsx)(a.kSQ, { children: null != j ? E : T }),
            (0, e.jsxs)(a.kSQ, {
                children: [L, V, O, p]
            }),
            (0, e.jsxs)(a.kSQ, {
                children: [y, H ? W : A, R]
            }),
            (0, e.jsx)(a.kSQ, { children: F }),
            (0, e.jsx)(a.kSQ, { children: k }),
            (0, e.jsxs)(a.kSQ, {
                children: [q, Z]
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
        o = (0, l.e7)([_.Z], () => (s ? _.Z.getStageInstanceByChannel(t.id) : void 0), [s, t.id]),
        Z = (0, O.Z)(t),
        x = (0, N.Z)(t),
        g = (0, C.qY)(t.id),
        v = (0, f.Z)(null == g ? void 0 : g.id, i, t),
        R = (0, I.Z)(t, o),
        q = (0, h.l)(t),
        D = (0, h.P)(t),
        Y = (0, m.Z)(t),
        F = (0, b.Z)(t),
        H = (0, P.Z)(t),
        W = (0, k.Z)(t, i, o),
        w = (0, U.Z)(t, i),
        z = (0, y.Z)(t, i),
        B = (0, A.Z)(t, i.id),
        K = (0, E.Z)(t, i),
        J = (0, T.Z)(t, i),
        $ = (0, p.Z)(t),
        nn = (0, u.Z)({
            id: t.id,
            label: X.intl.string(X.t.gFHI3t)
        }),
        nt = (0, G.Z)(t),
        ni = (0, c.Z)(t),
        ne = (0, V.Z)(t),
        nl = (0, j.Z)(t),
        na = (0, L.ZP)(t),
        nr = (0, S.Mn)('ChannelListVoiceContextMenuNormal'),
        nd = (0, Q.ZP)(t),
        ns = (0, M.Z)();
    return (0, e.jsxs)(a.v2r, {
        navId: 'channel-context',
        onClose: r.Zy,
        'aria-label': X.intl.string(X.t.Xm41aW),
        onSelect: d,
        children: [
            (0, e.jsx)(a.kSQ, { children: null != g ? v : R }),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [Z, q]
                },
                'mark-as-read-or-favorite'
            ),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [W, ni, ne, x]
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
                    children: [na, nr ? nd : F]
                },
                'notifications'
            ),
            (0, e.jsx)(a.kSQ, { children: D }),
            (0, e.jsxs)(
                a.kSQ,
                {
                    children: [H, K, J, $]
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
            return (0, Z.Z)() ? (0, e.jsx)(q, { ...n }) : (0, e.jsx)(D, { ...n });
        },
        { object: R.qAy.CONTEXT_MENU }
    ),
    [o.Z.CONTEXT_MENU, o.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU]
);
