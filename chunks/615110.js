l.d(t, { default: () => b });
var s = l(477900),
    a = l(582128),
    n = l(189213),
    i = l(834730),
    r = l(821609),
    o = l(95477),
    d = l(957565),
    c = l(319481),
    u = l(564963),
    m = l(688954);
class x extends Error {}
async function h(e, t) {
    let l = await (0, m.h)(e, "/agent/secrets", { method: "PUT", json: t });
    if (410 === l.status) throw new x("secret request expired");
    if (!l.ok) throw Error(`secret submission failed (${l.status})`);
}
var f = l(248675),
    p = l(105292),
    v = l(622344);
function b(e) {
    let { projectId: t, request: l, transitionState: m, onClose: b } = e,
        [g, j] = a.useState({}),
        [_, k] = a.useState(!1),
        [w, y] = a.useState(!1),
        [C, E] = a.useState(null),
        q = a.useCallback((e) => {
            (0, d.C)(e, () => E(e));
        }, []),
        S = a.useCallback((e, t) => {
            null != t && (y(!1), j((l) => ({ ...l, [t]: e })));
        }, []),
        M = l.fields.map((e) => e.name).filter((e) => "" !== (g[e] ?? "").trim()),
        N = M.length > 0,
        U = M.length < l.fields.length,
        T = a.useCallback(
            async (e) => {
                if ((e.preventDefault(), N && !_)) {
                    (k(!0), y(!1), !0 === l.over_mcp && (0, u.oF)(l.request_id));
                    try {
                        (await h(t, {
                            secrets: Object.fromEntries(M.map((e) => [e, g[e].trim()])),
                            ...(null != l.request_id ? { request_id: l.request_id } : {}),
                        }),
                            !0 !== l.over_mcp &&
                                (0, c.sendUserMessage)(t, p.intl.string(U ? f.default.sMQt5O : f.default.UGqnoV)),
                            await b());
                    } catch (e) {
                        if (((0, u.j$)(l.request_id), e instanceof x)) {
                            (!0 !== l.over_mcp && (0, c.sendUserMessage)(t, p.intl.string(f.default.KVBvVy)),
                                await b());
                            return;
                        }
                        y(!0);
                    } finally {
                        k(!1);
                    }
                }
            },
            [N, M, U, b, t, l.over_mcp, l.request_id, _, g],
        );
    return (0, s.jsx)("form", {
        onSubmit: T,
        children: (0, s.jsx)(n.a, {
            transitionState: m,
            onClose: b,
            title: p.intl.string(f.default.TuMGZp),
            size: "md",
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: b, disabled: _ },
                { text: p.intl.string(f.default.DUdtms), variant: "primary", type: "submit", loading: _, disabled: !N },
            ],
            children: (0, s.jsxs)("div", {
                className: v._I,
                children: [
                    null != l.note && "" !== l.note
                        ? (0, s.jsx)(i.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: l.note,
                          })
                        : null,
                    (0, s.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        selectable: !0,
                        children: p.intl.string(f.default.jgDBJZ),
                    }),
                    l.fields.length > 1
                        ? (0, s.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: p.intl.string(f.default["La+pe4"]),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, s.jsx)("ul", {
                              className: v.vU,
                              children: (l.copy_values ?? []).map((e) =>
                                  (0, s.jsxs)(
                                      "li",
                                      {
                                          className: v.Jq,
                                          children: [
                                              (0, s.jsxs)("div", {
                                                  className: v.ll,
                                                  children: [
                                                      (0, s.jsx)(i.E, {
                                                          variant: "text-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: e.label,
                                                      }),
                                                      (0, s.jsx)("span", {
                                                          className: v.Ml,
                                                          children: (0, s.jsx)(i.E, {
                                                              variant: "text-xs/normal",
                                                              color: "text-default",
                                                              selectable: !0,
                                                              children: e.value,
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                              (0, s.jsx)(r.$, {
                                                  variant: "secondary",
                                                  size: "sm",
                                                  text: p.intl.string(C === e.value ? p.t.t5VZ88 : p.t.OpuAlK),
                                                  onClick: () => q(e.value),
                                              }),
                                          ],
                                      },
                                      e.label,
                                  ),
                              ),
                          })
                        : null,
                    l.fields.map((e) =>
                        (0, s.jsxs)(
                            "div",
                            {
                                className: v.QI,
                                children: [
                                    (0, s.jsx)(o.k, {
                                        label: e.label,
                                        helperText: null != e.hint && "" !== e.hint ? e.hint : void 0,
                                        name: e.name,
                                        type: "password",
                                        autoComplete: "off",
                                        value: g[e.name] ?? "",
                                        onChange: S,
                                        disabled: _,
                                        fullWidth: !0,
                                    }),
                                    (e.hosts ?? []).length > 0
                                        ? (0, s.jsx)(i.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              selectable: !0,
                                              children: p.intl.formatToPlainString(f.default.Ww9HFO, {
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
                        ? (0, s.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: p.intl.string(f.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
