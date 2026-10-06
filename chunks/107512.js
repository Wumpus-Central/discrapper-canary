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
    h = t(856059);
t(938796);
var b = t(545442),
    m = t(331322),
    x = t(95477),
    S = t(193249),
    v = t(890497),
    j = t(317525),
    y = t(164892),
    C = t(944142),
    k = t(532247),
    A = t(371169),
    P = t(246338),
    I = t(248675),
    E = t(375708),
    _ = t(652215),
    w = t(453430);
let T = { project: I.default.W0eQfN, app: I.default.lFaJYF, secrets: I.default.vDpCPU, model: I.default.Rs3qc9 };
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
        D = (0, i.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        N = null != H && (0, f.PV)(H),
        Q = (function (e, l) {
            var t;
            let s,
                r = (0, i.bG)([f.Ay], () => f.Ay.getProject(e), [e]),
                u = (0, i.yK)([j.A], () => (null != l ? j.A.getSortedRoles(l) : []), [l]),
                o = a.useMemo(
                    () =>
                        u.map((e) => ({
                            key: e.id,
                            id: e.id,
                            label: e.name,
                            value: e.id,
                            leading: () => (0, n.jsx)(b.R, { color: e.colorString ?? _.TpD, colors: e.colorStrings }),
                        })),
                    [u],
                ),
                g = (function (e) {
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
                        description: null == l ? "" : (0, k.oV)(l),
                        changed: d,
                        setChecked: n,
                        save: o,
                    };
                })(e),
                p = g.save,
                h = r?.collaborator_role_ids ?? [],
                [w, T] = a.useState(r?.name ?? ""),
                [q, R] = a.useState(null),
                [Z, G] = a.useState(w),
                [J, V] = a.useState(r?.flags ?? 0),
                [B, F] = a.useState(() => [...h]),
                [H, L] = a.useState(!1),
                [D, N] = a.useState(null),
                [Q, X] = a.useState(null),
                [K, M] = a.useState(null),
                O = a.useId(),
                U = Z.trim(),
                z = null != r && (0, y.IU)(r),
                W = null != r && "user" !== r.install_scope,
                Y = W && null != l && (0, y.RX)(r),
                { isPublic: $, isShared: ee } = (0, P.n5)(J),
                el = null != r && U !== w,
                et = z && J !== (q?.flags ?? r?.flags ?? 0),
                en =
                    Y &&
                    ((t = q?.roleIds ?? h),
                    !((s = B instanceof Set ? B : new Set(B)).size === t.length && t.every((e) => s.has(e)))),
                ea = el || et || en,
                ei = ea || g.changed,
                es = a.useCallback((e) => {
                    (G(e), N(null), M(null));
                }, []),
                er = a.useCallback((e, l) => {
                    (V((t) => (l ? t | e : t & ~e)), X(null), M(null));
                }, []),
                eu = a.useCallback((e) => {
                    e.length > y.sq
                        ? X(E.intl.formatToPlainString(I.default["dH7+/Z"], { max: y.sq }))
                        : (F(e), X(null), M(null));
                }, []),
                ed = a.useCallback(async () => {
                    if (null == r || !ei || H) return !0;
                    let t = el
                        ? "" === U
                            ? E.intl.string(I.default.l669D8)
                            : U.length < y.c6
                              ? E.intl.formatToPlainString(E.t.ONSqYd, { min: y.c6, max: y.eq })
                              : null
                        : null;
                    if (null != t) return (N(t), !1);
                    let n = {};
                    (el && (n.name = U),
                        et && (n.flags = J),
                        en && (n.collaborator_role_ids = [...B].sort()),
                        null == r.guild_id && null != l && (en || (et && $)) && (n.guild_id = l),
                        L(!0),
                        M(null));
                    try {
                        if (ea) {
                            if (!(await (0, A.CW)(e, n)).ok) return (M(E.intl.string(I.default["9JPr8h"])), !1);
                            (T(U), R({ flags: J, roleIds: [...B] }));
                        }
                        if (!p()) return (M(E.intl.string(I.default.XzkNBw)), !1);
                        return !0;
                    } catch {
                        return (M(E.intl.string(I.default["9JPr8h"])), !1);
                    } finally {
                        L(!1);
                    }
                }, [J, et, p, ea, l, ei, $, el, r, e, en, H, B, U]);
            return {
                fields: (0, n.jsxs)(m.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(x.k, {
                            label: E.intl.string(I.default.ncxNJT),
                            value: Z,
                            onChange: es,
                            error: D,
                            maxLength: y.eq,
                            disabled: H,
                            fullWidth: !0,
                        }),
                        z
                            ? (0, n.jsx)(S.d, {
                                  label: E.intl.string(I.default.gchQFO),
                                  description: E.intl.string(I.default.mD4GBH),
                                  checked: ee,
                                  disabled: H,
                                  onChange: (e) => er(y.Zh.SHAREABLE, e),
                              })
                            : null,
                        z && W
                            ? (0, n.jsx)(S.d, {
                                  label: E.intl.string(I.default.lVvR4E),
                                  description: E.intl.string(I.default.SQZGoV),
                                  checked: $,
                                  disabled: H,
                                  onChange: (e) => er(y.Zh.PUBLIC, e),
                              })
                            : null,
                        g.available
                            ? (0, n.jsx)(S.d, {
                                  label: E.intl.string(I.default.eEo0ye),
                                  badge: { text: E.intl.string(I.default.LHrqVg) },
                                  description: g.description,
                                  checked: g.checked,
                                  disabled: H,
                                  onChange: (e) => {
                                      (g.setChecked(e), M(null));
                                  },
                              })
                            : null,
                        Y
                            ? (0, n.jsxs)(m.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: E.intl.string(I.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(v.Z, {
                                          selectionMode: "multiple",
                                          label: E.intl.string(I.default["pO3+p5"]),
                                          placeholder: E.intl.string(I.default.gvL7QS),
                                          value: B,
                                          options: o,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: H || !$,
                                          "aria-invalid": null != Q,
                                          "aria-errormessage": null != Q ? O : void 0,
                                          onSelectionChange: eu,
                                      }),
                                      (0, n.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: E.intl.formatToPlainString(I.default.g5I05P, {
                                              count: B.length,
                                              max: y.sq,
                                          }),
                                      }),
                                      $
                                          ? null
                                          : (0, n.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: E.intl.string(I.default.nZw5r9),
                                            }),
                                      null != Q
                                          ? (0, n.jsx)(d.E, {
                                                id: O,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: Q,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != K
                            ? (0, n.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: K,
                              })
                            : null,
                    ],
                }),
                canSave: ei && "" !== U,
                saving: H,
                nameChanged: el,
                submit: ed,
            };
        })(l, H?.guild_id ?? t ?? void 0),
        [X, K] = a.useState(null);
    return (0, n.jsx)(h.A, {
        projectId: l,
        scopeKeys: q,
        note: Z,
        notifyAgent: G,
        isPreview: J,
        children: (e) => {
            let t = [];
            (N && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                L?.tierSettings != null && t.push("model"));
            let a = [X, g].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                c = Q.saving || e.saving,
                h = e.canSave || (!i && Q.canSave);
            async function b(n) {
                if ((n.preventDefault(), !h || c)) return;
                let r = !i && Q.nameChanged,
                    [u, d] = await Promise.all([!!i || Q.submit(), e.submit()]);
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
                u ? "secrets" !== a && K(t.includes("app") ? "app" : "secrets") : K("project");
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
                                  onItemSelect: (e) => K(e),
                                  "aria-label": E.intl.string(I.default["2dtUiI"]),
                                  children: t.map((e) =>
                                      (0, n.jsx)(u.V.Item, { id: e, children: E.intl.string(T[e]) }, e),
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
                        i || "project" !== a ? null : Q.fields,
                        i || "secrets" !== a ? null : e.secretFields,
                        i || "model" !== a || L?.tierSettings == null
                            ? null
                            : (0, n.jsx)(R, { projectId: l, modelSettings: L, tierSettings: L.tierSettings }),
                        i || null != a
                            ? null
                            : D
                              ? (0, n.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: E.intl.string(I.default.lJJayk),
                                })
                              : (0, n.jsx)("div", { className: w.L, children: (0, n.jsx)(o.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function R(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, i.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        u = a.useCallback((e) => (0, c.XZ)(l, e), [l]),
        [d, o] = (0, g.FT)(s, u);
    return (0, n.jsx)(g.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: o });
}
