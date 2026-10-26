l.d(t, { A: () => q });
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
    m = l(614733),
    g = l(904363),
    x = l(1665),
    b = l(442331),
    v = l(661095),
    y = l(743082);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var j = l(245179),
    k = l(319481),
    C = l(248675),
    S = l(105292),
    w = l(950902),
    E = l(331322),
    M = l(782973);
l(321073);
var P = l(896170),
    _ = l(452295),
    N = l(952818),
    I = l(760751);
let R = ["label", "description"];
function T(e) {
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
                            : (0, P.Ht)([...e], l, { keys: R }).slice(0, 50)).map((e) => e.value),
                )),
                (s = a
                    .filter((e) => !u.has(e))
                    .map((t) => e.find((e) => e.value === t) ?? { id: t, value: t, label: t })),
                (0, w.U5)([...r, ...s], a)
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
function G(e) {
    let { def: t, hint: l, value: i, pickingEmpty: r, disabled: s, onChange: o, onPickingEmptyChange: c } = e,
        f = a.useMemo(() => (Array.isArray(i) ? i : []), [i]),
        p = Array.isArray(i) && 0 === i.length && !r,
        h = a.useId(),
        m = t.key === M.B ? S.intl.string(C.default.cqWCNY) : (l ?? t.label);
    return (0, n.jsxs)(E.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, n.jsx)(d.E, { variant: "text-sm/normal", color: "text-default", children: m }),
            (0, n.jsx)(T, {
                label: t.label,
                hideLabel: !0,
                placeholder: S.intl.string(C.default["74Afoq"]),
                value: f,
                disabled: s,
                "aria-invalid": r,
                "aria-errormessage": r ? h : void 0,
                onChange: (e) => {
                    (c(0 === e.length), o(e));
                },
            }),
            r
                ? (0, n.jsx)(d.E, {
                      id: h,
                      variant: "text-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: S.intl.string(C.default["/++Pf+"]),
                  })
                : null,
            (0, n.jsx)(u.S, {
                label: S.intl.string(C.default.dbuk9m),
                checked: p,
                disabled: s,
                onChange: (e) => {
                    (c(!e), o([]));
                },
            }),
        ],
    });
}
var U = l(183265);
let D = { values: {}, secrets: {} };
function q(e) {
    let { projectId: t, scopeKeys: l, note: p, notifyAgent: h = !1, isPreview: m = !1, onSaved: g, children: w } = e,
        E = (0, i.bG)([b.A], () => b.A.getSettings(t)),
        [M, P] = a.useState(D),
        [_, N] = a.useState({}),
        [I, R] = a.useState(!1),
        [T, L] = a.useState(!1),
        [q, W] = a.useState({}),
        F = a.useCallback((e, t) => {
            W((l) => (l[e] === t ? l : { ...l, [e]: t }));
        }, []),
        O = a.useCallback((e, t) => {
            (L(!1), P((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        B = a.useCallback((e, t) => {
            (L(!1), P((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        $ = a.useMemo(() => E?.schema ?? [], [E]),
        V = a.useMemo(() => E?.values ?? {}, [E]),
        H = a.useMemo(
            () =>
                (E?.secrets ?? []).map((e) => ({ ...e, def: $.find((t) => t.key === e.name && "secret" === t.type) })),
            [$, E],
        ),
        Z = $.filter((e) => "secret" !== e.type),
        Q = new Map(H.map((e) => [e.name, e])),
        X = (l ?? []).filter((e) => Z.some((t) => t.key === e) || Q.has(e)),
        J = X.length > 0,
        K = X.some((e) => Q.has(e)),
        Y = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(M.values)) {
                let n = $.find((e) => e.key === t);
                if (null == n) continue;
                let a = (0, v.Ui)(n, l);
                void 0 === a || (0, v.Nc)(a, (0, v.KZ)(n, V[t])) || (e[t] = a);
            }
            let t = {};
            for (let [e, l] of Object.entries(M.secrets)) "" !== l.trim() && (t[e] = l.trim());
            return { ...(Object.keys(e).length > 0 ? { values: e } : {}), ...(0, v.mU)($, t) };
        }, [M, $, V]),
        ee = $.some((e) => "game" === e.type && !0 === q[e.key]),
        et = (null != Y.values || null != Y.secrets) && !ee,
        el = a.useCallback(async () => {
            if (ee) return !1;
            if (!et || I) return !0;
            (R(!0), L(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(t, Y);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: l, notifyAgent: n } = t;
                        n || j.A.hasPendingSettingsRequest(e)
                            ? (0, k.sendUserMessage)(e, S.intl.string(C.default["08bsJL"]))
                            : l && (0, y.ss)(e);
                    })(t, { rebuildRequired: e, notifyAgent: h }),
                    P(D),
                    N({}),
                    g?.(),
                    !0
                );
            } catch {
                return (L(!0), !1);
            } finally {
                R(!1);
            }
        }, [et, ee, h, g, t, I, Y]);
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
            let t = M.values[e.key] ?? V[e.key],
                a = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, n.jsxs)(
                "div",
                {
                    className: U._6,
                    children: [
                        !0 === e.multiple
                            ? (0, n.jsx)(r.l, {
                                  label: e.label,
                                  options: a,
                                  value: Array.isArray(t) ? t : [],
                                  onSelectionChange: (t) => O(e.key, t),
                                  selectionMode: "multiple",
                                  disabled: I,
                                  fullWidth: !0,
                              })
                            : (0, n.jsx)(r.l, {
                                  label: e.label,
                                  options: a,
                                  value: "string" == typeof t ? t : void 0,
                                  onSelectionChange: (t) => O(e.key, t),
                                  selectionMode: "single",
                                  disabled: I,
                                  fullWidth: !0,
                              }),
                        null != l ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        if ("checkbox" === e.type) {
            let t = M.values[e.key] ?? V[e.key];
            return (0, n.jsxs)(
                "div",
                {
                    className: U._6,
                    children: [
                        (0, n.jsx)(u.S, {
                            label: e.label,
                            checked: !0 === t,
                            onChange: (t) => O(e.key, t),
                            disabled: I,
                        }),
                        null != l ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                e.key,
            );
        }
        return "game" === e.type
            ? (0, n.jsx)(
                  G,
                  {
                      def: e,
                      hint: l,
                      value: M.values[e.key] ?? V[e.key],
                      pickingEmpty: !0 === q[e.key],
                      disabled: I,
                      onChange: (t) => O(e.key, t),
                      onPickingEmptyChange: (t) => F(e.key, t),
                  },
                  e.key,
              )
            : "channel" === e.type || "role" === e.type || "user" === e.type
              ? (0, n.jsx)(
                    z,
                    {
                        projectId: t,
                        isPreview: m,
                        def: e,
                        hint: l,
                        value: M.values[e.key] ?? V[e.key],
                        disabled: I,
                        onChange: (t) => O(e.key, t),
                        fallback: ei(e, l),
                    },
                    e.key,
                )
              : ei(e, l);
    }
    function ei(e, t) {
        let l = M.values[e.key] ?? V[e.key];
        return !0 === e.multiline
            ? (0, n.jsx)(
                  s.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: A(e),
                      value: "string" == typeof l ? l : "",
                      onChange: (t) => O(e.key, t),
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
                      className: U._6,
                      children: [
                          (0, n.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: A(e),
                              value: Array.isArray(l) ? l.join(", ") : null == l ? "" : String(l),
                              onChange: (t) => O(e.key, t),
                              disabled: I,
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
    function er(e) {
        let t = e.def?.label ?? e.name,
            l = en(e.def);
        return e.set && !0 !== _[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: U.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: U.DE,
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
                      className: U._6,
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
                              value: M.secrets[e.name] ?? "",
                              onChange: (t) => B(e.name, t),
                              disabled: I,
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
    let eu = T
            ? (0, n.jsx)(d.E, {
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(C.default["A5TC+K"]),
              })
            : null,
        es = (0, n.jsxs)("div", {
            className: U.Ek,
            children: [
                null != p && "" !== p
                    ? (0, n.jsx)(x.A, { text: p, variant: "text-sm/normal", color: "text-default" })
                    : null,
                null == E
                    ? (0, n.jsx)("div", { className: U.kZ, children: (0, n.jsx)(f.y, {}) })
                    : 0 === Z.length && 0 === H.length
                      ? (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(C.default.lJJayk),
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
                                          children: S.intl.string(C.default.dsHRPK),
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
            className: U.Ek,
            children: [
                (0, n.jsx)(d.E, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(C.default.dsHRPK),
                }),
                H.map(er),
                eu,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
        children: w({
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
function W(e) {
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
        c = (0, w.TN)(a),
        f = (0, w.Sj)(u, a, (e) => ({ id: e, value: e, label: e })),
        h = {
            label: t.label,
            options: !0 === t.multiple ? (0, w.U5)(f, c) : f,
            placeholder: s,
            onQueryChange: o,
            matchSorterOptions: d,
            disabled: i,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, n.jsxs)("div", {
        className: U._6,
        children: [
            !0 === t.multiple
                ? (0, n.jsx)(p.Z, { ...h, selectionMode: "multiple", value: c, onSelectionChange: (e) => r(e ?? []) })
                : (0, n.jsx)(p.Z, { ...h, selectionMode: "single", value: c[0], onSelectionChange: (e) => r(e ?? "") }),
            null != l ? (0, n.jsx)(x.A, { text: l, variant: "text-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function F(e) {
    let { guildId: t, fallback: l, ...a } = e,
        i = (0, h.A)(t, a.def.channel_filter);
    return null == i ? l : (0, n.jsx)(W, { ...a, options: i, placeholder: S.intl.string(C.default.iZIF9m) });
}
function O(e) {
    let { guildId: t, ...l } = e;
    return (0, n.jsx)(W, { ...l, options: (0, g.A)(t) });
}
function B(e) {
    let { guildId: t, ...l } = e,
        { options: a, onQueryChange: i, matchSorterOptions: r } = (0, m.A)(t, (0, w.TN)(l.value));
    return (0, n.jsx)(W, { ...l, options: a, onQueryChange: i, matchSorterOptions: r });
}
function z(e) {
    let { projectId: t, isPreview: l, fallback: a, ...i } = e,
        r = (0, w.Tj)(t, l);
    if (null == r) return a;
    switch (i.def.type) {
        case "channel":
            return (0, n.jsx)(F, { ...i, guildId: r, fallback: a });
        case "role":
            return (0, n.jsx)(O, { ...i, guildId: r });
        default:
            return (0, n.jsx)(B, { ...i, guildId: r });
    }
}
