n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(755721),
    s = n(481060),
    o = n(239091),
    c = n(132580),
    d = n(688465),
    u = n(236413),
    m = n(727072),
    g = n(85960),
    p = n(65912),
    f = n(457414),
    h = n(154502),
    b = n(295708),
    x = n(273504),
    j = n(388032),
    _ = n(260107);
function v(e) {
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
function O(e, t) {
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
                    ? (0, g.V9)(n).map((e) =>
                          (0, r.jsx)(
                              h.Z,
                              {
                                  actionType: e,
                                  triggerType: n,
                              },
                              e,
                          ),
                      )
                    : (0, g.V9)(n).reduce((e, i) => {
                          var l;
                          let a = t.actions.find((e) => {
                              let { type: t } = e;
                              return i === t;
                          });
                          return (
                              null == a ||
                                  e.push(
                                      (0, r.jsx)(
                                          h.Z,
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
              className: _.actionRuleListContainer,
              children: l,
          });
}
let C = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    N = (e) => {
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
            O(
                v(
                    {
                        className: t,
                        onClick: C,
                        onMouseDown: C,
                        onMouseUp: C,
                    },
                    i,
                ),
                { children: n },
            ),
        );
    };
function E(e) {
    var t;
    let { rule: n, onChangeRule: i, onContextMenu: l } = e,
        o = () => i(O(v({}, n), { enabled: !n.enabled })),
        c = (e) => {
            C(e), l(e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: _.ruleTextContainer,
                children: (0, r.jsx)(b.Z, {
                    rule: n,
                    onChangeRule: i,
                }),
            }),
            (0, r.jsxs)(N, {
                className: _.actionContainer,
                children: [
                    (0, r.jsx)(a.T2, {
                        className: _.toggle,
                        onChange: o,
                        checked: null != (t = null == n ? void 0 : n.enabled) && t,
                    }),
                    (0, r.jsx)(s.ua7, {
                        text: j.intl.string(j.t.UKOtz8),
                        position: "top",
                        "aria-label": j.intl.string(j.t.PdRCRk),
                        children: (e) =>
                            (0, r.jsx)(
                                s.P3F,
                                O(v({}, e), {
                                    onClick: c,
                                    className: _.menuIconButton,
                                    children: (0, r.jsx)(s.Huf, {
                                        size: "md",
                                        color: "currentColor",
                                        className: _.menuIcon,
                                    }),
                                }),
                            ),
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    return (0, g.r5)(e, g.vT.ALPHA)
        ? (0, r.jsx)(c.Z, { className: _.alphaBetaTag })
        : (0, g.r5)(e, g.vT.BETA)
          ? (0, r.jsx)(d.Z, { className: _.alphaBetaTag })
          : null;
}
function S(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: o } = e,
        c = (0, f.w)(t.triggerType, t),
        { isLoading: d, saveRule: g } = (0, p.w)(),
        { updateRule: h } = (0, m.pH)(t.guildId),
        [b, x] = i.useState(t.enabled),
        E = (0, l.throttle)(async (e, n) => {
            if ((n.preventDefault(), n.stopPropagation(), !d)) {
                let e = O(v({}, t), { enabled: !b });
                x(!b);
                let n = await g(e, []);
                null != n && (h(n), x(n.enabled));
            }
        }, 300),
        S = (e) => {
            C(e), o(e);
        };
    if (null == c) return null;
    let { headerText: T, headerSubtext: P, descriptionText: w, icon: R } = c,
        Z = !(0, u.Vb)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: _.ruleIconContainer,
                children: (0, r.jsx)(R, {
                    size: "md",
                    color: "currentColor",
                    className: _.ruleIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: _.ruleTextContainer,
                children: [
                    (0, r.jsxs)(s.X6q, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: _.ruleTextHeaderContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: _.ruleTextHeader,
                                children: [T, I(t.triggerType)],
                            }),
                            (0, r.jsx)(s.Text, {
                                className: _.ruleSubtextHeader,
                                variant: "text-sm/normal",
                                children: P,
                            }),
                        ],
                    }),
                    Z &&
                        (0, r.jsx)(s.Text, {
                            className: _.ruleTextDescription,
                            variant: "text-sm/normal",
                            children: w,
                        }),
                    (0, r.jsx)(y, {
                        rule: t,
                        triggerType: t.triggerType,
                    }),
                ],
            }),
            (0, r.jsxs)(N, {
                className: _.actionContainer,
                children: [
                    (0, r.jsx)(a.T2, {
                        className: _.toggle,
                        onChange: E,
                        checked: null != b && b,
                    }),
                    !n &&
                        (0, r.jsx)(s.ua7, {
                            text: j.intl.string(j.t.UKOtz8),
                            position: "top",
                            "aria-label": j.intl.string(j.t.PdRCRk),
                            children: (e) =>
                                (0, r.jsx)(
                                    s.P3F,
                                    O(v({}, e), {
                                        onClick: S,
                                        className: _.menuIconButton,
                                        children: (0, r.jsx)(s.Huf, {
                                            size: "md",
                                            color: "currentColor",
                                            className: _.menuIcon,
                                        }),
                                    }),
                                ),
                        }),
                ],
            }),
        ],
    });
}
function T(e) {
    let { triggerType: t, onSetupRule: n } = e,
        l = i.useMemo(() => (0, f.w)(t), [t]);
    if (null == l) return null;
    let { headerText: a, descriptionText: o, icon: c } = l;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: _.ruleIconContainer,
                children: (0, r.jsx)(c, {
                    color: "currentColor",
                    size: "md",
                    className: _.ruleIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: _.ruleTextContainer,
                children: [
                    (0, r.jsx)(s.X6q, {
                        className: _.ruleTextHeader,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: (0, r.jsxs)("div", {
                            className: _.ruleTextHeader,
                            children: [a, I(t)],
                        }),
                    }),
                    (0, r.jsx)(s.Text, {
                        className: _.ruleTextDescription,
                        variant: "text-sm/normal",
                        children: o,
                    }),
                    (0, r.jsx)(y, { triggerType: t }),
                ],
            }),
            (0, r.jsx)(N, {
                className: _.actionContainer,
                children: (0, r.jsx)(s.zxk, {
                    variant: "primary",
                    size: "sm",
                    text: t === x.fX.KEYWORD ? j.intl.string(j.t.CumH4u) : j.intl.string(j.t.oRs6mJ),
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
        m = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, o.jW)(e, async () => {
                    let { default: e } = await n.e("25443").then(n.bind(n, 46577));
                    return (n) => (0, r.jsx)(e, v({ rule: t }, n));
                }));
        },
        g = (0, r.jsx)(T, {
            triggerType: i,
            onSetupRule: d,
        });
    return (
        null == t ||
            c ||
            (g = l
                ? (0, r.jsx)(E, {
                      rule: t,
                      onChangeRule: u,
                      onContextMenu: m,
                  })
                : (0, r.jsx)(S, {
                      rule: t,
                      isDefaultRule: a,
                      onContextMenu: m,
                  })),
        (0, r.jsx)(s.P3F, {
            className: _.mainContainer,
            onContextMenu: m,
            children: g,
        })
    );
}
