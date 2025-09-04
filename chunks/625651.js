r.d(t, {
    default: () => N,
    f: () => I,
});
var n = r(951288),
    a = r(647438),
    o = r(494497),
    i = r(442837),
    s = r(481060),
    l = r(14263),
    c = r(650774),
    u = r(485386),
    d = r(430824),
    m = r(870246),
    f = r(158638),
    p = r(795338),
    x = r(17622),
    g = r(279604),
    b = r(535396),
    v = r(989308),
    j = r(388032),
    h = r(514186);
function k(e) {
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
function O(e, t) {
    if (null == e) return {};
    var r,
        n,
        a = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                a = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++)
            (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    }
    return a;
}
function I(e) {
    var t,
        r,
        { size: a, title: o, body: i, warningText: l, error: c, isLoading: u, onDeactivate: d } = e,
        m = O(e, ["size", "title", "body", "warningText", "error", "isLoading", "onDeactivate"]);
    return (0, n.jsxs)(
        s.Y0X,
        ((t = k(
            {
                className: h.modal,
                size: a,
            },
            m,
        )),
        (r = r =
            {
                parentComponent: "GuildPowerupDeactivateModal",
                children: [
                    (0, n.jsxs)(s.hzk, {
                        className: h.modalContentContainer,
                        scrollbarType: "none",
                        children: [
                            (0, n.jsxs)("div", {
                                className: h.headerContainer,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: h.header,
                                        children: [
                                            (0, n.jsx)(s.X6q, {
                                                variant: "heading-md/semibold",
                                                children: j.intl.formatToPlainString(v.default.iEBw1N, { perk: o }),
                                            }),
                                            (0, n.jsx)(s.Text, {
                                                variant: "text-sm/medium",
                                                children: j.intl.formatToPlainString(v.default["7o0K+/"], { perk: o }),
                                            }),
                                        ],
                                    }),
                                    (0, n.jsx)(s.olH, { onClick: m.onClose }),
                                ],
                            }),
                            i,
                            (0, n.jsxs)("div", {
                                className: h.warningContainer,
                                children: [
                                    (0, n.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "eyebrow",
                                        children: j.intl.string(v.default.OVt5CA),
                                    }),
                                    (0, n.jsx)(s.Text, {
                                        className: h.warningText,
                                        tag: "span",
                                        variant: "text-sm/medium",
                                        children: l,
                                    }),
                                ],
                            }),
                            null != c &&
                                (0, n.jsx)(s.Text, {
                                    className: h.errorText,
                                    color: "text-danger",
                                    variant: "text-sm/semibold",
                                    children: c,
                                }),
                        ],
                    }),
                    (0, n.jsxs)(s.mzw, {
                        className: h.footer,
                        children: [
                            (0, n.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: h.button,
                                children: (0, n.jsx)(s.zxk, {
                                    variant: "critical-primary",
                                    text: j.intl.string(v.default.PYPdl5),
                                    loading: u,
                                    onClick: d,
                                }),
                            }),
                            (0, n.jsx)("div", {
                                "data-button-hoisted-classname-wrapper": !0,
                                className: h.button,
                                children: (0, n.jsx)(s.zxk, {
                                    variant: "secondary",
                                    text: j.intl.string(j.t["ETE/oK"]),
                                    onClick: m.onClose,
                                }),
                            }),
                        ],
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
function N(e) {
    var { guildId: t, powerup: r } = e,
        N = O(e, ["guildId", "powerup"]);
    let { onDeactivate: y, error: E, isLoading: T } = (0, g.ZP)(t, r),
        { onClose: S } = N,
        w = a.useCallback(
            (e) => {
                y(e).then(() => {
                    null == S || S();
                });
            },
            [S, y],
        ),
        P = (function (e, t) {
            let r = (0, i.e7)([c.Z], () => c.Z.getMemberCount(e)),
                m = (0, l.Z)(e),
                p = (0, i.e7)([d.Z], () => {
                    var t;
                    return (null == (t = d.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
                }),
                x = (0, f.g1)(e, "Powerup Deactivate Modal"),
                g = (0, i.e7)(
                    [u.Z],
                    () =>
                        t.skuId !== o.If || null == m
                            ? 0
                            : u.Z.getSortedRoles(e).reduce((e, t) => {
                                  var r, n;
                                  return (null == (r = t.colorStrings) ? void 0 : r.secondaryColor) == null
                                      ? e
                                      : e + (null != (n = m[t.id]) ? n : 0);
                              }, 0),
                    [e, t.skuId, m],
                );
            return a.useMemo(() => {
                let e;
                switch (t.skuId) {
                    case o.If:
                        e =
                            g > 0
                                ? j.intl.formatToPlainString(v.default["4jSvr6"], {
                                      perk: t.title,
                                      memberCount: g,
                                  })
                                : j.intl.formatToPlainString(v.default.cavtEh, { perk: t.title });
                        break;
                    case o.A$:
                        e = p
                            ? (0, n.jsx)(s.Text, {
                                  color: "text-danger",
                                  variant: "text-sm/semibold",
                                  children: j.intl.string(v.default.hN75yc),
                              })
                            : (0, n.jsx)(s.Text, {
                                  color: "text-danger",
                                  variant: "text-sm/semibold",
                                  children: j.intl.string(v.default.Du91RU),
                              });
                        break;
                    case o.MB:
                    case o.Vk:
                        e = j.intl.string(v.default.Vf2ZcX);
                        break;
                    default:
                        e = j.intl.formatToPlainString(v.default["4jSvr6"], {
                            perk: t.title,
                            memberCount: r,
                        });
                }
                return (
                    p &&
                        t.skuId === o.XW &&
                        (e = (0, n.jsxs)(n.Fragment, {
                            children: [
                                e,
                                (0, n.jsx)(s.Text, {
                                    color: "text-danger",
                                    variant: "text-sm/semibold",
                                    children: x ? j.intl.string(v.default.TkNA7e) : j.intl.string(v.default.M4XL5u),
                                }),
                            ],
                        })),
                    e
                );
            }, [t, g, r, p, x]);
        })(t, r);
    return (
        (0, m.$)(t, r, m.w.DEACTIVATE),
        (0, n.jsx)(
            I,
            k(
                {
                    size: r.type === b.Us.LEVEL ? s.CgR.MEDIUM : s.CgR.SMALL,
                    title: r.title,
                    body: (() => {
                        switch (r.type) {
                            case b.Us.LEVEL:
                                return (0, n.jsx)(x.Z, { powerup: r });
                            case b.Us.PERK:
                                return (0, n.jsx)(p.m, {
                                    className: h.image,
                                    powerup: r,
                                });
                        }
                    })(),
                    warningText: P,
                    error: E,
                    isLoading: T,
                    onDeactivate: w,
                },
                N,
            ),
        )
    );
}
