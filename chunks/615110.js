l.d(t, { default: () => g });
var a = l(477900),
    s = l(582128),
    n = l(189213),
    i = l(834730),
    r = l(821609),
    o = l(95477),
    d = l(957565),
    u = l(322227),
    c = l(1665),
    m = l(564963),
    x = l(688954);
class h extends Error {}
async function f(e, t) {
    let l = await (0, x.h)(e, "/agent/secrets", { method: "PUT", json: t });
    if (410 === l.status) throw new h("secret request expired");
    if (!l.ok) throw Error(`secret submission failed (${l.status})`);
}
var b = l(809526),
    p = l(105292),
    v = l(622344);
function g(e) {
    let { projectId: t, request: l, transitionState: x, onClose: g } = e,
        [j, y] = s.useState({}),
        [_, k] = s.useState(!1),
        [w, C] = s.useState(!1),
        [E, q] = s.useState(null),
        S = s.useCallback((e) => {
            (0, d.C)(e, () => q(e));
        }, []),
        M = s.useCallback((e, t) => {
            null != t && (C(!1), y((l) => ({ ...l, [t]: e })));
        }, []),
        N = l.fields.map((e) => e.name).filter((e) => "" !== (j[e] ?? "").trim()),
        U = N.length > 0,
        O = N.length < l.fields.length,
        T = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), U && !_)) {
                    (k(!0), C(!1), !0 === l.over_mcp && (0, m.oF)(l.request_id));
                    try {
                        (await f(t, {
                            secrets: Object.fromEntries(N.map((e) => [e, j[e].trim()])),
                            ...(null != l.request_id ? { request_id: l.request_id } : {}),
                        }),
                            !0 !== l.over_mcp &&
                                (0, u.sendUserMessage)(t, p.intl.string(O ? b.default.sMQt5O : b.default.UGqnoV)),
                            await g());
                    } catch (e) {
                        if (((0, m.j$)(l.request_id), e instanceof h)) {
                            (!0 !== l.over_mcp && (0, u.sendUserMessage)(t, p.intl.string(b.default.KVBvVy)),
                                await g());
                            return;
                        }
                        C(!0);
                    } finally {
                        k(!1);
                    }
                }
            },
            [U, N, O, g, t, l.over_mcp, l.request_id, _, j],
        );
    return (0, a.jsx)("form", {
        onSubmit: T,
        children: (0, a.jsx)(n.a, {
            transitionState: x,
            onClose: g,
            title: p.intl.string(b.default.TuMGZp),
            size: "md",
            actions: [
                { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: g, disabled: _ },
                { text: p.intl.string(b.default.DUdtms), variant: "primary", type: "submit", loading: _, disabled: !U },
            ],
            children: (0, a.jsxs)("div", {
                className: v._I,
                children: [
                    null != l.note && "" !== l.note
                        ? (0, a.jsx)(c.A, { text: l.note, variant: "body-sm/normal", color: "text-default" })
                        : null,
                    (0, a.jsx)(i.E, {
                        variant: "body-xs/normal",
                        color: "text-muted",
                        selectable: !0,
                        children: p.intl.string(b.default.jgDBJZ),
                    }),
                    l.fields.length > 1
                        ? (0, a.jsx)(i.E, {
                              variant: "body-xs/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: p.intl.string(b.default["La+pe4"]),
                          })
                        : null,
                    (l.copy_values ?? []).length > 0
                        ? (0, a.jsx)("ul", {
                              className: v.vU,
                              children: (l.copy_values ?? []).map((e) =>
                                  (0, a.jsxs)(
                                      "li",
                                      {
                                          className: v.Jq,
                                          children: [
                                              (0, a.jsxs)("div", {
                                                  className: v.ll,
                                                  children: [
                                                      (0, a.jsx)(i.E, {
                                                          variant: "body-xs/semibold",
                                                          color: "text-muted",
                                                          tag: "span",
                                                          children: e.label,
                                                      }),
                                                      (0, a.jsx)("span", {
                                                          className: v.Ml,
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
                                                  text: p.intl.string(E === e.value ? p.t.t5VZ88 : p.t.OpuAlK),
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
                                className: v.QI,
                                children: [
                                    (0, a.jsx)(o.k, {
                                        label: e.label,
                                        name: e.name,
                                        type: "password",
                                        autoComplete: "off",
                                        value: j[e.name] ?? "",
                                        onChange: M,
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
                                              children: p.intl.formatToPlainString(b.default.Ww9HFO, {
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
                              children: p.intl.string(b.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
