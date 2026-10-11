l.d(e, { default: () => p });
var a = l(477900),
    n = l(582128),
    s = l(189213),
    i = l(834730),
    r = l(821609),
    c = l(95477),
    d = l(957565),
    o = l(591277);
(l(323874), l(14289), l(35956));
var u = l(382541);
async function m(t, e) {
    let { ticket: l, baseUrl: a } = await (0, u.d)(t),
        n = new URLSearchParams({ ticket: l }),
        s = await fetch(`${a}/agent/secrets?${n}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(e),
        });
    if (!s.ok) throw Error(`secret submission failed (${s.status})`);
}
var x = l(248675),
    h = l(660183),
    f = l(622344);
function p(t) {
    let { projectId: e, request: l, transitionState: u, onClose: p } = t,
        [v, b] = n.useState({}),
        [g, j] = n.useState(!1),
        [y, k] = n.useState(!1),
        [C, w] = n.useState(null),
        E = n.useCallback((t) => {
            (0, d.C)(t, () => w(t));
        }, []),
        S = n.useCallback((t, e) => {
            null != e && (k(!1), b((l) => ({ ...l, [e]: t })));
        }, []),
        N = l.fields.map((t) => t.name).filter((t) => "" !== (v[t] ?? "").trim()),
        U = N.length > 0,
        _ = N.length < l.fields.length,
        M = n.useCallback(
            async (t) => {
                if ((t.preventDefault(), U && !g)) {
                    (j(!0), k(!1));
                    try {
                        (await m(e, { secrets: Object.fromEntries(N.map((t) => [t, v[t].trim()])) }),
                            (0, o.dv)(e, h.intl.string(_ ? x.default.sMQt5O : x.default.UGqnoV)),
                            await p());
                    } catch {
                        k(!0);
                    } finally {
                        j(!1);
                    }
                }
            },
            [U, N, _, p, e, g, v],
        );
    return (0, a.jsx)("form", {
        onSubmit: M,
        children: (0, a.jsx)(s.a, {
            transitionState: u,
            onClose: p,
            title: h.intl.string(x.default.TuMGZp),
            size: "md",
            actions: [
                { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: p, disabled: g },
                { text: h.intl.string(x.default.DUdtms), variant: "primary", type: "submit", loading: g, disabled: !U },
            ],
            children: (0, a.jsxs)("div", {
                className: f._I,
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
                        children: h.intl.string(x.default.jgDBJZ),
                    }),
                    l.fields.length > 1
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: h.intl.string(x.default["La+pe4"]),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, a.jsx)("ul", {
                              className: f.vU,
                              children: (l.copy_values ?? []).map((t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: f.Jq,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: f.ll,
                                                  children: [
                                                      (0, a.jsx)(i.E, {
                                                          variant: "text-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: t.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: f.Ml,
                                                          children: (0, a.jsx)(i.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-default",
                                                              selectable: !0,
                                                              children: t.value,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              (0, a.jsx)(r.$, {
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: h.intl.string(C === t.value ? h.t.t5VZ88 : h.t.OpuAlK),
                                                  onClick: () => E(t.value),
                                              }),
                                          ],
                                      },
                                      t.label,
                                  ),
                              ),
                          })
                        : null,
                    l.fields.map((t) =>
                        (0, a.jsx)(
                            c.k,
                            {
                                label: t.label,
                                helperText: null != t.hint && "" !== t.hint ? t.hint : void 0,
                                name: t.name,
                                type: "password",
                                autoComplete: "off",
                                value: v[t.name] ?? "",
                                onChange: S,
                                disabled: g,
                                fullWidth: !0,
                            },
                            t.name,
                        ),
                    ),
                    y
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: h.intl.string(x.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
