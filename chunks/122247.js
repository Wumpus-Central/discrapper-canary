n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(935063),
    r = n(534514),
    a = n(834730),
    o = n(663803),
    d = n(626900),
    c = n(939249),
    u = n(658675),
    m = n(928108),
    g = n(99787),
    h = n(255354),
    x = n(957300),
    _ = n(378427),
    p = n(411335),
    A = n(985018),
    E = n(10696);
function f(e) {
    let { rule: t, onChangeRule: n } = e,
        [f, j] = l.useState(t.triggerMetadata?.mentionTotalLimit),
        N = (0, m._)(t.guildId, !1);
    return (0, i.jsxs)("div", {
        className: E.sp,
        children: [
            (0, i.jsxs)(x.A, {
                step: 1,
                header: A.intl.string(A.t.IGfuTa),
                children: [
                    (0, i.jsxs)("div", {
                        className: E.$I,
                        children: [
                            (0, i.jsx)("div", {
                                className: E.U$,
                                children: (0, i.jsx)(s.X, { size: "md", color: "currentColor", className: E.B_ }),
                            }),
                            (0, i.jsxs)("div", {
                                className: E.ej,
                                children: [
                                    (0, i.jsx)(r.D, {
                                        variant: "heading-sm/semibold",
                                        children: A.intl.string(A.t["s/26oQ"]),
                                    }),
                                    (0, i.jsx)(a.E, {
                                        color: "interactive-text-default",
                                        variant: "text-xs/medium",
                                        className: E.mu,
                                        children: A.intl.string(A.t["8uW4/N"]),
                                    }),
                                ],
                            }),
                            (0, i.jsx)("div", {
                                className: E.Ld,
                                children: (0, i.jsx)(o.l, {
                                    value: f,
                                    onChange: (e) => {
                                        j(e),
                                            n({
                                                ...t,
                                                triggerMetadata: { ...t.triggerMetadata, mentionTotalLimit: e },
                                            });
                                    },
                                    minValue: p.Us,
                                    maxValue: p.M3,
                                    className: E.Im,
                                }),
                            }),
                        ],
                    }),
                    N
                        ? (0, i.jsxs)("div", {
                              className: E.$I,
                              children: [
                                  (0, i.jsx)("div", {
                                      className: E.U$,
                                      children: (0, i.jsx)(d.E, { size: "md", color: "currentColor", className: E.B_ }),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: E.ej,
                                      children: [
                                          (0, i.jsx)(r.D, {
                                              variant: "heading-sm/semibold",
                                              children: A.intl.string(A.t.XnuC9g),
                                          }),
                                          (0, i.jsx)(a.E, {
                                              color: "interactive-text-default",
                                              variant: "text-xs/medium",
                                              className: E.mu,
                                              children: A.intl.string(A.t.EDBe5m),
                                          }),
                                      ],
                                  }),
                                  (0, i.jsx)("div", {
                                      children: (0, i.jsx)(c.D, {
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
                                          children: (0, i.jsx)(u.P, {
                                              checked: t.triggerMetadata?.mentionRaidProtectionEnabled,
                                              disabled: !N,
                                          }),
                                      }),
                                  }),
                              ],
                          })
                        : null,
                ],
            }),
            (0, i.jsx)(_.A, { type: _.A.Type.ARROW_DOWN }),
            (0, i.jsx)(x.A, {
                step: 2,
                header: A.intl.string(A.t["18TOiQ"]),
                children: (0, i.jsx)(g.A, { rule: t, onChangeRule: n }),
            }),
            (0, i.jsx)(_.A, { type: _.A.Type.CROSS }),
            (0, i.jsx)(x.A, {
                step: 3,
                header: A.intl.string(A.t.eq3gjh),
                children: (0, i.jsx)(h.A, { rule: t, onChangeRule: n }),
            }),
        ],
    });
}
