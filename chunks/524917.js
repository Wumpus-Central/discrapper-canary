l.r(e), l.d(e, { default: () => td });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    d = l(989349),
    o = l.n(d),
    c = l(17928),
    u = l(939249),
    m = l(834730),
    x = l(691540),
    j = l(857250),
    h = l(97483),
    g = l(821609),
    p = l(297264),
    f = l(364522),
    v = l(260598),
    N = l(289873),
    b = l(152367),
    E = l(661531),
    C = l(627363),
    y = l(976860),
    I = l(948230),
    S = l(148555),
    A = l(683180),
    k = l(783791),
    V = l(998939),
    _ = l(972786),
    w = l(20386),
    R = l(321210),
    P = l(922016),
    T = l(980707),
    z = l(477782),
    D = l(408278),
    B = l(365199),
    O = l(314116),
    H = l(818085),
    M = l(375708),
    X = l(192308);
function G(t) {
    let { projectId: e, projectName: i } = t,
        s = a.useRef(null);
    return (0, n.jsx)(P.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: P.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, n.jsx)(T.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${e}`,
                "aria-label": M.intl.string(M.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: (0, n.jsxs)(z.rX, {
                    children: [
                        (0, n.jsx)(z.Dr, {
                            id: "rename",
                            label: M.intl.string(H.default.fHTQgk),
                            action: () => {
                                (0, X.openModalLazy)(async () => {
                                    let { default: t } = await l.e("53463").then(l.bind(l, 809898));
                                    return (l) => (0, n.jsx)(t, { ...l, projectId: e });
                                });
                            },
                        }),
                        (0, n.jsx)(z.Dr, {
                            id: "delete",
                            label: M.intl.string(M.t.oyYWHE),
                            color: "danger",
                            action: () => {
                                (0, O.A)({
                                    title: M.intl.formatToPlainString(H.default.ZokHVz, { name: i }),
                                    subtitle: M.intl.string(H.default.NmF939),
                                    confirmText: M.intl.string(M.t.oyYWHE),
                                    variant: "critical",
                                    onConfirm: async () => {
                                        if (!(await (0, I.xx)(e)).ok) throw Error(M.intl.string(H.default.tqKZCi));
                                    },
                                });
                            },
                        }),
                    ],
                }),
            });
        },
        children: (t, e) => {
            let { isShown: l } = e;
            return (0, n.jsx)(D.K, {
                ...t,
                buttonRef: s,
                icon: B.j,
                size: "sm",
                variant: "icon-only",
                "aria-label": M.intl.string(M.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var K = l(477155),
    L = l(742589),
    F = l(833576);
function Y(t) {
    let { title: e, actions: l, onBack: i } = t;
    return (0, n.jsxs)(L.A, {
        hideSearch: !0,
        toolbar: l,
        className: F.w,
        "aria-label": e,
        children: [
            null == i
                ? (0, n.jsx)(b.D, { size: "custom", width: 20, height: 20, color: E.A.colors.TEXT_STRONG })
                : (0, n.jsx)(D.K, {
                      "aria-label": M.intl.string(M.t["13/7kX"]),
                      icon: K.r,
                      variant: "icon-only",
                      size: "sm",
                      onClick: i,
                  }),
            (0, n.jsx)(m.E, { variant: "text-md/semibold", color: "text-default", className: F.D, children: e }),
        ],
    });
}
var W = l(189213),
    U = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function $(t) {
    let { reason: e, transitionState: l, onClose: i } = t,
        a = "permissions" === e;
    return (0, n.jsx)(W.Modal, {
        transitionState: l,
        onClose: i,
        title: M.intl.string(a ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: M.intl.string(a ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: M.intl.string(a ? M.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function q(t) {
    (0, X.openModal)((e) => (0, n.jsx)($, { ...e, reason: t }));
}
var Q = l(224640),
    J = l(815021),
    Z = l(652215),
    tt = l(283382),
    te = l(264997);
function tl(t) {
    let { applicationId: e, guildId: l, projectName: i, transitionState: s, onClose: r } = t,
        d = M.intl.string(H.default.yzxKsU),
        o = M.intl.formatToPlainString(H.default.CC69wK, { projectName: i }),
        c = a.useCallback(() => {
            let t = (0, A.SH)(l, e);
            (0, y.pX)(null == t ? Z.BVt.CHANNEL(l) : Z.BVt.CHANNEL(l, t)), r();
        }, [e, l, r]);
    return (0, n.jsx)(Q.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: tt.zr,
            children: [
                (0, n.jsx)("div", { className: tt.b, children: (0, n.jsx)(J.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: tt.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: tt.bm,
                            children: (0, n.jsx)("img", { className: tt.yW, src: te, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: tt.R_,
                            children: [
                                (0, n.jsx)(p.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(m.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: o,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: tt.o1,
                    children: [
                        (0, n.jsx)(g.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: M.intl.string(M.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(g.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: M.intl.string(M.t.jVcuVY),
                            onClick: c,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var ti = l(746080),
    tn = l(401029);
function ta(t) {
    let { project: e, onSelect: l } = t,
        i = (0, c.bG)([k.A], () => k.A.isThinking(e.id), [e.id]),
        a =
            null == e.updated_at
                ? null
                : M.intl.formatToPlainString(H.default.oMDaqr, { time: o()(e.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: tn.OY,
        children: [
            (0, n.jsx)(u.D, {
                className: tn.W6,
                onClick: l,
                children: (0, n.jsxs)("div", {
                    className: tn.MM,
                    children: [
                        (0, n.jsx)(m.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: tn.j1,
                            children: e.name,
                        }),
                        (0, n.jsxs)("div", {
                            className: tn.h3,
                            children: [
                                (0, n.jsx)(m.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: M.intl.string(H.default.sPSPIs),
                                }),
                                null == a
                                    ? null
                                    : (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  "aria-hidden": "true",
                                                  children: "\xb7",
                                              }),
                                              (0, n.jsx)(m.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: a,
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, n.jsxs)("div", {
                className: tn.M2,
                children: [
                    i ? (0, n.jsx)(w.Ty, { className: tn.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: tn.Pl,
                        children: (0, n.jsx)(G, { projectId: e.id, projectName: e.name }),
                    }),
                ],
            }),
        ],
    });
}
function ts(t) {
    let { project: e, projectsLoaded: l, onBack: i, guildId: s } = t,
        [r, d] = a.useState(!1),
        [o, u] = a.useState(null),
        [f, v] = a.useState(e?.preview_application_id == null ? "no-app" : "launching"),
        N = e?.id ?? null,
        b = a.useRef(N),
        E = a.useRef(null);
    b.current = N;
    let A = (0, c.bG)([_.A], () => (null == N ? null : _.A.getIntegrationStatus(N)), [N]),
        { data: k, isLoading: V } = (0, C.YY)(e?.preview_application_id ?? void 0),
        w = null != N && o !== N,
        P = null != A && (!A.integration_installed || A.bot_permissions_changed),
        T = r || w || V,
        z = a.useCallback(async () => {
            if (null == N || b.current !== N) return;
            E.current?.abort();
            let t = new AbortController();
            (E.current = t), u(null);
            try {
                await (0, I.U1)(N, t.signal);
            } catch {
            } finally {
                t.signal.aborted || E.current !== t || b.current !== N || u(N);
            }
        }, [N]);
    a.useEffect(
        () => (
            z(),
            () => {
                E.current?.abort(), (E.current = null);
            }
        ),
        [z],
    );
    let D = a.useCallback(() => {
            let t = e?.preview_application_id;
            null != e &&
                null != t &&
                S.A.openVibegrationsAppInstallModal({
                    applicationId: t,
                    application: k ?? null,
                    guildId: e.preview_guild_id ?? s,
                    onClose: () => void z(),
                });
        }, [s, k, e, z]),
        B = P ? { type: "permissions", onReviewPermissions: D, loading: V || w } : w ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == e && l && (0, y.pX)(Z.BVt.CHANNEL(s, ti.VV.VIBEGRATIONS));
    }, [s, e, l]);
    let O = a.useCallback(async () => {
        if (null != e) {
            if (P) return void q(U.PERMISSIONS);
            if ("no-app" === f) return void q(U.NO_PREVIEW);
            d(!0);
            try {
                var t;
                let l = await (0, I.TV)(e.id);
                if (!l.ok) throw Error(M.intl.string(H.default.fNP6Cd));
                (t = { applicationId: l.body.application.id, guildId: s, projectName: l.body.project.name }),
                    (0, X.openModal)((e) => (0, n.jsx)(tl, { ...e, ...t }));
            } catch (t) {
                (0, x.P0)((0, j.o)(t instanceof Error ? t.message : M.intl.string(H.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [f, s, P, e]);
    return (0, n.jsxs)("div", {
        className: tn.nj,
        children: [
            (0, n.jsx)(Y, {
                title: e?.name ?? M.intl.string(H.default.F2dRba),
                actions:
                    null == e
                        ? null
                        : (0, n.jsxs)("div", {
                              className: tn.wO,
                              children: [
                                  (0, n.jsx)(G, { projectId: e.id, projectName: e.name }),
                                  (0, n.jsx)(g.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: M.intl.string(H.default["5gU57O"]),
                                      loading: r,
                                      disabled: T,
                                      onClick: O,
                                  }),
                              ],
                          }),
                onBack: i,
            }),
            (0, n.jsx)("main", {
                className: tn.JX,
                children:
                    null == e
                        ? (0, n.jsxs)("div", {
                              className: tn.sD,
                              children: [
                                  (0, n.jsx)(p.D, {
                                      variant: "heading-lg/semibold",
                                      children: M.intl.string(H.default.F2dRba),
                                  }),
                                  (0, n.jsx)(m.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: M.intl.string(H.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(g.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: M.intl.string(H.default["42EdIV"]),
                                      onClick: I.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              R.A,
                              {
                                  projectId: e.id,
                                  appId: e.preview_application_id,
                                  chatOpen: !0,
                                  onActivityStatusChange: v,
                                  previewGate: B,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function tr(t) {
    let {
            projects: e,
            fetchState: l,
            idea: i,
            guildId: s,
            submitting: d,
            createError: o,
            createDisabled: c,
            onSelectProject: x,
            onIdeaChange: j,
            onCreate: h,
        } = t,
        C = a.useMemo(
            () =>
                e
                    .filter((t) => (0, A.X0)(t, s))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, s],
        ),
        y = M.intl.string(H.default.TU9IGR),
        S = [
            M.intl.string(H.default["E+Q26x"]),
            M.intl.string(H.default["06/jqP"]),
            M.intl.string(H.default["7MCiK9"]),
        ];
    return (0, n.jsxs)("div", {
        className: r()(tn.nj, tn.a0),
        children: [
            (0, n.jsx)(Y, { title: M.intl.string(H.default.Xmvb23) }),
            (0, n.jsx)(f.Ip, {
                children: (0, n.jsx)("main", {
                    className: tn.rf,
                    children: (0, n.jsxs)("div", {
                        className: tn.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: tn.Ix,
                                children: [
                                    (0, n.jsx)(p.D, {
                                        variant: "heading-xl/semibold",
                                        children: M.intl.string(H.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: tn.Aw,
                                        children: S.map((t) =>
                                            (0, n.jsx)(
                                                u.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: tn.nx,
                                                    onClick: d ? void 0 : () => h(t),
                                                    children: (0, n.jsx)(m.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: tn.un,
                                                        children: t,
                                                    }),
                                                },
                                                t,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: tn.DA,
                                        children: [
                                            (0, n.jsx)(v.f, {
                                                label: y,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: y,
                                                error: o,
                                                onChange: j,
                                            }),
                                            (0, n.jsx)("div", {
                                                className: tn.VP,
                                                children: (0, n.jsx)(g.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: M.intl.string(M.t.CumH4u),
                                                    disabled: c,
                                                    loading: d,
                                                    onClick: () => h(),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("section", {
                                className: tn.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: tn.RM,
                                        children: [
                                            (0, n.jsx)(m.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: M.intl.string(H.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(m.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: M.intl.string(H.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === C.length
                                        ? (0, n.jsx)("div", { className: tn.E8, children: (0, n.jsx)(N.y, {}) })
                                        : l?.type === "error" && 0 === C.length
                                          ? (0, n.jsxs)("div", {
                                                className: tn.E8,
                                                children: [
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: M.intl.string(H.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(g.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: M.intl.string(H.default["42EdIV"]),
                                                        onClick: I.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === C.length
                                            ? (0, n.jsx)("div", {
                                                  className: tn.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: tn.ST,
                                                      children: [
                                                          (0, n.jsx)(b.D, {
                                                              size: "lg",
                                                              color: E.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(m.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: tn.sI,
                                                              children: M.intl.string(H.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : C.map((t) =>
                                                  (0, n.jsx)(ta, { project: t, onSelect: () => x(t.id) }, t.id),
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
function td(t) {
    let { guildId: e, projectId: l } = t,
        i = (0, c.yK)([_.A], () => _.A.getAllProjects()),
        s = (0, c.bG)([_.A], () => _.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        o = l ?? null,
        [u, m] = a.useState(!1),
        [x, j] = a.useState(null),
        h = r.trim();
    a.useEffect(() => {
        (0, I.hF)();
    }, []),
        a.useEffect(() => {
            (0, I.dm)(e, o);
        }, [e, o]);
    let g = a.useCallback(
            async (t) => {
                let l = (t ?? r).trim();
                if ("" !== l) {
                    null != t && d(t), m(!0), j(null);
                    try {
                        let t = await (0, I.gA)({ guild_id: e });
                        (0, V.Hc)(t), (0, V.dv)(t, l), (0, y.pX)(Z.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, t)), d("");
                    } catch (t) {
                        j(t instanceof Error ? t.message : M.intl.string(H.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [e, r],
        ),
        p = a.useCallback(
            (t) => {
                (0, y.pX)(Z.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        f = a.useCallback(() => {
            (0, y.pX)(Z.BVt.CHANNEL(e, ti.VV.VIBEGRATIONS));
        }, [e]),
        v = a.useCallback((t) => {
            d(t), j(null);
        }, []),
        N = null == o ? null : (i.find((t) => t.id === o) ?? null);
    return null != o
        ? (0, n.jsx)(ts, { project: N, projectsLoaded: s?.type === "success", onBack: f, guildId: e })
        : (0, n.jsx)(tr, {
              projects: i,
              fetchState: s,
              idea: r,
              guildId: e,
              submitting: u,
              createError: x,
              createDisabled: "" === h || u,
              onSelectProject: p,
              onIdeaChange: v,
              onCreate: g,
          });
}
