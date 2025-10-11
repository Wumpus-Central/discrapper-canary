n.d(t, { Z: () => T }), n(539854), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(392711),
    a = n(481060),
    s = n(239091),
    o = n(132580),
    c = n(688465),
    d = n(236413),
    u = n(727072),
    g = n(85960),
    m = n(65912),
    p = n(457414),
    f = n(154502),
    h = n(295708),
    b = n(273504),
    x = n(388032),
    j = n(260107);
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
function _(e, t) {
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
function C(e) {
    let { rule: t, triggerType: n } = e,
        l = i.useMemo(
            () =>
                null == t
                    ? (0, g.V9)(n).map((e) =>
                          (0, r.jsx)(
                              f.Z,
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
                                          f.Z,
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
              className: j.actionRuleListContainer,
              children: l,
          });
}
let O = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    y = (e) => {
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
            a.P3F,
            _(
                v(
                    {
                        className: t,
                        onClick: O,
                        onMouseDown: O,
                        onMouseUp: O,
                    },
                    i,
                ),
                { children: n },
            ),
        );
    };
function N(e) {
    var t;
    let { rule: n, onChangeRule: i, onContextMenu: l } = e,
        s = () => i(_(v({}, n), { enabled: !n.enabled })),
        o = (e) => {
            O(e), l(e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: j.ruleTextContainer,
                children: (0, r.jsx)(h.Z, {
                    rule: n,
                    onChangeRule: i,
                }),
            }),
            (0, r.jsxs)(y, {
                className: j.actionContainer,
                children: [
                    (0, r.jsx)(a.rsf, {
                        onChange: s,
                        checked: null != (t = null == n ? void 0 : n.enabled) && t,
                    }),
                    (0, r.jsx)(a.ua7, {
                        "data-migration-pending": !0,
                        text: x.intl.string(x.t.UKOtz8),
                        position: "top",
                        "aria-label": x.intl.string(x.t.PdRCRk),
                        children: (e) =>
                            (0, r.jsx)(
                                a.P3F,
                                _(v({}, e), {
                                    onClick: o,
                                    className: j.menuIconButton,
                                    children: (0, r.jsx)(a.Huf, {
                                        size: "md",
                                        color: "currentColor",
                                        className: j.menuIcon,
                                    }),
                                }),
                            ),
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    return (0, g.r5)(e, g.vT.ALPHA)
        ? (0, r.jsx)(o.Z, { className: j.alphaBetaTag })
        : (0, g.r5)(e, g.vT.BETA)
          ? (0, r.jsx)(c.Z, { className: j.alphaBetaTag })
          : null;
}
function I(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: s } = e,
        o = (0, p.w)(t.triggerType, t),
        { isLoading: c, saveRule: g } = (0, m.w)(),
        { updateRule: f } = (0, u.pH)(t.guildId),
        [h, b] = i.useState(t.enabled),
        N = (0, l.throttle)(async () => {
            if (!c) {
                let e = _(v({}, t), { enabled: !h });
                b(!h);
                let n = await g(e, []);
                null != n && (f(n), b(n.enabled));
            }
        }, 300),
        I = (e) => {
            O(e), s(e);
        };
    if (null == o) return null;
    let { headerText: S, headerSubtext: T, descriptionText: P, icon: w } = o,
        Z = !(0, d.Vb)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: j.ruleIconContainer,
                children: (0, r.jsx)(w, {
                    size: "md",
                    color: "currentColor",
                    className: j.ruleIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: j.ruleTextContainer,
                children: [
                    (0, r.jsxs)(a.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        className: j.ruleTextHeaderContainer,
                        children: [
                            (0, r.jsxs)("div", {
                                className: j.ruleTextHeader,
                                children: [S, E(t.triggerType)],
                            }),
                            (0, r.jsx)(a.Text, {
                                className: j.ruleSubtextHeader,
                                variant: "text-sm/normal",
                                children: T,
                            }),
                        ],
                    }),
                    Z &&
                        (0, r.jsx)(a.Text, {
                            className: j.ruleTextDescription,
                            variant: "text-sm/normal",
                            children: P,
                        }),
                    (0, r.jsx)(C, {
                        rule: t,
                        triggerType: t.triggerType,
                    }),
                ],
            }),
            (0, r.jsxs)(y, {
                className: j.actionContainer,
                children: [
                    (0, r.jsx)(a.rsf, {
                        onChange: N,
                        checked: null != h && h,
                    }),
                    !n &&
                        (0, r.jsx)(a.ua7, {
                            "data-migration-pending": !0,
                            text: x.intl.string(x.t.UKOtz8),
                            position: "top",
                            "aria-label": x.intl.string(x.t.PdRCRk),
                            children: (e) =>
                                (0, r.jsx)(
                                    a.P3F,
                                    _(v({}, e), {
                                        onClick: I,
                                        className: j.menuIconButton,
                                        children: (0, r.jsx)(a.Huf, {
                                            size: "md",
                                            color: "currentColor",
                                            className: j.menuIcon,
                                        }),
                                    }),
                                ),
                        }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { triggerType: t, onSetupRule: n } = e,
        l = i.useMemo(() => (0, p.w)(t), [t]);
    if (null == l) return null;
    let { headerText: s, descriptionText: o, icon: c } = l;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: j.ruleIconContainer,
                children: (0, r.jsx)(c, {
                    color: "currentColor",
                    size: "md",
                    className: j.ruleIcon,
                }),
            }),
            (0, r.jsxs)("div", {
                className: j.ruleTextContainer,
                children: [
                    (0, r.jsx)(a.Heading, {
                        className: j.ruleTextHeader,
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: (0, r.jsxs)("div", {
                            className: j.ruleTextHeader,
                            children: [s, E(t)],
                        }),
                    }),
                    (0, r.jsx)(a.Text, {
                        className: j.ruleTextDescription,
                        variant: "text-sm/normal",
                        children: o,
                    }),
                    (0, r.jsx)(C, { triggerType: t }),
                ],
            }),
            (0, r.jsx)(y, {
                className: j.actionContainer,
                children: (0, r.jsx)(a.Button, {
                    variant: "primary",
                    size: "sm",
                    text: t === b.fX.KEYWORD ? x.intl.string(x.t.CumH4u) : x.intl.string(x.t.oRs6mJ),
                    onClick: n,
                }),
            }),
        ],
    });
}
function T(e) {
    let {
            rule: t,
            triggerType: i,
            isEditMode: l,
            isDefaultRule: o,
            forceSetup: c,
            onSetupRule: d,
            onChangeRule: u,
        } = e,
        g = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, s.jW)(e, async () => {
                    let { default: e } = await n.e("25443").then(n.bind(n, 46577));
                    return (n) => (0, r.jsx)(e, v({ rule: t }, n));
                }));
        },
        m = (0, r.jsx)(S, {
            triggerType: i,
            onSetupRule: d,
        });
    return (
        null == t ||
            c ||
            (m = l
                ? (0, r.jsx)(N, {
                      rule: t,
                      onChangeRule: u,
                      onContextMenu: g,
                  })
                : (0, r.jsx)(I, {
                      rule: t,
                      isDefaultRule: o,
                      onContextMenu: g,
                  })),
        (0, r.jsx)(a.P3F, {
            className: j.mainContainer,
            onContextMenu: g,
            children: m,
        })
    );
}
