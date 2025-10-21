n.d(t, { default: () => M });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(239091),
    o = n(883385),
    l = n(108843),
    s = n(947440),
    c = n(100527),
    d = n(299206),
    u = n(916069),
    b = n(895563),
    p = n(212205),
    f = n(478035),
    h = n(62420),
    m = n(423589),
    g = n(398048),
    j = n(109764),
    _ = n(3689),
    v = n(323597),
    y = n(852245),
    x = n(367722),
    O = n(461535),
    P = n(776568),
    C = n(218035),
    k = n(775666),
    w = n(593589),
    Z = n(442754),
    S = n(981631),
    I = n(388032);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e) {
    let { channel: t, onSelect: n } = e,
        o = (0, O.Z)(t),
        l = (0, j.Z)(t),
        c = (0, b.l)(t),
        u = (0, b.P)(t),
        g = (0, p.Z)(t),
        _ = (0, f.Z)(t),
        v = (0, h.Z)(t),
        x = (0, P.ZP)(t),
        Z = (0, C.Z)(t),
        S = (0, y.Z)(t),
        N = (0, d.Z)({
            id: t.id,
            label: I.intl.string(I.t.gFHI3k),
        }),
        T = (0, s.Z)(t),
        E = (0, k.ZP)(t),
        M = (0, m.Mn)("ChannelContextFavoritesMenu"),
        A = (0, w.Z)(t, "list_favorites_text_channel_context_menu");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: n,
        children: [
            (0, r.jsx)(i.kSQ, { children: o }),
            (0, r.jsxs)(i.kSQ, {
                children: [_, v, g, c],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [x, M ? E : Z],
            }),
            (0, r.jsx)(i.kSQ, { children: S }),
            (0, r.jsx)(i.kSQ, { children: T }),
            (0, r.jsx)(i.kSQ, { children: u }),
            (0, r.jsxs)(i.kSQ, {
                children: [l, A],
            }),
            (0, r.jsx)(i.kSQ, { children: N }),
        ],
    });
}
function E(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        l = (0, O.Z)(t),
        c = (0, j.Z)(t),
        u = (0, b.l)(t),
        p = (0, b.P)(t),
        f = (0, Z.Z)(t),
        h = (0, P.ZP)(t),
        S = (0, y.Z)(t),
        N = (0, x.Z)(t, n),
        T = (0, g.Z)(t, n),
        E = (0, _.Z)(t, n),
        M = (0, v.Z)(t),
        A = (0, d.Z)({
            id: t.id,
            label: I.intl.string(I.t.gFHI3k),
        }),
        D = (0, s.Z)(t),
        L = (0, w.Z)(t, "list_text_channel_context_menu"),
        U = (0, C.Z)(t),
        F = (0, k.ZP)(t),
        B = (0, m.Mn)("ChannelContextMenuNormal");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: o,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [l, u],
                },
                "mark-as-read-or-favorite",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [N, f, c, L],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [h, B ? F : U],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [S, T, E, M],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.kSQ, { children: D }),
            (0, r.jsx)(i.kSQ, { children: p }),
            (0, r.jsx)(i.kSQ, { children: A }, "developer-actions"),
        ],
    });
}
let M = (0, l.Z)(
    (0, o.Z)(
        function (e) {
            return (0, u.Z)() ? (0, r.jsx)(T, N({}, e)) : (0, r.jsx)(E, N({}, e));
        },
        { object: S.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
