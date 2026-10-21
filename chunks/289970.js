n.d(t, { A: () => S });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(691885),
    u = n(834730),
    s = n(150934),
    o = n(95477),
    d = n(821609),
    c = n(289873),
    f = n(890497),
    p = n(300344),
    h = n(614733),
    g = n(904363),
    m = n(442331),
    b = n(743082),
    x = n(245179),
    v = n(319481),
    y = n(248675),
    A = n(105292),
    j = n(950902),
    w = n(183265);
let k = { values: {}, secrets: {} };
function S(e) {
    let { projectId: t, scopeKeys: n, note: f, notifyAgent: p = !1, isPreview: h = !1, children: g } = e,
        j = (0, r.bG)([m.A], () => m.A.getSettings(t)),
        [S, C] = i.useState(k),
        [P, M] = i.useState({}),
        [E, _] = i.useState(!1),
        [I, T] = i.useState(!1),
        L = i.useCallback((e, t) => {
            (T(!1), C((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        R = i.useCallback((e, t) => {
            (T(!1), C((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        D = i.useMemo(() => j?.schema ?? [], [j]),
        F = i.useMemo(() => j?.values ?? {}, [j]),
        G = i.useMemo(
            () =>
                (j?.secrets ?? []).map((e) => ({ ...e, def: D.find((t) => t.key === e.name && "secret" === t.type) })),
            [D, j],
        ),
        U = D.filter((e) => "secret" !== e.type),
        W = new Map(G.map((e) => [e.name, e])),
        q = (n ?? []).filter((e) => U.some((t) => t.key === e) || W.has(e)),
        O = q.length > 0,
        B = q.some((e) => W.has(e)),
        z = i.useMemo(() => {
            let e = {};
            for (let [n, l] of Object.entries(S.values)) {
                var t;
                let i = D.find((e) => e.key === n);
                if (null == i) continue;
                let r = (function (e, t) {
                    if ("number" === e.type) {
                        if ("number" == typeof t) return t;
                        let e = String(t).trim();
                        if ("" === e) return null;
                        let n = Number(e.replace(",", "."));
                        return Number.isFinite(n) ? n : void 0;
                    }
                    if (!0 === e.multiple) {
                        let e = Array.isArray(t)
                            ? t
                            : String(t)
                                  .split(/[\s,]+/)
                                  .filter((e) => "" !== e);
                        return 0 === e.length ? null : e;
                    }
                    return "string" == typeof t && "" === t.trim() ? null : t;
                })(i, l);
                void 0 === r ||
                    ((t = F[n] ?? ("checkbox" !== i.type && null)), JSON.stringify(r) === JSON.stringify(t)) ||
                    (e[n] = r);
            }
            let n = {};
            for (let [e, t] of Object.entries(S.secrets)) "" !== t.trim() && (n[e] = t.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(function (e, t) {
                    if (0 === Object.keys(t).length) return {};
                    let n = {};
                    for (let l of Object.keys(t)) {
                        let t = e.find((e) => e.key === l)?.hosts;
                        null != t && t.length > 0 && (n[l] = t);
                    }
                    return { secrets: t, ...(Object.keys(n).length > 0 ? { hosts: n } : {}) };
                })(D, n),
            };
        }, [S, D, F]),
        $ = null != z.values || null != z.secrets,
        V = i.useCallback(async () => {
            if (!$ || E) return !0;
            (_(!0), T(!1));
            try {
                let { rebuildRequired: e } = await (0, b.nU)(t, z);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: n, notifyAgent: l } = t;
                        l || x.A.hasPendingSettingsRequest(e)
                            ? (0, v.sendUserMessage)(e, A.intl.string(y.default["08bsJL"]))
                            : n && (0, b.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: p }),
                    C(k),
                    M({}),
                    !0
                );
            } catch {
                return (T(!0), !1);
            } finally {
                _(!1);
            }
        }, [$, p, t, E, z]);
    function Y(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? A.intl.string(y.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? A.intl.formatToPlainString(y.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function Z(e) {
        let n = Y(e);
        if ("select" === e.type) {
            let t = S.values[e.key] ?? F[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: w._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => L(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: E,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => L(e.key, t),
                                  selectionMode: "single",
                                  disabled: E,
                                  fullWidth: !0,
                              }),
                        null != n
                            ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                            : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = S.values[e.key] ?? F[e.key];
            return (0, l.jsx)(
                s.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => L(e.key, t), disabled: E },
                e.key,
            );
        }
        return "channel" === e.type || "role" === e.type || "user" === e.type
            ? (0, l.jsx)(
                  N,
                  {
                      projectId: t,
                      isPreview: h,
                      def: e,
                      hint: n,
                      value: S.values[e.key] ?? F[e.key],
                      disabled: E,
                      onChange: (t) => L(e.key, t),
                      fallback: H(e, n),
                  },
                  e.key,
              )
            : H(e, n);
    }
    function H(e, t) {
        let n = S.values[e.key] ?? F[e.key];
        return (0, l.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: Array.isArray(n) ? n.join(", ") : null == n ? "" : String(n),
                onChange: (t) => L(e.key, t),
                disabled: E,
                fullWidth: !0,
                ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
            },
            e.key,
        );
    }
    function X(e) {
        let t = e.def?.label ?? e.name,
            n = Y(e.def);
        return e.set && !0 !== P[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: w.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: w.DE,
                              children: [
                                  (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, l.jsx)(u.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != n
                                      ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: n })
                                      : null,
                              ],
                          }),
                          (0, l.jsx)(d.$, {
                              variant: "secondary",
                              size: "sm",
                              text: A.intl.string(y.default.RsvBGf),
                              "aria-label": A.intl.formatToPlainString(y.default.WjoM7z, { label: t }),
                              disabled: E,
                              onClick: () => M((t) => ({ ...t, [e.name]: !0 })),
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
                      value: S.secrets[e.name] ?? "",
                      onChange: (t) => R(e.name, t),
                      disabled: E,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let Q = I
            ? (0, l.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: A.intl.string(y.default["A5TC+K"]),
              })
            : null,
        J = (0, l.jsxs)("div", {
            className: w.Ek,
            children: [
                null != f && "" !== f
                    ? (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                    : null,
                null == j
                    ? (0, l.jsx)("div", { className: w.kZ, children: (0, l.jsx)(c.y, {}) })
                    : 0 === U.length && 0 === G.length
                      ? (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(y.default.lJJayk),
                        })
                      : null,
                null == j
                    ? null
                    : O
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                B
                                    ? (0, l.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: A.intl.string(y.default.dsHRPK),
                                      })
                                    : null,
                                q.map(function (e) {
                                    let t = W.get(e);
                                    if (null != t) return X(t);
                                    let n = U.find((t) => t.key === e);
                                    return null == n ? null : Z(n);
                                }),
                            ],
                        })
                      : U.map(Z),
                Q,
            ],
        }),
        K = (0, l.jsxs)("div", {
            className: w.Ek,
            children: [
                (0, l.jsx)(u.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: A.intl.string(y.default.dsHRPK),
                }),
                G.map(X),
                Q,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: g({
            fields: J,
            secretFields: K,
            loaded: null != j,
            valueCount: U.length,
            secretCount: G.length,
            canSave: $,
            saving: E,
            isScoped: O,
            submit: V,
        }),
    });
}
function C(e) {
    let {
            def: t,
            hint: n,
            value: i,
            disabled: r,
            onChange: a,
            options: s,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
        } = e,
        p = (0, j.TN)(i),
        h = (0, j.Sj)(s, i, (e) => ({ id: e, value: e, label: e })),
        g = {
            label: t.label,
            options: !0 === t.multiple ? (0, j.U5)(h, p) : h,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
            disabled: r,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, l.jsxs)("div", {
        className: w._6,
        children: [
            !0 === t.multiple
                ? (0, l.jsx)(f.Z, { ...g, selectionMode: "multiple", value: p, onSelectionChange: (e) => a(e ?? []) })
                : (0, l.jsx)(f.Z, { ...g, selectionMode: "single", value: p[0], onSelectionChange: (e) => a(e ?? "") }),
            null != n ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: n }) : null,
        ],
    });
}
function P(e) {
    let { guildId: t, fallback: n, ...i } = e,
        r = (0, p.A)(t, i.def.channel_filter);
    return null == r ? n : (0, l.jsx)(C, { ...i, options: r, placeholder: A.intl.string(y.default.iZIF9m) });
}
function M(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(C, { ...n, options: (0, g.A)(t) });
}
function E(e) {
    let { guildId: t, ...n } = e,
        { options: i, onQueryChange: r, matchSorterOptions: a } = (0, h.A)(t, (0, j.TN)(n.value));
    return (0, l.jsx)(C, { ...n, options: i, onQueryChange: r, matchSorterOptions: a });
}
function N(e) {
    let { projectId: t, isPreview: n, fallback: i, ...r } = e,
        a = (0, j.Tj)(t, n);
    if (null == a) return i;
    switch (r.def.type) {
        case "channel":
            return (0, l.jsx)(P, { ...r, guildId: a, fallback: i });
        case "role":
            return (0, l.jsx)(M, { ...r, guildId: a });
        default:
            return (0, l.jsx)(E, { ...r, guildId: a });
    }
}
