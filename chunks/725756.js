n.d(t, {
    default: () => E,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    a = n(358367),
    c = n(793574),
    o = n(50268),
    s = n(515610),
    u = n(849867),
    d = n(795144),
    b = n(769591),
    p = n(134725),
    O = n(23724),
    y = n(477190),
    f = n(307623),
    g = n(317910),
    A = n(848977),
    j = n(995102),
    h = n(288104),
    v = n(661504),
    m = n(969128),
    P = n(90509),
    _ = n(985018);

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

function C(e) {
    let { channel: t, onSelect: n } = e,
        a = (0, A.A)(t),
        c = (0, j.Ay)(t),
        s = (0, h.A)(t),
        y = (0, O.A)(t),
        f = (0, p.A)(t),
        g = (0, d.A)(t),
        m = (0, u.A)(t),
        w = (0, P.A)(t),
        C = (0, o.A)({
            id: t.id,
            label: _.intl.string(_.t["2visC6"]),
        }),
        x = (0, b.os)("ChannelCategoryFavoritesMenu"),
        E = (0, v.Ay)(t);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-mixed": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: n,
        children: [
            (0, r.jsxs)(i.rXV, {
                children: [a, m, g],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [c, x ? E : s],
            }),
            (0, r.jsxs)(i.rXV, {
                children: [y, f],
            }),
            (0, r.jsx)(i.rXV, {
                children: w,
            }),
            (0, r.jsx)(i.rXV, {
                children: C,
            }),
        ],
    });
}

function x(e) {
    let { channel: t, guild: n, onSelect: a } = e,
        c = (0, A.A)(t),
        s = (0, j.Ay)(t),
        u = (0, h.A)(t),
        P = (0, O.A)(t),
        w = (0, p.A)(t),
        C = (0, g.A)(t),
        x = (0, d.A)(t),
        E = (0, y.A)(t, n),
        D = (0, f.A)(t),
        S = (0, o.A)({
            id: t.id,
            label: _.intl.string(_.t["2visC6"]),
        }),
        G = (0, m.A)(t),
        N = (0, b.os)("ChannelCategoryNormalMenu"),
        T = (0, v.Ay)(t);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-mixed": !0,
        navId: "channel-context",
        onClose: l.Z_,
        "aria-label": _.intl.string(_.t.Xm41aV),
        onSelect: a,
        children: [
            (0, r.jsx)(
                i.rXV,
                {
                    children: c,
                },
                "mark-as-read",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [G, P, w],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [s, N ? T : u],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.rXV,
                {
                    children: [C, x, E, D],
                },
                "admin-actions",
            ),
            (0, r.jsx)(
                i.rXV,
                {
                    children: S,
                },
                "developer-actions",
            ),
        ],
    });
}
let E = (0, a.A)(
    function (e) {
        return (0, s.A)() ? (0, r.jsx)(C, w({}, e)) : (0, r.jsx)(x, w({}, e));
    },
    [c.A.CONTEXT_MENU, c.A.CHANNEL_CATEGORY_MENU],
);
