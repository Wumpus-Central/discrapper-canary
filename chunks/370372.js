t.d(n, {
    default: () => G,
});
var r = t(627968);
t(64700);
var i = t(397927),
    l = t(442433),
    a = t(847767),
    d = t(358367),
    o = t(468389),
    c = t(793574),
    s = t(50268),
    u = t(515610),
    A = t(133238),
    h = t(795144),
    v = t(979807),
    f = t(671470),
    m = t(769591),
    x = t(533957),
    j = t(886393),
    b = t(477190),
    C = t(307623),
    y = t(317910),
    X = t(475777),
    p = t(848977),
    g = t(995102),
    _ = t(288104),
    V = t(661504),
    T = t(969128),
    E = t(652215),
    F = t(985018);

function N(e) {
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

function O(e) {
    let { channel: n, onSelect: t } = e,
        a = (0, p.A)(n),
        d = (0, j.A)(n),
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
        G = (0, m.os)("ChannelContextFavoritesMenu");
    return (0, r.jsxs)(i.W1t, {
        "data-menu-mixed": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": F.intl.string(F.t.Xm41aV),
        onSelect: t,
        children: [
            (0, r.jsx)(i.rXV, {
                children: a,
            }),
            (0, r.jsxs)(i.rXV, {
                children: [b, C, x, c],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [X, G ? k : T],
            }),
            (0, r.jsx)(i.rXV, {
                children: E,
            }),
            (0, r.jsx)(i.rXV, {
                children: O,
            }),
            (0, r.jsx)(i.rXV, {
                children: u,
            }),
            (0, r.jsx)(i.rXV, {
                children: d,
            }),
            (0, r.jsx)(i.rXV, {
                children: N,
            }),
        ],
    });
}

function k(e) {
    let { channel: n, guild: t, onSelect: a } = e,
        d = (0, p.A)(n),
        c = (0, j.A)(n),
        u = (0, A.m)(n),
        h = (0, A.y)(n),
        v = (0, T.A)(n),
        f = (0, g.Ay)(n),
        E = (0, y.A)(n),
        N = (0, X.A)(n, t),
        O = (0, x.A)(n, t),
        k = (0, b.A)(n, t),
        G = (0, C.A)(n),
        I = (0, s.A)({
            id: n.id,
            label: F.intl.string(F.t.gFHI3k),
        }),
        M = (0, o.A)(n),
        S = (0, _.A)(n),
        w = (0, V.Ay)(n),
        L = (0, m.os)("ChannelContextMenuNormal");
    return (0, r.jsxs)(i.W1t, {
        "data-menu-mixed": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": F.intl.string(F.t.Xm41aV),
        onSelect: a,
        children: [
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [d, u],
                },
                "mark-as-read-or-favorite",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [N, v, c],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [f, L ? w : S],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [E, O, k, G],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.rXV, {
                children: M,
            }),
            (0, r.jsx)(i.rXV, {
                children: h,
            }),
            (0, r.jsx)(
                i.rXV,
                {
                    children: I,
                },
                "developer-actions",
            ),
        ],
    });
}
let G = (0, d.A)(
    (0, a.A)(
        function (e) {
            return (0, u.A)() ? (0, r.jsx)(O, N({}, e)) : (0, r.jsx)(k, N({}, e));
        },
        {
            object: E.ZSU.CONTEXT_MENU,
        },
    ),
    [c.A.CONTEXT_MENU, c.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
