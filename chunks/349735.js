n.d(t, { A: () => E });
var l = n(477900),
    r = n(582128),
    a = n(17928),
    i = n(691885),
    s = n(834730),
    u = n(150934),
    o = n(95477),
    d = n(821609),
    c = n(289873),
    f = n(890497),
    h = n(47167),
    m = n(713654),
    p = n(808728),
    x = n(994500),
    g = n(287809),
    v = n(948230),
    b = n(683180),
    y = n(783791),
    k = n(277977),
    j = n(972786),
    M = n(759967),
    A = n(375708),
    C = n(472781);
let w = { values: {}, secrets: {} };
function E(e) {
    let { projectId: t, scopeKeys: n, note: f, notifyAgent: h = !1, isPreview: m = !1, children: p } = e,
        x = (0, a.bG)([k.Ay], () => k.Ay.getSettings(t)),
        [g, b] = r.useState(w),
        [j, E] = r.useState({}),
        [L, N] = r.useState(!1),
        [W, R] = r.useState(!1),
        I = r.useCallback((e, t) => {
            (R(!1), b((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        P = r.useCallback((e, t) => {
            (R(!1), b((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        q = r.useMemo(() => x?.schema ?? [], [x]),
        F = r.useMemo(() => x?.values ?? {}, [x]),
        $ = r.useMemo(
            () =>
                (x?.secrets ?? []).map((e) => ({ ...e, def: q.find((t) => t.key === e.name && "secret" === t.type) })),
            [q, x],
        ),
        B = q.filter((e) => "secret" !== e.type),
        O = new Map($.map((e) => [e.name, e])),
        z = (n ?? []).filter((e) => B.some((t) => t.key === e) || O.has(e)),
        G = z.length > 0,
        T = z.some((e) => O.has(e)),
        D = r.useMemo(() => {
            let e = {};
            for (let [t, n] of Object.entries(g.values)) {
                let l = q.find((e) => e.key === t);
                null != l &&
                    n !== (F[t] ?? ("checkbox" !== l.type && "")) &&
                    (e[t] = "string" == typeof n && "" === n.trim() ? null : n);
            }
            let t = {};
            for (let [e, n] of Object.entries(g.secrets)) "" !== n.trim() && (t[e] = n.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [g, q, F]),
        _ = null != D.values || null != D.secrets,
        V = r.useCallback(async () => {
            if (!_ || L) return !0;
            (N(!0), R(!1));
            try {
                let { rebuildRequired: e } = await (0, k.nU)(t, D);
                return (
                    h || y.Ay.hasPendingSettingsRequest(t)
                        ? (0, k.dv)(t, A.intl.string(M.default.gqJFu0))
                        : e
                          ? (0, k.ss)(t)
                          : (0, v.Eo)(t),
                    b(w),
                    E({}),
                    !0
                );
            } catch {
                return (R(!0), !1);
            } finally {
                N(!1);
            }
        }, [_, h, t, L, D]);
    function X(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? A.intl.string(M.default.xPxvYa) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function H(e) {
        let n = X(e);
        if ("select" === e.type) {
            let t = g.values[e.key] ?? F[e.key];
            return (0, l.jsxs)(
                "div",
                {
                    className: C._6,
                    children: [
                        (0, l.jsx)(i.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof t ? t : void 0,
                            onSelectionChange: (t) => I(e.key, t),
                            selectionMode: "single",
                            disabled: L,
                            fullWidth: !0,
                        }),
                        null != n
                            ? (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                            : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = g.values[e.key] ?? F[e.key];
            return (0, l.jsx)(
                u.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => I(e.key, t), disabled: L },
                e.key,
            );
        }
        return "channel" === e.type
            ? (0, l.jsx)(
                  S,
                  {
                      projectId: t,
                      isPreview: m,
                      def: e,
                      hint: n,
                      value: g.values[e.key] ?? F[e.key],
                      disabled: L,
                      onChange: (t) => I(e.key, t),
                      fallback: U(e, n),
                  },
                  e.key,
              )
            : U(e, n);
    }
    function U(e, t) {
        let n = g.values[e.key] ?? F[e.key];
        return (0, l.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: "string" == typeof n ? n : "",
                onChange: (t) => I(e.key, t),
                disabled: L,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function J(e) {
        let t = e.def?.label ?? e.name,
            n = X(e.def);
        return e.set && !0 !== j[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: C.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: C.DE,
                              children: [
                                  (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, l.jsx)(s.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != n
                                      ? (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                                      : null,
                              ],
                          }),
                          (0, l.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              text: A.intl.string(M.default.j6itec),
                              "aria-label": A.intl.formatToPlainString(M.default.cTofe2, { label: t }),
                              disabled: L,
                              onClick: () => E((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, l.jsx)(
                  o.k,
                  {
                      label: t,
                      helperText: n,
                      name: e.name,
                      type: "password",
                      autoComplete: "off",
                      placeholder: e.set
                          ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                          : void 0,
                      required: e.def?.required === !0 && !e.set,
                      value: g.secrets[e.name] ?? "",
                      onChange: (t) => P(e.name, t),
                      disabled: L,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let Q = W
            ? (0, l.jsx)(s.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: A.intl.string(M.default.n02OEo),
              })
            : null,
        Y = (0, l.jsxs)("div", {
            className: C.Ek,
            children: [
                null != f && "" !== f
                    ? (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                    : null,
                null == x
                    ? (0, l.jsx)("div", { className: C.kZ, children: (0, l.jsx)(c.y, {}) })
                    : 0 === B.length && 0 === $.length
                      ? (0, l.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(M.default.URnN4B),
                        })
                      : null,
                null == x
                    ? null
                    : G
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                T
                                    ? (0, l.jsx)(s.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: A.intl.string(M.default["Hl+eu7"]),
                                      })
                                    : null,
                                z.map(function (e) {
                                    let t = O.get(e);
                                    if (null != t) return J(t);
                                    let n = B.find((t) => t.key === e);
                                    return null == n ? null : H(n);
                                }),
                            ],
                        })
                      : B.map(H),
                Q,
            ],
        }),
        Z = (0, l.jsxs)("div", {
            className: C.Ek,
            children: [
                (0, l.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: A.intl.string(M.default["Hl+eu7"]),
                }),
                $.map(J),
                Q,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: p({
            fields: Y,
            secretFields: Z,
            loaded: null != x,
            valueCount: B.length,
            secretCount: $.length,
            canSave: _,
            saving: L,
            isScoped: G,
            submit: V,
        }),
    });
}
function S(e) {
    let { projectId: t, isPreview: n, def: r, hint: i, value: u, disabled: o, onChange: d, fallback: c } = e,
        v = (0, a.bG)([j.Ay], () => (0, b.t7)(j.Ay.getProject(t), n), [n, t]),
        y = (0, a.bG)([p.Ay], () => (null == v ? null : p.Ay.getChannels(v)), [v]);
    if (null == y) return c;
    let k = (0, b.qx)(y, r.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, h.m1)(e, g.default, x.A),
        leading: (0, m.gU)(e),
    }));
    return (0, l.jsxs)("div", {
        className: C._6,
        children: [
            (0, l.jsx)(f.Z, {
                selectionMode: "single",
                clearable: !0,
                label: r.label,
                options: k,
                value: "string" == typeof u && "" !== u ? u : void 0,
                placeholder: A.intl.string(M.default.grukkJ),
                onSelectionChange: (e) => d(e ?? ""),
                disabled: o,
                fullWidth: !0,
            }),
            null != i ? (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: i }) : null,
        ],
    });
}
