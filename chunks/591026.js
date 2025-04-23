n.d(t, { Z: () => h }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    s = n(467319),
    a = n(456677),
    o = n(55889),
    c = n(300453),
    u = n(620436),
    d = n(273504),
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
function f(e, t) {
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
function h(e) {
    var t, n;
    let { rule: h, onChangeRule: x } = e,
        [b, j] = i.useState(null == (t = h.triggerMetadata) ? void 0 : t.mentionTotalLimit),
        _ = (0, s.a)(h.guildId, !1);
    return (0, r.jsxs)('div', {
        className: g.cardContentsContainer,
        children: [
            (0, r.jsxs)(c.Z, {
                step: 1,
                header: m.intl.string(m.t.IGfuTU),
                children: [
                    (0, r.jsxs)('div', {
                        className: g.mentionLimitContainer,
                        children: [
                            (0, r.jsx)('div', {
                                className: g.mentionLimitIconContainer,
                                children: (0, r.jsx)(l.lOy, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: g.mentionLimitIcon
                                })
                            }),
                            (0, r.jsxs)('div', {
                                className: g.mentionLimitTextContainer,
                                children: [
                                    (0, r.jsx)(l.X6q, {
                                        variant: 'heading-sm/semibold',
                                        children: m.intl.string(m.t['s/26oa'])
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        color: 'interactive-normal',
                                        variant: 'text-xs/medium',
                                        className: g.descriptionHint,
                                        children: m.intl.string(m.t['8uW4/P'])
                                    })
                                ]
                            }),
                            (0, r.jsx)('div', {
                                className: g.stepperContainer,
                                children: (0, r.jsx)(l.FiK, {
                                    value: b,
                                    onChange: (e) => {
                                        j(e), x(f(p({}, h), { triggerMetadata: f(p({}, h.triggerMetadata), { mentionTotalLimit: e }) }));
                                    },
                                    minValue: d.Vg,
                                    maxValue: d.Lg,
                                    className: g.stepper
                                })
                            })
                        ]
                    }),
                    _
                        ? (0, r.jsxs)('div', {
                              className: g.mentionLimitContainer,
                              children: [
                                  (0, r.jsx)('div', {
                                      className: g.mentionLimitIconContainer,
                                      children: (0, r.jsx)(l.S4f, {
                                          size: 'md',
                                          color: 'currentColor',
                                          className: g.mentionLimitIcon
                                      })
                                  }),
                                  (0, r.jsxs)('div', {
                                      className: g.mentionLimitTextContainer,
                                      children: [
                                          (0, r.jsx)(l.X6q, {
                                              variant: 'heading-sm/semibold',
                                              children: m.intl.string(m.t.XnuC9v)
                                          }),
                                          (0, r.jsx)(l.Text, {
                                              color: 'interactive-normal',
                                              variant: 'text-xs/medium',
                                              className: g.descriptionHint,
                                              children: m.intl.string(m.t.EDBe5u)
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)('div', {
                                      children: (0, r.jsx)(l.XZJ, {
                                          type: l.XZJ.Types.INVERTED,
                                          value: null == (n = h.triggerMetadata) ? void 0 : n.mentionRaidProtectionEnabled,
                                          onChange: (e, t) => {
                                              x(f(p({}, h), { triggerMetadata: f(p({}, h.triggerMetadata), { mentionRaidProtectionEnabled: t }) }));
                                          },
                                          className: g.__invalid_actionCheckbox
                                      })
                                  })
                              ]
                          })
                        : null
                ]
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(c.Z, {
                step: 2,
                header: m.intl.string(m.t['18TOiY']),
                children: (0, r.jsx)(a.Z, {
                    rule: h,
                    onChangeRule: x
                })
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.CROSS }),
            (0, r.jsx)(c.Z, {
                step: 3,
                header: m.intl.string(m.t.eq3gjo),
                children: (0, r.jsx)(o.Z, {
                    rule: h,
                    onChangeRule: x
                })
            })
        ]
    });
}
