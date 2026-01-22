n.d(t, {
    Ay: () => j,
    GU: () => A,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(732955),
    s = n(438874),
    o = n(363487),
    c = n(439156),
    u = n(689906),
    d = n(224331),
    f = n(568065),
    p = n(333354),
    h = n(985018),
    b = n(993747);
function g() {
    return (g =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function m(e) {
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
function A(e) {
    let { className: t, guildId: n, powerup: l, onClick: s } = e,
        o = (0, u.A)(n, l),
        c = (0, d.A)(n, l),
        g = f.HO.has(l.skuId);
    return (0, r.jsx)("div", {
        className: i()(b.FS, t),
        children: (0, r.jsx)(a.$nd, {
            variant: "primary",
            fullWidth: !0,
            text: g ? h.intl.string(p.default.g5Ds69) : h.intl.string(h.t["0Q61kF"]),
            onClick: (e) => {
                null == s || s(e), g ? null == o || o(e) : null == c || c();
            },
        }),
    });
}
function y(e) {
    let { className: t, guildId: n, powerup: l } = e,
        s = (0, d.A)(n, l);
    return (0, r.jsx)("div", {
        className: i()(b.kL, t),
        children: (0, r.jsx)("div", {
            className: b.FS,
            children: (0, r.jsx)(a.$nd, {
                variant: "primary",
                fullWidth: !0,
                text: l.type === f.o9.LEVEL ? h.intl.string(h.t["0Q61kF"]) : h.intl.string(h.t.Xa11Ep),
                onClick: s,
            }),
        }),
    });
}
function O(e) {
    let { className: t, guildId: n, powerup: l, onError: a } = e,
        { showToggleButton: o, isPowerupActive: u } = (0, s.A)(n, l),
        d = !u;
    return (0, r.jsxs)("div", {
        className: i()(b.kL, t),
        children: [
            o &&
                (0, r.jsx)(c.A, {
                    guildId: n,
                    powerup: l,
                    onError: a,
                    grow: d,
                    compact: !d,
                }),
            u &&
                (0, r.jsx)(A, {
                    guildId: n,
                    powerup: l,
                }),
        ],
    });
}
function j(e) {
    let {} = e,
        t = g({}, e);
    return (0, o.A)(t.guildId) ? (0, r.jsx)(O, m({}, t)) : (0, r.jsx)(y, m({}, t));
}
