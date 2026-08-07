l.r(t), l.d(t, { default: () => eu });
var i,
    a = l(477900),
    n = l(582128),
    s = l(503698),
    r = l.n(s),
    d = l(989349),
    c = l.n(d),
    o = l(17928),
    u = l(534890),
    m = l(939249),
    x = l(834730),
    j = l(691540),
    g = l(857250),
    h = l(97483),
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
    w = l(976860),
    I = l(948230),
    S = l(148555),
    _ = l(683180),
    V = l(783791),
    R = l(998939),
    T = l(972786),
    z = l(20386),
    D = l(750896),
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
        s = n.useRef(null);
    return (0, a.jsx)(P.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: P.Y.Animation.NONE,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, a.jsx)(O.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${t}`,
                "aria-label": F.intl.string(F.t.ogxXGq),
                onClose: n,
                onSelect: n,
                children: (0, a.jsxs)(B.rX, {
                    children: [
                        (0, a.jsx)(B.Dr, {
                            id: "rename",
                            label: F.intl.string(M.default.fHTQgk),
                            action: () => {
                                (0, X.openModalLazy)(async () => {
                                    let { default: e } = await l.e("53463").then(l.bind(l, 809898));
                                    return (l) => (0, a.jsx)(e, { ...l, projectId: t });
                                });
                            },
                        }),
                        (0, a.jsx)(B.Dr, {
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
                                        if (!(await (0, I.xx)(t)).ok) throw Error(F.intl.string(M.default.tqKZCi));
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
            return (0, a.jsx)(f.K, {
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
    return (0, a.jsx)(L.A, {
        hideSearch: !0,
        toolbar: l,
        className: Y.wx,
        "aria-label": t,
        children: (0, a.jsxs)("div", {
            className: Y.QF,
            children: [
                (0, a.jsx)(y.D, {
                    size: "custom",
                    width: 20,
                    height: 20,
                    color: k.A.colors.TEXT_STRONG,
                    className: Y.Kk,
                }),
                null != i
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [
                              (0, a.jsx)(L.A.Title, { onClick: i.onClick, children: i.title }),
                              (0, a.jsx)(L.A.Caret, {}),
                          ],
                      })
                    : null,
                (0, a.jsx)(L.A.Title, { className: Y.Qw, wrapperClassName: Y.DD, children: t }),
            ],
        }),
    });
}
var U = l(189213),
    $ = (((i = {}).NO_PREVIEW = "no-preview"), (i.PERMISSIONS = "permissions"), i);
function Q(e) {
    let { reason: t, transitionState: l, onClose: i } = e,
        n = "permissions" === t;
    return (0, a.jsx)(U.Modal, {
        transitionState: l,
        onClose: i,
        title: F.intl.string(n ? M.default.Rtlv25 : M.default["+UouPe"]),
        subtitle: F.intl.string(n ? M.default["nDQB/b"] : M.default["E0QD++"]),
        size: "sm",
        actions: [{ text: F.intl.string(n ? F.t.BddRzS : M.default["+Zh4FA"]), variant: "primary", onClick: i }],
    });
}
function q(e) {
    (0, X.openModal)((t) => (0, a.jsx)(Q, { ...t, reason: e }));
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
        o = n.useCallback(() => {
            let e = (0, _.SH)(l, t);
            (0, w.pX)(null == e ? ee.BVt.CHANNEL(l) : ee.BVt.CHANNEL(l, e)), r();
        }, [t, l, r]);
    return (0, a.jsx)(J.d, {
        transitionState: s,
        onClose: r,
        size: "md",
        paddingSize: "lg",
        "aria-label": d,
        children: (0, a.jsxs)("div", {
            className: et.zr,
            children: [
                (0, a.jsx)("div", { className: et.b, children: (0, a.jsx)(Z.J, { onClick: r }) }),
                (0, a.jsxs)("div", {
                    className: et.wx,
                    children: [
                        (0, a.jsx)("div", {
                            className: et.bm,
                            children: (0, a.jsx)("img", { className: et.yW, src: el, alt: "" }),
                        }),
                        (0, a.jsxs)("div", {
                            className: et.R_,
                            children: [
                                (0, a.jsx)(N.D, { variant: "heading-xl/semibold", color: "text-strong", children: d }),
                                (0, a.jsx)(x.E, {
                                    variant: "redesign/heading-18/medium",
                                    color: "text-subtle",
                                    children: c,
                                }),
                            ],
                        }),
                    ],
                }),
                (0, a.jsxs)("div", {
                    className: et.o1,
                    children: [
                        (0, a.jsx)(v.$, {
                            fullWidth: !0,
                            variant: "secondary",
                            size: "md",
                            text: F.intl.string(F.t.cpT0Cq),
                            onClick: r,
                        }),
                        (0, a.jsx)(v.$, {
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
var ea = l(746080),
    en = l(165610),
    es = l(401029);
function er(e) {
    return (0, a.jsx)(u.o, { ...e, size: "custom", width: 20, height: 20 });
}
function ed(e) {
    let { project: t, onSelect: l } = e,
        i = (0, o.bG)([V.A], () => V.A.isThinking(t.id), [t.id]),
        n =
            null == t.updated_at
                ? null
                : F.intl.formatToPlainString(M.default.oMDaqr, { time: c()(t.updated_at).fromNow() });
    return (0, a.jsxs)("div", {
        className: es.OY,
        children: [
            (0, a.jsx)(m.D, {
                className: es.W6,
                onClick: l,
                children: (0, a.jsxs)("div", {
                    className: es.MM,
                    children: [
                        (0, a.jsx)(x.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: es.j1,
                            children: t.name,
                        }),
                        null == n
                            ? null
                            : (0, a.jsx)("div", {
                                  className: es.h3,
                                  children: (0, a.jsx)(x.E, {
                                      variant: "text-sm/normal",
                                      color: "text-subtle",
                                      children: n,
                                  }),
                              }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: es.M2,
                children: [
                    i ? (0, a.jsx)(z.Ty, { className: es.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: es.Pl,
                        children: (0, a.jsx)(G, { projectId: t.id, projectName: t.name }),
                    }),
                ],
            }),
        ],
    });
}
function ec(e) {
    let { project: t, projectsLoaded: l, onBack: i, guildId: s } = e,
        [r, d] = n.useState(!1),
        [c, u] = n.useState(!0),
        [m, b] = n.useState(null),
        C = t?.id ?? null,
        E = n.useRef(C),
        y = n.useRef(null);
    E.current = C;
    let k = (0, o.bG)([T.A], () => (null == C ? null : T.A.getIntegrationStatus(C)), [C]),
        { data: _, isLoading: V } = (0, A.YY)(t?.preview_application_id ?? void 0),
        R = null != C && m !== C,
        z = k?.preview_ready === !0,
        P = z && null != k && (!k.integration_installed || k.bot_permissions_changed),
        O = r || R || V,
        B = F.intl.string(c ? M.default.YdgE0j : M.default.aWVf4j),
        H = n.useCallback(() => u((e) => !e), []),
        K = n.useCallback(async () => {
            if (null == C || E.current !== C) return;
            y.current?.abort();
            let e = new AbortController();
            (y.current = e), b(null);
            try {
                await (0, I.U1)(C, e.signal);
            } catch {
            } finally {
                e.signal.aborted || y.current !== e || E.current !== C || b(C);
            }
        }, [C]);
    n.useEffect(
        () => (
            K(),
            () => {
                y.current?.abort(), (y.current = null);
            }
        ),
        [K],
    );
    let L = k?.integration_installed === !0 && t?.guild_id != null ? t.guild_id : s,
        Y = n.useCallback(async () => {
            null == t ||
                (t.guild_id === L && t.preview_guild_id === L) ||
                (await (0, I.M7)(t.id, { guild_id: L, preview_guild_id: L }));
        }, [L, t]),
        U = n.useCallback(async () => {
            try {
                await Y();
            } catch {}
            await K();
        }, [K, Y]),
        Q = n.useCallback(() => {
            let e = t?.preview_application_id;
            null != t &&
                null != e &&
                S.A.openVibegrationsAppInstallModal({
                    applicationId: e,
                    application: _ ?? null,
                    guildId: L,
                    onClose: () => {
                        U();
                    },
                });
        }, [U, L, _, t]),
        J = P ? { type: "permissions", onReviewPermissions: Q, loading: V || R } : R ? { type: "checking" } : void 0;
    n.useEffect(() => {
        null == t && l && (0, w.pX)(ee.BVt.CHANNEL(s, ea.VV.VIBEGRATIONS));
    }, [s, t, l]);
    let Z = n.useCallback(async () => {
        if (null != t) {
            if (!z) return void q($.NO_PREVIEW);
            if (P) return void q($.PERMISSIONS);
            d(!0);
            try {
                var e;
                let l = await (0, I.TV)(t.id);
                if (!l.ok) throw Error(F.intl.string(M.default.fNP6Cd));
                (e = { applicationId: l.body.application.id, guildId: s, projectName: l.body.project.name }),
                    (0, X.openModal)((t) => (0, a.jsx)(ei, { ...t, ...e }));
            } catch (e) {
                (0, j.P0)((0, g.o)(e instanceof Error ? e.message : F.intl.string(M.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [s, P, z, t]);
    return (0, a.jsxs)("div", {
        className: es.nj,
        children: [
            (0, a.jsx)(W, {
                title: t?.name ?? F.intl.string(M.default.F2dRba),
                breadcrumb: { title: F.intl.string(M.default.Xmvb23), onClick: i },
                actions:
                    null == t
                        ? null
                        : (0, a.jsxs)("div", {
                              className: es.wO,
                              children: [
                                  (0, a.jsxs)("div", {
                                      className: es.FO,
                                      children: [
                                          (0, a.jsx)(G, { projectId: t.id, projectName: t.name }),
                                          (0, a.jsx)(p.m, {
                                              text: B,
                                              ariaHidden: !0,
                                              children: (0, a.jsx)(f.K, {
                                                  icon: er,
                                                  size: "sm",
                                                  variant: "icon-only",
                                                  "aria-label": B,
                                                  "aria-pressed": c,
                                                  onClick: H,
                                              }),
                                          }),
                                      ],
                                  }),
                                  (0, a.jsx)(v.$, {
                                      variant: "primary",
                                      size: "sm",
                                      text: F.intl.string(M.default["5gU57O"]),
                                      loading: r,
                                      disabled: O,
                                      onClick: Z,
                                  }),
                              ],
                          }),
            }),
            (0, a.jsx)("main", {
                className: es.JX,
                children:
                    null == t
                        ? (0, a.jsxs)("div", {
                              className: es.sD,
                              children: [
                                  (0, a.jsx)(N.D, {
                                      variant: "heading-lg/semibold",
                                      children: F.intl.string(M.default.F2dRba),
                                  }),
                                  (0, a.jsx)(x.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: F.intl.string(M.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(v.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: F.intl.string(M.default["42EdIV"]),
                                      onClick: I.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              D.A,
                              {
                                  projectId: t.id,
                                  applicationId: t.preview_application_id,
                                  surface: en.sd,
                                  chatOpen: c,
                                  previewReady: z,
                                  previewGate: J,
                              },
                              t.id,
                          ),
            }),
        ],
    });
}
function eo(e) {
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
            onCreate: g,
        } = e,
        h = n.useMemo(
            () =>
                t
                    .filter((e) => (0, _.X0)(e, s))
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
        A = n.useCallback(
            (e) => {
                "Enter" !== e.key || e.shiftKey || e.nativeEvent.isComposing || (e.preventDefault(), o || g());
            },
            [o, g],
        );
    return (0, a.jsxs)("div", {
        className: r()(es.nj, es.a0),
        children: [
            (0, a.jsx)(W, { title: F.intl.string(M.default.Xmvb23) }),
            (0, a.jsx)(b.Ip, {
                children: (0, a.jsx)("main", {
                    className: es.rf,
                    children: (0, a.jsxs)("div", {
                        className: es.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: es.Ix,
                                children: [
                                    (0, a.jsx)(N.D, {
                                        variant: "heading-xl/semibold",
                                        children: F.intl.string(M.default["2tYpRK"]),
                                    }),
                                    (0, a.jsx)("div", {
                                        className: es.Aw,
                                        children: f.map((e) =>
                                            (0, a.jsx)(
                                                m.D,
                                                {
                                                    "aria-disabled": d,
                                                    className: es.nx,
                                                    onClick: d ? void 0 : () => g(e),
                                                    children: (0, a.jsx)(x.E, {
                                                        variant: "text-md/semibold",
                                                        color: "text-strong",
                                                        className: es.un,
                                                        children: e,
                                                    }),
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: es.DA,
                                        children: [
                                            (0, a.jsx)(C.f, {
                                                label: p,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: p,
                                                error: c,
                                                onChange: j,
                                                onKeyDown: A,
                                            }),
                                            (0, a.jsx)("div", {
                                                className: es.VP,
                                                children: (0, a.jsx)(v.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: F.intl.string(F.t.CumH4u),
                                                    disabled: o,
                                                    loading: d,
                                                    onClick: () => g(),
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("section", {
                                className: es.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: es.RM,
                                        children: [
                                            (0, a.jsx)(x.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: F.intl.string(M.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(x.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: F.intl.string(M.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === h.length
                                        ? (0, a.jsx)("div", { className: es.E8, children: (0, a.jsx)(E.y, {}) })
                                        : l?.type === "error" && 0 === h.length
                                          ? (0, a.jsxs)("div", {
                                                className: es.E8,
                                                children: [
                                                    (0, a.jsx)(x.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: F.intl.string(M.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(v.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: F.intl.string(M.default["42EdIV"]),
                                                        onClick: I.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === h.length
                                            ? (0, a.jsx)("div", {
                                                  className: es.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: es.ST,
                                                      children: [
                                                          (0, a.jsx)(y.D, {
                                                              size: "lg",
                                                              color: k.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(x.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: es.sI,
                                                              children: F.intl.string(M.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : h.map((e) =>
                                                  (0, a.jsx)(ed, { project: e, onSelect: () => u(e.id) }, e.id),
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
function eu(e) {
    let { guildId: t, projectId: l } = e,
        i = (0, o.yK)([T.A], () => T.A.getAllProjects()),
        s = (0, o.bG)([T.A], () => T.A.getProjectsFetchState()),
        [r, d] = n.useState(""),
        c = l ?? null,
        [u, m] = n.useState(!1),
        [x, j] = n.useState(null),
        g = r.trim();
    n.useEffect(() => {
        (0, I.hF)();
    }, []),
        n.useEffect(() => {
            (0, I.dm)(t, c);
        }, [t, c]);
    let h = n.useCallback(
            async (e) => {
                let l = (e ?? r).trim();
                if ("" !== l) {
                    null != e && d(e), m(!0), j(null);
                    try {
                        let e = await (0, I.gA)({ guild_id: t });
                        (0, R.Hc)(e), (0, R.dv)(e, l), (0, w.pX)(ee.BVt.CHANNEL(t, ea.VV.VIBEGRATIONS, e)), d("");
                    } catch (e) {
                        j(e instanceof Error ? e.message : F.intl.string(M.default.KKkp5Y));
                    } finally {
                        m(!1);
                    }
                }
            },
            [t, r],
        ),
        p = n.useCallback(
            (e) => {
                (0, w.pX)(ee.BVt.CHANNEL(t, ea.VV.VIBEGRATIONS, e));
            },
            [t],
        ),
        f = n.useCallback(() => {
            (0, w.pX)(ee.BVt.CHANNEL(t, ea.VV.VIBEGRATIONS));
        }, [t]),
        v = n.useCallback((e) => {
            d(e), j(null);
        }, []),
        N = null == c ? null : (i.find((e) => e.id === c) ?? null);
    return null != c
        ? (0, a.jsx)(ec, { project: N, projectsLoaded: s?.type === "success", onBack: f, guildId: t })
        : (0, a.jsx)(eo, {
              projects: i,
              fetchState: s,
              idea: r,
              guildId: t,
              submitting: u,
              createError: x,
              createDisabled: "" === g || u,
              onSelectProject: p,
              onIdeaChange: v,
              onCreate: h,
          });
}
