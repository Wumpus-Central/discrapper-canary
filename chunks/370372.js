r.d(n, { default: () => G });
var t = r(627968);
r(64700);
var i = r(397927),
    l = r(442433),
    a = r(847767),
    d = r(358367),
    o = r(468389),
    c = r(793574),
    s = r(50268),
    u = r(515610),
    A = r(133238),
    h = r(795144),
    v = r(979807),
    f = r(671470),
    j = r(769591),
    x = r(533957),
    m = r(886393),
    b = r(477190),
    C = r(307623),
    y = r(317910),
    X = r(475777),
    p = r(848977),
    g = r(995102),
    _ = r(288104),
    V = r(661504),
    T = r(969128),
    E = r(652215),
    F = r(985018);
function N(e) {
    for (var n = 1; n < arguments.length; n++) {
        var r = null != arguments[n] ? arguments[n] : {},
            t = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            t.forEach(function (n) {
                var t;
                (t = r[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: t,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = t);
            });
    }
    return e;
}
function O(e) {
    let { channel: n, onSelect: r } = e,
        a = (0, p.A)(n),
        d = (0, m.A)(n),
        c = (0, A.m)(n),
        u = (0, A.y)(n),
        x = (0, h.A)(n),
        b = (0, v.A)(n),
        C = (0, f.A)(n),
        X = (0, g.Ay)(n),
        T = (0, _.A)(n),
        E = (0, y.A)(n),
        N = (0, s.A)({
            id: n.id,
            label: F.intl.string(F.t.gFHI3k),
        }),
        O = (0, o.A)(n),
        k = (0, V.Ay)(n),
        G = (0, j.os)("ChannelContextFavoritesMenu");
    return (0, t.jsxs)(i.W1t, {
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": F.intl.string(F.t.Xm41aV),
        onSelect: r,
        children: [
            (0, t.jsx)(i.rXV, { children: a }),
            (0, t.jsxs)(i.rXV, {
                children: [b, C, x, c],
            }),
            (0, t.jsxs)(i.rXV, {
                children: [X, G ? k : T],
            }),
            (0, t.jsx)(i.rXV, { children: E }),
            (0, t.jsx)(i.rXV, { children: O }),
            (0, t.jsx)(i.rXV, { children: u }),
            (0, t.jsx)(i.rXV, { children: d }),
            (0, t.jsx)(i.rXV, { children: N }),
        ],
    });
}
function k(e) {
    let { channel: n, guild: r, onSelect: a } = e,
        d = (0, p.A)(n),
        c = (0, m.A)(n),
        u = (0, A.m)(n),
        h = (0, A.y)(n),
        v = (0, T.A)(n),
        f = (0, g.Ay)(n),
        E = (0, y.A)(n),
        N = (0, X.A)(n, r),
        O = (0, x.A)(n, r),
        k = (0, b.A)(n, r),
        G = (0, C.A)(n),
        I = (0, s.A)({
            id: n.id,
            label: F.intl.string(F.t.gFHI3k),
        }),
        M = (0, o.A)(n),
        S = (0, _.A)(n),
        w = (0, V.Ay)(n),
        L = (0, j.os)("ChannelContextMenuNormal");
    return (0, t.jsxs)(i.W1t, {
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": F.intl.string(F.t.Xm41aV),
        onSelect: a,
        children: [
            (0, t.jsxs)(
                i.rXV,
                {
                    children: [d, u],
                },
                "mark-as-read-or-favorite",
            ),
            (0, t.jsxs)(
                i.rXV,
                {
                    children: [N, v, c],
                },
                "channel-actions",
            ),
            (0, t.jsxs)(
                i.rXV,
                {
                    children: [f, L ? w : S],
                },
                "notifications",
            ),
            (0, t.jsxs)(
                i.rXV,
                {
                    children: [E, O, k, G],
                },
                "admin-actions",
            ),
            (0, t.jsx)(i.rXV, { children: M }),
            (0, t.jsx)(i.rXV, { children: h }),
            (0, t.jsx)(i.rXV, { children: I }, "developer-actions"),
        ],
    });
}
let G = (0, d.A)(
    (0, a.A)(
        function (e) {
            return (0, u.A)() ? (0, t.jsx)(O, N({}, e)) : (0, t.jsx)(k, N({}, e));
        },
        { object: E.ZSU.CONTEXT_MENU },
    ),
    [c.A.CONTEXT_MENU, c.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
