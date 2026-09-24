l.d(t, { A: () => E });
var n = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(691885),
    s = l(834730),
    u = l(150934),
    o = l(95477),
    d = l(821609),
    c = l(289873),
    m = l(890497),
    f = l(47167),
    h = l(713654),
    x = l(808728),
    g = l(994500),
    p = l(287809),
    v = l(948230),
    b = l(683180),
    j = l(783791),
    y = l(277977),
    k = l(972786),
    N = l(50617),
    w = l(375708),
    A = l(472781);
let S = { values: {}, secrets: {} };
function E(e) {
    let { projectId: t, scopeKeys: l, note: m, notifyAgent: f = !1, isPreview: h = !1, children: x } = e,
        g = (0, r.bG)([y.Ay], () => y.Ay.getSettings(t)),
        [p, b] = a.useState(S),
        [k, E] = a.useState({}),
        [I, T] = a.useState(!1),
        [M, R] = a.useState(!1),
        P = a.useCallback((e, t) => {
            (R(!1), b((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        _ = a.useCallback((e, t) => {
            (R(!1), b((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        L = a.useMemo(() => g?.schema ?? [], [g]),
        F = a.useMemo(() => g?.values ?? {}, [g]),
        D = a.useMemo(
            () =>
                (g?.secrets ?? []).map((e) => ({ ...e, def: L.find((t) => t.key === e.name && "secret" === t.type) })),
            [L, g],
        ),
        $ = L.filter((e) => "secret" !== e.type),
        O = new Map(D.map((e) => [e.name, e])),
        q = (l ?? []).filter((e) => $.some((t) => t.key === e) || O.has(e)),
        z = q.length > 0,
        U = q.some((e) => O.has(e)),
        G = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(p.values)) {
                let n = L.find((e) => e.key === t);
                null != n &&
                    l !== (F[t] ?? ("checkbox" !== n.type && "")) &&
                    (e[t] = "string" == typeof l && "" === l.trim() ? null : l);
            }
            let t = {};
            for (let [e, l] of Object.entries(p.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [p, L, F]),
        B = null != G.values || null != G.secrets,
        V = a.useCallback(async () => {
            if (!B || I) return !0;
            (T(!0), R(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, G);
                return (
                    f || j.Ay.hasPendingSettingsRequest(t)
                        ? (0, y.dv)(t, w.intl.string(N.default.gqJFu0))
                        : e
                          ? (0, y.ss)(t)
                          : (0, v.Eo)(t),
                    b(S),
                    E({}),
                    !0
                );
            } catch {
                return (R(!0), !1);
            } finally {
                T(!1);
            }
        }, [B, f, t, I, G]);
    function W(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? w.intl.string(N.default.xPxvYa) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function H(e) {
        let l = W(e);
        if ("select" === e.type) {
            let t = p.values[e.key] ?? F[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: A._6,
                    children: [
                        (0, n.jsx)(i.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof t ? t : void 0,
                            onSelectionChange: (t) => P(e.key, t),
                            selectionMode: "single",
                            disabled: I,
                            fullWidth: !0,
                        }),
                        null != l
                            ? (0, n.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: l })
                            : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = p.values[e.key] ?? F[e.key];
            return (0, n.jsx)(
                u.S,
                { label: e.label, description: l, checked: !0 === t, onChange: (t) => P(e.key, t), disabled: I },
                e.key,
            );
        }
        return "channel" === e.type
            ? (0, n.jsx)(
                  C,
                  {
                      projectId: t,
                      isPreview: h,
                      def: e,
                      hint: l,
                      value: p.values[e.key] ?? F[e.key],
                      disabled: I,
                      onChange: (t) => P(e.key, t),
                      fallback: K(e, l),
                  },
                  e.key,
              )
            : K(e, l);
    }
    function K(e, t) {
        let l = p.values[e.key] ?? F[e.key];
        return (0, n.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: "string" == typeof l ? l : "",
                onChange: (t) => P(e.key, t),
                disabled: I,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function Y(e) {
        let t = e.def?.label ?? e.name,
            l = W(e.def);
        return e.set && !0 !== k[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: A.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: A.DE,
                              children: [
                                  (0, n.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, n.jsx)(s.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != l
                                      ? (0, n.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: l })
                                      : null,
                              ],
                          }),
                          (0, n.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              text: w.intl.string(N.default.j6itec),
                              "aria-label": w.intl.formatToPlainString(N.default.cTofe2, { label: t }),
                              disabled: I,
                              onClick: () => E((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, n.jsx)(
                  o.k,
                  {
                      label: t,
                      helperText: l,
                      name: e.name,
                      type: "password",
                      autoComplete: "off",
                      placeholder: e.set
                          ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                          : void 0,
                      required: e.def?.required === !0 && !e.set,
                      value: p.secrets[e.name] ?? "",
                      onChange: (t) => _(e.name, t),
                      disabled: I,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let Q = M
            ? (0, n.jsx)(s.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: w.intl.string(N.default.n02OEo),
              })
            : null,
        X = (0, n.jsxs)("div", {
            className: A.Ek,
            children: [
                null != m && "" !== m
                    ? (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: m })
                    : null,
                null == g
                    ? (0, n.jsx)("div", { className: A.kZ, children: (0, n.jsx)(c.y, {}) })
                    : 0 === $.length && 0 === D.length
                      ? (0, n.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: w.intl.string(N.default.URnN4B),
                        })
                      : null,
                null == g
                    ? null
                    : z
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                U
                                    ? (0, n.jsx)(s.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: w.intl.string(N.default["Hl+eu7"]),
                                      })
                                    : null,
                                q.map(function (e) {
                                    let t = O.get(e);
                                    if (null != t) return Y(t);
                                    let l = $.find((t) => t.key === e);
                                    return null == l ? null : H(l);
                                }),
                            ],
                        })
                      : $.map(H),
                Q,
            ],
        }),
        Z = (0, n.jsxs)("div", {
            className: A.Ek,
            children: [
                (0, n.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: w.intl.string(N.default["Hl+eu7"]),
                }),
                D.map(Y),
                Q,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
        children: x({
            fields: X,
            secretFields: Z,
            loaded: null != g,
            valueCount: $.length,
            secretCount: D.length,
            canSave: B,
            saving: I,
            isScoped: z,
            submit: V,
        }),
    });
}
function C(e) {
    let { projectId: t, isPreview: l, def: a, hint: i, value: u, disabled: o, onChange: d, fallback: c } = e,
        v = (0, r.bG)([k.Ay], () => (0, b.t7)(k.Ay.getProject(t), l), [l, t]),
        j = (0, r.bG)([x.Ay], () => (null == v ? null : x.Ay.getChannels(v)), [v]);
    if (null == j) return c;
    let y = (0, b.qx)(j, a.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, f.m1)(e, p.default, g.A),
        leading: (0, h.gU)(e),
    }));
    return (0, n.jsxs)("div", {
        className: A._6,
        children: [
            (0, n.jsx)(m.Z, {
                selectionMode: "single",
                clearable: !0,
                label: a.label,
                options: y,
                value: "string" == typeof u && "" !== u ? u : void 0,
                placeholder: w.intl.string(N.default.grukkJ),
                onSelectionChange: (e) => d(e ?? ""),
                disabled: o,
                fullWidth: !0,
            }),
            null != i ? (0, n.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: i }) : null,
        ],
    });
}
