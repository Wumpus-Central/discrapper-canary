r.d(t, { default: () => l }), r(953529);
var n = r(255367),
    o = r(481060),
    a = r(639777),
    i = r(507155),
    s = r(679051);
function l(e) {
    var t,
        r,
        {
            guildId: l,
            title: c,
            description: d,
            powerups: u,
            footerInfoText: p,
            footerButtonText: f,
            footerButtonOnClick: x,
        } = e,
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
        })(e, [
            "guildId",
            "title",
            "description",
            "powerups",
            "footerInfoText",
            "footerButtonText",
            "footerButtonOnClick",
        ]);
    let j = null != p && p.length > 0,
        C = null != f && f.length > 0 && null != x,
        g = j || C,
        v = (0, a.Z)(l);
    return (0, n.jsxs)(
        o.Y0X,
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
        })({ size: o.CgR.DYNAMIC }, m)),
        (r = r =
            {
                parentComponent: "GuildPowerupPerkGroupModal",
                children: [
                    (0, n.jsxs)(o.hzk, {
                        className: s.modalContentContainer,
                        scrollbarType: "none",
                        children: [
                            (0, n.jsx)(o.X6q, {
                                variant: "heading-lg/semibold",
                                children: c,
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-secondary",
                                children: d,
                            }),
                            (0, n.jsx)("div", {
                                className: s.perkCardsContainer,
                                children: u.map((e) =>
                                    (0, n.jsx)(
                                        i.Z,
                                        {
                                            guildId: l,
                                            powerup: e,
                                            canUseBoosts: null != v && v,
                                        },
                                        e.skuId,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    g &&
                        (0, n.jsx)(o.mzw, {
                            children: (0, n.jsxs)("div", {
                                className: s.footerContainer,
                                children: [
                                    j &&
                                        (0, n.jsxs)("div", {
                                            className: s.footerInfoContainer,
                                            children: [
                                                (0, n.jsx)(o.d3s, { size: "sm" }),
                                                (0, n.jsx)(o.Text, {
                                                    variant: "text-sm/medium",
                                                    color: "text-secondary",
                                                    children: p,
                                                }),
                                            ],
                                        }),
                                    C &&
                                        (0, n.jsx)("div", {
                                            children: (0, n.jsx)(o.zxk, {
                                                variant: "secondary",
                                                size: "md",
                                                text: f,
                                                onClick: x,
                                            }),
                                        }),
                                ],
                            }),
                        }),
                ],
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
