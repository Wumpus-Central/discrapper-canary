l.r(t), l.d(t, { default: () => er });
var i,
    n = l(477900),
    a = l(582128),
    s = l(503698),
    r = l.n(s),
    d = l(989349),
    c = l.n(d),
    o = l(17928),
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
    k = l(948230),
    A = l(148555),
    I = l(683180),
    S = l(783791),
    w = l(998939),
    V = l(972786),
    _ = l(20386),
    R = l(321210),
    T = l(922016),
    P = l(980707),
    D = l(477782),
    z = l(408278),
    O = l(365199),
    B = l(314116),
    H = l(818085),
    K = l(375708),
    M = l(192308);
function F(e) {
    let { projectId: t, projectName: i } = e,
        s = a.useRef(null);
    return (0, n.jsx)(T.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: T.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)(P.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${t}`,
                "aria-label": K.intl.string(K.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: (0, n.jsxs)(D.rX, {
                    children: [
                        (0, n.jsx)(D.Dr, {
                            id: "rename",
                            label: K.intl.string(H.default.fHTQgk),
                            action: () => {
                                (0, M.openModalLazy)(async () => {
                                    let { default: e } = await l.e("53463").then(l.bind(l, 809898));
                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                });
                            },
                        }),
                        (0, n.jsx)(D.Dr, {
                            id: "delete",
                            label: K.intl.string(K.t.oyYWHE),
                            color: "danger",
                            action: () => {
                                (0, B.A)({
                                    title: K.intl.formatToPlainString(H.default.ZokHVz, { name: i }),
                                    subtitle: K.intl.string(H.default.NmF939),
                                    confirmText: K.intl.string(K.t.oyYWHE),
                                    variant: "critical",
                                    onConfirm: async () => {
                                        if (!(await (0, k.xx)(t)).ok) throw Error(K.intl.string(H.default.tqKZCi));
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
            return (0, n.jsx)(z.K, {
                ...e,
                buttonRef: s,
                icon: O.j,
                size: "sm",
                variant: "icon-only",
                "aria-label": K.intl.string(K.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var X = l(742589),
    G = l(833576);
function L(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(X.A, {
        hideSearch: !0,
        toolbar: l,
        className: G.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: G.QF,
            children: [
                (0, n.jsx)(b.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: E.A.colors.TEXT_STRONG,
                    className: G.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(X.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(X.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(X.A.Title, { className: G.Qw, wrapperClassName: G.DD, children: t }),
            ],
        }),
    });
}
var Y = l(189213),
    W = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function U(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(Y.Modal, {
        transitionState: l,
        onClose: i,
        title: K.intl.string(a ? H.default.Rtlv25 : H.default["+UouPe"]),
        subtitle: K.intl.string(a ? H.default["nDQB/b"] : H.default["E0QD++"]),
        size: "sm",
        actions: [{ text: K.intl.string(a ? K.t.BddRzS : H.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function $(e) {
    (0, M.openModal)((t) => (0, n.jsx)(U, { ...t, reason: e }));
}
var Q = l(224640),
    q = l(815021),
    J = l(652215),
    Z = l(283382),
    ee = l(264997);
function et(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        d = K.intl.string(H.default.yzxKsU),
        c = K.intl.formatToPlainString(H.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let e = (0, I.SH)(l, t);
            (0, y.pX)(null == e ? J.BVt.CHANNEL(l) : J.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(Q.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: Z.zr,
            children: [
                (0, n.jsx)("div", { className: Z.b, children: (0, n.jsx)(q.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: Z.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: Z.bm,
                            children: (0, n.jsx)("img", { className: Z.yW, src: ee, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: Z.R_,
                            children: [
                                (0, n.jsx)(p.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, n.jsx)(m.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, n.jsxs)("div", {
                    className: Z.o1,
                    children: [
                        (0, n.jsx)(g.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: K.intl.string(K.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(g.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: K.intl.string(K.t.jVcuVY),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var el = l(746080),
    ei = l(401029);
function en(e) {
    let { project: t, onSelect: l } = e,
        i = (0, o.bG)([S.A], () => S.A.isThinking(t.id), [t.id]),
        a =
            null == t.updated_at
                ? null
                : K.intl.formatToPlainString(H.default.oMDaqr, { time: c()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: ei.OY,
        children: [
            (0, n.jsx)(u.D, {
                className: ei.W6,
                onClick: l,
                children: (0, n.jsxs)("div", {
                    className: ei.MM,
                    children: [
                        (0, n.jsx)(m.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: ei.j1,
                            children: t.name,
                        }),
                        (0, n.jsxs)("div", {
                            className: ei.h3,
                            children: [
                                (0, n.jsx)(m.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: K.intl.string(H.default.sPSPIs),
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
                className: ei.M2,
                children: [
                    i ? (0, n.jsx)(_.Ty, { className: ei.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: ei.Pl,
                        children: (0, n.jsx)(F, { projectId: t.id, projectName: t.name }),
                    }),
                ],
            }),
        ],
    });
}
function ea(e) {
    let { project: t, projectsLoaded: l, onBack: i, guildId: s } = e,
        [r, d] = a.useState(!1),
        [c, u] = a.useState(null),
        f = t?.id ?? null,
        v = a.useRef(f),
        N = a.useRef(null);
    v.current = f;
    let b = (0, o.bG)([V.A], () => (null == f ? null : V.A.getIntegrationStatus(f)), [f]),
        { data: E, isLoading: I } = (0, C.YY)(t?.preview_application_id ?? void 0),
        S = null != f && c !== f,
        w = null != b && (!b.integration_installed || b.bot_permissions_changed),
        _ = r || S || I,
        T = a.useCallback(async () => {
            if (null == f || v.current !== f) return;
            N.current?.abort();
            let e = new AbortController();
            (N.current = e), u(null);
            try {
                await (0, k.U1)(f, e.signal);
            } catch {
            } finally {
                e.signal.aborted || N.current !== e || v.current !== f || u(f);
            }
        }, [f]);
    a.useEffect(
        () => (
            T(),
            () => {
                N.current?.abort(), (N.current = null);
            }
        ),
        [T],
    );
    let P = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                A.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: E ?? null,
                    guildId: t.preview_guild_id ?? s,
                    onClose: () => void T(),
                });
        }, [s, E, t, T]),
        D = w ? { type: "permissions", onReviewPermissions: P, loading: I || S } : S ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == t && l && (0, y.pX)(J.BVt.CHANNEL(s, el.VV.VIBEGRATIONS));
    }, [s, t, l]);
    let z = a.useCallback(async () => {
        if (null != t) {
            if (w) return void $(W.PERMISSIONS);
            if (b?.preview_ready !== !0) return void $(W.NO_PREVIEW);
            d(!0);
            try {
                var e;
                let l = await (0, k.TV)(t.id);
                if (!l.ok) throw Error(K.intl.string(H.default.fNP6Cd));
                (e = { applicationId: l.body.application.id, guildId: s, projectName: l.body.project.name }),
                    (0, M.openModal)((t) => (0, n.jsx)(et, { ...t, ...e }));
            } catch (e) {
                (0, x.P0)((0, j.o)(e instanceof Error ? e.message : K.intl.string(H.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, b?.preview_ready, w, t]);
    return (0, n.jsxs)("div", {
        className: ei.nj,
        children: [
            (0, n.jsx)(L, {
                title: t?.name ?? K.intl.string(H.default.F2dRba),
                breadcrumb: { title: K.intl.string(H.default.Xmvb23), onClick: i },
                actions:
                    null == t
                        ? null
                        : (0, n.jsxs)("div", {
                              className: ei.wO,
                              children: [
                                  (0, n.jsx)(F, { projectId: t.id, projectName: t.name }),
                                  (0, n.jsx)(g.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: K.intl.string(H.default["5gU57O"]),
                                      loading: r,
                                      disabled: _,
                                      onClick: z,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsx)("main", {
                className: ei.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: ei.sD,
                              children: [
                                  (0, n.jsx)(p.D, {
                                      variant: "heading-lg/semibold",
                                      children: K.intl.string(H.default.F2dRba),
                                  }),
                                  (0, n.jsx)(m.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: K.intl.string(H.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(g.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: K.intl.string(H.default["42EdIV"]),
                                      onClick: k.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              R.A,
                              {
                                  projectId: t.id,
                                  appId: t.preview_application_id,
                                  chatOpen: !0,
                                  previewReady: b?.preview_ready ?? !1,
                                  previewGate: D,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function es(e) {
    let {
            projects: t,
            fetchState: l,
            idea: i,
            guildId: s,
            submitting: d,
            createError: c,
            createDisabled: o,
            onSelectProject: x,
            onIdeaChange: j,
            onCreate: h,
        } = e,
        C = a.useMemo(
            () =>
                t
                    .filter((e) => (0, I.X0)(e, s))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, s],
        ),
        y = K.intl.string(H.default.TU9IGR),
        A = [
            K.intl.string(H.default["E+Q26x"]),
            K.intl.string(H.default["06/jqP"]),
            K.intl.string(H.default["7MCiK9"]),
        ],
        S = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || h());
            },
            [o, h],
        );
    return (0, n.jsxs)("div", {
        className: r()(ei.nj, ei.a0),
        children: [
            (0, n.jsx)(L, { title: K.intl.string(H.default.Xmvb23) }),
            (0, n.jsx)(f.Ip, {
                children: (0, n.jsx)("main", {
                    className: ei.rf,
                    children: (0, n.jsxs)("div", {
                        className: ei.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: ei.Ix,
                                children: [
                                    (0, n.jsx)(p.D, {
                                        variant: "heading-xl/semibold",
                                        children: K.intl.string(H.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: ei.Aw,
                                        children: A.map((e) =>
                                            (0, n.jsx)(
                                                u.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: ei.nx,
                                                    onClick: d ? void 0 : () => h(e),
                                                    children: (0, n.jsx)(m.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: ei.un,
                                                        children: e,
                                                    }),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: ei.DA,
                                        children: [
                                            (0, n.jsx)(v.f, {
                                                label: y,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: y,
                                                error: c,
                                                onChange: j,
                                                onKeyDown: S,
                                            }),
                                            (0, n.jsx)("div", {
                                                className: ei.VP,
                                                children: (0, n.jsx)(g.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: K.intl.string(K.t.CumH4u),
                                                    disabled: o,
                                                    loading: d,
                                                    onClick: () => h(),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, n.jsxs)("section", {
                                className: ei.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ei.RM,
                                        children: [
                                            (0, n.jsx)(m.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: K.intl.string(H.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(m.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: K.intl.string(H.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === C.length
                                        ? (0, n.jsx)("div", { className: ei.E8, children: (0, n.jsx)(N.y, {}) })
                                        : l?.type === "error" && 0 === C.length
                                          ? (0, n.jsxs)("div", {
                                                className: ei.E8,
                                                children: [
                                                    (0, n.jsx)(m.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: K.intl.string(H.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(g.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: K.intl.string(H.default["42EdIV"]),
                                                        onClick: k.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === C.length
                                            ? (0, n.jsx)("div", {
                                                  className: ei.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: ei.ST,
                                                      children: [
                                                          (0, n.jsx)(b.D, {
                                                              size: "lg",
                                                              color: E.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(m.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: ei.sI,
                                                              children: K.intl.string(H.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : C.map((e) =>
                                                  (0, n.jsx)(en, { project: e, onSelect: () => x(e.id) }, e.id),
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
function er(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, o.yK)([V.A], () => V.A.getAllProjects()),
        s = (0, o.bG)([V.A], () => V.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        c = l ?? null,
        [u, m] = a.useState(!1),
        [x, j] = a.useState(null),
        h = r.trim();
    a.useEffect(() => {
        (0, k.hF)();
    }, []),
        a.useEffect(() => {
            (0, k.dm)(t, c);
        }, [t, c]);
    let g = a.useCallback(
            async (e) => {
                let l = (e ?? r).trim();
                if ("" !== l) {
                    null != e && d(e), m(!0), j(null);
                    try {
                        let e = await (0, k.gA)({ guild_id: t });
                        (0, w.Hc)(e), (0, w.dv)(e, l), (0, y.pX)(J.BVt.CHANNEL(t, el.VV.VIBEGRATIONS, e)), d("");
                    } catch (e) {
                        j(e instanceof Error ? e.message : K.intl.string(H.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [t, r],
        ),
        p = a.useCallback(
            (e) => {
                (0, y.pX)(J.BVt.CHANNEL(t, el.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        f = a.useCallback(() => {
            (0, y.pX)(J.BVt.CHANNEL(t, el.VV.VIBEGRATIONS));
        }, [t]),
        v = a.useCallback((e) => {
            d(e), j(null);
        }, []),
        N = null == c ? null : (i.find((e) => e.id === c) ?? null);
    return null != c
        ? (0, n.jsx)(ea, { project: N, projectsLoaded: s?.type === "success", onBack: f, guildId: t })
        : (0, n.jsx)(es, {
              projects: i,
              fetchState: s,
              idea: r,
              guildId: t,
              submitting: u,
              createError: x,
              createDisabled: "" === h || u,
              onSelectProject: p,
              onIdeaChange: v,
              onCreate: g,
          });
}
