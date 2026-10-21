n.d(t, { A: () => C });
var l = n(477900),
    i = n(582128),
    r = n(17928),
    a = n(691885),
    u = n(834730),
    s = n(150934),
    o = n(103557),
    d = n(95477),
    c = n(821609),
    f = n(289873),
    p = n(890497),
    h = n(300344),
    g = n(614733),
    m = n(904363),
    b = n(442331),
    x = n(743082),
    v = n(245179),
    y = n(319481),
    A = n(248675),
    j = n(105292),
    w = n(950902),
    k = n(183265);
let S = { values: {}, secrets: {} };
function C(e) {
    let { projectId: t, scopeKeys: n, note: p, notifyAgent: h = !1, isPreview: g = !1, children: m } = e,
        w = (0, r.bG)([b.A], () => b.A.getSettings(t)),
        [C, P] = i.useState(S),
        [M, E] = i.useState({}),
        [N, I] = i.useState(!1),
        [T, R] = i.useState(!1),
        L = i.useCallback((e, t) => {
            (R(!1), P((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        D = i.useCallback((e, t) => {
            (R(!1), P((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        F = i.useMemo(() => w?.schema ?? [], [w]),
        G = i.useMemo(() => w?.values ?? {}, [w]),
        U = i.useMemo(
            () =>
                (w?.secrets ?? []).map((e) => ({ ...e, def: F.find((t) => t.key === e.name && "secret" === t.type) })),
            [F, w],
        ),
        W = F.filter((e) => "secret" !== e.type),
        q = new Map(U.map((e) => [e.name, e])),
        O = (n ?? []).filter((e) => W.some((t) => t.key === e) || q.has(e)),
        B = O.length > 0,
        z = O.some((e) => q.has(e)),
        $ = i.useMemo(() => {
            let e = {};
            for (let [n, l] of Object.entries(C.values)) {
                var t;
                let i = F.find((e) => e.key === n);
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
                    ((t = G[n] ?? ("checkbox" !== i.type && null)), JSON.stringify(r) === JSON.stringify(t)) ||
                    (e[n] = r);
            }
            let n = {};
            for (let [e, t] of Object.entries(C.secrets)) "" !== t.trim() && (n[e] = t.trim());
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
                })(F, n),
            };
        }, [C, F, G]),
        V = null != $.values || null != $.secrets,
        Y = i.useCallback(async () => {
            if (!V || N) return !0;
            (I(!0), R(!1));
            try {
                let { rebuildRequired: e } = await (0, x.nU)(t, $);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: n, notifyAgent: l } = t;
                        l || v.A.hasPendingSettingsRequest(e)
                            ? (0, y.sendUserMessage)(e, j.intl.string(A.default["08bsJL"]))
                            : n && (0, x.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: h }),
                    P(S),
                    E({}),
                    !0
                );
            } catch {
                return (R(!0), !1);
            } finally {
                I(!1);
            }
        }, [V, h, t, N, $]);
    function Z(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? j.intl.string(A.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? j.intl.formatToPlainString(A.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function H(e) {
        let n = Z(e);
        if ("select" === e.type) {
            let t = C.values[e.key] ?? G[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: k._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => L(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: N,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => L(e.key, t),
                                  selectionMode: "single",
                                  disabled: N,
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
            let t = C.values[e.key] ?? G[e.key];
            return (0, l.jsx)(
                s.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => L(e.key, t), disabled: N },
                e.key,
            );
        }
        return "channel" === e.type || "role" === e.type || "user" === e.type
            ? (0, l.jsx)(
                  _,
                  {
                      projectId: t,
                      isPreview: g,
                      def: e,
                      hint: n,
                      value: C.values[e.key] ?? G[e.key],
                      disabled: N,
                      onChange: (t) => L(e.key, t),
                      fallback: X(e, n),
                  },
                  e.key,
              )
            : X(e, n);
    }
    function X(e, t) {
        let n = C.values[e.key] ?? G[e.key];
        return !0 === e.multiline
            ? (0, l.jsx)(
                  o.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: !0 === e.required,
                      value: "string" == typeof n ? n : "",
                      onChange: (t) => L(e.key, t),
                      disabled: N,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  e.key,
              )
            : (0, l.jsx)(
                  d.k,
                  {
                      label: e.label,
                      helperText: t,
                      name: e.key,
                      autoComplete: "off",
                      required: !0 === e.required,
                      value: Array.isArray(n) ? n.join(", ") : null == n ? "" : String(n),
                      onChange: (t) => L(e.key, t),
                      disabled: N,
                      fullWidth: !0,
                      ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                  },
                  e.key,
              );
    }
    function Q(e) {
        let t = e.def?.label ?? e.name,
            n = Z(e.def);
        return e.set && !0 !== M[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: k.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: k.DE,
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
                          (0, l.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              text: j.intl.string(A.default.RsvBGf),
                              "aria-label": j.intl.formatToPlainString(A.default.WjoM7z, { label: t }),
                              disabled: N,
                              onClick: () => E((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, l.jsx)(
                  d.k,
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
                      value: C.secrets[e.name] ?? "",
                      onChange: (t) => D(e.name, t),
                      disabled: N,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let J = T
            ? (0, l.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: j.intl.string(A.default["A5TC+K"]),
              })
            : null,
        K = (0, l.jsxs)("div", {
            className: k.Ek,
            children: [
                null != p && "" !== p
                    ? (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: p })
                    : null,
                null == w
                    ? (0, l.jsx)("div", { className: k.kZ, children: (0, l.jsx)(f.y, {}) })
                    : 0 === W.length && 0 === U.length
                      ? (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: j.intl.string(A.default.lJJayk),
                        })
                      : null,
                null == w
                    ? null
                    : B
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                z
                                    ? (0, l.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: j.intl.string(A.default.dsHRPK),
                                      })
                                    : null,
                                O.map(function (e) {
                                    let t = q.get(e);
                                    if (null != t) return Q(t);
                                    let n = W.find((t) => t.key === e);
                                    return null == n ? null : H(n);
                                }),
                            ],
                        })
                      : W.map(H),
                J,
            ],
        }),
        ee = (0, l.jsxs)("div", {
            className: k.Ek,
            children: [
                (0, l.jsx)(u.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: j.intl.string(A.default.dsHRPK),
                }),
                U.map(Q),
                J,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: m({
            fields: K,
            secretFields: ee,
            loaded: null != w,
            valueCount: W.length,
            secretCount: U.length,
            canSave: V,
            saving: N,
            isScoped: B,
            submit: Y,
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
            options: s,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
        } = e,
        f = (0, w.TN)(i),
        h = (0, w.Sj)(s, i, (e) => ({ id: e, value: e, label: e })),
        g = {
            label: t.label,
            options: !0 === t.multiple ? (0, w.U5)(h, f) : h,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
            disabled: r,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, l.jsxs)("div", {
        className: k._6,
        children: [
            !0 === t.multiple
                ? (0, l.jsx)(p.Z, { ...g, selectionMode: "multiple", value: f, onSelectionChange: (e) => a(e ?? []) })
                : (0, l.jsx)(p.Z, { ...g, selectionMode: "single", value: f[0], onSelectionChange: (e) => a(e ?? "") }),
            null != n ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: n }) : null,
        ],
    });
}
function M(e) {
    let { guildId: t, fallback: n, ...i } = e,
        r = (0, h.A)(t, i.def.channel_filter);
    return null == r ? n : (0, l.jsx)(P, { ...i, options: r, placeholder: j.intl.string(A.default.iZIF9m) });
}
function E(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(P, { ...n, options: (0, m.A)(t) });
}
function N(e) {
    let { guildId: t, ...n } = e,
        { options: i, onQueryChange: r, matchSorterOptions: a } = (0, g.A)(t, (0, w.TN)(n.value));
    return (0, l.jsx)(P, { ...n, options: i, onQueryChange: r, matchSorterOptions: a });
}
function _(e) {
    let { projectId: t, isPreview: n, fallback: i, ...r } = e,
        a = (0, w.Tj)(t, n);
    if (null == a) return i;
    switch (r.def.type) {
        case "channel":
            return (0, l.jsx)(M, { ...r, guildId: a, fallback: i });
        case "role":
            return (0, l.jsx)(E, { ...r, guildId: a });
        default:
            return (0, l.jsx)(N, { ...r, guildId: a });
    }
}
