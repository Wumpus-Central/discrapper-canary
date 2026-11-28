l.d(t, { A: () => W });
var n = l(477900),
    a = l(582128),
    i = l(855986),
    r = l(858899),
    s = l(691885),
    u = l(150934),
    o = l(103557),
    d = l(95477),
    c = l(834730),
    f = l(821609),
    m = l(289873),
    g = l(534514),
    p = l(890497),
    h = l(300344),
    v = l(614733),
    x = l(904363),
    b = l(347941),
    y = l(225446),
    j = l(633636),
    k = l(383668),
    A = l(442331),
    S = l(661095),
    w = l(743082),
    C = l(512976);
function E(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e?.required === !0 && ("secret" !== e.type || !t);
}
var I = l(513425),
    P = l(540665),
    T = l(258576),
    _ = l(792996),
    N = l(44252),
    M = l(950902),
    L = l(331322),
    q = l(782973);
l(321073);
var O = l(896170),
    D = l(273626),
    G = l(644727),
    F = l(760751);
let $ = ["label", "description"];
function z(e) {
    let t,
        l,
        r,
        { value: s, onChange: u, maxOptionsVisible: o = 6, ...d } = e,
        { allOptions: c, runningIds: f } =
            (a.useEffect(() => {
                D.A.getDetectableGames();
            }, []),
            (t = (0, i.bG)([F.A], () => F.A.games)),
            (l = (0, i.bG)([G.Ay], () =>
                G.Ay.getRunningGames()
                    .flatMap((e) => (null != e.id ? [e.id] : []))
                    .join(","),
            )),
            (r = a.useMemo(() => {
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
            a.useMemo(() => ({ allOptions: r, runningIds: l.split(",") }), [r, l])),
        [m, g] = a.useState(""),
        h = a.useMemo(() => {
            let e, t, l, n;
            return (
                (e = new Set(s)),
                (l = new Set(
                    (t =
                        "" === m.trim()
                            ? c.filter((t) => e.has(t.value) || f.includes(t.value))
                            : (0, O.Ht)([...c], m, { keys: $ }).slice(0, 50)).map((e) => e.value),
                )),
                (n = s
                    .filter((e) => !l.has(e))
                    .map((e) => c.find((t) => t.value === e) ?? { id: e, value: e, label: e })),
                (0, M.U5)([...t, ...n], s)
            );
        }, [c, m, f, s]);
    return (0, n.jsx)(p.Z, {
        ...d,
        selectionMode: "multiple",
        wrapTags: !0,
        fullWidth: !0,
        value: [...s],
        options: h,
        maxOptionsVisible: o,
        customMatchSorter: U,
        onQueryChange: (e) => g(e.target.value),
        onSelectionChange: (e) => {
            (g(""), u(e));
        },
    });
}
function U(e) {
    return e;
}
function H(e) {
    let { def: t, hint: l, value: i, pickingEmpty: r, disabled: s, onChange: o, onPickingEmptyChange: d } = e,
        f = a.useMemo(() => (Array.isArray(i) ? i : []), [i]),
        m = Array.isArray(i) && 0 === i.length && !r,
        g = a.useId(),
        p = t.key === q.B ? _.intl.string(T.default.cqWCNY) : (l ?? t.label);
    return (0, n.jsxs)(L.B, {
        gap: 8,
        "data-conjure-game-setting": t.key,
        children: [
            (0, n.jsx)(c.E, { variant: "body-sm/normal", color: "text-default", children: p }),
            (0, n.jsx)(z, {
                label: t.label,
                hideLabel: !0,
                placeholder: _.intl.string(T.default["74Afoq"]),
                value: f,
                disabled: s,
                "aria-invalid": r,
                "aria-errormessage": r ? g : void 0,
                onChange: (e) => {
                    (d(0 === e.length), o(e));
                },
            }),
            r
                ? (0, n.jsx)(c.E, {
                      id: g,
                      variant: "body-xs/normal",
                      color: "text-feedback-critical",
                      role: "alert",
                      children: _.intl.string(T.default["/++Pf+"]),
                  })
                : null,
            (0, n.jsx)(u.S, {
                label: _.intl.string(T.default.dbuk9m),
                checked: m,
                disabled: s,
                onChange: (e) => {
                    (d(!e), o([]));
                },
            }),
        ],
    });
}
var R = l(183265);
let B = { values: {}, secrets: {} };
function W(e) {
    var t;
    let { projectId: l, scopeKeys: p, note: h, notifyAgent: v = !1, isPreview: x = !1, onSaved: L, children: q } = e,
        O = (0, i.bG)([A.A], () => A.A.getSettings(l)),
        [D, G] = a.useState(B),
        [F, $] = a.useState({}),
        [z, U] = a.useState(!1),
        [W, K] = a.useState(!1),
        [Z, V] = a.useState(!1),
        [Y, Q] = a.useState(null),
        J = a.useId(),
        ee = a.useId(),
        [et, el] = a.useState({}),
        en = a.useCallback((e, t) => {
            el((l) => (l[e] === t ? l : { ...l, [e]: t }));
        }, []),
        ea = a.useCallback((e, t) => {
            (K(!1), Q((t) => (t === e ? null : t)), G((l) => ({ ...l, values: { ...l.values, [e]: t } })));
        }, []),
        ei = a.useCallback((e, t) => {
            (K(!1), G((l) => ({ ...l, secrets: { ...l.secrets, [e]: t } })));
        }, []),
        er = a.useMemo(() => O?.schema ?? [], [O]),
        es = (0, M.Tj)(l, x),
        { servers: eu, serverId: eo, setServerId: ed } = (0, M.v4)(l, x);
    function ec(e) {
        return (0, S.$c)(e, eo);
    }
    function ef(e) {
        return D.values[ec(e)] ?? (0, S.pn)(O, e, eo);
    }
    let em = a.useMemo(
            () =>
                (O?.secrets ?? []).map((e) => ({ ...e, def: er.find((t) => t.key === e.name && "secret" === t.type) })),
            [er, O],
        ),
        eg = er.filter((e) => "secret" !== e.type),
        ep = new Map(em.map((e) => [e.name, e])),
        eh = (0, C.CK)(p).filter((e) => eg.some((t) => t.key === e) || ep.has(e)),
        ev = eh.length > 0,
        ex = null == O ? null : (0, C.Nx)(eh, O),
        eb = a.useMemo(() => {
            let e = {};
            for (let [t, l] of Object.entries(D.secrets)) "" !== l.trim() && (e[t] = l.trim());
            return { ...(0, S.DG)(O, D.values), ...(0, S.mU)(er, e) };
        }, [D, er, O]),
        ey = ev && null != O ? (0, N.ue)(eh, O, { values: D.values, secrets: D.secrets, serverId: eo }) : null,
        ej = (0, N.eX)((ey ?? []).filter((e) => e.needed).map((e) => e.label));
    function ek(e) {
        let t = ev ? (0, N.q9)(e, D.values[ec(e)]) : null;
        if (null != t)
            return "min" === t.kind
                ? _.intl.formatToPlainString(T.default.kDApFd, { min: t.min })
                : "max" === t.kind
                  ? _.intl.formatToPlainString(T.default["5ft/Ii"], { max: t.max })
                  : _.intl.string(T.default["0A2STI"]);
    }
    let eA = (ex?.valueKeys ?? []).map((e) => eg.find((t) => t.key === e)).find((e) => null != e && null != ek(e)),
        eS = null == eA ? null : ec(eA),
        ew = null != eS,
        eC = er.some((e) => "game" === e.type && !0 === et[e.key]),
        eE = (null != eb.values || null != eb.server_values || null != eb.secrets || ew) && !eC,
        eI = a.useCallback(async () => {
            if (eC) return !1;
            if (null != eS) return (V(!0), Q(eS), document.getElementById(`${J}-${eS}`)?.focus(), !1);
            if (!eE || z) return !0;
            (U(!0), K(!1));
            try {
                let { rebuildRequired: e } = await (0, w.nU)(l, eb),
                    t = "" !== ej;
                return (
                    !(function (e, t) {
                        let { rebuildRequired: l, notifyAgent: n, incomplete: a = !1 } = t;
                        n || I.A.hasPendingSettingsRequest(e)
                            ? a || (0, P.dv)(e, _.intl.string(T.default["08bsJL"]))
                            : l && (0, w.ss)(e);
                    })(l, { rebuildRequired: e, notifyAgent: v, incomplete: t }),
                    G(B),
                    $({}),
                    V(!1),
                    t
                        ? (0, r.P0)({
                              text: _.intl.formatToPlainString(T.default["xfz7+k"], { items: ej }),
                              variant: "success",
                          })
                        : L?.(),
                    !0
                );
            } catch {
                return (K(!0), !1);
            } finally {
                U(!1);
            }
        }, [eE, eS, J, eC, v, L, l, z, ej, eb]);
    function eP(e) {
        let t = [
            e?.hint != null && "" !== e.hint ? e.hint : void 0,
            e?.requires_rebuild === !0 ? _.intl.string(T.default["4kCM6H"]) : void 0,
            e?.type === "secret" && null != e.hosts && e.hosts.length > 0
                ? _.intl.formatToPlainString(T.default.Ww9HFO, { hosts: e.hosts.join(", ") })
                : void 0,
        ].filter((e) => null != e);
        return 0 === t.length ? void 0 : t.join(" ");
    }
    function eT(e) {
        return !0 === e.requires_rebuild ? _.intl.string(T.default["4kCM6H"]) : void 0;
    }
    function e_(e) {
        let t = (function (e) {
                if (ev)
                    return (0, n.jsx)(j.A, {
                        fieldId: `${J}-${ec(e)}`,
                        label: e.label,
                        help: e.hint,
                        labelsInput: !1,
                        optional: !E(e),
                    });
            })(e),
            l = eP(e),
            a = null == t ? l : eT(e),
            i = ec(e);
        if ("select" === e.type) {
            let l = ef(e),
                r = (e.options ?? []).map((e) => ({ id: e.value, label: e.label, value: e.value }));
            return (0, n.jsxs)(
                "div",
                {
                    className: null == t ? R._6 : R.qs,
                    children: [
                        t,
                        !0 === e.multiple
                            ? (0, n.jsx)(s.l, {
                                  label: e.label,
                                  hideLabel: null != t,
                                  options: r,
                                  value: Array.isArray(l) ? l : [],
                                  onSelectionChange: (e) => ea(i, e),
                                  selectionMode: "multiple",
                                  wrapTags: !0,
                                  disabled: z,
                                  fullWidth: !0,
                              })
                            : (0, n.jsx)(s.l, {
                                  label: e.label,
                                  hideLabel: null != t,
                                  options: r,
                                  value: "string" == typeof l ? l : void 0,
                                  onSelectionChange: (e) => ea(i, e),
                                  selectionMode: "single",
                                  disabled: z,
                                  fullWidth: !0,
                              }),
                        null != a ? (0, n.jsx)(k.A, { text: a, variant: "body-xs/normal", color: "text-muted" }) : null,
                    ],
                },
                i,
            );
        }
        return "checkbox" === e.type
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: R._6,
                      children: [
                          (0, n.jsx)(u.S, {
                              label: e.label,
                              checked: !0 === ef(e),
                              onChange: (e) => ea(i, e),
                              disabled: z,
                          }),
                          null != l
                              ? (0, n.jsx)(k.A, {
                                    text: l,
                                    variant: "body-xs/normal",
                                    color: "text-muted",
                                    shortLinks: ev,
                                })
                              : null,
                      ],
                  },
                  i,
              )
            : "game" === e.type
              ? (0, n.jsx)(
                    H,
                    {
                        def: e,
                        hint: l,
                        value: ef(e),
                        pickingEmpty: !0 === et[e.key],
                        disabled: z,
                        onChange: (t) => ea(e.key, t),
                        onPickingEmptyChange: (t) => en(e.key, t),
                    },
                    e.key,
                )
              : "channel" === e.type || "role" === e.type || "user" === e.type
                ? (0, n.jsx)(
                      X,
                      {
                          guildId: !0 === e.per_server ? eo : es,
                          def: e,
                          heading: t,
                          hint: a,
                          value: ef(e),
                          disabled: z,
                          onChange: (e) => ea(i, e),
                          fallback: eN(e, l),
                      },
                      i,
                  )
                : eN(e, l);
    }
    function eN(e, t) {
        let l = ec(e),
            a = ef(e);
        if (ev) {
            let t = `${J}-${l}`,
                i = E(e),
                r = null != e.hint && "" !== e.hint,
                { markId: s, helpId: u } = (0, j.x)(t),
                c = [i ? null : s, r ? u : null].filter((e) => null != e).join(" "),
                f = {
                    id: t,
                    name: e.key,
                    required: i,
                    "aria-describedby": "" === c ? void 0 : c,
                    helperText: eT(e),
                    onChange: (e) => ea(l, e),
                    disabled: z,
                };
            return (0, n.jsxs)(
                "div",
                {
                    className: R.qs,
                    children: [
                        (0, n.jsx)(j.A, { fieldId: t, label: e.label, help: e.hint, optional: !i }),
                        !0 === e.multiline
                            ? (0, n.jsx)(o.f, {
                                  ...f,
                                  value: "string" == typeof a ? a : "",
                                  rows: 6,
                                  maxRows: 15,
                                  autosize: !0,
                              })
                            : (0, n.jsx)(d.k, {
                                  ...f,
                                  autoComplete: "off",
                                  error: Z ? ek(e) : void 0,
                                  value: Array.isArray(a) ? a.join(", ") : null == a ? "" : String(a),
                                  fullWidth: !0,
                                  ...("number" === e.type
                                      ? { type: "number", min: e.min, max: e.max, step: e.step }
                                      : {}),
                              }),
                    ],
                },
                l,
            );
        }
        return !0 === e.multiline
            ? (0, n.jsx)(
                  o.f,
                  {
                      label: e.label,
                      helperText: t,
                      required: E(e),
                      value: "string" == typeof a ? a : "",
                      onChange: (e) => ea(l, e),
                      disabled: z,
                      rows: 6,
                      maxRows: 15,
                      autosize: !0,
                  },
                  l,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: R._6,
                      children: [
                          (0, n.jsx)(d.k, {
                              label: e.label,
                              name: e.key,
                              autoComplete: "off",
                              required: E(e),
                              value: Array.isArray(a) ? a.join(", ") : null == a ? "" : String(a),
                              onChange: (e) => ea(l, e),
                              disabled: z,
                              fullWidth: !0,
                              ...("number" === e.type ? { type: "number", min: e.min, max: e.max, step: e.step } : {}),
                          }),
                          null != t
                              ? (0, n.jsx)(k.A, { text: t, variant: "body-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  l,
              );
    }
    function eM(e) {
        let t = e.def?.label ?? e.name;
        if (ev)
            return (0, n.jsx)(
                b.A,
                {
                    fieldId: `${J}-${e.name}`,
                    name: e.name,
                    label: t,
                    help: e.def?.hint,
                    hosts: e.def?.hosts,
                    stored: e.set,
                    replacing: !0 === F[e.name],
                    onReplace: () => $((t) => ({ ...t, [e.name]: !0 })),
                    required: e.def?.required === !0,
                    value: D.secrets[e.name] ?? "",
                    onChange: (t) => ei(e.name, t),
                    disabled: z,
                },
                e.name,
            );
        let l = eP(e.def);
        return e.set && !0 !== F[e.name]
            ? (0, n.jsxs)(
                  "div",
                  {
                      className: R.tx,
                      children: [
                          (0, n.jsxs)("div", {
                              className: R.DE,
                              children: [
                                  (0, n.jsx)(c.E, { variant: "body-sm/medium", color: "text-default", children: t }),
                                  (0, n.jsx)(c.E, {
                                      variant: "body-sm/normal",
                                      color: "text-muted",
                                      tag: "span",
                                      children:
                                          "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
                                  }),
                                  null != l
                                      ? (0, n.jsx)(k.A, { text: l, variant: "body-xs/normal", color: "text-muted" })
                                      : null,
                              ],
                          }),
                          (0, n.jsx)(f.$, {
                              variant: "secondary",
                              size: "sm",
                              text: _.intl.string(T.default.RsvBGf),
                              "aria-label": _.intl.formatToPlainString(T.default.WjoM7z, { label: t }),
                              disabled: z,
                              onClick: () => $((t) => ({ ...t, [e.name]: !0 })),
                          }),
                      ],
                  },
                  e.name,
              )
            : (0, n.jsxs)(
                  "div",
                  {
                      className: R._6,
                      children: [
                          (0, n.jsx)(d.k, {
                              label: t,
                              name: e.name,
                              type: "password",
                              autoComplete: "off",
                              placeholder: e.set
                                  ? "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
                                  : void 0,
                              required: E(e.def, e.set),
                              value: D.secrets[e.name] ?? "",
                              onChange: (t) => ei(e.name, t),
                              disabled: z,
                              fullWidth: !0,
                          }),
                          null != l
                              ? (0, n.jsx)(k.A, { text: l, variant: "body-xs/normal", color: "text-muted" })
                              : null,
                      ],
                  },
                  e.name,
              );
    }
    function eL(e) {
        let t = ep.get(e);
        if (null != t) return eM(t);
        let l = eg.find((t) => t.key === e);
        return null == l ? null : e_(l);
    }
    let eq =
            0 === (t = (ev ? eg.filter((e) => eh.includes(e.key)) : eg).filter((e) => !0 === e.per_server)).length
                ? null
                : null == eo
                  ? (0, n.jsx)(c.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: _.intl.string(T.default.IT21e4),
                    })
                  : (0, n.jsxs)(n.Fragment, {
                        children: [
                            eu.length > 1
                                ? (0, n.jsxs)("div", {
                                      className: R._6,
                                      children: [
                                          (0, n.jsx)(s.l, {
                                              label: _.intl.string(T.default["6FmRyw"]),
                                              options: eu.map((e) => ({
                                                  id: e.guildId,
                                                  label: e.name,
                                                  value: e.guildId,
                                              })),
                                              value: eo,
                                              onSelectionChange: (e) => ed(e),
                                              selectionMode: "single",
                                              disabled: z,
                                              fullWidth: !0,
                                          }),
                                          (0, n.jsx)(c.E, {
                                              variant: "body-xs/normal",
                                              color: "text-muted",
                                              children: _.intl.string(T.default["NVQu+I"]),
                                          }),
                                      ],
                                  })
                                : null,
                            t.map(e_),
                        ],
                    }),
        eO = W
            ? (0, n.jsx)(c.E, {
                  variant: "body-xs/normal",
                  color: "text-feedback-critical",
                  role: "alert",
                  children: _.intl.string(T.default["A5TC+K"]),
              })
            : null,
        eD = eg.find((e) => ec(e) === Y),
        eG = null == eD ? void 0 : ek(eD),
        eF = null != eD && null != eG ? (0, N.hI)(eD.label, eG) : null == ey ? null : (0, N.xM)(ey),
        e$ = (ex?.valueKeys ?? []).filter((e) => !eg.some((t) => t.key === e && !0 === t.per_server)),
        ez = (0, n.jsxs)("div", {
            className: ev ? R.kP : R.Ek,
            children: [
                null != h && "" !== h
                    ? (0, n.jsx)(k.A, { text: h, variant: "body-sm/normal", color: "text-default", shortLinks: ev })
                    : null,
                null == O
                    ? (0, n.jsx)("div", { className: R.kZ, children: (0, n.jsx)(m.y, {}) })
                    : 0 === eg.length && 0 === em.length
                      ? (0, n.jsx)(c.E, {
                            variant: "body-sm/normal",
                            color: "text-muted",
                            children: _.intl.string(T.default.lJJayk),
                        })
                      : null,
                null == ex
                    ? null
                    : ev
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                ex.secretKeys.length > 0
                                    ? (0, n.jsx)(y.A, {
                                          title: _.intl.string(T.default["xEfQj/"]),
                                          children: ex.secretKeys.map(eL),
                                      })
                                    : null,
                                ex.sectioned
                                    ? (0, n.jsxs)("section", {
                                          className: R.$w,
                                          "aria-labelledby": ee,
                                          children: [
                                              (0, n.jsxs)("div", {
                                                  className: R.uT,
                                                  children: [
                                                      (0, n.jsx)(g.D, {
                                                          variant: "heading-sm/semibold",
                                                          id: ee,
                                                          children: _.intl.string(T.default["I+6HlE"]),
                                                      }),
                                                      (0, n.jsx)(c.E, {
                                                          variant: "body-xs/normal",
                                                          color: "text-muted",
                                                          children: _.intl.string(T.default.ZyFI3A),
                                                      }),
                                                  ],
                                              }),
                                              e$.map(eL),
                                              eq,
                                          ],
                                      })
                                    : ex.valueKeys.length > 0
                                      ? (0, n.jsxs)("div", { className: R.$w, children: [e$.map(eL), eq] })
                                      : null,
                            ],
                        })
                      : (0, n.jsxs)(n.Fragment, { children: [eg.filter((e) => !0 !== e.per_server).map(e_), eq] }),
                eO,
            ],
        }),
        eU = (0, n.jsxs)("div", {
            className: R.Ek,
            children: [
                (0, n.jsx)(c.E, {
                    variant: "body-xs/normal",
                    color: "text-muted",
                    selectable: !0,
                    children: _.intl.string(T.default.jgDBJZ),
                }),
                em.map(eM),
                eO,
            ],
        });
    return (0, n.jsx)(n.Fragment, {
        children: q({
            fields: ez,
            secretFields: eU,
            loaded: null != O,
            valueCount: eg.length,
            secretCount: em.length,
            canSave: eE,
            invalid: eC,
            saving: z,
            isScoped: ev,
            progress: null == ey ? null : { filled: ey.filter((e) => e.filled).length, total: ey.length },
            status: eF,
            statusIsError: null != eG,
            submit: eI,
        }),
    });
}
function K(e) {
    let {
            def: t,
            heading: l,
            hint: a,
            value: i,
            disabled: r,
            onChange: s,
            options: u,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
        } = e,
        f = (0, M.TN)(i),
        m = (0, M.Sj)(u, i, (e) => ({ id: e, value: e, label: e })),
        g = {
            label: t.label,
            hideLabel: null != l,
            options: !0 === t.multiple ? (0, M.U5)(m, f) : m,
            placeholder: o,
            onQueryChange: d,
            matchSorterOptions: c,
            disabled: r,
            fullWidth: !0,
            clearable: !0,
        };
    return (0, n.jsxs)("div", {
        className: null == l ? R._6 : R.qs,
        children: [
            l,
            !0 === t.multiple
                ? (0, n.jsx)(p.Z, {
                      ...g,
                      selectionMode: "multiple",
                      wrapTags: !0,
                      value: f,
                      onSelectionChange: (e) => s(e ?? []),
                  })
                : (0, n.jsx)(p.Z, { ...g, selectionMode: "single", value: f[0], onSelectionChange: (e) => s(e ?? "") }),
            null != a ? (0, n.jsx)(k.A, { text: a, variant: "body-xs/normal", color: "text-muted" }) : null,
        ],
    });
}
function Z(e) {
    let { guildId: t, fallback: l, ...a } = e,
        i = (0, h.A)(t, a.def.channel_filter);
    return null == i ? l : (0, n.jsx)(K, { ...a, options: i, placeholder: _.intl.string(T.default.iZIF9m) });
}
function V(e) {
    let { guildId: t, ...l } = e;
    return (0, n.jsx)(K, { ...l, options: (0, x.A)(t) });
}
function Y(e) {
    let { guildId: t, ...l } = e,
        { options: a, onQueryChange: i, matchSorterOptions: r } = (0, v.A)(t, (0, M.TN)(l.value));
    return (0, n.jsx)(K, { ...l, options: a, onQueryChange: i, matchSorterOptions: r });
}
function X(e) {
    let { guildId: t, fallback: l, ...a } = e;
    if (null == t) return l;
    switch (a.def.type) {
        case "channel":
            return (0, n.jsx)(Z, { ...a, guildId: t, fallback: l });
        case "role":
            return (0, n.jsx)(V, { ...a, guildId: t });
        default:
            return (0, n.jsx)(Y, { ...a, guildId: t });
    }
}
