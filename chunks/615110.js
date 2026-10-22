l.d(t, { default: () => j });
var a = l(477900),
    s = l(582128),
    n = l(189213),
    i = l(834730),
    r = l(821609),
    o = l(95477),
    d = l(957565),
    u = l(319481),
    c = l(1665),
    x = l(564963),
    m = l(688954);
class h extends Error {}
async function f(e, t) {
    let l = await (0, m.h)(e, "/agent/secrets", { method: "PUT", json: t });
    if (410 === l.status) throw new h("secret request expired");
    if (!l.ok) throw Error(`secret submission failed (${l.status})`);
}
var p = l(248675),
    v = l(105292),
    g = l(622344);
function j(e) {
    let { projectId: t, request: l, transitionState: m, onClose: j } = e,
        [b, _] = s.useState({}),
        [k, w] = s.useState(!1),
        [y, C] = s.useState(!1),
        [E, q] = s.useState(null),
        S = s.useCallback((e) => {
            (0, d.C)(e, () => q(e));
        }, []),
        M = s.useCallback((e, t) => {
            null != t && (C(!1), _((l) => ({ ...l, [t]: e })));
        }, []),
        N = l.fields.map((e) => e.name).filter((e) => "" !== (b[e] ?? "").trim()),
        U = N.length > 0,
        O = N.length < l.fields.length,
        T = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), U && !k)) {
                    (w(!0), C(!1), !0 === l.over_mcp && (0, x.oF)(l.request_id));
                    try {
                        (await f(t, {
                            secrets: Object.fromEntries(N.map((e) => [e, b[e].trim()])),
                            ...(null != l.request_id ? { request_id: l.request_id } : {}),
                        }),
                            !0 !== l.over_mcp &&
                                (0, u.sendUserMessage)(t, v.intl.string(O ? p.default.sMQt5O : p.default.UGqnoV)),
                            await j());
                    } catch (e) {
                        if (((0, x.j$)(l.request_id), e instanceof h)) {
                            (!0 !== l.over_mcp && (0, u.sendUserMessage)(t, v.intl.string(p.default.KVBvVy)),
                                await j());
                            return;
                        }
                        C(!0);
                    } finally {
                        w(!1);
                    }
                }
            },
            [U, N, O, j, t, l.over_mcp, l.request_id, k, b],
        );
    return (0, a.jsx)("form", {
        onSubmit: T,
        children: (0, a.jsx)(n.a, {
            transitionState: m,
            onClose: j,
            title: v.intl.string(p.default.TuMGZp),
            size: "md",
            actions: [
                { text: v.intl.string(v.t["ETE/oC"]), variant: "secondary", onClick: j, disabled: k },
                { text: v.intl.string(p.default.DUdtms), variant: "primary", type: "submit", loading: k, disabled: !U },
            ],
            children: (0, a.jsxs)("div", {
                className: g._I,
                children: [
                    null != l.note && "" !== l.note
                        ? (0, a.jsx)(c.A, { text: l.note, variant: "text-sm/normal", color: "text-default" })
                        : null,
                    (0, a.jsx)(i.E, {
                        variant: "text-xs/normal",
                        color: "text-muted",
                        selectable: !0,
                        children: v.intl.string(p.default.jgDBJZ),
                    }),
                    l.fields.length > 1
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: v.intl.string(p.default["La+pe4"]),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, a.jsx)("ul", {
                              className: g.vU,
                              children: (l.copy_values ?? []).map((e) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: g.Jq,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: g.ll,
                                                  children: [
                                                      (0, a.jsx)(i.E, {
                                                          variant: "text-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: e.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: g.Ml,
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
                                className: g.QI,
                                children: [
                                    (0, a.jsx)(o.k, {
                                        label: e.label,
                                        name: e.name,
                                        type: "password",
                                        autoComplete: "off",
                                        value: b[e.name] ?? "",
                                        onChange: M,
                                        disabled: k,
                                        fullWidth: !0,
                                    }),
                                    null != e.hint && "" !== e.hint
                                        ? (0, a.jsx)(c.A, {
                                              text: e.hint,
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                          })
                                        : null,
                                    (e.hosts ?? []).length > 0
                                        ? (0, a.jsx)(i.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              selectable: !0,
                                              children: v.intl.formatToPlainString(p.default.Ww9HFO, {
                                                  hosts: (e.hosts ?? []).join(", "),
                                              }),
                                          })
                                        : null,
                                ],
                            },
                            e.name,
                        ),
                    ),
                    y
                        ? (0, a.jsx)(i.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: v.intl.string(p.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
