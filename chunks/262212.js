n.d(t, {
    ZP: () => j,
    ms: () => y,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(159691),
    o = n(448222),
    s = n(686866),
    c = n(639777),
    u = n(880419),
    d = n(827397),
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
    let { className: t, guildId: n, powerup: i, onClick: s } = e,
        c = (0, d.Z)(n, i),
        { onShowMore: u } = (0, o.Z)(n, i),
        b = f.uc.has(i.skuId);
    return (0, r.jsx)("div", {
        className: l()(g.primaryButton, t),
        children: (0, r.jsx)(a.zxk, {
            variant: "primary",
            fullWidth: !0,
            text: b ? p.intl.string(h.default.g5Ds69) : p.intl.string(p.t["0Q61kF"]),
            onClick: (e) => {
                null == s || s(e), b ? null == c || c(e) : null == u || u();
            },
        }),
    });
}
function O(e) {
    let { className: t, guildId: n, powerup: i } = e,
        { onShowMore: s } = (0, o.Z)(n, i);
    return (0, r.jsx)("div", {
        className: l()(g.container, t),
        children: (0, r.jsx)("div", {
            className: g.primaryButton,
            children: (0, r.jsx)(a.zxk, {
                variant: "primary",
                fullWidth: !0,
                text: i.type === f.Us.LEVEL ? p.intl.string(p.t["0Q61kF"]) : p.intl.string(p.t.Xa11Ep),
                onClick: s,
            }),
        }),
    });
}
function v(e) {
    let { className: t, guildId: n, powerup: i, onError: a } = e,
        { showToggleButton: o, isPowerupActive: c } = (0, s.Z)(n, i),
        d = !c;
    return (0, r.jsxs)("div", {
        className: l()(g.container, t),
        children: [
            o &&
                (0, r.jsx)(u.Z, {
                    guildId: n,
                    powerup: i,
                    onError: a,
                    grow: d,
                    compact: !d,
                }),
            c &&
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
    return (0, c.Z)(t.guildId) ? (0, r.jsx)(v, m({}, t)) : (0, r.jsx)(O, m({}, t));
}
