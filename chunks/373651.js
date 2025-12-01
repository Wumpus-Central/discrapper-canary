n.d(t, { default: () => M });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(239091),
    o = n(883385),
    l = n(108843),
    s = n(947440),
    c = n(100527),
    d = n(299206),
    u = n(916069),
    p = n(895563),
    h = n(212205),
    b = n(478035),
    f = n(62420),
    m = n(423589),
    g = n(398048),
    j = n(109764),
    v = n(3689),
    _ = n(323597),
    y = n(852245),
    x = n(367722),
    O = n(461535),
    C = n(776568),
    P = n(218035),
    S = n(775666),
    k = n(593589),
    Z = n(442754),
    w = n(981631),
    I = n(388032);
function E(e) {
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
function N(e) {
    let { channel: t, onSelect: n } = e,
        o = (0, O.Z)(t),
        l = (0, j.Z)(t),
        c = (0, p.l)(t),
        u = (0, p.P)(t),
        g = (0, h.Z)(t),
        v = (0, b.Z)(t),
        _ = (0, f.Z)(t),
        x = (0, C.ZP)(t),
        Z = (0, P.Z)(t),
        w = (0, y.Z)(t),
        E = (0, d.Z)({
            id: t.id,
            label: I.intl.string(I.t.gFHI3k),
        }),
        N = (0, s.Z)(t),
        T = (0, S.ZP)(t),
        M = (0, m.Mn)("ChannelContextFavoritesMenu"),
        A = (0, k.Z)(t, "list_favorites_text_channel_context_menu");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: n,
        children: [
            (0, r.jsx)(i.kSQ, { children: o }),
            (0, r.jsxs)(i.kSQ, {
                children: [v, _, g, c],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [x, M ? T : Z],
            }),
            (0, r.jsx)(i.kSQ, { children: w }),
            (0, r.jsx)(i.kSQ, { children: N }),
            (0, r.jsx)(i.kSQ, { children: u }),
            (0, r.jsxs)(i.kSQ, {
                children: [l, A],
            }),
            (0, r.jsx)(i.kSQ, { children: E }),
        ],
    });
}
function T(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        l = (0, O.Z)(t),
        c = (0, j.Z)(t),
        u = (0, p.l)(t),
        h = (0, p.P)(t),
        b = (0, Z.Z)(t),
        f = (0, C.ZP)(t),
        w = (0, y.Z)(t),
        E = (0, x.Z)(t, n),
        N = (0, g.Z)(t, n),
        T = (0, v.Z)(t, n),
        M = (0, _.Z)(t),
        A = (0, d.Z)({
            id: t.id,
            label: I.intl.string(I.t.gFHI3k),
        }),
        D = (0, s.Z)(t),
        L = (0, k.Z)(t, "list_text_channel_context_menu"),
        F = (0, P.Z)(t),
        U = (0, S.ZP)(t),
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
                    children: [E, b, c, L],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [f, B ? U : F],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [w, N, T, M],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.kSQ, { children: D }),
            (0, r.jsx)(i.kSQ, { children: h }),
            (0, r.jsx)(i.kSQ, { children: A }, "developer-actions"),
        ],
    });
}
let M = (0, l.Z)(
    (0, o.Z)(
        function (e) {
            return (0, u.Z)() ? (0, r.jsx)(N, E({}, e)) : (0, r.jsx)(T, E({}, e));
        },
        { object: w.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
