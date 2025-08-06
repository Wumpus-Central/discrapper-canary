n.d(t, {
    ZP: () => E,
    ms: () => b,
});
var r = n(255367);
n(73800);
var o = n(120356),
    i = n.n(o),
    l = n(755721),
    s = n(10765),
    a = n(639777),
    c = n(973772),
    u = n(880419),
    d = n(827397),
    p = n(279604),
    f = n(535396),
    m = n(93841),
    g = n(388032),
    x = n(503945);
function _() {
    return (_ =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        }).apply(this, arguments);
}
function v(e) {
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
function b(e) {
    var t,
        n,
        { guildId: o, powerup: i, onClick: s } = e,
        a = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    (n = i[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
            }
            return o;
        })(e, ["guildId", "powerup", "onClick"]);
    let c = (0, d.Z)(o, i),
        { onShowMore: u } = (0, p.ZP)(o, i),
        _ = f.uc.has(i.skuId);
    return (0, r.jsx)(
        l.zx,
        ((t = v(
            {
                className: x.primaryButton,
                innerClassName: x.buttonInner,
                wrapperClassName: x.buttonWrapper,
                grow: !0,
                onClick: (e) => {
                    null == s || s(e), _ ? null == c || c(e) : null == u || u();
                },
            },
            a,
        )),
        (n = n = { children: _ ? g.intl.string(m.default["g5Ds6+"]) : g.intl.string(g.t["0Q61kJ"]) }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
function j(e) {
    let { className: t, guildId: n, powerup: o } = e,
        { onShowMore: s } = (0, p.ZP)(n, o);
    return (0, r.jsx)("div", {
        className: i()(x.container, t),
        children: (0, r.jsx)(l.zx, {
            className: x.primaryButton,
            innerClassName: x.buttonInner,
            wrapperClassName: x.buttonWrapper,
            grow: !0,
            onClick: s,
            children: o.type === f.Us.LEVEL ? g.intl.string(g.t["0Q61kJ"]) : g.intl.string(g.t.Xa11Eh),
        }),
    });
}
function h(e) {
    let { className: t, guildId: n, powerup: o, onError: l } = e,
        a = (0, c.Z)(n, o).type !== f.A3.INACTIVE,
        d = (0, s.Z)(n, o, "GuildPowerupCardFooterAdmin"),
        p = a || !d,
        m = !a;
    return (0, r.jsxs)("div", {
        className: i()(x.container, t),
        children: [
            p &&
                (0, r.jsx)(u.Z, {
                    guildId: n,
                    powerup: o,
                    onError: l,
                    grow: m,
                    compact: !m,
                }),
            a &&
                (0, r.jsx)(b, {
                    guildId: n,
                    powerup: o,
                }),
        ],
    });
}
function E(e) {
    var t = _(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, a.Z)(t.guildId) ? (0, r.jsx)(h, v({}, t)) : (0, r.jsx)(j, v({}, t));
}
