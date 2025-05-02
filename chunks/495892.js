n.d(t, { Z: () => P }), n(539854), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(392711),
    s = n(481060),
    a = n(239091),
    o = n(132580),
    c = n(688465),
    u = n(236413),
    d = n(727072),
    m = n(85960),
    g = n(65912),
    p = n(457414),
    f = n(154502),
    h = n(295708),
    x = n(273504),
    b = n(388032),
    j = n(260324);
function _(e) {
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
function v(e, t) {
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
function O(e) {
    let { rule: t, triggerType: n } = e,
        l = i.useMemo(
            () =>
                null == t
                    ? (0, m.V9)(n).map((e) =>
                          (0, r.jsx)(
                              f.Z,
                              {
                                  actionType: e,
                                  triggerType: n
                              },
                              e
                          )
                      )
                    : (0, m.V9)(n).reduce((e, i) => {
                          var l;
                          let s = t.actions.find((e) => {
                              let { type: t } = e;
                              return i === t;
                          });
                          return (
                              null == s ||
                                  e.push(
                                      (0, r.jsx)(
                                          f.Z,
                                          {
                                              actionType: i,
                                              action: s,
                                              triggerType: null != (l = null == t ? void 0 : t.triggerType) ? l : n
                                          },
                                          i
                                      )
                                  ),
                              e
                          );
                      }, []),
            [t, n]
        );
    return 0 === l.length
        ? null
        : (0, r.jsx)('div', {
              className: j.actionRuleListContainer,
              children: l
          });
}
let C = (e, t) => () => t(v(_({}, e), { enabled: !e.enabled })),
    y = (e) => {
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
                    for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                }
                return i;
            })(e, ['className', 'children']);
        return (0, r.jsx)(
            s.P3F,
            v(
                _(
                    {
                        className: t,
                        onClick: y,
                        onMouseDown: y,
                        onMouseUp: y
                    },
                    i
                ),
                { children: n }
            )
        );
    };
function I(e) {
    var t;
    let { rule: n, onChangeRule: i, onContextMenu: l } = e,
        a = C(n, i),
        o = (e) => {
            y(e), l(e);
        };
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: j.ruleTextContainer,
                children: (0, r.jsx)(h.Z, {
                    rule: n,
                    onChangeRule: i
                })
            }),
            (0, r.jsxs)(N, {
                className: j.actionContainer,
                children: [
                    (0, r.jsx)(s.rsf, {
                        className: j.toggle,
                        onChange: a,
                        checked: null != (t = null == n ? void 0 : n.enabled) && t
                    }),
                    (0, r.jsx)(s.ua7, {
                        text: b.intl.string(b.t.UKOtz8),
                        position: 'top',
                        'aria-label': b.intl.string(b.t.PdRCRk),
                        children: (e) =>
                            (0, r.jsx)(
                                s.P3F,
                                v(_({}, e), {
                                    onClick: o,
                                    className: j.menuIconButton,
                                    children: (0, r.jsx)(s.Huf, {
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
    let { rule: t, isDefaultRule: n, onContextMenu: a } = e,
        o = (0, p.w)(t.triggerType, t),
        { isLoading: c, saveRule: m } = (0, g.w)(),
        { updateRule: f } = (0, d.pH)(t.guildId),
        [h, x] = i.useState(t.enabled),
        C = (0, l.throttle)(async (e, n) => {
            if ((n.preventDefault(), n.stopPropagation(), !c)) {
                let e = v(_({}, t), { enabled: !h });
                x(!h);
                let n = await m(e, []);
                null != n && (f(n), x(n.enabled));
            }
        }, 300),
        I = (e) => {
            y(e), a(e);
        };
    if (null == o) return null;
    let { headerText: S, headerSubtext: T, descriptionText: P, icon: w } = o,
        R = !(0, u.Vb)(t);
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
                    (0, r.jsxs)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: j.ruleTextHeaderContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: j.ruleTextHeader,
                                children: [S, E(t.triggerType)]
                            }),
                            (0, r.jsx)(s.Text, {
                                className: j.ruleSubtextHeader,
                                variant: 'text-sm/normal',
                                children: T
                            })
                        ]
                    }),
                    R &&
                        (0, r.jsx)(s.Text, {
                            className: j.ruleTextDescription,
                            variant: 'text-sm/normal',
                            children: P
                        }),
                    (0, r.jsx)(O, {
                        rule: t,
                        triggerType: t.triggerType
                    })
                ]
            }),
            (0, r.jsxs)(N, {
                className: j.actionContainer,
                children: [
                    (0, r.jsx)(s.rsf, {
                        className: j.toggle,
                        onChange: C,
                        checked: null != h && h
                    }),
                    !n &&
                        (0, r.jsx)(s.ua7, {
                            text: b.intl.string(b.t.UKOtz8),
                            position: 'top',
                            'aria-label': b.intl.string(b.t.PdRCRk),
                            children: (e) =>
                                (0, r.jsx)(
                                    s.P3F,
                                    v(_({}, e), {
                                        onClick: I,
                                        className: j.menuIconButton,
                                        children: (0, r.jsx)(s.Huf, {
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
        l = i.useMemo(() => (0, p.w)(t), [t]);
    if (null == l) return null;
    let { headerText: a, descriptionText: o, icon: c } = l;
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
                    (0, r.jsx)(s.X6q, {
                        className: j.ruleTextHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: (0, r.jsxs)('div', {
                            className: j.ruleTextHeader,
                            children: [a, E(t)]
                        })
                    }),
                    (0, r.jsx)(s.Text, {
                        className: j.ruleTextDescription,
                        variant: 'text-sm/normal',
                        children: o
                    }),
                    (0, r.jsx)(O, { triggerType: t })
                ]
            }),
            (0, r.jsx)(N, {
                className: j.actionContainer,
                children: (0, r.jsx)(s.zxk, {
                    size: s.zxk.Sizes.SMALL,
                    onClick: n,
                    children: t === x.fX.KEYWORD ? b.intl.string(b.t.CumH4u) : b.intl.string(b.t.oRs6mJ)
                })
            })
        ]
    });
}
function P(e) {
    let { rule: t, triggerType: i, isEditMode: l, isDefaultRule: o, forceSetup: c, onSetupRule: u, onChangeRule: d } = e,
        m = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e('25443').then(n.bind(n, 46577));
                    return (n) => (0, r.jsx)(e, _({ rule: t }, n));
                }));
        },
        g = (0, r.jsx)(T, {
            triggerType: i,
            onSetupRule: u
        });
    return (
        null == t ||
            c ||
            (g = l
                ? (0, r.jsx)(I, {
                      rule: t,
                      onChangeRule: d,
                      onContextMenu: m
                  })
                : (0, r.jsx)(S, {
                      rule: t,
                      isDefaultRule: o,
                      onContextMenu: m
                  })),
        (0, r.jsx)(s.P3F, {
            className: j.mainContainer,
            onContextMenu: m,
            children: g
        })
    );
}
