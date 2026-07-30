t.r(e), t.d(e, { default: () => Y });
var a = t(477900),
    i = t(582128),
    n = t(503698),
    s = t.n(n),
    r = t(989349),
    d = t.n(r),
    c = t(17928),
    o = t(939249),
    u = t(834730),
    m = t(866665),
    x = t(408278),
    h = t(625903),
    j = t(691540),
    g = t(857250),
    f = t(97483),
    p = t(821609),
    v = t(297264),
    N = t(364522),
    E = t(260598),
    b = t(289873),
    C = t(152367),
    k = t(661531),
    I = t(976860),
    S = t(948230),
    A = t(783791),
    y = t(998939),
    V = t(972786);
t(957907);
var _ = t(818085),
    T = t(375708),
    P = t(554177);
function w(l) {
    let { className: e } = l;
    return (0, a.jsx)("span", {
        role: "img",
        "aria-label": T.intl.string(_.default.ui2IQ2),
        className: s()(P.lU, P.jP, e),
    });
}
var D = t(321210),
    B = t(477155),
    R = t(742589),
    H = t(833576);
function z(l) {
    let { title: e, actions: t, onBack: i } = l;
    return (0, a.jsxs)(R.A, {
        hideSearch: !0,
        toolbar: t,
        className: H.w,
        "aria-label": e,
        children: [
            null == i
                ? (0, a.jsx)(C.D, { size: "custom", width: 20, height: 20, color: k.A.colors.TEXT_STRONG })
                : (0, a.jsx)(x.K, {
                      "aria-label": T.intl.string(T.t["13/7kX"]),
                      icon: B.r,
                      variant: "icon-only",
                      size: "sm",
                      onClick: i,
                  }),
            (0, a.jsx)(u.E, { variant: "text-md/semibold", color: "text-default", className: H.D, children: e }),
        ],
    });
}
var F = t(192308);
function G(l) {
    (0, F.openModalLazy)(async () => {
        let { default: e } = await Promise.all([t.e("53985"), t.e("90626")]).then(t.bind(t, 857337));
        return (t) => (0, a.jsx)(e, { ...t, projectId: l });
    });
}
var L = t(652215),
    O = t(746080),
    X = t(401029);
function K(l) {
    let { project: e, onSelect: t } = l,
        n = (0, c.bG)([A.A], () => A.A.isThinking(e.id), [e.id]),
        s =
            null == e.updated_at
                ? null
                : T.intl.formatToPlainString(_.default.oMDaqr, { time: d()(e.updated_at).fromNow() }),
        r = T.intl.formatToPlainString(_.default.V8EI91, { name: e.name }),
        j = i.useCallback(() => G(e.id), [e.id]);
    return (0, a.jsxs)("div", {
        className: X.OY,
        children: [
            (0, a.jsx)(o.D, {
                className: X.W6,
                onClick: t,
                children: (0, a.jsxs)("div", {
                    className: X.MM,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: X.j1,
                            children: e.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: X.h3,
                            children: [
                                (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: T.intl.string(_.default.sPSPIs),
                                }),
                                null == s
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
                                                  children: s,
                                              }),
                                          ],
                                      }),
                            ],
                        }),
                    ],
                }),
            }),
            (0, a.jsxs)("div", {
                className: X.M2,
                children: [
                    n ? (0, a.jsx)(w, { className: X.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: X.Pl,
                        children: (0, a.jsx)(m.m, {
                            text: r,
                            ariaHidden: !0,
                            children: (0, a.jsx)(x.K, {
                                icon: h.Z,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": r,
                                onClick: j,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function M(l) {
    let { project: e, projectsLoaded: t, onBack: n, guildId: s } = l,
        [r, d] = i.useState(!1),
        [c, o] = i.useState(e?.preview_application_id == null ? "no-app" : "launching"),
        N = r || "no-app" === c,
        E = null == e ? T.intl.string(T.t["3D5yo/"]) : T.intl.formatToPlainString(_.default.V8EI91, { name: e.name });
    i.useEffect(() => {
        null == e && t && (0, I.pX)(L.BVt.CHANNEL(s, O.VV.VIBEGRATIONS));
    }, [s, e, t]);
    let b = i.useCallback(async () => {
            if (null != e) {
                d(!0);
                try {
                    if (!(await (0, S.TV)(e.id)).ok) throw Error(T.intl.string(_.default.fNP6Cd));
                    (0, j.P0)((0, g.o)(T.intl.string(_.default["kvcg+H"]), f.Ck.SUCCESS));
                } catch (l) {
                    (0, j.P0)((0, g.o)(l instanceof Error ? l.message : T.intl.string(_.default.fNP6Cd), f.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [e]),
        C = i.useCallback(() => {
            null != e && G(e.id);
        }, [e]);
    return (0, a.jsxs)("div", {
        className: X.nj,
        children: [
            (0, a.jsx)(z, {
                title: e?.name ?? T.intl.string(_.default.F2dRba),
                actions:
                    null == e
                        ? null
                        : (0, a.jsxs)("div", {
                              className: X.wO,
                              children: [
                                  (0, a.jsx)(m.m, {
                                      text: E,
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(x.K, {
                                          icon: h.Z,
                                          size: "sm",
                                          variant: "icon-only",
                                          "aria-label": E,
                                          onClick: C,
                                      }),
                                  }),
                                  (0, a.jsx)(m.m, {
                                      text: T.intl.string(_.default.fYHrcD),
                                      shouldShow: "no-app" === c,
                                      asContainer: !0,
                                      children: (0, a.jsx)(p.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: T.intl.string(_.default.uAMVJ4),
                                          loading: r,
                                          disabled: N,
                                          onClick: b,
                                      }),
                                  }),
                              ],
                          }),
                onBack: n,
            }),
            (0, a.jsx)("main", {
                className: X.JX,
                children:
                    null == e
                        ? (0, a.jsxs)("div", {
                              className: X.sD,
                              children: [
                                  (0, a.jsx)(v.D, {
                                      variant: "heading-lg/semibold",
                                      children: T.intl.string(_.default.F2dRba),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: T.intl.string(_.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(p.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(_.default["42EdIV"]),
                                      onClick: S.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              D.A,
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
function U(l) {
    let {
            projects: e,
            fetchState: t,
            idea: n,
            guildId: r,
            submitting: d,
            createError: c,
            createDisabled: o,
            onSelectProject: m,
            onIdeaChange: x,
            onCreate: h,
        } = l,
        j = i.useMemo(
            () =>
                e
                    .filter(
                        (l) =>
                            l.guild_id === r ||
                            l.preview_guild_id === r ||
                            (null == l.guild_id && null == l.preview_guild_id),
                    )
                    .slice()
                    .sort((l, e) =>
                        null == l.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(l.updated_at),
                    ),
            [e, r],
        ),
        g = T.intl.string(_.default.TU9IGR);
    return (0, a.jsxs)("div", {
        className: s()(X.nj, X.a0),
        children: [
            (0, a.jsx)(z, { title: T.intl.string(_.default.Xmvb23) }),
            (0, a.jsx)(N.Ip, {
                children: (0, a.jsx)("main", {
                    className: X.rf,
                    children: (0, a.jsxs)("div", {
                        className: X.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: X.Ix,
                                children: [
                                    (0, a.jsx)(v.D, {
                                        variant: "heading-xl/semibold",
                                        children: T.intl.string(_.default["2tYpRK"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: X.DA,
                                        children: [
                                            (0, a.jsx)(E.f, {
                                                label: g,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: n,
                                                placeholder: g,
                                                error: c,
                                                onChange: x,
                                            }),
                                            (0, a.jsx)("div", {
                                                className: X.VP,
                                                children: (0, a.jsx)(p.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: T.intl.string(T.t.CumH4u),
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
                                className: X.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: X.RM,
                                        children: [
                                            (0, a.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: T.intl.string(_.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: T.intl.string(_.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == t || "loading" === t.type) && 0 === j.length
                                        ? (0, a.jsx)("div", { className: X.E8, children: (0, a.jsx)(b.y, {}) })
                                        : t?.type === "error" && 0 === j.length
                                          ? (0, a.jsxs)("div", {
                                                className: X.E8,
                                                children: [
                                                    (0, a.jsx)(u.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: T.intl.string(_.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(p.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: T.intl.string(_.default["42EdIV"]),
                                                        onClick: S.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === j.length
                                            ? (0, a.jsx)("div", {
                                                  className: X.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: X.ST,
                                                      children: [
                                                          (0, a.jsx)(C.D, {
                                                              size: "lg",
                                                              color: k.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(u.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: X.sI,
                                                              children: T.intl.string(_.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : j.map((l) =>
                                                  (0, a.jsx)(K, { project: l, onSelect: () => m(l.id) }, l.id),
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
function Y(l) {
    let { guildId: e, projectId: t } = l,
        n = (0, c.yK)([V.A], () => V.A.getAllProjects()),
        s = (0, c.bG)([V.A], () => V.A.getProjectsFetchState()),
        [r, d] = i.useState(""),
        o = t ?? null,
        [u, m] = i.useState(!1),
        [x, h] = i.useState(null),
        j = r.trim();
    i.useEffect(() => {
        (0, S.hF)();
    }, []),
        i.useEffect(() => {
            (0, S.dm)(e, o);
        }, [e, o]);
    let g = i.useCallback(async () => {
            if ("" !== j) {
                m(!0), h(null);
                try {
                    let l = await (0, S.gA)({ guild_id: e });
                    (0, y.Hc)(l), (0, y.dv)(l, j), (0, I.pX)(L.BVt.CHANNEL(e, O.VV.VIBEGRATIONS, l)), d("");
                } catch (l) {
                    h(l instanceof Error ? l.message : T.intl.string(_.default.KKkp5Y));
                } finally {
                    m(!1);
                }
            }
        }, [e, j]),
        f = i.useCallback(
            (l) => {
                (0, I.pX)(L.BVt.CHANNEL(e, O.VV.VIBEGRATIONS, l));
            },
            [e],
        ),
        p = i.useCallback(() => {
            (0, I.pX)(L.BVt.CHANNEL(e, O.VV.VIBEGRATIONS));
        }, [e]),
        v = i.useCallback((l) => {
            d(l), h(null);
        }, []),
        N = null == o ? null : (n.find((l) => l.id === o) ?? null);
    return null != o
        ? (0, a.jsx)(M, { project: N, projectsLoaded: s?.type === "success", onBack: p, guildId: e })
        : (0, a.jsx)(U, {
              projects: n,
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
