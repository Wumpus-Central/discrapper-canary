(t.d(l, { default: () => _ }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(17928),
    s = t(189213),
    r = t(761508),
    u = t(834730),
    d = t(289873),
    o = t(597331),
    c = t(26278),
    g = t(938377),
    f = t(966249);
t(938796);
var p = t(545442),
    h = t(331322),
    b = t(95477),
    x = t(193249),
    m = t(890497),
    S = t(317525),
    v = t(164892),
    j = t(477818),
    y = t(870440),
    C = t(522854),
    k = t(227076),
    A = t(652215),
    I = t(248675),
    P = t(375708),
    E = t(167804);
let w = { project: I.default.W0eQfN, app: I.default.lFaJYF, secrets: I.default.vDpCPU, model: I.default.Rs3qc9 };
function _(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: g,
            scopeKeys: _,
            note: R,
            notifyAgent: V,
            isPreview: Z,
            transitionState: B,
            onClose: L,
        } = e,
        T = (0, i.bG)([c.Ay], () => c.Ay.getProject(l), [l]),
        J = (0, i.bG)([o.Ay], () => o.Ay.getModelSettings(l), [l]),
        q = (0, i.bG)([o.Ay], () => "open" === o.Ay.getConnState(l), [l]),
        D = null != T && (0, c.PV)(T),
        F = (function (e, l) {
            var t;
            let s,
                r = (0, i.bG)([c.Ay], () => c.Ay.getProject(e), [e]),
                d = (0, i.yK)([S.A], () => (null != l ? S.A.getSortedRoles(l) : []), [l]),
                g = a.useMemo(
                    () =>
                        d.map((e) => ({
                            key: e.id,
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: () => (0, n.jsx)(p.R, { color: e.colorString ?? A.TpD, colors: e.colorStrings }),
                        })),
                    [d],
                ),
                f = (function (e) {
                    let l = (0, i.bG)([C.A], () => C.A.getLiveReload(e), [e]),
                        [t, n] = a.useState(null),
                        [s, r] = a.useState(null);
                    null != s && l !== s.before && r(null);
                    let u = null != s && l === s.before ? s.enabled : l?.enabled;
                    null != t && t === u && n(null);
                    let d = null != l && null != t && t !== u,
                        c = a.useCallback(
                            () => !d || null == t || (!!(0, o.ct)(e, t) && (r({ enabled: t, before: l }), n(null), !0)),
                            [d, t, l, e],
                        );
                    return {
                        available: null != l,
                        checked: t ?? u ?? !1,
                        description: null == l ? "" : (0, k.oV)(l),
                        changed: d,
                        setChecked: n,
                        save: c,
                    };
                })(e),
                E = f.save,
                w = r?.collaborator_role_ids ?? [],
                [_, G] = a.useState(r?.name ?? ""),
                [R, V] = a.useState(null),
                [Z, B] = a.useState(_),
                [L, T] = a.useState(r?.flags ?? 0),
                [J, q] = a.useState(() => [...w]),
                [D, F] = a.useState(!1),
                [H, Q] = a.useState(null),
                [K, M] = a.useState(null),
                [N, U] = a.useState(null),
                X = a.useId(),
                z = Z.trim(),
                O = null != r && (0, v.IU)(r),
                W = null != r && "user" !== r.install_scope,
                Y = W && null != l && (0, v.RX)(r),
                { isPublic: $, isShared: ee } = (0, y.n5)(L),
                el = null != r && z !== _,
                et = O && L !== (R?.flags ?? r?.flags ?? 0),
                en =
                    Y &&
                    ((t = R?.roleIds ?? w),
                    !((s = J instanceof Set ? J : new Set(J)).size === t.length && t.every((e) => s.has(e)))),
                ea = el || et || en,
                ei = ea || f.changed,
                es = a.useCallback((e) => {
                    (B(e), Q(null), U(null));
                }, []),
                er = a.useCallback((e, l) => {
                    (T((t) => (l ? t | e : t & ~e)), M(null), U(null));
                }, []),
                eu = a.useCallback((e) => {
                    e.length > v.sq
                        ? M(P.intl.formatToPlainString(I.default["dH7+/Z"], { max: v.sq }))
                        : (q(e), M(null), U(null));
                }, []),
                ed = a.useCallback(async () => {
                    if (null == r || !ei || D) return !0;
                    if ("" === z) return (Q(P.intl.string(I.default.l669D8)), !1);
                    let t = {};
                    (el && (t.name = z),
                        et && (t.flags = L),
                        en && (t.collaborator_role_ids = [...J].sort()),
                        null == r.guild_id && null != l && (en || (et && $)) && (t.guild_id = l),
                        F(!0),
                        U(null));
                    try {
                        if (ea) {
                            if (!(await (0, j.CW)(e, t)).ok) return (U(P.intl.string(I.default["9JPr8h"])), !1);
                            (G(z), V({ flags: L, roleIds: [...J] }));
                        }
                        if (!E()) return (U(P.intl.string(I.default.XzkNBw)), !1);
                        return !0;
                    } catch {
                        return (U(P.intl.string(I.default["9JPr8h"])), !1);
                    } finally {
                        F(!1);
                    }
                }, [L, et, E, ea, l, ei, $, el, r, e, en, D, J, z]);
            return {
                fields: (0, n.jsxs)(h.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(b.k, {
                            label: P.intl.string(I.default.ncxNJT),
                            value: Z,
                            onChange: es,
                            error: H,
                            maxLength: 128,
                            disabled: D,
                            fullWidth: !0,
                        }),
                        O
                            ? (0, n.jsx)(x.d, {
                                  label: P.intl.string(I.default.gchQFO),
                                  description: P.intl.string(I.default.mD4GBH),
                                  checked: ee,
                                  disabled: D,
                                  onChange: (e) => er(v.Zh.SHAREABLE, e),
                              })
                            : null,
                        O && W
                            ? (0, n.jsx)(x.d, {
                                  label: P.intl.string(I.default.lVvR4E),
                                  description: P.intl.string(I.default.SQZGoV),
                                  checked: $,
                                  disabled: D,
                                  onChange: (e) => er(v.Zh.PUBLIC, e),
                              })
                            : null,
                        f.available
                            ? (0, n.jsx)(x.d, {
                                  label: P.intl.string(I.default.eEo0ye),
                                  badge: { text: P.intl.string(I.default.LHrqVg) },
                                  description: f.description,
                                  checked: f.checked,
                                  disabled: D,
                                  onChange: (e) => {
                                      (f.setChecked(e), U(null));
                                  },
                              })
                            : null,
                        Y
                            ? (0, n.jsxs)(h.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(u.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: P.intl.string(I.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(m.Z, {
                                          selectionMode: "multiple",
                                          label: P.intl.string(I.default["pO3+p5"]),
                                          placeholder: P.intl.string(I.default.gvL7QS),
                                          value: J,
                                          options: g,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: D || !$,
                                          "aria-invalid": null != K,
                                          "aria-errormessage": null != K ? X : void 0,
                                          onSelectionChange: eu,
                                      }),
                                      (0, n.jsx)(u.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: P.intl.formatToPlainString(I.default.g5I05P, {
                                              count: J.length,
                                              max: v.sq,
                                          }),
                                      }),
                                      $
                                          ? null
                                          : (0, n.jsx)(u.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: P.intl.string(I.default.nZw5r9),
                                            }),
                                      null != K
                                          ? (0, n.jsx)(u.E, {
                                                id: X,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: K,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != N
                            ? (0, n.jsx)(u.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: N,
                              })
                            : null,
                    ],
                }),
                canSave: ei && "" !== z,
                saving: D,
                submit: ed,
            };
        })(l, T?.guild_id ?? t ?? void 0),
        [H, Q] = a.useState(null);
    return (0, n.jsx)(f.A, {
        projectId: l,
        scopeKeys: _,
        note: R,
        notifyAgent: V,
        isPreview: Z,
        children: (e) => {
            let t = [];
            (D && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                J?.tierSettings != null && t.push("model"));
            let a = [H, g].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                o = F.saving || e.saving,
                c = e.canSave || (!i && F.canSave);
            async function f(l) {
                if ((l.preventDefault(), !c || o)) return;
                let [n, s] = await Promise.all([!!i || F.submit(), e.submit()]);
                n && s ? await L() : n ? "secrets" !== a && Q(t.includes("app") ? "app" : "secrets") : Q("project");
            }
            return (0, n.jsx)("form", {
                onSubmit: f,
                children: (0, n.jsxs)(s.a, {
                    transitionState: B,
                    onClose: L,
                    title: P.intl.string(i ? I.default["jZjP+I"] : I.default.I2XSKe),
                    size: "md",
                    input:
                        i || t.length < 2
                            ? void 0
                            : (0, n.jsx)(r.V, {
                                  selectedItem: a,
                                  type: "top",
                                  onItemSelect: (e) => Q(e),
                                  "aria-label": P.intl.string(I.default["2dtUiI"]),
                                  children: t.map((e) =>
                                      (0, n.jsx)(r.V.Item, { id: e, children: P.intl.string(w[e]) }, e),
                                  ),
                              }),
                    actions: [
                        { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: L, disabled: o },
                        {
                            text: P.intl.string(i ? I.default.A7dQd9 : P.t["R3BPH+"]),
                            variant: "primary",
                            type: "submit",
                            loading: o,
                            disabled: !c,
                        },
                    ],
                    children: [
                        i || "app" === a ? e.fields : null,
                        i || "project" !== a ? null : F.fields,
                        i || "secrets" !== a ? null : e.secretFields,
                        i || "model" !== a || J?.tierSettings == null
                            ? null
                            : (0, n.jsx)(G, { projectId: l, modelSettings: J, tierSettings: J.tierSettings }),
                        i || null != a
                            ? null
                            : q
                              ? (0, n.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: P.intl.string(I.default.lJJayk),
                                })
                              : (0, n.jsx)("div", { className: E.L, children: (0, n.jsx)(d.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function G(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, i.bG)([o.Ay], () => "open" === o.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, o.XZ)(l, e), [l]),
        [d, c] = (0, g.FT)(s, u);
    return (0, n.jsx)(g.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: c });
}
