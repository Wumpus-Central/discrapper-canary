n.d(t, { Z: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(481060),
    a = n(467319),
    s = n(456677),
    o = n(55889),
    c = n(300453),
    d = n(620436),
    u = n(273504),
    g = n(388032),
    m = n(290135);
function p(e) {
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
    let { rule: h, onChangeRule: b } = e,
        [x, j] = i.useState(null == (t = h.triggerMetadata) ? void 0 : t.mentionTotalLimit),
        _ = (0, a.a)(h.guildId, !1);
    return (0, r.jsxs)("div", {
        className: m.cardContentsContainer,
        children: [
            (0, r.jsxs)(c.Z, {
                step: 1,
                header: g.intl.string(g.t.IGfuTa),
                children: [
                    (0, r.jsxs)("div", {
                        className: m.mentionLimitContainer,
                        children: [
                            (0, r.jsx)("div", {
                                className: m.mentionLimitIconContainer,
                                children: (0, r.jsx)(l.lOy, {
                                    size: "md",
                                    color: "currentColor",
                                    className: m.mentionLimitIcon,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: m.mentionLimitTextContainer,
                                children: [
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-sm/semibold",
                                        children: g.intl.string(g.t["s/26oQ"]),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        color: "interactive-normal",
                                        variant: "text-xs/medium",
                                        className: m.descriptionHint,
                                        children: g.intl.string(g.t["8uW4/N"]),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: m.stepperContainer,
                                children: (0, r.jsx)(l.FiK, {
                                    value: x,
                                    onChange: (e) => {
                                        j(e),
                                            b(
                                                f(p({}, h), {
                                                    triggerMetadata: f(p({}, h.triggerMetadata), {
                                                        mentionTotalLimit: e,
                                                    }),
                                                }),
                                            );
                                    },
                                    minValue: u.Vg,
                                    maxValue: u.Lg,
                                    className: m.stepper,
                                }),
                            }),
                        ],
                    }),
                    _
                        ? (0, r.jsxs)("div", {
                              className: m.mentionLimitContainer,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: m.mentionLimitIconContainer,
                                      children: (0, r.jsx)(l.S4f, {
                                          size: "md",
                                          color: "currentColor",
                                          className: m.mentionLimitIcon,
                                      }),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: m.mentionLimitTextContainer,
                                      children: [
                                          (0, r.jsx)(l.Heading, {
                                              variant: "heading-sm/semibold",
                                              children: g.intl.string(g.t.XnuC9g),
                                          }),
                                          (0, r.jsx)(l.Text, {
                                              color: "interactive-normal",
                                              variant: "text-xs/medium",
                                              className: m.descriptionHint,
                                              children: g.intl.string(g.t.EDBe5m),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      children: (0, r.jsx)(l.P3F, {
                                          onClick: _
                                              ? () => {
                                                    var e, t;
                                                    return (
                                                        (t = !(null == (e = h.triggerMetadata)
                                                            ? void 0
                                                            : e.mentionRaidProtectionEnabled)),
                                                        void b(
                                                            f(p({}, h), {
                                                                triggerMetadata: f(p({}, h.triggerMetadata), {
                                                                    mentionRaidProtectionEnabled: t,
                                                                }),
                                                            }),
                                                        )
                                                    );
                                                }
                                              : void 0,
                                          children: (0, r.jsx)(l.FZ5, {
                                              checked:
                                                  null == (n = h.triggerMetadata)
                                                      ? void 0
                                                      : n.mentionRaidProtectionEnabled,
                                              disabled: !_,
                                          }),
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.ARROW_DOWN }),
            (0, r.jsx)(c.Z, {
                step: 2,
                header: g.intl.string(g.t["18TOiQ"]),
                children: (0, r.jsx)(s.Z, {
                    rule: h,
                    onChangeRule: b,
                }),
            }),
            (0, r.jsx)(d.Z, { type: d.Z.Type.CROSS }),
            (0, r.jsx)(c.Z, {
                step: 3,
                header: g.intl.string(g.t.eq3gjh),
                children: (0, r.jsx)(o.Z, {
                    rule: h,
                    onChangeRule: b,
                }),
            }),
        ],
    });
}
