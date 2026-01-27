t.d(n, {
    default: () => G,
});
var r = t(627968);
t(64700);
var i = t(397927),
    a = t(442433),
    l = t(847767),
    d = t(358367),
    o = t(468389),
    c = t(793574),
    s = t(50268),
    u = t(515610),
    A = t(133238),
    h = t(795144),
    f = t(979807),
    v = t(671470),
    m = t(769591),
    j = t(533957),
    x = t(886393),
    C = t(477190),
    p = t(307623),
    b = t(317910),
    y = t(475777),
    _ = t(848977),
    X = t(995102),
    E = t(288104),
    g = t(661504),
    T = t(969128),
    O = t(652215),
    V = t(985018);

function L(e) {
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

function N(e) {
    let { channel: n, onSelect: t } = e,
        l = (0, _.A)(n),
        d = (0, x.A)(n),
        c = (0, A.m)(n),
        u = (0, A.y)(n),
        j = (0, h.A)(n),
        C = (0, f.A)(n),
        p = (0, v.A)(n),
        y = (0, X.Ay)(n),
        T = (0, E.A)(n),
        O = (0, b.A)(n),
        L = (0, s.A)({
            id: n.id,
            label: V.intl.string(V.t.gFHI3k),
        }),
        N = (0, o.A)(n),
        F = (0, g.Ay)(n),
        G = (0, m.os)("ChannelContextFavoritesMenu");
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": V.intl.string(V.t.Xm41aV),
        onSelect: t,
        children: [
            (0, r.jsx)(i.rXV, {
                children: l,
            }),
            (0, r.jsxs)(i.rXV, {
                children: [C, p, j, c],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [y, G ? F : T],
            }),
            (0, r.jsx)(i.rXV, {
                children: O,
            }),
            (0, r.jsx)(i.rXV, {
                children: N,
            }),
            (0, r.jsx)(i.rXV, {
                children: u,
            }),
            (0, r.jsx)(i.rXV, {
                children: d,
            }),
            (0, r.jsx)(i.rXV, {
                children: L,
            }),
        ],
    });
}

function F(e) {
    let { channel: n, guild: t, onSelect: l } = e,
        d = (0, _.A)(n),
        c = (0, x.A)(n),
        u = (0, A.m)(n),
        h = (0, A.y)(n),
        f = (0, T.A)(n),
        v = (0, X.Ay)(n),
        O = (0, b.A)(n),
        L = (0, y.A)(n, t),
        N = (0, j.A)(n, t),
        F = (0, C.A)(n, t),
        G = (0, p.A)(n),
        k = (0, s.A)({
            id: n.id,
            label: V.intl.string(V.t.gFHI3k),
        }),
        P = (0, o.A)(n),
        S = (0, E.A)(n),
        Y = (0, g.Ay)(n),
        I = (0, m.os)("ChannelContextMenuNormal");
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: "channel-context",
        onClose: a.Z_,
        "aria-label": V.intl.string(V.t.Xm41aV),
        onSelect: l,
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
                    children: [L, f, c],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [v, I ? Y : S],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [O, N, F, G],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.rXV, {
                children: P,
            }),
            (0, r.jsx)(i.rXV, {
                children: h,
            }),
            (0, r.jsx)(
                i.rXV,
                {
                    children: k,
                },
                "developer-actions",
            ),
        ],
    });
}
let G = (0, d.A)(
    (0, l.A)(
        function (e) {
            return (0, u.A)() ? (0, r.jsx)(N, L({}, e)) : (0, r.jsx)(F, L({}, e));
        },
        {
            object: O.ZSU.CONTEXT_MENU,
        },
    ),
    [c.A.CONTEXT_MENU, c.A.CHANNEL_LIST_TEXT_CHANNEL_MENU],
);
