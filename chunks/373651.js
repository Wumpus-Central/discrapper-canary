t.d(n, { default: () => B });
var i = t(951288);
t(647438);
var r = t(481060),
    o = t(239091),
    a = t(883385),
    c = t(108843),
    l = t(947440),
    d = t(100527),
    _ = t(299206),
    s = t(916069),
    p = t(895563),
    u = t(212205),
    f = t(478035),
    b = t(62420),
    m = t(423589),
    h = t(398048),
    g = t(109764),
    C = t(3689),
    j = t(323597),
    x = t(852245),
    P = t(367722),
    v = t(461535),
    y = t(776568),
    I = t(218035),
    O = t(775666),
    T = t(593589),
    w = t(442754),
    Z = t(981631),
    S = t(388032);
function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function k(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, v.Z)(n),
        c = (0, g.Z)(n),
        d = (0, p.l)(n),
        s = (0, p.P)(n),
        h = (0, u.Z)(n),
        C = (0, f.Z)(n),
        j = (0, b.Z)(n),
        P = (0, y.ZP)(n),
        T = (0, I.Z)(n),
        w = (0, x.Z)(n),
        Z = (0, _.Z)({
            id: n.id,
            label: S.intl.string(S.t.gFHI3t),
        }),
        E = (0, l.Z)(n),
        k = (0, O.ZP)(n),
        L = (0, m.Mn)("ChannelContextFavoritesMenu");
    return (0, i.jsxs)(r.v2r, {
        navId: "channel-context",
        onClose: o.Zy,
        "aria-label": S.intl.string(S.t.Xm41aW),
        onSelect: t,
        children: [
            (0, i.jsx)(r.kSQ, { children: a }),
            (0, i.jsxs)(r.kSQ, {
                children: [C, j, h, d],
            }),
            (0, i.jsxs)(r.kSQ, {
                children: [P, L ? k : T],
            }),
            (0, i.jsx)(r.kSQ, { children: w }),
            (0, i.jsx)(r.kSQ, { children: E }),
            (0, i.jsx)(r.kSQ, { children: s }),
            (0, i.jsx)(r.kSQ, { children: c }),
            (0, i.jsx)(r.kSQ, { children: Z }),
        ],
    });
}
function L(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        c = (0, v.Z)(n),
        d = (0, g.Z)(n),
        s = (0, p.l)(n),
        u = (0, p.P)(n),
        f = (0, w.Z)(n),
        b = (0, y.ZP)(n),
        Z = (0, x.Z)(n),
        E = (0, P.Z)(n, t),
        k = (0, h.Z)(n, t),
        L = (0, C.Z)(n, t),
        B = (0, j.Z)(n),
        N = (0, _.Z)({
            id: n.id,
            label: S.intl.string(S.t.gFHI3t),
        }),
        A = (0, l.Z)(n),
        W = (0, T.Z)(n, "list_text_channel_context_menu"),
        U = (0, I.Z)(n),
        Q = (0, O.ZP)(n),
        D = (0, m.Mn)("ChannelContextMenuNormal");
    return (0, i.jsxs)(r.v2r, {
        navId: "channel-context",
        onClose: o.Zy,
        "aria-label": S.intl.string(S.t.Xm41aW),
        onSelect: a,
        children: [
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [c, s],
                },
                "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [E, f, d, W],
                },
                "channel-actions",
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [b, D ? Q : U],
                },
                "notifications",
            ),
            (0, i.jsxs)(
                r.kSQ,
                {
                    children: [Z, k, L, B],
                },
                "admin-actions",
            ),
            (0, i.jsx)(r.kSQ, { children: A }),
            (0, i.jsx)(r.kSQ, { children: u }),
            (0, i.jsx)(r.kSQ, { children: N }, "developer-actions"),
        ],
    });
}
let B = (0, c.Z)(
    (0, a.Z)(
        function (e) {
            return (0, s.Z)() ? (0, i.jsx)(k, E({}, e)) : (0, i.jsx)(L, E({}, e));
        },
        { object: Z.qAy.CONTEXT_MENU },
    ),
    [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
