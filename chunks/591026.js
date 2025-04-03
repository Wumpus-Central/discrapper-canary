n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(467319),
    l = n(456677),
    o = n(55889),
    c = n(300453),
    d = n(620436),
    u = n(273504),
    m = n(388032),
    g = n(694705);
function p(e) {
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
function h(e, t) {
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
function f(e) {
    var t, n;
    let { rule: f, onChangeRule: b } = e,
        [x, j] = i.useState(null == (t = f.triggerMetadata) ? void 0 : t.mentionTotalLimit),
        N = (0, a.a)(f.guildId, !1);
    return (0, r.jsxs)('div', {
        className: g.cardContentsContainer,
        children: [
            (0, r.jsxs)(c.Z, {
                step: 1,
                header: m.NW.string(m.t.IGfuTU),
                children: [
                    (0, r.jsxs)('div', {
                        className: g.mentionLimitContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: g.mentionLimitIconContainer,
                                children: (0, r.jsx)(s.lOy, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: g.mentionLimitIcon
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: g.mentionLimitTextContainer,
                                children: [
                                    (0, r.jsx)(s.X6q, {
                                        variant: 'heading-sm/semibold',
                                        children: m.NW.string(m.t['s/26oa'])
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        color: 'interactive-normal',
                                        variant: 'text-xs/medium',
                                        className: g.descriptionHint,
                                        children: m.NW.string(m.t['8uW4/P'])
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: g.stepperContainer,
                                children: (0, r.jsx)(s.FiK, {
                                    value: x,
                                    onChange: (e) => {
                                        j(e), b(h(p({}, f), { triggerMetadata: h(p({}, f.triggerMetadata), { mentionTotalLimit: e }) }));
                                    },
                                    minValue: u.Vg,
                                    maxValue: u.Lg,
                                    className: g.stepper
                                })
                            })
                        ]
                    }),
                    N
                        ? (0, r.jsxs)('div', {
                              className: g.mentionLimitContainer,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: g.mentionLimitIconContainer,
                                      children: (0, r.jsx)(s.S4f, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: g.mentionLimitIcon
                                      })
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: g.mentionLimitTextContainer,
                                      children: [
                                          (0, r.jsx)(s.X6q, {
                                              variant: 'heading-sm/semibold',
                                              children: m.NW.string(m.t.XnuC9v)
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              color: 'interactive-normal',
                                              variant: 'text-xs/medium',
                                              className: g.descriptionHint,
                                              children: m.NW.string(m.t.EDBe5u)
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)('div', {
                                      children: (0, r.jsx)(s.XZJ, {
                                          type: s.XZJ.Types.INVERTED,
                                          value: null == (n = f.triggerMetadata) ? void 0 : n.mentionRaidProtectionEnabled,
                                          onChange: (e, t) => {
                                              b(h(p({}, f), { triggerMetadata: h(p({}, f.triggerMetadata), { mentionRaidProtectionEnabled: t }) }));
                                          },
                                          className: g.__invalid_actionCheckbox
                                      })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(c.Z, {
                step: 2,
                header: m.NW.string(m.t['18TOiY']),
                children: (0, r.jsx)(l.Z, {
                    rule: f,
                    onChangeRule: b
                })
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.CROSS }),
            (0, r.jsx)(c.Z, {
                step: 3,
                header: m.NW.string(m.t.eq3gjo),
                children: (0, r.jsx)(o.Z, {
                    rule: f,
                    onChangeRule: b
                })
            })
        ]
    });
}
