e.d(t, { default: () => Y });
var i = e(54381);
e(473749);
var l = e(442837),
    r = e(481060),
    a = e(239091),
    c = e(883385),
    s = e(108843),
    o = e(947440),
    d = e(100527),
    u = e(299206),
    Z = e(916069),
    h = e(895563),
    g = e(212205),
    f = e(478035),
    v = e(62420),
    j = e(420529),
    b = e(554747),
    x = e(924952),
    p = e(423589),
    C = e(427679),
    S = e(398048),
    y = e(109764),
    N = e(3689),
    P = e(323597),
    k = e(852245),
    E = e(493802),
    O = e(367722),
    m = e(461535),
    _ = e(776568),
    L = e(218035),
    Q = e(775666),
    G = e(442754),
    V = e(333805),
    A = e(567521),
    T = e(624514),
    w = e(917327),
    M = e(381924),
    I = e(601274),
    q = e(981631),
    X = e(388032);
function D(n) {
    for (var t = 1; t < arguments.length; t++) {
        var e = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(e);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(e).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = e[t]),
                    t in n
                        ? Object.defineProperty(n, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[t] = i);
            });
    }
    return n;
}
function U(n) {
    let { channel: t, guild: e, onSelect: c } = n,
        s = t.isGuildStageVoice(),
        d = (0, l.e7)([C.Z], () => (s ? C.Z.getStageInstanceByChannel(t.id) : void 0), [s, t.id]),
        Z = (0, y.Z)(t),
        j = (0, b.qY)(t.id),
        S = (0, x.Z)(null == j ? void 0 : j.id, e, t),
        N = (0, A.Z)(t, d),
        P = (0, h.l)(t),
        O = (0, h.P)(t),
        m = (0, g.Z)(t),
        _ = (0, f.Z)(t),
        G = (0, v.Z)(t),
        w = (0, E.Z)(t),
        M = (0, L.Z)(t),
        q = (0, k.Z)(t),
        D = (0, I.Z)(t, e),
        U = (0, u.Z)({
            id: t.id,
            label: X.intl.string(X.t.gFHI3k),
        }),
        H = (0, V.Z)(t),
        Y = (0, o.Z)(t),
        z = (0, p.Mn)("ChannelListVoiceContextMenuFavorite"),
        R = (0, Q.ZP)(t),
        W = (0, T.Z)();
    return (0, i.jsxs)(r.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": X.intl.string(X.t.Xm41aV),
        onSelect: c,
        children: [
            (0, i.jsx)(r.kSQ, { children: null != j ? S : N }),
            (0, i.jsxs)(r.kSQ, {
                children: [_, G, m, P],
            }),
            (0, i.jsxs)(r.kSQ, {
                children: [w, z ? R : M, q],
            }),
            (0, i.jsx)(r.kSQ, { children: Y }),
            (0, i.jsx)(r.kSQ, { children: O }),
            (0, i.jsxs)(r.kSQ, {
                children: [D, Z],
            }),
            (0, i.jsx)(r.kSQ, { children: H }),
            (0, i.jsxs)(r.kSQ, {
                children: [U, W],
            }),
        ],
    });
}
function H(n) {
    let { channel: t, guild: e, onSelect: c } = n,
        s = t.isGuildStageVoice(),
        d = (0, l.e7)([C.Z], () => (s ? C.Z.getStageInstanceByChannel(t.id) : void 0), [s, t.id]),
        Z = (0, m.Z)(t),
        g = (0, y.Z)(t),
        f = (0, b.qY)(t.id),
        v = (0, x.Z)(null == f ? void 0 : f.id, e, t),
        q = (0, A.Z)(t, d),
        D = (0, h.l)(t),
        U = (0, h.P)(t),
        H = (0, E.Z)(t),
        Y = (0, L.Z)(t),
        z = (0, k.Z)(t),
        R = (0, O.Z)(t, e, d),
        W = (0, I.Z)(t, e),
        B = (0, w.Z)(t, e),
        F = (0, M.Z)(t, e.id),
        J = (0, S.Z)(t, e),
        K = (0, N.Z)(t, e),
        $ = (0, P.Z)(t),
        nn = (0, u.Z)({
            id: t.id,
            label: X.intl.string(X.t.gFHI3k),
        }),
        nt = (0, V.Z)(t),
        ne = (0, o.Z)(t),
        ni = (0, G.Z)(t),
        nl = (0, j.Z)(t),
        nr = (0, _.ZP)(t),
        na = (0, p.Mn)("ChannelListVoiceContextMenuNormal"),
        nc = (0, Q.ZP)(t),
        ns = (0, T.Z)();
    return (0, i.jsxs)(r.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": X.intl.string(X.t.Xm41aV),
        onSelect: c,
        children: [
            (0, i.jsx)(r.kSQ, { children: null != f ? v : q }),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [Z, D],
                },
                "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [R, ne, ni, g],
                },
                "channel-actions",
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [F, W, B, H, nl, nt],
                },
                "voice-actions",
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [nr, na ? nc : Y],
                },
                "notifications",
            ),
            (0, i.jsx)(r.kSQ, { children: U }),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [z, J, K, $],
                },
                "admin-actions",
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [nn, ns],
                },
                "developer-actions",
            ),
        ],
    });
}
let Y = (0, s.Z)(
    (0, c.Z)(
        function (n) {
            return (0, Z.Z)() ? (0, i.jsx)(U, D({}, n)) : (0, i.jsx)(H, D({}, n));
        },
        { object: q.qAy.CONTEXT_MENU },
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
