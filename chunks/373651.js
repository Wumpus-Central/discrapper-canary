t.d(e, { default: () => T });
var r = t(54381);
t(473749);
var i = t(481060),
    l = t(239091),
    a = t(883385),
    o = t(108843),
    d = t(947440),
    c = t(100527),
    s = t(299206),
    u = t(916069),
    Z = t(895563),
    h = t(212205),
    f = t(478035),
    v = t(62420),
    j = t(423589),
    x = t(398048),
    k = t(109764),
    m = t(3689),
    b = t(323597),
    S = t(852245),
    C = t(367722),
    g = t(461535),
    p = t(776568),
    _ = t(218035),
    A = t(775666),
    E = t(442754),
    y = t(981631),
    Q = t(388032);
function N(n) {
    for (var e = 1; e < arguments.length; e++) {
        var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                }),
            )),
            r.forEach(function (e) {
                var r;
                (r = t[e]),
                    e in n
                        ? Object.defineProperty(n, e, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (n[e] = r);
            });
    }
    return n;
}
function O(n) {
    let { channel: e, onSelect: t } = n,
        a = (0, g.Z)(e),
        o = (0, k.Z)(e),
        c = (0, Z.l)(e),
        u = (0, Z.P)(e),
        x = (0, h.Z)(e),
        m = (0, f.Z)(e),
        b = (0, v.Z)(e),
        C = (0, p.ZP)(e),
        E = (0, _.Z)(e),
        y = (0, S.Z)(e),
        N = (0, s.Z)({
            id: e.id,
            label: Q.intl.string(Q.t.gFHI3k),
        }),
        O = (0, d.Z)(e),
        P = (0, A.ZP)(e),
        T = (0, j.Mn)("ChannelContextFavoritesMenu");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: l.Zy,
        "aria-label": Q.intl.string(Q.t.Xm41aV),
        onSelect: t,
        children: [
            (0, r.jsx)(i.kSQ, { children: a }),
            (0, r.jsxs)(i.kSQ, {
                children: [m, b, x, c],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [C, T ? P : E],
            }),
            (0, r.jsx)(i.kSQ, { children: y }),
            (0, r.jsx)(i.kSQ, { children: O }),
            (0, r.jsx)(i.kSQ, { children: u }),
            (0, r.jsx)(i.kSQ, { children: o }),
            (0, r.jsx)(i.kSQ, { children: N }),
        ],
    });
}
function P(n) {
    let { channel: e, guild: t, onSelect: a } = n,
        o = (0, g.Z)(e),
        c = (0, k.Z)(e),
        u = (0, Z.l)(e),
        h = (0, Z.P)(e),
        f = (0, E.Z)(e),
        v = (0, p.ZP)(e),
        y = (0, S.Z)(e),
        N = (0, C.Z)(e, t),
        O = (0, x.Z)(e, t),
        P = (0, m.Z)(e, t),
        T = (0, b.Z)(e),
        F = (0, s.Z)({
            id: e.id,
            label: Q.intl.string(Q.t.gFHI3k),
        }),
        I = (0, d.Z)(e),
        M = (0, _.Z)(e),
        w = (0, A.ZP)(e),
        L = (0, j.Mn)("ChannelContextMenuNormal");
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: l.Zy,
        "aria-label": Q.intl.string(Q.t.Xm41aV),
        onSelect: a,
        children: [
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [o, u],
                },
                "mark-as-read-or-favorite",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [N, f, c],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [v, L ? w : M],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [y, O, P, T],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.kSQ, { children: I }),
            (0, r.jsx)(i.kSQ, { children: h }),
            (0, r.jsx)(i.kSQ, { children: F }, "developer-actions"),
        ],
    });
}
let T = (0, o.Z)(
    (0, a.Z)(
        function (n) {
            return (0, u.Z)() ? (0, r.jsx)(O, N({}, n)) : (0, r.jsx)(P, N({}, n));
        },
        { object: y.qAy.CONTEXT_MENU },
    ),
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
