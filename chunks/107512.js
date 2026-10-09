(t.d(l, { default: () => q }), t(321073));
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
    C = t(502707),
    y = t(944142),
    k = t(532247),
    A = t(371169),
    P = t(246338),
    I = t(248675),
    E = t(660183),
    _ = t(453430);
let w = { project: I.default.W0eQfN, app: I.default.lFaJYF, secrets: I.default.vDpCPU, model: I.default.Rs3qc9 };
function q(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: g,
            scopeKeys: q,
            note: Z,
            notifyAgent: G,
            isPreview: J,
            publishOptions: V,
            transitionState: B,
            onClose: F,
        } = e,
        H = (0, i.bG)([f.Ay], () => f.Ay.getProject(l), [l]),
        L = (0, i.bG)([c.Ay], () => c.Ay.getModelSettings(l), [l]),
        R = (0, i.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        D = null != H && (0, f.PV)(H),
        N = (function (e, l) {
            var t;
            let s,
                r = (0, i.bG)([f.Ay], () => f.Ay.getProject(e), [e]),
                u = (0, j.A)(l),
                o = (function (e) {
                    let l = (0, i.bG)([y.A], () => y.A.getLiveReload(e), [e]),
                        t = (0, C.A)(e),
                        [n, s] = a.useState(null),
                        [r, u] = a.useState(null);
                    null != r && l !== r.before && u(null);
                    let d = null != r && l === r.before ? r.enabled : l?.enabled;
                    null != n && n === d && s(null);
                    let o = null != l && null != n && n !== d,
                        g = a.useCallback(
                            () => !o || null == n || (!!(0, c.ct)(e, n) && (u({ enabled: n, before: l }), s(null), !0)),
                            [o, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, k.oV)(l),
                        changed: o,
                        setChecked: s,
                        save: g,
                    };
                })(e),
                g = o.save,
                p = r?.collaborator_role_ids ?? [],
                [h, _] = a.useState(r?.name ?? ""),
                [w, q] = a.useState(null),
                [T, Z] = a.useState(h),
                [G, J] = a.useState(r?.flags ?? 0),
                [V, B] = a.useState(() => [...p]),
                [F, H] = a.useState(!1),
                [L, R] = a.useState(null),
                [D, N] = a.useState(null),
                [Q, X] = a.useState(null),
                O = a.useId(),
                U = T.trim(),
                z = null != r && (0, v.IU)(r),
                K = null != r && "user" !== r.install_scope,
                M = K && null != l && (0, v.RX)(r),
                { isPublic: W, isShared: Y } = (0, P.n5)(G),
                $ = null != r && U !== h,
                ee = z && G !== (w?.flags ?? r?.flags ?? 0),
                el =
                    M &&
                    ((t = w?.roleIds ?? p),
                    !((s = V instanceof Set ? V : new Set(V)).size === t.length && t.every((e) => s.has(e)))),
                et = $ || ee || el,
                en = et || o.changed,
                ea = a.useCallback((e) => {
                    (Z(e), R(null), X(null));
                }, []),
                ei = a.useCallback((e, l) => {
                    (J((t) => (l ? t | e : t & ~e)), N(null), X(null));
                }, []),
                es = a.useCallback((e) => {
                    e.length > v.sq
                        ? N(E.intl.formatToPlainString(I.default["dH7+/Z"], { max: v.sq }))
                        : (B(e), N(null), X(null));
                }, []),
                er = a.useCallback(async () => {
                    if (null == r || !en || F) return !0;
                    let t = $
                        ? "" === U
                            ? E.intl.string(I.default.l669D8)
                            : U.length < v.c6
                              ? E.intl.formatToPlainString(E.t.ONSqYd, { min: v.c6, max: v.eq })
                              : null
                        : null;
                    if (null != t) return (R(t), !1);
                    let n = {};
                    ($ && (n.name = U),
                        ee && (n.flags = G),
                        el && (n.collaborator_role_ids = [...V].sort()),
                        null == r.guild_id && null != l && (el || (ee && W)) && (n.guild_id = l),
                        H(!0),
                        X(null));
                    try {
                        if (et) {
                            if (!(await (0, A.CW)(e, n)).ok) return (X(E.intl.string(I.default["9JPr8h"])), !1);
                            (_(U), q({ flags: G, roleIds: [...V] }));
                        }
                        if (!g()) return (X(E.intl.string(I.default.XzkNBw)), !1);
                        return !0;
                    } catch {
                        return (X(E.intl.string(I.default["9JPr8h"])), !1);
                    } finally {
                        H(!1);
                    }
                }, [G, ee, g, et, l, en, W, $, r, e, el, F, V, U]);
            return {
                fields: (0, n.jsxs)(b.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(m.k, {
                            label: E.intl.string(I.default.ncxNJT),
                            value: T,
                            onChange: ea,
                            error: L,
                            maxLength: v.eq,
                            disabled: F,
                            fullWidth: !0,
                        }),
                        z
                            ? (0, n.jsx)(x.d, {
                                  label: E.intl.string(I.default.gchQFO),
                                  description: E.intl.string(I.default.mD4GBH),
                                  checked: Y,
                                  disabled: F,
                                  onChange: (e) => ei(v.Zh.SHAREABLE, e),
                              })
                            : null,
                        z && K
                            ? (0, n.jsx)(x.d, {
                                  label: E.intl.string(I.default.lVvR4E),
                                  description: E.intl.string(I.default.SQZGoV),
                                  checked: W,
                                  disabled: F,
                                  onChange: (e) => ei(v.Zh.PUBLIC, e),
                              })
                            : null,
                        o.available
                            ? (0, n.jsx)(x.d, {
                                  label: E.intl.string(I.default.eEo0ye),
                                  badge: { text: E.intl.string(I.default.LHrqVg) },
                                  description: o.description,
                                  checked: o.checked,
                                  disabled: F,
                                  onChange: (e) => {
                                      (o.setChecked(e), X(null));
                                  },
                              })
                            : null,
                        M
                            ? (0, n.jsxs)(b.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: E.intl.string(I.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(S.Z, {
                                          selectionMode: "multiple",
                                          label: E.intl.string(I.default["pO3+p5"]),
                                          placeholder: E.intl.string(I.default.gvL7QS),
                                          value: V,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: F || !W,
                                          "aria-invalid": null != D,
                                          "aria-errormessage": null != D ? O : void 0,
                                          onSelectionChange: es,
                                      }),
                                      (0, n.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: E.intl.formatToPlainString(I.default.g5I05P, {
                                              count: V.length,
                                              max: v.sq,
                                          }),
                                      }),
                                      W
                                          ? null
                                          : (0, n.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: E.intl.string(I.default.nZw5r9),
                                            }),
                                      null != D
                                          ? (0, n.jsx)(d.E, {
                                                id: O,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: D,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != Q
                            ? (0, n.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: Q,
                              })
                            : null,
                    ],
                }),
                canSave: en && "" !== U,
                saving: F,
                nameChanged: $,
                submit: er,
            };
        })(l, H?.guild_id ?? t ?? void 0),
        [Q, X] = a.useState(null);
    return (0, n.jsx)(h.A, {
        projectId: l,
        scopeKeys: q,
        note: Z,
        notifyAgent: G,
        isPreview: J,
        children: (e) => {
            let t = [];
            (D && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                L?.tierSettings != null && t.push("model"));
            let a = [Q, g].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                c = N.saving || e.saving,
                h = e.canSave || (!i && N.canSave);
            async function b(n) {
                if ((n.preventDefault(), !h || c)) return;
                let r = !i && N.nameChanged,
                    [u, d] = await Promise.all([!!i || N.submit(), e.submit()]);
                if (u && d) {
                    let e;
                    (await F(),
                        r &&
                            null != V &&
                            null != (e = f.Ay.getProject(l)) &&
                            (0, p.qF)(e) &&
                            (f.Ay.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, s.A)({
                                title: E.intl.string(I.default["48pvCR"]),
                                subtitle: E.intl.string(I.default["Xk+JsJ"]),
                                confirmText: E.intl.string(I.default.guoHDk),
                                cancelText: E.intl.string(I.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, p.FZ)(l, "name_prompt", V).catch(() => {});
                                },
                            }));
                    return;
                }
                u ? "secrets" !== a && X(t.includes("app") ? "app" : "secrets") : X("project");
            }
            return (0, n.jsx)("form", {
                onSubmit: b,
                children: (0, n.jsxs)(r.a, {
                    transitionState: B,
                    onClose: F,
                    title: E.intl.string(i ? I.default["jZjP+I"] : I.default.I2XSKe),
                    size: "md",
                    input:
                        i || t.length < 2
                            ? void 0
                            : (0, n.jsx)(u.V, {
                                  selectedItem: a,
                                  type: "top",
                                  onItemSelect: (e) => X(e),
                                  "aria-label": E.intl.string(I.default["2dtUiI"]),
                                  children: t.map((e) =>
                                      (0, n.jsx)(u.V.Item, { id: e, children: E.intl.string(w[e]) }, e),
                                  ),
                              }),
                    actions: [
                        { text: E.intl.string(E.t["ETE/oC"]), variant: "secondary", onClick: F, disabled: c },
                        {
                            text: E.intl.string(i ? I.default.A7dQd9 : E.t["R3BPH+"]),
                            variant: "primary",
                            type: "submit",
                            loading: c,
                            disabled: !h,
                        },
                    ],
                    children: [
                        i || "app" === a ? e.fields : null,
                        i || "project" !== a ? null : N.fields,
                        i || "secrets" !== a ? null : e.secretFields,
                        i || "model" !== a || L?.tierSettings == null
                            ? null
                            : (0, n.jsx)(T, { projectId: l, modelSettings: L, tierSettings: L.tierSettings }),
                        i || null != a
                            ? null
                            : R
                              ? (0, n.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: E.intl.string(I.default.lJJayk),
                                })
                              : (0, n.jsx)("div", { className: _.L, children: (0, n.jsx)(o.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function T(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, i.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, c.XZ)(l, e), [l]),
        [d, o] = (0, g.FT)(s, u);
    return (0, n.jsx)(g.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: o });
}
