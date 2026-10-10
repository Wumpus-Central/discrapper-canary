n.d(t, { A: () => S });
var l = n(477900),
    i = n(582128),
    a = n(17928),
    r = n(691885),
    s = n(834730),
    u = n(150934),
    o = n(95477),
    d = n(821609),
    c = n(289873),
    f = n(890497),
    p = n(245179),
    h = n(712808),
    g = n(300344),
    m = n(614733),
    b = n(904363),
    v = n(371169),
    x = n(950902),
    y = n(248675),
    A = n(660183),
    j = n(183265);
let C = { values: {}, secrets: {} };
function S(e) {
    let { projectId: t, scopeKeys: n, note: f, notifyAgent: g = !1, isPreview: m = !1, children: b } = e,
        x = (0, a.bG)([h.Ay], () => h.Ay.getSettings(t)),
        [S, k] = i.useState(C),
        [w, M] = i.useState({}),
        [P, E] = i.useState(!1),
        [I, _] = i.useState(!1),
        R = i.useCallback((e, t) => {
            (_(!1), k((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        L = i.useCallback((e, t) => {
            (_(!1), k((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        O = i.useMemo(() => x?.schema ?? [], [x]),
        F = i.useMemo(() => x?.values ?? {}, [x]),
        G = i.useMemo(
            () =>
                (x?.secrets ?? []).map((e) => ({ ...e, def: O.find((t) => t.key === e.name && "secret" === t.type) })),
            [O, x],
        ),
        B = O.filter((e) => "secret" !== e.type),
        T = new Map(G.map((e) => [e.name, e])),
        W = (n ?? []).filter((e) => B.some((t) => t.key === e) || T.has(e)),
        U = W.length > 0,
        q = W.some((e) => T.has(e)),
        D = i.useMemo(() => {
            let e = {};
            for (let [n, l] of Object.entries(S.values)) {
                var t;
                let i = O.find((e) => e.key === n);
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
                    ((t = F[n] ?? ("checkbox" !== i.type && null)), JSON.stringify(a) === JSON.stringify(t)) ||
                    (e[n] = a);
            }
            let n = {};
            for (let [e, t] of Object.entries(S.secrets)) "" !== t.trim() && (n[e] = t.trim());
            return {
                ...(Object.keys(e).length > 0 ? { values: e } : {}),
                ...(Object.keys(n).length > 0 ? { secrets: n } : {}),
            };
        }, [S, O, F]),
        z = null != D.values || null != D.secrets,
        Q = i.useCallback(async () => {
            if (!z || P) return !0;
            (E(!0), _(!1));
            try {
                let { rebuildRequired: e } = await (0, h.nU)(t, D);
                return (
                    g || p.Ay.hasPendingSettingsRequest(t)
                        ? (0, h.dv)(t, A.intl.string(y.default["08bsJL"]))
                        : e
                          ? (0, h.ss)(t)
                          : (0, v.BD)(t),
                    k(C),
                    M({}),
                    !0
                );
            } catch {
                return (_(!0), !1);
            } finally {
                E(!1);
            }
        }, [z, g, t, P, D]);
    function V(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? A.intl.string(y.default["4kCM6H"]) : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function $(e) {
        let n = V(e);
        if ("select" === e.type) {
            let t = S.values[e.key] ?? F[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: j._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => R(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: P,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => R(e.key, t),
                                  selectionMode: "single",
                                  disabled: P,
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
            let t = S.values[e.key] ?? F[e.key];
            return (0, l.jsx)(
                u.S,
                { label: e.label, description: n, checked: !0 === t, onChange: (t) => R(e.key, t), disabled: P },
                e.key,
            );
        }
        return "channel" === e.type || "role" === e.type || "user" === e.type
            ? (0, l.jsx)(
                  N,
                  {
                      projectId: t,
                      isPreview: m,
                      def: e,
                      hint: n,
                      value: S.values[e.key] ?? F[e.key],
                      disabled: P,
                      onChange: (t) => R(e.key, t),
                      fallback: X(e, n),
                  },
                  e.key,
              )
            : X(e, n);
    }
    function X(e, t) {
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
                onChange: (t) => R(e.key, t),
                disabled: P,
                fullWidth: !0,
                ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
            },
            e.key,
        );
    }
    function Z(e) {
        let t = e.def?.label ?? e.name,
            n = V(e.def);
        return e.set && !0 !== w[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: j.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: j.DE,
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
                              text: A.intl.string(y.default.RsvBGf),
                              "aria-label": A.intl.formatToPlainString(y.default.WjoM7z, { label: t }),
                              disabled: P,
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
                      onChange: (t) => L(e.name, t),
                      disabled: P,
                      fullWidth: !0,
                  },
                  e.name,
              );
    }
    let H = I
            ? (0, l.jsx)(s.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: A.intl.string(y.default["A5TC+K"]),
              })
            : null,
        Y = (0, l.jsxs)("div", {
            className: j.Ek,
            children: [
                null != f && "" !== f
                    ? (0, l.jsx)(s.E, { variant: "text-sm/normal", color: "text-default", selectable: !0, children: f })
                    : null,
                null == x
                    ? (0, l.jsx)("div", { className: j.kZ, children: (0, l.jsx)(c.y, {}) })
                    : 0 === B.length && 0 === G.length
                      ? (0, l.jsx)(s.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: A.intl.string(y.default.lJJayk),
                        })
                      : null,
                null == x
                    ? null
                    : U
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                q
                                    ? (0, l.jsx)(s.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: A.intl.string(y.default.dsHRPK),
                                      })
                                    : null,
                                W.map(function (e) {
                                    let t = T.get(e);
                                    if (null != t) return Z(t);
                                    let n = B.find((t) => t.key === e);
                                    return null == n ? null : $(n);
                                }),
                            ],
                        })
                      : B.map($),
                H,
            ],
        }),
        J = (0, l.jsxs)("div", {
            className: j.Ek,
            children: [
                (0, l.jsx)(s.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: A.intl.string(y.default.dsHRPK),
                }),
                G.map(Z),
                H,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: b({
            fields: Y,
            secretFields: J,
            loaded: null != x,
            valueCount: B.length,
            secretCount: G.length,
            canSave: z,
            saving: P,
            isScoped: U,
            submit: Q,
        }),
    });
}
function k(e) {
    let {
            def: t,
            hint: n,
            value: i,
            disabled: a,
            onChange: r,
            options: u,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
        } = e,
        p = (0, x.TN)(i),
        h = {
            label: t.label,
            options: (0, x.Sj)(u, i, (e) => ({ id: e, value: e, label: e })),
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
            disabled: a,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, l.jsxs)("div", {
        className: j._6,
        children: [
            !0 === t.multiple
                ? (0, l.jsx)(f.Z, { ...h, selectionMode: "multiple", value: p, onSelectionChange: (e) => r(e ?? []) })
                : (0, l.jsx)(f.Z, { ...h, selectionMode: "single", value: p[0], onSelectionChange: (e) => r(e ?? "") }),
            null != n ? (0, l.jsx)(s.E, { variant: "text-xs/normal", color: "text-muted", children: n }) : null,
        ],
    });
}
function w(e) {
    let { guildId: t, fallback: n, ...i } = e,
        a = (0, g.A)(t, i.def.channel_filter);
    return null == a ? n : (0, l.jsx)(k, { ...i, options: a, placeholder: A.intl.string(y.default.iZIF9m) });
}
function M(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(k, { ...n, options: (0, b.A)(t) });
}
function P(e) {
    let { guildId: t, ...n } = e,
        { options: i, onQueryChange: a, matchSorterOptions: r } = (0, m.A)(t, (0, x.TN)(n.value));
    return (0, l.jsx)(k, { ...n, options: i, onQueryChange: a, matchSorterOptions: r });
}
function N(e) {
    let { projectId: t, isPreview: n, fallback: i, ...a } = e,
        r = (0, x.Tj)(t, n);
    if (null == r) return i;
    switch (a.def.type) {
        case "channel":
            return (0, l.jsx)(w, { ...a, guildId: r, fallback: i });
        case "role":
            return (0, l.jsx)(M, { ...a, guildId: r });
        default:
            return (0, l.jsx)(P, { ...a, guildId: r });
    }
}
