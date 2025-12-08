n.d(t, {
    default: () => h,
    f: () => T,
}),
    n(388685);
var r = n(54381),
    o = n(473749),
    a = n(494497),
    i = n(793030),
    c = n(442837),
    l = n(481060),
    s = n(14263),
    u = n(650774),
    d = n(485386),
    f = n(430824),
    b = n(870246),
    m = n(158638),
    p = n(795338),
    k = n(17622),
    g = n(279604),
    x = n(535396),
    v = n(810878),
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
            body: s,
            warningText: u,
            acknowledgementText: d,
            error: f,
            isLoading: b,
            onDeactivate: m,
        } = e,
        p = _(e, ["size", "title", "body", "warningText", "acknowledgementText", "error", "isLoading", "onDeactivate"]);
    let [k, g] = o.useState(!1);
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
                        loading: b,
                        onClick: m,
                        disabled: null != d && !k,
                    },
                ],
                children: [
                    s,
                    (0, r.jsxs)("div", {
                        className: I.warningContainer,
                        children: [
                            (0, r.jsx)(i.xvT, {
                                color: "text-feedback-critical",
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
                            color: "text-feedback-critical",
                            variant: "text-sm/semibold",
                            children: f,
                        }),
                    null != d &&
                        (0, r.jsx)("div", {
                            className: I.acknowledgementContainer,
                            children: (0, r.jsx)(l.Checkbox, {
                                checked: k,
                                onChange: g,
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
        l = _(e, ["guildId", "powerup"]);
    let { onDeactivate: h, error: y, isLoading: w } = (0, g.ZP)(t, n),
        { onClose: C } = l,
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
                l = (0, s.Z)(e),
                b = (0, c.e7)([f.Z], () => {
                    var t;
                    return (null == (t = f.Z.getGuild(e)) ? void 0 : t.vanityURLCode) != null;
                }),
                p = (0, m.g1)(e, "Powerup Deactivate Modal"),
                k = (0, c.e7)(
                    [d.Z],
                    () =>
                        t.skuId !== a.If || null == l
                            ? 0
                            : d.Z.getSortedRoles(e).reduce((e, t) => {
                                  var n, r;
                                  return (null == (n = t.colorStrings) ? void 0 : n.secondaryColor) == null
                                      ? e
                                      : e + (null != (r = l[t.id]) ? r : 0);
                              }, 0),
                    [e, t.skuId, l],
                );
            return o.useMemo(() => {
                let e;
                switch (t.skuId) {
                    case a.If:
                        e =
                            k > 0
                                ? O.intl.formatToPlainString(v.default["4jSvr1"], {
                                      perk: t.title,
                                      memberCount: k,
                                  })
                                : O.intl.formatToPlainString(v.default.cavtEo, { perk: t.title });
                        break;
                    case a.A$:
                        e = b
                            ? (0, r.jsx)(i.xvT, {
                                  color: "text-feedback-critical",
                                  variant: "text-sm/semibold",
                                  children: O.intl.string(v.default.hN75yb),
                              })
                            : (0, r.jsx)(i.xvT, {
                                  color: "text-feedback-critical",
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
                    b &&
                        t.skuId === a.XW &&
                        (e = (0, r.jsxs)(r.Fragment, {
                            children: [
                                e,
                                (0, r.jsx)(i.xvT, {
                                    color: "text-feedback-critical",
                                    variant: "text-sm/semibold",
                                    children: p ? O.intl.string(v.default.TkNA7b) : O.intl.string(v.default.M4XL5n),
                                }),
                            ],
                        })),
                    e
                );
            }, [t, k, n, b, p]);
        })(t, n);
    return (
        (0, b.$)(t, n, b.w.DEACTIVATE),
        (0, r.jsx)(
            T,
            j(
                {
                    size: n.type === x.Us.LEVEL ? "md" : "sm",
                    title: n.title,
                    body: (() => {
                        switch (n.type) {
                            case x.Us.LEVEL:
                                return (0, r.jsx)(k.Z, { powerup: n });
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
                l,
            ),
        )
    );
}
