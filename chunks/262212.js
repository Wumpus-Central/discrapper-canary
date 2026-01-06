n.d(t, {
    ZP: () => j,
    ms: () => y,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(159691),
    o = n(686866),
    s = n(639777),
    c = n(880419),
    u = n(827397),
    d = n(700092),
    f = n(535396),
    h = n(556970),
    p = n(388032),
    g = n(475038);
function b() {
    return (b =
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
function y(e) {
    let { className: t, guildId: n, powerup: i, onClick: o } = e,
        s = (0, u.Z)(n, i),
        c = (0, d.Z)(n, i),
        b = f.uc.has(i.skuId);
    return (0, r.jsx)("div", {
        className: l()(g.primaryButton, t),
        children: (0, r.jsx)(a.zxk, {
            variant: "primary",
            fullWidth: !0,
            text: b ? p.intl.string(h.default.g5Ds69) : p.intl.string(p.t["0Q61kF"]),
            onClick: (e) => {
                null == o || o(e), b ? null == s || s(e) : null == c || c();
            },
        }),
    });
}
function O(e) {
    let { className: t, guildId: n, powerup: i } = e,
        o = (0, d.Z)(n, i);
    return (0, r.jsx)("div", {
        className: l()(g.container, t),
        children: (0, r.jsx)("div", {
            className: g.primaryButton,
            children: (0, r.jsx)(a.zxk, {
                variant: "primary",
                fullWidth: !0,
                text: i.type === f.Us.LEVEL ? p.intl.string(p.t["0Q61kF"]) : p.intl.string(p.t.Xa11Ep),
                onClick: o,
            }),
        }),
    });
}
function v(e) {
    let { className: t, guildId: n, powerup: i, onError: a } = e,
        { showToggleButton: s, isPowerupActive: u } = (0, o.Z)(n, i),
        d = !u;
    return (0, r.jsxs)("div", {
        className: l()(g.container, t),
        children: [
            s &&
                (0, r.jsx)(c.Z, {
                    guildId: n,
                    powerup: i,
                    onError: a,
                    grow: d,
                    compact: !d,
                }),
            u &&
                (0, r.jsx)(y, {
                    guildId: n,
                    powerup: i,
                }),
        ],
    });
}
function j(e) {
    var t = b(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, s.Z)(t.guildId) ? (0, r.jsx)(v, m({}, t)) : (0, r.jsx)(O, m({}, t));
}
