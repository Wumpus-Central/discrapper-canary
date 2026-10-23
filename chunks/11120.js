n.d(t, { A: () => F });
var l = n(477900),
    i = n(582128),
    a = n(17928),
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
    M = n(193249);
n(321073);
var P = n(896170),
    _ = n(452295),
    N = n(952818),
    I = n(760751);
let T = ["label", "description"];
function R(e) {
    let { value: t, onChange: n, maxOptionsVisible: r = 6, ...u } = e;
    i.useEffect(() => {
        _.A.getDetectableGames();
    }, []);
    let s = (0, a.bG)([I.A], () => I.A.games),
        o = (0, a.bG)([N.Ay], () =>
            N.Ay.getRunningGames()
                .flatMap((e) => (null != e.id ? [e.id] : []))
                .join(","),
        ),
        [d, c] = i.useState(""),
        f = i.useMemo(() => {
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
        h = i.useMemo(() => {
            var e, n, l, i;
            let a, r, u, s;
            return (
                (e = f),
                (n = d),
                (l = o.split(",")),
                (a = new Set((i = t))),
                (u = new Set(
                    (r =
                        "" === n.trim()
                            ? e.filter((e) => a.has(e.value) || l.includes(e.value))
                            : (0, P.Ht)([...e], n, { keys: T }).slice(0, 50)).map((e) => e.value),
                )),
                (s = i
                    .filter((e) => !u.has(e))
                    .map((t) => e.find((e) => e.value === t) ?? { id: t, value: t, label: t })),
                (0, C.U5)([...r, ...s], i)
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
        customMatchSorter: L,
        onQueryChange: (e) => c(e.target.value),
        onSelectionChange: (e) => {
            (c(""), n(e));
        },
    });
}
function L(e) {
    return e;
}
function D(e) {
    let { def: t, hint: n, value: a, pickingEmpty: r, disabled: u, onChange: s, onPickingEmptyChange: o } = e,
        c = i.useMemo(() => (Array.isArray(a) ? a : []), [a]),
        f = c.length > 0 || r,
        p = i.useRef(c);
    i.useEffect(() => {
        c.length > 0 && (p.current = c);
    }, [c]);
    let h = i.useId(),
        g = f && 0 === c.length;
    return (0, l.jsxs)(E.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, l.jsx)(d.E, { variant: "text-md/medium", color: "text-strong", children: t.label }),
            null != n ? (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-subtle", children: n }) : null,
            (0, l.jsx)(M.d, {
                label: S.intl.string(k.default.dbuk9m),
                checked: !f,
                disabled: u,
                onChange: (e) => {
                    let t = e ? [] : [...p.current];
                    (o(!e && 0 === t.length), s(t));
                },
            }),
            f
                ? (0, l.jsx)(R, {
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
                ? (0, l.jsx)(d.E, {
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
var G = n(183265);
let U = { values: {}, secrets: {} };
function F(e) {
    let { projectId: t, scopeKeys: n, note: p, notifyAgent: h = !1, isPreview: g = !1, onSaved: m, children: C } = e,
        E = (0, a.bG)([b.A], () => b.A.getSettings(t)),
        [M, P] = i.useState(U),
        [_, N] = i.useState({}),
        [I, T] = i.useState(!1),
        [R, L] = i.useState(!1),
        [F, q] = i.useState({}),
        O = i.useCallback((e, t) => {
            q((n) => (n[e] === t ? n : { ...n, [e]: t }));
        }, []),
        W = i.useCallback((e, t) => {
            (L(!1), P((n) => ({ ...n, values: { ...n.values, [e]: t } })));
        }, []),
        B = i.useCallback((e, t) => {
            (L(!1), P((n) => ({ ...n, secrets: { ...n.secrets, [e]: t } })));
        }, []),
        z = i.useMemo(() => E?.schema ?? [], [E]),
        V = i.useMemo(() => E?.values ?? {}, [E]),
        H = i.useMemo(
            () =>
                (E?.secrets ?? []).map((e) => ({ ...e, def: z.find((t) => t.key === e.name && "secret" === t.type) })),
            [z, E],
        ),
        Z = z.filter((e) => "secret" !== e.type),
        Q = new Map(H.map((e) => [e.name, e])),
        Y = (n ?? []).filter((e) => Z.some((t) => t.key === e) || Q.has(e)),
        X = Y.length > 0,
        K = Y.some((e) => Q.has(e)),
        J = i.useMemo(() => {
            let e = {};
            for (let [t, n] of Object.entries(M.values)) {
                let l = z.find((e) => e.key === t);
                if (null == l) continue;
                let i = (0, x.Ui)(l, n);
                void 0 === i || (0, x.Nc)(i, (0, x.KZ)(l, V[t])) || (e[t] = i);
            }
            let t = {};
            for (let [e, n] of Object.entries(M.secrets)) "" !== n.trim() && (t[e] = n.trim());
            return { ...(Object.keys(e).length > 0 ? { values: e } : {}), ...(0, x.mU)(z, t) };
        }, [M, z, V]),
        ee = z.some((e) => "game" === e.type && !0 === F[e.key]),
        et = (null != J.values || null != J.secrets) && !ee,
        en = i.useCallback(async () => {
            if (ee) return !1;
            if (!et || I) return !0;
            (T(!0), L(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, J);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: n, notifyAgent: l } = t;
                        l || j.A.hasPendingSettingsRequest(e)
                            ? (0, w.sendUserMessage)(e, S.intl.string(k.default["08bsJL"]))
                            : n && (0, y.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: h }),
                    P(U),
                    N({}),
                    m?.(),
                    !0
                );
            } catch {
                return (L(!0), !1);
            } finally {
                T(!1);
            }
        }, [et, ee, h, m, t, I, J]);
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
    function ei(e) {
        let n = el(e);
        if ("select" === e.type) {
            let t = M.values[e.key] ?? V[e.key],
                i = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, l.jsxs)(
                "div",
                {
                    className: G._6,
                    children: [
                        !0 === e.multiple
                            ? (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => W(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: I,
                                  fullWidth: !0,
                              })
                            : (0, l.jsx)(r.l, {
                                  label: e.label,
                                  options: i,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => W(e.key, t),
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
            let t = M.values[e.key] ?? V[e.key];
            return (0, l.jsxs)(
                "div",
                {
                    className: G._6,
                    children: [
                        (0, l.jsx)(u.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => W(e.key, t),
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
                      value: M.values[e.key] ?? V[e.key],
                      pickingEmpty: !0 === F[e.key],
                      disabled: I,
                      onChange: (t) => W(e.key, t),
                      onPickingEmptyChange: (t) => O(e.key, t),
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
                        value: M.values[e.key] ?? V[e.key],
                        disabled: I,
                        onChange: (t) => W(e.key, t),
                        fallback: ea(e, n),
                    },
                    e.key,
                )
              : ea(e, n);
    }
    function ea(e, t) {
        let n = M.values[e.key] ?? V[e.key];
        return !0 === e.multiline
            ? (0, l.jsx)(
                  s.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: A(e),
                      value: "string" == typeof n ? n : "",
                      onChange: (t) => W(e.key, t),
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
                              onChange: (t) => W(e.key, t),
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
                              value: M.secrets[e.name] ?? "",
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
    let eu = R
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
                    : X
                      ? (0, l.jsxs)(l.Fragment, {
                            children: [
                                K
                                    ? (0, l.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(k.default.dsHRPK),
                                      })
                                    : null,
                                Y.map(function (e) {
                                    let t = Q.get(e);
                                    if (null != t) return er(t);
                                    let n = Z.find((t) => t.key === e);
                                    return null == n ? null : ei(n);
                                }),
                            ],
                        })
                      : Z.map(ei),
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
            isScoped: X,
            submit: en,
        }),
    });
}
function q(e) {
    let {
            def: t,
            hint: n,
            value: i,
            disabled: a,
            onChange: r,
            options: u,
            placeholder: s,
            onQueryChange: o,
            matchSorterOptions: d,
        } = e,
        c = (0, C.TN)(i),
        f = (0, C.Sj)(u, i, (e) => ({ id: e, value: e, label: e })),
        h = {
            label: t.label,
            options: !0 === t.multiple ? (0, C.U5)(f, c) : f,
            placeholder: s,
            onQueryChange: o,
            matchSorterOptions: d,
            disabled: a,
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
function O(e) {
    let { guildId: t, fallback: n, ...i } = e,
        a = (0, h.A)(t, i.def.channel_filter);
    return null == a ? n : (0, l.jsx)(q, { ...i, options: a, placeholder: S.intl.string(k.default.iZIF9m) });
}
function W(e) {
    let { guildId: t, ...n } = e;
    return (0, l.jsx)(q, { ...n, options: (0, m.A)(t) });
}
function B(e) {
    let { guildId: t, ...n } = e,
        { options: i, onQueryChange: a, matchSorterOptions: r } = (0, g.A)(t, (0, C.TN)(n.value));
    return (0, l.jsx)(q, { ...n, options: i, onQueryChange: a, matchSorterOptions: r });
}
function $(e) {
    let { projectId: t, isPreview: n, fallback: i, ...a } = e,
        r = (0, C.Tj)(t, n);
    if (null == r) return i;
    switch (a.def.type) {
        case "channel":
            return (0, l.jsx)(O, { ...a, guildId: r, fallback: i });
        case "role":
            return (0, l.jsx)(W, { ...a, guildId: r });
        default:
            return (0, l.jsx)(B, { ...a, guildId: r });
    }
}
