l.d(t, { A: () => S });
var n = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(691885),
    s = l(834730),
    u = l(150934),
    o = l(95477),
    d = l(821609),
    c = l(761508),
    m = l(890497),
    f = l(47167),
    h = l(713654),
    g = l(808728),
    x = l(994500),
    p = l(287809),
    v = l(948230),
    b = l(683180),
    j = l(783791),
    y = l(277977),
    k = l(972786),
    N = l(50617),
    w = l(375708),
    A = l(472781);
let E = { values: {}, secrets: {} };
function S(e) {
    let { projectId: t, scopeKeys: l, note: m, notifyAgent: f = !1, isPreview: h = !1, onSaved: g, children: x } = e,
        p = (0, r.bG)([y.Ay], () => y.Ay.getSettings(t)),
        [b, k] = a.useState(E),
        [S, I] = a.useState({}),
        [M, T] = a.useState(!1),
        [R, P] = a.useState(!1),
        _ = a.useCallback((e, t) => {
            (P(!1), k((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        L = a.useCallback((e, t) => {
            (P(!1), k((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        F = a.useMemo(() => p?.schema ?? [], [p]),
        D = a.useMemo(() => p?.values ?? {}, [p]),
        $ = a.useMemo(
            () =>
                (p?.secrets ?? []).map((e) => ({ ...e, def: F.find((t) => t.key === e.name && "secret" === t.type) })),
            [F, p],
        ),
        O = F.filter((e) => "secret" !== e.type),
        q = new Map($.map((e) => [e.name, e])),
        z = (l ?? []).filter((e) => O.some((t) => t.key === e) || q.has(e)),
        U = z.length > 0,
        B = z.some((e) => q.has(e)),
        G = !U && O.length > 0 && $.length > 0,
        V = O.length > 0 ? "settings" : "secrets",
        [W, H] = a.useState(null),
        K = G ? (W ?? V) : V,
        Y = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(b.values)) {
                let n = F.find((e) => e.key === t);
                null != n &&
                    l !== (D[t] ?? ("checkbox" !== n.type && "")) &&
                    (e[t] = "string" == typeof l && "" === l.trim() ? null : l);
            }
            let t = {};
            for (let [e, l] of Object.entries(b.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [b, F, D]),
        Q = null != Y.values || null != Y.secrets,
        X = a.useCallback(
            async (e) => {
                if ((e.preventDefault(), Q && !M)) {
                    (T(!0), P(!1));
                    try {
                        let { rebuildRequired: e } = await (0, y.nU)(t, Y);
                        (f || j.Ay.hasPendingSettingsRequest(t)
                            ? (0, y.dv)(t, w.intl.string(N.default.gqJFu0))
                            : e
                              ? (0, y.ss)(t)
                              : (0, v.Eo)(t),
                            k(E),
                            I({}),
                            await g?.());
                    } catch {
                        P(!0);
                    } finally {
                        T(!1);
                    }
                }
            },
            [Q, f, g, t, M, Y],
        );
    function Z(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? w.intl.string(N.default.xPxvYa) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function J(e) {
        let l = Z(e);
        if ("select" === e.type) {
            let t = b.values[e.key] ?? D[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: A._6,
                    children: [
                        (0, n.jsx)(i.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof t ? t : void 0,
                            onSelectionChange: (t) => _(e.key, t),
                            selectionMode: "single",
                            disabled: M,
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
            let t = b.values[e.key] ?? D[e.key];
            return (0, n.jsx)(
                u.S,
                { label: e.label, description: l, checked: !0 === t, onChange: (t) => _(e.key, t), disabled: M },
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
                      value: b.values[e.key] ?? D[e.key],
                      disabled: M,
                      onChange: (t) => _(e.key, t),
                      fallback: ee(e, l),
                  },
                  e.key,
              )
            : ee(e, l);
    }
    function ee(e, t) {
        let l = b.values[e.key] ?? D[e.key];
        return (0, n.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: "string" == typeof l ? l : "",
                onChange: (t) => _(e.key, t),
                disabled: M,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function et(e) {
        let t = e.def?.label ?? e.name,
            l = Z(e.def);
        return e.set && !0 !== S[e.name]
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
                              disabled: M,
                              onClick: () => I((t) => ({ ...t, [e.name]: !0 })),
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
                      value: b.secrets[e.name] ?? "",
                      onChange: (t) => L(e.name, t),
                      disabled: M,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let el = (0, n.jsxs)("div", {
        className: A.Ek,
        children: [
            null != m && "" !== m
                ? (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: m })
                : null,
            0 === O.length && 0 === $.length
                ? (0, n.jsx)(s.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: w.intl.string(N.default.URnN4B),
                  })
                : null,
            U
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          B
                              ? (0, n.jsx)(s.E, {
                                    variant: "text-xs/normal",
                                    color: "text-muted",
                                    selectable: !0,
                                    children: w.intl.string(N.default["Hl+eu7"]),
                                })
                              : null,
                          z.map(function (e) {
                              let t = q.get(e);
                              if (null != t) return et(t);
                              let l = O.find((t) => t.key === e);
                              return null == l ? null : J(l);
                          }),
                      ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          G
                              ? (0, n.jsxs)(c.V, {
                                    selectedItem: K,
                                    type: "top",
                                    onItemSelect: (e) => H(e),
                                    "aria-label": w.intl.string(N.default.Z0KiSp),
                                    children: [
                                        (0, n.jsx)(c.V.Item, {
                                            id: "settings",
                                            children: w.intl.formatToPlainString(N.default["/F078G"], {
                                                count: O.length,
                                            }),
                                        }),
                                        (0, n.jsx)(c.V.Item, {
                                            id: "secrets",
                                            children: w.intl.formatToPlainString(N.default.vlIHBJ, { count: $.length }),
                                        }),
                                    ],
                                })
                              : null,
                          "settings" === K
                              ? O.map(J)
                              : (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(s.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            selectable: !0,
                                            children: w.intl.string(N.default["Hl+eu7"]),
                                        }),
                                        $.map(et),
                                    ],
                                }),
                      ],
                  }),
            R
                ? (0, n.jsx)(s.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: w.intl.string(N.default.n02OEo),
                  })
                : null,
        ],
    });
    return (0, n.jsx)("form", { onSubmit: X, children: x({ fields: el, canSave: Q, saving: M, isScoped: U }) });
}
function C(e) {
    let { projectId: t, isPreview: l, def: a, hint: i, value: u, disabled: o, onChange: d, fallback: c } = e,
        v = (0, r.bG)([k.Ay], () => (0, b.t7)(k.Ay.getProject(t), l), [l, t]),
        j = (0, r.bG)([g.Ay], () => (null == v ? null : g.Ay.getChannels(v)), [v]);
    if (null == j) return c;
    let y = (0, b.qx)(j, a.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, f.m1)(e, p.default, x.A),
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
