t.d(n, { default: () => N });
var r = t(951288);
t(647438);
var i = t(481060),
    o = t(239091),
    a = t(883385),
    l = t(108843),
    c = t(947440),
    s = t(100527),
    d = t(299206),
    u = t(916069),
    p = t(895563),
    b = t(212205),
    h = t(478035),
    f = t(62420),
    m = t(423589),
    _ = t(398048),
    v = t(109764),
    x = t(3689),
    j = t(323597),
    Z = t(852245),
    y = t(367722),
    g = t(461535),
    C = t(776568),
    O = t(218035),
    P = t(775666),
    S = t(593589),
    w = t(442754),
    k = t(981631),
    E = t(388032);
function U(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function I(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, g.Z)(n),
        l = (0, v.Z)(n),
        s = (0, p.l)(n),
        u = (0, p.P)(n),
        _ = (0, b.Z)(n),
        x = (0, h.Z)(n),
        j = (0, f.Z)(n),
        y = (0, C.ZP)(n),
        S = (0, O.Z)(n),
        w = (0, Z.Z)(n),
        k = (0, d.Z)({
            id: n.id,
            label: E.intl.string(E.t.gFHI3t),
        }),
        U = (0, c.Z)(n),
        I = (0, P.ZP)(n),
        Q = (0, m.Mn)("ChannelContextFavoritesMenu");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: o.Zy,
        "aria-label": E.intl.string(E.t.Xm41aW),
        onSelect: t,
        children: [
            (0, r.jsx)(i.kSQ, { children: a }),
            (0, r.jsxs)(i.kSQ, {
                children: [x, j, _, s],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [y, Q ? I : S],
            }),
            (0, r.jsx)(i.kSQ, { children: w }),
            (0, r.jsx)(i.kSQ, { children: U }),
            (0, r.jsx)(i.kSQ, { children: u }),
            (0, r.jsx)(i.kSQ, { children: l }),
            (0, r.jsx)(i.kSQ, { children: k }),
        ],
    });
}
function Q(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        l = (0, g.Z)(n),
        s = (0, v.Z)(n),
        u = (0, p.l)(n),
        b = (0, p.P)(n),
        h = (0, w.Z)(n),
        f = (0, C.ZP)(n),
        k = (0, Z.Z)(n),
        U = (0, y.Z)(n, t),
        I = (0, _.Z)(n, t),
        Q = (0, x.Z)(n, t),
        N = (0, j.Z)(n),
        V = (0, d.Z)({
            id: n.id,
            label: E.intl.string(E.t.gFHI3t),
        }),
        T = (0, c.Z)(n),
        L = (0, S.Z)(n, "list_text_channel_context_menu"),
        D = (0, O.Z)(n),
        G = (0, P.ZP)(n),
        M = (0, m.Mn)("ChannelContextMenuNormal");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: o.Zy,
        "aria-label": E.intl.string(E.t.Xm41aW),
        onSelect: a,
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
                    children: [U, h, s, L],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [f, M ? G : D],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [k, I, Q, N],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.kSQ, { children: T }),
            (0, r.jsx)(i.kSQ, { children: b }),
            (0, r.jsx)(i.kSQ, { children: V }, "developer-actions"),
        ],
    });
}
let N = (0, l.Z)(
    (0, a.Z)(
        function (e) {
            return (0, u.Z)() ? (0, r.jsx)(I, U({}, e)) : (0, r.jsx)(Q, U({}, e));
        },
        { object: k.qAy.CONTEXT_MENU },
    ),
    [s.Z.CONTEXT_MENU, s.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
