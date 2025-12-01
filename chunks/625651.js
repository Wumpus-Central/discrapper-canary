n.d(t, {
    default: () => h,
    f: () => _,
}),
    n(388685);
var r = n(54381),
    o = n(473749),
    a = n(494497),
    i = n(793030),
    l = n(442837),
    c = n(481060),
    s = n(14263),
    u = n(650774),
    d = n(485386),
    f = n(430824),
    m = n(870246),
    b = n(158638),
    p = n(795338),
    g = n(17622),
    v = n(279604),
    x = n(535396),
    k = n(130231),
    O = n(388032),
    j = n(514186);
function y(e) {
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
function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        o = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                o = {},
                a = Object.keys(e);
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        })(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
    }
    return o;
}
function _(e) {
    var t,
        n,
        {
            size: a,
            title: l,
            body: s,
            warningText: u,
            acknowledgementText: d,
            error: f,
            isLoading: m,
            onDeactivate: b,
        } = e,
        p = I(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]);
    let [g, v] = o.useState(!1);
    return (0, r.jsxs)(
        i.Modal,
        ((t = y({}, p)),
        (n = n =
            {
                size: a,
                title: O.intl.formatToPlainString(k.default.iEBw1M, { perk: l }),
                subtitle: O.intl.formatToPlainString(k.default["7o0K+2"], { perk: l }),
                actions: [
                    {
                        variant: "secondary",
                        text: O.intl.string(O.t["ETE/oC"]),
                        onClick: p.onClose,
                    },
                    {
                        variant: "critical-primary",
                        text: O.intl.string(k.default.PYPdl4),
                        loading: m,
                        onClick: b,
                        disabled: null != d && !g,
                    },
                ],
                children: [
                    s,
                    (0, r.jsxs)("div", {
                        className: j.warningContainer,
                        children: [
                            (0, r.jsx)(i.xvT, {
                                color: "text-danger",
                                variant: "eyebrow",
                                children: O.intl.string(k.default.OVt5CC),
                            }),
                            (0, r.jsx)(i.xvT, {
                                className: j.warningText,
                                tag: "span",
                                variant: "text-sm/medium",
                                children: u,
                            }),
                        ],
                    }),
                    null != f &&
                        (0, r.jsx)(i.xvT, {
                            className: j.errorText,
                            color: "text-danger",
                            variant: "text-sm/semibold",
                            children: f,
                        }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: j.acknowledgementContainer,
                            children: (0, r.jsx)(c.Checkbox, {
                                checked: g,
                                onChange: v,
                                label: d,
                                labelType: "secondary",
                            }),
                        }),
                ],
            }),
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
function h(e) {
    var { guildId: t, powerup: n } = e,
        c = I(e, ["guildId", "powerup"]);
    let { onDeactivate: h, error: w, isLoading: T } = (0, v.ZP)(t, n),
        { onClose: S } = c,
        C = o.useCallback(
            (e) => {
                h(e).then(() => {
                    null == S || S();
                });
            },
            [S, h],
        ),
        E = (function (e, t) {
            let n = (0, l.e7)([u.Z], () => u.Z.getMemberCount(e)),
                c = (0, s.Z)(e),
                m = (0, l.e7)([f.Z], () => {
                    var t;
                    return (null == (t = f.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
                }),
                p = (0, b.g1)(e, "Powerup Deactivate Modal"),
                g = (0, l.e7)(
                    [d.Z],
                    () =>
                        t.skuId !== a.If || null == c
                            ? 0
                            : d.Z.getSortedRoles(e).reduce((e, t) => {
                                  var n, r;
                                  return (null == (n = t.colorStrings) ? void 0 : n.secondaryColor) == null
                                      ? e
                                      : e + (null != (r = c[t.id]) ? r : 0);
                              }, 0),
                    [e, t.skuId, c],
                );
            return o.useMemo(() => {
                let e;
                switch (t.skuId) {
                    case a.If:
                        e =
                            g > 0
                                ? O.intl.formatToPlainString(k.default["4jSvr1"], {
                                      perk: t.title,
                                      memberCount: g,
                                  })
                                : O.intl.formatToPlainString(k.default.cavtEo, { perk: t.title });
                        break;
                    case a.A$:
                        e = m
                            ? (0, r.jsx)(i.xvT, {
                                  color: "text-danger",
                                  variant: "text-sm/semibold",
                                  children: O.intl.string(k.default.hN75yb),
                              })
                            : (0, r.jsx)(i.xvT, {
                                  color: "text-danger",
                                  variant: "text-sm/semibold",
                                  children: O.intl.string(k.default.Du91Rb),
                              });
                        break;
                    case a.MB:
                    case a.Vk:
                        e = O.intl.string(k.default.Vf2ZcR);
                        break;
                    default:
                        e = O.intl.formatToPlainString(k.default["4jSvr1"], {
                            perk: t.title,
                            memberCount: null != n ? n : 0,
                        });
                }
                return (
                    m &&
                        t.skuId === a.XW &&
                        (e = (0, r.jsxs)(r.Fragment, {
                            children: [
                                e,
                                (0, r.jsx)(i.xvT, {
                                    color: "text-danger",
                                    variant: "text-sm/semibold",
                                    children: p ? O.intl.string(k.default.TkNA7b) : O.intl.string(k.default.M4XL5n),
                                }),
                            ],
                        })),
                    e
                );
            }, [t, g, n, m, p]);
        })(t, n);
    return (
        (0, m.$)(t, n, m.w.DEACTIVATE),
        (0, r.jsx)(
            _,
            y(
                {
                    size: n.type === x.Us.LEVEL ? "md" : "sm",
                    title: n.title,
                    body: (() => {
                        switch (n.type) {
                            case x.Us.LEVEL:
                                return (0, r.jsx)(g.Z, { powerup: n });
                            case x.Us.PERK:
                                return (0, r.jsx)(p.m, {
                                    className: j.image,
                                    powerup: n,
                                });
                        }
                    })(),
                    warningText: E,
                    error: w,
                    isLoading: T,
                    onDeactivate: C,
                },
                c,
            ),
        )
    );
}
