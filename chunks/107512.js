(t.d(l, { default: () => w }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(17928),
    s = t(314116),
    r = t(189213),
    u = t(761508),
    d = t(834730),
    o = t(289873),
    c = t(712808),
    g = t(359589),
    f = t(260498),
    p = t(289106),
    h = t(572253);
t(938796);
var b = t(331322),
    m = t(95477),
    x = t(193249),
    S = t(890497),
    v = t(164892),
    j = t(904363),
    C = t(944142),
    y = t(532247),
    k = t(371169),
    A = t(246338),
    P = t(248675),
    I = t(660183),
    E = t(453430);
let _ = { project: P.default.W0eQfN, app: P.default.lFaJYF, secrets: P.default.vDpCPU, model: P.default.Rs3qc9 };
function w(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: g,
            scopeKeys: w,
            note: T,
            notifyAgent: Z,
            isPreview: G,
            publishOptions: J,
            transitionState: V,
            onClose: B,
        } = e,
        F = (0, i.bG)([f.Ay], () => f.Ay.getProject(l), [l]),
        H = (0, i.bG)([c.Ay], () => c.Ay.getModelSettings(l), [l]),
        L = (0, i.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        R = null != F && (0, f.PV)(F),
        D = (function (e, l) {
            var t;
            let s,
                r = (0, i.bG)([f.Ay], () => f.Ay.getProject(e), [e]),
                u = (0, j.A)(l),
                o = (function (e) {
                    let l = (0, i.bG)([C.A], () => C.A.getLiveReload(e), [e]),
                        [t, n] = a.useState(null),
                        [s, r] = a.useState(null);
                    null != s && l !== s.before && r(null);
                    let u = null != s && l === s.before ? s.enabled : l?.enabled;
                    null != t && t === u && n(null);
                    let d = null != l && null != t && t !== u,
                        o = a.useCallback(
                            () => !d || null == t || (!!(0, c.ct)(e, t) && (r({ enabled: t, before: l }), n(null), !0)),
                            [d, t, l, e],
                        );
                    return {
                        available: null != l,
                        checked: t ?? u ?? !1,
                        description: null == l ? "" : (0, y.oV)(l),
                        changed: d,
                        setChecked: n,
                        save: o,
                    };
                })(e),
                g = o.save,
                p = r?.collaborator_role_ids ?? [],
                [h, E] = a.useState(r?.name ?? ""),
                [_, w] = a.useState(null),
                [q, T] = a.useState(h),
                [Z, G] = a.useState(r?.flags ?? 0),
                [J, V] = a.useState(() => [...p]),
                [B, F] = a.useState(!1),
                [H, L] = a.useState(null),
                [R, D] = a.useState(null),
                [N, Q] = a.useState(null),
                X = a.useId(),
                O = q.trim(),
                U = null != r && (0, v.IU)(r),
                z = null != r && "user" !== r.install_scope,
                K = z && null != l && (0, v.RX)(r),
                { isPublic: M, isShared: W } = (0, A.n5)(Z),
                Y = null != r && O !== h,
                $ = U && Z !== (_?.flags ?? r?.flags ?? 0),
                ee =
                    K &&
                    ((t = _?.roleIds ?? p),
                    !((s = J instanceof Set ? J : new Set(J)).size === t.length && t.every((e) => s.has(e)))),
                el = Y || $ || ee,
                et = el || o.changed,
                en = a.useCallback((e) => {
                    (T(e), L(null), Q(null));
                }, []),
                ea = a.useCallback((e, l) => {
                    (G((t) => (l ? t | e : t & ~e)), D(null), Q(null));
                }, []),
                ei = a.useCallback((e) => {
                    e.length > v.sq
                        ? D(I.intl.formatToPlainString(P.default["dH7+/Z"], { max: v.sq }))
                        : (V(e), D(null), Q(null));
                }, []),
                es = a.useCallback(async () => {
                    if (null == r || !et || B) return !0;
                    let t = Y
                        ? "" === O
                            ? I.intl.string(P.default.l669D8)
                            : O.length < v.c6
                              ? I.intl.formatToPlainString(I.t.ONSqYd, { min: v.c6, max: v.eq })
                              : null
                        : null;
                    if (null != t) return (L(t), !1);
                    let n = {};
                    (Y && (n.name = O),
                        $ && (n.flags = Z),
                        ee && (n.collaborator_role_ids = [...J].sort()),
                        null == r.guild_id && null != l && (ee || ($ && M)) && (n.guild_id = l),
                        F(!0),
                        Q(null));
                    try {
                        if (el) {
                            if (!(await (0, k.CW)(e, n)).ok) return (Q(I.intl.string(P.default["9JPr8h"])), !1);
                            (E(O), w({ flags: Z, roleIds: [...J] }));
                        }
                        if (!g()) return (Q(I.intl.string(P.default.XzkNBw)), !1);
                        return !0;
                    } catch {
                        return (Q(I.intl.string(P.default["9JPr8h"])), !1);
                    } finally {
                        F(!1);
                    }
                }, [Z, $, g, el, l, et, M, Y, r, e, ee, B, J, O]);
            return {
                fields: (0, n.jsxs)(b.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(m.k, {
                            label: I.intl.string(P.default.ncxNJT),
                            value: q,
                            onChange: en,
                            error: H,
                            maxLength: v.eq,
                            disabled: B,
                            fullWidth: !0,
                        }),
                        U
                            ? (0, n.jsx)(x.d, {
                                  label: I.intl.string(P.default.gchQFO),
                                  description: I.intl.string(P.default.mD4GBH),
                                  checked: W,
                                  disabled: B,
                                  onChange: (e) => ea(v.Zh.SHAREABLE, e),
                              })
                            : null,
                        U && z
                            ? (0, n.jsx)(x.d, {
                                  label: I.intl.string(P.default.lVvR4E),
                                  description: I.intl.string(P.default.SQZGoV),
                                  checked: M,
                                  disabled: B,
                                  onChange: (e) => ea(v.Zh.PUBLIC, e),
                              })
                            : null,
                        o.available
                            ? (0, n.jsx)(x.d, {
                                  label: I.intl.string(P.default.eEo0ye),
                                  badge: { text: I.intl.string(P.default.LHrqVg) },
                                  description: o.description,
                                  checked: o.checked,
                                  disabled: B,
                                  onChange: (e) => {
                                      (o.setChecked(e), Q(null));
                                  },
                              })
                            : null,
                        K
                            ? (0, n.jsxs)(b.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: I.intl.string(P.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(S.Z, {
                                          selectionMode: "multiple",
                                          label: I.intl.string(P.default["pO3+p5"]),
                                          placeholder: I.intl.string(P.default.gvL7QS),
                                          value: J,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: B || !M,
                                          "aria-invalid": null != R,
                                          "aria-errormessage": null != R ? X : void 0,
                                          onSelectionChange: ei,
                                      }),
                                      (0, n.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: I.intl.formatToPlainString(P.default.g5I05P, {
                                              count: J.length,
                                              max: v.sq,
                                          }),
                                      }),
                                      M
                                          ? null
                                          : (0, n.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: I.intl.string(P.default.nZw5r9),
                                            }),
                                      null != R
                                          ? (0, n.jsx)(d.E, {
                                                id: X,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: R,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != N
                            ? (0, n.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: N,
                              })
                            : null,
                    ],
                }),
                canSave: et && "" !== O,
                saving: B,
                nameChanged: Y,
                submit: es,
            };
        })(l, F?.guild_id ?? t ?? void 0),
        [N, Q] = a.useState(null);
    return (0, n.jsx)(h.A, {
        projectId: l,
        scopeKeys: w,
        note: T,
        notifyAgent: Z,
        isPreview: G,
        children: (e) => {
            let t = [];
            (R && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                H?.tierSettings != null && t.push("model"));
            let a = [N, g].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                c = D.saving || e.saving,
                h = e.canSave || (!i && D.canSave);
            async function b(n) {
                if ((n.preventDefault(), !h || c)) return;
                let r = !i && D.nameChanged,
                    [u, d] = await Promise.all([!!i || D.submit(), e.submit()]);
                if (u && d) {
                    let e;
                    (await B(),
                        r &&
                            null != J &&
                            null != (e = f.Ay.getProject(l)) &&
                            (0, p.qF)(e) &&
                            (f.Ay.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, s.A)({
                                title: I.intl.string(P.default["48pvCR"]),
                                subtitle: I.intl.string(P.default["Xk+JsJ"]),
                                confirmText: I.intl.string(P.default.guoHDk),
                                cancelText: I.intl.string(P.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, p.FZ)(l, "name_prompt", J).catch(() => {});
                                },
                            }));
                    return;
                }
                u ? "secrets" !== a && Q(t.includes("app") ? "app" : "secrets") : Q("project");
            }
            return (0, n.jsx)("form", {
                onSubmit: b,
                children: (0, n.jsxs)(r.a, {
                    transitionState: V,
                    onClose: B,
                    title: I.intl.string(i ? P.default["jZjP+I"] : P.default.I2XSKe),
                    size: "md",
                    input:
                        i || t.length < 2
                            ? void 0
                            : (0, n.jsx)(u.V, {
                                  selectedItem: a,
                                  type: "top",
                                  onItemSelect: (e) => Q(e),
                                  "aria-label": I.intl.string(P.default["2dtUiI"]),
                                  children: t.map((e) =>
                                      (0, n.jsx)(u.V.Item, { id: e, children: I.intl.string(_[e]) }, e),
                                  ),
                              }),
                    actions: [
                        { text: I.intl.string(I.t["ETE/oC"]), variant: "secondary", onClick: B, disabled: c },
                        {
                            text: I.intl.string(i ? P.default.A7dQd9 : I.t["R3BPH+"]),
                            variant: "primary",
                            type: "submit",
                            loading: c,
                            disabled: !h,
                        },
                    ],
                    children: [
                        i || "app" === a ? e.fields : null,
                        i || "project" !== a ? null : D.fields,
                        i || "secrets" !== a ? null : e.secretFields,
                        i || "model" !== a || H?.tierSettings == null
                            ? null
                            : (0, n.jsx)(q, { projectId: l, modelSettings: H, tierSettings: H.tierSettings }),
                        i || null != a
                            ? null
                            : L
                              ? (0, n.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: I.intl.string(P.default.lJJayk),
                                })
                              : (0, n.jsx)("div", { className: E.L, children: (0, n.jsx)(o.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function q(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, i.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, c.XZ)(l, e), [l]),
        [d, o] = (0, g.FT)(s, u);
    return (0, n.jsx)(g.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: o });
}
