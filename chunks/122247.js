"use strict";
n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(928108),
    a = n(99787),
    o = n(255354),
    d = n(957300),
    c = n(378427),
    u = n(411335),
    m = n(985018),
    g = n(188024);
function x(e) {
    let { rule: t, onChangeRule: n } = e,
        [x, h] = s.useState(t.triggerMetadata?.mentionTotalLimit),
        _ = (0, r._)(t.guildId, !1);
    return (0, i.jsxs)("div", {
        className: g.sp,
        children: [
            (0, i.jsxs)(d.A, {
                step: 1,
                header: m.intl.string(m.t.IGfuTa),
                children: [
                    (0, i.jsxs)("div", {
                        className: g.$I,
                        children: [
                            (0, i.jsx)("div", {
                                className: g.U$,
                                children: (0, i.jsx)(l.XxR, { size: "md", color: "currentColor", className: g.B_ }),
                            }),
                            (0, i.jsxs)("div", {
                                className: g.ej,
                                children: [
                                    (0, i.jsx)(l.Heading, {
                                        variant: "heading-sm/semibold",
                                        children: m.intl.string(m.t["s/26oQ"]),
                                    }),
                                    (0, i.jsx)(l.Text, {
                                        color: "interactive-text-default",
                                        variant: "text-xs/medium",
                                        className: g.mu,
                                        children: m.intl.string(m.t["8uW4/N"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: g.Ld,
                                children: (0, i.jsx)(l.lw3, {
                                    value: x,
                                    onChange: (e) => {
                                        h(e),
                                            n({
                                                ...t,
                                                triggerMetadata: { ...t.triggerMetadata, mentionTotalLimit: e },
                                            });
                                    },
                                    minValue: u.Us,
                                    maxValue: u.M3,
                                    className: g.Im,
                                }),
                            }),
                        ],
                    }),
                    _
                        ? (0, i.jsxs)("div", {
                              className: g.$I,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: g.U$,
                                      children: (0, i.jsx)(l.ERh, {
                                          size: "md",
                                          color: "currentColor",
                                          className: g.B_,
                                      }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: g.ej,
                                      children: [
                                          (0, i.jsx)(l.Heading, {
                                              variant: "heading-sm/semibold",
                                              children: m.intl.string(m.t.XnuC9g),
                                          }),
                                          (0, i.jsx)(l.Text, {
                                              color: "interactive-text-default",
                                              variant: "text-xs/medium",
                                              className: g.mu,
                                              children: m.intl.string(m.t.EDBe5m),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("div", {
                                      children: (0, i.jsx)(l.DUT, {
                                          onClick: () => {
                                              var e;
                                              return (
                                                  (e = !t.triggerMetadata?.mentionRaidProtectionEnabled),
                                                  void n({
                                                      ...t,
                                                      triggerMetadata: {
                                                          ...t.triggerMetadata,
                                                          mentionRaidProtectionEnabled: e,
                                                      },
                                                  })
                                              );
                                          },
                                          children: (0, i.jsx)(l.P7L, {
                                              checked: t.triggerMetadata?.mentionRaidProtectionEnabled,
                                              disabled: !_,
                                          }),
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(c.A, { type: c.A.Type.ARROW_DOWN }),
            (0, i.jsx)(d.A, {
                step: 2,
                header: m.intl.string(m.t["18TOiQ"]),
                children: (0, i.jsx)(a.A, { rule: t, onChangeRule: n }),
            }),
            (0, i.jsx)(c.A, { type: c.A.Type.CROSS }),
            (0, i.jsx)(d.A, {
                step: 3,
                header: m.intl.string(m.t.eq3gjh),
                children: (0, i.jsx)(o.A, { rule: t, onChangeRule: n }),
            }),
        ],
    });
}
