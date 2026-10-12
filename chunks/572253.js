n.d(t, { A: () => k });
var l = n(477900),
    i = n(582128),
    a = n(17928),
    r = n(691885),
    u = n(834730),
    s = n(150934),
    o = n(95477),
    d = n(821609),
    c = n(289873),
    f = n(890497),
    p = n(245179),
    h = n(591277),
    g = n(300344),
    m = n(614733),
    b = n(904363),
    x = n(513845),
    v = n(442331),
    y = n(743082),
    A = n(950902),
    j = n(248675),
    C = n(660183),
    S = n(183265);
let w = { values: {}, secrets: {} };
function k(e) {
    let { projectId: t, scopeKeys: n, note: f, notifyAgent: g = !1, isPreview: m = !1, children: b } = e,
        A = (0, a.bG)([v.A], () => v.A.getSettings(t)),
        [k, M] = i.useState(w),
        [E, N] = i.useState({}),
        [P, _] = i.useState(!1),
        [R, L] = i.useState(!1),
        T = i.useCallback((e, t) => {
            (L(!1), M((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        F = i.useCallback((e, t) => {
            (L(!1), M((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        G = i.useMemo(() => A?.schema ?? [], [A]),
        D = i.useMemo(() => A?.values ?? {}, [A]),
        B = i.useMemo(
            () =>
                (A?.secrets ?? []).map((e) => ({ ...e, def: G.find((t) => t.key === e.name && "secret" === t.type) })),
            [G, A],
        ),
        W = G.filter((e) => "secret" !== e.type),
        O = new Map(B.map((e) => [e.name, e])),
        q = (n ?? []).filter((e) => W.some((t) => t.key === e) || O.has(e)),
        U = q.length > 0,
        z = q.some((e) => O.has(e)),
        $ = i.useMemo(() => {
            let e = {};
            for (let [n, l] of Object.entries(k.values)) {
                var t;
                let i = G.find((e) => e.key === n);
                if (null == i) continue;
                let a = (function (e, t) {
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
                void 0 === a ||
                    ((t = D[n] ?? ("checkbox" !== i.type && null)), JSON.stringify(a) === JSON.stringify(t)) ||
                    (e[n] = a);
            }
            let n = {};
            for (let [e, t] of Object.entries(k.secrets)) "" !== t.trim() && (n[e] = t.trim());
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
                })(G, n),
            };
        }, [k, G, D]),
        V = null != $.values || null != $.secrets,
        Q = i.useCallback(async () => {
            if (!V || P) return !0;
            (_(!0), L(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, $);
                return (
                    g || p.A.hasPendingSettingsRequest(t)
                        ? (0, h.dv)(t, C.intl.string(j.default["08bsJL"]))
                        : e
                          ? (0, y.ss)(t)
                          : (0, x.BD)(t),
                    M(w),
                    N({}),
                    !0
                );
            } catch {
                return (L(!0), !1);
            } finally {
                _(!1);
            }
        }, [V, g, t, P, $]);
    function Z(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? C.intl.string(j.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? C.intl.formatToPlainString(j.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function H(e) {
        let n = Z(e);
        if ("select" === e.type) {
            let t = k.values[e.key] ?? D[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: S._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => T(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: P,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => T(e.key, t),
                                  selectionMode: "single",
                                  disabled: P,
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
            let t = k.values[e.key] ?? D[e.key];
            return (0, l.jsx)(
                s.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => T(e.key, t), disabled: P },
                e.key,
            );
        }
        return "channel" === e.type || "role" === e.type || "user" === e.type
            ? (0, l.jsx)(
                  I,
                  {
                      projectId: t,
                      isPreview: m,
                      def: e,
                      hint: n,
                      value: k.values[e.key] ?? D[e.key],
                      disabled: P,
                      onChange: (t) => T(e.key, t),
                      fallback: X(e, n),
                  },
                  e.key,
              )
            : X(e, n);
    }
    function X(e, t) {
        let n = k.values[e.key] ?? D[e.key];
        return (0, l.jsx)(
            o.k,
            {
                label: e.label,
                helperText: t,
                name: e.key,
                autoComplete: "off",
                required: !0 === e.required,
                value: Array.isArray(n) ? n.join(", ") : null == n ? "" : String(n),
                onChange: (t) => T(e.key, t),
                disabled: P,
                fullWidth: !0,
                ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
            },
            e.key,
        );
    }
    function Y(e) {
        let t = e.def?.label ?? e.name,
            n = Z(e.def);
        return e.set && !0 !== E[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: S.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: S.DE,
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
                              text: C.intl.string(j.default.RsvBGf),
                              "aria-label": C.intl.formatToPlainString(j.default.WjoM7z, { label: t }),
                              disabled: P,
                              onClick: () => N((t) => ({ ...t, [e.name]: !0 })),
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
                      value: k.secrets[e.name] ?? "",
                      onChange: (t) => F(e.name, t),
                      disabled: P,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let J = R
            ? (0, l.jsx)(u.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: C.intl.string(j.default["A5TC+K"]),
              })
            : null,
        K = (0, l.jsxs)("div", {
            className: S.Ek,
            children: [
                null != f && "" !== f
                    ? (0, l.jsx)(u.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                    : null,
                null == A
                    ? (0, l.jsx)("div", { className: S.kZ, children: (0, l.jsx)(c.y, {}) })
                    : 0 === W.length && 0 === B.length
                      ? (0, l.jsx)(u.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: C.intl.string(j.default.lJJayk),
                        })
                      : null,
                null == A
                    ? null
                    : U
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                z
                                    ? (0, l.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: C.intl.string(j.default.dsHRPK),
                                      })
                                    : null,
                                q.map(function (e) {
                                    let t = O.get(e);
                                    if (null != t) return Y(t);
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
            className: S.Ek,
            children: [
                (0, l.jsx)(u.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: C.intl.string(j.default.dsHRPK),
                }),
                B.map(Y),
                J,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: b({
            fields: K,
            secretFields: ee,
            loaded: null != A,
            valueCount: W.length,
            secretCount: B.length,
            canSave: V,
            saving: P,
            isScoped: U,
            submit: Q,
        }),
    });
}
function M(e) {
    let {
            def: t,
            hint: n,
            value: i,
            disabled: a,
            onChange: r,
            options: s,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
        } = e,
        p = (0, A.TN)(i),
        h = {
            label: t.label,
            options: (0, A.Sj)(s, i, (e) => ({ id: e, value: e, label: e })),
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
            disabled: a,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, l.jsxs)("div", {
        className: S._6,
        children: [
            !0 === t.multiple
                ? (0, l.jsx)(f.Z, { ...h, selectionMode: "multiple", value: p, onSelectionChange: (e) => r(e ?? []) })
                : (0, l.jsx)(f.Z, { ...h, selectionMode: "single", value: p[0], onSelectionChange: (e) => r(e ?? "") }),
            null != n ? (0, l.jsx)(u.E, { variant: "text-xs/normal", color: "text-muted", children: n }) : null,
        ],
    });
}
function E(e) {
    let { guildId: t, fallback: n, ...i } = e,
        a = (0, g.A)(t, i.def.channel_filter);
    return null == a ? n : (0, l.jsx)(M, { ...i, options: a, placeholder: C.intl.string(j.default.iZIF9m) });
}
function N(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(M, { ...n, options: (0, b.A)(t) });
}
function P(e) {
    let { guildId: t, ...n } = e,
        { options: i, onQueryChange: a, matchSorterOptions: r } = (0, m.A)(t, (0, A.TN)(n.value));
    return (0, l.jsx)(M, { ...n, options: i, onQueryChange: a, matchSorterOptions: r });
}
function I(e) {
    let { projectId: t, isPreview: n, fallback: i, ...a } = e,
        r = (0, A.Tj)(t, n);
    if (null == r) return i;
    switch (a.def.type) {
        case "channel":
            return (0, l.jsx)(E, { ...a, guildId: r, fallback: i });
        case "role":
            return (0, l.jsx)(N, { ...a, guildId: r });
        default:
            return (0, l.jsx)(P, { ...a, guildId: r });
    }
}
