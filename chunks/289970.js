n.d(t, { A: () => E });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(691885),
    u = n(150934),
    s = n(103557),
    o = n(95477),
    d = n(834730),
    c = n(821609),
    f = n(289873),
    p = n(890497),
    h = n(300344),
    g = n(614733),
    m = n(904363),
    b = n(1665),
    x = n(442331),
    v = n(743082),
    y = n(245179),
    A = n(319481),
    j = n(248675),
    w = n(105292),
    k = n(950902),
    S = n(183265);
let C = { values: {}, secrets: {} };
function E(e) {
    let { projectId: t, scopeKeys: n, note: p, notifyAgent: h = !1, isPreview: g = !1, onSaved: m, children: k } = e,
        E = (0, r.bG)([x.A], () => x.A.getSettings(t)),
        [P, M] = i.useState(C),
        [N, _] = i.useState({}),
        [T, R] = i.useState(!1),
        [L, D] = i.useState(!1),
        U = i.useCallback((e, t) => {
            (D(!1), M((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        G = i.useCallback((e, t) => {
            (D(!1), M((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        O = i.useMemo(() => E?.schema ?? [], [E]),
        q = i.useMemo(() => E?.values ?? {}, [E]),
        F = i.useMemo(
            () =>
                (E?.secrets ?? []).map((e) => ({ ...e, def: O.find((t) => t.key === e.name && "secret" === t.type) })),
            [O, E],
        ),
        W = O.filter((e) => "secret" !== e.type),
        $ = new Map(F.map((e) => [e.name, e])),
        z = (n ?? []).filter((e) => W.some((t) => t.key === e) || $.has(e)),
        B = z.length > 0,
        V = z.some((e) => $.has(e)),
        H = i.useMemo(() => {
            let e = {};
            for (let [n, l] of Object.entries(P.values)) {
                var t;
                let i = O.find((e) => e.key === n);
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
                    ((t = q[n] ?? ("checkbox" !== i.type && null)), JSON.stringify(r) === JSON.stringify(t)) ||
                    (e[n] = r);
            }
            let n = {};
            for (let [e, t] of Object.entries(P.secrets)) "" !== t.trim() && (n[e] = t.trim());
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
                })(O, n),
            };
        }, [P, O, q]),
        Y = null != H.values || null != H.secrets,
        X = i.useCallback(async () => {
            if (!Y || T) return !0;
            (R(!0), D(!1));
            try {
                let { rebuildRequired: e } = await (0, v.nU)(t, H);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: n, notifyAgent: l } = t;
                        l || y.A.hasPendingSettingsRequest(e)
                            ? (0, A.sendUserMessage)(e, w.intl.string(j.default["08bsJL"]))
                            : n && (0, v.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: h }),
                    M(C),
                    _({}),
                    m?.(),
                    !0
                );
            } catch {
                return (D(!0), !1);
            } finally {
                R(!1);
            }
        }, [Y, h, m, t, T, H]);
    function Z(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? w.intl.string(j.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? w.intl.formatToPlainString(j.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function J(e) {
        let n = Z(e);
        if ("select" === e.type) {
            let t = P.values[e.key] ?? q[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: S._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => U(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: T,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => U(e.key, t),
                                  selectionMode: "single",
                                  disabled: T,
                                  fullWidth: !0,
                              }),
                        null != n ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = P.values[e.key] ?? q[e.key];
            return (0, l.jsxs)(
                "div",
                {
                    className: S._6,
                    children: [
                        (0, l.jsx)(u.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => U(e.key, t),
                            disabled: T,
                        }),
                        null != n ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        return "channel" === e.type || "role" === e.type || "user" === e.type
            ? (0, l.jsx)(
                  I,
                  {
                      projectId: t,
                      isPreview: g,
                      def: e,
                      hint: n,
                      value: P.values[e.key] ?? q[e.key],
                      disabled: T,
                      onChange: (t) => U(e.key, t),
                      fallback: Q(e, n),
                  },
                  e.key,
              )
            : Q(e, n);
    }
    function Q(e, t) {
        let n = P.values[e.key] ?? q[e.key];
        return !0 === e.multiline
            ? (0, l.jsx)(
                  s.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: !0 === e.required,
                      value: "string" == typeof n ? n : "",
                      onChange: (t) => U(e.key, t),
                      disabled: T,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  e.key,
              )
            : (0, l.jsxs)(
                  "div",
                  {
                      className: S._6,
                      children: [
                          (0, l.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: !0 === e.required,
                              value: Array.isArray(n) ? n.join(", ") : null == n ? "" : String(n),
                              onChange: (t) => U(e.key, t),
                              disabled: T,
                              fullWidth: !0,
                              ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                          }),
                          null != t
                              ? (0, l.jsx)(b.A, { text: t, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.key,
              );
    }
    function K(e) {
        let t = e.def?.label ?? e.name,
            n = Z(e.def);
        return e.set && !0 !== N[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: S.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: S.DE,
                              children: [
                                  (0, l.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != n
                                      ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" })
                                      : null,
                              ],
                          }),
                          (0, l.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              text: w.intl.string(j.default.RsvBGf),
                              "aria-label": w.intl.formatToPlainString(j.default.WjoM7z, { label: t }),
                              disabled: T,
                              onClick: () => _((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, l.jsxs)(
                  "div",
                  {
                      className: S._6,
                      children: [
                          (0, l.jsx)(o.k, {
                              label: t,
                              name: e.name,
                              type: "password",
                              autoComplete: "off",
                              placeholder: e.set
                                  ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                  : void 0,
                              required: e.def?.required === !0 && !e.set,
                              value: P.secrets[e.name] ?? "",
                              onChange: (t) => G(e.name, t),
                              disabled: T,
                              fullWidth: !0,
                          }),
                          null != n
                              ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.name,
              );
    }
    let ee = L
            ? (0, l.jsx)(d.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: w.intl.string(j.default["A5TC+K"]),
              })
            : null,
        et = (0, l.jsxs)("div", {
            className: S.Ek,
            children: [
                null != p && "" !== p
                    ? (0, l.jsx)(b.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                    : null,
                null == E
                    ? (0, l.jsx)("div", { className: S.kZ, children: (0, l.jsx)(f.y, {}) })
                    : 0 === W.length && 0 === F.length
                      ? (0, l.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: w.intl.string(j.default.lJJayk),
                        })
                      : null,
                null == E
                    ? null
                    : B
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                V
                                    ? (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: w.intl.string(j.default.dsHRPK),
                                      })
                                    : null,
                                z.map(function (e) {
                                    let t = $.get(e);
                                    if (null != t) return K(t);
                                    let n = W.find((t) => t.key === e);
                                    return null == n ? null : J(n);
                                }),
                            ],
                        })
                      : W.map(J),
                ee,
            ],
        }),
        en = (0, l.jsxs)("div", {
            className: S.Ek,
            children: [
                (0, l.jsx)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: w.intl.string(j.default.dsHRPK),
                }),
                F.map(K),
                ee,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: k({
            fields: et,
            secretFields: en,
            loaded: null != E,
            valueCount: W.length,
            secretCount: F.length,
            canSave: Y,
            saving: T,
            isScoped: B,
            submit: X,
        }),
    });
}
function P(e) {
    let {
            def: t,
            hint: n,
            value: i,
            disabled: r,
            onChange: a,
            options: u,
            placeholder: s,
            onQueryChange: o,
            matchSorterOptions: d,
        } = e,
        c = (0, k.TN)(i),
        f = (0, k.Sj)(u, i, (e) => ({ id: e, value: e, label: e })),
        h = {
            label: t.label,
            options: !0 === t.multiple ? (0, k.U5)(f, c) : f,
            placeholder: s,
            onQueryChange: o,
            matchSorterOptions: d,
            disabled: r,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, l.jsxs)("div", {
        className: S._6,
        children: [
            !0 === t.multiple
                ? (0, l.jsx)(p.Z, { ...h, selectionMode: "multiple", value: c, onSelectionChange: (e) => a(e ?? []) })
                : (0, l.jsx)(p.Z, { ...h, selectionMode: "single", value: c[0], onSelectionChange: (e) => a(e ?? "") }),
            null != n ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function M(e) {
    let { guildId: t, fallback: n, ...i } = e,
        r = (0, h.A)(t, i.def.channel_filter);
    return null == r ? n : (0, l.jsx)(P, { ...i, options: r, placeholder: w.intl.string(j.default.iZIF9m) });
}
function N(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(P, { ...n, options: (0, m.A)(t) });
}
function _(e) {
    let { guildId: t, ...n } = e,
        { options: i, onQueryChange: r, matchSorterOptions: a } = (0, g.A)(t, (0, k.TN)(n.value));
    return (0, l.jsx)(P, { ...n, options: i, onQueryChange: r, matchSorterOptions: a });
}
function I(e) {
    let { projectId: t, isPreview: n, fallback: i, ...r } = e,
        a = (0, k.Tj)(t, n);
    if (null == a) return i;
    switch (r.def.type) {
        case "channel":
            return (0, l.jsx)(M, { ...r, guildId: a, fallback: i });
        case "role":
            return (0, l.jsx)(N, { ...r, guildId: a });
        default:
            return (0, l.jsx)(_, { ...r, guildId: a });
    }
}
