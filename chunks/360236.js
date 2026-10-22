n.d(t, { A: () => P });
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
    v = n(442331),
    x = n(743082);
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var A = n(245179),
    j = n(319481),
    w = n(248675),
    S = n(105292),
    k = n(950902),
    C = n(183265);
let E = { values: {}, secrets: {} };
function P(e) {
    let { projectId: t, scopeKeys: n, note: p, notifyAgent: h = !1, isPreview: g = !1, onSaved: m, children: k } = e,
        P = (0, r.bG)([v.A], () => v.A.getSettings(t)),
        [M, _] = i.useState(E),
        [N, I] = i.useState({}),
        [L, R] = i.useState(!1),
        [D, G] = i.useState(!1),
        U = i.useCallback((e, t) => {
            (G(!1), _((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        O = i.useCallback((e, t) => {
            (G(!1), _((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        F = i.useMemo(() => P?.schema ?? [], [P]),
        q = i.useMemo(() => P?.values ?? {}, [P]),
        W = i.useMemo(
            () =>
                (P?.secrets ?? []).map((e) => ({ ...e, def: F.find((t) => t.key === e.name && "secret" === t.type) })),
            [F, P],
        ),
        $ = F.filter((e) => "secret" !== e.type),
        z = new Map(W.map((e) => [e.name, e])),
        B = (n ?? []).filter((e) => $.some((t) => t.key === e) || z.has(e)),
        V = B.length > 0,
        H = B.some((e) => z.has(e)),
        Z = i.useMemo(() => {
            let e = {};
            for (let [n, l] of Object.entries(M.values)) {
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
                    ((t = q[n] ?? ("checkbox" !== i.type && null)), JSON.stringify(r) === JSON.stringify(t)) ||
                    (e[n] = r);
            }
            let n = {};
            for (let [e, t] of Object.entries(M.secrets)) "" !== t.trim() && (n[e] = t.trim());
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
        }, [M, F, q]),
        Q = null != Z.values || null != Z.secrets,
        Y = i.useCallback(async () => {
            if (!Q || L) return !0;
            (R(!0), G(!1));
            try {
                let { rebuildRequired: e } = await (0, x.nU)(t, Z);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: n, notifyAgent: l } = t;
                        l || A.A.hasPendingSettingsRequest(e)
                            ? (0, j.sendUserMessage)(e, S.intl.string(w.default["08bsJL"]))
                            : n && (0, x.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: h }),
                    _(E),
                    I({}),
                    m?.(),
                    !0
                );
            } catch {
                return (G(!0), !1);
            } finally {
                R(!1);
            }
        }, [Q, h, m, t, L, Z]);
    function X(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? S.intl.string(w.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? S.intl.formatToPlainString(w.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function J(e) {
        let n = X(e);
        if ("select" === e.type) {
            let t = M.values[e.key] ?? q[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: C._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => U(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: L,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(a.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => U(e.key, t),
                                  selectionMode: "single",
                                  disabled: L,
                                  fullWidth: !0,
                              }),
                        null != n ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = M.values[e.key] ?? q[e.key];
            return (0, l.jsxs)(
                "div",
                {
                    className: C._6,
                    children: [
                        (0, l.jsx)(u.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => U(e.key, t),
                            disabled: L,
                        }),
                        null != n ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        return "channel" === e.type || "role" === e.type || "user" === e.type
            ? (0, l.jsx)(
                  T,
                  {
                      projectId: t,
                      isPreview: g,
                      def: e,
                      hint: n,
                      value: M.values[e.key] ?? q[e.key],
                      disabled: L,
                      onChange: (t) => U(e.key, t),
                      fallback: K(e, n),
                  },
                  e.key,
              )
            : K(e, n);
    }
    function K(e, t) {
        let n = M.values[e.key] ?? q[e.key];
        return !0 === e.multiline
            ? (0, l.jsx)(
                  s.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: y(e),
                      value: "string" == typeof n ? n : "",
                      onChange: (t) => U(e.key, t),
                      disabled: L,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  e.key,
              )
            : (0, l.jsxs)(
                  "div",
                  {
                      className: C._6,
                      children: [
                          (0, l.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: y(e),
                              value: Array.isArray(n) ? n.join(", ") : null == n ? "" : String(n),
                              onChange: (t) => U(e.key, t),
                              disabled: L,
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
    function ee(e) {
        let t = e.def?.label ?? e.name,
            n = X(e.def);
        return e.set && !0 !== N[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: C.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: C.DE,
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
                              text: S.intl.string(w.default.RsvBGf),
                              "aria-label": S.intl.formatToPlainString(w.default.WjoM7z, { label: t }),
                              disabled: L,
                              onClick: () => I((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, l.jsxs)(
                  "div",
                  {
                      className: C._6,
                      children: [
                          (0, l.jsx)(o.k, {
                              label: t,
                              name: e.name,
                              type: "password",
                              autoComplete: "off",
                              placeholder: e.set
                                  ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                  : void 0,
                              required: y(e.def, e.set),
                              value: M.secrets[e.name] ?? "",
                              onChange: (t) => O(e.name, t),
                              disabled: L,
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
    let et = D
            ? (0, l.jsx)(d.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(w.default["A5TC+K"]),
              })
            : null,
        en = (0, l.jsxs)("div", {
            className: C.Ek,
            children: [
                null != p && "" !== p
                    ? (0, l.jsx)(b.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                    : null,
                null == P
                    ? (0, l.jsx)("div", { className: C.kZ, children: (0, l.jsx)(f.y, {}) })
                    : 0 === $.length && 0 === W.length
                      ? (0, l.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(w.default.lJJayk),
                        })
                      : null,
                null == P
                    ? null
                    : V
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                H
                                    ? (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(w.default.dsHRPK),
                                      })
                                    : null,
                                B.map(function (e) {
                                    let t = z.get(e);
                                    if (null != t) return ee(t);
                                    let n = $.find((t) => t.key === e);
                                    return null == n ? null : J(n);
                                }),
                            ],
                        })
                      : $.map(J),
                et,
            ],
        }),
        el = (0, l.jsxs)("div", {
            className: C.Ek,
            children: [
                (0, l.jsx)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(w.default.dsHRPK),
                }),
                W.map(ee),
                et,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: k({
            fields: en,
            secretFields: el,
            loaded: null != P,
            valueCount: $.length,
            secretCount: W.length,
            canSave: Q,
            saving: L,
            isScoped: V,
            submit: Y,
        }),
    });
}
function M(e) {
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
        className: C._6,
        children: [
            !0 === t.multiple
                ? (0, l.jsx)(p.Z, { ...h, selectionMode: "multiple", value: c, onSelectionChange: (e) => a(e ?? []) })
                : (0, l.jsx)(p.Z, { ...h, selectionMode: "single", value: c[0], onSelectionChange: (e) => a(e ?? "") }),
            null != n ? (0, l.jsx)(b.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function _(e) {
    let { guildId: t, fallback: n, ...i } = e,
        r = (0, h.A)(t, i.def.channel_filter);
    return null == r ? n : (0, l.jsx)(M, { ...i, options: r, placeholder: S.intl.string(w.default.iZIF9m) });
}
function N(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(M, { ...n, options: (0, m.A)(t) });
}
function I(e) {
    let { guildId: t, ...n } = e,
        { options: i, onQueryChange: r, matchSorterOptions: a } = (0, g.A)(t, (0, k.TN)(n.value));
    return (0, l.jsx)(M, { ...n, options: i, onQueryChange: r, matchSorterOptions: a });
}
function T(e) {
    let { projectId: t, isPreview: n, fallback: i, ...r } = e,
        a = (0, k.Tj)(t, n);
    if (null == a) return i;
    switch (r.def.type) {
        case "channel":
            return (0, l.jsx)(_, { ...r, guildId: a, fallback: i });
        case "role":
            return (0, l.jsx)(N, { ...r, guildId: a });
        default:
            return (0, l.jsx)(I, { ...r, guildId: a });
    }
}
