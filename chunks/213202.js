n.d(t, { default: () => H });
var i = n(54381);
n(473749);
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
    E = n(852245),
    m = n(493802),
    N = n(367722),
    k = n(461535),
    _ = n(776568),
    w = n(218035),
    T = n(775666),
    L = n(442754),
    Q = n(333805),
    V = n(567521),
    A = n(624514),
    G = n(917327),
    I = n(381924),
    M = n(601274),
    D = n(981631),
    R = n(388032);
function U(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
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
        k = (0, g.Z)(t),
        _ = (0, h.Z)(t),
        L = (0, b.Z)(t),
        G = (0, m.Z)(t),
        I = (0, w.Z)(t),
        D = (0, E.Z)(t),
        U = (0, M.Z)(t, n),
        X = (0, d.Z)({
            id: t.id,
            label: R.intl.string(R.t.gFHI3k),
        }),
        q = (0, Q.Z)(t),
        H = (0, s.Z)(t),
        Y = (0, O.Mn)("ChannelListVoiceContextMenuFavorite"),
        F = (0, T.ZP)(t),
        z = (0, A.Z)();
    return (0, i.jsxs)(l.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": R.intl.string(R.t.Xm41aV),
        onSelect: o,
        children: [
            (0, i.jsx)(l.kSQ, { children: null != j ? x : P }),
            (0, i.jsxs)(l.kSQ, {
                children: [_, L, k, C],
            }),
            (0, i.jsxs)(l.kSQ, {
                children: [G, Y ? F : I, D],
            }),
            (0, i.jsx)(l.kSQ, { children: H }),
            (0, i.jsx)(l.kSQ, { children: N }),
            (0, i.jsxs)(l.kSQ, {
                children: [U, Z],
            }),
            (0, i.jsx)(l.kSQ, { children: q }),
            (0, i.jsxs)(l.kSQ, {
                children: [X, z],
            }),
        ],
    });
}
function q(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        c = t.isGuildStageVoice(),
        u = (0, r.e7)([y.Z], () => (c ? y.Z.getStageInstanceByChannel(t.id) : void 0), [c, t.id]),
        Z = (0, k.Z)(t),
        g = (0, S.Z)(t),
        h = (0, v.qY)(t.id),
        b = (0, p.Z)(null == h ? void 0 : h.id, n, t),
        D = (0, V.Z)(t, u),
        U = (0, f.l)(t),
        X = (0, f.P)(t),
        q = (0, m.Z)(t),
        H = (0, w.Z)(t),
        Y = (0, E.Z)(t),
        F = (0, N.Z)(t, n, u),
        z = (0, M.Z)(t, n),
        W = (0, G.Z)(t, n),
        B = (0, I.Z)(t, n.id),
        J = (0, x.Z)(t, n),
        K = (0, P.Z)(t, n),
        $ = (0, C.Z)(t),
        ee = (0, d.Z)({
            id: t.id,
            label: R.intl.string(R.t.gFHI3k),
        }),
        et = (0, Q.Z)(t),
        en = (0, s.Z)(t),
        ei = (0, L.Z)(t),
        er = (0, j.Z)(t),
        el = (0, _.ZP)(t),
        ea = (0, O.Mn)("ChannelListVoiceContextMenuNormal"),
        eo = (0, T.ZP)(t),
        ec = (0, A.Z)();
    return (0, i.jsxs)(l.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": R.intl.string(R.t.Xm41aV),
        onSelect: o,
        children: [
            (0, i.jsx)(l.kSQ, { children: null != h ? b : D }),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [Z, U],
                },
                "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [F, en, ei, g],
                },
                "channel-actions",
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [B, z, W, q, er, et],
                },
                "voice-actions",
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [el, ea ? eo : H],
                },
                "notifications",
            ),
            (0, i.jsx)(l.kSQ, { children: X }),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [Y, J, K, $],
                },
                "admin-actions",
            ),
            (0, i.jsxs)(
                l.kSQ,
                {
                    children: [ee, ec],
                },
                "developer-actions",
            ),
        ],
    });
}
let H = (0, c.Z)(
    (0, o.Z)(
        function (e) {
            return (0, Z.Z)() ? (0, i.jsx)(X, U({}, e)) : (0, i.jsx)(q, U({}, e));
        },
        { object: D.qAy.CONTEXT_MENU },
    ),
    [u.Z.CONTEXT_MENU, u.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
