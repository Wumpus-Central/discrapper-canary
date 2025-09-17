n.d(t, {
    ZP: () => v,
    ms: () => y,
});
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(755721),
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
function O(e) {
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
    var t,
        n,
        { guildId: i, powerup: l, onClick: a } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["guildId", "powerup", "onClick"]);
    let c = (0, d.Z)(i, l),
        { onShowMore: u } = (0, p.ZP)(i, l),
        b = f.uc.has(l.skuId);
    return (0, r.jsx)(
        o.zx,
        ((t = O(
            {
                className: m.primaryButton,
                innerClassName: m.buttonInner,
                wrapperClassName: m.buttonWrapper,
                grow: !0,
                onClick: (e) => {
                    null == a || a(e), b ? null == c || c(e) : null == u || u();
                },
            },
            s,
        )),
        (n = n = { children: b ? g.intl.string(h.default["g5Ds6+"]) : g.intl.string(g.t["0Q61kJ"]) }),
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
function _(e) {
    let { className: t, guildId: n, powerup: i } = e,
        { onShowMore: a } = (0, p.ZP)(n, i);
    return (0, r.jsx)("div", {
        className: l()(m.container, t),
        children: (0, r.jsx)(o.zx, {
            className: m.primaryButton,
            innerClassName: m.buttonInner,
            wrapperClassName: m.buttonWrapper,
            grow: !0,
            onClick: a,
            children: i.type === f.Us.LEVEL ? g.intl.string(g.t["0Q61kJ"]) : g.intl.string(g.t.Xa11Eh),
        }),
    });
}
function j(e) {
    let { className: t, guildId: n, powerup: i, onError: o } = e,
        s = (0, c.ZP)(n, i).type !== f.A3.INACTIVE,
        d = (0, a.Z)(n, i, "GuildPowerupCardFooterAdmin"),
        p = s || !d,
        h = !s;
    return (0, r.jsxs)("div", {
        className: l()(m.container, t),
        children: [
            p &&
                (0, r.jsx)(u.ZP, {
                    guildId: n,
                    powerup: i,
                    onError: o,
                    grow: h,
                    compact: !h,
                }),
            s &&
                (0, r.jsx)(y, {
                    guildId: n,
                    powerup: i,
                }),
        ],
    });
}
function v(e) {
    var t = b(
        {},
        (function (e) {
            if (null == e) throw TypeError("Cannot destructure " + e);
            return e;
        })(e),
    );
    return (0, s.Z)(t.guildId) ? (0, r.jsx)(j, O({}, t)) : (0, r.jsx)(_, O({}, t));
}
