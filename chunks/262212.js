n.d(t, {
    ZP: () => j,
    ms: () => O,
});
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(10765),
    s = n(639777),
    c = n(973772),
    u = n(880419),
    d = n(827397),
    p = n(279604),
    f = n(535396),
    h = n(989308),
    g = n(388032),
    m = n(292609);
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
function O(e) {
    let { guildId: t, powerup: n, onClick: i } = e,
        l = (0, d.Z)(t, n),
        { onShowMore: a } = (0, p.ZP)(t, n),
        s = f.uc.has(n.skuId);
    return (0, r.jsx)(o.zxk, {
        fullWidth: !0,
        onClick: (e) => {
            null == i || i(e), s ? null == l || l(e) : null == a || a();
        },
        text: s ? g.intl.string(h.default["g5Ds6+"]) : g.intl.string(g.t["0Q61kJ"]),
    });
}
function y(e) {
    let { guildId: t, powerup: n } = e,
        { onShowMore: i } = (0, p.ZP)(t, n);
    return (0, r.jsx)(o.zxk, {
        fullWidth: !0,
        onClick: i,
        text: n.type === f.Us.LEVEL ? g.intl.string(g.t["0Q61kJ"]) : g.intl.string(g.t.Xa11Eh),
    });
}
function v(e) {
    let { className: t, guildId: n, powerup: i, onError: o } = e,
        s = (0, c.ZP)(n, i).type !== f.A3.INACTIVE,
        d = (0, a.Z)(n, i, "GuildPowerupCardFooterAdmin"),
        p = s || !d,
        h = !s;
    return (0, r.jsxs)("div", {
        className: l()(m.container, t),
        children: [
            p &&
                (0, r.jsx)(u.Z, {
                    guildId: n,
                    powerup: i,
                    onError: o,
                    fullWidth: h,
                }),
            s &&
                (0, r.jsx)(O, {
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
    return (0, s.Z)(t.guildId) ? (0, r.jsx)(v, _({}, t)) : (0, r.jsx)(y, _({}, t));
}
