l.d(t, { default: () => y });
var n = l(477900),
    a = l(582128),
    s = l(17928),
    i = l(189213),
    r = l(691885),
    u = l(834730),
    d = l(150934),
    o = l(95477),
    c = l(821609),
    m = l(761508),
    h = l(948230),
    x = l(783791),
    f = l(998939),
    g = l(295813),
    v = l(375708),
    p = l(249154);
function y(e) {
    let { projectId: t, scopeKeys: l, note: y, notifyAgent: b = !1, transitionState: k, onClose: j } = e,
        S = (0, s.bG)([f.Ay], () => f.Ay.getSettings(t)),
        [C, E] = a.useState({ values: {}, secrets: {} }),
        [T, w] = a.useState({}),
        [M, q] = a.useState(!1),
        [F, I] = a.useState(!1),
        N = a.useCallback((e, t) => {
            I(!1), E((l) => ({ ...l, values: { ...l.values, [e]: t } }));
        }, []),
        O = a.useCallback((e, t) => {
            I(!1), E((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } }));
        }, []),
        P = a.useMemo(() => S?.schema ?? [], [S]),
        z = a.useMemo(() => S?.values ?? {}, [S]),
        D = a.useMemo(
            () =>
                (S?.secrets ?? []).map((e) => ({ ...e, def: P.find((t) => t.key === e.name && "secret" === t.type) })),
            [P, S],
        ),
        _ = P.filter((e) => "secret" !== e.type),
        A = new Map(D.map((e) => [e.name, e])),
        H = (l ?? []).filter((e) => _.some((t) => t.key === e) || A.has(e)),
        V = H.length > 0,
        W = H.some((e) => A.has(e)),
        B = !V && _.length > 0 && D.length > 0,
        G = _.length > 0 ? "settings" : "secrets",
        [J, R] = a.useState(null),
        U = B ? (J ?? G) : G,
        K = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(C.values)) {
                let n = P.find((e) => e.key === t);
                null != n &&
                    l !== (z[t] ?? ("checkbox" !== n.type && "")) &&
                    (e[t] = "string" == typeof l && "" === l.trim() ? null : l);
            }
            let t = {};
            for (let [e, l] of Object.entries(C.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(t).length > 0 ? { secrets: t } : {}),
            };
        }, [C, P, z]),
        Q = null != K.values || null != K.secrets,
        Y = a.useCallback(
            async (e) => {
                if ((e.preventDefault(), Q && !M)) {
                    q(!0), I(!1);
                    try {
                        let { rebuildRequired: e } = await (0, f.nU)(t, K);
                        b || x.Ay.hasPendingSettingsRequest(t)
                            ? (0, f.dv)(t, v.intl.string(g.default.gqJFu0))
                            : e
                              ? (0, f.ss)(t)
                              : (0, h.Eo)(t),
                            await j();
                    } catch {
                        I(!0);
                    } finally {
                        q(!1);
                    }
                }
            },
            [Q, b, j, t, M, K],
        );
    function Z(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? v.intl.string(g.default.xPxvYa) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function $(e) {
        let t = Z(e);
        if ("select" === e.type) {
            let l = C.values[e.key] ?? z[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: p._6,
                    children: [
                        (0, n.jsx)(r.l, {
                            label: e.label,
                            options: (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value })),
                            value: "string" == typeof l ? l : void 0,
                            onSelectionChange: (t) => N(e.key, t),
                            selectionMode: "single",
                            disabled: M,
                            fullWidth: !0,
                        }),
                        null != t
                            ? (0, n.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: t })
                            : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let l = C.values[e.key] ?? z[e.key];
            return (0, n.jsx)(
                d.S,
                { label: e.label, description: t, checked: !0 === l, onChange: (t) => N(e.key, t), disabled: M },
                e.key,
            );
        }
        let l = C.values[e.key] ?? z[e.key];
        return (0, n.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: "string" == typeof l ? l : "",
                onChange: (t) => N(e.key, t),
                disabled: M,
                fullWidth: !0,
            },
            e.key,
        );
    }
    function L(e) {
        let t = e.def?.label ?? e.name,
            l = Z(e.def);
        return e.set && !0 !== T[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: p.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: p.DE,
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
                              text: v.intl.string(g.default.j6itec),
                              "aria-label": v.intl.formatToPlainString(g.default.cTofe2, { label: t }),
                              disabled: M,
                              onClick: () => w((t) => ({ ...t, [e.name]: !0 })),
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
                      value: C.secrets[e.name] ?? "",
                      onChange: (t) => O(e.name, t),
                      disabled: M,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    return (0, n.jsx)("form", {
        onSubmit: Y,
        children: (0, n.jsx)(i.Modal, {
            transitionState: k,
            onClose: j,
            title: v.intl.string(V ? g.default.wgDhiQ : g.default.gTMvzD),
            size: "md",
            actions: [
                { text: v.intl.string(v.t["ETE/oC"]), variant: "secondary", onClick: j, disabled: M },
                { text: v.intl.string(g.default.Tuz9vw), variant: "primary", type: "submit", loading: M, disabled: !Q },
            ],
            children: (0, n.jsxs)("div", {
                className: p.Ek,
                children: [
                    null != y && "" !== y
                        ? (0, n.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-default",
                              selectable: !0,
                              children: y,
                          })
                        : null,
                    0 === _.length && 0 === D.length
                        ? (0, n.jsx)(u.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children: v.intl.string(g.default.URnN4B),
                          })
                        : null,
                    V
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  W
                                      ? (0, n.jsx)(u.E, {
                                            variant: "text-xs/normal",
                                            color: "text-muted",
                                            selectable: !0,
                                            children: v.intl.string(g.default["Hl+eu7"]),
                                        })
                                      : null,
                                  H.map(function (e) {
                                      let t = A.get(e);
                                      if (null != t) return L(t);
                                      let l = _.find((t) => t.key === e);
                                      return null == l ? null : $(l);
                                  }),
                              ],
                          })
                        : (0, n.jsxs)(n.Fragment, {
                              children: [
                                  B
                                      ? (0, n.jsxs)(m.V, {
                                            selectedItem: U,
                                            type: "top",
                                            onItemSelect: (e) => R(e),
                                            "aria-label": v.intl.string(g.default.Z0KiSp),
                                            children: [
                                                (0, n.jsx)(m.V.Item, {
                                                    id: "settings",
                                                    children: v.intl.formatToPlainString(g.default["/F078G"], {
                                                        count: _.length,
                                                    }),
                                                }),
                                                (0, n.jsx)(m.V.Item, {
                                                    id: "secrets",
                                                    children: v.intl.formatToPlainString(g.default.vlIHBJ, {
                                                        count: D.length,
                                                    }),
                                                }),
                                            ],
                                        })
                                      : null,
                                  "settings" === U
                                      ? _.map($)
                                      : (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(u.E, {
                                                    variant: "text-xs/normal",
                                                    color: "text-muted",
                                                    selectable: !0,
                                                    children: v.intl.string(g.default["Hl+eu7"]),
                                                }),
                                                D.map(L),
                                            ],
                                        }),
                              ],
                          }),
                    F
                        ? (0, n.jsx)(u.E, {
                              variant: "text-xs/normal",
                              color: "text-feedback-critical",
                              role: "alert",
                              children: v.intl.string(g.default.n02OEo),
                          })
                        : null,
                ],
            }),
        }),
    });
}
