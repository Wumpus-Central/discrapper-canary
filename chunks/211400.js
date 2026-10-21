(l.d(t, { default: () => ed }), l(321073));
var n = l(477900),
    a = l(582128),
    i = l(17928),
    r = l(314116),
    s = l(224640),
    u = l(20742),
    c = l(430993),
    d = l(761508),
    o = l(331322),
    f = l(834730),
    m = l(289873),
    p = l(696208),
    g = l(319481),
    x = l(260498),
    h = l(360047),
    j = l(248675),
    b = l(105292);
let v = [];
var C = l(323384),
    S = l(661531),
    k = l(265872),
    y = l(980707),
    E = l(477782),
    I = l(866665),
    A = l(408278),
    P = l(365199),
    _ = l(497183),
    T = l(843313);
function N(e) {
    let { linkedApps: t } = e,
        { callers: l, projects: a, names: i, failed: s, setBuild: u, remove: c } = t;
    return (0, n.jsx)("div", {
        className: T.Mf,
        children: (0, n.jsxs)(o.B, {
            gap: 16,
            children: [
                (0, n.jsx)(f.E, {
                    variant: "text-sm/normal",
                    color: "text-subtle",
                    children: b.intl.string(j.default["6c2rjv"]),
                }),
                (0, n.jsx)(o.B, {
                    gap: 8,
                    children: l.map((e) => {
                        let t = i[e.project_id];
                        return (0, n.jsx)(
                            R,
                            {
                                caller: e,
                                project: a[e.project_id],
                                name: t,
                                onBuildChange: (t) => u(e.project_id, t),
                                onRemove: () => {
                                    var l;
                                    return (
                                        (l = e.project_id),
                                        void (0, r.A)({
                                            title: b.intl.formatToPlainString(j.default.zSfIvv, { name: t }),
                                            subtitle: b.intl.formatToPlainString(j.default["7TX+mR"], { name: t }),
                                            confirmText: b.intl.string(j.default.vDZEGQ),
                                            variant: "critical",
                                            onConfirm: () => c(l),
                                        })
                                    );
                                },
                            },
                            e.project_id,
                        );
                    }),
                }),
                s
                    ? (0, n.jsx)(f.E, {
                          variant: "text-sm/normal",
                          color: "text-feedback-critical",
                          role: "alert",
                          children: b.intl.string(j.default.dIEOrl),
                      })
                    : null,
            ],
        }),
    });
}
function R(e) {
    let { caller: t, project: l, name: i, onBuildChange: r, onRemove: s } = e,
        u = a.useRef(null),
        c = b.intl.formatToPlainString(j.default.bzMlmh, { name: i });
    return (0, n.jsxs)("div", {
        className: T.nM,
        children: [
            null != l
                ? (0, n.jsx)(_.A, { project: l, size: "card" })
                : (0, n.jsx)("div", {
                      className: T.Pz,
                      "aria-hidden": !0,
                      children: (0, n.jsx)(C.k, { size: "md", color: S.A.colors.INTERACTIVE_ICON_DEFAULT }),
                  }),
            (0, n.jsxs)("div", {
                className: T.rf,
                children: [
                    (0, n.jsx)(f.E, { variant: "text-md/medium", lineClamp: 1, children: i }),
                    (0, n.jsx)(f.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        lineClamp: 1,
                        children: (0, h.hU)(t.build),
                    }),
                ],
            }),
            (0, n.jsx)(k.Y, {
                targetElementRef: u,
                position: "bottom",
                align: "right",
                animation: k.Y.Animation.NONE,
                renderPopout: (e) => {
                    let { closePopout: l } = e;
                    return (0, n.jsxs)(y.W, {
                        "data-menu-migrated": !0,
                        navId: `conjure-linked-app-${t.project_id}`,
                        "aria-label": c,
                        onClose: l,
                        onSelect: l,
                        children: [
                            (0, n.jsx)(E.rX, {
                                label: b.intl.string(j.default.Odrcmq),
                                children: h.Hi.map((e) =>
                                    (0, n.jsx)(
                                        E.iD,
                                        {
                                            id: `build-${e}`,
                                            group: `conjure-linked-app-build-${t.project_id}`,
                                            label: (0, h.hU)(e),
                                            subtext: (0, h.Vq)(e),
                                            checked: e === t.build,
                                            action: () => {
                                                (r(e), l());
                                            },
                                        },
                                        e,
                                    ),
                                ),
                            }),
                            (0, n.jsx)(E.bX, {}),
                            (0, n.jsx)(E.rX, {
                                children: (0, n.jsx)(E.Dr, {
                                    id: "remove",
                                    color: "danger",
                                    label: b.intl.string(j.default.bN1S9T),
                                    action: s,
                                }),
                            }),
                        ],
                    });
                },
                children: (e, t) => {
                    let { onClick: l } = e,
                        { isShown: a } = t;
                    return (0, n.jsx)("div", {
                        ref: u,
                        className: T.hZ,
                        children: (0, n.jsx)(I.m, {
                            text: c,
                            children: (0, n.jsx)(A.K, {
                                icon: P.MoreHorizontalIcon,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": c,
                                "aria-haspopup": "menu",
                                "aria-expanded": a,
                                onClick: l,
                            }),
                        }),
                    });
                },
            }),
        ],
    });
}
var w = l(557744),
    B = l(223347),
    z = l(822313),
    D = l(359589),
    M = l(722701),
    L = l(329356),
    U = l(297264),
    Z = l(821609),
    O = l(44255),
    F = l(303345),
    H = l(416473);
function V(e) {
    let { projectId: t, canEdit: l } = e,
        s = (function (e, t) {
            let l = (0, i.bG)([g.default], () => "open" === g.default.getConnState(e), [e]);
            a.useEffect(() => {
                t && (0, g.ensureConnection)(e);
            }, [e, t]);
            let [n, r] = a.useState(null),
                [s, u] = a.useState(!0),
                [c, d] = a.useState(!1),
                [o, f] = a.useState(!1),
                [m, p] = a.useState(null),
                [x, h] = a.useState(null),
                [v, C] = a.useState(0),
                S = a.useRef(!1),
                k = a.useRef({ value: 0 });
            a.useEffect(() => {
                if (!t || !l) return;
                let n = k.current,
                    a = ++n.value;
                return (
                    (0, H.fi)(e)
                        .then((e) => {
                            k.current.value === a && (r(e), d(!0), u(!1));
                        })
                        .catch(() => {
                            k.current.value === a && (p(b.intl.string(j.default.n25haz)), u(!1));
                        }),
                    () => {
                        n.value++;
                    }
                );
            }, [e, t, l, v]);
            let y = a.useCallback(() => {
                    (u(!0), p(null), C((e) => e + 1));
                }, []),
                E = a.useCallback(async () => {
                    if (!t || !c || S.current) return;
                    S.current = !0;
                    let l = ++k.current.value;
                    (f(!0), p(null), h(null));
                    try {
                        let t = await (0, H.MN)(e);
                        if (k.current.value !== l) return;
                        (r(t), h(b.intl.string(j.default.lwN30C)));
                    } catch (e) {
                        k.current.value === l && p(e instanceof F.A ? e.message : b.intl.string(j.default.i5Xp1l));
                    } finally {
                        ((S.current = !1), k.current.value === l && f(!1));
                    }
                }, [t, c, e]);
            return { saved: n, loading: s, loaded: c, deleting: o, error: m, status: x, retry: y, remove: E };
        })(t, l),
        u = a.useId();
    return l
        ? (0, n.jsxs)(o.B, {
              as: "section",
              gap: 16,
              "aria-labelledby": u,
              children: [
                  (0, n.jsx)(U.D, { id: u, variant: "heading-md/semibold", children: b.intl.string(j.default.ptzKKH) }),
                  s.loading
                      ? (0, n.jsx)(f.E, {
                            variant: "text-sm/normal",
                            role: "status",
                            children: b.intl.string(j.default["71yzD9"]),
                        })
                      : null,
                  s.loaded
                      ? (0, n.jsxs)(n.Fragment, {
                            children: [
                                null == s.saved
                                    ? (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default.sg8WIV),
                                      })
                                    : (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default.ubcNP7),
                                      }),
                                null != s.saved
                                    ? (0, n.jsxs)(o.B, {
                                          gap: 8,
                                          children: [
                                              (0, O.Dt)(s.saved).map((e, t) =>
                                                  (0, n.jsx)(f.E, { variant: "text-sm/normal", children: e }, t),
                                              ),
                                              (0, n.jsx)(Z.$, {
                                                  type: "button",
                                                  variant: "secondary",
                                                  text: b.intl.string(j.default.J7ZMMf),
                                                  disabled: s.deleting,
                                                  onClick: function () {
                                                      (0, r.A)({
                                                          title: b.intl.string(j.default["Tw/KaB"]),
                                                          subtitle: b.intl.string(j.default.qr1iIe),
                                                          confirmText: b.intl.string(j.default.J7ZMMf),
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
                      : (0, n.jsx)(Z.$, {
                            type: "button",
                            variant: "secondary",
                            text: b.intl.string(j.default.iLTcFU),
                            onClick: s.retry,
                        }),
              ],
          })
        : null;
}
var G = l(572253);
l(938796);
var X = l(193249),
    q = l(890497),
    J = l(862026),
    K = l(904363),
    Q = l(709753),
    W = l(540338),
    $ = l(371169),
    Y = l(535466),
    ee = l(321032),
    et = l(502707),
    el = l(944142),
    en = l(788493),
    ea = l(532247),
    ei = l(951178),
    er = l(246338),
    es = l(277085),
    eu = l(453430);
let ec = {
    project: j.default.W0eQfN,
    app: j.default.lFaJYF,
    secrets: j.default.vDpCPU,
    model: j.default.Rs3qc9,
    linked: j.default.fBEHdq,
    experimental: j.default["0Pe9uw"],
};
function ed(e) {
    let {
            projectId: t,
            guildId: l,
            initialTab: C,
            scopeKeys: S,
            note: k,
            notifyAgent: y,
            isPreview: E,
            publishOptions: I,
            transitionState: A,
            onClose: P,
        } = e,
        _ = (0, i.bG)([x.Ay], () => x.Ay.getProject(t), [t]),
        T = (0, i.bG)([w.A], () => w.A.getModelSettings(t), [t]),
        R = (0, i.bG)([g.default], () => "open" === g.default.getConnState(t), [t]),
        B = null != _ && (0, x.PV)(_),
        z = null != _ && (0, x.jf)(_),
        D = (function (e, t) {
            var l;
            let r,
                s = (0, i.bG)([x.Ay], () => x.Ay.getProject(e), [e]),
                u = (0, K.A)(t),
                c = (function (e) {
                    let t = (0, i.bG)([el.A], () => el.A.getLiveReload(e), [e]),
                        l = (0, et.A)(e),
                        [n, r] = a.useState(null),
                        [s, u] = a.useState(null);
                    null != s && t !== s.before && u(null);
                    let c = null != s && t === s.before ? s.enabled : t?.enabled;
                    null != n && n === c && r(null);
                    let d = null != t && null != n && n !== c,
                        o = a.useCallback(
                            () => !d || null == n || (!!(0, en.c)(e, n) && (u({ enabled: n, before: t }), r(null), !0)),
                            [d, n, t, e],
                        );
                    return {
                        available: null != t && !l,
                        checked: n ?? c ?? !1,
                        description: null == t ? "" : (0, ea.oV)(t),
                        changed: d,
                        setChecked: r,
                        save: o,
                    };
                })(e),
                d = c.save,
                m = (function (e) {
                    let t = (0, Y.Ay)(e);
                    a.useEffect(() => {
                        (0, $._b)(e).catch(() => {});
                    }, [e]);
                    let [l, n] = a.useState(null),
                        [i, r] = a.useState(null),
                        s = i ?? t.description,
                        u = s.trim(),
                        c = u !== t.description.trim() ? u : null,
                        d = a.useMemo(
                            () => ({ ...(null != l ? { icon: l } : {}), ...(null != c ? { description: c } : {}) }),
                            [l, c],
                        ),
                        o = a.useCallback(() => {
                            (n(null), r(null));
                        }, []);
                    return {
                        iconURL: l ?? t.iconURL,
                        setIcon: n,
                        description: s,
                        setDescription: r,
                        changes: d,
                        changed: null != l || null != c,
                        commit: o,
                    };
                })(e),
                { changes: p, commit: g } = m,
                h = (0, J.Q)(e),
                v = h.save,
                C = (0, Q._t)(e),
                S = C.save,
                k = s?.collaborator_role_ids ?? [],
                [y, E] = a.useState(s?.name ?? ""),
                [I, A] = a.useState(null),
                [P, _] = a.useState(y),
                [T, N] = a.useState(s?.flags ?? 0),
                [R, w] = a.useState(() => [...k]),
                [B, z] = a.useState(!1),
                [D, M] = a.useState(null),
                [L, U] = a.useState(null),
                [Z, O] = a.useState(null),
                [F, H] = a.useState(null),
                V = a.useId(),
                G = P.trim(),
                eu = null != s && (0, ei.IU)(s),
                ec = null != s && "user" !== s.install_scope,
                ed = ec && null != t && (0, ei.RX)(s),
                { isPublic: eo, isGuildCollaboration: ef } = (0, er.n5)(T),
                em = null != s && G !== y,
                ep = eu && T !== (I?.flags ?? s?.flags ?? 0),
                eg =
                    ed &&
                    ((l = I?.roleIds ?? k),
                    !((r = R instanceof Set ? R : new Set(R)).size === l.length && l.every((e) => r.has(e)))),
                ex = em || ep || eg || m.changed,
                eh = ex || c.changed || h.changed || C.changed,
                ej = a.useCallback((e) => {
                    (_(e), M(null), O(null));
                }, []),
                eb = a.useCallback((e, t) => {
                    (N((l) => (t ? l | e : l & ~e)), U(null), O(null));
                }, []),
                ev = a.useCallback((e) => {
                    e.length > ei.sq
                        ? U(b.intl.formatToPlainString(j.default["dH7+/Z"], { max: ei.sq }))
                        : (w(e), U(null), O(null));
                }, []),
                eC = a.useCallback(async () => {
                    if (null == s || !eh || B) return null;
                    let l = em ? (0, es.p)(G) : null;
                    if (null != l) return (M(l), "project");
                    let n = { ...p };
                    (em && (n.name = G),
                        ep && (n.flags = T),
                        eg && (n.collaborator_role_ids = [...R].sort()),
                        null == s.guild_id && null != t && (eg || (ep && ef)) && (n.guild_id = t),
                        z(!0),
                        O(null),
                        H(null));
                    try {
                        if ((ex && (await (0, $.CW)(e, n), E(G), A({ flags: T, roleIds: [...R] }), g()), !d()))
                            return (O(b.intl.string(j.default.XzkNBw)), "project");
                        if (!v() || !S()) return (H(b.intl.string(j.default["9JPr8h"])), "experimental");
                        return null;
                    } catch {
                        return (O(b.intl.string(j.default["9JPr8h"])), "project");
                    } finally {
                        z(!1);
                    }
                }, [T, ep, g, p, d, v, S, ex, t, eh, ef, em, s, e, eg, B, R, G]);
            return {
                fields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(ee.r, {
                            iconURL: m.iconURL,
                            onIconChange: (e) => {
                                (m.setIcon(e), O(null));
                            },
                            name: P,
                            nameError: D,
                            onNameChange: ej,
                            description: m.description,
                            onDescriptionChange: (e) => {
                                (m.setDescription(e), O(null));
                            },
                            disabled: B,
                        }),
                        eu
                            ? (0, n.jsx)(X.d, {
                                  label: b.intl.string(j.default.ujIxRm),
                                  description: b.intl.string(j.default.gT8zk1),
                                  checked: eo,
                                  disabled: B,
                                  onChange: (e) => eb(ei.Zh.PUBLIC, e),
                              })
                            : null,
                        eu && ec
                            ? (0, n.jsx)(X.d, {
                                  label: b.intl.string(j.default.lVvR4E),
                                  description: b.intl.string(j.default.SQZGoV),
                                  checked: ef,
                                  disabled: B,
                                  onChange: (e) => eb(ei.Zh.GUILD_COLLABORATION, e),
                              })
                            : null,
                        c.available
                            ? (0, n.jsx)(X.d, {
                                  label: b.intl.string(j.default.eEo0ye),
                                  description: c.description,
                                  checked: c.checked,
                                  disabled: B,
                                  onChange: (e) => {
                                      (c.setChecked(e), O(null));
                                  },
                              })
                            : null,
                        ed
                            ? (0, n.jsxs)(o.B, {
                                  gap: 8,
                                  children: [
                                      (0, n.jsx)(f.E, {
                                          variant: "text-sm/normal",
                                          color: "text-subtle",
                                          children: b.intl.string(j.default["9MdtK9"]),
                                      }),
                                      (0, n.jsx)(q.Z, {
                                          selectionMode: "multiple",
                                          label: b.intl.string(j.default["pO3+p5"]),
                                          placeholder: b.intl.string(j.default.gvL7QS),
                                          value: R,
                                          options: u,
                                          maxOptionsVisible: 6,
                                          wrapTags: !0,
                                          disabled: B || !ef,
                                          "aria-invalid": null != L,
                                          "aria-errormessage": null != L ? V : void 0,
                                          onSelectionChange: ev,
                                      }),
                                      (0, n.jsx)(f.E, {
                                          variant: "text-xs/normal",
                                          color: "text-muted",
                                          children: b.intl.formatToPlainString(j.default.g5I05P, {
                                              count: R.length,
                                              max: ei.sq,
                                          }),
                                      }),
                                      ef
                                          ? null
                                          : (0, n.jsx)(f.E, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: b.intl.string(j.default.nZw5r9),
                                            }),
                                      null != L
                                          ? (0, n.jsx)(f.E, {
                                                id: V,
                                                variant: "text-xs/normal",
                                                color: "text-feedback-critical",
                                                role: "alert",
                                                children: L,
                                            })
                                          : null,
                                  ],
                              })
                            : null,
                        null != Z
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: Z,
                              })
                            : null,
                    ],
                }),
                experimentalFields: (0, n.jsxs)(o.B, {
                    gap: 20,
                    children: [
                        (0, n.jsx)(X.d, {
                            label: b.intl.string(j.default["4liZ45"]),
                            description: b.intl.string(j.default.I5cl7p),
                            checked: h.checked,
                            disabled: B,
                            onChange: (e) => {
                                (h.setChecked(e), H(null));
                            },
                        }),
                        (0, n.jsx)(X.d, {
                            label: b.intl.string(j.default.mpjaVm),
                            description: b.intl.string(j.default["2PxChh"]),
                            checked: C.checked,
                            disabled: B,
                            onChange: (e) => {
                                (C.setChecked(e), H(null));
                            },
                        }),
                        (0, n.jsx)(W.u, { projectId: e }),
                        null != F
                            ? (0, n.jsx)(f.E, {
                                  variant: "text-xs/normal",
                                  color: "text-feedback-critical",
                                  role: "alert",
                                  children: F,
                              })
                            : null,
                    ],
                }),
                canSave: eh && "" !== G,
                saving: B,
                nameChanged: em,
                submit: eC,
            };
        })(t, _?.guild_id ?? l ?? void 0),
        U = (function (e, t) {
            let [l, n] = a.useState(v),
                [r, s] = a.useState(!1);
            a.useEffect(() => {
                if (!t) return;
                let l = !0;
                return (
                    (async function () {
                        try {
                            let t = await (0, h.vk)(e);
                            l && n(t);
                        } catch {}
                    })(),
                    () => {
                        l = !1;
                    }
                );
            }, [e, t]);
            let u = (0, i.cf)(
                    [x.Ay],
                    () =>
                        Object.fromEntries(
                            l.map((e) => {
                                let { project_id: t } = e;
                                return [t, x.Ay.getProject(t)];
                            }),
                        ),
                    [l],
                ),
                c = a.useMemo(
                    () =>
                        Object.fromEntries(
                            l.map((e) => {
                                let { project_id: t } = e;
                                return [
                                    t,
                                    u[t]?.name ?? b.intl.formatToPlainString(j.default.HHCa93, { projectId: t }),
                                ];
                            }),
                        ),
                    [l, u],
                );
            return {
                callers: l,
                projects: u,
                names: c,
                failed: r,
                setBuild: a.useCallback(
                    async (t, l) => {
                        s(!1);
                        try {
                            await (0, h.Ol)(e, t, l);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.map((e) => (e.project_id === t ? { ...e, build: l } : e)));
                    },
                    [e],
                ),
                remove: a.useCallback(
                    async (t) => {
                        s(!1);
                        try {
                            await (0, h.pc)(e, t);
                        } catch {
                            s(!0);
                            return;
                        }
                        n((e) => e.filter((e) => e.project_id !== t));
                    },
                    [e],
                ),
            };
        })(t, z),
        [Z, O] = a.useState(null);
    return (0, n.jsx)(G.A, {
        projectId: t,
        scopeKeys: S,
        note: k,
        notifyAgent: y,
        isPreview: E,
        children: (e) => {
            let l = [];
            ((B || z) && l.push("project"),
                e.loaded && (e.valueCount > 0 || 0 === e.secretCount) && l.push("app"),
                e.secretCount > 0 && l.push("secrets"),
                T?.tierSettings != null && l.push("model"),
                U.callers.length > 0 && l.push("linked"),
                B && l.push("experimental"));
            let a = [Z, C].find((e) => null != e && l.includes(e)) ?? l[0],
                i = e.isScoped,
                g = (B && D.saving) || e.saving,
                h = e.canSave || (!i && B && D.canSave);
            async function v(n) {
                if ((n.preventDefault(), !h || g)) return;
                let s = !i && B && D.nameChanged,
                    [u, c] = await Promise.all([i || !B ? null : D.submit(), e.submit()]);
                if (null == u && c) {
                    let e;
                    (await P(),
                        s &&
                            null != I &&
                            null != (e = x.Ay.getProject(t)) &&
                            (0, L.qF)(e) &&
                            (M.A.getPublishStatus(t)?.state ?? "unpublished") !== "unpublished" &&
                            (0, r.A)({
                                title: b.intl.string(j.default["48pvCR"]),
                                subtitle: b.intl.string(j.default["Xk+JsJ"]),
                                confirmText: b.intl.string(j.default.guoHDk),
                                cancelText: b.intl.string(j.default.HSyPrY),
                                variant: "primary",
                                onConfirm: () => {
                                    (0, L.FZ)(t, "name_prompt", I).catch(() => {});
                                },
                            }));
                    return;
                }
                null != u ? O(u) : "secrets" !== a && O(l.includes("app") ? "app" : "secrets");
            }
            let S = b.intl.string(i ? j.default["jZjP+I"] : j.default.I2XSKe);
            return (0, n.jsx)("form", {
                onSubmit: v,
                children: (0, n.jsxs)(s.d, {
                    transitionState: A,
                    onClose: P,
                    "aria-label": S,
                    size: "lg",
                    children: [
                        (0, n.jsx)(u.rQ, { title: S }),
                        (0, n.jsxs)(c.c, {
                            controls:
                                i || l.length < 2
                                    ? void 0
                                    : (0, n.jsx)(d.V, {
                                          selectedItem: a,
                                          type: "top",
                                          onItemSelect: (e) => O(e),
                                          "aria-label": b.intl.string(j.default["2dtUiI"]),
                                          children: l.map((e) =>
                                              (0, n.jsx)(d.V.Item, { id: e, children: b.intl.string(ec[e]) }, e),
                                          ),
                                      }),
                            children: [
                                i || "app" === a ? e.fields : null,
                                i || "project" !== a
                                    ? null
                                    : (0, n.jsxs)(o.B, {
                                          gap: 24,
                                          className: eu.f,
                                          children: [
                                              B ? D.fields : null,
                                              (0, n.jsx)(V, { projectId: t, canEdit: z }, t),
                                          ],
                                      }),
                                i || "linked" !== a ? null : (0, n.jsx)(N, { linkedApps: U }),
                                i || "experimental" !== a ? null : D.experimentalFields,
                                i || "secrets" !== a ? null : e.secretFields,
                                i || "model" !== a || T?.tierSettings == null
                                    ? null
                                    : (0, n.jsx)(eo, { projectId: t, modelSettings: T, tierSettings: T.tierSettings }),
                                i || null != a
                                    ? null
                                    : R
                                      ? (0, n.jsx)(f.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: b.intl.string(j.default.lJJayk),
                                        })
                                      : (0, n.jsx)("div", { className: eu.L, children: (0, n.jsx)(m.y, {}) }),
                            ],
                        }),
                        (0, n.jsx)(p.H, {
                            actionsFullWidth: !0,
                            actions: [
                                { text: b.intl.string(b.t["ETE/oC"]), variant: "secondary", onClick: P, disabled: g },
                                {
                                    text: b.intl.string(i ? j.default.A7dQd9 : b.t["R3BPH+"]),
                                    variant: "primary",
                                    type: "submit",
                                    loading: g,
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
function eo(e) {
    let { projectId: t, modelSettings: l, tierSettings: r } = e,
        s = (0, i.bG)([g.default], () => "open" === g.default.getConnState(t), [t]),
        u = a.useCallback((e) => (0, B.X)(t, e), [t]),
        [c, d] = (0, z.A)(r, u);
    return (0, n.jsx)(D.A, { settings: c, tiers: l.tiers, choices: l.choices, disabled: !s, onChange: d });
}
