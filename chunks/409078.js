l.d(t, { default: () => h });
var a = l(477900),
    n = l(582128),
    s = l(189213),
    i = l(834730),
    r = l(821609),
    d = l(95477),
    c = l(957565),
    u = l(597331),
    o = l(248675),
    x = l(375708),
    m = l(219490);
function h(e) {
    let { projectId: t, request: l, transitionState: h, onClose: f } = e,
        [p, v] = n.useState({}),
        [b, g] = n.useState(!1),
        [j, C] = n.useState(!1),
        [k, y] = n.useState(null),
        E = n.useCallback((e) => {
            (0, c.C)(e, () => y(e));
        }, []),
        S = n.useCallback((e, t) => {
            null != t && (C(!1), v((l) => ({ ...l, [t]: e })));
        }, []),
        w = l.fields.map((e) => e.name).filter((e) => "" !== (p[e] ?? "").trim()),
        N = w.length > 0,
        _ = w.length < l.fields.length,
        M = n.useCallback(
            async (e) => {
                if ((e.preventDefault(), N && !b)) {
                    (g(!0), C(!1));
                    try {
                        (await (0, u.$S)(t, { secrets: Object.fromEntries(w.map((e) => [e, p[e].trim()])) }),
                            (0, u.dv)(t, x.intl.string(_ ? o.default.sMQt5O : o.default.UGqnoV)),
                            await f());
                    } catch {
                        C(!0);
                    } finally {
                        g(!1);
                    }
                }
            },
            [N, w, _, f, t, b, p],
        );
    return (0, a.jsx)("form", {
        onSubmit: M,
        children: (0, a.jsx)(s.a, {
            transitionState: h,
            onClose: f,
            title: x.intl.string(o.default.TuMGZp),
            size: "md",
            actions: [
                { text: x.intl.string(x.t["ETE/oC"]), variant: "secondary", onClick: f, disabled: b },
                { text: x.intl.string(o.default.DUdtms), variant: "primary", type: "submit", loading: b, disabled: !N },
            ],
            children: (0, a.jsxs)("div", {
                className: m._I,
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
                        children: x.intl.string(o.default.jgDBJZ),
                    }),
                    l.fields.length > 1
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: x.intl.string(o.default["La+pe4"]),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, a.jsx)("ul", {
                              className: m.vU,
                              children: (l.copy_values ?? []).map((e) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: m.Jq,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: m.ll,
                                                  children: [
                                                      (0, a.jsx)(i.E, {
                                                          variant: "text-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: e.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: m.Ml,
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
                                                  text: x.intl.string(k === e.value ? x.t.t5VZ88 : x.t.OpuAlK),
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
                                value: p[e.name] ?? "",
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
                              children: x.intl.string(o.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
