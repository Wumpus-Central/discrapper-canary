n.d(t, {
    Z: function () {
        return g;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(481060),
    s = n(467319),
    a = n(456677),
    o = n(55889),
    c = n(300453),
    d = n(620436),
    u = n(273504),
    m = n(388032),
    h = n(510650);
function g(e) {
    var t, n;
    let { rule: g, onChangeRule: x } = e,
        [p, f] = r.useState(null === (t = g.triggerMetadata) || void 0 === t ? void 0 : t.mentionTotalLimit),
        C = (0, s.a)(g.guildId, !1);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: h.cardContentsContainer,
            children: [
                (0, i.jsxs)(c.Z, {
                    step: 1,
                    header: m.intl.string(m.t.IGfuTU),
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.mentionLimitContainer,
                            children: [
                                (0, i.jsx)('div', {
                                    className: h.mentionLimitIconContainer,
                                    children: (0, i.jsx)(l.AtIcon, {
                                        size: 'md',
                                        color: 'currentColor',
                                        className: h.mentionLimitIcon
                                    })
                                }),
                                (0, i.jsxs)('div', {
                                    className: h.mentionLimitTextContainer,
                                    children: [
                                        (0, i.jsx)(l.Heading, {
                                            variant: 'heading-sm/semibold',
                                            children: m.intl.string(m.t['s/26oa'])
                                        }),
                                        (0, i.jsx)(l.Text, {
                                            color: 'interactive-normal',
                                            variant: 'text-xs/medium',
                                            className: h.descriptionHint,
                                            children: m.intl.string(m.t['8uW4/P'])
                                        })
                                    ]
                                }),
                                (0, i.jsx)('div', {
                                    className: h.stepperContainer,
                                    children: (0, i.jsx)(l.NumberInputStepper, {
                                        value: p,
                                        onChange: (e) => {
                                            f(e),
                                                x({
                                                    ...g,
                                                    triggerMetadata: {
                                                        ...g.triggerMetadata,
                                                        mentionTotalLimit: e
                                                    }
                                                });
                                        },
                                        minValue: u.Vg,
                                        maxValue: u.Lg,
                                        className: h.stepper
                                    })
                                })
                            ]
                        }),
                        C
                            ? (0, i.jsxs)('div', {
                                  className: h.mentionLimitContainer,
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: h.mentionLimitIconContainer,
                                          children: (0, i.jsx)(l.ShieldAtIcon, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: h.mentionLimitIcon
                                          })
                                      }),
                                      (0, i.jsxs)('div', {
                                          className: h.mentionLimitTextContainer,
                                          children: [
                                              (0, i.jsx)(l.Heading, {
                                                  variant: 'heading-sm/semibold',
                                                  children: m.intl.string(m.t.XnuC9v)
                                              }),
                                              (0, i.jsx)(l.Text, {
                                                  color: 'interactive-normal',
                                                  variant: 'text-xs/medium',
                                                  className: h.descriptionHint,
                                                  children: m.intl.string(m.t.EDBe5u)
                                              })
                                          ]
                                      }),
                                      (0, i.jsx)('div', {
                                          children: (0, i.jsx)(l.Checkbox, {
                                              type: l.Checkbox.Types.INVERTED,
                                              value: null === (n = g.triggerMetadata) || void 0 === n ? void 0 : n.mentionRaidProtectionEnabled,
                                              onChange: (e, t) => {
                                                  x({
                                                      ...g,
                                                      triggerMetadata: {
                                                          ...g.triggerMetadata,
                                                          mentionRaidProtectionEnabled: t
                                                      }
                                                  });
                                              },
                                              className: h.__invalid_actionCheckbox
                                          })
                                      })
                                  ]
                              })
                            : null
                    ]
                }),
                (0, i.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
                (0, i.jsx)(c.Z, {
                    step: 2,
                    header: m.intl.string(m.t['18TOiY']),
                    children: (0, i.jsx)(a.Z, {
                        rule: g,
                        onChangeRule: x
                    })
                }),
                (0, i.jsx)(d.Z, { type: d.Z.Type.CROSS }),
                (0, i.jsx)(c.Z, {
                    step: 3,
                    header: m.intl.string(m.t.eq3gjo),
                    children: (0, i.jsx)(o.Z, {
                        rule: g,
                        onChangeRule: x
                    })
                })
            ]
        })
    });
}
