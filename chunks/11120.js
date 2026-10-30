l.d(t, { A: () => G });
var n = l(477900),
    a = l(582128),
    r = l(17928),
    i = l(691885),
    s = l(150934),
    u = l(103557),
    o = l(95477),
    d = l(834730),
    c = l(821609),
    f = l(289873),
    m = l(890497),
    g = l(300344),
    h = l(614733),
    p = l(904363),
    x = l(1665),
    v = l(442331),
    b = l(661095),
    y = l(743082);
function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var k = l(245179),
    A = l(322227),
    C = l(87501),
    S = l(105292),
    E = l(950902),
    T = l(331322),
    w = l(782973);
l(321073);
var M = l(896170),
    P = l(452295),
    N = l(952818),
    _ = l(760751);
let U = ["label", "description"];
function I(e) {
    let { value: t, onChange: l, maxOptionsVisible: i = 6, ...s } = e;
    a.useEffect(() => {
        P.A.getDetectableGames();
    }, []);
    let u = (0, r.bG)([_.A], () => _.A.games),
        o = (0, r.bG)([N.Ay], () =>
            N.Ay.getRunningGames()
                .flatMap((e) => (null != e.id ? [e.id] : []))
                .join(","),
        ),
        [d, c] = a.useState(""),
        f = a.useMemo(() => {
            let e = new Set(),
                t = [];
            for (let l of u)
                e.has(l.id) ||
                    (e.add(l.id),
                    t.push({
                        id: l.id,
                        value: l.id,
                        label: l.name,
                        description: l.aliases.length > 0 ? l.aliases.join(", ") : void 0,
                    }));
            return t;
        }, [u]),
        g = a.useMemo(() => {
            var e, l, n, a;
            let r, i, s, u;
            return (
                (e = f),
                (l = d),
                (n = o.split(",")),
                (r = new Set((a = t))),
                (s = new Set(
                    (i =
                        "" === l.trim()
                            ? e.filter((e) => r.has(e.value) || n.includes(e.value))
                            : (0, M.Ht)([...e], l, { keys: U }).slice(0, 50)).map((e) => e.value),
                )),
                (u = a
                    .filter((e) => !s.has(e))
                    .map((t) => e.find((e) => e.value === t) ?? { id: t, value: t, label: t })),
                (0, E.U5)([...i, ...u], a)
            );
        }, [f, d, o, t]);
    return (0, n.jsx)(m.Z, {
        ...s,
        selectionMode: "multiple",
        wrapTags: !0,
        fullWidth: !0,
        value: [...t],
        options: g,
        maxOptionsVisible: i,
        customMatchSorter: q,
        onQueryChange: (e) => c(e.target.value),
        onSelectionChange: (e) => {
            (c(""), l(e));
        },
    });
}
function q(e) {
    return e;
}
function R(e) {
    let { def: t, hint: l, value: r, pickingEmpty: i, disabled: u, onChange: o, onPickingEmptyChange: c } = e,
        f = a.useMemo(() => (Array.isArray(r) ? r : []), [r]),
        m = Array.isArray(r) && 0 === r.length && !i,
        g = a.useId(),
        h = t.key === w.B ? S.intl.string(C.default.cqWCNY) : (l ?? t.label);
    return (0, n.jsxs)(T.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, n.jsx)(d.E, { variant: "text-sm/normal", color: "text-default", children: h }),
            (0, n.jsx)(I, {
                label: t.label,
                hideLabel: !0,
                placeholder: S.intl.string(C.default["74Afoq"]),
                value: f,
                disabled: u,
                "aria-invalid": i,
                "aria-errormessage": i ? g : void 0,
                onChange: (e) => {
                    (c(0 === e.length), o(e));
                },
            }),
            i
                ? (0, n.jsx)(d.E, {
                      id: g,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: S.intl.string(C.default["/++Pf+"]),
                  })
                : null,
            (0, n.jsx)(s.S, {
                label: S.intl.string(C.default.dbuk9m),
                checked: m,
                disabled: u,
                onChange: (e) => {
                    (c(!e), o([]));
                },
            }),
        ],
    });
}
var z = l(183265);
let D = { values: {}, secrets: {} };
function G(e) {
    let { projectId: t, scopeKeys: l, note: m, notifyAgent: g = !1, isPreview: h = !1, onSaved: p, children: E } = e,
        T = (0, r.bG)([v.A], () => v.A.getSettings(t)),
        [w, M] = a.useState(D),
        [P, N] = a.useState({}),
        [_, U] = a.useState(!1),
        [I, q] = a.useState(!1),
        [G, O] = a.useState({}),
        L = a.useCallback((e, t) => {
            O((l) => (l[e] === t ? l : { ...l, [e]: t }));
        }, []),
        $ = a.useCallback((e, t) => {
            (q(!1), M((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        W = a.useCallback((e, t) => {
            (q(!1), M((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        B = a.useMemo(() => T?.schema ?? [], [T]),
        H = a.useMemo(() => T?.values ?? {}, [T]),
        V = a.useMemo(
            () =>
                (T?.secrets ?? []).map((e) => ({ ...e, def: B.find((t) => t.key === e.name && "secret" === t.type) })),
            [B, T],
        ),
        K = B.filter((e) => "secret" !== e.type),
        Z = new Map(V.map((e) => [e.name, e])),
        Y = (l ?? []).filter((e) => K.some((t) => t.key === e) || Z.has(e)),
        Q = Y.length > 0,
        J = Y.some((e) => Z.has(e)),
        X = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(w.values)) {
                let n = B.find((e) => e.key === t);
                if (null == n) continue;
                let a = (0, b.Ui)(n, l);
                void 0 === a || (0, b.Nc)(a, (0, b.KZ)(n, H[t])) || (e[t] = a);
            }
            let t = {};
            for (let [e, l] of Object.entries(w.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return { ...(Object.keys(e).length > 0 ? { values: e } : {}), ...(0, b.mU)(B, t) };
        }, [w, B, H]),
        ee = B.some((e) => "game" === e.type && !0 === G[e.key]),
        et = (null != X.values || null != X.secrets) && !ee,
        el = a.useCallback(async () => {
            if (ee) return !1;
            if (!et || _) return !0;
            (U(!0), q(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, X);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: l, notifyAgent: n } = t;
                        n || k.A.hasPendingSettingsRequest(e)
                            ? (0, A.sendUserMessage)(e, S.intl.string(C.default["08bsJL"]))
                            : l && (0, y.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: g }),
                    M(D),
                    N({}),
                    p?.(),
                    !0
                );
            } catch {
                return (q(!0), !1);
            } finally {
                U(!1);
            }
        }, [et, ee, g, p, t, _, X]);
    function en(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? S.intl.string(C.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? S.intl.formatToPlainString(C.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function ea(e) {
        let l = en(e);
        if ("select" === e.type) {
            let t = w.values[e.key] ?? H[e.key],
                a = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, n.jsxs)(
                "div",
                {
                    className: z._6,
                    children: [
                        !0 === e.multiple
                            ? (0, n.jsx)(i.l, {
                                  label: e.label,
                                  options: a,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => $(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: _,
                                  fullWidth: !0,
                              })
                            : (0, n.jsx)(i.l, {
                                  label: e.label,
                                  options: a,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => $(e.key, t),
                                  selectionMode: "single",
                                  disabled: _,
                                  fullWidth: !0,
                              }),
                        null != l ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = w.values[e.key] ?? H[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: z._6,
                    children: [
                        (0, n.jsx)(s.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => $(e.key, t),
                            disabled: _,
                        }),
                        null != l ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        return "game" === e.type
            ? (0, n.jsx)(
                  R,
                  {
                      def: e,
                      hint: l,
                      value: w.values[e.key] ?? H[e.key],
                      pickingEmpty: !0 === G[e.key],
                      disabled: _,
                      onChange: (t) => $(e.key, t),
                      onPickingEmptyChange: (t) => L(e.key, t),
                  },
                  e.key,
              )
            : "channel" === e.type || "role" === e.type || "user" === e.type
              ? (0, n.jsx)(
                    F,
                    {
                        projectId: t,
                        isPreview: h,
                        def: e,
                        hint: l,
                        value: w.values[e.key] ?? H[e.key],
                        disabled: _,
                        onChange: (t) => $(e.key, t),
                        fallback: er(e, l),
                    },
                    e.key,
                )
              : er(e, l);
    }
    function er(e, t) {
        let l = w.values[e.key] ?? H[e.key];
        return !0 === e.multiline
            ? (0, n.jsx)(
                  u.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: j(e),
                      value: "string" == typeof l ? l : "",
                      onChange: (t) => $(e.key, t),
                      disabled: _,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  e.key,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: z._6,
                      children: [
                          (0, n.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: j(e),
                              value: Array.isArray(l) ? l.join(", ") : null == l ? "" : String(l),
                              onChange: (t) => $(e.key, t),
                              disabled: _,
                              fullWidth: !0,
                              ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                          }),
                          null != t
                              ? (0, n.jsx)(x.A, { text: t, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.key,
              );
    }
    function ei(e) {
        let t = e.def?.label ?? e.name,
            l = en(e.def);
        return e.set && !0 !== P[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: z.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: z.DE,
                              children: [
                                  (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-default", children: t }),
                                  (0, n.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != l
                                      ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" })
                                      : null,
                              ],
                          }),
                          (0, n.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              text: S.intl.string(C.default.RsvBGf),
                              "aria-label": S.intl.formatToPlainString(C.default.WjoM7z, { label: t }),
                              disabled: _,
                              onClick: () => N((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: z._6,
                      children: [
                          (0, n.jsx)(o.k, {
                              label: t,
                              name: e.name,
                              type: "password",
                              autoComplete: "off",
                              placeholder: e.set
                                  ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                  : void 0,
                              required: j(e.def, e.set),
                              value: w.secrets[e.name] ?? "",
                              onChange: (t) => W(e.name, t),
                              disabled: _,
                              fullWidth: !0,
                          }),
                          null != l
                              ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.name,
              );
    }
    let es = I
            ? (0, n.jsx)(d.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(C.default["A5TC+K"]),
              })
            : null,
        eu = (0, n.jsxs)("div", {
            className: z.Ek,
            children: [
                null != m && "" !== m
                    ? (0, n.jsx)(x.A, { text: m, variant: "text-sm/normal", color: "text-default" })
                    : null,
                null == T
                    ? (0, n.jsx)("div", { className: z.kZ, children: (0, n.jsx)(f.y, {}) })
                    : 0 === K.length && 0 === V.length
                      ? (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(C.default.lJJayk),
                        })
                      : null,
                null == T
                    ? null
                    : Q
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                J
                                    ? (0, n.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(C.default.dsHRPK),
                                      })
                                    : null,
                                Y.map(function (e) {
                                    let t = Z.get(e);
                                    if (null != t) return ei(t);
                                    let l = K.find((t) => t.key === e);
                                    return null == l ? null : ea(l);
                                }),
                            ],
                        })
                      : K.map(ea),
                es,
            ],
        }),
        eo = (0, n.jsxs)("div", {
            className: z.Ek,
            children: [
                (0, n.jsx)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(C.default.dsHRPK),
                }),
                V.map(ei),
                es,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
        children: E({
            fields: eu,
            secretFields: eo,
            loaded: null != T,
            valueCount: K.length,
            secretCount: V.length,
            canSave: et,
            invalid: ee,
            saving: _,
            isScoped: Q,
            submit: el,
        }),
    });
}
function O(e) {
    let {
            def: t,
            hint: l,
            value: a,
            disabled: r,
            onChange: i,
            options: s,
            placeholder: u,
            onQueryChange: o,
            matchSorterOptions: d,
        } = e,
        c = (0, E.TN)(a),
        f = (0, E.Sj)(s, a, (e) => ({ id: e, value: e, label: e })),
        g = {
            label: t.label,
            options: !0 === t.multiple ? (0, E.U5)(f, c) : f,
            placeholder: u,
            onQueryChange: o,
            matchSorterOptions: d,
            disabled: r,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, n.jsxs)("div", {
        className: z._6,
        children: [
            !0 === t.multiple
                ? (0, n.jsx)(m.Z, { ...g, selectionMode: "multiple", value: c, onSelectionChange: (e) => i(e ?? []) })
                : (0, n.jsx)(m.Z, { ...g, selectionMode: "single", value: c[0], onSelectionChange: (e) => i(e ?? "") }),
            null != l ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function L(e) {
    let { guildId: t, fallback: l, ...a } = e,
        r = (0, g.A)(t, a.def.channel_filter);
    return null == r ? l : (0, n.jsx)(O, { ...a, options: r, placeholder: S.intl.string(C.default.iZIF9m) });
}
function $(e) {
    let { guildId: t, ...l } = e;
    return (0, n.jsx)(O, { ...l, options: (0, p.A)(t) });
}
function W(e) {
    let { guildId: t, ...l } = e,
        { options: a, onQueryChange: r, matchSorterOptions: i } = (0, h.A)(t, (0, E.TN)(l.value));
    return (0, n.jsx)(O, { ...l, options: a, onQueryChange: r, matchSorterOptions: i });
}
function F(e) {
    let { projectId: t, isPreview: l, fallback: a, ...r } = e,
        i = (0, E.Tj)(t, l);
    if (null == i) return a;
    switch (r.def.type) {
        case "channel":
            return (0, n.jsx)(L, { ...r, guildId: i, fallback: a });
        case "role":
            return (0, n.jsx)($, { ...r, guildId: i });
        default:
            return (0, n.jsx)(W, { ...r, guildId: i });
    }
}
