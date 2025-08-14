r.d(t, {
    ZP: () => E,
    ms: () => m,
});
var n = r(255367);
r(73800);
var o = r(120356),
    i = r.n(o),
    l = r(755721),
    u = r(10765),
    s = r(639777),
    a = r(973772),
    c = r(880419),
    p = r(827397),
    d = r(279604),
    f = r(535396),
    b = r(989308),
    O = r(388032),
    y = r(292609);
function j() {
    return (j =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        }).apply(this, arguments);
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function m(e) {
    var t,
        r,
        { guildId: o, powerup: i, onClick: u } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (n = 0; n < i.length; n++)
                    (r = i[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["guildId", "powerup", "onClick"]);
    let a = (0, p.Z)(o, i),
        { onShowMore: c } = (0, d.ZP)(o, i),
        j = f.uc.has(i.skuId);
    return (0, n.jsx)(
        l.zx,
        ((t = g(
            {
                className: y.primaryButton,
                innerClassName: y.buttonInner,
                wrapperClassName: y.buttonWrapper,
                grow: !0,
                onClick: (e) => {
                    null == u || u(e), j ? null == a || a(e) : null == c || c();
                },
            },
            s,
        )),
        (r = r = { children: j ? O.intl.string(b.default["g5Ds6+"]) : O.intl.string(O.t["0Q61kJ"]) }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t),
    );
}
function P(e) {
    let { className: t, guildId: r, powerup: o } = e,
        { onShowMore: u } = (0, d.ZP)(r, o);
    return (0, n.jsx)("div", {
        className: i()(y.container, t),
        children: (0, n.jsx)(l.zx, {
            className: y.primaryButton,
            innerClassName: y.buttonInner,
            wrapperClassName: y.buttonWrapper,
            grow: !0,
            onClick: u,
            children: o.type === f.Us.LEVEL ? O.intl.string(O.t["0Q61kJ"]) : O.intl.string(O.t.Xa11Eh),
        }),
    });
}
function v(e) {
    let { className: t, guildId: r, powerup: o, onError: l } = e,
        s = (0, a.ZP)(r, o).type !== f.A3.INACTIVE,
        p = (0, u.Z)(r, o, "GuildPowerupCardFooterAdmin"),
        d = s || !p,
        b = !s;
    return (0, n.jsxs)("div", {
        className: i()(y.container, t),
        children: [
            d &&
                (0, n.jsx)(c.Z, {
                    guildId: r,
                    powerup: o,
                    onError: l,
                    grow: b,
                    compact: !b,
                }),
            s &&
                (0, n.jsx)(m, {
                    guildId: r,
                    powerup: o,
                }),
        ],
    });
}
function E(e) {
    var t = j(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, s.Z)(t.guildId) ? (0, n.jsx)(v, g({}, t)) : (0, n.jsx)(P, g({}, t));
}
