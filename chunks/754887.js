r.d(t, { default: () => c }), r(953529);
var n = r(54381),
    o = r(793030),
    a = r(481060),
    i = r(639777),
    s = r(507155),
    l = r(391213);
function c(e) {
    var t,
        r,
        { guildId: c, title: d, description: u, powerups: p, footerInfoText: f, footerAction: v } = e,
        m = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                o = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (n = 0; n < a.length; n++)
                    (r = a[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
            }
            return o;
        })(e, ["guildId", "title", "description", "powerups", "footerInfoText", "footerAction"]);
    let j = (0, i.Z)(c),
        x =
            null != f && f.length > 0
                ? (0, n.jsx)("div", {
                      className: l.footerInfoContainer,
                      children: (0, n.jsx)(a.Text, {
                          variant: "text-sm/medium",
                          children: f,
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
                actionBarInput: x,
                actions: null != v ? [v] : [],
            },
            m,
        )),
        (r = r =
            {
                children: (0, n.jsx)("div", {
                    className: l.perkCardsContainer,
                    children: p.map((e) =>
                        (0, n.jsx)(
                            s.Z,
                            {
                                guildId: c,
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
