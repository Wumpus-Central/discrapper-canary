r.d(t, {
    default: () => a,
}),
    r(228524);
var n = r(627968),
    o = r(158954),
    s = r(397927),
    c = r(363487),
    i = r(539085),
    l = r(154);

function a(e) {
    var t, r;
    let { guildId: a, title: d, description: u, powerups: p, footerInfoText: b, footerAction: x } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o,
                s = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (o = 0, r = Reflect.ownKeys(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
                return s;
            }
            if (
                ((s = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        s = Object.getOwnPropertyNames(e);
                    for (n = 0; n < s.length; n++)
                        (r = s[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
                    return o;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
                    (n = r[o]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s;
        })(e, ["guildId", "title", "description", "powerups", "footerInfoText", "footerAction"]),
        j = (0, c.A)(a),
        m =
            null != b && b.length > 0
                ? (0, n.jsx)("div", {
                      className: l.x,
                      children: (0, n.jsx)(s.Text, {
                          variant: "text-sm/medium",
                          children: b,
                      }),
                  })
                : void 0;
    return (0, n.jsx)(
        o.Modal,
        ((t = (function (e) {
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
        })(
            {
                title: d,
                subtitle: u,
                actionBarInput: m,
                actions: null != x ? [x] : [],
            },
            f,
        )),
        (r = r =
            {
                children: (0, n.jsx)("div", {
                    className: l.p,
                    children: p.map((e) =>
                        (0, n.jsx)(
                            i.A,
                            {
                                guildId: a,
                                powerup: e,
                                canUseBoosts: null != j && j,
                            },
                            e.skuId,
                        ),
                    ),
                }),
            }),
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
