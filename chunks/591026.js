n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(755721),
    s = n(481060),
    a = n(467319),
    o = n(456677),
    c = n(55889),
    d = n(300453),
    u = n(620436),
    g = n(273504),
    m = n(388032),
    p = n(290135);
function f(e) {
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
function x(e) {
    var t, n;
    let { rule: x, onChangeRule: b } = e,
        [j, _] = i.useState(null == (t = x.triggerMetadata) ? void 0 : t.mentionTotalLimit),
        v = (0, a.a)(x.guildId, !1);
    return (0, r.jsxs)("div", {
        className: p.cardContentsContainer,
        children: [
            (0, r.jsxs)(d.Z, {
                step: 1,
                header: m.intl.string(m.t.IGfuTU),
                children: [
                    (0, r.jsxs)("div", {
                        className: p.mentionLimitContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: p.mentionLimitIconContainer,
                                children: (0, r.jsx)(s.lOy, {
                                    size: "md",
                                    color: "currentColor",
                                    className: p.mentionLimitIcon,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: p.mentionLimitTextContainer,
                                children: [
                                    (0, r.jsx)(s.X6q, {
                                        variant: "heading-sm/semibold",
                                        children: m.intl.string(m.t["s/26oa"]),
                                    }),
                                    (0, r.jsx)(s.Text, {
                                        color: "interactive-normal",
                                        variant: "text-xs/medium",
                                        className: p.descriptionHint,
                                        children: m.intl.string(m.t["8uW4/P"]),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: p.stepperContainer,
                                children: (0, r.jsx)(s.FiK, {
                                    value: j,
                                    onChange: (e) => {
                                        _(e),
                                            b(
                                                h(f({}, x), {
                                                    triggerMetadata: h(f({}, x.triggerMetadata), {
                                                        mentionTotalLimit: e,
                                                    }),
                                                }),
                                            );
                                    },
                                    minValue: g.Vg,
                                    maxValue: g.Lg,
                                    className: p.stepper,
                                }),
                            }),
                        ],
                    }),
                    v
                        ? (0, r.jsxs)("div", {
                              className: p.mentionLimitContainer,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: p.mentionLimitIconContainer,
                                      children: (0, r.jsx)(s.S4f, {
                                          size: "md",
                                          color: "currentColor",
                                          className: p.mentionLimitIcon,
                                      }),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: p.mentionLimitTextContainer,
                                      children: [
                                          (0, r.jsx)(s.X6q, {
                                              variant: "heading-sm/semibold",
                                              children: m.intl.string(m.t.XnuC9v),
                                          }),
                                          (0, r.jsx)(s.Text, {
                                              color: "interactive-normal",
                                              variant: "text-xs/medium",
                                              className: p.descriptionHint,
                                              children: m.intl.string(m.t.EDBe5u),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      children: (0, r.jsx)(l.VL, {
                                          checked:
                                              null == (n = x.triggerMetadata) ? void 0 : n.mentionRaidProtectionEnabled,
                                          onChange: (e) => {
                                              b(
                                                  h(f({}, x), {
                                                      triggerMetadata: h(f({}, x.triggerMetadata), {
                                                          mentionRaidProtectionEnabled: e,
                                                      }),
                                                  }),
                                              );
                                          },
                                          className: p.__invalid_actionCheckbox,
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(d.Z, {
                step: 2,
                header: m.intl.string(m.t["18TOiY"]),
                children: (0, r.jsx)(o.Z, {
                    rule: x,
                    onChangeRule: b,
                }),
            }),
            (0, r.jsx)(u.Z, { type: u.Z.Type.CROSS }),
            (0, r.jsx)(d.Z, {
                step: 3,
                header: m.intl.string(m.t.eq3gjo),
                children: (0, r.jsx)(c.Z, {
                    rule: x,
                    onChangeRule: b,
                }),
            }),
        ],
    });
}
