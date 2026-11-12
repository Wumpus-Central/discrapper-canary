l.d(t, { A: () => G });
var n = l(477900),
    a = l(582128),
    r = l(855986),
    i = l(691885),
    s = l(150934),
    o = l(103557),
    u = l(95477),
    d = l(834730),
    c = l(821609),
    f = l(289873),
    m = l(890497),
    p = l(300344),
    g = l(614733),
    v = l(904363),
    h = l(914250),
    x = l(442331),
    b = l(661095),
    y = l(743082);
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var k = l(513425),
    A = l(540665),
    w = l(191850),
    S = l(792996),
    C = l(950902),
    P = l(331322),
    E = l(782973);
l(321073);
var T = l(896170),
    N = l(273626),
    _ = l(644727),
    M = l(760751);
let I = ["label", "description"];
function L(e) {
    let t,
        l,
        i,
        { value: s, onChange: o, maxOptionsVisible: u = 6, ...d } = e,
        { allOptions: c, runningIds: f } =
            (a.useEffect(() => {
                N.A.getDetectableGames();
            }, []),
            (t = (0, r.bG)([M.A], () => M.A.games)),
            (l = (0, r.bG)([_.Ay], () =>
                _.Ay.getRunningGames()
                    .flatMap((e) => (null != e.id ? [e.id] : []))
                    .join(","),
            )),
            (i = a.useMemo(() => {
                let e = new Set(),
                    l = [];
                for (let n of t)
                    e.has(n.id) ||
                        (e.add(n.id),
                        l.push({
                            id: n.id,
                            value: n.id,
                            label: n.name,
                            description: n.aliases.length > 0 ? n.aliases.join(", ") : void 0,
                        }));
                return l;
            }, [t])),
            a.useMemo(() => ({ allOptions: i, runningIds: l.split(",") }), [i, l])),
        [p, g] = a.useState(""),
        v = a.useMemo(() => {
            let e, t, l, n;
            return (
                (e = new Set(s)),
                (l = new Set(
                    (t =
                        "" === p.trim()
                            ? c.filter((t) => e.has(t.value) || f.includes(t.value))
                            : (0, T.Ht)([...c], p, { keys: I }).slice(0, 50)).map((e) => e.value),
                )),
                (n = s
                    .filter((e) => !l.has(e))
                    .map((e) => c.find((t) => t.value === e) ?? { id: e, value: e, label: e })),
                (0, C.U5)([...t, ...n], s)
            );
        }, [c, p, f, s]);
    return (0, n.jsx)(m.Z, {
        ...d,
        selectionMode: "multiple",
        wrapTags: !0,
        fullWidth: !0,
        value: [...s],
        options: v,
        maxOptionsVisible: u,
        customMatchSorter: O,
        onQueryChange: (e) => g(e.target.value),
        onSelectionChange: (e) => {
            (g(""), o(e));
        },
    });
}
function O(e) {
    return e;
}
function U(e) {
    let { def: t, hint: l, value: r, pickingEmpty: i, disabled: o, onChange: u, onPickingEmptyChange: c } = e,
        f = a.useMemo(() => (Array.isArray(r) ? r : []), [r]),
        m = Array.isArray(r) && 0 === r.length && !i,
        p = a.useId(),
        g = t.key === E.B ? S.intl.string(w.default.cqWCNY) : (l ?? t.label);
    return (0, n.jsxs)(P.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, n.jsx)(d.E, { variant: "body-sm/normal", color: "text-default", children: g }),
            (0, n.jsx)(L, {
                label: t.label,
                hideLabel: !0,
                placeholder: S.intl.string(w.default["74Afoq"]),
                value: f,
                disabled: o,
                "aria-invalid": i,
                "aria-errormessage": i ? p : void 0,
                onChange: (e) => {
                    (c(0 === e.length), u(e));
                },
            }),
            i
                ? (0, n.jsx)(d.E, {
                      id: p,
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: S.intl.string(w.default["/++Pf+"]),
                  })
                : null,
            (0, n.jsx)(s.S, {
                label: S.intl.string(w.default.dbuk9m),
                checked: m,
                disabled: o,
                onChange: (e) => {
                    (c(!e), u([]));
                },
            }),
        ],
    });
}
var H = l(183265);
let z = { values: {}, secrets: {} };
function G(e) {
    let { projectId: t, scopeKeys: l, note: m, notifyAgent: p = !1, isPreview: g = !1, onSaved: v, children: C } = e,
        P = (0, r.bG)([x.A], () => x.A.getSettings(t)),
        [E, T] = a.useState(z),
        [N, _] = a.useState({}),
        [M, I] = a.useState(!1),
        [L, O] = a.useState(!1),
        [G, q] = a.useState({}),
        D = a.useCallback((e, t) => {
            q((l) => (l[e] === t ? l : { ...l, [e]: t }));
        }, []),
        R = a.useCallback((e, t) => {
            (O(!1), T((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        F = a.useCallback((e, t) => {
            (O(!1), T((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        B = a.useMemo(() => P?.schema ?? [], [P]),
        W = a.useMemo(() => P?.values ?? {}, [P]),
        K = a.useMemo(
            () =>
                (P?.secrets ?? []).map((e) => ({ ...e, def: B.find((t) => t.key === e.name && "secret" === t.type) })),
            [B, P],
        ),
        Q = B.filter((e) => "secret" !== e.type),
        V = new Map(K.map((e) => [e.name, e])),
        Z = (l ?? []).filter((e) => Q.some((t) => t.key === e) || V.has(e)),
        Y = Z.length > 0,
        J = Z.some((e) => V.has(e)),
        X = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(E.values)) {
                let n = B.find((e) => e.key === t);
                if (null == n) continue;
                let a = (0, b.Ui)(n, l);
                void 0 === a || (0, b.Nc)(a, (0, b.KZ)(n, W[t])) || (e[t] = a);
            }
            let t = {};
            for (let [e, l] of Object.entries(E.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return { ...(Object.keys(e).length > 0 ? { values: e } : {}), ...(0, b.mU)(B, t) };
        }, [E, B, W]),
        ee = B.some((e) => "game" === e.type && !0 === G[e.key]),
        et = (null != X.values || null != X.secrets) && !ee,
        el = a.useCallback(async () => {
            if (ee) return !1;
            if (!et || M) return !0;
            (I(!0), O(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, X);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: l, notifyAgent: n } = t;
                        n || k.A.hasPendingSettingsRequest(e)
                            ? (0, A.dv)(e, S.intl.string(w.default["08bsJL"]))
                            : l && (0, y.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: p }),
                    T(z),
                    _({}),
                    v?.(),
                    !0
                );
            } catch {
                return (O(!0), !1);
            } finally {
                I(!1);
            }
        }, [et, ee, p, v, t, M, X]);
    function en(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? S.intl.string(w.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? S.intl.formatToPlainString(w.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function ea(e) {
        let l = en(e);
        if ("select" === e.type) {
            let t = E.values[e.key] ?? W[e.key],
                a = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, n.jsxs)(
                "div",
                {
                    className: H._6,
                    children: [
                        !0 === e.multiple
                            ? (0, n.jsx)(i.l, {
                                  label: e.label,
                                  options: a,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => R(e.key, t),
                                  selectionMode: "multiple",
                                  wrapTags: !0,
                                  disabled: M,
                                  fullWidth: !0,
                              })
                            : (0, n.jsx)(i.l, {
                                  label: e.label,
                                  options: a,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => R(e.key, t),
                                  selectionMode: "single",
                                  disabled: M,
                                  fullWidth: !0,
                              }),
                        null != l ? (0, n.jsx)(h.A, { text: l, variant: "body-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = E.values[e.key] ?? W[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: H._6,
                    children: [
                        (0, n.jsx)(s.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => R(e.key, t),
                            disabled: M,
                        }),
                        null != l ? (0, n.jsx)(h.A, { text: l, variant: "body-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        return "game" === e.type
            ? (0, n.jsx)(
                  U,
                  {
                      def: e,
                      hint: l,
                      value: E.values[e.key] ?? W[e.key],
                      pickingEmpty: !0 === G[e.key],
                      disabled: M,
                      onChange: (t) => R(e.key, t),
                      onPickingEmptyChange: (t) => D(e.key, t),
                  },
                  e.key,
              )
            : "channel" === e.type || "role" === e.type || "user" === e.type
              ? (0, n.jsx)(
                    $,
                    {
                        projectId: t,
                        isPreview: g,
                        def: e,
                        hint: l,
                        value: E.values[e.key] ?? W[e.key],
                        disabled: M,
                        onChange: (t) => R(e.key, t),
                        fallback: er(e, l),
                    },
                    e.key,
                )
              : er(e, l);
    }
    function er(e, t) {
        let l = E.values[e.key] ?? W[e.key];
        return !0 === e.multiline
            ? (0, n.jsx)(
                  o.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: j(e),
                      value: "string" == typeof l ? l : "",
                      onChange: (t) => R(e.key, t),
                      disabled: M,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  e.key,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: H._6,
                      children: [
                          (0, n.jsx)(u.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: j(e),
                              value: Array.isArray(l) ? l.join(", ") : null == l ? "" : String(l),
                              onChange: (t) => R(e.key, t),
                              disabled: M,
                              fullWidth: !0,
                              ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                          }),
                          null != t
                              ? (0, n.jsx)(h.A, { text: t, variant: "body-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.key,
              );
    }
    function ei(e) {
        let t = e.def?.label ?? e.name,
            l = en(e.def);
        return e.set && !0 !== N[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: H.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: H.DE,
                              children: [
                                  (0, n.jsx)(d.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                                  (0, n.jsx)(d.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != l
                                      ? (0, n.jsx)(h.A, { text: l, variant: "body-xs/normal", color: "text-muted" })
                                      : null,
                              ],
                          }),
                          (0, n.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              text: S.intl.string(w.default.RsvBGf),
                              "aria-label": S.intl.formatToPlainString(w.default.WjoM7z, { label: t }),
                              disabled: M,
                              onClick: () => _((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: H._6,
                      children: [
                          (0, n.jsx)(u.k, {
                              label: t,
                              name: e.name,
                              type: "password",
                              autoComplete: "off",
                              placeholder: e.set
                                  ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                  : void 0,
                              required: j(e.def, e.set),
                              value: E.secrets[e.name] ?? "",
                              onChange: (t) => F(e.name, t),
                              disabled: M,
                              fullWidth: !0,
                          }),
                          null != l
                              ? (0, n.jsx)(h.A, { text: l, variant: "body-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.name,
              );
    }
    let es = L
            ? (0, n.jsx)(d.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(w.default["A5TC+K"]),
              })
            : null,
        eo = (0, n.jsxs)("div", {
            className: H.Ek,
            children: [
                null != m && "" !== m
                    ? (0, n.jsx)(h.A, { text: m, variant: "body-sm/normal", color: "text-default" })
                    : null,
                null == P
                    ? (0, n.jsx)("div", { className: H.kZ, children: (0, n.jsx)(f.y, {}) })
                    : 0 === Q.length && 0 === K.length
                      ? (0, n.jsx)(d.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(w.default.lJJayk),
                        })
                      : null,
                null == P
                    ? null
                    : Y
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                J
                                    ? (0, n.jsx)(d.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(w.default.dsHRPK),
                                      })
                                    : null,
                                Z.map(function (e) {
                                    let t = V.get(e);
                                    if (null != t) return ei(t);
                                    let l = Q.find((t) => t.key === e);
                                    return null == l ? null : ea(l);
                                }),
                            ],
                        })
                      : Q.map(ea),
                es,
            ],
        }),
        eu = (0, n.jsxs)("div", {
            className: H.Ek,
            children: [
                (0, n.jsx)(d.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(w.default.dsHRPK),
                }),
                K.map(ei),
                es,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
        children: C({
            fields: eo,
            secretFields: eu,
            loaded: null != P,
            valueCount: Q.length,
            secretCount: K.length,
            canSave: et,
            invalid: ee,
            saving: M,
            isScoped: Y,
            submit: el,
        }),
    });
}
function q(e) {
    let {
            def: t,
            hint: l,
            value: a,
            disabled: r,
            onChange: i,
            options: s,
            placeholder: o,
            onQueryChange: u,
            matchSorterOptions: d,
        } = e,
        c = (0, C.TN)(a),
        f = (0, C.Sj)(s, a, (e) => ({ id: e, value: e, label: e })),
        p = {
            label: t.label,
            options: !0 === t.multiple ? (0, C.U5)(f, c) : f,
            placeholder: o,
            onQueryChange: u,
            matchSorterOptions: d,
            disabled: r,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, n.jsxs)("div", {
        className: H._6,
        children: [
            !0 === t.multiple
                ? (0, n.jsx)(m.Z, {
                      ...p,
                      selectionMode: "multiple",
                      wrapTags: !0,
                      value: c,
                      onSelectionChange: (e) => i(e ?? []),
                  })
                : (0, n.jsx)(m.Z, { ...p, selectionMode: "single", value: c[0], onSelectionChange: (e) => i(e ?? "") }),
            null != l ? (0, n.jsx)(h.A, { text: l, variant: "body-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function D(e) {
    let { guildId: t, fallback: l, ...a } = e,
        r = (0, p.A)(t, a.def.channel_filter);
    return null == r ? l : (0, n.jsx)(q, { ...a, options: r, placeholder: S.intl.string(w.default.iZIF9m) });
}
function R(e) {
    let { guildId: t, ...l } = e;
    return (0, n.jsx)(q, { ...l, options: (0, v.A)(t) });
}
function F(e) {
    let { guildId: t, ...l } = e,
        { options: a, onQueryChange: r, matchSorterOptions: i } = (0, g.A)(t, (0, C.TN)(l.value));
    return (0, n.jsx)(q, { ...l, options: a, onQueryChange: r, matchSorterOptions: i });
}
function $(e) {
    let { projectId: t, isPreview: l, fallback: a, ...r } = e,
        i = (0, C.Tj)(t, l);
    if (null == i) return a;
    switch (r.def.type) {
        case "channel":
            return (0, n.jsx)(D, { ...r, guildId: i, fallback: a });
        case "role":
            return (0, n.jsx)(R, { ...r, guildId: i });
        default:
            return (0, n.jsx)(F, { ...r, guildId: i });
    }
}
