n.d(t, {
    ZP: () => j,
    ms: () => y,
});
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(159691),
    a = n(10765),
    s = n(639777),
    c = n(973772),
    u = n(880419),
    d = n(827397),
    p = n(279604),
    h = n(535396),
    f = n(789142),
    g = n(388032),
    m = n(38642);
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
function _(e) {
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
    let { className: t, guildId: n, powerup: i, onClick: a } = e,
        s = (0, d.Z)(n, i),
        { onShowMore: c } = (0, p.ZP)(n, i),
        u = h.uc.has(i.skuId);
    return (0, r.jsx)("div", {
        className: l()(m.primaryButton, t),
        children: (0, r.jsx)(o.zxk, {
            variant: "primary",
            fullWidth: !0,
            text: u ? g.intl.string(f.default.g5Ds69) : g.intl.string(g.t["0Q61kF"]),
            onClick: (e) => {
                null == a || a(e), u ? null == s || s(e) : null == c || c();
            },
        }),
    });
}
function O(e) {
    let { className: t, guildId: n, powerup: i } = e,
        { onShowMore: a } = (0, p.ZP)(n, i);
    return (0, r.jsx)("div", {
        className: l()(m.container, t),
        children: (0, r.jsx)("div", {
            className: m.primaryButton,
            children: (0, r.jsx)(o.zxk, {
                variant: "primary",
                fullWidth: !0,
                text: i.type === h.Us.LEVEL ? g.intl.string(g.t["0Q61kF"]) : g.intl.string(g.t.Xa11Ep),
                onClick: a,
            }),
        }),
    });
}
function v(e) {
    let { className: t, guildId: n, powerup: i, onError: o } = e,
        s = (0, c.ZP)(n, i).type !== h.A3.INACTIVE,
        d = (0, a.Z)(n, i, "GuildPowerupCardFooterAdmin"),
        p = s || !d,
        f = !s;
    return (0, r.jsxs)("div", {
        className: l()(m.container, t),
        children: [
            p &&
                (0, r.jsx)(u.Z, {
                    guildId: n,
                    powerup: i,
                    onError: o,
                    grow: f,
                    compact: !f,
                }),
            s &&
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
    return (0, s.Z)(t.guildId) ? (0, r.jsx)(v, _({}, t)) : (0, r.jsx)(O, _({}, t));
}
