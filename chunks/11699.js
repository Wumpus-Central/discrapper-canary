(t.d(l, { default: () => K }), t(321073));
var n = t(477900),
    a = t(582128),
    i = t(17928),
    r = t(314116),
    s = t(224640),
    u = t(20742),
    d = t(430993),
    c = t(761508),
    o = t(331322),
    f = t(834730),
    g = t(289873),
    p = t(696208),
    x = t(723312),
    h = t(557744),
    m = t(223347),
    b = t(359589),
    v = t(260498),
    j = t(722701),
    S = t(329356),
    C = t(297264),
    k = t(821609),
    y = t(44255),
    I = t(303345),
    A = t(416473),
    E = t(248675),
    P = t(105292);
function w(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, i.bG)([x.default], () => "open" === x.default.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, x.ensureConnection)(e);
            }, [e, l]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [d, c] = a.useState(!1),
                [o, f] = a.useState(!1),
                [g, p] = a.useState(null),
                [h, m] = a.useState(null),
                [b, v] = a.useState(0),
                j = a.useRef(!1),
                S = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = S.current,
                    a = ++n.value;
                return (
                    (0, A.fi)(e)
                        .then((e) => {
                            S.current.value === a && (r(e), c(!0), u(!1));
                        })
                        .catch(() => {
                            S.current.value === a && (p(P.intl.string(E.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, b]);
            let C = a.useCallback(() => {
                    (u(!0), p(null), v((e) => e + 1));
                }, []),
                k = a.useCallback(async () => {
                    if (!l || !d || j.current) return;
                    j.current = !0;
                    let t = ++S.current.value;
                    (f(!0), p(null), m(null));
                    try {
                        let l = await (0, A.MN)(e);
                        if (S.current.value !== t) return;
                        (r(l), m(P.intl.string(E.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && p(e instanceof I.A ? e.message : P.intl.string(E.default.i5Xp1l));
                    } finally {
                        ((j.current = !1), S.current.value === t && f(!1));
                    }
                }, [l, d, e]);
            return { saved: n, loading: s, loaded: d, deleting: o, error: g, status: h, retry: C, remove: k };
        })(l, t),
        u = a.useId();
    return t
        ? (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(C.D, { id: u, variant: "heading-md/semibold", children: P.intl.string(E.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            role: "status",
                            children: P.intl.string(E.default["71yzD9"]),
                        })
                      : null,
                  s.loaded
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                null == s.saved
                                    ? (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: P.intl.string(E.default.sg8WIV),
                                      })
                                    : (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: P.intl.string(E.default.ubcNP7),
                                      }),
                                null != s.saved
                                    ? (0, n.jsxs)(o.B, {
                                          gap: 8,
                                          children: [
                                              (0, y.Dt)(s.saved).map((e, l) =>
                                                  (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, l),
                                              ),
                                              (0, n.jsx)(k.$, {
                                                  type: "button",
                                                  variant: "secondary",
                                                  text: P.intl.string(E.default.J7ZMMf),
                                                  disabled: s.deleting,
                                                  onClick: function () {
                                                      (0, r.A)({
                                                          title: P.intl.string(E.default["Tw/KaB"]),
                                                          subtitle: P.intl.string(E.default.qr1iIe),
                                                          confirmText: P.intl.string(E.default.J7ZMMf),
                                                          variant: "critical",
                                                          onConfirm: s.remove,
                                                      });
                                                  },
                                              }),
                                          ],
                                      })
                                    : null,
                            ],
                        })
                      : null,
                  null != s.error
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            color: "text-feedback-critical",
                            role: "alert",
                            children: s.error,
                        })
                      : null,
                  null != s.status
                      ? (0, n.jsx)(f.E, { variant: "text-sm/normal", role: "status", children: s.status })
                      : null,
                  s.loading || null == s.error
                      ? null
                      : (0, n.jsx)(k.$, {
                            type: "button",
                            variant: "secondary",
                            text: P.intl.string(E.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          })
        : null;
}
var R = t(572253);
t(938796);
var L = t(193249),
    T = t(890497),
    _ = t(862026),
    B = t(904363),
    F = t(535466),
    Z = t(321032),
    D = t(502707),
    U = t(944142),
    G = t(788493),
    J = t(532247),
    M = t(371169),
    N = t(951178),
    V = t(246338),
    z = t(277085),
    q = t(453430);
let H = {
    project: E.default.W0eQfN,
    app: E.default.lFaJYF,
    secrets: E.default.vDpCPU,
    model: E.default.Rs3qc9,
    experimental: E.default["0Pe9uw"],
};
function K(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: m,
            scopeKeys: b,
            note: C,
            notifyAgent: k,
            isPreview: y,
            publishOptions: I,
            transitionState: A,
            onClose: K,
        } = e,
        X = (0, i.bG)([v.Ay], () => v.Ay.getProject(l), [l]),
        O = (0, i.bG)([h.A], () => h.A.getModelSettings(l), [l]),
        W = (0, i.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        Y = null != X && (0, v.PV)(X),
        $ = null != X && (0, v.jf)(X),
        ee = (function (e, l) {
            var t;
            let r,
                s = (0, i.bG)([v.Ay], () => v.Ay.getProject(e), [e]),
                u = (0, B.A)(l),
                d = (function (e) {
                    let l = (0, i.bG)([U.A], () => U.A.getLiveReload(e), [e]),
                        t = (0, D.A)(e),
                        [n, r] = a.useState(null),
                        [s, u] = a.useState(null);
                    null != s && l !== s.before && u(null);
                    let d = null != s && l === s.before ? s.enabled : l?.enabled;
                    null != n && n === d && r(null);
                    let c = null != l && null != n && n !== d,
                        o = a.useCallback(
                            () => !c || null == n || (!!(0, G.c)(e, n) && (u({ enabled: n, before: l }), r(null), !0)),
                            [c, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, J.oV)(l),
                        changed: c,
                        setChecked: r,
                        save: o,
                    };
                })(e),
                c = d.save,
                g = (function (e) {
                    let l = (0, F.Ay)(e),
                        [t, n] = a.useState(null),
                        [i, r] = a.useState(null),
                        s = i ?? l.description,
                        u = s.trim(),
                        d = u !== l.description.trim() ? u : null,
                        c = a.useMemo(
                            () => ({ ...(null != t ? { icon: t } : {}), ...(null != d ? { description: d } : {}) }),
                            [t, d],
                        ),
                        o = a.useCallback(() => {
                            (n(null), r(null));
                        }, []);
                    return {
                        iconURL: t ?? l.iconURL,
                        setIcon: n,
                        description: s,
                        setDescription: r,
                        changes: c,
                        changed: null != t || null != d,
                        commit: o,
                    };
                })(e),
                { changes: p, commit: x } = g,
                h = (0, _.Q)(e),
                m = h.save,
                b = s?.collaborator_role_ids ?? [],
                [j, S] = a.useState(s?.name ?? ""),
                [C, k] = a.useState(null),
                [y, I] = a.useState(j),
                [A, w] = a.useState(s?.flags ?? 0),
                [R, q] = a.useState(() => [...b]),
                [H, K] = a.useState(!1),
                [Q, X] = a.useState(null),
                [O, W] = a.useState(null),
                [Y, $] = a.useState(null),
                [ee, el] = a.useState(null),
                et = a.useId(),
                en = y.trim(),
                ea = null != s && (0, N.IU)(s),
                ei = null != s && "user" !== s.install_scope,
                er = ei && null != l && (0, N.RX)(s),
                { isPublic: es, isGuildCollaboration: eu } = (0, V.n5)(A),
                ed = null != s && en !== j,
                ec = ea && A !== (C?.flags ?? s?.flags ?? 0),
                eo =
                    er &&
                    ((t = C?.roleIds ?? b),
                    !((r = R instanceof Set ? R : new Set(R)).size === t.length && t.every((e) => r.has(e)))),
                ef = ed || ec || eo || g.changed,
                eg = ef || d.changed || h.changed,
                ep = a.useCallback((e) => {
                    (I(e), X(null), $(null));
                }, []),
                ex = a.useCallback((e, l) => {
                    (w((t) => (l ? t | e : t & ~e)), W(null), $(null));
                }, []),
                eh = a.useCallback((e) => {
                    e.length > N.sq
                        ? W(P.intl.formatToPlainString(E.default["dH7+/Z"], { max: N.sq }))
                        : (q(e), W(null), $(null));
                }, []),
                em = a.useCallback(async () => {
                    if (null == s || !eg || H) return null;
                    let t = ed ? (0, z.p)(en) : null;
                    if (null != t) return (X(t), "project");
                    let n = { ...p };
                    (ed && (n.name = en),
                        ec && (n.flags = A),
                        eo && (n.collaborator_role_ids = [...R].sort()),
                        null == s.guild_id && null != l && (eo || (ec && eu)) && (n.guild_id = l),
                        K(!0),
                        $(null),
                        el(null));
                    try {
                        if ((ef && (await (0, M.CW)(e, n), S(en), k({ flags: A, roleIds: [...R] }), x()), !c()))
                            return ($(P.intl.string(E.default.XzkNBw)), "project");
                        if (!m()) return (el(P.intl.string(E.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return ($(P.intl.string(E.default["9JPr8h"])), "project");
                    } finally {
                        K(!1);
                    }
                }, [A, ec, x, p, c, m, ef, l, eg, eu, ed, s, e, eo, H, R, en]);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(Z.r, {
                            iconURL: g.iconURL,
                            onIconChange: (e) => {
                                (g.setIcon(e), $(null));
                            },
                            name: y,
                            nameError: Q,
                            onNameChange: ep,
                            description: g.description,
                            onDescriptionChange: (e) => {
                                (g.setDescription(e), $(null));
                            },
                            disabled: H,
                        }),
                        ea
                            ? (0, n.jsx)(L.d, {
                                  label: P.intl.string(E.default.ujIxRm),
                                  description: P.intl.string(E.default.gT8zk1),
                                  checked: es,
                                  disabled: H,
                                  onChange: (e) => ex(N.Zh.PUBLIC, e),
                              })
                            : null,
                        ea && ei
                            ? (0, n.jsx)(L.d, {
                                  label: P.intl.string(E.default.lVvR4E),
                                  description: P.intl.string(E.default.SQZGoV),
                                  checked: eu,
                                  disabled: H,
                                  onChange: (e) => ex(N.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(L.d, {
                                  label: P.intl.string(E.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: H,
                                  onChange: (e) => {
                                      (d.setChecked(e), $(null));
                                  },
                              })
                            : null,
                        er
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: P.intl.string(E.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(T.Z, {
                                          selectionMode: "multiple",
                                          label: P.intl.string(E.default["pO3+p5"]),
                                          placeholder: P.intl.string(E.default.gvL7QS),
                                          value: R,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: H || !eu,
                                          "aria-invalid": null != O,
                                          "aria-errormessage": null != O ? et : void 0,
                                          onSelectionChange: eh,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: P.intl.formatToPlainString(E.default.g5I05P, {
                                              count: R.length,
                                              max: N.sq,
                                          }),
                                      }),
                                      eu
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: P.intl.string(E.default.nZw5r9),
                                            }),
                                      null != O
                                          ? (0, n.jsx)(f.E, {
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
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: Y,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(L.d, {
                            label: P.intl.string(E.default["4liZ45"]),
                            description: P.intl.string(E.default.I5cl7p),
                            checked: h.checked,
                            disabled: H,
                            onChange: (e) => {
                                (h.setChecked(e), el(null));
                            },
                        }),
                        null != ee
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: ee,
                              })
                            : null,
                    ],
                }),
                canSave: eg && "" !== en,
                saving: H,
                nameChanged: ed,
                submit: em,
            };
        })(l, X?.guild_id ?? t ?? void 0),
        [el, et] = a.useState(null);
    return (0, n.jsx)(R.A, {
        projectId: l,
        scopeKeys: b,
        note: C,
        notifyAgent: k,
        isPreview: y,
        children: (e) => {
            let t = [];
            ((Y || $) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                O?.tierSettings != null && t.push("model"),
                Y && t.push("experimental"));
            let a = [el, m].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                x = (Y && ee.saving) || e.saving,
                h = e.canSave || (!i && Y && ee.canSave);
            async function b(n) {
                if ((n.preventDefault(), !h || x)) return;
                let s = !i && Y && ee.nameChanged,
                    [u, d] = await Promise.all([i || !Y ? null : ee.submit(), e.submit()]);
                if (null == u && d) {
                    let e;
                    (await K(),
                        s &&
                            null != I &&
                            null != (e = v.Ay.getProject(l)) &&
                            (0, S.qF)(e) &&
                            (j.A.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, r.A)({
                                title: P.intl.string(E.default["48pvCR"]),
                                subtitle: P.intl.string(E.default["Xk+JsJ"]),
                                confirmText: P.intl.string(E.default.guoHDk),
                                cancelText: P.intl.string(E.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, S.FZ)(l, "name_prompt", I).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? et(u) : "secrets" !== a && et(t.includes("app") ? "app" : "secrets");
            }
            let C = P.intl.string(i ? E.default["jZjP+I"] : E.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: b,
                children: (0, n.jsxs)(s.d, {
                    transitionState: A,
                    onClose: K,
                    "aria-label": C,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: C }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => et(e),
                                          "aria-label": P.intl.string(E.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: P.intl.string(H[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: q.f,
                                          children: [
                                              Y ? ee.fields : null,
                                              (0, n.jsx)(w, { projectId: l, canEdit: $ }, l),
                                          ],
                                      }),
                                i || "experimental" !== a ? null : ee.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || O?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(Q, { projectId: l, modelSettings: O, tierSettings: O.tierSettings }),
                                i || null != a
                                    ? null
                                    : W
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: P.intl.string(E.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: q.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: P.intl.string(P.t["ETE/oC"]), variant: "secondary", onClick: K, disabled: x },
                                {
                                    text: P.intl.string(i ? E.default.A7dQd9 : P.t["R3BPH+"]),
                                    variant: "primary",
                                    type: "submit",
                                    loading: x,
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
function Q(e) {
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([x.default], () => "open" === x.default.getConnState(l), [l]),
        u = a.useCallback((e) => (0, m.X)(l, e), [l]),
        [d, c] = (0, b.FT)(r, u);
    return (0, n.jsx)(b.Ay, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: c });
}
