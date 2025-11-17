n.d(t, { default: () => N });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(239091),
    o = n(108843),
    c = n(100527),
    a = n(299206),
    s = n(916069),
    u = n(697229),
    d = n(212205),
    b = n(423589),
    f = n(411567),
    O = n(672824),
    p = n(3689),
    y = n(323597),
    g = n(852245),
    j = n(461535),
    h = n(776568),
    P = n(218035),
    Z = n(775666),
    v = n(442754),
    _ = n(623483),
    m = n(388032);
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
function E(e) {
    let { channel: t, onSelect: n } = e,
        o = (0, j.Z)(t),
        c = (0, h.ZP)(t),
        s = (0, P.Z)(t),
        p = (0, O.Z)(t),
        y = (0, f.Z)(t),
        g = (0, d.Z)(t),
        v = (0, u.Z)(t),
        w = (0, _.Z)(t),
        E = (0, a.Z)({
            id: t.id,
            label: m.intl.string(m.t["2visC6"]),
        }),
        C = (0, b.Mn)("ChannelCategoryFavoritesMenu"),
        N = (0, Z.ZP)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: l.Zy,
        "aria-label": m.intl.string(m.t.Xm41aV),
        onSelect: n,
        children: [
            (0, r.jsxs)(i.kSQ, {
                children: [o, v, g],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [c, C ? N : s],
            }),
            (0, r.jsxs)(i.kSQ, {
                children: [p, y],
            }),
            (0, r.jsx)(i.kSQ, { children: w }),
            (0, r.jsx)(i.kSQ, { children: E }),
        ],
    });
}
function C(e) {
    let { channel: t, guild: n, onSelect: o } = e,
        c = (0, j.Z)(t),
        s = (0, h.ZP)(t),
        u = (0, P.Z)(t),
        _ = (0, O.Z)(t),
        w = (0, f.Z)(t),
        E = (0, g.Z)(t),
        C = (0, d.Z)(t),
        N = (0, p.Z)(t, n),
        S = (0, y.Z)(t),
        x = (0, a.Z)({
            id: t.id,
            label: m.intl.string(m.t["2visC6"]),
        }),
        A = (0, v.Z)(t),
        k = (0, b.Mn)("ChannelCategoryNormalMenu"),
        D = (0, Z.ZP)(t);
    return (0, r.jsxs)(i.v2r, {
        navId: "channel-context",
        onClose: l.Zy,
        "aria-label": m.intl.string(m.t.Xm41aV),
        onSelect: o,
        children: [
            (0, r.jsx)(i.kSQ, { children: c }, "mark-as-read"),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [A, _, w],
                },
                "channel-actions",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [s, k ? D : u],
                },
                "notifications",
            ),
            (0, r.jsxs)(
                i.kSQ,
                {
                    children: [E, C, N, S],
                },
                "admin-actions",
            ),
            (0, r.jsx)(i.kSQ, { children: x }, "developer-actions"),
        ],
    });
}
let N = (0, o.Z)(
    function (e) {
        return (0, s.Z)() ? (0, r.jsx)(E, w({}, e)) : (0, r.jsx)(C, w({}, e));
    },
    [c.Z.CONTEXT_MENU, c.Z.CHANNEL_CATEGORY_MENU],
);
