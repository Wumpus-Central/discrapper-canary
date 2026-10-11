(t.d(l, { default: () => J }), t(321073));
var n = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(314116),
    r = t(224640),
    u = t(20742),
    d = t(430993),
    c = t(761508),
    o = t(834730),
    g = t(289873),
    p = t(696208),
    h = t(712808),
    f = t(359589),
    m = t(42766),
    x = t(329356),
    b = t(572253);
t(938796);
var j = t(331322),
    S = t(193249),
    v = t(890497),
    C = t(164892),
    k = t(862026),
    y = t(904363),
    A = t(535466),
    P = t(321032),
    I = t(502707),
    E = t(944142),
    w = t(532247),
    R = t(371169),
    _ = t(246338),
    F = t(277085),
    Z = t(248675),
    L = t(660183),
    B = t(453430);
let G = {
    project: Z.default.W0eQfN,
    app: Z.default.lFaJYF,
    secrets: Z.default.vDpCPU,
    model: Z.default.Rs3qc9,
    experimental: Z.default["0Pe9uw"],
};
function J(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: f,
            scopeKeys: J,
            note: D,
            notifyAgent: H,
            isPreview: Q,
            publishOptions: T,
            transitionState: V,
            onClose: q,
        } = e,
        N = (0, a.bG)([m.Ay], () => m.Ay.getProject(l), [l]),
        X = (0, a.bG)([h.Ay], () => h.Ay.getModelSettings(l), [l]),
        M = (0, a.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        z = null != N && (0, m.PV)(N),
        K = (function (e, l) {
            var t;
            let s,
                r = (0, a.bG)([m.Ay], () => m.Ay.getProject(e), [e]),
                u = (0, y.A)(l),
                d = (function (e) {
                    let l = (0, a.bG)([E.A], () => E.A.getLiveReload(e), [e]),
                        t = (0, I.A)(e),
                        [n, s] = i.useState(null),
                        [r, u] = i.useState(null);
                    null != r && l !== r.before && u(null);
                    let d = null != r && l === r.before ? r.enabled : l?.enabled;
                    null != n && n === d && s(null);
                    let c = null != l && null != n && n !== d,
                        o = i.useCallback(
                            () => !c || null == n || (!!(0, h.ct)(e, n) && (u({ enabled: n, before: l }), s(null), !0)),
                            [c, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, w.oV)(l),
                        changed: c,
                        setChecked: s,
                        save: o,
                    };
                })(e),
                c = d.save,
                g = (function (e) {
                    let l = (0, A.Ay)(e),
                        [t, n] = i.useState(null),
                        [a, s] = i.useState(null),
                        r = a ?? l.description,
                        u = r.trim(),
                        d = u !== l.description.trim() ? u : null,
                        c = i.useMemo(
                            () => ({ ...(null != t ? { icon: t } : {}), ...(null != d ? { description: d } : {}) }),
                            [t, d],
                        ),
                        o = i.useCallback(() => {
                            (n(null), s(null));
                        }, []);
                    return {
                        iconURL: t ?? l.iconURL,
                        icon: t,
                        setIcon: n,
                        description: r,
                        setDescription: s,
                        changes: c,
                        changed: null != t || null != d,
                        commit: o,
                    };
                })(e),
                { changes: p, commit: f } = g,
                x = (0, k.Q)(e),
                b = x.save,
                B = r?.collaborator_role_ids ?? [],
                [G, J] = i.useState(r?.name ?? ""),
                [U, D] = i.useState(null),
                [H, Q] = i.useState(G),
                [T, V] = i.useState(r?.flags ?? 0),
                [q, N] = i.useState(() => [...B]),
                [X, M] = i.useState(!1),
                [z, K] = i.useState(null),
                [O, W] = i.useState(null),
                [Y, $] = i.useState(null),
                [ee, el] = i.useState(null),
                et = i.useId(),
                en = H.trim(),
                ei = null != r && (0, C.IU)(r),
                ea = null != r && "user" !== r.install_scope,
                es = ea && null != l && (0, C.RX)(r),
                { isPublic: er, isShared: eu } = (0, _.n5)(T),
                ed = null != r && en !== G,
                ec = ei && T !== (U?.flags ?? r?.flags ?? 0),
                eo =
                    es &&
                    ((t = U?.roleIds ?? B),
                    !((s = q instanceof Set ? q : new Set(q)).size === t.length && t.every((e) => s.has(e)))),
                eg = ed || ec || eo || g.changed,
                ep = eg || d.changed || x.changed,
                eh = i.useCallback((e) => {
                    (Q(e), K(null), $(null));
                }, []),
                ef = i.useCallback((e, l) => {
                    (V((t) => (l ? t | e : t & ~e)), W(null), $(null));
                }, []),
                em = i.useCallback((e) => {
                    e.length > C.sq
                        ? W(L.intl.formatToPlainString(Z.default["dH7+/Z"], { max: C.sq }))
                        : (N(e), W(null), $(null));
                }, []),
                ex = i.useCallback(async () => {
                    if (null == r || !ep || X) return null;
                    let t = ed ? (0, F.p)(en) : null;
                    if (null != t) return (K(t), "project");
                    let n = { ...p };
                    (ed && (n.name = en),
                        ec && (n.flags = T),
                        eo && (n.collaborator_role_ids = [...q].sort()),
                        null == r.guild_id && null != l && (eo || (ec && er)) && (n.guild_id = l),
                        M(!0),
                        $(null),
                        el(null));
                    try {
                        if (eg) {
                            if (!(await (0, R.CW)(e, n)).ok) return ($(L.intl.string(Z.default["9JPr8h"])), "project");
                            (J(en), D({ flags: T, roleIds: [...q] }), f());
                        }
                        if (!c()) return ($(L.intl.string(Z.default.XzkNBw)), "project");
                        if (!b()) return (el(L.intl.string(Z.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return ($(L.intl.string(Z.default["9JPr8h"])), "project");
                    } finally {
                        M(!1);
                    }
                }, [T, ec, f, p, c, b, eg, l, ep, er, ed, r, e, eo, X, q, en]);
            return {
                fields: (0, n.jsxs)(j.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(P.r, {
                            iconURL: g.iconURL,
                            canRemove: null != g.icon,
                            onIconChange: (e) => {
                                (g.setIcon(e), $(null));
                            },
                            name: H,
                            nameError: z,
                            onNameChange: eh,
                            description: g.description,
                            onDescriptionChange: (e) => {
                                (g.setDescription(e), $(null));
                            },
                            previewName: "" === en ? G : en,
                            disabled: X,
                        }),
                        ei
                            ? (0, n.jsx)(S.d, {
                                  label: L.intl.string(Z.default.gchQFO),
                                  description: L.intl.string(Z.default.mD4GBH),
                                  checked: eu,
                                  disabled: X,
                                  onChange: (e) => ef(C.Zh.SHAREABLE, e),
                              })
                            : null,
                        ei && ea
                            ? (0, n.jsx)(S.d, {
                                  label: L.intl.string(Z.default.lVvR4E),
                                  description: L.intl.string(Z.default.SQZGoV),
                                  checked: er,
                                  disabled: X,
                                  onChange: (e) => ef(C.Zh.PUBLIC, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(S.d, {
                                  label: L.intl.string(Z.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: X,
                                  onChange: (e) => {
                                      (d.setChecked(e), $(null));
                                  },
                              })
                            : null,
                        es
                            ? (0, n.jsxs)(j.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(o.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: L.intl.string(Z.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(v.Z, {
                                          selectionMode: "multiple",
                                          label: L.intl.string(Z.default["pO3+p5"]),
                                          placeholder: L.intl.string(Z.default.gvL7QS),
                                          value: q,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: X || !er,
                                          "aria-invalid": null != O,
                                          "aria-errormessage": null != O ? et : void 0,
                                          onSelectionChange: em,
                                      }),
                                      (0, n.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: L.intl.formatToPlainString(Z.default.g5I05P, {
                                              count: q.length,
                                              max: C.sq,
                                          }),
                                      }),
                                      er
                                          ? null
                                          : (0, n.jsx)(o.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: L.intl.string(Z.default.nZw5r9),
                                            }),
                                      null != O
                                          ? (0, n.jsx)(o.E, {
                                                id: et,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: O,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != Y
                            ? (0, n.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: Y,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(j.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(S.d, {
                            label: L.intl.string(Z.default["4liZ45"]),
                            description: L.intl.string(Z.default.I5cl7p),
                            checked: x.checked,
                            disabled: X,
                            onChange: (e) => {
                                (x.setChecked(e), el(null));
                            },
                        }),
                        null != ee
                            ? (0, n.jsx)(o.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: ee,
                              })
                            : null,
                    ],
                }),
                canSave: ep && "" !== en,
                saving: X,
                nameChanged: ed,
                submit: ex,
            };
        })(l, N?.guild_id ?? t ?? void 0),
        [O, W] = i.useState(null);
    return (0, n.jsx)(b.A, {
        projectId: l,
        scopeKeys: J,
        note: D,
        notifyAgent: H,
        isPreview: Q,
        children: (e) => {
            let t = [];
            (z && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                X?.tierSettings != null && t.push("model"),
                z && t.push("experimental"));
            let i = [O, f].find((e) => null != e && t.includes(e)) ?? t[0],
                a = e.isScoped,
                h = K.saving || e.saving,
                b = e.canSave || (!a && K.canSave);
            async function j(n) {
                if ((n.preventDefault(), !b || h)) return;
                let r = !a && K.nameChanged,
                    [u, d] = await Promise.all([a ? null : K.submit(), e.submit()]);
                if (null == u && d) {
                    let e;
                    (await q(),
                        r &&
                            null != T &&
                            null != (e = m.Ay.getProject(l)) &&
                            (0, x.qF)(e) &&
                            (m.Ay.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, s.A)({
                                title: L.intl.string(Z.default["48pvCR"]),
                                subtitle: L.intl.string(Z.default["Xk+JsJ"]),
                                confirmText: L.intl.string(Z.default.guoHDk),
                                cancelText: L.intl.string(Z.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, x.FZ)(l, "name_prompt", T).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? W(u) : "secrets" !== i && W(t.includes("app") ? "app" : "secrets");
            }
            let S = L.intl.string(a ? Z.default["jZjP+I"] : Z.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: j,
                children: (0, n.jsxs)(r.d, {
                    transitionState: V,
                    onClose: q,
                    "aria-label": S,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: S }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                a || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: i,
                                          type: "top",
                                          onItemSelect: (e) => W(e),
                                          "aria-label": L.intl.string(Z.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: L.intl.string(G[e]) }, e),
                                          ),
                                      }),
                            children: [
                                a || "app" === i ? e.fields : null,
                                a || "project" !== i ? null : K.fields,
                                a || "experimental" !== i ? null : K.experimentalFields,
                                a || "secrets" !== i ? null : e.secretFields,
                                a || "model" !== i || X?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(U, { projectId: l, modelSettings: X, tierSettings: X.tierSettings }),
                                a || null != i
                                    ? null
                                    : M
                                      ? (0, n.jsx)(o.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: L.intl.string(Z.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: B.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: L.intl.string(L.t["ETE/oC"]), variant: "secondary", onClick: q, disabled: h },
                                {
                                    text: L.intl.string(a ? Z.default.A7dQd9 : L.t["R3BPH+"]),
                                    variant: "primary",
                                    type: "submit",
                                    loading: h,
                                    disabled: !b,
                                },
                            ],
                        }),
                    ],
                }),
            });
        },
    });
}
function U(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, a.bG)([h.Ay], () => "open" === h.Ay.getConnState(l), [l]),
        u = i.useCallback((e) => (0, h.XZ)(l, e), [l]),
        [d, c] = (0, f.FT)(s, u);
    return (0, n.jsx)(f.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: c });
}
