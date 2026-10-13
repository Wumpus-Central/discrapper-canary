l.d(t, { default: () => v });
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
async function h(e, t) {
    let { ticket: l, baseUrl: a } = await (0, u.d)(e),
        s = new URLSearchParams({ ticket: l }),
        n = await fetch(`${a}/agent/secrets?${s}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(t),
        });
    if (410 === n.status) throw new x("secret request expired");
    if (!n.ok) throw Error(`secret submission failed (${n.status})`);
}
var m = l(248675),
    f = l(660183),
    p = l(622344);
function v(e) {
    let { projectId: t, request: l, transitionState: u, onClose: v } = e,
        [b, g] = s.useState({}),
        [j, y] = s.useState(!1),
        [w, k] = s.useState(!1),
        [C, E] = s.useState(null),
        S = s.useCallback((e) => {
            (0, o.C)(e, () => E(e));
        }, []),
        _ = s.useCallback((e, t) => {
            null != t && (k(!1), g((l) => ({ ...l, [t]: e })));
        }, []),
        q = l.fields.map((e) => e.name).filter((e) => "" !== (b[e] ?? "").trim()),
        N = q.length > 0,
        U = q.length < l.fields.length,
        M = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), N && !j)) {
                    (y(!0), k(!1));
                    try {
                        (await h(t, {
                            secrets: Object.fromEntries(q.map((e) => [e, b[e].trim()])),
                            ...(null != l.request_id ? { request_id: l.request_id } : {}),
                        }),
                            (0, c.sendUserMessage)(t, f.intl.string(U ? m.default.sMQt5O : m.default.UGqnoV)),
                            await v());
                    } catch (e) {
                        if (e instanceof x) {
                            ((0, c.sendUserMessage)(t, f.intl.string(m.default.KVBvVy)), await v());
                            return;
                        }
                        k(!0);
                    } finally {
                        y(!1);
                    }
                }
            },
            [N, q, U, v, t, l.request_id, j, b],
        );
    return (0, a.jsx)("form", {
        onSubmit: M,
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
                              children: (l.copy_values ?? []).map((e) =>
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
                                                          children: e.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: p.Ml,
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
                                                  text: f.intl.string(C === e.value ? f.t.t5VZ88 : f.t.OpuAlK),
                                                  onClick: () => S(e.value),
                                              }),
                                          ],
                                      },
                                      e.label,
                                  ),
                              ),
                          })
                        : null,
                    l.fields.map((e) =>
                        (0, a.jsxs)(
                            "div",
                            {
                                className: p.QI,
                                children: [
                                    (0, a.jsx)(d.k, {
                                        label: e.label,
                                        helperText: null != e.hint && "" !== e.hint ? e.hint : void 0,
                                        name: e.name,
                                        type: "password",
                                        autoComplete: "off",
                                        value: b[e.name] ?? "",
                                        onChange: _,
                                        disabled: j,
                                        fullWidth: !0,
                                    }),
                                    (e.hosts ?? []).length > 0
                                        ? (0, a.jsx)(i.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              selectable: !0,
                                              children: f.intl.formatToPlainString(m.default.Ww9HFO, {
                                                  hosts: (e.hosts ?? []).join(", "),
                                              }),
                                          })
                                        : null,
                                ],
                            },
                            e.name,
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
