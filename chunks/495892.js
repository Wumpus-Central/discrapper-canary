n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n(28664),
    s = n(481060),
    o = n(239091),
    c = n(132580),
    d = n(688465),
    u = n(236413),
    g = n(727072),
    f = n(85960),
    m = n(65912),
    b = n(457414),
    p = n(154502),
    h = n(295708),
    x = n(273504),
    j = n(388032),
    v = n(327198);
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function y(e) {
    let { rule: t, triggerType: n } = e,
        l = i.useMemo(
            () =>
                null == t
                    ? (0, f.V9)(n).map((e) =>
                          (0, r.jsx)(
                              p.Z,
                              {
                                  actionType: e,
                                  triggerType: n,
                              },
                              e,
                          ),
                      )
                    : (0, f.V9)(n).reduce((e, i) => {
                          var l;
                          let a = t.actions.find((e) => {
                              let { type: t } = e;
                              return i === t;
                          });
                          return (
                              null == a ||
                                  e.push(
                                      (0, r.jsx)(
                                          p.Z,
                                          {
                                              actionType: i,
                                              action: a,
                                              triggerType: null != (l = null == t ? void 0 : t.triggerType) ? l : n,
                                          },
                                          i,
                                      ),
                                  ),
                              e
                          );
                      }, []),
            [t, n],
        );
    return 0 === l.length
        ? null
        : (0, r.jsx)("div", {
              className: v.actionRuleListContainer,
              children: l,
          });
}
let N = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    E = (e) => {
        var { className: t, children: n } = e,
            i = (function (e, t) {
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
            })(e, ["className", "children"]);
        return (0, r.jsx)(
            s.P3F,
            C(
                O(
                    {
                        className: t,
                        onClick: N,
                        onMouseDown: N,
                        onMouseUp: N,
                    },
                    i,
                ),
                { children: n },
            ),
        );
    };
function I(e) {
    var t;
    let { rule: n, onChangeRule: i, onContextMenu: l } = e,
        o = () => i(C(O({}, n), { enabled: !n.enabled }));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: v.ruleTextContainer,
                children: (0, r.jsx)(h.Z, {
                    rule: n,
                    onChangeRule: i,
                }),
            }),
            (0, r.jsxs)(E, {
                className: v.actionContainer,
                children: [
                    (0, r.jsx)(s.rsf, {
                        onChange: o,
                        checked: null != (t = null == n ? void 0 : n.enabled) && t,
                    }),
                    (0, r.jsx)(a.u, {
                        text: j.intl.string(j.t["UKOtz+"]),
                        position: "top",
                        "aria-label": j.intl.string(j.t.PdRCRg),
                        children: (0, r.jsx)(s.P3F, {
                            onClick: (e) => {
                                N(e), l(e);
                            },
                            className: v.menuIconButton,
                            children: (0, r.jsx)(s.Huf, {
                                size: "md",
                                color: "currentColor",
                                className: v.menuIcon,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    return (0, f.r5)(e, f.vT.ALPHA)
        ? (0, r.jsx)(c.Z, { className: v.alphaBetaTag })
        : (0, f.r5)(e, f.vT.BETA)
          ? (0, r.jsx)(d.Z, { className: v.alphaBetaTag })
          : null;
}
function _(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: o } = e,
        c = (0, b.w)(t.triggerType, t),
        { isLoading: d, saveRule: f } = (0, m.w)(),
        { updateRule: p } = (0, g.pH)(t.guildId),
        [h, x] = i.useState(t.enabled),
        I = (0, l.throttle)(async () => {
            if (!d) {
                let e = C(O({}, t), { enabled: !h });
                x(!h);
                let n = await f(e, []);
                null != n && (p(n), x(n.enabled));
            }
        }, 300);
    if (null == c) return null;
    let { headerText: _, headerSubtext: T, descriptionText: P, icon: w } = c,
        Z = !(0, u.Vb)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: v.ruleIconContainer,
                children: (0, r.jsx)(w, {
                    size: "md",
                    color: "currentColor",
                    className: v.ruleIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.ruleTextContainer,
                children: [
                    (0, r.jsxs)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        className: v.ruleTextHeaderContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: v.ruleTextHeader,
                                children: [_, S(t.triggerType)],
                            }),
                            (0, r.jsx)(s.Text, {
                                className: v.ruleSubtextHeader,
                                variant: "text-sm/normal",
                                children: T,
                            }),
                        ],
                    }),
                    Z &&
                        (0, r.jsx)(s.Text, {
                            className: v.ruleTextDescription,
                            variant: "text-sm/normal",
                            children: P,
                        }),
                    (0, r.jsx)(y, {
                        rule: t,
                        triggerType: t.triggerType,
                    }),
                ],
            }),
            (0, r.jsxs)(E, {
                className: v.actionContainer,
                children: [
                    (0, r.jsx)(s.rsf, {
                        onChange: I,
                        checked: null != h && h,
                    }),
                    !n &&
                        (0, r.jsx)(a.u, {
                            text: j.intl.string(j.t["UKOtz+"]),
                            position: "top",
                            "aria-label": j.intl.string(j.t.PdRCRg),
                            children: (0, r.jsx)(s.P3F, {
                                onClick: (e) => {
                                    N(e), o(e);
                                },
                                className: v.menuIconButton,
                                children: (0, r.jsx)(s.Huf, {
                                    size: "md",
                                    color: "currentColor",
                                    className: v.menuIcon,
                                }),
                            }),
                        }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { triggerType: t, onSetupRule: n } = e,
        l = i.useMemo(() => (0, b.w)(t), [t]);
    if (null == l) return null;
    let { headerText: a, descriptionText: o, icon: c } = l;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: v.ruleIconContainer,
                children: (0, r.jsx)(c, {
                    color: "currentColor",
                    size: "md",
                    className: v.ruleIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: v.ruleTextContainer,
                children: [
                    (0, r.jsx)(s.Heading, {
                        className: v.ruleTextHeader,
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: (0, r.jsxs)("div", {
                            className: v.ruleTextHeader,
                            children: [a, S(t)],
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        className: v.ruleTextDescription,
                        variant: "text-sm/normal",
                        children: o,
                    }),
                    (0, r.jsx)(y, { triggerType: t }),
                ],
            }),
            (0, r.jsx)(E, {
                className: v.actionContainer,
                children: (0, r.jsx)(s.Button, {
                    variant: "primary",
                    size: "sm",
                    text: t === x.fX.KEYWORD ? j.intl.string(j.t.CumH4u) : j.intl.string(j.t.oRs6mG),
                    onClick: n,
                }),
            }),
        ],
    });
}
function P(e) {
    let {
            rule: t,
            triggerType: i,
            isEditMode: l,
            isDefaultRule: a,
            forceSetup: c,
            onSetupRule: d,
            onChangeRule: u,
        } = e,
        g = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e("25443").then(n.bind(n, 46577));
                    return (n) => (0, r.jsx)(e, O({ rule: t }, n));
                }));
        },
        f = (0, r.jsx)(T, {
            triggerType: i,
            onSetupRule: d,
        });
    return (
        null == t ||
            c ||
            (f = l
                ? (0, r.jsx)(I, {
                      rule: t,
                      onChangeRule: u,
                      onContextMenu: g,
                  })
                : (0, r.jsx)(_, {
                      rule: t,
                      isDefaultRule: a,
                      onContextMenu: g,
                  })),
        (0, r.jsx)(s.P3F, {
            className: v.mainContainer,
            onContextMenu: g,
            children: f,
        })
    );
}
