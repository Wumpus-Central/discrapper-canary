n.d(t, {
    default: () => h,
    f: () => T,
}),
    n(388685);
var r = n(951288),
    o = n(647438),
    a = n(494497),
    i = n(793030),
    c = n(442837),
    s = n(481060),
    l = n(14263),
    u = n(650774),
    d = n(485386),
    f = n(430824),
    m = n(870246),
    b = n(158638),
    p = n(795338),
    g = n(17622),
    k = n(279604),
    x = n(535396),
    v = n(459196),
    O = n(388032),
    I = n(514186);
function j(e) {
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
function _(e, t) {
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
function T(e) {
    var t,
        n,
        {
            size: a,
            title: c,
            body: l,
            warningText: u,
            acknowledgementText: d,
            error: f,
            isLoading: m,
            onDeactivate: b,
        } = e,
        p = _(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]);
    let [g, k] = o.useState(!1);
    return (0, r.jsxs)(
        i.Modal,
        ((t = j({}, p)),
        (n = n =
            {
                size: a,
                title: O.intl.formatToPlainString(v.default.iEBw1M, { perk: c }),
                subtitle: O.intl.formatToPlainString(v.default["7o0K+2"], { perk: c }),
                actions: [
                    {
                        variant: "secondary",
                        text: O.intl.string(O.t["ETE/oC"]),
                        onClick: p.onClose,
                    },
                    {
                        variant: "critical-primary",
                        text: O.intl.string(v.default.PYPdl4),
                        loading: m,
                        onClick: b,
                        disabled: null != d && !g,
                    },
                ],
                children: [
                    l,
                    (0, r.jsxs)("div", {
                        className: I.warningContainer,
                        children: [
                            (0, r.jsx)(i.xvT, {
                                color: "text-danger",
                                variant: "eyebrow",
                                children: O.intl.string(v.default.OVt5CC),
                            }),
                            (0, r.jsx)(i.xvT, {
                                className: I.warningText,
                                tag: "span",
                                variant: "text-sm/medium",
                                children: u,
                            }),
                        ],
                    }),
                    null != f &&
                        (0, r.jsx)(i.xvT, {
                            className: I.errorText,
                            color: "text-danger",
                            variant: "text-sm/semibold",
                            children: f,
                        }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: I.acknowledgementContainer,
                            children: (0, r.jsx)(s.Checkbox, {
                                checked: g,
                                onChange: k,
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
        s = _(e, ["guildId", "powerup"]);
    let { onDeactivate: h, error: y, isLoading: w } = (0, k.ZP)(t, n),
        { onClose: C } = s,
        E = o.useCallback(
            (e) => {
                h(e).then(() => {
                    null == C || C();
                });
            },
            [C, h],
        ),
        S = (function (e, t) {
            let n = (0, c.e7)([u.Z], () => u.Z.getMemberCount(e)),
                s = (0, l.Z)(e),
                m = (0, c.e7)([f.Z], () => {
                    var t;
                    return (null == (t = f.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
                }),
                p = (0, b.g1)(e, "Powerup Deactivate Modal"),
                g = (0, c.e7)(
                    [d.Z],
                    () =>
                        t.skuId !== a.If || null == s
                            ? 0
                            : d.Z.getSortedRoles(e).reduce((e, t) => {
                                  var n, r;
                                  return (null == (n = t.colorStrings) ? void 0 : n.secondaryColor) == null
                                      ? e
                                      : e + (null != (r = s[t.id]) ? r : 0);
                              }, 0),
                    [e, t.skuId, s],
                );
            return o.useMemo(() => {
                let e;
                switch (t.skuId) {
                    case a.If:
                        e =
                            g > 0
                                ? O.intl.formatToPlainString(v.default["4jSvr1"], {
                                      perk: t.title,
                                      memberCount: g,
                                  })
                                : O.intl.formatToPlainString(v.default.cavtEo, { perk: t.title });
                        break;
                    case a.A$:
                        e = m
                            ? (0, r.jsx)(i.xvT, {
                                  color: "text-danger",
                                  variant: "text-sm/semibold",
                                  children: O.intl.string(v.default.hN75yb),
                              })
                            : (0, r.jsx)(i.xvT, {
                                  color: "text-danger",
                                  variant: "text-sm/semibold",
                                  children: O.intl.string(v.default.Du91Rb),
                              });
                        break;
                    case a.MB:
                    case a.Vk:
                        e = O.intl.string(v.default.Vf2ZcR);
                        break;
                    default:
                        e = O.intl.formatToPlainString(v.default["4jSvr1"], {
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
                                    children: p ? O.intl.string(v.default.TkNA7b) : O.intl.string(v.default.M4XL5n),
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
            T,
            j(
                {
                    size: n.type === x.Us.LEVEL ? "md" : "sm",
                    title: n.title,
                    body: (() => {
                        switch (n.type) {
                            case x.Us.LEVEL:
                                return (0, r.jsx)(g.Z, { powerup: n });
                            case x.Us.PERK:
                                return (0, r.jsx)(p.m, {
                                    className: I.image,
                                    powerup: n,
                                });
                        }
                    })(),
                    warningText: S,
                    error: y,
                    isLoading: w,
                    onDeactivate: E,
                },
                s,
            ),
        )
    );
}
