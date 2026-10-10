(t.d(l, { default: () => L }), t(321073));
var n = t(477900),
    i = t(582128),
    a = t(17928),
    s = t(314116),
    r = t(189213),
    u = t(761508),
    d = t(834730),
    c = t(289873),
    o = t(712808),
    p = t(359589),
    g = t(42766),
    f = t(289106),
    h = t(572253);
t(938796);
var m = t(331322),
    x = t(193249),
    b = t(890497),
    S = t(164892),
    j = t(862026),
    v = t(904363),
    C = t(535466),
    k = t(321032),
    y = t(502707),
    A = t(944142),
    P = t(532247),
    I = t(371169),
    E = t(246338),
    w = t(277085),
    R = t(248675),
    _ = t(660183),
    Z = t(453430);
let F = {
    project: R.default.W0eQfN,
    app: R.default.lFaJYF,
    secrets: R.default.vDpCPU,
    model: R.default.Rs3qc9,
    experimental: R.default["0Pe9uw"],
};
function L(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: p,
            scopeKeys: L,
            note: G,
            notifyAgent: J,
            isPreview: U,
            publishOptions: D,
            transitionState: T,
            onClose: V,
        } = e,
        H = (0, a.bG)([g.Ay], () => g.Ay.getProject(l), [l]),
        Q = (0, a.bG)([o.Ay], () => o.Ay.getModelSettings(l), [l]),
        q = (0, a.bG)([o.Ay], () => "open" === o.Ay.getConnState(l), [l]),
        N = null != H && (0, g.PV)(H),
        X = (function (e, l) {
            var t;
            let s,
                r = (0, a.bG)([g.Ay], () => g.Ay.getProject(e), [e]),
                u = (0, v.A)(l),
                c = (function (e) {
                    let l = (0, a.bG)([A.A], () => A.A.getLiveReload(e), [e]),
                        t = (0, y.A)(e),
                        [n, s] = i.useState(null),
                        [r, u] = i.useState(null);
                    null != r && l !== r.before && u(null);
                    let d = null != r && l === r.before ? r.enabled : l?.enabled;
                    null != n && n === d && s(null);
                    let c = null != l && null != n && n !== d,
                        p = i.useCallback(
                            () => !c || null == n || (!!(0, o.ct)(e, n) && (u({ enabled: n, before: l }), s(null), !0)),
                            [c, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, P.oV)(l),
                        changed: c,
                        setChecked: s,
                        save: p,
                    };
                })(e),
                p = c.save,
                f = (function (e) {
                    let l = (0, C.Ay)(e),
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
                { changes: h, commit: Z } = f,
                F = (0, j.Q)(e),
                L = F.save,
                B = r?.collaborator_role_ids ?? [],
                [G, J] = i.useState(r?.name ?? ""),
                [U, D] = i.useState(null),
                [T, V] = i.useState(G),
                [H, Q] = i.useState(r?.flags ?? 0),
                [q, N] = i.useState(() => [...B]),
                [X, M] = i.useState(!1),
                [z, K] = i.useState(null),
                [O, W] = i.useState(null),
                [Y, $] = i.useState(null),
                [ee, el] = i.useState(null),
                et = i.useId(),
                en = T.trim(),
                ei = null != r && (0, S.IU)(r),
                ea = null != r && "user" !== r.install_scope,
                es = ea && null != l && (0, S.RX)(r),
                { isPublic: er, isShared: eu } = (0, E.n5)(H),
                ed = null != r && en !== G,
                ec = ei && H !== (U?.flags ?? r?.flags ?? 0),
                eo =
                    es &&
                    ((t = U?.roleIds ?? B),
                    !((s = q instanceof Set ? q : new Set(q)).size === t.length && t.every((e) => s.has(e)))),
                ep = ed || ec || eo || f.changed,
                eg = ep || c.changed || F.changed,
                ef = i.useCallback((e) => {
                    (V(e), K(null), $(null));
                }, []),
                eh = i.useCallback((e, l) => {
                    (Q((t) => (l ? t | e : t & ~e)), W(null), $(null));
                }, []),
                em = i.useCallback((e) => {
                    e.length > S.sq
                        ? W(_.intl.formatToPlainString(R.default["dH7+/Z"], { max: S.sq }))
                        : (N(e), W(null), $(null));
                }, []),
                ex = i.useCallback(async () => {
                    if (null == r || !eg || X) return null;
                    let t = ed ? (0, w.p)(en) : null;
                    if (null != t) return (K(t), "project");
                    let n = { ...h };
                    (ed && (n.name = en),
                        ec && (n.flags = H),
                        eo && (n.collaborator_role_ids = [...q].sort()),
                        null == r.guild_id && null != l && (eo || (ec && er)) && (n.guild_id = l),
                        M(!0),
                        $(null),
                        el(null));
                    try {
                        if (ep) {
                            if (!(await (0, I.CW)(e, n)).ok) return ($(_.intl.string(R.default["9JPr8h"])), "project");
                            (J(en), D({ flags: H, roleIds: [...q] }), Z());
                        }
                        if (!p()) return ($(_.intl.string(R.default.XzkNBw)), "project");
                        if (!L()) return (el(_.intl.string(R.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return ($(_.intl.string(R.default["9JPr8h"])), "project");
                    } finally {
                        M(!1);
                    }
                }, [H, ec, Z, h, p, L, ep, l, eg, er, ed, r, e, eo, X, q, en]);
            return {
                fields: (0, n.jsxs)(m.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(k.r, {
                            iconURL: f.iconURL,
                            canRemove: null != f.icon,
                            onIconChange: (e) => {
                                (f.setIcon(e), $(null));
                            },
                            name: T,
                            nameError: z,
                            onNameChange: ef,
                            description: f.description,
                            onDescriptionChange: (e) => {
                                (f.setDescription(e), $(null));
                            },
                            previewName: "" === en ? G : en,
                            disabled: X,
                        }),
                        ei
                            ? (0, n.jsx)(x.d, {
                                  label: _.intl.string(R.default.gchQFO),
                                  description: _.intl.string(R.default.mD4GBH),
                                  checked: eu,
                                  disabled: X,
                                  onChange: (e) => eh(S.Zh.SHAREABLE, e),
                              })
                            : null,
                        ei && ea
                            ? (0, n.jsx)(x.d, {
                                  label: _.intl.string(R.default.lVvR4E),
                                  description: _.intl.string(R.default.SQZGoV),
                                  checked: er,
                                  disabled: X,
                                  onChange: (e) => eh(S.Zh.PUBLIC, e),
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)(x.d, {
                                  label: _.intl.string(R.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: X,
                                  onChange: (e) => {
                                      (c.setChecked(e), $(null));
                                  },
                              })
                            : null,
                        es
                            ? (0, n.jsxs)(m.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(d.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: _.intl.string(R.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(b.Z, {
                                          selectionMode: "multiple",
                                          label: _.intl.string(R.default["pO3+p5"]),
                                          placeholder: _.intl.string(R.default.gvL7QS),
                                          value: q,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: X || !er,
                                          "aria-invalid": null != O,
                                          "aria-errormessage": null != O ? et : void 0,
                                          onSelectionChange: em,
                                      }),
                                      (0, n.jsx)(d.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: _.intl.formatToPlainString(R.default.g5I05P, {
                                              count: q.length,
                                              max: S.sq,
                                          }),
                                      }),
                                      er
                                          ? null
                                          : (0, n.jsx)(d.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: _.intl.string(R.default.nZw5r9),
                                            }),
                                      null != O
                                          ? (0, n.jsx)(d.E, {
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
                            ? (0, n.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: Y,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(m.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(x.d, {
                            label: _.intl.string(R.default["4liZ45"]),
                            description: _.intl.string(R.default.I5cl7p),
                            checked: F.checked,
                            disabled: X,
                            onChange: (e) => {
                                (F.setChecked(e), el(null));
                            },
                        }),
                        null != ee
                            ? (0, n.jsx)(d.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: ee,
                              })
                            : null,
                    ],
                }),
                canSave: eg && "" !== en,
                saving: X,
                nameChanged: ed,
                submit: ex,
            };
        })(l, H?.guild_id ?? t ?? void 0),
        [M, z] = i.useState(null);
    return (0, n.jsx)(h.A, {
        projectId: l,
        scopeKeys: L,
        note: G,
        notifyAgent: J,
        isPreview: U,
        children: (e) => {
            let t = [];
            (N && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                Q?.tierSettings != null && t.push("model"),
                N && t.push("experimental"));
            let i = [M, p].find((e) => null != e && t.includes(e)) ?? t[0],
                a = e.isScoped,
                o = X.saving || e.saving,
                h = e.canSave || (!a && X.canSave);
            async function m(n) {
                if ((n.preventDefault(), !h || o)) return;
                let r = !a && X.nameChanged,
                    [u, d] = await Promise.all([a ? null : X.submit(), e.submit()]);
                if (null == u && d) {
                    let e;
                    (await V(),
                        r &&
                            null != D &&
                            null != (e = g.Ay.getProject(l)) &&
                            (0, f.qF)(e) &&
                            (g.Ay.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, s.A)({
                                title: _.intl.string(R.default["48pvCR"]),
                                subtitle: _.intl.string(R.default["Xk+JsJ"]),
                                confirmText: _.intl.string(R.default.guoHDk),
                                cancelText: _.intl.string(R.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, f.FZ)(l, "name_prompt", D).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? z(u) : "secrets" !== i && z(t.includes("app") ? "app" : "secrets");
            }
            return (0, n.jsx)("form", {
                onSubmit: m,
                children: (0, n.jsxs)(r.a, {
                    transitionState: T,
                    onClose: V,
                    title: _.intl.string(a ? R.default["jZjP+I"] : R.default.I2XSKe),
                    size: "md",
                    input:
                        a || t.length < 2
                            ? void 0
                            : (0, n.jsx)(u.V, {
                                  selectedItem: i,
                                  type: "top",
                                  onItemSelect: (e) => z(e),
                                  "aria-label": _.intl.string(R.default["2dtUiI"]),
                                  children: t.map((e) =>
                                      (0, n.jsx)(u.V.Item, { id: e, children: _.intl.string(F[e]) }, e),
                                  ),
                              }),
                    actions: [
                        { text: _.intl.string(_.t["ETE/oC"]), variant: "secondary", onClick: V, disabled: o },
                        {
                            text: _.intl.string(a ? R.default.A7dQd9 : _.t["R3BPH+"]),
                            variant: "primary",
                            type: "submit",
                            loading: o,
                            disabled: !h,
                        },
                    ],
                    children: [
                        a || "app" === i ? e.fields : null,
                        a || "project" !== i ? null : X.fields,
                        a || "experimental" !== i ? null : X.experimentalFields,
                        a || "secrets" !== i ? null : e.secretFields,
                        a || "model" !== i || Q?.tierSettings == null
                            ? null
                            : (0, n.jsx)(B, { projectId: l, modelSettings: Q, tierSettings: Q.tierSettings }),
                        a || null != i
                            ? null
                            : q
                              ? (0, n.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: _.intl.string(R.default.lJJayk),
                                })
                              : (0, n.jsx)("div", { className: Z.L, children: (0, n.jsx)(c.y, {}) }),
                    ],
                }),
            });
        },
    });
}
function B(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, a.bG)([o.Ay], () => "open" === o.Ay.getConnState(l), [l]),
        u = i.useCallback((e) => (0, o.XZ)(l, e), [l]),
        [d, c] = (0, p.FT)(s, u);
    return (0, n.jsx)(p.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: c });
}
