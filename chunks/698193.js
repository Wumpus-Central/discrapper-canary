e.d(t, {
    default: () => z,
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(442433),
    s = e(847767),
    c = e(358367),
    o = e(468389),
    d = e(793574),
    u = e(50268),
    A = e(515610),
    b = e(133238),
    g = e(795144),
    h = e(979807),
    j = e(671470),
    v = e(690953),
    p = e(508654),
    x = e(24661),
    f = e(769591),
    y = e(446600),
    C = e(533957),
    m = e(886393),
    V = e(477190),
    O = e(307623),
    E = e(317910),
    G = e(173682),
    X = e(475777),
    N = e(848977),
    S = e(995102),
    _ = e(288104),
    L = e(661504),
    P = e(969128),
    w = e(304694),
    T = e(217754),
    k = e(417925),
    D = e(671483),
    I = e(217563),
    M = e(788408),
    B = e(652215),
    U = e(985018);

function Z(n) {
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

function H(n) {
    let { channel: t, guild: e, onSelect: s } = n,
        c = t.isGuildStageVoice(),
        d = (0, l.bG)([y.A], () => (c ? y.A.getStageInstanceByChannel(t.id) : void 0), [c, t.id]),
        A = (0, m.A)(t),
        v = (0, p.Qs)(t.id),
        C = (0, x.A)(null == v ? void 0 : v.id, e, t),
        V = (0, T.A)(t, d),
        O = (0, b.m)(t),
        X = (0, b.y)(t),
        N = (0, g.A)(t),
        S = (0, h.A)(t),
        P = (0, j.A)(t),
        D = (0, G.A)(t),
        I = (0, _.A)(t),
        B = (0, E.A)(t),
        Z = (0, M.A)(t, e),
        H = (0, u.A)({
            id: t.id,
            label: U.intl.string(U.t.gFHI3k),
        }),
        Y = (0, w.A)(t),
        z = (0, o.A)(t),
        F = (0, f.os)("ChannelListVoiceContextMenuFavorite"),
        Q = (0, L.Ay)(t),
        R = (0, k.A)();
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": U.intl.string(U.t.Xm41aV),
        onSelect: s,
        children: [
            (0, i.jsx)(r.rXV, {
                children: null != v ? C : V,
            }),
            (0, i.jsxs)(r.rXV, {
                children: [S, P, N, O],
            }),
            (0, i.jsxs)(r.rXV, {
                children: [D, F ? Q : I, B],
            }),
            (0, i.jsx)(r.rXV, {
                children: z,
            }),
            (0, i.jsxs)(r.rXV, {
                children: [Z, A],
            }),
            (0, i.jsx)(r.rXV, {
                children: X,
            }),
            (0, i.jsx)(r.rXV, {
                children: Y,
            }),
            (0, i.jsxs)(r.rXV, {
                children: [H, R],
            }),
        ],
    });
}

function Y(n) {
    let { channel: t, guild: e, onSelect: s } = n,
        c = t.isGuildStageVoice(),
        d = (0, l.bG)([y.A], () => (c ? y.A.getStageInstanceByChannel(t.id) : void 0), [c, t.id]),
        A = (0, N.A)(t),
        g = (0, m.A)(t),
        h = (0, p.Qs)(t.id),
        j = (0, x.A)(null == h ? void 0 : h.id, e, t),
        B = (0, T.A)(t, d),
        Z = (0, b.m)(t),
        H = (0, b.y)(t),
        Y = (0, G.A)(t),
        z = (0, _.A)(t),
        F = (0, E.A)(t),
        Q = (0, X.A)(t, e, d),
        R = (0, M.A)(t, e),
        W = (0, D.A)(t, e),
        q = (0, I.A)(t, e.id),
        K = (0, C.A)(t, e),
        J = (0, V.A)(t, e),
        $ = (0, O.A)(t),
        nn = (0, u.A)({
            id: t.id,
            label: U.intl.string(U.t.gFHI3k),
        }),
        nt = (0, w.A)(t),
        ne = (0, o.A)(t),
        ni = (0, P.A)(t),
        nl = (0, v.A)(t),
        nr = (0, S.Ay)(t),
        na = (0, f.os)("ChannelListVoiceContextMenuNormal"),
        ns = (0, L.Ay)(t),
        nc = (0, k.A)();
    return (0, i.jsxs)(r.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": U.intl.string(U.t.Xm41aV),
        onSelect: s,
        children: [
            (0, i.jsx)(r.rXV, {
                children: null != h ? j : B,
            }),
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [A, Z],
                },
                "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [Q, ne, ni, g],
                },
                "channel-actions",
            ),
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [q, R, W, Y, nl, nt],
                },
                "voice-actions",
            ),
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [nr, na ? ns : z],
                },
                "notifications",
            ),
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [F, K, J, $],
                },
                "admin-actions",
            ),
            (0, i.jsx)(r.rXV, {
                children: H,
            }),
            (0, i.jsxs)(
                r.rXV,
                {
                    children: [nn, nc],
                },
                "developer-actions",
            ),
        ],
    });
}
let z = (0, c.A)(
    (0, s.A)(
        function (n) {
            return (0, A.A)() ? (0, i.jsx)(H, Z({}, n)) : (0, i.jsx)(Y, Z({}, n));
        },
        {
            object: B.ZSU.CONTEXT_MENU,
        },
    ),
    [d.A.CONTEXT_MENU, d.A.CHANNEL_LIST_VOICE_CHANNEL_MENU],
);
