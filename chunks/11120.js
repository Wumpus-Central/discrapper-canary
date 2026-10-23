l.d(t, { A: () => F });
var n = l(477900),
    a = l(582128),
    i = l(17928),
    r = l(691885),
    u = l(150934),
    s = l(103557),
    o = l(95477),
    d = l(834730),
    c = l(821609),
    f = l(289873),
    p = l(890497),
    h = l(300344),
    g = l(614733),
    m = l(904363),
    v = l(1665),
    b = l(442331),
    x = l(661095),
    y = l(743082);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var j = l(245179),
    w = l(319481),
    k = l(248675),
    S = l(105292),
    C = l(950902),
    E = l(331322),
    P = l(193249);
l(321073);
var M = l(896170),
    _ = l(452295),
    N = l(952818),
    I = l(760751);
let T = ["label", "description"];
function R(e) {
    let { value: t, onChange: l, maxOptionsVisible: r = 6, ...u } = e;
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
            for (let l of s)
                e.has(l.id) ||
                    (e.add(l.id),
                    t.push({
                        id: l.id,
                        value: l.id,
                        label: l.name,
                        description: l.aliases.length > 0 ? l.aliases.join(", ") : void 0,
                    }));
            return t;
        }, [s]),
        h = a.useMemo(() => {
            var e, l, n, a;
            let i, r, u, s;
            return (
                (e = f),
                (l = d),
                (n = o.split(",")),
                (i = new Set((a = t))),
                (u = new Set(
                    (r =
                        "" === l.trim()
                            ? e.filter((e) => i.has(e.value) || n.includes(e.value))
                            : (0, M.Ht)([...e], l, { keys: T }).slice(0, 50)).map((e) => e.value),
                )),
                (s = a
                    .filter((e) => !u.has(e))
                    .map((t) => e.find((e) => e.value === t) ?? { id: t, value: t, label: t })),
                (0, C.U5)([...r, ...s], a)
            );
        }, [f, d, o, t]);
    return (0, n.jsx)(p.Z, {
        ...u,
        selectionMode: "multiple",
        wrapTags: !0,
        fullWidth: !0,
        value: [...t],
        options: h,
        maxOptionsVisible: r,
        customMatchSorter: L,
        onQueryChange: (e) => c(e.target.value),
        onSelectionChange: (e) => {
            (c(""), l(e));
        },
    });
}
function L(e) {
    return e;
}
function D(e) {
    let { def: t, hint: l, value: i, pickingEmpty: r, disabled: u, onChange: s, onPickingEmptyChange: o } = e,
        c = a.useMemo(() => (Array.isArray(i) ? i : []), [i]),
        f = c.length > 0 || r,
        p = a.useRef(c);
    a.useEffect(() => {
        c.length > 0 && (p.current = c);
    }, [c]);
    let h = a.useId(),
        g = f && 0 === c.length;
    return (0, n.jsxs)(E.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, n.jsx)(d.E, { variant: "text-md/medium", color: "text-strong", children: t.label }),
            null != l ? (0, n.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: l }) : null,
            (0, n.jsx)(P.d, {
                label: S.intl.string(k.default.dbuk9m),
                checked: !f,
                disabled: u,
                onChange: (e) => {
                    let t = e ? [] : [...p.current];
                    (o(!e && 0 === t.length), s(t));
                },
            }),
            f
                ? (0, n.jsx)(R, {
                      label: t.label,
                      hideLabel: !0,
                      placeholder: S.intl.string(k.default["74Afoq"]),
                      value: c,
                      disabled: u,
                      "aria-invalid": g,
                      "aria-errormessage": g ? h : void 0,
                      onChange: (e) => {
                          (o(0 === e.length), s(e));
                      },
                  })
                : null,
            g
                ? (0, n.jsx)(d.E, {
                      id: h,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: S.intl.string(k.default["/++Pf+"]),
                  })
                : null,
        ],
    });
}
var G = l(183265);
let U = { values: {}, secrets: {} };
function F(e) {
    let { projectId: t, scopeKeys: l, note: p, notifyAgent: h = !1, isPreview: g = !1, onSaved: m, children: C } = e,
        E = (0, i.bG)([b.A], () => b.A.getSettings(t)),
        [P, M] = a.useState(U),
        [_, N] = a.useState({}),
        [I, T] = a.useState(!1),
        [R, L] = a.useState(!1),
        [F, O] = a.useState({}),
        W = a.useCallback((e, t) => {
            O((l) => (l[e] === t ? l : { ...l, [e]: t }));
        }, []),
        q = a.useCallback((e, t) => {
            (L(!1), M((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        B = a.useCallback((e, t) => {
            (L(!1), M((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
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
        X = (l ?? []).filter((e) => Z.some((t) => t.key === e) || Q.has(e)),
        J = X.length > 0,
        K = X.some((e) => Q.has(e)),
        Y = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(P.values)) {
                let n = z.find((e) => e.key === t);
                if (null == n) continue;
                let a = (0, x.Ui)(n, l);
                void 0 === a || (0, x.Nc)(a, (0, x.KZ)(n, V[t])) || (e[t] = a);
            }
            let t = {};
            for (let [e, l] of Object.entries(P.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return { ...(Object.keys(e).length > 0 ? { values: e } : {}), ...(0, x.mU)(z, t) };
        }, [P, z, V]),
        ee = z.some((e) => "game" === e.type && !0 === F[e.key]),
        et = (null != Y.values || null != Y.secrets) && !ee,
        el = a.useCallback(async () => {
            if (ee) return !1;
            if (!et || I) return !0;
            (T(!0), L(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, Y);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: l, notifyAgent: n } = t;
                        n || j.A.hasPendingSettingsRequest(e)
                            ? (0, w.sendUserMessage)(e, S.intl.string(k.default["08bsJL"]))
                            : l && (0, y.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: h }),
                    M(U),
                    N({}),
                    m?.(),
                    !0
                );
            } catch {
                return (L(!0), !1);
            } finally {
                T(!1);
            }
        }, [et, ee, h, m, t, I, Y]);
    function en(e) {
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
        let l = en(e);
        if ("select" === e.type) {
            let t = P.values[e.key] ?? V[e.key],
                a = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, n.jsxs)(
                "div",
                {
                    className: G._6,
                    children: [
                        !0 === e.multiple
                            ? (0, n.jsx)(r.l, {
                                  label: e.label,
                                  options: a,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => q(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: I,
                                  fullWidth: !0,
                              })
                            : (0, n.jsx)(r.l, {
                                  label: e.label,
                                  options: a,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => q(e.key, t),
                                  selectionMode: "single",
                                  disabled: I,
                                  fullWidth: !0,
                              }),
                        null != l ? (0, n.jsx)(v.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = P.values[e.key] ?? V[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: G._6,
                    children: [
                        (0, n.jsx)(u.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => q(e.key, t),
                            disabled: I,
                        }),
                        null != l ? (0, n.jsx)(v.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        return "game" === e.type
            ? (0, n.jsx)(
                  D,
                  {
                      def: e,
                      hint: l,
                      value: P.values[e.key] ?? V[e.key],
                      pickingEmpty: !0 === F[e.key],
                      disabled: I,
                      onChange: (t) => q(e.key, t),
                      onPickingEmptyChange: (t) => W(e.key, t),
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
                        value: P.values[e.key] ?? V[e.key],
                        disabled: I,
                        onChange: (t) => q(e.key, t),
                        fallback: ei(e, l),
                    },
                    e.key,
                )
              : ei(e, l);
    }
    function ei(e, t) {
        let l = P.values[e.key] ?? V[e.key];
        return !0 === e.multiline
            ? (0, n.jsx)(
                  s.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: A(e),
                      value: "string" == typeof l ? l : "",
                      onChange: (t) => q(e.key, t),
                      disabled: I,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  e.key,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: G._6,
                      children: [
                          (0, n.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: A(e),
                              value: Array.isArray(l) ? l.join(", ") : null == l ? "" : String(l),
                              onChange: (t) => q(e.key, t),
                              disabled: I,
                              fullWidth: !0,
                              ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                          }),
                          null != t
                              ? (0, n.jsx)(v.A, { text: t, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.key,
              );
    }
    function er(e) {
        let t = e.def?.label ?? e.name,
            l = en(e.def);
        return e.set && !0 !== _[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: G.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: G.DE,
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
                                      ? (0, n.jsx)(v.A, { text: l, variant: "text-xs/normal", color: "text-muted" })
                                      : null,
                              ],
                          }),
                          (0, n.jsx)(c.$, {
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
            : (0, n.jsxs)(
                  "div",
                  {
                      className: G._6,
                      children: [
                          (0, n.jsx)(o.k, {
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
                          null != l
                              ? (0, n.jsx)(v.A, { text: l, variant: "text-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.name,
              );
    }
    let eu = R
            ? (0, n.jsx)(d.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(k.default["A5TC+K"]),
              })
            : null,
        es = (0, n.jsxs)("div", {
            className: G.Ek,
            children: [
                null != p && "" !== p
                    ? (0, n.jsx)(v.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                    : null,
                null == E
                    ? (0, n.jsx)("div", { className: G.kZ, children: (0, n.jsx)(f.y, {}) })
                    : 0 === Z.length && 0 === H.length
                      ? (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(k.default.lJJayk),
                        })
                      : null,
                null == E
                    ? null
                    : J
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                K
                                    ? (0, n.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(k.default.dsHRPK),
                                      })
                                    : null,
                                X.map(function (e) {
                                    let t = Q.get(e);
                                    if (null != t) return er(t);
                                    let l = Z.find((t) => t.key === e);
                                    return null == l ? null : ea(l);
                                }),
                            ],
                        })
                      : Z.map(ea),
                eu,
            ],
        }),
        eo = (0, n.jsxs)("div", {
            className: G.Ek,
            children: [
                (0, n.jsx)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(k.default.dsHRPK),
                }),
                H.map(er),
                eu,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
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
            submit: el,
        }),
    });
}
function O(e) {
    let {
            def: t,
            hint: l,
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
    return (0, n.jsxs)("div", {
        className: G._6,
        children: [
            !0 === t.multiple
                ? (0, n.jsx)(p.Z, { ...h, selectionMode: "multiple", value: c, onSelectionChange: (e) => r(e ?? []) })
                : (0, n.jsx)(p.Z, { ...h, selectionMode: "single", value: c[0], onSelectionChange: (e) => r(e ?? "") }),
            null != l ? (0, n.jsx)(v.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function W(e) {
    let { guildId: t, fallback: l, ...a } = e,
        i = (0, h.A)(t, a.def.channel_filter);
    return null == i ? l : (0, n.jsx)(O, { ...a, options: i, placeholder: S.intl.string(k.default.iZIF9m) });
}
function q(e) {
    let { guildId: t, ...l } = e;
    return (0, n.jsx)(O, { ...l, options: (0, m.A)(t) });
}
function B(e) {
    let { guildId: t, ...l } = e,
        { options: a, onQueryChange: i, matchSorterOptions: r } = (0, g.A)(t, (0, C.TN)(l.value));
    return (0, n.jsx)(O, { ...l, options: a, onQueryChange: i, matchSorterOptions: r });
}
function $(e) {
    let { projectId: t, isPreview: l, fallback: a, ...i } = e,
        r = (0, C.Tj)(t, l);
    if (null == r) return a;
    switch (i.def.type) {
        case "channel":
            return (0, n.jsx)(W, { ...i, guildId: r, fallback: a });
        case "role":
            return (0, n.jsx)(q, { ...i, guildId: r });
        default:
            return (0, n.jsx)(B, { ...i, guildId: r });
    }
}
