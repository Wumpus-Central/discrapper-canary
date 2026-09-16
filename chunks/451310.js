l.d(t, { default: () => M });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    s = l(189213),
    r = l(691885),
    u = l(834730),
    d = l(150934),
    o = l(95477),
    c = l(821609),
    m = l(761508),
    h = l(890497),
    f = l(47167),
    x = l(713654),
    g = l(808728),
    v = l(994500),
    y = l(287809),
    b = l(948230),
    p = l(683180),
    k = l(783791),
    j = l(277977),
    C = l(972786),
    S = l(50617),
    E = l(375708),
    w = l(249154);
function M(e) {
    let {
            projectId: t,
            scopeKeys: l,
            note: h,
            notifyAgent: f = !1,
            isPreview: x = !1,
            transitionState: g,
            onClose: v,
        } = e,
        y = (0, i.bG)([j.Ay], () => j.Ay.getSettings(t)),
        [p, C] = a.useState({ values: {}, secrets: {} }),
        [M, q] = a.useState({}),
        [A, P] = a.useState(!1),
        [I, N] = a.useState(!1),
        _ = a.useCallback((e, t) => {
            (N(!1), C((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        F = a.useCallback((e, t) => {
            (N(!1), C((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        O = a.useMemo(() => y?.schema ?? [], [y]),
        z = a.useMemo(() => y?.values ?? {}, [y]),
        D = a.useMemo(
            () =>
                (y?.secrets ?? []).map((e) => ({ ...e, def: O.find((t) => t.key === e.name && "secret" === t.type) })),
            [O, y],
        ),
        G = O.filter((e) => "secret" !== e.type),
        W = new Map(D.map((e) => [e.name, e])),
        H = (l ?? []).filter((e) => G.some((t) => t.key === e) || W.has(e)),
        J = H.length > 0,
        U = H.some((e) => W.has(e)),
        V = !J && G.length > 0 && D.length > 0,
        B = G.length > 0 ? "settings" : "secrets",
        [R, Z] = a.useState(null),
        K = V ? (R ?? B) : B,
        Q = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(p.values)) {
                let n = O.find((e) => e.key === t);
                null != n &&
                    l !== (z[t] ?? ("checkbox" !== n.type && "")) &&
                    (e[t] = "string" == typeof l && "" === l.trim() ? null : l);
            }
            let t = {};
            for (let [e, l] of Object.entries(p.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [p, O, z]),
        Y = null != Q.values || null != Q.secrets,
        $ = a.useCallback(
            async (e) => {
                if ((e.preventDefault(), Y && !A)) {
                    (P(!0), N(!1));
                    try {
                        let { rebuildRequired: e } = await (0, j.nU)(t, Q);
                        (f || k.Ay.hasPendingSettingsRequest(t)
                            ? (0, j.dv)(t, E.intl.string(S.default.gqJFu0))
                            : e
                              ? (0, j.ss)(t)
                              : (0, b.Eo)(t),
                            await v());
                    } catch {
                        N(!0);
                    } finally {
                        P(!1);
                    }
                }
            },
            [Y, f, v, t, A, Q],
        );
    function L(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? E.intl.string(S.default.xPxvYa) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function X(e) {
        let l = L(e);
        if ("select" === e.type) {
            let t = p.values[e.key] ?? z[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: w._6,
                    children: [
                        (0, n.jsx)(r.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof t ? t : void 0,
                            onSelectionChange: (t) => _(e.key, t),
                            selectionMode: "single",
                            disabled: A,
                            fullWidth: !0,
                        }),
                        null != l
                            ? (0, n.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: l })
                            : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = p.values[e.key] ?? z[e.key];
            return (0, n.jsx)(
                d.S,
                { label: e.label, description: l, checked: !0 === t, onChange: (t) => _(e.key, t), disabled: A },
                e.key,
            );
        }
        return "channel" === e.type
            ? (0, n.jsx)(
                  T,
                  {
                      projectId: t,
                      isPreview: x,
                      def: e,
                      hint: l,
                      value: p.values[e.key] ?? z[e.key],
                      disabled: A,
                      onChange: (t) => _(e.key, t),
                      fallback: ee(e, l),
                  },
                  e.key,
              )
            : ee(e, l);
    }
    function ee(e, t) {
        let l = p.values[e.key] ?? z[e.key];
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
                disabled: A,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function et(e) {
        let t = e.def?.label ?? e.name,
            l = L(e.def);
        return e.set && !0 !== M[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: w.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: w.DE,
                              children: [
                                  (0, n.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, n.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != l
                                      ? (0, n.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: l })
                                      : null,
                              ],
                          }),
                          (0, n.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              text: E.intl.string(S.default.j6itec),
                              "aria-label": E.intl.formatToPlainString(S.default.cTofe2, { label: t }),
                              disabled: A,
                              onClick: () => q((t) => ({ ...t, [e.name]: !0 })),
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
                      onChange: (t) => F(e.name, t),
                      disabled: A,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    return (0, n.jsx)("form", {
        onSubmit: $,
        children: (0, n.jsx)(s.Modal, {
            transitionState: g,
            onClose: v,
            title: E.intl.string(J ? S.default.wgDhiQ : S.default.gTMvzD),
            size: "md",
            actions: [
                { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: v, disabled: A },
                { text: E.intl.string(S.default.Tuz9vw), variant: "primary", type: "submit", loading: A, disabled: !Y },
            ],
            children: (0, n.jsxs)("div", {
                className: w.Ek,
                children: [
                    null != h && "" !== h
                        ? (0, n.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: h,
                          })
                        : null,
                    0 === G.length && 0 === D.length
                        ? (0, n.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: E.intl.string(S.default.URnN4B),
                          })
                        : null,
                    J
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  U
                                      ? (0, n.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            selectable: !0,
                                            children: E.intl.string(S.default["Hl+eu7"]),
                                        })
                                      : null,
                                  H.map(function (e) {
                                      let t = W.get(e);
                                      if (null != t) return et(t);
                                      let l = G.find((t) => t.key === e);
                                      return null == l ? null : X(l);
                                  }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  V
                                      ? (0, n.jsxs)(m.V, {
                                            selectedItem: K,
                                            type: "top",
                                            onItemSelect: (e) => Z(e),
                                            "aria-label": E.intl.string(S.default.Z0KiSp),
                                            children: [
                                                (0, n.jsx)(m.V.Item, {
                                                    id: "settings",
                                                    children: E.intl.formatToPlainString(S.default["/F078G"], {
                                                        count: G.length,
                                                    }),
                                                }),
                                                (0, n.jsx)(m.V.Item, {
                                                    id: "secrets",
                                                    children: E.intl.formatToPlainString(S.default.vlIHBJ, {
                                                        count: D.length,
                                                    }),
                                                }),
                                            ],
                                        })
                                      : null,
                                  "settings" === K
                                      ? G.map(X)
                                      : (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    selectable: !0,
                                                    children: E.intl.string(S.default["Hl+eu7"]),
                                                }),
                                                D.map(et),
                                            ],
                                        }),
                              ],
                          }),
                    I
                        ? (0, n.jsx)(u.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: E.intl.string(S.default.n02OEo),
                          })
                        : null,
                ],
            }),
        }),
    });
}
function T(e) {
    let { projectId: t, isPreview: l, def: a, hint: s, value: r, disabled: d, onChange: o, fallback: c } = e,
        m = (0, i.bG)([C.Ay], () => (0, p.t7)(C.Ay.getProject(t), l), [l, t]),
        b = (0, i.bG)([g.Ay], () => (null == m ? null : g.Ay.getChannels(m)), [m]);
    if (null == b) return c;
    let k = (0, p.qx)(b, a.channel_filter).map((e) => ({
        id: e.id,
        value: e.id,
        label: (0, f.m1)(e, y.default, v.A),
        leading: (0, x.gU)(e),
    }));
    return (0, n.jsxs)("div", {
        className: w._6,
        children: [
            (0, n.jsx)(h.Z, {
                selectionMode: "single",
                clearable: !0,
                label: a.label,
                options: k,
                value: "string" == typeof r && "" !== r ? r : void 0,
                placeholder: E.intl.string(S.default.grukkJ),
                onSelectionChange: (e) => o(e ?? ""),
                disabled: d,
                fullWidth: !0,
            }),
            null != s ? (0, n.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: s }) : null,
        ],
    });
}
