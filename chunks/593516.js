(t.d(l, { default: () => V }), t(321073));
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
    I = t(904363),
    P = t(535466),
    E = t(321032),
    R = t(502707),
    _ = t(944142),
    w = t(788493),
    L = t(532247),
    F = t(371169),
    T = t(951178),
    U = t(246338),
    Z = t(277085),
    G = t(248675),
    J = t(660183),
    B = t(453430);
let D = {
    project: G.default.W0eQfN,
    app: G.default.lFaJYF,
    secrets: G.default.vDpCPU,
    model: G.default.Rs3qc9,
    experimental: G.default["0Pe9uw"],
};
function V(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: x,
            scopeKeys: m,
            note: V,
            notifyAgent: Q,
            isPreview: q,
            publishOptions: H,
            transitionState: O,
            onClose: X,
        } = e,
        z = (0, a.bG)([b.Ay], () => b.Ay.getProject(l), [l]),
        M = (0, a.bG)([h.A], () => h.A.getModelSettings(l), [l]),
        K = (0, a.bG)([f.default], () => "open" === f.default.getConnState(l), [l]),
        W = null != z && (0, b.PV)(z),
        Y = (function (e, l) {
            var t;
            let s,
                r = (0, a.bG)([b.Ay], () => b.Ay.getProject(e), [e]),
                u = (0, I.A)(l),
                d = (function (e) {
                    let l = (0, a.bG)([_.A], () => _.A.getLiveReload(e), [e]),
                        t = (0, R.A)(e),
                        [n, s] = i.useState(null),
                        [r, u] = i.useState(null);
                    null != r && l !== r.before && u(null);
                    let d = null != r && l === r.before ? r.enabled : l?.enabled;
                    null != n && n === d && s(null);
                    let c = null != l && null != n && n !== d,
                        o = i.useCallback(
                            () => !c || null == n || (!!(0, w.c)(e, n) && (u({ enabled: n, before: l }), s(null), !0)),
                            [c, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, L.oV)(l),
                        changed: c,
                        setChecked: s,
                        save: o,
                    };
                })(e),
                c = d.save,
                g = (function (e) {
                    let l = (0, P.Ay)(e),
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
                [v, B] = i.useState(null),
                [D, V] = i.useState(j),
                [N, Q] = i.useState(r?.flags ?? 0),
                [q, H] = i.useState(() => [...m]),
                [O, X] = i.useState(!1),
                [z, M] = i.useState(null),
                [K, W] = i.useState(null),
                [Y, $] = i.useState(null),
                [ee, el] = i.useState(null),
                et = i.useId(),
                en = D.trim(),
                ei = null != r && (0, T.IU)(r),
                ea = null != r && "user" !== r.install_scope,
                es = ea && null != l && (0, T.RX)(r),
                { isPublic: er, isGuildCollaboration: eu } = (0, U.n5)(N),
                ed = null != r && en !== j,
                ec = ei && N !== (v?.flags ?? r?.flags ?? 0),
                eo =
                    es &&
                    ((t = v?.roleIds ?? m),
                    !((s = q instanceof Set ? q : new Set(q)).size === t.length && t.every((e) => s.has(e)))),
                eg = ed || ec || eo || g.changed,
                ep = eg || d.changed || h.changed,
                ef = i.useCallback((e) => {
                    (V(e), M(null), $(null));
                }, []),
                eh = i.useCallback((e, l) => {
                    (Q((t) => (l ? t | e : t & ~e)), W(null), $(null));
                }, []),
                ex = i.useCallback((e) => {
                    e.length > T.sq
                        ? W(J.intl.formatToPlainString(G.default["dH7+/Z"], { max: T.sq }))
                        : (H(e), W(null), $(null));
                }, []),
                em = i.useCallback(async () => {
                    if (null == r || !ep || O) return null;
                    let t = ed ? (0, Z.p)(en) : null;
                    if (null != t) return (M(t), "project");
                    let n = { ...p };
                    (ed && (n.name = en),
                        ec && (n.flags = N),
                        eo && (n.collaborator_role_ids = [...q].sort()),
                        null == r.guild_id && null != l && (eo || (ec && eu)) && (n.guild_id = l),
                        X(!0),
                        $(null),
                        el(null));
                    try {
                        if (eg) {
                            if (!(await (0, F.CW)(e, n)).ok) return ($(J.intl.string(G.default["9JPr8h"])), "project");
                            (S(en), B({ flags: N, roleIds: [...q] }), f());
                        }
                        if (!c()) return ($(J.intl.string(G.default.XzkNBw)), "project");
                        if (!x()) return (el(J.intl.string(G.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return ($(J.intl.string(G.default["9JPr8h"])), "project");
                    } finally {
                        X(!1);
                    }
                }, [N, ec, f, p, c, x, eg, l, ep, eu, ed, r, e, eo, O, q, en]);
            return {
                fields: (0, n.jsxs)(C.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(E.r, {
                            iconURL: g.iconURL,
                            onIconChange: (e) => {
                                (g.setIcon(e), $(null));
                            },
                            name: D,
                            nameError: z,
                            onNameChange: ef,
                            description: g.description,
                            onDescriptionChange: (e) => {
                                (g.setDescription(e), $(null));
                            },
                            disabled: O,
                        }),
                        ei
                            ? (0, n.jsx)(k.d, {
                                  label: J.intl.string(G.default.ujIxRm),
                                  description: J.intl.string(G.default.gT8zk1),
                                  checked: er,
                                  disabled: O,
                                  onChange: (e) => eh(T.Zh.PUBLIC, e),
                              })
                            : null,
                        ei && ea
                            ? (0, n.jsx)(k.d, {
                                  label: J.intl.string(G.default.lVvR4E),
                                  description: J.intl.string(G.default.SQZGoV),
                                  checked: eu,
                                  disabled: O,
                                  onChange: (e) => eh(T.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(k.d, {
                                  label: J.intl.string(G.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: O,
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
                                          children: J.intl.string(G.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(y.Z, {
                                          selectionMode: "multiple",
                                          label: J.intl.string(G.default["pO3+p5"]),
                                          placeholder: J.intl.string(G.default.gvL7QS),
                                          value: q,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: O || !eu,
                                          "aria-invalid": null != K,
                                          "aria-errormessage": null != K ? et : void 0,
                                          onSelectionChange: ex,
                                      }),
                                      (0, n.jsx)(o.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: J.intl.formatToPlainString(G.default.g5I05P, {
                                              count: q.length,
                                              max: T.sq,
                                          }),
                                      }),
                                      eu
                                          ? null
                                          : (0, n.jsx)(o.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: J.intl.string(G.default.nZw5r9),
                                            }),
                                      null != K
                                          ? (0, n.jsx)(o.E, {
                                                id: et,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: K,
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
                            label: J.intl.string(G.default["4liZ45"]),
                            description: J.intl.string(G.default.I5cl7p),
                            checked: h.checked,
                            disabled: O,
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
                saving: O,
                nameChanged: ed,
                submit: em,
            };
        })(l, z?.guild_id ?? t ?? void 0),
        [$, ee] = i.useState(null);
    return (0, n.jsx)(v.A, {
        projectId: l,
        scopeKeys: m,
        note: V,
        notifyAgent: Q,
        isPreview: q,
        children: (e) => {
            let t = [];
            (W && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                M?.tierSettings != null && t.push("model"),
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
                    (await X(),
                        r &&
                            null != H &&
                            null != (e = b.Ay.getProject(l)) &&
                            (0, S.qF)(e) &&
                            (j.A.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, s.A)({
                                title: J.intl.string(G.default["48pvCR"]),
                                subtitle: J.intl.string(G.default["Xk+JsJ"]),
                                confirmText: J.intl.string(G.default.guoHDk),
                                cancelText: J.intl.string(G.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, S.FZ)(l, "name_prompt", H).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? ee(u) : "secrets" !== i && ee(t.includes("app") ? "app" : "secrets");
            }
            let v = J.intl.string(a ? G.default["jZjP+I"] : G.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: m,
                children: (0, n.jsxs)(r.d, {
                    transitionState: O,
                    onClose: X,
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
                                          "aria-label": J.intl.string(G.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: J.intl.string(D[e]) }, e),
                                          ),
                                      }),
                            children: [
                                a || "app" === i ? e.fields : null,
                                a || "project" !== i ? null : (0, n.jsx)("div", { className: B.f, children: Y.fields }),
                                a || "experimental" !== i ? null : Y.experimentalFields,
                                a || "secrets" !== i ? null : e.secretFields,
                                a || "model" !== i || M?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(N, { projectId: l, modelSettings: M, tierSettings: M.tierSettings }),
                                a || null != i
                                    ? null
                                    : K
                                      ? (0, n.jsx)(o.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: J.intl.string(G.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: B.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: J.intl.string(J.t["ETE/oC"]), variant: "secondary", onClick: X, disabled: f },
                                {
                                    text: J.intl.string(a ? G.default.A7dQd9 : J.t["R3BPH+"]),
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
function N(e) {
    let { projectId: l, modelSettings: t, tierSettings: s } = e,
        r = (0, a.bG)([f.default], () => "open" === f.default.getConnState(l), [l]),
        u = i.useCallback((e) => (0, x.X)(l, e), [l]),
        [d, c] = (0, m.FT)(s, u);
    return (0, n.jsx)(m.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !r, onChange: c });
}
