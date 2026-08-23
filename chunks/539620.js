l.d(t, { default: () => h });
var a = l(477900),
    n = l(582128),
    s = l(189213),
    i = l(834730),
    r = l(821609),
    d = l(95477),
    c = l(957565),
    o = l(18739),
    u = l(295813),
    m = l(375708),
    x = l(652140);
function h(e) {
    let { projectId: t, request: l, transitionState: h, onClose: p } = e,
        [f, v] = n.useState({}),
        [b, g] = n.useState(!1),
        [j, C] = n.useState(!1),
        [y, k] = n.useState(null),
        E = n.useCallback((e) => {
            (0, c.C)(e, () => k(e));
        }, []),
        S = n.useCallback((e, t) => {
            null != t && (C(!1), v((l) => ({ ...l, [t]: e })));
        }, []),
        w = l.fields.map((e) => e.name).filter((e) => "" !== (f[e] ?? "").trim()),
        N = w.length > 0,
        _ = w.length < l.fields.length,
        A = n.useCallback(
            async (e) => {
                if ((e.preventDefault(), N && !b)) {
                    g(!0), C(!1);
                    try {
                        await (0, o.$S)(t, { secrets: Object.fromEntries(w.map((e) => [e, f[e].trim()])) }),
                            (0, o.dv)(t, m.intl.string(_ ? u.default.pu8e3p : u.default.lM98yZ)),
                            await p();
                    } catch {
                        C(!0);
                    } finally {
                        g(!1);
                    }
                }
            },
            [N, w, _, p, t, b, f],
        );
    return (0, a.jsx)("form", {
        onSubmit: A,
        children: (0, a.jsx)(s.Modal, {
            transitionState: h,
            onClose: p,
            title: m.intl.string(u.default.ACvhVC),
            size: "md",
            actions: [
                { text: m.intl.string(m.t["ETE/oC"]), variant: "secondary", onClick: p, disabled: b },
                {
                    text: m.intl.string(u.default["8SWZaW"]),
                    variant: "primary",
                    type: "submit",
                    loading: b,
                    disabled: !N,
                },
            ],
            children: (0, a.jsxs)("div", {
                className: x._I,
                children: [
                    null != l.note && "" !== l.note
                        ? (0, a.jsx)(i.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: l.note,
                          })
                        : null,
                    (0, a.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        selectable: !0,
                        children: m.intl.string(u.default.p0Ay4J),
                    }),
                    l.fields.length > 1
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: m.intl.string(u.default.LpnmXm),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, a.jsx)("ul", {
                              className: x.vU,
                              children: (l.copy_values ?? []).map((e) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: x.Jq,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: x.ll,
                                                  children: [
                                                      (0, a.jsx)(i.E, {
                                                          variant: "text-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: e.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: x.Ml,
                                                          children: (0, a.jsx)(i.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-default",
                                                              selectable: !0,
                                                              children: e.value,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)(r.$, {
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: m.intl.string(y === e.value ? m.t.t5VZ88 : m.t.OpuAlK),
                                                  onClick: () => E(e.value),
                                              }),
                                          ],
                                      },
                                      e.label,
                                  ),
                              ),
                          })
                        : null,
                    l.fields.map((e) =>
                        (0, a.jsx)(
                            d.k,
                            {
                                label: e.label,
                                helperText: null != e.hint && "" !== e.hint ? e.hint : void 0,
                                name: e.name,
                                type: "password",
                                autoComplete: "off",
                                value: f[e.name] ?? "",
                                onChange: S,
                                disabled: b,
                                fullWidth: !0,
                            },
                            e.name,
                        ),
                    ),
                    j
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: m.intl.string(u.default["4nT7Lo"]),
                          })
                        : null,
                ],
            }),
        }),
    });
}
