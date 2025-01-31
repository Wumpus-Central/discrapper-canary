n.d(t, { Z: () => R }), n(724458), n(653041), n(47120);
var i = n(200651),
    r = n(192379),
    l = n(392711),
    s = n(481060),
    a = n(239091),
    o = n(132580),
    c = n(688465),
    d = n(236413),
    u = n(727072),
    m = n(85960),
    h = n(65912),
    g = n(457414),
    x = n(154502),
    p = n(295708),
    _ = n(273504),
    C = n(388032),
    f = n(867270);
function v(e) {
    let { rule: t, triggerType: n } = e,
        l = r.useMemo(
            () =>
                null == t
                    ? (0, m.V9)(n).map((e) =>
                          (0, i.jsx)(
                              x.Z,
                              {
                                  actionType: e,
                                  triggerType: n
                              },
                              e
                          )
                      )
                    : (0, m.V9)(n).reduce((e, r) => {
                          var l;
                          let s = t.actions.find((e) => {
                              let { type: t } = e;
                              return r === t;
                          });
                          return (
                              null == s ||
                                  e.push(
                                      (0, i.jsx)(
                                          x.Z,
                                          {
                                              actionType: r,
                                              action: s,
                                              triggerType: null !== (l = null == t ? void 0 : t.triggerType) && void 0 !== l ? l : n
                                          },
                                          r
                                      )
                                  ),
                              e
                          );
                      }, []),
            [t, n]
        );
    return 0 === l.length
        ? null
        : (0, i.jsx)('div', {
              className: f.actionRuleListContainer,
              children: l
          });
}
let N = (e, t) => () =>
        t({
            ...e,
            enabled: !e.enabled
        }),
    j = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    I = (e) => {
        let { className: t, children: n, ...r } = e;
        return (0, i.jsx)(s.P3F, {
            className: t,
            onClick: j,
            onMouseDown: j,
            onMouseUp: j,
            ...r,
            children: n
        });
    };
function E(e) {
    var t;
    let { rule: n, onChangeRule: r, onContextMenu: l } = e,
        a = N(n, r),
        o = (e) => {
            j(e), l(e);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: f.ruleTextContainer,
                children: (0, i.jsx)(p.Z, {
                    rule: n,
                    onChangeRule: r
                })
            }),
            (0, i.jsxs)(I, {
                className: f.actionContainer,
                children: [
                    (0, i.jsx)(s.rsf, {
                        className: f.toggle,
                        onChange: a,
                        checked: null !== (t = null == n ? void 0 : n.enabled) && void 0 !== t && t
                    }),
                    (0, i.jsx)(s.ua7, {
                        text: C.intl.string(C.t.UKOtz8),
                        position: 'top',
                        'aria-label': C.intl.string(C.t.PdRCRk),
                        children: (e) =>
                            (0, i.jsx)(s.P3F, {
                                ...e,
                                onClick: o,
                                className: f.menuIconButton,
                                children: (0, i.jsx)(s.Huf, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: f.menuIcon
                                })
                            })
                    })
                ]
            })
        ]
    });
}
function b(e) {
    return (0, m.r5)(e, m.vT.ALPHA) ? (0, i.jsx)(o.Z, { className: f.alphaBetaTag }) : (0, m.r5)(e, m.vT.BETA) ? (0, i.jsx)(c.Z, { className: f.alphaBetaTag }) : null;
}
function T(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: a } = e,
        o = (0, g.w)(t.triggerType, t),
        { isLoading: c, saveRule: m } = (0, h.w)(),
        { updateRule: x } = (0, u.pH)(t.guildId),
        [p, _] = r.useState(t.enabled),
        N = (0, l.throttle)(async (e, n) => {
            if ((n.preventDefault(), n.stopPropagation(), !c)) {
                let e = {
                    ...t,
                    enabled: !p
                };
                _(!p);
                let n = await m(e, []);
                null != n && (x(n), _(n.enabled));
            }
        }, 300),
        E = (e) => {
            j(e), a(e);
        };
    if (null == o) return null;
    let { headerText: T, headerSubtext: S, descriptionText: R, icon: Z } = o,
        y = !(0, d.Vb)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: f.ruleIconContainer,
                children: (0, i.jsx)(Z, {
                    size: 'md',
                    color: 'currentColor',
                    className: f.ruleIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: f.ruleTextContainer,
                children: [
                    (0, i.jsxs)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: f.ruleTextHeaderContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: f.ruleTextHeader,
                                children: [T, b(t.triggerType)]
                            }),
                            (0, i.jsx)(s.Text, {
                                className: f.ruleSubtextHeader,
                                variant: 'text-sm/normal',
                                children: S
                            })
                        ]
                    }),
                    y &&
                        (0, i.jsx)(s.Text, {
                            className: f.ruleTextDescription,
                            variant: 'text-sm/normal',
                            children: R
                        }),
                    (0, i.jsx)(v, {
                        rule: t,
                        triggerType: t.triggerType
                    })
                ]
            }),
            (0, i.jsxs)(I, {
                className: f.actionContainer,
                children: [
                    (0, i.jsx)(s.rsf, {
                        className: f.toggle,
                        onChange: N,
                        checked: null != p && p
                    }),
                    !n &&
                        (0, i.jsx)(s.ua7, {
                            text: C.intl.string(C.t.UKOtz8),
                            position: 'top',
                            'aria-label': C.intl.string(C.t.PdRCRk),
                            children: (e) =>
                                (0, i.jsx)(s.P3F, {
                                    ...e,
                                    onClick: E,
                                    className: f.menuIconButton,
                                    children: (0, i.jsx)(s.Huf, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: f.menuIcon
                                    })
                                })
                        })
                ]
            })
        ]
    });
}
function S(e) {
    let { triggerType: t, onSetupRule: n } = e,
        l = r.useMemo(() => (0, g.w)(t), [t]);
    if (null == l) return null;
    let { headerText: a, descriptionText: o, icon: c } = l;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: f.ruleIconContainer,
                children: (0, i.jsx)(c, {
                    color: 'currentColor',
                    size: 'md',
                    className: f.ruleIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: f.ruleTextContainer,
                children: [
                    (0, i.jsx)(s.X6q, {
                        className: f.ruleTextHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: (0, i.jsxs)('div', {
                            className: f.ruleTextHeader,
                            children: [a, b(t)]
                        })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: f.ruleTextDescription,
                        variant: 'text-sm/normal',
                        children: o
                    }),
                    (0, i.jsx)(v, { triggerType: t })
                ]
            }),
            (0, i.jsx)(I, {
                className: f.actionContainer,
                children: (0, i.jsx)(s.zxk, {
                    size: s.zxk.Sizes.SMALL,
                    onClick: n,
                    children: t === _.fX.KEYWORD ? C.intl.string(C.t.CumH4u) : C.intl.string(C.t.oRs6mJ)
                })
            })
        ]
    });
}
function R(e) {
    let { rule: t, triggerType: r, isEditMode: l, isDefaultRule: o, forceSetup: c, onSetupRule: d, onChangeRule: u } = e,
        m = (e) => {
            null != t &&
                (e.preventDefault(),
                e.stopPropagation(),
                (0, a.jW)(e, async () => {
                    let { default: e } = await n.e('25443').then(n.bind(n, 46577));
                    return (n) =>
                        (0, i.jsx)(e, {
                            rule: t,
                            ...n
                        });
                }));
        },
        h = (0, i.jsx)(S, {
            triggerType: r,
            onSetupRule: d
        });
    return (
        null == t ||
            c ||
            (h = l
                ? (0, i.jsx)(E, {
                      rule: t,
                      onChangeRule: u,
                      onContextMenu: m
                  })
                : (0, i.jsx)(T, {
                      rule: t,
                      isDefaultRule: o,
                      onContextMenu: m
                  })),
        (0, i.jsx)(s.P3F, {
            className: f.mainContainer,
            onContextMenu: m,
            children: h
        })
    );
}
