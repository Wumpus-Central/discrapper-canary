l.r(e), l.d(e, { default: () => J });
var a = l(477900),
    n = l(582128),
    i = l(503698),
    s = l.n(i),
    r = l(989349),
    d = l.n(r),
    c = l(17928),
    o = l(939249),
    u = l(834730),
    m = l(691540),
    x = l(857250),
    h = l(97483),
    j = l(866665),
    g = l(821609),
    f = l(297264),
    p = l(364522),
    v = l(260598),
    N = l(289873),
    E = l(152367),
    b = l(661531),
    C = l(976860),
    k = l(948230),
    A = l(683180),
    I = l(783791),
    S = l(998939),
    y = l(972786),
    V = l(20386),
    T = l(321210),
    w = l(922016),
    P = l(980707),
    R = l(477782),
    _ = l(408278),
    D = l(365199),
    H = l(314116),
    B = l(818085),
    X = l(375708),
    z = l(192308);
function O(t) {
    let { projectId: e, projectName: i } = t,
        s = n.useRef(null);
    return (0, a.jsx)(w.Y, {
        targetElementRef: s,
        position: "bottom",
        align: "right",
        animation: w.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: n } = t;
            return (0, a.jsx)(P.W, {
                "data-menu-migrated": !0,
                navId: `vibegrations-project-actions-${e}`,
                "aria-label": X.intl.string(X.t.ogxXGq),
                onClose: n,
                onSelect: n,
                children: (0, a.jsxs)(R.rX, {
                    children: [
                        (0, a.jsx)(R.Dr, {
                            id: "rename",
                            label: X.intl.string(B.default.fHTQgk),
                            action: () => {
                                (0, z.openModalLazy)(async () => {
                                    let { default: t } = await l.e("53463").then(l.bind(l, 809898));
                                    return (l) => (0, a.jsx)(t, { ...l, projectId: e });
                                });
                            },
                        }),
                        (0, a.jsx)(R.Dr, {
                            id: "delete",
                            label: X.intl.string(X.t.oyYWHE),
                            color: "danger",
                            action: () => {
                                (0, H.A)({
                                    title: X.intl.formatToPlainString(B.default.ZokHVz, { name: i }),
                                    subtitle: X.intl.string(B.default.NmF939),
                                    confirmText: X.intl.string(X.t.oyYWHE),
                                    variant: "critical",
                                    onConfirm: async () => {
                                        if (!(await (0, k.xx)(e)).ok) throw Error(X.intl.string(B.default.tqKZCi));
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
            return (0, a.jsx)(_.K, {
                ...t,
                buttonRef: s,
                icon: D.j,
                size: "sm",
                variant: "icon-only",
                "aria-label": X.intl.string(X.t["UKOtz+"]),
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
    let { title: e, actions: l, onBack: n } = t;
    return (0, a.jsxs)(G.A, {
        hideSearch: !0,
        toolbar: l,
        className: K.w,
        "aria-label": e,
        children: [
            null == n
                ? (0, a.jsx)(E.D, { size: "custom", width: 20, height: 20, color: b.A.colors.TEXT_STRONG })
                : (0, a.jsx)(_.K, {
                      "aria-label": X.intl.string(X.t["13/7kX"]),
                      icon: F.r,
                      variant: "icon-only",
                      size: "sm",
                      onClick: n,
                  }),
            (0, a.jsx)(u.E, { variant: "text-md/semibold", color: "text-default", className: K.D, children: e }),
        ],
    });
}
var Y = l(652215),
    M = l(746080),
    $ = l(401029);
function U(t) {
    let { project: e, onSelect: l } = t,
        n = (0, c.bG)([I.A], () => I.A.isThinking(e.id), [e.id]),
        i =
            null == e.updated_at
                ? null
                : X.intl.formatToPlainString(B.default.oMDaqr, { time: d()(e.updated_at).fromNow() });
    return (0, a.jsxs)("div", {
        className: $.OY,
        children: [
            (0, a.jsx)(o.D, {
                className: $.W6,
                onClick: l,
                children: (0, a.jsxs)("div", {
                    className: $.MM,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: $.j1,
                            children: e.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: $.h3,
                            children: [
                                (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: X.intl.string(B.default.sPSPIs),
                                }),
                                null == i
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
                                                  children: i,
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: $.M2,
                children: [
                    n ? (0, a.jsx)(V.Ty, { className: $.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: $.Pl,
                        children: (0, a.jsx)(O, { projectId: e.id, projectName: e.name }),
                    }),
                ],
            }),
        ],
    });
}
function q(t) {
    let { project: e, projectsLoaded: l, onBack: i, guildId: s } = t,
        [r, d] = n.useState(!1),
        [c, o] = n.useState(e?.preview_application_id == null ? "no-app" : "launching"),
        p = r || "no-app" === c;
    n.useEffect(() => {
        null == e && l && (0, C.pX)(Y.BVt.CHANNEL(s, M.VV.VIBEGRATIONS));
    }, [s, e, l]);
    let v = n.useCallback(async () => {
        if (null != e) {
            d(!0);
            try {
                if (!(await (0, k.TV)(e.id)).ok) throw Error(X.intl.string(B.default.fNP6Cd));
                (0, m.P0)((0, x.o)(X.intl.string(B.default["kvcg+H"]), h.Ck.SUCCESS));
            } catch (t) {
                (0, m.P0)((0, x.o)(t instanceof Error ? t.message : X.intl.string(B.default.fNP6Cd), h.Ck.FAILURE));
            } finally {
                d(!1);
            }
        }
    }, [e]);
    return (0, a.jsxs)("div", {
        className: $.nj,
        children: [
            (0, a.jsx)(L, {
                title: e?.name ?? X.intl.string(B.default.F2dRba),
                actions:
                    null == e
                        ? null
                        : (0, a.jsxs)("div", {
                              className: $.wO,
                              children: [
                                  (0, a.jsx)(O, { projectId: e.id, projectName: e.name }),
                                  (0, a.jsx)(j.m, {
                                      text: X.intl.string(B.default.fYHrcD),
                                      shouldShow: "no-app" === c,
                                      asContainer: !0,
                                      children: (0, a.jsx)(g.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: X.intl.string(B.default.uAMVJ4),
                                          loading: r,
                                          disabled: p,
                                          onClick: v,
                                      }),
                                  }),
                              ],
                          }),
                onBack: i,
            }),
            (0, a.jsx)("main", {
                className: $.JX,
                children:
                    null == e
                        ? (0, a.jsxs)("div", {
                              className: $.sD,
                              children: [
                                  (0, a.jsx)(f.D, {
                                      variant: "heading-lg/semibold",
                                      children: X.intl.string(B.default.F2dRba),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: X.intl.string(B.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(g.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: X.intl.string(B.default["42EdIV"]),
                                      onClick: k.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              T.A,
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
            idea: i,
            guildId: r,
            submitting: d,
            createError: c,
            createDisabled: o,
            onSelectProject: m,
            onIdeaChange: x,
            onCreate: h,
        } = t,
        j = n.useMemo(
            () =>
                e
                    .filter((t) => (0, A.X0)(t, r))
                    .slice()
                    .sort((t, e) =>
                        null == t.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(t.updated_at),
                    ),
            [e, r],
        ),
        C = X.intl.string(B.default.TU9IGR);
    return (0, a.jsxs)("div", {
        className: s()($.nj, $.a0),
        children: [
            (0, a.jsx)(L, { title: X.intl.string(B.default.Xmvb23) }),
            (0, a.jsx)(p.Ip, {
                children: (0, a.jsx)("main", {
                    className: $.rf,
                    children: (0, a.jsxs)("div", {
                        className: $.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: $.Ix,
                                children: [
                                    (0, a.jsx)(f.D, {
                                        variant: "heading-xl/semibold",
                                        children: X.intl.string(B.default["2tYpRK"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: $.DA,
                                        children: [
                                            (0, a.jsx)(v.f, {
                                                label: C,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: i,
                                                placeholder: C,
                                                error: c,
                                                onChange: x,
                                            }),
                                            (0, a.jsx)("div", {
                                                className: $.VP,
                                                children: (0, a.jsx)(g.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: X.intl.string(X.t.CumH4u),
                                                    disabled: o,
                                                    loading: d,
                                                    onClick: h,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("section", {
                                className: $.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: $.RM,
                                        children: [
                                            (0, a.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: X.intl.string(B.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: X.intl.string(B.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == l || "loading" === l.type) && 0 === j.length
                                        ? (0, a.jsx)("div", { className: $.E8, children: (0, a.jsx)(N.y, {}) })
                                        : l?.type === "error" && 0 === j.length
                                          ? (0, a.jsxs)("div", {
                                                className: $.E8,
                                                children: [
                                                    (0, a.jsx)(u.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: X.intl.string(B.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(g.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: X.intl.string(B.default["42EdIV"]),
                                                        onClick: k.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === j.length
                                            ? (0, a.jsx)("div", {
                                                  className: $.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: $.ST,
                                                      children: [
                                                          (0, a.jsx)(E.D, {
                                                              size: "lg",
                                                              color: b.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(u.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: $.sI,
                                                              children: X.intl.string(B.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : j.map((t) =>
                                                  (0, a.jsx)(U, { project: t, onSelect: () => m(t.id) }, t.id),
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
        i = (0, c.yK)([y.A], () => y.A.getAllProjects()),
        s = (0, c.bG)([y.A], () => y.A.getProjectsFetchState()),
        [r, d] = n.useState(""),
        o = l ?? null,
        [u, m] = n.useState(!1),
        [x, h] = n.useState(null),
        j = r.trim();
    n.useEffect(() => {
        (0, k.hF)();
    }, []),
        n.useEffect(() => {
            (0, k.dm)(e, o);
        }, [e, o]);
    let g = n.useCallback(async () => {
            if ("" !== j) {
                m(!0), h(null);
                try {
                    let t = await (0, k.gA)({ guild_id: e });
                    (0, S.Hc)(t), (0, S.dv)(t, j), (0, C.pX)(Y.BVt.CHANNEL(e, M.VV.VIBEGRATIONS, t)), d("");
                } catch (t) {
                    h(t instanceof Error ? t.message : X.intl.string(B.default.KKkp5Y));
                } finally {
                    m(!1);
                }
            }
        }, [e, j]),
        f = n.useCallback(
            (t) => {
                (0, C.pX)(Y.BVt.CHANNEL(e, M.VV.VIBEGRATIONS, t));
            },
            [e],
        ),
        p = n.useCallback(() => {
            (0, C.pX)(Y.BVt.CHANNEL(e, M.VV.VIBEGRATIONS));
        }, [e]),
        v = n.useCallback((t) => {
            d(t), h(null);
        }, []),
        N = null == o ? null : (i.find((t) => t.id === o) ?? null);
    return null != o
        ? (0, a.jsx)(q, { project: N, projectsLoaded: s?.type === "success", onBack: p, guildId: e })
        : (0, a.jsx)(W, {
              projects: i,
              fetchState: s,
              idea: r,
              guildId: e,
              submitting: u,
              createError: x,
              createDisabled: "" === j || u,
              onSelectProject: f,
              onIdeaChange: v,
              onCreate: g,
          });
}
