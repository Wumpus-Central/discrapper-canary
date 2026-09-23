l.d(t, { A: () => C });
var n = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(691885),
    s = l(834730),
    u = l(150934),
    o = l(95477),
    d = l(821609),
    c = l(289873),
    m = l(761508),
    f = l(890497),
    h = l(47167),
    x = l(713654),
    g = l(808728),
    p = l(994500),
    v = l(287809),
    b = l(948230),
    j = l(683180),
    y = l(783791),
    k = l(277977),
    N = l(972786),
    w = l(50617),
    A = l(375708),
    E = l(472781);
let S = { values: {}, secrets: {} };
function C(e) {
    let { projectId: t, scopeKeys: l, note: f, notifyAgent: h = !1, isPreview: x = !1, onSaved: g, children: p } = e,
        v = (0, r.bG)([k.Ay], () => k.Ay.getSettings(t)),
        [j, N] = a.useState(S),
        [C, M] = a.useState({}),
        [T, R] = a.useState(!1),
        [P, _] = a.useState(!1),
        L = a.useCallback((e, t) => {
            (_(!1), N((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        F = a.useCallback((e, t) => {
            (_(!1), N((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        D = a.useMemo(() => v?.schema ?? [], [v]),
        $ = a.useMemo(() => v?.values ?? {}, [v]),
        O = a.useMemo(
            () =>
                (v?.secrets ?? []).map((e) => ({ ...e, def: D.find((t) => t.key === e.name && "secret" === t.type) })),
            [D, v],
        ),
        q = D.filter((e) => "secret" !== e.type),
        z = new Map(O.map((e) => [e.name, e])),
        U = (l ?? []).filter((e) => q.some((t) => t.key === e) || z.has(e)),
        B = U.length > 0,
        G = U.some((e) => z.has(e)),
        V = !B && q.length > 0 && O.length > 0,
        W = q.length > 0 ? "settings" : "secrets",
        [H, K] = a.useState(null),
        Y = V ? (H ?? W) : W,
        Q = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(j.values)) {
                let n = D.find((e) => e.key === t);
                null != n &&
                    l !== ($[t] ?? ("checkbox" !== n.type && "")) &&
                    (e[t] = "string" == typeof l && "" === l.trim() ? null : l);
            }
            let t = {};
            for (let [e, l] of Object.entries(j.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [j, D, $]),
        X = null != Q.values || null != Q.secrets,
        Z = a.useCallback(
            async (e) => {
                if ((e.preventDefault(), X && !T)) {
                    (R(!0), _(!1));
                    try {
                        let { rebuildRequired: e } = await (0, k.nU)(t, Q);
                        (h || y.Ay.hasPendingSettingsRequest(t)
                            ? (0, k.dv)(t, A.intl.string(w.default.gqJFu0))
                            : e
                              ? (0, k.ss)(t)
                              : (0, b.Eo)(t),
                            N(S),
                            M({}),
                            await g?.());
                    } catch {
                        _(!0);
                    } finally {
                        R(!1);
                    }
                }
            },
            [X, h, g, t, T, Q],
        );
    function J(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? A.intl.string(w.default.xPxvYa) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function ee(e) {
        let l = J(e);
        if ("select" === e.type) {
            let t = j.values[e.key] ?? $[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: E._6,
                    children: [
                        (0, n.jsx)(i.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof t ? t : void 0,
                            onSelectionChange: (t) => L(e.key, t),
                            selectionMode: "single",
                            disabled: T,
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
            let t = j.values[e.key] ?? $[e.key];
            return (0, n.jsx)(
                u.S,
                { label: e.label, description: l, checked: !0 === t, onChange: (t) => L(e.key, t), disabled: T },
                e.key,
            );
        }
        return "channel" === e.type
            ? (0, n.jsx)(
                  I,
                  {
                      projectId: t,
                      isPreview: x,
                      def: e,
                      hint: l,
                      value: j.values[e.key] ?? $[e.key],
                      disabled: T,
                      onChange: (t) => L(e.key, t),
                      fallback: et(e, l),
                  },
                  e.key,
              )
            : et(e, l);
    }
    function et(e, t) {
        let l = j.values[e.key] ?? $[e.key];
        return (0, n.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: "string" == typeof l ? l : "",
                onChange: (t) => L(e.key, t),
                disabled: T,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function el(e) {
        let t = e.def?.label ?? e.name,
            l = J(e.def);
        return e.set && !0 !== C[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: E.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: E.DE,
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
                              text: A.intl.string(w.default.j6itec),
                              "aria-label": A.intl.formatToPlainString(w.default.cTofe2, { label: t }),
                              disabled: T,
                              onClick: () => M((t) => ({ ...t, [e.name]: !0 })),
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
                      value: j.secrets[e.name] ?? "",
                      onChange: (t) => F(e.name, t),
                      disabled: T,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let en = (0, n.jsxs)("div", {
        className: E.Ek,
        children: [
            null != f && "" !== f
                ? (0, n.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                : null,
            null == v
                ? (0, n.jsx)("div", { className: E.kZ, children: (0, n.jsx)(c.y, {}) })
                : 0 === q.length && 0 === O.length
                  ? (0, n.jsx)(s.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: A.intl.string(w.default.URnN4B),
                    })
                  : null,
            null == v
                ? null
                : B
                  ? (0, n.jsxs)(n.Fragment, {
                        children: [
                            G
                                ? (0, n.jsx)(s.E, {
                                      variant: "text-xs/normal",
                                      color: "text-muted",
                                      selectable: !0,
                                      children: A.intl.string(w.default["Hl+eu7"]),
                                  })
                                : null,
                            U.map(function (e) {
                                let t = z.get(e);
                                if (null != t) return el(t);
                                let l = q.find((t) => t.key === e);
                                return null == l ? null : ee(l);
                            }),
                        ],
                    })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            V
                                ? (0, n.jsxs)(m.V, {
                                      selectedItem: Y,
                                      type: "top",
                                      onItemSelect: (e) => K(e),
                                      "aria-label": A.intl.string(w.default.Z0KiSp),
                                      children: [
                                          (0, n.jsx)(m.V.Item, {
                                              id: "settings",
                                              children: A.intl.formatToPlainString(w.default["/F078G"], {
                                                  count: q.length,
                                              }),
                                          }),
                                          (0, n.jsx)(m.V.Item, {
                                              id: "secrets",
                                              children: A.intl.formatToPlainString(w.default.vlIHBJ, {
                                                  count: O.length,
                                              }),
                                          }),
                                      ],
                                  })
                                : null,
                            "settings" === Y
                                ? q.map(ee)
                                : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)(s.E, {
                                              variant: "text-xs/normal",
                                              color: "text-muted",
                                              selectable: !0,
                                              children: A.intl.string(w.default["Hl+eu7"]),
                                          }),
                                          O.map(el),
                                      ],
                                  }),
                        ],
                    }),
            P
                ? (0, n.jsx)(s.E, {
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: A.intl.string(w.default.n02OEo),
                  })
                : null,
        ],
    });
    return (0, n.jsx)("form", { onSubmit: Z, children: p({ fields: en, canSave: X, saving: T, isScoped: B }) });
}
function I(e) {
    let { projectId: t, isPreview: l, def: a, hint: i, value: u, disabled: o, onChange: d, fallback: c } = e,
        m = (0, r.bG)([N.Ay], () => (0, j.t7)(N.Ay.getProject(t), l), [l, t]),
        b = (0, r.bG)([g.Ay], () => (null == m ? null : g.Ay.getChannels(m)), [m]);
    if (null == b) return c;
    let y = (0, j.qx)(b, a.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, h.m1)(e, v.default, p.A),
        leading: (0, x.gU)(e),
    }));
    return (0, n.jsxs)("div", {
        className: E._6,
        children: [
            (0, n.jsx)(f.Z, {
                selectionMode: "single",
                clearable: !0,
                label: a.label,
                options: y,
                value: "string" == typeof u && "" !== u ? u : void 0,
                placeholder: A.intl.string(w.default.grukkJ),
                onSelectionChange: (e) => d(e ?? ""),
                disabled: o,
                fullWidth: !0,
            }),
            null != i ? (0, n.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: i }) : null,
        ],
    });
}
