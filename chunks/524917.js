l.r(t), l.d(t, { default: () => eo });
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
    j = l(691540),
    h = l(857250),
    g = l(97483),
    p = l(866665),
    f = l(408278),
    v = l(821609),
    N = l(297264),
    b = l(364522),
    C = l(260598),
    E = l(289873),
    y = l(152367),
    k = l(661531),
    A = l(627363),
    I = l(976860),
    S = l(948230),
    w = l(148555),
    V = l(683180),
    R = l(783791),
    _ = l(998939),
    T = l(972786),
    z = l(20386),
    D = l(647562),
    P = l(922016),
    O = l(980707),
    B = l(477782),
    H = l(365199),
    K = l(314116),
    M = l(818085),
    F = l(375708),
    X = l(192308);
function G(e) {
    let { projectId: t, projectName: i } = e,
        s = a.useRef(null);
    return (0, n.jsx)(P.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: P.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, n.jsx)(O.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${t}`,
                "aria-label": F.intl.string(F.t.ogxXGq),
                onClose: a,
                onSelect: a,
                children: (0, n.jsxs)(B.rX, {
                    children: [
                        (0, n.jsx)(B.Dr, {
                            id: "rename",
                            label: F.intl.string(M.default.fHTQgk),
                            action: () => {
                                (0, X.openModalLazy)(async () => {
                                    let { default: e } = await l.e("53463").then(l.bind(l, 809898));
                                    return (l) => (0, n.jsx)(e, { ...l, projectId: t });
                                });
                            },
                        }),
                        (0, n.jsx)(B.Dr, {
                            id: "delete",
                            label: F.intl.string(F.t.oyYWHE),
                            color: "danger",
                            action: () => {
                                (0, K.A)({
                                    title: F.intl.formatToPlainString(M.default.ZokHVz, { name: i }),
                                    subtitle: F.intl.string(M.default.NmF939),
                                    confirmText: F.intl.string(F.t.oyYWHE),
                                    variant: "critical",
                                    onConfirm: async () => {
                                        if (!(await (0, S.xx)(t)).ok) throw Error(F.intl.string(M.default.tqKZCi));
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
                icon: H.j,
                size: "sm",
                variant: "icon-only",
                "aria-label": F.intl.string(F.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var L = l(742589),
    Y = l(833576);
function W(e) {
    let { title: t, actions: l, breadcrumb: i } = e;
    return (0, n.jsx)(L.A, {
        hideSearch: !0,
        toolbar: l,
        className: Y.wx,
        "aria-label": t,
        children: (0, n.jsxs)("div", {
            className: Y.QF,
            children: [
                (0, n.jsx)(y.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: k.A.colors.TEXT_STRONG,
                    className: Y.Kk,
                }),
                null != i
                    ? (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsx)(L.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, n.jsx)(L.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, n.jsx)(L.A.Title, { className: Y.Qw, wrapperClassName: Y.DD, children: t }),
            ],
        }),
    });
}
var U = l(189213),
    $ = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function Q(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        a = "permissions" === t;
    return (0, n.jsx)(U.Modal, {
        transitionState: l,
        onClose: i,
        title: F.intl.string(a ? M.default.Rtlv25 : M.default["+UouPe"]),
        subtitle: F.intl.string(a ? M.default["nDQB/b"] : M.default["E0QD++"]),
        size: "sm",
        actions: [{ text: F.intl.string(a ? F.t.BddRzS : M.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function q(e) {
    (0, X.openModal)((t) => (0, n.jsx)(Q, { ...t, reason: e }));
}
var J = l(224640),
    Z = l(815021),
    ee = l(652215),
    et = l(283382),
    el = l(264997);
function ei(e) {
    let { applicationId: t, guildId: l, projectName: i, transitionState: s, onClose: r } = e,
        d = F.intl.string(M.default.yzxKsU),
        c = F.intl.formatToPlainString(M.default.CC69wK, { projectName: i }),
        o = a.useCallback(() => {
            let e = (0, V.SH)(l, t);
            (0, I.pX)(null == e ? ee.BVt.CHANNEL(l) : ee.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, n.jsx)(J.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, n.jsxs)("div", {
            className: et.zr,
            children: [
                (0, n.jsx)("div", { className: et.b, children: (0, n.jsx)(Z.J, { onClick: r }) }),
                (0, n.jsxs)("div", {
                    className: et.wx,
                    children: [
                        (0, n.jsx)("div", {
                            className: et.bm,
                            children: (0, n.jsx)("img", { className: et.yW, src: el, alt: "" }),
                        }),
                        (0, n.jsxs)("div", {
                            className: et.R_,
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
                    className: et.o1,
                    children: [
                        (0, n.jsx)(v.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: F.intl.string(F.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, n.jsx)(v.$, {
                            fullWidth: !0,
                            variant: "primary",
                            size: "md",
                            text: F.intl.string(F.t.jVcuVY),
                            onClick: o,
                        }),
                    ],
                }),
            ],
        }),
    });
}
var en = l(746080),
    ea = l(401029);
function es(e) {
    return (0, n.jsx)(u.o, { ...e, size: "custom", width: 20, height: 20 });
}
function er(e) {
    let { project: t, onSelect: l } = e,
        i = (0, o.bG)([R.A], () => R.A.isThinking(t.id), [t.id]),
        a =
            null == t.updated_at
                ? null
                : F.intl.formatToPlainString(M.default.oMDaqr, { time: c()(t.updated_at).fromNow() });
    return (0, n.jsxs)("div", {
        className: ea.OY,
        children: [
            (0, n.jsx)(m.D, {
                className: ea.W6,
                onClick: l,
                children: (0, n.jsxs)("div", {
                    className: ea.MM,
                    children: [
                        (0, n.jsx)(x.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: ea.j1,
                            children: t.name,
                        }),
                        null == a
                            ? null
                            : (0, n.jsx)("div", {
                                  className: ea.h3,
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
                className: ea.M2,
                children: [
                    i ? (0, n.jsx)(z.Ty, { className: ea.O$ }) : null,
                    (0, n.jsx)("div", {
                        className: ea.Pl,
                        children: (0, n.jsx)(G, { projectId: t.id, projectName: t.name }),
                    }),
                ],
            }),
        ],
    });
}
function ed(e) {
    let { project: t, projectsLoaded: l, onBack: i, guildId: s } = e,
        [r, d] = a.useState(!1),
        [c, u] = a.useState(!0),
        [m, b] = a.useState(null),
        C = t?.id ?? null,
        E = a.useRef(C),
        y = a.useRef(null);
    E.current = C;
    let k = (0, o.bG)([T.A], () => (null == C ? null : T.A.getIntegrationStatus(C)), [C]),
        { data: V, isLoading: R } = (0, A.YY)(t?.preview_application_id ?? void 0),
        _ = null != C && m !== C,
        z = k?.preview_ready === !0,
        P = z && null != k && (!k.integration_installed || k.bot_permissions_changed),
        O = r || _ || R,
        B = F.intl.string(c ? M.default.YdgE0j : M.default.aWVf4j),
        H = a.useCallback(() => u((e) => !e), []),
        K = a.useCallback(async () => {
            if (null == C || E.current !== C) return;
            y.current?.abort();
            let e = new AbortController();
            (y.current = e), b(null);
            try {
                await (0, S.U1)(C, e.signal);
            } catch {
            } finally {
                e.signal.aborted || y.current !== e || E.current !== C || b(C);
            }
        }, [C]);
    a.useEffect(
        () => (
            K(),
            () => {
                y.current?.abort(), (y.current = null);
            }
        ),
        [K],
    );
    let L = a.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                w.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: V ?? null,
                    guildId: t.preview_guild_id ?? s,
                    onClose: () => void K(),
                });
        }, [s, V, t, K]),
        Y = P ? { type: "permissions", onReviewPermissions: L, loading: R || _ } : _ ? { type: "checking" } : void 0;
    a.useEffect(() => {
        null == t && l && (0, I.pX)(ee.BVt.CHANNEL(s, en.VV.VIBEGRATIONS));
    }, [s, t, l]);
    let U = a.useCallback(async () => {
        if (null != t) {
            if (!z) return void q($.NO_PREVIEW);
            if (P) return void q($.PERMISSIONS);
            d(!0);
            try {
                var e;
                let l = await (0, S.TV)(t.id);
                if (!l.ok) throw Error(F.intl.string(M.default.fNP6Cd));
                (e = { applicationId: l.body.application.id, guildId: s, projectName: l.body.project.name }),
                    (0, X.openModal)((t) => (0, n.jsx)(ei, { ...t, ...e }));
            } catch (e) {
                (0, j.P0)((0, h.o)(e instanceof Error ? e.message : F.intl.string(M.default.fNP6Cd), g.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, P, z, t]);
    return (0, n.jsxs)("div", {
        className: ea.nj,
        children: [
            (0, n.jsx)(W, {
                title: t?.name ?? F.intl.string(M.default.F2dRba),
                breadcrumb: { title: F.intl.string(M.default.Xmvb23), onClick: i },
                actions:
                    null == t
                        ? null
                        : (0, n.jsxs)("div", {
                              className: ea.wO,
                              children: [
                                  (0, n.jsxs)("div", {
                                      className: ea.FO,
                                      children: [
                                          (0, n.jsx)(G, { projectId: t.id, projectName: t.name }),
                                          (0, n.jsx)(p.m, {
                                              text: B,
                                              ariaHidden: !0,
                                              children: (0, n.jsx)(f.K, {
                                                  icon: es,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": B,
                                                  "aria-pressed": c,
                                                  onClick: H,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, n.jsx)(v.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: F.intl.string(M.default["5gU57O"]),
                                      loading: r,
                                      disabled: O,
                                      onClick: U,
                                  }),
                              ],
                          }),
            }),
            (0, n.jsx)("main", {
                className: ea.JX,
                children:
                    null == t
                        ? (0, n.jsxs)("div", {
                              className: ea.sD,
                              children: [
                                  (0, n.jsx)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: F.intl.string(M.default.F2dRba),
                                  }),
                                  (0, n.jsx)(x.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: F.intl.string(M.default.GnEJ3o),
                                  }),
                                  (0, n.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: F.intl.string(M.default["42EdIV"]),
                                      onClick: S.hF,
                                  }),
                              ],
                          })
                        : (0, n.jsx)(
                              D.A,
                              {
                                  projectId: t.id,
                                  appId: t.preview_application_id,
                                  chatOpen: c,
                                  previewReady: z,
                                  previewGate: Y,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function ec(e) {
    let {
            projects: t,
            fetchState: l,
            idea: i,
            guildId: s,
            submitting: d,
            createError: c,
            createDisabled: o,
            onSelectProject: u,
            onIdeaChange: j,
            onCreate: h,
        } = e,
        g = a.useMemo(
            () =>
                t
                    .filter((e) => (0, V.X0)(e, s))
                    .slice()
                    .sort((e, t) =>
                        null == e.updated_at ? 1 : null == t.updated_at ? -1 : t.updated_at.localeCompare(e.updated_at),
                    ),
            [t, s],
        ),
        p = F.intl.string(M.default.TU9IGR),
        f = [
            F.intl.string(M.default["E+Q26x"]),
            F.intl.string(M.default["06/jqP"]),
            F.intl.string(M.default["7MCiK9"]),
        ],
        A = a.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || h());
            },
            [o, h],
        );
    return (0, n.jsxs)("div", {
        className: r()(ea.nj, ea.a0),
        children: [
            (0, n.jsx)(W, { title: F.intl.string(M.default.Xmvb23) }),
            (0, n.jsx)(b.Ip, {
                children: (0, n.jsx)("main", {
                    className: ea.rf,
                    children: (0, n.jsxs)("div", {
                        className: ea.Qs,
                        children: [
                            (0, n.jsxs)("section", {
                                className: ea.Ix,
                                children: [
                                    (0, n.jsx)(N.D, {
                                        variant: "heading-xl/semibold",
                                        children: F.intl.string(M.default["2tYpRK"]),
                                    }),
                                    (0, n.jsx)("div", {
                                        className: ea.Aw,
                                        children: f.map((e) =>
                                            (0, n.jsx)(
                                                m.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: ea.nx,
                                                    onClick: d ? void 0 : () => h(e),
                                                    children: (0, n.jsx)(x.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: ea.un,
                                                        children: e,
                                                    }),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                    (0, n.jsxs)("div", {
                                        className: ea.DA,
                                        children: [
                                            (0, n.jsx)(C.f, {
                                                label: p,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: p,
                                                error: c,
                                                onChange: j,
                                                onKeyDown: A,
                                            }),
                                            (0, n.jsx)("div", {
                                                className: ea.VP,
                                                children: (0, n.jsx)(v.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: F.intl.string(F.t.CumH4u),
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
                                className: ea.hK,
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: ea.RM,
                                        children: [
                                            (0, n.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: F.intl.string(M.default.Bo5fE3),
                                            }),
                                            (0, n.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: F.intl.string(M.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === g.length
                                        ? (0, n.jsx)("div", { className: ea.E8, children: (0, n.jsx)(E.y, {}) })
                                        : l?.type === "error" && 0 === g.length
                                          ? (0, n.jsxs)("div", {
                                                className: ea.E8,
                                                children: [
                                                    (0, n.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: F.intl.string(M.default["IN/HRP"]),
                                                    }),
                                                    (0, n.jsx)(v.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: F.intl.string(M.default["42EdIV"]),
                                                        onClick: S.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === g.length
                                            ? (0, n.jsx)("div", {
                                                  className: ea.D1,
                                                  children: (0, n.jsxs)("div", {
                                                      className: ea.ST,
                                                      children: [
                                                          (0, n.jsx)(y.D, {
                                                              size: "lg",
                                                              color: k.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, n.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: ea.sI,
                                                              children: F.intl.string(M.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : g.map((e) =>
                                                  (0, n.jsx)(er, { project: e, onSelect: () => u(e.id) }, e.id),
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
function eo(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, o.yK)([T.A], () => T.A.getAllProjects()),
        s = (0, o.bG)([T.A], () => T.A.getProjectsFetchState()),
        [r, d] = a.useState(""),
        c = l ?? null,
        [u, m] = a.useState(!1),
        [x, j] = a.useState(null),
        h = r.trim();
    a.useEffect(() => {
        (0, S.hF)();
    }, []),
        a.useEffect(() => {
            (0, S.dm)(t, c);
        }, [t, c]);
    let g = a.useCallback(
            async (e) => {
                let l = (e ?? r).trim();
                if ("" !== l) {
                    null != e && d(e), m(!0), j(null);
                    try {
                        let e = await (0, S.gA)({ guild_id: t });
                        (0, _.Hc)(e), (0, _.dv)(e, l), (0, I.pX)(ee.BVt.CHANNEL(t, en.VV.VIBEGRATIONS, e)), d("");
                    } catch (e) {
                        j(e instanceof Error ? e.message : F.intl.string(M.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [t, r],
        ),
        p = a.useCallback(
            (e) => {
                (0, I.pX)(ee.BVt.CHANNEL(t, en.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        f = a.useCallback(() => {
            (0, I.pX)(ee.BVt.CHANNEL(t, en.VV.VIBEGRATIONS));
        }, [t]),
        v = a.useCallback((e) => {
            d(e), j(null);
        }, []),
        N = null == c ? null : (i.find((e) => e.id === c) ?? null);
    return null != c
        ? (0, n.jsx)(ed, { project: N, projectsLoaded: s?.type === "success", onBack: f, guildId: t })
        : (0, n.jsx)(ec, {
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
