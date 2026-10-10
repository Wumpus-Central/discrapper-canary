(t.d(l, { default: () => Z }), t(321073));
var n = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(314116),
    r = t(189213),
    u = t(761508),
    d = t(834730),
    o = t(289873),
    c = t(712808),
    g = t(359589),
    p = t(42766),
    f = t(289106),
    h = t(572253);
t(938796);
var m = t(331322),
    b = t(193249),
    x = t(890497),
    S = t(164892),
    v = t(904363),
    j = t(535466),
    C = t(321032),
    y = t(502707),
    k = t(944142),
    A = t(532247),
    P = t(371169),
    I = t(246338),
    E = t(277085),
    R = t(248675),
    w = t(660183),
    _ = t(453430);
let L = { project: R.default.W0eQfN, app: R.default.lFaJYF, secrets: R.default.vDpCPU, model: R.default.Rs3qc9 };
function Z(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: g,
            scopeKeys: Z,
            note: U,
            notifyAgent: V,
            isPreview: B,
            publishOptions: D,
            transitionState: F,
            onClose: H,
        } = e,
        J = (0, a.bG)([p.Ay], () => p.Ay.getProject(l), [l]),
        T = (0, a.bG)([c.Ay], () => c.Ay.getModelSettings(l), [l]),
        q = (0, a.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        N = null != J && (0, p.PV)(J),
        Q = (function (e, l) {
            var t;
            let s,
                r = (0, a.bG)([p.Ay], () => p.Ay.getProject(e), [e]),
                u = (0, v.A)(l),
                o = (function (e) {
                    let l = (0, a.bG)([k.A], () => k.A.getLiveReload(e), [e]),
                        t = (0, y.A)(e),
                        [n, s] = i.useState(null),
                        [r, u] = i.useState(null);
                    null != r && l !== r.before && u(null);
                    let d = null != r && l === r.before ? r.enabled : l?.enabled;
                    null != n && n === d && s(null);
                    let o = null != l && null != n && n !== d,
                        g = i.useCallback(
                            () => !o || null == n || (!!(0, c.ct)(e, n) && (u({ enabled: n, before: l }), s(null), !0)),
                            [o, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, A.oV)(l),
                        changed: o,
                        setChecked: s,
                        save: g,
                    };
                })(e),
                g = o.save,
                f = (function (e) {
                    let l = (0, j.Ay)(e),
                        [t, n] = i.useState(null),
                        [a, s] = i.useState(null),
                        r = a ?? l.description,
                        u = r.trim(),
                        d = u !== l.description.trim() ? u : null,
                        o = i.useMemo(
                            () => ({ ...(null != t ? { icon: t } : {}), ...(null != d ? { description: d } : {}) }),
                            [t, d],
                        ),
                        c = i.useCallback(() => {
                            (n(null), s(null));
                        }, []);
                    return {
                        iconURL: t ?? l.iconURL,
                        icon: t,
                        setIcon: n,
                        description: r,
                        setDescription: s,
                        changes: o,
                        changed: null != t || null != d,
                        commit: c,
                    };
                })(e),
                { changes: h, commit: _ } = f,
                L = r?.collaborator_role_ids ?? [],
                [Z, G] = i.useState(r?.name ?? ""),
                [U, V] = i.useState(null),
                [B, D] = i.useState(Z),
                [F, H] = i.useState(r?.flags ?? 0),
                [J, T] = i.useState(() => [...L]),
                [q, N] = i.useState(!1),
                [Q, X] = i.useState(null),
                [M, z] = i.useState(null),
                [K, O] = i.useState(null),
                W = i.useId(),
                Y = B.trim(),
                $ = null != r && (0, S.IU)(r),
                ee = null != r && "user" !== r.install_scope,
                el = ee && null != l && (0, S.RX)(r),
                { isPublic: et, isShared: en } = (0, I.n5)(F),
                ei = null != r && Y !== Z,
                ea = $ && F !== (U?.flags ?? r?.flags ?? 0),
                es =
                    el &&
                    ((t = U?.roleIds ?? L),
                    !((s = J instanceof Set ? J : new Set(J)).size === t.length && t.every((e) => s.has(e)))),
                er = ei || ea || es || f.changed,
                eu = er || o.changed,
                ed = i.useCallback((e) => {
                    (D(e), X(null), O(null));
                }, []),
                eo = i.useCallback((e, l) => {
                    (H((t) => (l ? t | e : t & ~e)), z(null), O(null));
                }, []),
                ec = i.useCallback((e) => {
                    e.length > S.sq
                        ? z(w.intl.formatToPlainString(R.default["dH7+/Z"], { max: S.sq }))
                        : (T(e), z(null), O(null));
                }, []),
                eg = i.useCallback(async () => {
                    if (null == r || !eu || q) return !0;
                    let t = ei ? (0, E.p)(Y) : null;
                    if (null != t) return (X(t), !1);
                    let n = { ...h };
                    (ei && (n.name = Y),
                        ea && (n.flags = F),
                        es && (n.collaborator_role_ids = [...J].sort()),
                        null == r.guild_id && null != l && (es || (ea && et)) && (n.guild_id = l),
                        N(!0),
                        O(null));
                    try {
                        if (er) {
                            if (!(await (0, P.CW)(e, n)).ok) return (O(w.intl.string(R.default["9JPr8h"])), !1);
                            (G(Y), V({ flags: F, roleIds: [...J] }), _());
                        }
                        if (!g()) return (O(w.intl.string(R.default.XzkNBw)), !1);
                        return !0;
                    } catch {
                        return (O(w.intl.string(R.default["9JPr8h"])), !1);
                    } finally {
                        N(!1);
                    }
                }, [F, ea, _, h, g, er, l, eu, et, ei, r, e, es, q, J, Y]);
            return {
                fields: (0, n.jsxs)(m.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(C.r, {
                            iconURL: f.iconURL,
                            canRemove: null != f.icon,
                            onIconChange: (e) => {
                                (f.setIcon(e), O(null));
                            },
                            name: B,
                            nameError: Q,
                            onNameChange: ed,
                            description: f.description,
                            onDescriptionChange: (e) => {
                                (f.setDescription(e), O(null));
                            },
                            previewName: "" === Y ? Z : Y,
                            disabled: q,
                        }),
                        $
                            ? (0, n.jsx)(b.d, {
                                  label: w.intl.string(R.default.gchQFO),
                                  description: w.intl.string(R.default.mD4GBH),
                                  checked: en,
                                  disabled: q,
                                  onChange: (e) => eo(S.Zh.SHAREABLE, e),
                              })
                            : null,
                        $ && ee
                            ? (0, n.jsx)(b.d, {
                                  label: w.intl.string(R.default.lVvR4E),
                                  description: w.intl.string(R.default.SQZGoV),
                                  checked: et,
                                  disabled: q,
                                  onChange: (e) => eo(S.Zh.PUBLIC, e),
                              })
                            : null,
                        o.available
                            ? (0, n.jsx)(b.d, {
                                  label: w.intl.string(R.default.eEo0ye),
                                  badge: { text: w.intl.string(R.default.LHrqVg) },
                                  description: o.description,
                                  checked: o.checked,
                                  disabled: q,
                                  onChange: (e) => {
                                      (o.setChecked(e), O(null));
                                  },
                              })
                            : null,
                        el
                            ? (0, n.jsxs)(m.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: w.intl.string(R.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(x.Z, {
                                          selectionMode: "multiple",
                                          label: w.intl.string(R.default["pO3+p5"]),
                                          placeholder: w.intl.string(R.default.gvL7QS),
                                          value: J,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: q || !et,
                                          "aria-invalid": null != M,
                                          "aria-errormessage": null != M ? W : void 0,
                                          onSelectionChange: ec,
                                      }),
                                      (0, n.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: w.intl.formatToPlainString(R.default.g5I05P, {
                                              count: J.length,
                                              max: S.sq,
                                          }),
                                      }),
                                      et
                                          ? null
                                          : (0, n.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: w.intl.string(R.default.nZw5r9),
                                            }),
                                      null != M
                                          ? (0, n.jsx)(d.E, {
                                                id: W,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: M,
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
                canSave: eu && "" !== Y,
                saving: q,
                nameChanged: ei,
                submit: eg,
            };
        })(l, J?.guild_id ?? t ?? void 0),
        [X, M] = i.useState(null);
    return (0, n.jsx)(h.A, {
        projectId: l,
        scopeKeys: Z,
        note: U,
        notifyAgent: V,
        isPreview: B,
        children: (e) => {
            let t = [];
            (N && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                T?.tierSettings != null && t.push("model"));
            let i = [X, g].find((e) => null != e && t.includes(e)) ?? t[0],
                a = e.isScoped,
                c = Q.saving || e.saving,
                h = e.canSave || (!a && Q.canSave);
            async function m(n) {
                if ((n.preventDefault(), !h || c)) return;
                let r = !a && Q.nameChanged,
                    [u, d] = await Promise.all([!!a || Q.submit(), e.submit()]);
                if (u && d) {
                    let e;
                    (await H(),
                        r &&
                            null != D &&
                            null != (e = p.Ay.getProject(l)) &&
                            (0, f.qF)(e) &&
                            (p.Ay.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, s.A)({
                                title: w.intl.string(R.default["48pvCR"]),
                                subtitle: w.intl.string(R.default["Xk+JsJ"]),
                                confirmText: w.intl.string(R.default.guoHDk),
                                cancelText: w.intl.string(R.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, f.FZ)(l, "name_prompt", D).catch(() => {});
                                },
                            }));
                    return;
                }
                u ? "secrets" !== i && M(t.includes("app") ? "app" : "secrets") : M("project");
            }
            return (0, n.jsx)("form", {
                onSubmit: m,
                children: (0, n.jsxs)(r.a, {
                    transitionState: F,
                    onClose: H,
                    title: w.intl.string(a ? R.default["jZjP+I"] : R.default.I2XSKe),
                    size: "md",
                    input:
                        a || t.length < 2
                            ? void 0
                            : (0, n.jsx)(u.V, {
                                  selectedItem: i,
                                  type: "top",
                                  onItemSelect: (e) => M(e),
                                  "aria-label": w.intl.string(R.default["2dtUiI"]),
                                  children: t.map((e) =>
                                      (0, n.jsx)(u.V.Item, { id: e, children: w.intl.string(L[e]) }, e),
                                  ),
                              }),
                    actions: [
                        { text: w.intl.string(w.t["ETE/oC"]), variant: "secondary", onClick: H, disabled: c },
                        {
                            text: w.intl.string(a ? R.default.A7dQd9 : w.t["R3BPH+"]),
                            variant: "primary",
                            type: "submit",
                            loading: c,
                            disabled: !h,
                        },
                    ],
                    children: [
                        a || "app" === i ? e.fields : null,
                        a || "project" !== i ? null : Q.fields,
                        a || "secrets" !== i ? null : e.secretFields,
                        a || "model" !== i || T?.tierSettings == null
                            ? null
                            : (0, n.jsx)(G, { projectId: l, modelSettings: T, tierSettings: T.tierSettings }),
                        a || null != i
                            ? null
                            : q
                              ? (0, n.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: w.intl.string(R.default.lJJayk),
                                })
                              : (0, n.jsx)("div", { className: _.L, children: (0, n.jsx)(o.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function G(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, a.bG)([c.Ay], () => "open" === c.Ay.getConnState(l), [l]),
        u = i.useCallback((e) => (0, c.XZ)(l, e), [l]),
        [d, o] = (0, g.FT)(s, u);
    return (0, n.jsx)(g.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: o });
}
