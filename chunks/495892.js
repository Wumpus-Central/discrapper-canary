n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(724458),
    n(653041),
    n(47120);
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
    f = n(273504),
    C = n(388032),
    v = n(915690);
function I(e) {
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
                          return null == s
                              ? e
                              : (e.push(
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
                                e);
                      }, []),
            [t, n]
        );
    return 0 === l.length
        ? null
        : (0, i.jsx)('div', {
              className: v.actionRuleListContainer,
              children: l
          });
}
let N = (e, t) => () =>
        t({
            ...e,
            enabled: !e.enabled
        }),
    _ = (e) => {
        e.stopPropagation(), e.preventDefault();
    },
    T = (e) => {
        let { className: t, children: n, ...r } = e;
        return (0, i.jsx)(s.Clickable, {
            className: t,
            onClick: _,
            onMouseDown: _,
            onMouseUp: _,
            ...r,
            children: n
        });
    };
function j(e) {
    var t;
    let { rule: n, onChangeRule: r, onContextMenu: l } = e,
        a = N(n, r),
        o = (e) => {
            _(e), l(e);
        };
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: v.ruleTextContainer,
                children: (0, i.jsx)(p.Z, {
                    rule: n,
                    onChangeRule: r
                })
            }),
            (0, i.jsxs)(T, {
                className: v.actionContainer,
                children: [
                    (0, i.jsx)(s.Switch, {
                        className: v.toggle,
                        onChange: a,
                        checked: null !== (t = null == n ? void 0 : n.enabled) && void 0 !== t && t
                    }),
                    (0, i.jsx)(s.Tooltip, {
                        text: C.intl.string(C.t.UKOtz8),
                        position: 'top',
                        'aria-label': C.intl.string(C.t.PdRCRk),
                        children: (e) =>
                            (0, i.jsx)(s.Clickable, {
                                ...e,
                                onClick: o,
                                className: v.menuIconButton,
                                children: (0, i.jsx)(s.MoreVerticalIcon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: v.menuIcon
                                })
                            })
                    })
                ]
            })
        ]
    });
}
function b(e) {
    return (0, m.r5)(e, m.vT.ALPHA) ? (0, i.jsx)(o.Z, { className: v.alphaBetaTag }) : (0, m.r5)(e, m.vT.BETA) ? (0, i.jsx)(c.Z, { className: v.alphaBetaTag }) : null;
}
function E(e) {
    let { rule: t, isDefaultRule: n, onContextMenu: a } = e,
        o = (0, g.w)(t.triggerType, t),
        { isLoading: c, saveRule: m } = (0, h.w)(),
        { updateRule: x } = (0, u.pH)(t.guildId),
        [p, f] = r.useState(t.enabled),
        N = (0, l.throttle)(async (e, n) => {
            if ((n.preventDefault(), n.stopPropagation(), !c)) {
                let e = {
                    ...t,
                    enabled: !p
                };
                f(!p);
                let n = await m(e, []);
                if (null != n) x(n), f(n.enabled);
            }
        }, 300),
        j = (e) => {
            _(e), a(e);
        };
    if (null == o) return null;
    let { headerText: E, headerSubtext: S, descriptionText: R, icon: y } = o,
        A = !(0, d.Vb)(t);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: v.ruleIconContainer,
                children: (0, i.jsx)(y, {
                    size: 'md',
                    color: 'currentColor',
                    className: v.ruleIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: v.ruleTextContainer,
                children: [
                    (0, i.jsxs)(s.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        className: v.ruleTextHeaderContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v.ruleTextHeader,
                                children: [E, b(t.triggerType)]
                            }),
                            (0, i.jsx)(s.Text, {
                                className: v.ruleSubtextHeader,
                                variant: 'text-sm/normal',
                                children: S
                            })
                        ]
                    }),
                    A &&
                        (0, i.jsx)(s.Text, {
                            className: v.ruleTextDescription,
                            variant: 'text-sm/normal',
                            children: R
                        }),
                    (0, i.jsx)(I, {
                        rule: t,
                        triggerType: t.triggerType
                    })
                ]
            }),
            (0, i.jsxs)(T, {
                className: v.actionContainer,
                children: [
                    (0, i.jsx)(s.Switch, {
                        className: v.toggle,
                        onChange: N,
                        checked: null != p && p
                    }),
                    !n &&
                        (0, i.jsx)(s.Tooltip, {
                            text: C.intl.string(C.t.UKOtz8),
                            position: 'top',
                            'aria-label': C.intl.string(C.t.PdRCRk),
                            children: (e) =>
                                (0, i.jsx)(s.Clickable, {
                                    ...e,
                                    onClick: j,
                                    className: v.menuIconButton,
                                    children: (0, i.jsx)(s.MoreVerticalIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: v.menuIcon
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
                className: v.ruleIconContainer,
                children: (0, i.jsx)(c, {
                    color: 'currentColor',
                    size: 'md',
                    className: v.ruleIcon
                })
            }),
            (0, i.jsxs)('div', {
                className: v.ruleTextContainer,
                children: [
                    (0, i.jsx)(s.Heading, {
                        className: v.ruleTextHeader,
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: (0, i.jsxs)('div', {
                            className: v.ruleTextHeader,
                            children: [a, b(t)]
                        })
                    }),
                    (0, i.jsx)(s.Text, {
                        className: v.ruleTextDescription,
                        variant: 'text-sm/normal',
                        children: o
                    }),
                    (0, i.jsx)(I, { triggerType: t })
                ]
            }),
            (0, i.jsx)(T, {
                className: v.actionContainer,
                children: (0, i.jsx)(s.Button, {
                    size: s.Button.Sizes.SMALL,
                    onClick: n,
                    children: t === f.fX.KEYWORD ? C.intl.string(C.t.CumH4u) : C.intl.string(C.t.oRs6mJ)
                })
            })
        ]
    });
}
function R(e) {
    let { rule: t, triggerType: r, isEditMode: l, isDefaultRule: o, forceSetup: c, onSetupRule: d, onChangeRule: u } = e,
        m = (e) => {
            if (null != t)
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, a.jW)(e, async () => {
                        let { default: e } = await n.e('25443').then(n.bind(n, 46577));
                        return (n) =>
                            (0, i.jsx)(e, {
                                rule: t,
                                ...n
                            });
                    });
        },
        h = (0, i.jsx)(S, {
            triggerType: r,
            onSetupRule: d
        });
    return (
        null != t &&
            !c &&
            (h = l
                ? (0, i.jsx)(j, {
                      rule: t,
                      onChangeRule: u,
                      onContextMenu: m
                  })
                : (0, i.jsx)(E, {
                      rule: t,
                      isDefaultRule: o,
                      onContextMenu: m
                  })),
        (0, i.jsx)(s.Clickable, {
            className: v.mainContainer,
            onContextMenu: m,
            children: h
        })
    );
}
