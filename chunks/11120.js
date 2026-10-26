n.d(t, { A: () => F });
var l = n(477900),
    a = n(582128),
    i = n(17928),
    r = n(691885),
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
    v = n(1665),
    b = n(442331),
    x = n(661095),
    y = n(743082);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var j = n(245179),
    w = n(319481),
    k = n(248675),
    S = n(105292),
    C = n(950902),
    E = n(331322),
    P = n(782973);
n(321073);
var M = n(896170),
    _ = n(452295),
    N = n(952818),
    I = n(760751);
let T = ["label", "description"];
function L(e) {
    let { value: t, onChange: n, maxOptionsVisible: r = 6, ...u } = e;
    a.useEffect(() => {
        _.A.getDetectableGames();
    }, []);
    let s = (0, i.bG)([I.A], () => I.A.games),
        o = (0, i.bG)([N.Ay], () =>
            N.Ay.getRunningGames()
                .flatMap((e) => (null != e.id ? [e.id] : []))
                .join(","),
        ),
        [d, c] = a.useState(""),
        f = a.useMemo(() => {
            let e = new Set(),
                t = [];
            for (let n of s)
                e.has(n.id) ||
                    (e.add(n.id),
                    t.push({
                        id: n.id,
                        value: n.id,
                        label: n.name,
                        description: n.aliases.length > 0 ? n.aliases.join(", ") : void 0,
                    }));
            return t;
        }, [s]),
        h = a.useMemo(() => {
            var e, n, l, a;
            let i, r, u, s;
            return (
                (e = f),
                (n = d),
                (l = o.split(",")),
                (i = new Set((a = t))),
                (u = new Set(
                    (r =
                        "" === n.trim()
                            ? e.filter((e) => i.has(e.value) || l.includes(e.value))
                            : (0, M.Ht)([...e], n, { keys: T }).slice(0, 50)).map((e) => e.value),
                )),
                (s = a
                    .filter((e) => !u.has(e))
                    .map((t) => e.find((e) => e.value === t) ?? { id: t, value: t, label: t })),
                (0, C.U5)([...r, ...s], a)
            );
        }, [f, d, o, t]);
    return (0, l.jsx)(p.Z, {
        ...u,
        selectionMode: "multiple",
        wrapTags: !0,
        fullWidth: !0,
        value: [...t],
        options: h,
        maxOptionsVisible: r,
        customMatchSorter: R,
        onQueryChange: (e) => c(e.target.value),
        onSelectionChange: (e) => {
            (c(""), n(e));
        },
    });
}
function R(e) {
    return e;
}
function D(e) {
    let { def: t, hint: n, value: i, pickingEmpty: r, disabled: s, onChange: o, onPickingEmptyChange: c } = e,
        f = a.useMemo(() => (Array.isArray(i) ? i : []), [i]),
        p = Array.isArray(i) && 0 === i.length && !r,
        h = a.useId(),
        g = t.key === P.B ? S.intl.string(k.default.cqWCNY) : (n ?? t.label);
    return (0, l.jsxs)(E.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-default", children: g }),
            (0, l.jsx)(L, {
                label: t.label,
                hideLabel: !0,
                placeholder: S.intl.string(k.default["74Afoq"]),
                value: f,
                disabled: s,
                "aria-invalid": r,
                "aria-errormessage": r ? h : void 0,
                onChange: (e) => {
                    (c(0 === e.length), o(e));
                },
            }),
            r
                ? (0, l.jsx)(d.E, {
                      id: h,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: S.intl.string(k.default["/++Pf+"]),
                  })
                : null,
            (0, l.jsx)(u.S, {
                label: S.intl.string(k.default.dbuk9m),
                checked: p,
                disabled: s,
                onChange: (e) => {
                    (c(!e), o([]));
                },
            }),
        ],
    });
}
var G = n(183265);
let U = { values: {}, secrets: {} };
function F(e) {
    let { projectId: t, scopeKeys: n, note: p, notifyAgent: h = !1, isPreview: g = !1, onSaved: m, children: C } = e,
        E = (0, i.bG)([b.A], () => b.A.getSettings(t)),
        [P, M] = a.useState(U),
        [_, N] = a.useState({}),
        [I, T] = a.useState(!1),
        [L, R] = a.useState(!1),
        [F, O] = a.useState({}),
        W = a.useCallback((e, t) => {
            O((n) => (n[e] === t ? n : { ...n, [e]: t }));
        }, []),
        q = a.useCallback((e, t) => {
            (R(!1), M((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        B = a.useCallback((e, t) => {
            (R(!1), M((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        z = a.useMemo(() => E?.schema ?? [], [E]),
        V = a.useMemo(() => E?.values ?? {}, [E]),
        H = a.useMemo(
            () =>
                (E?.secrets ?? []).map((e) => ({ ...e, def: z.find((t) => t.key === e.name && "secret" === t.type) })),
            [z, E],
        ),
        Z = z.filter((e) => "secret" !== e.type),
        Q = new Map(H.map((e) => [e.name, e])),
        X = (n ?? []).filter((e) => Z.some((t) => t.key === e) || Q.has(e)),
        J = X.length > 0,
        Y = X.some((e) => Q.has(e)),
        K = a.useMemo(() => {
            let e = {};
            for (let [t, n] of Object.entries(P.values)) {
                let l = z.find((e) => e.key === t);
                if (null == l) continue;
                let a = (0, x.Ui)(l, n);
                void 0 === a || (0, x.Nc)(a, (0, x.KZ)(l, V[t])) || (e[t] = a);
            }
            let t = {};
            for (let [e, n] of Object.entries(P.secrets)) "" !== n.trim() && (t[e] = n.trim());
            return { ...(Object.keys(e).length > 0 ? { values: e } : {}), ...(0, x.mU)(z, t) };
        }, [P, z, V]),
        ee = z.some((e) => "game" === e.type && !0 === F[e.key]),
        et = (null != K.values || null != K.secrets) && !ee,
        en = a.useCallback(async () => {
            if (ee) return !1;
            if (!et || I) return !0;
            (T(!0), R(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, K);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: n, notifyAgent: l } = t;
                        l || j.A.hasPendingSettingsRequest(e)
                            ? (0, w.sendUserMessage)(e, S.intl.string(k.default["08bsJL"]))
                            : n && (0, y.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: h }),
                    M(U),
                    N({}),
                    m?.(),
                    !0
                );
            } catch {
                return (R(!0), !1);
            } finally {
                T(!1);
            }
        }, [et, ee, h, m, t, I, K]);
    function el(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? S.intl.string(k.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? S.intl.formatToPlainString(k.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function ea(e) {
        let n = el(e);
        if ("select" === e.type) {
            let t = P.values[e.key] ?? V[e.key],
                a = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: G._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: a,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => q(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: I,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: a,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => q(e.key, t),
                                  selectionMode: "single",
                                  disabled: I,
                                  fullWidth: !0,
                              }),
                        null != n ? (0, l.jsx)(v.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = P.values[e.key] ?? V[e.key];
            return (0, l.jsxs)(
                "div",
                {
                    className: G._6,
                    children: [
                        (0, l.jsx)(u.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => q(e.key, t),
                            disabled: I,
                        }),
                        null != n ? (0, l.jsx)(v.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        return "game" === e.type
            ? (0, l.jsx)(
                  D,
                  {
                      def: e,
                      hint: n,
                      value: P.values[e.key] ?? V[e.key],
                      pickingEmpty: !0 === F[e.key],
                      disabled: I,
                      onChange: (t) => q(e.key, t),
                      onPickingEmptyChange: (t) => W(e.key, t),
                  },
                  e.key,
              )
            : "channel" === e.type || "role" === e.type || "user" === e.type
              ? (0, l.jsx)(
                    $,
                    {
                        projectId: t,
                        isPreview: g,
                        def: e,
                        hint: n,
                        value: P.values[e.key] ?? V[e.key],
                        disabled: I,
                        onChange: (t) => q(e.key, t),
                        fallback: ei(e, n),
                    },
                    e.key,
                )
              : ei(e, n);
    }
    function ei(e, t) {
        let n = P.values[e.key] ?? V[e.key];
        return !0 === e.multiline
            ? (0, l.jsx)(
                  s.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: A(e),
                      value: "string" == typeof n ? n : "",
                      onChange: (t) => q(e.key, t),
                      disabled: I,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  e.key,
              )
            : (0, l.jsxs)(
                  "div",
                  {
                      className: G._6,
                      children: [
                          (0, l.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: A(e),
                              value: Array.isArray(n) ? n.join(", ") : null == n ? "" : String(n),
                              onChange: (t) => q(e.key, t),
                              disabled: I,
                              fullWidth: !0,
                              ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                          }),
                          null != t
                              ? (0, l.jsx)(v.A, { text: t, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.key,
              );
    }
    function er(e) {
        let t = e.def?.label ?? e.name,
            n = el(e.def);
        return e.set && !0 !== _[e.name]
            ? (0, l.jsxs)(
                  "div",
                  {
                      className: G.tx,
                      children: [
                          (0, l.jsxs)("div", {
                              className: G.DE,
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
                                      ? (0, l.jsx)(v.A, { text: n, variant: "text-xs/normal", color: "text-muted" })
                                      : null,
                              ],
                          }),
                          (0, l.jsx)(c.$, {
                              variant: "secondary",
                              size: "sm",
                              text: S.intl.string(k.default.RsvBGf),
                              "aria-label": S.intl.formatToPlainString(k.default.WjoM7z, { label: t }),
                              disabled: I,
                              onClick: () => N((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, l.jsxs)(
                  "div",
                  {
                      className: G._6,
                      children: [
                          (0, l.jsx)(o.k, {
                              label: t,
                              name: e.name,
                              type: "password",
                              autoComplete: "off",
                              placeholder: e.set
                                  ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                  : void 0,
                              required: A(e.def, e.set),
                              value: P.secrets[e.name] ?? "",
                              onChange: (t) => B(e.name, t),
                              disabled: I,
                              fullWidth: !0,
                          }),
                          null != n
                              ? (0, l.jsx)(v.A, { text: n, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.name,
              );
    }
    let eu = L
            ? (0, l.jsx)(d.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(k.default["A5TC+K"]),
              })
            : null,
        es = (0, l.jsxs)("div", {
            className: G.Ek,
            children: [
                null != p && "" !== p
                    ? (0, l.jsx)(v.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                    : null,
                null == E
                    ? (0, l.jsx)("div", { className: G.kZ, children: (0, l.jsx)(f.y, {}) })
                    : 0 === Z.length && 0 === H.length
                      ? (0, l.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(k.default.lJJayk),
                        })
                      : null,
                null == E
                    ? null
                    : J
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                Y
                                    ? (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(k.default.dsHRPK),
                                      })
                                    : null,
                                X.map(function (e) {
                                    let t = Q.get(e);
                                    if (null != t) return er(t);
                                    let n = Z.find((t) => t.key === e);
                                    return null == n ? null : ea(n);
                                }),
                            ],
                        })
                      : Z.map(ea),
                eu,
            ],
        }),
        eo = (0, l.jsxs)("div", {
            className: G.Ek,
            children: [
                (0, l.jsx)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(k.default.dsHRPK),
                }),
                H.map(er),
                eu,
            ],
        });
    return (0, l.jsx)(l.Fragment, {
        children: C({
            fields: es,
            secretFields: eo,
            loaded: null != E,
            valueCount: Z.length,
            secretCount: H.length,
            canSave: et,
            invalid: ee,
            saving: I,
            isScoped: J,
            submit: en,
        }),
    });
}
function O(e) {
    let {
            def: t,
            hint: n,
            value: a,
            disabled: i,
            onChange: r,
            options: u,
            placeholder: s,
            onQueryChange: o,
            matchSorterOptions: d,
        } = e,
        c = (0, C.TN)(a),
        f = (0, C.Sj)(u, a, (e) => ({ id: e, value: e, label: e })),
        h = {
            label: t.label,
            options: !0 === t.multiple ? (0, C.U5)(f, c) : f,
            placeholder: s,
            onQueryChange: o,
            matchSorterOptions: d,
            disabled: i,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, l.jsxs)("div", {
        className: G._6,
        children: [
            !0 === t.multiple
                ? (0, l.jsx)(p.Z, { ...h, selectionMode: "multiple", value: c, onSelectionChange: (e) => r(e ?? []) })
                : (0, l.jsx)(p.Z, { ...h, selectionMode: "single", value: c[0], onSelectionChange: (e) => r(e ?? "") }),
            null != n ? (0, l.jsx)(v.A, { text: n, variant: "text-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function W(e) {
    let { guildId: t, fallback: n, ...a } = e,
        i = (0, h.A)(t, a.def.channel_filter);
    return null == i ? n : (0, l.jsx)(O, { ...a, options: i, placeholder: S.intl.string(k.default.iZIF9m) });
}
function q(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(O, { ...n, options: (0, m.A)(t) });
}
function B(e) {
    let { guildId: t, ...n } = e,
        { options: a, onQueryChange: i, matchSorterOptions: r } = (0, g.A)(t, (0, C.TN)(n.value));
    return (0, l.jsx)(O, { ...n, options: a, onQueryChange: i, matchSorterOptions: r });
}
function $(e) {
    let { projectId: t, isPreview: n, fallback: a, ...i } = e,
        r = (0, C.Tj)(t, n);
    if (null == r) return a;
    switch (i.def.type) {
        case "channel":
            return (0, l.jsx)(W, { ...i, guildId: r, fallback: a });
        case "role":
            return (0, l.jsx)(q, { ...i, guildId: r });
        default:
            return (0, l.jsx)(B, { ...i, guildId: r });
    }
}
