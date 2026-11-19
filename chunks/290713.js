l.d(t, { A: () => U });
var n = l(477900),
    a = l(582128),
    r = l(855986),
    i = l(691885),
    s = l(150934),
    u = l(103557),
    o = l(95477),
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
    S = l(191850),
    w = l(792996),
    C = l(950902),
    P = l(331322),
    E = l(782973);
l(321073);
var _ = l(896170),
    T = l(273626),
    I = l(644727),
    N = l(760751);
let M = ["label", "description"];
function L(e) {
    let t,
        l,
        i,
        { value: s, onChange: u, maxOptionsVisible: o = 6, ...d } = e,
        { allOptions: c, runningIds: f } =
            (a.useEffect(() => {
                T.A.getDetectableGames();
            }, []),
            (t = (0, r.bG)([N.A], () => N.A.games)),
            (l = (0, r.bG)([I.Ay], () =>
                I.Ay.getRunningGames()
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
                            : (0, _.Ht)([...c], p, { keys: M }).slice(0, 50)).map((e) => e.value),
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
        maxOptionsVisible: o,
        customMatchSorter: G,
        onQueryChange: (e) => g(e.target.value),
        onSelectionChange: (e) => {
            (g(""), u(e));
        },
    });
}
function G(e) {
    return e;
}
function O(e) {
    let { def: t, hint: l, value: r, pickingEmpty: i, disabled: u, onChange: o, onPickingEmptyChange: c } = e,
        f = a.useMemo(() => (Array.isArray(r) ? r : []), [r]),
        m = Array.isArray(r) && 0 === r.length && !i,
        p = a.useId(),
        g = t.key === E.B ? w.intl.string(S.default.cqWCNY) : (l ?? t.label);
    return (0, n.jsxs)(P.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, n.jsx)(d.E, { variant: "body-sm/normal", color: "text-default", children: g }),
            (0, n.jsx)(L, {
                label: t.label,
                hideLabel: !0,
                placeholder: w.intl.string(S.default["74Afoq"]),
                value: f,
                disabled: u,
                "aria-invalid": i,
                "aria-errormessage": i ? p : void 0,
                onChange: (e) => {
                    (c(0 === e.length), o(e));
                },
            }),
            i
                ? (0, n.jsx)(d.E, {
                      id: p,
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: w.intl.string(S.default["/++Pf+"]),
                  })
                : null,
            (0, n.jsx)(s.S, {
                label: w.intl.string(S.default.dbuk9m),
                checked: m,
                disabled: u,
                onChange: (e) => {
                    (c(!e), o([]));
                },
            }),
        ],
    });
}
var q = l(183265);
let H = { values: {}, secrets: {} };
function U(e) {
    var t;
    let { projectId: l, scopeKeys: m, note: p, notifyAgent: g = !1, isPreview: v = !1, onSaved: P, children: E } = e,
        _ = (0, r.bG)([x.A], () => x.A.getSettings(l)),
        [T, I] = a.useState(H),
        [N, M] = a.useState({}),
        [L, G] = a.useState(!1),
        [U, D] = a.useState(!1),
        [R, z] = a.useState({}),
        F = a.useCallback((e, t) => {
            z((l) => (l[e] === t ? l : { ...l, [e]: t }));
        }, []),
        W = a.useCallback((e, t) => {
            (D(!1), I((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        $ = a.useCallback((e, t) => {
            (D(!1), I((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        K = a.useMemo(() => _?.schema ?? [], [_]),
        V = (0, C.Tj)(l, v),
        { servers: Q, serverId: Y, setServerId: Z } = (0, C.v4)(l, v);
    function X(e) {
        return (0, b.$c)(e, Y);
    }
    function J(e) {
        return T.values[X(e)] ?? (0, b.pn)(_, e, Y);
    }
    let ee = a.useMemo(
            () =>
                (_?.secrets ?? []).map((e) => ({ ...e, def: K.find((t) => t.key === e.name && "secret" === t.type) })),
            [K, _],
        ),
        et = K.filter((e) => "secret" !== e.type),
        el = new Map(ee.map((e) => [e.name, e])),
        en = (m ?? []).filter((e) => et.some((t) => t.key === e) || el.has(e)),
        ea = en.length > 0,
        er = en.some((e) => el.has(e)),
        ei = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(T.secrets)) "" !== l.trim() && (e[t] = l.trim());
            return { ...(0, b.DG)(_, T.values), ...(0, b.mU)(K, e) };
        }, [T, K, _]),
        es = K.some((e) => "game" === e.type && !0 === R[e.key]),
        eu = (null != ei.values || null != ei.server_values || null != ei.secrets) && !es,
        eo = a.useCallback(async () => {
            if (es) return !1;
            if (!eu || L) return !0;
            (G(!0), D(!1));
            try {
                let { rebuildRequired: e } = await (0, y.nU)(l, ei);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: l, notifyAgent: n } = t;
                        n || k.A.hasPendingSettingsRequest(e)
                            ? (0, A.dv)(e, w.intl.string(S.default["08bsJL"]))
                            : l && (0, y.ss)(e);
                    })(l, { rebuildRequired: e, notifyAgent: g }),
                    I(H),
                    M({}),
                    P?.(),
                    !0
                );
            } catch {
                return (D(!0), !1);
            } finally {
                G(!1);
            }
        }, [eu, es, g, P, l, L, ei]);
    function ed(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? w.intl.string(S.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? w.intl.formatToPlainString(S.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function ec(e) {
        let t = ed(e),
            l = X(e);
        if ("select" === e.type) {
            let a = J(e),
                r = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, n.jsxs)(
                "div",
                {
                    className: q._6,
                    children: [
                        !0 === e.multiple
                            ? (0, n.jsx)(i.l, {
                                  label: e.label,
                                  options: r,
                                  value: Array.isArray(a) ? a : [],
                                  onSelectionChange: (e) => W(l, e),
                                  selectionMode: "multiple",
                                  wrapTags: !0,
                                  disabled: L,
                                  fullWidth: !0,
                              })
                            : (0, n.jsx)(i.l, {
                                  label: e.label,
                                  options: r,
                                  value: "string" == typeof a ? a : void 0,
                                  onSelectionChange: (e) => W(l, e),
                                  selectionMode: "single",
                                  disabled: L,
                                  fullWidth: !0,
                              }),
                        null != t ? (0, n.jsx)(h.A, { text: t, variant: "body-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                l,
            );
        }
        return "checkbox" === e.type
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: q._6,
                      children: [
                          (0, n.jsx)(s.S, {
                              label: e.label,
                              checked: !0 === J(e),
                              onChange: (e) => W(l, e),
                              disabled: L,
                          }),
                          null != t
                              ? (0, n.jsx)(h.A, { text: t, variant: "body-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  l,
              )
            : "game" === e.type
              ? (0, n.jsx)(
                    O,
                    {
                        def: e,
                        hint: t,
                        value: J(e),
                        pickingEmpty: !0 === R[e.key],
                        disabled: L,
                        onChange: (t) => W(e.key, t),
                        onPickingEmptyChange: (t) => F(e.key, t),
                    },
                    e.key,
                )
              : "channel" === e.type || "role" === e.type || "user" === e.type
                ? (0, n.jsx)(
                      B,
                      {
                          guildId: !0 === e.per_server ? Y : V,
                          def: e,
                          hint: t,
                          value: J(e),
                          disabled: L,
                          onChange: (e) => W(l, e),
                          fallback: ef(e, t),
                      },
                      l,
                  )
                : ef(e, t);
    }
    function ef(e, t) {
        let l = X(e),
            a = J(e);
        return !0 === e.multiline
            ? (0, n.jsx)(
                  u.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: j(e),
                      value: "string" == typeof a ? a : "",
                      onChange: (e) => W(l, e),
                      disabled: L,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  l,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: q._6,
                      children: [
                          (0, n.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: j(e),
                              value: Array.isArray(a) ? a.join(", ") : null == a ? "" : String(a),
                              onChange: (e) => W(l, e),
                              disabled: L,
                              fullWidth: !0,
                              ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                          }),
                          null != t
                              ? (0, n.jsx)(h.A, { text: t, variant: "body-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  l,
              );
    }
    function em(e) {
        let t = e.def?.label ?? e.name,
            l = ed(e.def);
        return e.set && !0 !== N[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: q.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: q.DE,
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
                              text: w.intl.string(S.default.RsvBGf),
                              "aria-label": w.intl.formatToPlainString(S.default.WjoM7z, { label: t }),
                              disabled: L,
                              onClick: () => M((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: q._6,
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
                              value: T.secrets[e.name] ?? "",
                              onChange: (t) => $(e.name, t),
                              disabled: L,
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
    let ep =
            0 === (t = (ea ? et.filter((e) => en.includes(e.key)) : et).filter((e) => !0 === e.per_server)).length
                ? null
                : null == Y
                  ? (0, n.jsx)(d.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: w.intl.string(S.default.IT21e4),
                    })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            Q.length > 1
                                ? (0, n.jsxs)("div", {
                                      className: q._6,
                                      children: [
                                          (0, n.jsx)(i.l, {
                                              label: w.intl.string(S.default["6FmRyw"]),
                                              options: Q.map((e) => ({
                                                  id: e.guildId,
                                                  label: e.name,
                                                  value: e.guildId,
                                              })),
                                              value: Y,
                                              onSelectionChange: (e) => Z(e),
                                              selectionMode: "single",
                                              disabled: L,
                                              fullWidth: !0,
                                          }),
                                          (0, n.jsx)(d.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              children: w.intl.string(S.default["NVQu+I"]),
                                          }),
                                      ],
                                  })
                                : null,
                            t.map(ec),
                        ],
                    }),
        eg = U
            ? (0, n.jsx)(d.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: w.intl.string(S.default["A5TC+K"]),
              })
            : null,
        ev = (0, n.jsxs)("div", {
            className: q.Ek,
            children: [
                null != p && "" !== p
                    ? (0, n.jsx)(h.A, { text: p, variant: "body-sm/normal", color: "text-default" })
                    : null,
                null == _
                    ? (0, n.jsx)("div", { className: q.kZ, children: (0, n.jsx)(f.y, {}) })
                    : 0 === et.length && 0 === ee.length
                      ? (0, n.jsx)(d.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: w.intl.string(S.default.lJJayk),
                        })
                      : null,
                null == _
                    ? null
                    : ea
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                er
                                    ? (0, n.jsx)(d.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: w.intl.string(S.default.dsHRPK),
                                      })
                                    : null,
                                en
                                    .filter((e) => !et.some((t) => t.key === e && !0 === t.per_server))
                                    .map(function (e) {
                                        let t = el.get(e);
                                        if (null != t) return em(t);
                                        let l = et.find((t) => t.key === e);
                                        return null == l ? null : ec(l);
                                    }),
                            ],
                        })
                      : et.filter((e) => !0 !== e.per_server).map(ec),
                ep,
                eg,
            ],
        }),
        eh = (0, n.jsxs)("div", {
            className: q.Ek,
            children: [
                (0, n.jsx)(d.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: w.intl.string(S.default.dsHRPK),
                }),
                ee.map(em),
                eg,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
        children: E({
            fields: ev,
            secretFields: eh,
            loaded: null != _,
            valueCount: et.length,
            secretCount: ee.length,
            canSave: eu,
            invalid: es,
            saving: L,
            isScoped: ea,
            submit: eo,
        }),
    });
}
function D(e) {
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
        c = (0, C.TN)(a),
        f = (0, C.Sj)(s, a, (e) => ({ id: e, value: e, label: e })),
        p = {
            label: t.label,
            options: !0 === t.multiple ? (0, C.U5)(f, c) : f,
            placeholder: u,
            onQueryChange: o,
            matchSorterOptions: d,
            disabled: r,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, n.jsxs)("div", {
        className: q._6,
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
function R(e) {
    let { guildId: t, fallback: l, ...a } = e,
        r = (0, p.A)(t, a.def.channel_filter);
    return null == r ? l : (0, n.jsx)(D, { ...a, options: r, placeholder: w.intl.string(S.default.iZIF9m) });
}
function z(e) {
    let { guildId: t, ...l } = e;
    return (0, n.jsx)(D, { ...l, options: (0, v.A)(t) });
}
function F(e) {
    let { guildId: t, ...l } = e,
        { options: a, onQueryChange: r, matchSorterOptions: i } = (0, g.A)(t, (0, C.TN)(l.value));
    return (0, n.jsx)(D, { ...l, options: a, onQueryChange: r, matchSorterOptions: i });
}
function B(e) {
    let { guildId: t, fallback: l, ...a } = e;
    if (null == t) return l;
    switch (a.def.type) {
        case "channel":
            return (0, n.jsx)(R, { ...a, guildId: t, fallback: l });
        case "role":
            return (0, n.jsx)(z, { ...a, guildId: t });
        default:
            return (0, n.jsx)(F, { ...a, guildId: t });
    }
}
