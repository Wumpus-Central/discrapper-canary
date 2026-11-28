l.d(t, { default: () => C });
var a = l(477900),
    s = l(582128),
    n = l(855986),
    i = l(189213),
    r = l(858899),
    d = l(834730),
    o = l(534514),
    c = l(821609),
    u = l(957565),
    m = l(540665),
    f = l(442331),
    x = l(44252),
    h = l(383668),
    b = l(564963),
    p = l(688954);
class v extends Error {}
var g = l(347941),
    j = l(225446),
    y = l(258576),
    k = l(792996),
    _ = l(622344);
function C(e) {
    let { projectId: t, request: l, transitionState: C, onClose: w } = e,
        [E, S] = s.useState({}),
        [q, N] = s.useState({}),
        [A, I] = s.useState(!1),
        [M, P] = s.useState(!1),
        [T, $] = s.useState(null),
        U = s.useCallback((e) => {
            (0, u.C)(e, () => $(e));
        }, []),
        V = s.useId(),
        z = s.useId(),
        D = (0, n.bG)([f.A], () => f.A.getSettings(t));
    function G(e) {
        return D?.secrets.some((t) => t.name === e && t.set) === !0;
    }
    let O = s.useCallback((e, t) => {
            (P(!1), S((l) => ({ ...l, [e]: t })));
        }, []),
        B = l.fields.map((e) => e.name).filter((e) => "" !== (E[e] ?? "").trim()),
        J = B.length > 0,
        K = (0, x.eX)(l.fields.filter((e) => !B.includes(e.name) && !G(e.name)).map((e) => e.label)),
        Q = "" !== K,
        Z = l.fields.filter((e) => B.includes(e.name) || G(e.name)).length,
        F = s.useCallback(
            async (e) => {
                if ((e.preventDefault(), J && !A)) {
                    (I(!0), P(!1), !0 === l.over_mcp && (0, b.oF)(l.request_id));
                    try {
                        (await (async function (e, t) {
                            let l = await (0, p.h)(e, "/agent/secrets", { method: "PUT", json: t });
                            if (410 === l.status) throw new v("secret request expired");
                            if (!l.ok) throw Error(`secret submission failed (${l.status})`);
                        })(t, {
                            secrets: Object.fromEntries(B.map((e) => [e, E[e].trim()])),
                            ...(null != l.request_id ? { request_id: l.request_id } : {}),
                        }),
                            S({}),
                            N({}),
                            !0 !== l.over_mcp && (0, m.dv)(t, k.intl.string(Q ? y.default.sMQt5O : y.default.UGqnoV)),
                            Q &&
                                (0, r.P0)({
                                    text: k.intl.formatToPlainString(y.default["xfz7+k"], { items: K }),
                                    variant: "success",
                                }),
                            await w());
                    } catch (e) {
                        if (((0, b.j$)(l.request_id), e instanceof v)) {
                            (!0 !== l.over_mcp && (0, m.dv)(t, k.intl.string(y.default.KVBvVy)), await w());
                            return;
                        }
                        P(!0);
                    } finally {
                        I(!1);
                    }
                }
            },
            [J, B, Q, w, t, l.over_mcp, l.request_id, A, K, E],
        ),
        L = l.copy_values ?? [],
        R = l.fields.map((e) =>
            (0, a.jsx)(
                g.A,
                {
                    fieldId: `${V}-${e.name}`,
                    name: e.name,
                    label: e.label,
                    help: e.hint,
                    hosts: e.hosts,
                    stored: G(e.name),
                    replacing: !0 === q[e.name],
                    onReplace: () => N((t) => ({ ...t, [e.name]: !0 })),
                    value: E[e.name] ?? "",
                    onChange: (t) => O(e.name, t),
                    disabled: A,
                },
                e.name,
            ),
        ),
        X = (0, x.xM)(
            l.fields.map((e) => {
                let t = B.includes(e.name) || G(e.name);
                return { key: e.name, label: e.label, filled: t, needed: !t };
            }),
        );
    return (0, a.jsx)("form", {
        onSubmit: F,
        children: (0, a.jsx)(i.a, {
            transitionState: C,
            onClose: w,
            title: k.intl.string(y.default.TuMGZp),
            subtitle: k.intl.formatToPlainString(y.default.hoevP8, { filled: Z, total: l.fields.length }),
            size: "md",
            actionBarInput: (0, a.jsx)(d.E, {
                variant: "body-sm/normal",
                color: "text-muted",
                role: "status",
                lineClamp: 2,
                children: X,
            }),
            actions: [
                { text: k.intl.string(k.t["ETE/oC"]), variant: "secondary", onClick: w, disabled: A },
                { text: k.intl.string(y.default.DUdtms), variant: "primary", type: "submit", loading: A, disabled: !J },
            ],
            children: (0, a.jsxs)("div", {
                className: _._I,
                children: [
                    null != l.note && "" !== l.note
                        ? (0, a.jsx)(h.A, {
                              text: l.note,
                              variant: "body-sm/normal",
                              color: "text-default",
                              shortLinks: !0,
                          })
                        : null,
                    L.length > 0
                        ? (0, a.jsxs)("section", {
                              className: _.Ci,
                              "aria-labelledby": z,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: _.xA,
                                      children: [
                                          (0, a.jsx)(o.D, {
                                              variant: "heading-sm/semibold",
                                              id: z,
                                              children: k.intl.string(y.default["6sN6pA"]),
                                          }),
                                          (0, a.jsx)(d.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              selectable: !0,
                                              children: k.intl.string(y.default.u0vpJw),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)("ul", {
                                      className: _.vU,
                                      children: L.map((e) =>
                                          (0, a.jsxs)(
                                              "li",
                                              {
                                                  className: _.Jq,
                                                  children: [
                                                      (0, a.jsxs)("div", {
                                                          className: _.ll,
                                                          children: [
                                                              (0, a.jsx)(d.E, {
                                                                  variant: "body-xs/semibold",
                                                                  color: "text-muted",
                                                                  tag: "span",
                                                                  children: e.label,
                                                              }),
                                                              (0, a.jsx)("span", {
                                                                  className: _.Ml,
                                                                  children: (0, a.jsx)(d.E, {
                                                                      variant: "body-xs/normal",
                                                                      color: "text-default",
                                                                      selectable: !0,
                                                                      children: e.value,
                                                                  }),
                                                              }),
                                                          ],
                                                      }),
                                                      (0, a.jsx)(c.$, {
                                                          variant: "secondary",
                                                          size: "sm",
                                                          text: k.intl.string(T === e.value ? k.t.t5VZ88 : k.t.OpuAlK),
                                                          onClick: () => U(e.value),
                                                      }),
                                                  ],
                                              },
                                              e.label,
                                          ),
                                      ),
                                  }),
                              ],
                          })
                        : null,
                    (0, a.jsx)(j.A, {
                        title: k.intl.string(L.length > 0 ? y.default.ekefN9 : y.default["xEfQj/"]),
                        children: R,
                    }),
                    M
                        ? (0, a.jsx)(d.E, {
                              variant: "body-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: k.intl.string(y.default.IrMuew),
                          })
                        : null,
                ],
            }),
        }),
    });
}
