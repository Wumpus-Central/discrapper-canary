l.d(e, { default: () => v });
var a = l(477900),
    s = l(582128),
    n = l(189213),
    i = l(834730),
    r = l(821609),
    d = l(95477),
    o = l(957565),
    c = l(591277);
(l(323874), l(14289), l(35956));
var u = l(382541);
class x extends Error {}
async function h(t, e) {
    let { ticket: l, baseUrl: a } = await (0, u.d)(t),
        s = new URLSearchParams({ ticket: l }),
        n = await fetch(`${a}/agent/secrets?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(e),
        });
    if (410 === n.status) throw new x("secret request expired");
    if (!n.ok) throw Error(`secret submission failed (${n.status})`);
}
var m = l(248675),
    f = l(660183),
    p = l(622344);
function v(t) {
    let { projectId: e, request: l, transitionState: u, onClose: v } = t,
        [b, g] = s.useState({}),
        [j, y] = s.useState(!1),
        [w, k] = s.useState(!1),
        [C, E] = s.useState(null),
        S = s.useCallback((t) => {
            (0, o.C)(t, () => E(t));
        }, []),
        _ = s.useCallback((t, e) => {
            null != e && (k(!1), g((l) => ({ ...l, [e]: t })));
        }, []),
        q = l.fields.map((t) => t.name).filter((t) => "" !== (b[t] ?? "").trim()),
        N = q.length > 0,
        O = q.length < l.fields.length,
        T = s.useCallback(
            async (t) => {
                if ((t.preventDefault(), N && !j)) {
                    (y(!0), k(!1));
                    try {
                        (await h(e, {
                            secrets: Object.fromEntries(q.map((t) => [t, b[t].trim()])),
                            ...(null != l.request_id ? { request_id: l.request_id } : {}),
                        }),
                            (0, c.dv)(e, f.intl.string(O ? m.default.sMQt5O : m.default.UGqnoV)),
                            await v());
                    } catch (t) {
                        if (t instanceof x) {
                            ((0, c.dv)(e, f.intl.string(m.default.KVBvVy)), await v());
                            return;
                        }
                        k(!0);
                    } finally {
                        y(!1);
                    }
                }
            },
            [N, q, O, v, e, l.request_id, j, b],
        );
    return (0, a.jsx)("form", {
        onSubmit: T,
        children: (0, a.jsx)(n.a, {
            transitionState: u,
            onClose: v,
            title: f.intl.string(m.default.TuMGZp),
            size: "md",
            actions: [
                { text: f.intl.string(f.t["ETE/oC"]), variant: "secondary", onClick: v, disabled: j },
                { text: f.intl.string(m.default.DUdtms), variant: "primary", type: "submit", loading: j, disabled: !N },
            ],
            children: (0, a.jsxs)("div", {
                className: p._I,
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
                        children: f.intl.string(m.default.jgDBJZ),
                    }),
                    l.fields.length > 1
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: f.intl.string(m.default["La+pe4"]),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, a.jsx)("ul", {
                              className: p.vU,
                              children: (l.copy_values ?? []).map((t) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: p.Jq,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: p.ll,
                                                  children: [
                                                      (0, a.jsx)(i.E, {
                                                          variant: "text-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: t.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: p.Ml,
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
                                                  text: f.intl.string(C === t.value ? f.t.t5VZ88 : f.t.OpuAlK),
                                                  onClick: () => S(t.value),
                                              }),
                                          ],
                                      },
                                      t.label,
                                  ),
                              ),
                          })
                        : null,
                    l.fields.map((t) =>
                        (0, a.jsxs)(
                            "div",
                            {
                                className: p.QI,
                                children: [
                                    (0, a.jsx)(d.k, {
                                        label: t.label,
                                        helperText: null != t.hint && "" !== t.hint ? t.hint : void 0,
                                        name: t.name,
                                        type: "password",
                                        autoComplete: "off",
                                        value: b[t.name] ?? "",
                                        onChange: _,
                                        disabled: j,
                                        fullWidth: !0,
                                    }),
                                    (t.hosts ?? []).length > 0
                                        ? (0, a.jsx)(i.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              selectable: !0,
                                              children: f.intl.formatToPlainString(m.default.Ww9HFO, {
                                                  hosts: (t.hosts ?? []).join(", "),
                                              }),
                                          })
                                        : null,
                                ],
                            },
                            t.name,
                        ),
                    ),
                    w
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: f.intl.string(m.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
