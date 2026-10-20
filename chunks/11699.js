(t.d(l, { default: () => O }), t(321073));
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
    h = t(696208),
    p = t(319481),
    x = t(557744),
    m = t(223347),
    b = t(822313),
    j = t(359589),
    v = t(260498),
    S = t(722701),
    C = t(329356),
    k = t(297264),
    y = t(821609),
    I = t(44255),
    A = t(303345),
    E = t(416473),
    P = t(261425),
    w = t(105292);
function R(e) {
    let { projectId: l, canEdit: t } = e,
        s = (function (e, l) {
            let t = (0, i.bG)([p.default], () => "open" === p.default.getConnState(e), [e]);
            a.useEffect(() => {
                l && (0, p.ensureConnection)(e);
            }, [e, l]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [d, c] = a.useState(!1),
                [o, f] = a.useState(!1),
                [g, h] = a.useState(null),
                [x, m] = a.useState(null),
                [b, j] = a.useState(0),
                v = a.useRef(!1),
                S = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!l || !t) return;
                let n = S.current,
                    a = ++n.value;
                return (
                    (0, E.fi)(e)
                        .then((e) => {
                            S.current.value === a && (r(e), c(!0), u(!1));
                        })
                        .catch(() => {
                            S.current.value === a && (h(w.intl.string(P.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, l, t, b]);
            let C = a.useCallback(() => {
                    (u(!0), h(null), j((e) => e + 1));
                }, []),
                k = a.useCallback(async () => {
                    if (!l || !d || v.current) return;
                    v.current = !0;
                    let t = ++S.current.value;
                    (f(!0), h(null), m(null));
                    try {
                        let l = await (0, E.MN)(e);
                        if (S.current.value !== t) return;
                        (r(l), m(w.intl.string(P.default.lwN30C)));
                    } catch (e) {
                        S.current.value === t && h(e instanceof A.A ? e.message : w.intl.string(P.default.i5Xp1l));
                    } finally {
                        ((v.current = !1), S.current.value === t && f(!1));
                    }
                }, [l, d, e]);
            return { saved: n, loading: s, loaded: d, deleting: o, error: g, status: x, retry: C, remove: k };
        })(l, t),
        u = a.useId();
    return t
        ? (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(k.D, { id: u, variant: "heading-md/semibold", children: w.intl.string(P.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            role: "status",
                            children: w.intl.string(P.default["71yzD9"]),
                        })
                      : null,
                  s.loaded
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                null == s.saved
                                    ? (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: w.intl.string(P.default.sg8WIV),
                                      })
                                    : (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: w.intl.string(P.default.ubcNP7),
                                      }),
                                null != s.saved
                                    ? (0, n.jsxs)(o.B, {
                                          gap: 8,
                                          children: [
                                              (0, I.Dt)(s.saved).map((e, l) =>
                                                  (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, l),
                                              ),
                                              (0, n.jsx)(y.$, {
                                                  type: "button",
                                                  variant: "secondary",
                                                  text: w.intl.string(P.default.J7ZMMf),
                                                  disabled: s.deleting,
                                                  onClick: function () {
                                                      (0, r.A)({
                                                          title: w.intl.string(P.default["Tw/KaB"]),
                                                          subtitle: w.intl.string(P.default.qr1iIe),
                                                          confirmText: w.intl.string(P.default.J7ZMMf),
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
                      : (0, n.jsx)(y.$, {
                            type: "button",
                            variant: "secondary",
                            text: w.intl.string(P.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          })
        : null;
}
var _ = t(572253);
t(938796);
var L = t(193249),
    B = t(890497),
    T = t(862026),
    Z = t(904363),
    D = t(709753),
    F = t(540338),
    U = t(371169),
    G = t(535466),
    J = t(321032),
    M = t(502707),
    N = t(944142),
    V = t(788493),
    z = t(532247),
    q = t(951178),
    H = t(246338),
    K = t(277085),
    Q = t(453430);
let X = {
    project: P.default.W0eQfN,
    app: P.default.lFaJYF,
    secrets: P.default.vDpCPU,
    model: P.default.Rs3qc9,
    experimental: P.default["0Pe9uw"],
};
function O(e) {
    let {
            projectId: l,
            guildId: t,
            initialTab: m,
            scopeKeys: b,
            note: j,
            notifyAgent: k,
            isPreview: y,
            publishOptions: I,
            transitionState: A,
            onClose: E,
        } = e,
        O = (0, i.bG)([v.Ay], () => v.Ay.getProject(l), [l]),
        Y = (0, i.bG)([x.A], () => x.A.getModelSettings(l), [l]),
        $ = (0, i.bG)([p.default], () => "open" === p.default.getConnState(l), [l]),
        ee = null != O && (0, v.PV)(O),
        el = null != O && (0, v.jf)(O),
        et = (function (e, l) {
            var t;
            let r,
                s = (0, i.bG)([v.Ay], () => v.Ay.getProject(e), [e]),
                u = (0, Z.A)(l),
                d = (function (e) {
                    let l = (0, i.bG)([N.A], () => N.A.getLiveReload(e), [e]),
                        t = (0, M.A)(e),
                        [n, r] = a.useState(null),
                        [s, u] = a.useState(null);
                    null != s && l !== s.before && u(null);
                    let d = null != s && l === s.before ? s.enabled : l?.enabled;
                    null != n && n === d && r(null);
                    let c = null != l && null != n && n !== d,
                        o = a.useCallback(
                            () => !c || null == n || (!!(0, V.c)(e, n) && (u({ enabled: n, before: l }), r(null), !0)),
                            [c, n, l, e],
                        );
                    return {
                        available: null != l && !t,
                        checked: n ?? d ?? !1,
                        description: null == l ? "" : (0, z.oV)(l),
                        changed: c,
                        setChecked: r,
                        save: o,
                    };
                })(e),
                c = d.save,
                g = (function (e) {
                    let l = (0, G.Ay)(e);
                    a.useEffect(() => {
                        (0, U._b)(e).catch(() => {});
                    }, [e]);
                    let [t, n] = a.useState(null),
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
                { changes: h, commit: p } = g,
                x = (0, T.Q)(e),
                m = x.save,
                b = (0, D._t)(e),
                j = b.save,
                S = s?.collaborator_role_ids ?? [],
                [C, k] = a.useState(s?.name ?? ""),
                [y, I] = a.useState(null),
                [A, E] = a.useState(C),
                [R, _] = a.useState(s?.flags ?? 0),
                [Q, X] = a.useState(() => [...S]),
                [O, W] = a.useState(!1),
                [Y, $] = a.useState(null),
                [ee, el] = a.useState(null),
                [et, en] = a.useState(null),
                [ea, ei] = a.useState(null),
                er = a.useId(),
                es = A.trim(),
                eu = null != s && (0, q.IU)(s),
                ed = null != s && "user" !== s.install_scope,
                ec = ed && null != l && (0, q.RX)(s),
                { isPublic: eo, isGuildCollaboration: ef } = (0, H.n5)(R),
                eg = null != s && es !== C,
                eh = eu && R !== (y?.flags ?? s?.flags ?? 0),
                ep =
                    ec &&
                    ((t = y?.roleIds ?? S),
                    !((r = Q instanceof Set ? Q : new Set(Q)).size === t.length && t.every((e) => r.has(e)))),
                ex = eg || eh || ep || g.changed,
                em = ex || d.changed || x.changed || b.changed,
                eb = a.useCallback((e) => {
                    (E(e), $(null), en(null));
                }, []),
                ej = a.useCallback((e, l) => {
                    (_((t) => (l ? t | e : t & ~e)), el(null), en(null));
                }, []),
                ev = a.useCallback((e) => {
                    e.length > q.sq
                        ? el(w.intl.formatToPlainString(P.default["dH7+/Z"], { max: q.sq }))
                        : (X(e), el(null), en(null));
                }, []),
                eS = a.useCallback(async () => {
                    if (null == s || !em || O) return null;
                    let t = eg ? (0, K.p)(es) : null;
                    if (null != t) return ($(t), "project");
                    let n = { ...h };
                    (eg && (n.name = es),
                        eh && (n.flags = R),
                        ep && (n.collaborator_role_ids = [...Q].sort()),
                        null == s.guild_id && null != l && (ep || (eh && ef)) && (n.guild_id = l),
                        W(!0),
                        en(null),
                        ei(null));
                    try {
                        if ((ex && (await (0, U.CW)(e, n), k(es), I({ flags: R, roleIds: [...Q] }), p()), !c()))
                            return (en(w.intl.string(P.default.XzkNBw)), "project");
                        if (!m() || !j()) return (ei(w.intl.string(P.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return (en(w.intl.string(P.default["9JPr8h"])), "project");
                    } finally {
                        W(!1);
                    }
                }, [R, eh, p, h, c, m, j, ex, l, em, ef, eg, s, e, ep, O, Q, es]);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(J.r, {
                            iconURL: g.iconURL,
                            onIconChange: (e) => {
                                (g.setIcon(e), en(null));
                            },
                            name: A,
                            nameError: Y,
                            onNameChange: eb,
                            description: g.description,
                            onDescriptionChange: (e) => {
                                (g.setDescription(e), en(null));
                            },
                            disabled: O,
                        }),
                        eu
                            ? (0, n.jsx)(L.d, {
                                  label: w.intl.string(P.default.ujIxRm),
                                  description: w.intl.string(P.default.gT8zk1),
                                  checked: eo,
                                  disabled: O,
                                  onChange: (e) => ej(q.Zh.PUBLIC, e),
                              })
                            : null,
                        eu && ed
                            ? (0, n.jsx)(L.d, {
                                  label: w.intl.string(P.default.lVvR4E),
                                  description: w.intl.string(P.default.SQZGoV),
                                  checked: ef,
                                  disabled: O,
                                  onChange: (e) => ej(q.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        d.available
                            ? (0, n.jsx)(L.d, {
                                  label: w.intl.string(P.default.eEo0ye),
                                  description: d.description,
                                  checked: d.checked,
                                  disabled: O,
                                  onChange: (e) => {
                                      (d.setChecked(e), en(null));
                                  },
                              })
                            : null,
                        ec
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: w.intl.string(P.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(B.Z, {
                                          selectionMode: "multiple",
                                          label: w.intl.string(P.default["pO3+p5"]),
                                          placeholder: w.intl.string(P.default.gvL7QS),
                                          value: Q,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: O || !ef,
                                          "aria-invalid": null != ee,
                                          "aria-errormessage": null != ee ? er : void 0,
                                          onSelectionChange: ev,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: w.intl.formatToPlainString(P.default.g5I05P, {
                                              count: Q.length,
                                              max: q.sq,
                                          }),
                                      }),
                                      ef
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: w.intl.string(P.default.nZw5r9),
                                            }),
                                      null != ee
                                          ? (0, n.jsx)(f.E, {
                                                id: er,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: ee,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != et
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: et,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(L.d, {
                            label: w.intl.string(P.default["4liZ45"]),
                            description: w.intl.string(P.default.I5cl7p),
                            checked: x.checked,
                            disabled: O,
                            onChange: (e) => {
                                (x.setChecked(e), ei(null));
                            },
                        }),
                        (0, n.jsx)(L.d, {
                            label: w.intl.string(P.default.mpjaVm),
                            description: w.intl.string(P.default["2PxChh"]),
                            checked: b.checked,
                            disabled: O,
                            onChange: (e) => {
                                (b.setChecked(e), ei(null));
                            },
                        }),
                        (0, n.jsx)(F.u, { projectId: e }),
                        null != ea
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: ea,
                              })
                            : null,
                    ],
                }),
                canSave: em && "" !== es,
                saving: O,
                nameChanged: eg,
                submit: eS,
            };
        })(l, O?.guild_id ?? t ?? void 0),
        [en, ea] = a.useState(null);
    return (0, n.jsx)(_.A, {
        projectId: l,
        scopeKeys: b,
        note: j,
        notifyAgent: k,
        isPreview: y,
        children: (e) => {
            let t = [];
            ((ee || el) && t.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && t.push("app"),
                e.secretCount > 0 && t.push("secrets"),
                Y?.tierSettings != null && t.push("model"),
                ee && t.push("experimental"));
            let a = [en, m].find((e) => null != e && t.includes(e)) ?? t[0],
                i = e.isScoped,
                p = (ee && et.saving) || e.saving,
                x = e.canSave || (!i && ee && et.canSave);
            async function b(n) {
                if ((n.preventDefault(), !x || p)) return;
                let s = !i && ee && et.nameChanged,
                    [u, d] = await Promise.all([i || !ee ? null : et.submit(), e.submit()]);
                if (null == u && d) {
                    let e;
                    (await E(),
                        s &&
                            null != I &&
                            null != (e = v.Ay.getProject(l)) &&
                            (0, C.qF)(e) &&
                            (S.A.getPublishStatus(l)?.state ?? "unpublished") !== "unpublished" &&
                            (0, r.A)({
                                title: w.intl.string(P.default["48pvCR"]),
                                subtitle: w.intl.string(P.default["Xk+JsJ"]),
                                confirmText: w.intl.string(P.default.guoHDk),
                                cancelText: w.intl.string(P.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, C.FZ)(l, "name_prompt", I).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? ea(u) : "secrets" !== a && ea(t.includes("app") ? "app" : "secrets");
            }
            let j = w.intl.string(i ? P.default["jZjP+I"] : P.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: b,
                children: (0, n.jsxs)(s.d, {
                    transitionState: A,
                    onClose: E,
                    "aria-label": j,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: j }),
                        (0, n.jsxs)(d.c, {
                            controls:
                                i || t.length < 2
                                    ? void 0
                                    : (0, n.jsx)(c.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => ea(e),
                                          "aria-label": w.intl.string(P.default["2dtUiI"]),
                                          children: t.map((e) =>
                                              (0, n.jsx)(c.V.Item, { id: e, children: w.intl.string(X[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: Q.f,
                                          children: [
                                              ee ? et.fields : null,
                                              (0, n.jsx)(R, { projectId: l, canEdit: el }, l),
                                          ],
                                      }),
                                i || "experimental" !== a ? null : et.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || Y?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(W, { projectId: l, modelSettings: Y, tierSettings: Y.tierSettings }),
                                i || null != a
                                    ? null
                                    : $
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: w.intl.string(P.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: Q.L, children: (0, n.jsx)(g.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(h.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: w.intl.string(w.t["ETE/oC"]), variant: "secondary", onClick: E, disabled: p },
                                {
                                    text: w.intl.string(i ? P.default.A7dQd9 : w.t["R3BPH+"]),
                                    variant: "primary",
                                    type: "submit",
                                    loading: p,
                                    disabled: !x,
                                },
                            ],
                        }),
                    ],
                }),
            });
        },
    });
}
function W(e) {
    let { projectId: l, modelSettings: t, tierSettings: r } = e,
        s = (0, i.bG)([p.default], () => "open" === p.default.getConnState(l), [l]),
        u = a.useCallback((e) => (0, m.X)(l, e), [l]),
        [d, c] = (0, b.A)(r, u);
    return (0, n.jsx)(j.A, { settings: d, tiers: t.tiers, choices: t.choices, disabled: !s, onChange: c });
}
