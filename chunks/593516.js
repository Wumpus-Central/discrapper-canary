(t.d(l, { default: () => Q }), t(321073));
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
    f = t(723312),
    h = t(557744),
    x = t(223347),
    m = t(359589),
    b = t(260498),
    j = t(722701),
    S = t(329356),
    v = t(572253);
t(938796);
var C = t(331322),
    k = t(193249),
    y = t(890497),
    A = t(862026),
    P = t(904363),
    I = t(535466),
    E = t(321032),
    w = t(502707),
    R = t(944142),
    _ = t(788493),
    F = t(532247),
    L = t(371169),
    Z = t(951178),
    B = t(246338),
    G = t(277085),
    J = t(248675),
    U = t(660183),
    D = t(453430);
let H = {
    project: J.default.W0eQfN,
    app: J.default.lFaJYF,
    secrets: J.default.vDpCPU,
    model: J.default.Rs3qc9,
    experimental: J.default["0Pe9uw"],
};
function Q(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: x,
            scopeKeys: m,
            note: Q,
            notifyAgent: V,
            isPreview: q,
            publishOptions: N,
            transitionState: X,
            onClose: M,
        } = e,
        z = (0, a.bG)([b.Ay], () => b.Ay.getProject(l), [l]),
        K = (0, a.bG)([h.A], () => h.A.getModelSettings(l), [l]),
        O = (0, a.bG)([f.default], () => "open" === f.default.getConnState(l), [l]),
        W = null != z && (0, b.PV)(z),
        Y = (function (e, l) {
            var t;
            let s,
                r = (0, a.bG)([b.Ay], () => b.Ay.getProject(e), [e]),
                u = (0, P.A)(l),
                d = (function (e) {
                    let l = (0, a.bG)([R.A], () => R.A.getLiveReload(e), [e]),
                        t = (0, w.A)(e),
                        [n, s] = i.useState(null),
                        [r, u] = i.useState(null);
                    null != r && l !== r.before && u(null);
                    let d = null != r && l === r.before ? r.enabled : l?.enabled;
                    null != n && n === d && s(null);
                    let c = null != l && null != n && n !== d,
                        o = i.useCallback(
                            () => !c || null == n || (!!(0, _.c)(e, n) && (u({ enabled: n, before: l }), s(null), !0)),
                            [c, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, F.oV)(l),
                        changed: c,
                        setChecked: s,
                        save: o,
                    };
                })(e),
                c = d.save,
                g = (function (e) {
                    let l = (0, I.Ay)(e),
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
                        setIcon: n,
                        description: r,
                        setDescription: s,
                        changes: c,
                        changed: null != t || null != d,
                        commit: o,
                    };
                })(e),
                { changes: p, commit: f } = g,
                h = (0, A.Q)(e),
                x = h.save,
                m = r?.collaborator_role_ids ?? [],
                [j, S] = i.useState(r?.name ?? ""),
                [v, D] = i.useState(null),
                [H, Q] = i.useState(j),
                [T, V] = i.useState(r?.flags ?? 0),
                [q, N] = i.useState(() => [...m]),
                [X, M] = i.useState(!1),
                [z, K] = i.useState(null),
                [O, W] = i.useState(null),
                [Y, $] = i.useState(null),
                [ee, el] = i.useState(null),
                et = i.useId(),
                en = H.trim(),
                ei = null != r && (0, Z.IU)(r),
                ea = null != r && "user" !== r.install_scope,
                es = ea && null != l && (0, Z.RX)(r),
                { isPublic: er, isShared: eu } = (0, B.n5)(T),
                ed = null != r && en !== j,
                ec = ei && T !== (v?.flags ?? r?.flags ?? 0),
                eo =
                    es &&
                    ((t = v?.roleIds ?? m),
                    !((s = q instanceof Set ? q : new Set(q)).size === t.length && t.every((e) => s.has(e)))),
                eg = ed || ec || eo || g.changed,
                ep = eg || d.changed || h.changed,
                ef = i.useCallback((e) => {
                    (Q(e), K(null), $(null));
                }, []),
                eh = i.useCallback((e, l) => {
                    (V((t) => (l ? t | e : t & ~e)), W(null), $(null));
                }, []),
                ex = i.useCallback((e) => {
                    e.length > Z.sq
                        ? W(U.intl.formatToPlainString(J.default["dH7+/Z"], { max: Z.sq }))
                        : (N(e), W(null), $(null));
                }, []),
                em = i.useCallback(async () => {
                    if (null == r || !ep || X) return null;
                    let t = ed ? (0, G.p)(en) : null;
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
                            if (!(await (0, L.CW)(e, n)).ok) return ($(U.intl.string(J.default["9JPr8h"])), "project");
                            (S(en), D({ flags: T, roleIds: [...q] }), f());
                        }
                        if (!c()) return ($(U.intl.string(J.default.XzkNBw)), "project");
                        if (!x()) return (el(U.intl.string(J.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return ($(U.intl.string(J.default["9JPr8h"])), "project");
                    } finally {
                        M(!1);
                    }
                }, [T, ec, f, p, c, x, eg, l, ep, er, ed, r, e, eo, X, q, en]);
            return {
                fields: (0, n.jsxs)(C.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(E.r, {
                            iconURL: g.iconURL,
                            onIconChange: (e) => {
                                (g.setIcon(e), $(null));
                            },
                            name: H,
                            nameError: z,
                            onNameChange: ef,
                            description: g.description,
                            onDescriptionChange: (e) => {
                                (g.setDescription(e), $(null));
                            },
                            disabled: X,
                        }),
                        ei
                            ? (0, n.jsx)(k.d, {
                                  label: U.intl.string(J.default.gchQFO),
                                  description: U.intl.string(J.default.mD4GBH),
                                  checked: eu,
                                  disabled: X,
                                  onChange: (e) => eh(Z.Zh.SHAREABLE, e),
                              })
                            : null,
                        ei && ea
                            ? (0, n.jsx)(k.d, {
                                  label: U.intl.string(J.default.lVvR4E),
                                  description: U.intl.string(J.default.SQZGoV),
                                  checked: er,
                                  disabled: X,
                                  onChange: (e) => eh(Z.Zh.PUBLIC, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(k.d, {
                                  label: U.intl.string(J.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: X,
                                  onChange: (e) => {
                                      (d.setChecked(e), $(null));
                                  },
                              })
                            : null,
                        es
                            ? (0, n.jsxs)(C.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(o.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: U.intl.string(J.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(y.Z, {
                                          selectionMode: "multiple",
                                          label: U.intl.string(J.default["pO3+p5"]),
                                          placeholder: U.intl.string(J.default.gvL7QS),
                                          value: q,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: X || !er,
                                          "aria-invalid": null != O,
                                          "aria-errormessage": null != O ? et : void 0,
                                          onSelectionChange: ex,
                                      }),
                                      (0, n.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: U.intl.formatToPlainString(J.default.g5I05P, {
                                              count: q.length,
                                              max: Z.sq,
                                          }),
                                      }),
                                      er
                                          ? null
                                          : (0, n.jsx)(o.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: U.intl.string(J.default.nZw5r9),
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
                experimentalFields: (0, n.jsxs)(C.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(k.d, {
                            label: U.intl.string(J.default["4liZ45"]),
                            description: U.intl.string(J.default.I5cl7p),
                            checked: h.checked,
                            disabled: X,
                            onChange: (e) => {
                                (h.setChecked(e), el(null));
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
                submit: em,
            };
        })(l, z?.guild_id ?? t ?? void 0),
        [$, ee] = i.useState(null);
    return (0, n.jsx)(v.A, {
        projectId: l,
        scopeKeys: m,
        note: Q,
        notifyAgent: V,
        isPreview: q,
        children: (e) => {
            let t = [];
            (W && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                K?.tierSettings != null && t.push("model"),
                W && t.push("experimental"));
            let i = [$, x].find((e) => null != e && t.includes(e)) ?? t[0],
                a = e.isScoped,
                f = Y.saving || e.saving,
                h = e.canSave || (!a && Y.canSave);
            async function m(n) {
                if ((n.preventDefault(), !h || f)) return;
                let r = !a && Y.nameChanged,
                    [u, d] = await Promise.all([a ? null : Y.submit(), e.submit()]);
                if (null == u && d) {
                    let e;
                    (await M(),
                        r &&
                            null != N &&
                            null != (e = b.Ay.getProject(l)) &&
                            (0, S.qF)(e) &&
                            (j.A.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, s.A)({
                                title: U.intl.string(J.default["48pvCR"]),
                                subtitle: U.intl.string(J.default["Xk+JsJ"]),
                                confirmText: U.intl.string(J.default.guoHDk),
                                cancelText: U.intl.string(J.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, S.FZ)(l, "name_prompt", N).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? ee(u) : "secrets" !== i && ee(t.includes("app") ? "app" : "secrets");
            }
            let v = U.intl.string(a ? J.default["jZjP+I"] : J.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: m,
                children: (0, n.jsxs)(r.d, {
                    transitionState: X,
                    onClose: M,
                    "aria-label": v,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: v }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                a || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: i,
                                          type: "top",
                                          onItemSelect: (e) => ee(e),
                                          "aria-label": U.intl.string(J.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: U.intl.string(H[e]) }, e),
                                          ),
                                      }),
                            children: [
                                a || "app" === i ? e.fields : null,
                                a || "project" !== i ? null : (0, n.jsx)("div", { className: D.f, children: Y.fields }),
                                a || "experimental" !== i ? null : Y.experimentalFields,
                                a || "secrets" !== i ? null : e.secretFields,
                                a || "model" !== i || K?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(T, { projectId: l, modelSettings: K, tierSettings: K.tierSettings }),
                                a || null != i
                                    ? null
                                    : O
                                      ? (0, n.jsx)(o.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: U.intl.string(J.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: D.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: U.intl.string(U.t["ETE/oC"]), variant: "secondary", onClick: M, disabled: f },
                                {
                                    text: U.intl.string(a ? J.default.A7dQd9 : U.t["R3BPH+"]),
                                    variant: "primary",
                                    type: "submit",
                                    loading: f,
                                    disabled: !h,
                                },
                            ],
                        }),
                    ],
                }),
            });
        },
    });
}
function T(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, a.bG)([f.default], () => "open" === f.default.getConnState(l), [l]),
        u = i.useCallback((e) => (0, x.X)(l, e), [l]),
        [d, c] = (0, m.FT)(s, u);
    return (0, n.jsx)(m.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: c });
}
