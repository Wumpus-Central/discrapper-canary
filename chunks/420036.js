var t = n(477900),
    a = n(582128),
    r = n(331322),
    i = n(143129),
    d = n(834730),
    s = n(821759),
    c = n(60498),
    u = n(191850),
    o = n(792996);
n.d(
    l,
    {},
    {
        A: function (e) {
            let { projectId: l } = e,
                n = (0, c.GB)(l),
                [h, p] = a.useState(!1),
                b = a.useCallback((e) => p(!(0, s.t)(l, e)), [l]);
            return null == n
                ? null
                : (0, t.jsxs)(r.B, {
                      gap: 8,
                      children: [
                          (0, t.jsx)(i.d, {
                              label: o.intl.string(u.default["Nf+zrD"]),
                              description: o.intl.string(u.default.heoCNf),
                              checked: n.enabled,
                              disabled: n.pending,
                              onChange: b,
                          }),
                          h || null != n.error
                              ? (0, t.jsx)(d.E, {
                                    variant: "body-sm/normal",
                                    color: "text-feedback-critical",
                                    role: "alert",
                                    children: o.intl.string(u.default["UU+oef"]),
                                })
                              : null,
                      ],
                  });
        },
    },
);
