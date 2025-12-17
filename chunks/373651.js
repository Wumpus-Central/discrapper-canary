n.d(t, { default: () => M });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(239091),
    o = n(883385),
    l = n(108843),
    s = n(947440),
    c = n(100527),
    u = n(299206),
    d = n(916069),
    b = n(895563),
    f = n(212205),
    h = n(478035),
    p = n(62420),
    m = n(423589),
    g = n(398048),
    j = n(109764),
    v = n(3689),
    y = n(323597),
    x = n(852245),
    O = n(367722),
    P = n(461535),
    C = n(776568),
    k = n(218035),
    Z = n(775666),
    w = n(593589),
    _ = n(442754),
    S = n(981631),
    E = n(388032);
function I(e) {
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
        o = (0, P.Z)(t),
        l = (0, j.Z)(t),
        c = (0, b.l)(t),
        d = (0, b.P)(t),
        g = (0, f.Z)(t),
        v = (0, h.Z)(t),
        y = (0, p.Z)(t),
        O = (0, C.ZP)(t),
        _ = (0, k.Z)(t),
        S = (0, x.Z)(t),
        I = (0, u.Z)({
            id: t.id,
            label: E.intl.string(E.t.gFHI3k),
        }),
        N = (0, s.Z)(t),
        T = (0, Z.ZP)(t),
        M = (0, m.Mn)("ChannelContextFavoritesMenu"),
        D = (0, w.Z)(t, "list_favorites_text_channel_context_menu");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: n,
        children: [
            (0, r.jsx)(i.kSQ, { children: o }),
            (0, r.jsxs)(i.kSQ, {
                children: [v, y, g, c],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [O, M ? T : _],
            }),
            (0, r.jsx)(i.kSQ, { children: S }),
            (0, r.jsx)(i.kSQ, { children: N }),
            (0, r.jsx)(i.kSQ, { children: d }),
            (0, r.jsxs)(i.kSQ, {
                children: [l, D],
            }),
            (0, r.jsx)(i.kSQ, { children: I }),
        ],
    });
}
function T(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        l = (0, P.Z)(t),
        c = (0, j.Z)(t),
        d = (0, b.l)(t),
        f = (0, b.P)(t),
        h = (0, _.Z)(t),
        p = (0, C.ZP)(t),
        S = (0, x.Z)(t),
        I = (0, O.Z)(t, n),
        N = (0, g.Z)(t, n),
        T = (0, v.Z)(t, n),
        M = (0, y.Z)(t),
        D = (0, u.Z)({
            id: t.id,
            label: E.intl.string(E.t.gFHI3k),
        }),
        A = (0, s.Z)(t),
        U = (0, w.Z)(t, "list_text_channel_context_menu"),
        L = (0, k.Z)(t),
        F = (0, Z.ZP)(t),
        V = (0, m.Mn)("ChannelContextMenuNormal");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": E.intl.string(E.t.Xm41aV),
        onSelect: o,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [l, d],
                },
                "mark-as-read-or-favorite",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [I, h, c, U],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [p, V ? F : L],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [S, N, T, M],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.kSQ, { children: A }),
            (0, r.jsx)(i.kSQ, { children: f }),
            (0, r.jsx)(i.kSQ, { children: D }, "developer-actions"),
        ],
    });
}
let M = (0, l.Z)(
    (0, o.Z)(
        function (e) {
            return (0, d.Z)() ? (0, r.jsx)(N, I({}, e)) : (0, r.jsx)(T, I({}, e));
        },
        { object: S.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
