l.d(t, { default: () => p });
var a = l(477900),
    s = l(582128),
    n = l(189213),
    i = l(834730),
    r = l(821609),
    o = l(95477),
    d = l(957565),
    u = l(540665),
    c = l(914250),
    m = l(564963),
    x = l(688954);
class h extends Error {}
var f = l(191850),
    v = l(792996),
    b = l(622344);
function p(e) {
    let { projectId: t, request: l, transitionState: p, onClose: j } = e,
        [g, y] = s.useState({}),
        [_, k] = s.useState(!1),
        [w, C] = s.useState(!1),
        [E, q] = s.useState(null),
        S = s.useCallback((e) => {
            (0, d.C)(e, () => q(e));
        }, []),
        N = s.useCallback((e, t) => {
            null != t && (C(!1), y((l) => ({ ...l, [t]: e })));
        }, []),
        M = l.fields.map((e) => e.name).filter((e) => "" !== (g[e] ?? "").trim()),
        O = M.length > 0,
        T = M.length < l.fields.length,
        U = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), O && !_)) {
                    (k(!0), C(!1), !0 === l.over_mcp && (0, m.oF)(l.request_id));
                    try {
                        (await (async function (e, t) {
                            let l = await (0, x.h)(e, "/agent/secrets", { method: "PUT", json: t });
                            if (410 === l.status) throw new h("secret request expired");
                            if (!l.ok) throw Error(`secret submission failed (${l.status})`);
                        })(t, {
                            secrets: Object.fromEntries(M.map((e) => [e, g[e].trim()])),
                            ...(null != l.request_id ? { request_id: l.request_id } : {}),
                        }),
                            !0 !== l.over_mcp && (0, u.dv)(t, v.intl.string(T ? f.default.sMQt5O : f.default.UGqnoV)),
                            await j());
                    } catch (e) {
                        if (((0, m.j$)(l.request_id), e instanceof h)) {
                            (!0 !== l.over_mcp && (0, u.dv)(t, v.intl.string(f.default.KVBvVy)), await j());
                            return;
                        }
                        C(!0);
                    } finally {
                        k(!1);
                    }
                }
            },
            [O, M, T, j, t, l.over_mcp, l.request_id, _, g],
        );
    return (0, a.jsx)("form", {
        onSubmit: U,
        children: (0, a.jsx)(n.a, {
            transitionState: p,
            onClose: j,
            title: v.intl.string(f.default.TuMGZp),
            size: "md",
            actions: [
                { text: v.intl.string(v.t["ETE/oC"]), variant: "secondary", onClick: j, disabled: _ },
                { text: v.intl.string(f.default.DUdtms), variant: "primary", type: "submit", loading: _, disabled: !O },
            ],
            children: (0, a.jsxs)("div", {
                className: b._I,
                children: [
                    null != l.note && "" !== l.note
                        ? (0, a.jsx)(c.A, { text: l.note, variant: "body-sm/normal", color: "text-default" })
                        : null,
                    (0, a.jsx)(i.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        selectable: !0,
                        children: v.intl.string(f.default.jgDBJZ),
                    }),
                    l.fields.length > 1
                        ? (0, a.jsx)(i.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: v.intl.string(f.default["La+pe4"]),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, a.jsx)("ul", {
                              className: b.vU,
                              children: (l.copy_values ?? []).map((e) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: b.Jq,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: b.ll,
                                                  children: [
                                                      (0, a.jsx)(i.E, {
                                                          variant: "body-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: e.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: b.Ml,
                                                          children: (0, a.jsx)(i.E, {
                                                              variant: "body-xs/normal",
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
                                                  text: v.intl.string(E === e.value ? v.t.t5VZ88 : v.t.OpuAlK),
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
                                className: b.QI,
                                children: [
                                    (0, a.jsx)(o.k, {
                                        label: e.label,
                                        name: e.name,
                                        type: "password",
                                        autoComplete: "off",
                                        value: g[e.name] ?? "",
                                        onChange: N,
                                        disabled: _,
                                        fullWidth: !0,
                                    }),
                                    null != e.hint && "" !== e.hint
                                        ? (0, a.jsx)(c.A, {
                                              text: e.hint,
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                          })
                                        : null,
                                    (e.hosts ?? []).length > 0
                                        ? (0, a.jsx)(i.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              selectable: !0,
                                              children: v.intl.formatToPlainString(f.default.Ww9HFO, {
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
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: v.intl.string(f.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
