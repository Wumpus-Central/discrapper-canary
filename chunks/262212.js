n.d(t, {
    ZP: () => v,
    ms: () => _,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    o = n(159691),
    a = n(686866),
    s = n(639777),
    c = n(880419),
    u = n(827397),
    d = n(279604),
    f = n(535396),
    h = n(130231),
    p = n(388032),
    g = n(292609);
function m() {
    return (m =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function b(e) {
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
function _(e) {
    let { className: t, guildId: n, powerup: i, onClick: a } = e,
        s = (0, u.Z)(n, i),
        { onShowMore: c } = (0, d.ZP)(n, i),
        m = f.uc.has(i.skuId);
    return (0, r.jsx)("div", {
        className: l()(g.primaryButton, t),
        children: (0, r.jsx)(o.zxk, {
            variant: "primary",
            fullWidth: !0,
            text: m ? p.intl.string(h.default.g5Ds69) : p.intl.string(p.t["0Q61kF"]),
            onClick: (e) => {
                null == a || a(e), m ? null == s || s(e) : null == c || c();
            },
        }),
    });
}
function y(e) {
    let { className: t, guildId: n, powerup: i } = e,
        { onShowMore: a } = (0, d.ZP)(n, i);
    return (0, r.jsx)("div", {
        className: l()(g.container, t),
        children: (0, r.jsx)("div", {
            className: g.primaryButton,
            children: (0, r.jsx)(o.zxk, {
                variant: "primary",
                fullWidth: !0,
                text: i.type === f.Us.LEVEL ? p.intl.string(p.t["0Q61kF"]) : p.intl.string(p.t.Xa11Ep),
                onClick: a,
            }),
        }),
    });
}
function O(e) {
    let { className: t, guildId: n, powerup: i, onError: o } = e,
        { showToggleButton: s, isPowerupActive: u } = (0, a.Z)(n, i),
        d = !u;
    return (0, r.jsxs)("div", {
        className: l()(g.container, t),
        children: [
            s &&
                (0, r.jsx)(c.Z, {
                    guildId: n,
                    powerup: i,
                    onError: o,
                    grow: d,
                    compact: !d,
                }),
            u &&
                (0, r.jsx)(_, {
                    guildId: n,
                    powerup: i,
                }),
        ],
    });
}
function v(e) {
    var t = m(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, s.Z)(t.guildId) ? (0, r.jsx)(O, b({}, t)) : (0, r.jsx)(y, b({}, t));
}
