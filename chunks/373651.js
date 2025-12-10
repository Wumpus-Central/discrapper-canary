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
    h = n(895563),
    f = n(212205),
    b = n(478035),
    p = n(62420),
    m = n(423589),
    g = n(398048),
    j = n(109764),
    v = n(3689),
    y = n(323597),
    x = n(852245),
    O = n(367722),
    _ = n(461535),
    P = n(776568),
    C = n(218035),
    S = n(775666),
    Z = n(593589),
    E = n(442754),
    k = n(981631),
    I = n(388032);
function w(e) {
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
        o = (0, _.Z)(t),
        l = (0, j.Z)(t),
        c = (0, h.l)(t),
        u = (0, h.P)(t),
        g = (0, f.Z)(t),
        v = (0, b.Z)(t),
        y = (0, p.Z)(t),
        O = (0, P.ZP)(t),
        E = (0, C.Z)(t),
        k = (0, x.Z)(t),
        w = (0, d.Z)({
            id: t.id,
            label: I.intl.string(I.t.gFHI3k),
        }),
        N = (0, s.Z)(t),
        T = (0, S.ZP)(t),
        M = (0, m.Mn)("ChannelContextFavoritesMenu"),
        D = (0, Z.Z)(t, "list_favorites_text_channel_context_menu");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: a.Zy,
        "aria-label": I.intl.string(I.t.Xm41aV),
        onSelect: n,
        children: [
            (0, r.jsx)(i.kSQ, { children: o }),
            (0, r.jsxs)(i.kSQ, {
                children: [v, y, g, c],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [O, M ? T : E],
            }),
            (0, r.jsx)(i.kSQ, { children: k }),
            (0, r.jsx)(i.kSQ, { children: N }),
            (0, r.jsx)(i.kSQ, { children: u }),
            (0, r.jsxs)(i.kSQ, {
                children: [l, D],
            }),
            (0, r.jsx)(i.kSQ, { children: w }),
        ],
    });
}
function T(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        l = (0, _.Z)(t),
        c = (0, j.Z)(t),
        u = (0, h.l)(t),
        f = (0, h.P)(t),
        b = (0, E.Z)(t),
        p = (0, P.ZP)(t),
        k = (0, x.Z)(t),
        w = (0, O.Z)(t, n),
        N = (0, g.Z)(t, n),
        T = (0, v.Z)(t, n),
        M = (0, y.Z)(t),
        D = (0, d.Z)({
            id: t.id,
            label: I.intl.string(I.t.gFHI3k),
        }),
        A = (0, s.Z)(t),
        F = (0, Z.Z)(t, "list_text_channel_context_menu"),
        L = (0, C.Z)(t),
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
                    children: [w, b, c, F],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [p, B ? U : L],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [k, N, T, M],
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
            return (0, u.Z)() ? (0, r.jsx)(N, w({}, e)) : (0, r.jsx)(T, w({}, e));
        },
        { object: k.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
