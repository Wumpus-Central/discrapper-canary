n.d(t, { A: () => p }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(928108),
    a = n(99787),
    c = n(255354),
    o = n(957300),
    d = n(378427),
    u = n(411335),
    f = n(985018),
    g = n(406947);
function b(e) {
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
function m(e, t) {
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
function p(e) {
    var t, n;
    let { rule: p, onChangeRule: x } = e,
        [h, j] = i.useState(null == (t = p.triggerMetadata) ? void 0 : t.mentionTotalLimit),
        O = (0, s._)(p.guildId, !1);
    return (0, r.jsxs)("div", {
        className: g.sp,
        children: [
            (0, r.jsxs)(o.A, {
                step: 1,
                header: f.intl.string(f.t.IGfuTa),
                children: [
                    (0, r.jsxs)("div", {
                        className: g.$I,
                        children: [
                            (0, r.jsx)("div", {
                                className: g.U$,
                                children: (0, r.jsx)(l.XxR, {
                                    size: "md",
                                    color: "currentColor",
                                    className: g.B_,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: g.ej,
                                children: [
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-sm/semibold",
                                        children: f.intl.string(f.t["s/26oQ"]),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        color: "interactive-text-default",
                                        variant: "text-xs/medium",
                                        className: g.mu,
                                        children: f.intl.string(f.t["8uW4/N"]),
                                    }),
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: g.Ld,
                                children: (0, r.jsx)(l.lw3, {
                                    value: h,
                                    onChange: (e) => {
                                        j(e),
                                            x(
                                                m(b({}, p), {
                                                    triggerMetadata: m(b({}, p.triggerMetadata), {
                                                        mentionTotalLimit: e,
                                                    }),
                                                }),
                                            );
                                    },
                                    minValue: u.Us,
                                    maxValue: u.M3,
                                    className: g.Im,
                                }),
                            }),
                        ],
                    }),
                    O
                        ? (0, r.jsxs)("div", {
                              className: g.$I,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: g.U$,
                                      children: (0, r.jsx)(l.ERh, {
                                          size: "md",
                                          color: "currentColor",
                                          className: g.B_,
                                      }),
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: g.ej,
                                      children: [
                                          (0, r.jsx)(l.Heading, {
                                              variant: "heading-sm/semibold",
                                              children: f.intl.string(f.t.XnuC9g),
                                          }),
                                          (0, r.jsx)(l.Text, {
                                              color: "interactive-text-default",
                                              variant: "text-xs/medium",
                                              className: g.mu,
                                              children: f.intl.string(f.t.EDBe5m),
                                          }),
                                      ],
                                  }),
                                  (0, r.jsx)("div", {
                                      children: (0, r.jsx)(l.DUT, {
                                          onClick: O
                                              ? () => {
                                                    var e, t;
                                                    return (
                                                        (t = !(null == (e = p.triggerMetadata)
                                                            ? void 0
                                                            : e.mentionRaidProtectionEnabled)),
                                                        void x(
                                                            m(b({}, p), {
                                                                triggerMetadata: m(b({}, p.triggerMetadata), {
                                                                    mentionRaidProtectionEnabled: t,
                                                                }),
                                                            }),
                                                        )
                                                    );
                                                }
                                              : void 0,
                                          children: (0, r.jsx)(l.P7L, {
                                              checked:
                                                  null == (n = p.triggerMetadata)
                                                      ? void 0
                                                      : n.mentionRaidProtectionEnabled,
                                              disabled: !O,
                                          }),
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, r.jsx)(d.A, { type: d.A.Type.ARROW_DOWN }),
            (0, r.jsx)(o.A, {
                step: 2,
                header: f.intl.string(f.t["18TOiQ"]),
                children: (0, r.jsx)(a.A, {
                    rule: p,
                    onChangeRule: x,
                }),
            }),
            (0, r.jsx)(d.A, { type: d.A.Type.CROSS }),
            (0, r.jsx)(o.A, {
                step: 3,
                header: f.intl.string(f.t.eq3gjh),
                children: (0, r.jsx)(c.A, {
                    rule: p,
                    onChangeRule: x,
                }),
            }),
        ],
    });
}
