l.r(t), l.d(t, { default: () => eg });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    d = l(989349),
    c = l.n(d),
    o = l(17928),
    u = l(534890),
    m = l(939249),
    x = l(834730),
    g = l(691540),
    j = l(857250),
    h = l(97483),
    p = l(866665),
    f = l(408278),
    v = l(821609),
    N = l(297264),
    b = l(364522),
    C = l(260598),
    E = l(289873),
    k = l(152367),
    y = l(661531),
    S = l(627363),
    A = l(976860),
    w = l(673724),
    I = l(948230),
    _ = l(148555),
    V = l(683180),
    R = l(208137),
    T = l(783791),
    z = l(998939),
    D = l(972786),
    P = l(20386),
    O = l(750896),
    M = l(379307),
    B = l(922016),
    F = l(980707),
    H = l(477782),
    K = l(365199),
    X = l(314116),
    G = l(818085),
    L = l(375708),
    Y = l(192308);
function W(e) {
    let { projectId: t, projectName: i } = e,
        s = a.useRef(null);
    return (0, n.jsx)(B.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: B.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)(F.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${t}`,
                "aria-label": L.intl.string(L.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: (0, n.jsxs)(H.rX, {
                    children: [
                        (0, n.jsx)(H.Dr, {
                            id: "rename",
                            label: L.intl.string(G.default.fHTQgk),
                            action: () => {
                                (0, Y.openModalLazy)(async () => {
                                    let { default: e } = await l.e("53463").then(l.bind(l, 809898));
                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                });
                            },
                        }),
                        (0, n.jsx)(H.Dr, {
                            id: "delete",
                            label: L.intl.string(L.t.oyYWHE),
                            color: "danger",
                            action: () => {
                                (0, X.A)({
                                    title: L.intl.formatToPlainString(G.default.ZokHVz, { name: i }),
                                    subtitle: L.intl.string(G.default.NmF939),
                                    confirmText: L.intl.string(L.t.oyYWHE),
                                    variant: "critical",
                                    onConfirm: async () => {
                                        if (!(await (0, I.xx)(t)).ok) throw Error(L.intl.string(G.default.tqKZCi));
                                    },
                                });
                            },
                        }),
                    ],
                }),
            });
        },
        children: (e, t) => {
            let { isShown: l } = t;
            return (0, n.jsx)(f.K, {
                ...e,
                buttonRef: s,
                icon: K.j,
                size: "sm",
                variant: "icon-only",
                "aria-label": L.intl.string(L.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var U = l(742589),
    $ = l(833576);
function Q(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(U.A, {
        hideSearch: !0,
        toolbar: l,
        className: $.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: $.QF,
            children: [
                (0, n.jsx)(k.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: y.A.colors.TEXT_STRONG,
                    className: $.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(U.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(U.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(U.A.Title, { className: $.Qw, wrapperClassName: $.DD, children: t }),
            ],
        }),
    });
}
var q = l(189213),
    J = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function Z(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(q.Modal, {
        transitionState: l,
        onClose: i,
        title: L.intl.string(a ? G.default.Rtlv25 : G.default["+UouPe"]),
        subtitle: L.intl.string(a ? G.default["nDQB/b"] : G.default["E0QD++"]),
        size: "sm",
        actions: [{ text: L.intl.string(a ? L.t.BddRzS : G.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function ee(e) {
    (0, Y.openModal)((t) => (0, n.jsx)(Z, { ...t, reason: e }));
}
var et = l(224640),
    el = l(815021),
    ei = l(652215),
    en = l(283382),
    ea = l(264997);
function es(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        d = L.intl.string(G.default.yzxKsU),
        c = L.intl.formatToPlainString(G.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let e = (0, V.SH)(l, t);
            (0, A.pX)(null == e ? ei.BVt.CHANNEL(l) : ei.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(et.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: en.zr,
            children: [
                (0, n.jsx)("div", { className: en.b, children: (0, n.jsx)(el.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: en.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: en.bm,
                            children: (0, n.jsx)("img", { className: en.yW, src: ea, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: en.R_,
                            children: [
                                (0, n.jsx)(N.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(x.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: en.o1,
                    children: [
                        (0, n.jsx)(v.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: L.intl.string(L.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(v.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: L.intl.string(L.t.jVcuVY),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var er = l(746080),
    ed = l(165610),
    ec = l(401029);
function eo(e) {
    return (0, n.jsx)(u.o, { ...e, size: "custom", width: 20, height: 20 });
}
function eu(e) {
    let { project: t, onSelect: l } = e,
        i = (0, o.bG)([T.A], () => T.A.isThinking(t.id), [t.id]),
        a =
            null == t.updated_at
                ? null
                : L.intl.formatToPlainString(G.default.oMDaqr, { time: c()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: ec.OY,
        children: [
            (0, n.jsx)(m.D, {
                className: ec.W6,
                onClick: l,
                children: (0, n.jsxs)("div", {
                    className: ec.MM,
                    children: [
                        (0, n.jsx)(x.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: ec.j1,
                            children: t.name,
                        }),
                        null == a
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ec.h3,
                                  children: (0, n.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: a,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: ec.M2,
                children: [
                    i ? (0, n.jsx)(P.Ty, { className: ec.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: ec.Pl,
                        children: (0, n.jsx)(W, { projectId: t.id, projectName: t.name }),
                    }),
                ],
            }),
        ],
    });
}
function em(e) {
    let { project: t, projectsLoaded: l, onBack: i, guildId: s } = e,
        [r, d] = a.useState(!1),
        [c, u] = a.useState(!0),
        [m, b] = a.useState(null),
        C = t?.id ?? null,
        E = a.useRef(C),
        k = a.useRef(null);
    E.current = C;
    let y = (0, o.bG)([D.A], () => (null == C ? null : D.A.getIntegrationStatus(C)), [C]),
        { data: w, isLoading: V } = (0, S.YY)(t?.preview_application_id ?? void 0),
        R = null != C && m !== C,
        T = y?.preview_ready === !0,
        z = T && null != y && (!y.integration_installed || y.bot_permissions_changed),
        P = r || R || V,
        M = L.intl.string(c ? G.default.YdgE0j : G.default.aWVf4j),
        B = a.useCallback(() => u((e) => !e), []),
        F = a.useCallback(async () => {
            if (null == C || E.current !== C) return;
            k.current?.abort();
            let e = new AbortController();
            (k.current = e), b(null);
            try {
                await (0, I.U1)(C, e.signal);
            } catch {
            } finally {
                e.signal.aborted || k.current !== e || E.current !== C || b(C);
            }
        }, [C]);
    a.useEffect(
        () => (
            F(),
            () => {
                k.current?.abort(), (k.current = null);
            }
        ),
        [F],
    );
    let H = y?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : s,
        K = a.useCallback(async () => {
            null == t ||
                (t.guild_id === H && t.preview_guild_id === H) ||
                (await (0, I.M7)(t.id, { guild_id: H, preview_guild_id: H }));
        }, [H, t]),
        X = a.useCallback(async () => {
            try {
                await K();
            } catch {}
            await F();
        }, [F, K]),
        U = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                _.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: w ?? null,
                    guildId: H,
                    onClose: () => {
                        X();
                    },
                });
        }, [X, H, w, t]),
        $ = z ? { type: "permissions", onReviewPermissions: U, loading: V || R } : R ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == t && l && (0, A.pX)(ei.BVt.CHANNEL(s, er.VV.VIBEGRATIONS));
    }, [s, t, l]);
    let q = a.useCallback(async () => {
        if (null != t) {
            if (!T) return void ee(J.NO_PREVIEW);
            if (z) return void ee(J.PERMISSIONS);
            d(!0);
            try {
                var e;
                let l = await (0, I.TV)(t.id);
                if (!l.ok) throw Error(L.intl.string(G.default.fNP6Cd));
                (e = { applicationId: l.body.application.id, guildId: s, projectName: l.body.project.name }),
                    (0, Y.openModal)((t) => (0, n.jsx)(es, { ...t, ...e }));
            } catch (e) {
                (0, g.P0)((0, j.o)(e instanceof Error ? e.message : L.intl.string(G.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, z, T, t]);
    return (0, n.jsxs)("div", {
        className: ec.nj,
        children: [
            (0, n.jsx)(Q, {
                title: t?.name ?? L.intl.string(G.default.F2dRba),
                breadcrumb: { title: L.intl.string(G.default.Xmvb23), onClick: i },
                actions:
                    null == t
                        ? null
                        : (0, n.jsxs)("div", {
                              className: ec.wO,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: ec.FO,
                                      children: [
                                          (0, n.jsx)(W, { projectId: t.id, projectName: t.name }),
                                          (0, n.jsx)(p.m, {
                                              text: M,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(f.K, {
                                                  icon: eo,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": M,
                                                  "aria-pressed": c,
                                                  onClick: B,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(v.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: L.intl.string(G.default["5gU57O"]),
                                      loading: r,
                                      disabled: P,
                                      onClick: q,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsx)("main", {
                className: ec.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: ec.sD,
                              children: [
                                  (0, n.jsx)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: L.intl.string(G.default.F2dRba),
                                  }),
                                  (0, n.jsx)(x.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: L.intl.string(G.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: L.intl.string(G.default["42EdIV"]),
                                      onClick: I.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              O.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  surface: ed.sd,
                                  chatOpen: c,
                                  previewReady: T,
                                  previewGate: $,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function ex(e) {
    let {
            projects: t,
            fetchState: l,
            idea: i,
            guildId: s,
            submitting: d,
            createError: c,
            createDisabled: o,
            modelSettings: u,
            onModelSettingsChange: g,
            onSelectProject: j,
            onIdeaChange: h,
            onCreate: p,
        } = e,
        f = a.useMemo(
            () =>
                t
                    .filter((e) => (0, V.X0)(e, s))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, s],
        ),
        S = L.intl.string(G.default.TU9IGR),
        A = [
            L.intl.string(G.default["E+Q26x"]),
            L.intl.string(G.default["06/jqP"]),
            L.intl.string(G.default["7MCiK9"]),
        ],
        _ = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || p());
            },
            [o, p],
        );
    return (0, n.jsxs)("div", {
        className: r()(ec.nj, ec.a0),
        children: [
            (0, n.jsx)(Q, { title: L.intl.string(G.default.Xmvb23) }),
            (0, n.jsx)(b.Ip, {
                children: (0, n.jsx)("main", {
                    className: ec.rf,
                    children: (0, n.jsxs)("div", {
                        className: ec.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: ec.Ix,
                                children: [
                                    (0, n.jsx)(N.D, {
                                        variant: "heading-xl/semibold",
                                        children: L.intl.string(G.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: ec.Aw,
                                        children: A.map((e) =>
                                            (0, n.jsx)(
                                                m.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: ec.nx,
                                                    onClick: d ? void 0 : () => p(e),
                                                    children: (0, n.jsx)(x.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: ec.un,
                                                        children: e,
                                                    }),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: ec.DA,
                                        children: [
                                            (0, n.jsx)(C.f, {
                                                label: S,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: S,
                                                error: c,
                                                onChange: h,
                                                onKeyDown: _,
                                            }),
                                            (0, n.jsxs)("div", {
                                                className: ec.VP,
                                                children: [
                                                    (0, n.jsx)(M.A, {
                                                        settings: u ?? w.hk,
                                                        choices:
                                                            null == (0, R.V)()
                                                                ? w.S8
                                                                : {
                                                                      main: [...w.S8.main, ...w.wF.main],
                                                                      subagent: [...w.S8.subagent, ...w.wF.subagent],
                                                                      thinking: w.S8.thinking,
                                                                  },
                                                        disabled: d,
                                                        onChange: g,
                                                    }),
                                                    (0, n.jsx)(v.$, {
                                                        variant: "primary",
                                                        size: "md",
                                                        text: L.intl.string(L.t.CumH4u),
                                                        disabled: o,
                                                        loading: d,
                                                        onClick: () => p(),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("section", {
                                className: ec.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ec.RM,
                                        children: [
                                            (0, n.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: L.intl.string(G.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: L.intl.string(G.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === f.length
                                        ? (0, n.jsx)("div", { className: ec.E8, children: (0, n.jsx)(E.y, {}) })
                                        : l?.type === "error" && 0 === f.length
                                          ? (0, n.jsxs)("div", {
                                                className: ec.E8,
                                                children: [
                                                    (0, n.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: L.intl.string(G.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(v.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: L.intl.string(G.default["42EdIV"]),
                                                        onClick: I.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === f.length
                                            ? (0, n.jsx)("div", {
                                                  className: ec.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: ec.ST,
                                                      children: [
                                                          (0, n.jsx)(k.D, {
                                                              size: "lg",
                                                              color: y.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: ec.sI,
                                                              children: L.intl.string(G.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : f.map((e) =>
                                                  (0, n.jsx)(eu, { project: e, onSelect: () => j(e.id) }, e.id),
                                              ),
                                ],
                            }),
                        ],
                    }),
                }),
            }),
        ],
    });
}
function eg(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, o.yK)([D.A], () => D.A.getAllProjects()),
        s = (0, o.bG)([D.A], () => D.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        c = l ?? null,
        [u, m] = a.useState(!1),
        [x, g] = a.useState(null),
        [j, h] = a.useState(null),
        p = r.trim();
    a.useEffect(() => {
        (0, I.hF)();
    }, []),
        a.useEffect(() => {
            (0, I.dm)(t, c);
        }, [t, c]);
    let f = a.useCallback(
            async (e) => {
                let l = (e ?? r).trim();
                if ("" !== l) {
                    null != e && d(e), m(!0), g(null);
                    try {
                        let e = await (0, I.gA)({ guild_id: t });
                        (0, z.Hc)(e),
                            null != j && (0, z.r2)(e, j),
                            (0, z.dv)(e, l),
                            (0, A.pX)(ei.BVt.CHANNEL(t, er.VV.VIBEGRATIONS, e)),
                            d(""),
                            h(null);
                    } catch (e) {
                        g(e instanceof Error ? e.message : L.intl.string(G.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [t, r, j],
        ),
        v = a.useCallback(
            (e) => {
                (0, A.pX)(ei.BVt.CHANNEL(t, er.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        N = a.useCallback(() => {
            (0, A.pX)(ei.BVt.CHANNEL(t, er.VV.VIBEGRATIONS));
        }, [t]),
        b = a.useCallback((e) => {
            d(e), g(null);
        }, []),
        C = null == c ? null : (i.find((e) => e.id === c) ?? null);
    return null != c
        ? (0, n.jsx)(em, { project: C, projectsLoaded: s?.type === "success", onBack: N, guildId: t })
        : (0, n.jsx)(ex, {
              projects: i,
              fetchState: s,
              modelSettings: j,
              onModelSettingsChange: h,
              idea: r,
              guildId: t,
              submitting: u,
              createError: x,
              createDisabled: "" === p || u,
              onSelectProject: v,
              onIdeaChange: b,
              onCreate: f,
          });
}
