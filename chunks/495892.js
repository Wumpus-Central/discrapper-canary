n.d(t, { Z: () => P }), n(653041), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(392711),
    a = n(481060),
    l = n(239091),
    o = n(132580),
    c = n(688465),
    d = n(236413),
    u = n(727072),
    m = n(85960),
    g = n(65912),
    p = n(457414),
    h = n(154502),
    f = n(295708),
    b = n(273504),
    x = n(388032),
    j = n(260324);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
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
function v(e) {
    let { rule: t, triggerType: n } = e,
        s = i.useMemo(
            () =>
                null == t
                    ? (0, m.V9)(n).map((e) =>
                          (0, r.jsx)(
                              h.Z,
                              {
                                  actionType: e,
                                  triggerType: n
                              },
                              e
                          )
                      )
                    : (0, m.V9)(n).reduce((e, i) => {
                          var s;
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
                                              triggerType: null != (s = null == t ? void 0 : t.triggerType) ? s : n
                                          },
                                          i
                                      )
                                  ),
                              e
                          );
                      }, []),
            [t, n]
        );
    return 0 === s.length
        ? null
        : (0, r.jsx)('div', {
              className: j.actionRuleListContainer,
              children: s
          });
}
let C = (e, t) => () => t(_(N({}, e), { enabled: !e.enabled })),
    O = (e) => {
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
                            s = Object.keys(e);
                        for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                        return i;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var s = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['className', 'children']);
        return (0, r.jsx)(
            a.P3F,
            _(
                N(
                    {
                        className: t,
                        onClick: O,
                        onMouseDown: O,
                        onMouseUp: O
                    },
                    i
                ),
                { children: n }
            )
        );
    };
function I(e) {
    var t;
    let { rule: n, onChangeRule: i, onContextMenu: s } = e,
        l = C(n, i),
        o = (e) => {
            O(e), s(e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: j.ruleTextContainer,
                children: (0, r.jsx)(f.Z, {
                    rule: n,
                    onChangeRule: i
                })
            }),
            (0, r.jsxs)(y, {
                className: j.actionContainer,
                children: [
                    (0, r.jsx)(a.rsf, {
                        className: j.toggle,
                        onChange: l,
                        checked: null != (t = null == n ? void 0 : n.enabled) && t
                    }),
                    (0, r.jsx)(a.ua7, {
                        text: x.NW.string(x.t.UKOtz8),
                        position: 'top',
                        'aria-label': x.NW.string(x.t.PdRCRk),
                        children: (e) =>
                            (0, r.jsx)(
                                a.P3F,
                                _(N({}, e), {
                                    onClick: o,
                                    className: j.menuIconButton,
                                    children: (0, r.jsx)(a.Huf, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: j.menuIcon
                                    })
                                })
                            )
                    })
                ]
            })
        ]
    });
}
function E(e) {
    return (0, m.r5)(e, m.vT.ALPHA) ? (0, r.jsx)(o.Z, { className: j.alphaBetaTag }) : (0, m.r5)(e, m.vT.BETA) ? (0, r.jsx)(c.Z, { className: j.alphaBetaTag }) : null;
}
function S(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: l } = e,
        o = (0, p.w)(t.triggerType, t),
        { isLoading: c, saveRule: m } = (0, g.w)(),
        { updateRule: h } = (0, u.pH)(t.guildId),
        [f, b] = i.useState(t.enabled),
        C = (0, s.throttle)(async (e, n) => {
            if ((n.preventDefault(), n.stopPropagation(), !c)) {
                let e = _(N({}, t), { enabled: !f });
                b(!f);
                let n = await m(e, []);
                null != n && (h(n), b(n.enabled));
            }
        }, 300),
        I = (e) => {
            O(e), l(e);
        };
    if (null == o) return null;
    let { headerText: S, headerSubtext: T, descriptionText: P, icon: w } = o,
        R = !(0, d.Vb)(t);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: j.ruleIconContainer,
                children: (0, r.jsx)(w, {
                    size: 'md',
                    color: 'currentColor',
                    className: j.ruleIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: j.ruleTextContainer,
                children: [
                    (0, r.jsxs)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: j.ruleTextHeaderContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.ruleTextHeader,
                                children: [S, E(t.triggerType)]
                            }),
                            (0, r.jsx)(a.Text, {
                                className: j.ruleSubtextHeader,
                                variant: 'text-sm/normal',
                                children: T
                            })
                        ]
                    }),
                    R &&
                        (0, r.jsx)(a.Text, {
                            className: j.ruleTextDescription,
                            variant: 'text-sm/normal',
                            children: P
                        }),
                    (0, r.jsx)(v, {
                        rule: t,
                        triggerType: t.triggerType
                    })
                ]
            }),
            (0, r.jsxs)(y, {
                className: j.actionContainer,
                children: [
                    (0, r.jsx)(a.rsf, {
                        className: j.toggle,
                        onChange: C,
                        checked: null != f && f
                    }),
                    !n &&
                        (0, r.jsx)(a.ua7, {
                            text: x.NW.string(x.t.UKOtz8),
                            position: 'top',
                            'aria-label': x.NW.string(x.t.PdRCRk),
                            children: (e) =>
                                (0, r.jsx)(
                                    a.P3F,
                                    _(N({}, e), {
                                        onClick: I,
                                        className: j.menuIconButton,
                                        children: (0, r.jsx)(a.Huf, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: j.menuIcon
                                        })
                                    })
                                )
                        })
                ]
            })
        ]
    });
}
function T(e) {
    let { triggerType: t, onSetupRule: n } = e,
        s = i.useMemo(() => (0, p.w)(t), [t]);
    if (null == s) return null;
    let { headerText: l, descriptionText: o, icon: c } = s;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: j.ruleIconContainer,
                children: (0, r.jsx)(c, {
                    color: 'currentColor',
                    size: 'md',
                    className: j.ruleIcon
                })
            }),
            (0, r.jsxs)('div', {
                className: j.ruleTextContainer,
                children: [
                    (0, r.jsx)(a.X6q, {
                        className: j.ruleTextHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: (0, r.jsxs)('div', {
                            className: j.ruleTextHeader,
                            children: [l, E(t)]
                        })
                    }),
                    (0, r.jsx)(a.Text, {
                        className: j.ruleTextDescription,
                        variant: 'text-sm/normal',
                        children: o
                    }),
                    (0, r.jsx)(v, { triggerType: t })
                ]
            }),
            (0, r.jsx)(y, {
                className: j.actionContainer,
                children: (0, r.jsx)(a.zxk, {
                    size: a.zxk.Sizes.SMALL,
                    onClick: n,
                    children: t === b.fX.KEYWORD ? x.NW.string(x.t.CumH4u) : x.NW.string(x.t.oRs6mJ)
                })
            })
        ]
    });
}
function P(e) {
    let { rule: t, triggerType: i, isEditMode: s, isDefaultRule: o, forceSetup: c, onSetupRule: d, onChangeRule: u } = e,
        m = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, l.jW)(e, async () => {
                    let { default: e } = await n.e('25443').then(n.bind(n, 46577));
                    return (n) => (0, r.jsx)(e, N({ rule: t }, n));
                }));
        },
        g = (0, r.jsx)(T, {
            triggerType: i,
            onSetupRule: d
        });
    return (
        null == t ||
            c ||
            (g = s
                ? (0, r.jsx)(I, {
                      rule: t,
                      onChangeRule: u,
                      onContextMenu: m
                  })
                : (0, r.jsx)(S, {
                      rule: t,
                      isDefaultRule: o,
                      onContextMenu: m
                  })),
        (0, r.jsx)(a.P3F, {
            className: j.mainContainer,
            onContextMenu: m,
            children: g
        })
    );
}
