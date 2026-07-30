l.r(e), l.d(e, { default: () => J });
var a = l(477900),
    i = l(582128),
    n = l(503698),
    s = l.n(n),
    r = l(989349),
    d = l.n(r),
    c = l(17928),
    o = l(939249),
    u = l(834730),
    m = l(691540),
    x = l(857250),
    j = l(97483),
    h = l(866665),
    g = l(821609),
    f = l(297264),
    p = l(364522),
    v = l(260598),
    N = l(289873),
    E = l(152367),
    b = l(661531),
    C = l(976860),
    k = l(948230),
    A = l(783791),
    I = l(998939),
    S = l(972786);
l(957907);
var y = l(818085),
    V = l(375708),
    _ = l(554177);
function T(t) {
    let { className: e } = t;
    return (0, a.jsx)("span", {
        role: "img",
        "aria-label": V.intl.string(y.default.ui2IQ2),
        className: s()(_.lU, _.jP, e),
    });
}
var w = l(321210),
    P = l(922016),
    R = l(980707),
    D = l(477782),
    H = l(408278),
    B = l(365199),
    z = l(314116),
    O = l(192308);
function X(t) {
    let { projectId: e, projectName: n } = t,
        s = i.useRef(null);
    return (0, a.jsx)(P.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: P.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: i } = t;
            return (0, a.jsx)(R.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${e}`,
                "aria-label": V.intl.string(V.t.ogxXGq),
                onClose: i,
                onSelect: i,
                children: (0, a.jsxs)(D.rX, {
                    children: [
                        (0, a.jsx)(D.Dr, {
                            id: "rename",
                            label: V.intl.string(y.default.fHTQgk),
                            action: () => {
                                (0, O.openModalLazy)(async () => {
                                    let { default: t } = await l.e("53463").then(l.bind(l, 809898));
                                    return (l) => (0, a.jsx)(t, { ...l, projectId: e });
                                });
                            },
                        }),
                        (0, a.jsx)(D.Dr, {
                            id: "delete",
                            label: V.intl.string(V.t.oyYWHE),
                            color: "danger",
                            action: () => {
                                (0, z.A)({
                                    title: V.intl.formatToPlainString(y.default.ZokHVz, { name: n }),
                                    subtitle: V.intl.string(y.default.NmF939),
                                    confirmText: V.intl.string(V.t.oyYWHE),
                                    variant: "critical",
                                    onConfirm: async () => {
                                        if (!(await (0, k.xx)(e)).ok) throw Error(V.intl.string(y.default.tqKZCi));
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
            return (0, a.jsx)(H.K, {
                ...t,
                buttonRef: s,
                icon: B.j,
                size: "sm",
                variant: "icon-only",
                "aria-label": V.intl.string(V.t["UKOtz+"]),
                "aria-haspopup": "menu",
                "aria-expanded": l,
            });
        },
    });
}
var F = l(477155),
    G = l(742589),
    K = l(833576);
function L(t) {
    let { title: e, actions: l, onBack: i } = t;
    return (0, a.jsxs)(G.A, {
        hideSearch: !0,
        toolbar: l,
        className: K.w,
        "aria-label": e,
        children: [
            null == i
                ? (0, a.jsx)(E.D, { size: "custom", width: 20, height: 20, color: b.A.colors.TEXT_STRONG })
                : (0, a.jsx)(H.K, {
                      "aria-label": V.intl.string(V.t["13/7kX"]),
                      icon: F.r,
                      variant: "icon-only",
                      size: "sm",
                      onClick: i,
                  }),
            (0, a.jsx)(u.E, { variant: "text-md/semibold", color: "text-default", className: K.D, children: e }),
        ],
    });
}
var Y = l(652215),
    M = l(746080),
    U = l(401029);
function $(t) {
    let { project: e, onSelect: l } = t,
        i = (0, c.bG)([A.A], () => A.A.isThinking(e.id), [e.id]),
        n =
            null == e.updated_at
                ? null
                : V.intl.formatToPlainString(y.default.oMDaqr, { time: d()(e.updated_at).fromNow() });
    return (0, a.jsxs)("div", {
        className: U.OY,
        children: [
            (0, a.jsx)(o.D, {
                className: U.W6,
                onClick: l,
                children: (0, a.jsxs)("div", {
                    className: U.MM,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: U.j1,
                            children: e.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: U.h3,
                            children: [
                                (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: V.intl.string(y.default.sPSPIs),
                                }),
                                null == n
                                    ? null
                                    : (0, a.jsxs)(a.Fragment, {
                                          children: [
                                              (0, a.jsx)(u.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  "aria-hidden": "true",
                                                  children: "\xb7",
                                              }),
                                              (0, a.jsx)(u.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: n,
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: U.M2,
                children: [
                    i ? (0, a.jsx)(T, { className: U.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: U.Pl,
                        children: (0, a.jsx)(X, { projectId: e.id, projectName: e.name }),
                    }),
                ],
            }),
        ],
    });
}
function q(t) {
    let { project: e, projectsLoaded: l, onBack: n, guildId: s } = t,
        [r, d] = i.useState(!1),
        [c, o] = i.useState(e?.preview_application_id == null ? "no-app" : "launching"),
        p = r || "no-app" === c;
    i.useEffect(() => {
        null == e && l && (0, C.pX)(Y.BVt.CHANNEL(s, M.VV.VIBEGRATIONS));
    }, [s, e, l]);
    let v = i.useCallback(async () => {
        if (null != e) {
            d(!0);
            try {
                if (!(await (0, k.TV)(e.id)).ok) throw Error(V.intl.string(y.default.fNP6Cd));
                (0, m.P0)((0, x.o)(V.intl.string(y.default["kvcg+H"]), j.Ck.SUCCESS));
            } catch (t) {
                (0, m.P0)((0, x.o)(t instanceof Error ? t.message : V.intl.string(y.default.fNP6Cd), j.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [e]);
    return (0, a.jsxs)("div", {
        className: U.nj,
        children: [
            (0, a.jsx)(L, {
                title: e?.name ?? V.intl.string(y.default.F2dRba),
                actions:
                    null == e
                        ? null
                        : (0, a.jsxs)("div", {
                              className: U.wO,
                              children: [
                                  (0, a.jsx)(X, { projectId: e.id, projectName: e.name }),
                                  (0, a.jsx)(h.m, {
                                      text: V.intl.string(y.default.fYHrcD),
                                      shouldShow: "no-app" === c,
                                      asContainer: !0,
                                      children: (0, a.jsx)(g.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: V.intl.string(y.default.uAMVJ4),
                                          loading: r,
                                          disabled: p,
                                          onClick: v,
                                      }),
                                  }),
                              ],
                          }),
                onBack: n,
            }),
            (0, a.jsx)("main", {
                className: U.JX,
                children:
                    null == e
                        ? (0, a.jsxs)("div", {
                              className: U.sD,
                              children: [
                                  (0, a.jsx)(f.D, {
                                      variant: "heading-lg/semibold",
                                      children: V.intl.string(y.default.F2dRba),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: V.intl.string(y.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(g.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: V.intl.string(y.default["42EdIV"]),
                                      onClick: k.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              w.A,
                              {
                                  projectId: e.id,
                                  appId: e.preview_application_id,
                                  chatOpen: !0,
                                  onActivityStatusChange: o,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function W(t) {
    let {
            projects: e,
            fetchState: l,
            idea: n,
            guildId: r,
            submitting: d,
            createError: c,
            createDisabled: o,
            onSelectProject: m,
            onIdeaChange: x,
            onCreate: j,
        } = t,
        h = i.useMemo(
            () =>
                e
                    .filter(
                        (t) =>
                            t.guild_id === r ||
                            t.preview_guild_id === r ||
                            (null == t.guild_id && null == t.preview_guild_id),
                    )
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, r],
        ),
        C = V.intl.string(y.default.TU9IGR);
    return (0, a.jsxs)("div", {
        className: s()(U.nj, U.a0),
        children: [
            (0, a.jsx)(L, { title: V.intl.string(y.default.Xmvb23) }),
            (0, a.jsx)(p.Ip, {
                children: (0, a.jsx)("main", {
                    className: U.rf,
                    children: (0, a.jsxs)("div", {
                        className: U.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: U.Ix,
                                children: [
                                    (0, a.jsx)(f.D, {
                                        variant: "heading-xl/semibold",
                                        children: V.intl.string(y.default["2tYpRK"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: U.DA,
                                        children: [
                                            (0, a.jsx)(v.f, {
                                                label: C,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: n,
                                                placeholder: C,
                                                error: c,
                                                onChange: x,
                                            }),
                                            (0, a.jsx)("div", {
                                                className: U.VP,
                                                children: (0, a.jsx)(g.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: V.intl.string(V.t.CumH4u),
                                                    disabled: o,
                                                    loading: d,
                                                    onClick: j,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("section", {
                                className: U.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: U.RM,
                                        children: [
                                            (0, a.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: V.intl.string(y.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: V.intl.string(y.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === h.length
                                        ? (0, a.jsx)("div", { className: U.E8, children: (0, a.jsx)(N.y, {}) })
                                        : l?.type === "error" && 0 === h.length
                                          ? (0, a.jsxs)("div", {
                                                className: U.E8,
                                                children: [
                                                    (0, a.jsx)(u.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: V.intl.string(y.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(g.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: V.intl.string(y.default["42EdIV"]),
                                                        onClick: k.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === h.length
                                            ? (0, a.jsx)("div", {
                                                  className: U.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: U.ST,
                                                      children: [
                                                          (0, a.jsx)(E.D, {
                                                              size: "lg",
                                                              color: b.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(u.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: U.sI,
                                                              children: V.intl.string(y.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : h.map((t) =>
                                                  (0, a.jsx)($, { project: t, onSelect: () => m(t.id) }, t.id),
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
function J(t) {
    let { guildId: e, projectId: l } = t,
        n = (0, c.yK)([S.A], () => S.A.getAllProjects()),
        s = (0, c.bG)([S.A], () => S.A.getProjectsFetchState()),
        [r, d] = i.useState(""),
        o = l ?? null,
        [u, m] = i.useState(!1),
        [x, j] = i.useState(null),
        h = r.trim();
    i.useEffect(() => {
        (0, k.hF)();
    }, []),
        i.useEffect(() => {
            (0, k.dm)(e, o);
        }, [e, o]);
    let g = i.useCallback(async () => {
            if ("" !== h) {
                m(!0), j(null);
                try {
                    let t = await (0, k.gA)({ guild_id: e });
                    (0, I.Hc)(t), (0, I.dv)(t, h), (0, C.pX)(Y.BVt.CHANNEL(e, M.VV.VIBEGRATIONS, t)), d("");
                } catch (t) {
                    j(t instanceof Error ? t.message : V.intl.string(y.default.KKkp5Y));
                } finally {
                    m(!1);
                }
            }
        }, [e, h]),
        f = i.useCallback(
            (t) => {
                (0, C.pX)(Y.BVt.CHANNEL(e, M.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        p = i.useCallback(() => {
            (0, C.pX)(Y.BVt.CHANNEL(e, M.VV.VIBEGRATIONS));
        }, [e]),
        v = i.useCallback((t) => {
            d(t), j(null);
        }, []),
        N = null == o ? null : (n.find((t) => t.id === o) ?? null);
    return null != o
        ? (0, a.jsx)(q, { project: N, projectsLoaded: s?.type === "success", onBack: p, guildId: e })
        : (0, a.jsx)(W, {
              projects: n,
              fetchState: s,
              idea: r,
              guildId: e,
              submitting: u,
              createError: x,
              createDisabled: "" === h || u,
              onSelectProject: f,
              onIdeaChange: v,
              onCreate: g,
          });
}
