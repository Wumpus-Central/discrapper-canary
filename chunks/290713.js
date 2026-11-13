l.d(t, { A: () => q });
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
    g = l(300344),
    p = l(614733),
    v = l(904363),
    h = l(914250),
    x = l(442331),
    b = l(661095),
    j = l(743082);
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var A = l(513425),
    k = l(540665),
    w = l(191850),
    S = l(792996),
    C = l(950902),
    E = l(331322),
    P = l(782973);
l(321073);
var T = l(896170),
    _ = l(273626),
    N = l(644727),
    I = l(760751);
let M = ["label", "description"];
function L(e) {
    let t,
        l,
        i,
        { value: s, onChange: u, maxOptionsVisible: o = 6, ...d } = e,
        { allOptions: c, runningIds: f } =
            (a.useEffect(() => {
                _.A.getDetectableGames();
            }, []),
            (t = (0, r.bG)([I.A], () => I.A.games)),
            (l = (0, r.bG)([N.Ay], () =>
                N.Ay.getRunningGames()
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
        [g, p] = a.useState(""),
        v = a.useMemo(() => {
            let e, t, l, n;
            return (
                (e = new Set(s)),
                (l = new Set(
                    (t =
                        "" === g.trim()
                            ? c.filter((t) => e.has(t.value) || f.includes(t.value))
                            : (0, T.Ht)([...c], g, { keys: M }).slice(0, 50)).map((e) => e.value),
                )),
                (n = s
                    .filter((e) => !l.has(e))
                    .map((e) => c.find((t) => t.value === e) ?? { id: e, value: e, label: e })),
                (0, C.U5)([...t, ...n], s)
            );
        }, [c, g, f, s]);
    return (0, n.jsx)(m.Z, {
        ...d,
        selectionMode: "multiple",
        wrapTags: !0,
        fullWidth: !0,
        value: [...s],
        options: v,
        maxOptionsVisible: o,
        customMatchSorter: G,
        onQueryChange: (e) => p(e.target.value),
        onSelectionChange: (e) => {
            (p(""), u(e));
        },
    });
}
function G(e) {
    return e;
}
function H(e) {
    let { def: t, hint: l, value: r, pickingEmpty: i, disabled: u, onChange: o, onPickingEmptyChange: c } = e,
        f = a.useMemo(() => (Array.isArray(r) ? r : []), [r]),
        m = Array.isArray(r) && 0 === r.length && !i,
        g = a.useId(),
        p = t.key === P.B ? S.intl.string(w.default.cqWCNY) : (l ?? t.label);
    return (0, n.jsxs)(E.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, n.jsx)(d.E, { variant: "body-sm/normal", color: "text-default", children: p }),
            (0, n.jsx)(L, {
                label: t.label,
                hideLabel: !0,
                placeholder: S.intl.string(w.default["74Afoq"]),
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
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: S.intl.string(w.default["/++Pf+"]),
                  })
                : null,
            (0, n.jsx)(s.S, {
                label: S.intl.string(w.default.dbuk9m),
                checked: m,
                disabled: u,
                onChange: (e) => {
                    (c(!e), o([]));
                },
            }),
        ],
    });
}
var O = l(183265);
let U = { values: {}, secrets: {} };
function q(e) {
    var t;
    let { projectId: l, scopeKeys: m, note: g, notifyAgent: p = !1, isPreview: v = !1, onSaved: E, children: P } = e,
        T = (0, r.bG)([x.A], () => x.A.getSettings(l)),
        [_, N] = a.useState(U),
        [I, M] = a.useState({}),
        [L, G] = a.useState(!1),
        [q, z] = a.useState(!1),
        [D, R] = a.useState({}),
        F = a.useCallback((e, t) => {
            R((l) => (l[e] === t ? l : { ...l, [e]: t }));
        }, []),
        W = a.useCallback((e, t) => {
            (z(!1), N((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        B = a.useCallback((e, t) => {
            (z(!1), N((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        Q = a.useMemo(() => T?.schema ?? [], [T]),
        V = (0, C.Tj)(l, v),
        { servers: K, serverId: J, setServerId: Y } = (0, C.v4)(l, v);
    function Z(e) {
        return (0, b.$c)(e, J);
    }
    function X(e) {
        return _.values[Z(e)] ?? (0, b.pn)(T, e, J);
    }
    let ee = a.useMemo(
            () =>
                (T?.secrets ?? []).map((e) => ({ ...e, def: Q.find((t) => t.key === e.name && "secret" === t.type) })),
            [Q, T],
        ),
        et = Q.filter((e) => "secret" !== e.type),
        el = new Map(ee.map((e) => [e.name, e])),
        en = (m ?? []).filter((e) => et.some((t) => t.key === e) || el.has(e)),
        ea = en.length > 0,
        er = en.some((e) => el.has(e)),
        ei = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(_.secrets)) "" !== l.trim() && (e[t] = l.trim());
            return { ...(0, b.DG)(T, _.values), ...(0, b.mU)(Q, e) };
        }, [_, Q, T]),
        es = Q.some((e) => "game" === e.type && !0 === D[e.key]),
        eu = (null != ei.values || null != ei.server_values || null != ei.secrets) && !es,
        eo = a.useCallback(async () => {
            if (es) return !1;
            if (!eu || L) return !0;
            (G(!0), z(!1));
            try {
                let { rebuildRequired: e } = await (0, j.nU)(l, ei);
                return (
                    !(function (e, t) {
                        let { rebuildRequired: l, notifyAgent: n } = t;
                        n || A.A.hasPendingSettingsRequest(e)
                            ? (0, k.dv)(e, S.intl.string(w.default["08bsJL"]))
                            : l && (0, j.ss)(e);
                    })(l, { rebuildRequired: e, notifyAgent: p }),
                    N(U),
                    M({}),
                    E?.(),
                    !0
                );
            } catch {
                return (z(!0), !1);
            } finally {
                G(!1);
            }
        }, [eu, es, p, E, l, L, ei]);
    function ed(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? S.intl.string(w.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? S.intl.formatToPlainString(w.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function ec(e) {
        let t = ed(e),
            l = Z(e);
        if ("select" === e.type) {
            let a = X(e),
                r = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, n.jsxs)(
                "div",
                {
                    className: O._6,
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
                      className: O._6,
                      children: [
                          (0, n.jsx)(s.S, {
                              label: e.label,
                              checked: !0 === X(e),
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
                    H,
                    {
                        def: e,
                        hint: t,
                        value: X(e),
                        pickingEmpty: !0 === D[e.key],
                        disabled: L,
                        onChange: (t) => W(e.key, t),
                        onPickingEmptyChange: (t) => F(e.key, t),
                    },
                    e.key,
                )
              : "channel" === e.type || "role" === e.type || "user" === e.type
                ? (0, n.jsx)(
                      $,
                      {
                          guildId: !0 === e.per_server ? J : V,
                          def: e,
                          hint: t,
                          value: X(e),
                          disabled: L,
                          onChange: (e) => W(l, e),
                          fallback: ef(e, t),
                      },
                      l,
                  )
                : ef(e, t);
    }
    function ef(e, t) {
        let l = Z(e),
            a = X(e);
        return !0 === e.multiline
            ? (0, n.jsx)(
                  u.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: y(e),
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
                      className: O._6,
                      children: [
                          (0, n.jsx)(o.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: y(e),
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
        return e.set && !0 !== I[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: O.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: O.DE,
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
                      className: O._6,
                      children: [
                          (0, n.jsx)(o.k, {
                              label: t,
                              name: e.name,
                              type: "password",
                              autoComplete: "off",
                              placeholder: e.set
                                  ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                  : void 0,
                              required: y(e.def, e.set),
                              value: _.secrets[e.name] ?? "",
                              onChange: (t) => B(e.name, t),
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
    let eg =
            0 === (t = (ea ? et.filter((e) => en.includes(e.key)) : et).filter((e) => !0 === e.per_server)).length
                ? null
                : null == J
                  ? (0, n.jsx)(d.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: S.intl.string(w.default.IT21e4),
                    })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            K.length > 1
                                ? (0, n.jsxs)("div", {
                                      className: O._6,
                                      children: [
                                          (0, n.jsx)(i.l, {
                                              label: S.intl.string(w.default["6FmRyw"]),
                                              options: K.map((e) => ({
                                                  id: e.guildId,
                                                  label: e.name,
                                                  value: e.guildId,
                                              })),
                                              value: J,
                                              onSelectionChange: (e) => Y(e),
                                              selectionMode: "single",
                                              disabled: L,
                                              fullWidth: !0,
                                          }),
                                          (0, n.jsx)(d.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              children: S.intl.string(w.default["NVQu+I"]),
                                          }),
                                      ],
                                  })
                                : null,
                            t.map(ec),
                        ],
                    }),
        ep = q
            ? (0, n.jsx)(d.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: S.intl.string(w.default["A5TC+K"]),
              })
            : null,
        ev = (0, n.jsxs)("div", {
            className: O.Ek,
            children: [
                null != g && "" !== g
                    ? (0, n.jsx)(h.A, { text: g, variant: "body-sm/normal", color: "text-default" })
                    : null,
                null == T
                    ? (0, n.jsx)("div", { className: O.kZ, children: (0, n.jsx)(f.y, {}) })
                    : 0 === et.length && 0 === ee.length
                      ? (0, n.jsx)(d.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: S.intl.string(w.default.lJJayk),
                        })
                      : null,
                null == T
                    ? null
                    : ea
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                er
                                    ? (0, n.jsx)(d.E, {
                                          variant: "body-xs/normal",
                                          color: "text-muted",
                                          selectable: !0,
                                          children: S.intl.string(w.default.dsHRPK),
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
                eg,
                ep,
            ],
        }),
        eh = (0, n.jsxs)("div", {
            className: O.Ek,
            children: [
                (0, n.jsx)(d.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: S.intl.string(w.default.dsHRPK),
                }),
                ee.map(em),
                ep,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
        children: P({
            fields: ev,
            secretFields: eh,
            loaded: null != T,
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
function z(e) {
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
        g = {
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
        className: O._6,
        children: [
            !0 === t.multiple
                ? (0, n.jsx)(m.Z, {
                      ...g,
                      selectionMode: "multiple",
                      wrapTags: !0,
                      value: c,
                      onSelectionChange: (e) => i(e ?? []),
                  })
                : (0, n.jsx)(m.Z, { ...g, selectionMode: "single", value: c[0], onSelectionChange: (e) => i(e ?? "") }),
            null != l ? (0, n.jsx)(h.A, { text: l, variant: "body-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function D(e) {
    let { guildId: t, fallback: l, ...a } = e,
        r = (0, g.A)(t, a.def.channel_filter);
    return null == r ? l : (0, n.jsx)(z, { ...a, options: r, placeholder: S.intl.string(w.default.iZIF9m) });
}
function R(e) {
    let { guildId: t, ...l } = e;
    return (0, n.jsx)(z, { ...l, options: (0, v.A)(t) });
}
function F(e) {
    let { guildId: t, ...l } = e,
        { options: a, onQueryChange: r, matchSorterOptions: i } = (0, p.A)(t, (0, C.TN)(l.value));
    return (0, n.jsx)(z, { ...l, options: a, onQueryChange: r, matchSorterOptions: i });
}
function $(e) {
    let { guildId: t, fallback: l, ...a } = e;
    if (null == t) return l;
    switch (a.def.type) {
        case "channel":
            return (0, n.jsx)(D, { ...a, guildId: t, fallback: l });
        case "role":
            return (0, n.jsx)(R, { ...a, guildId: t });
        default:
            return (0, n.jsx)(F, { ...a, guildId: t });
    }
}
