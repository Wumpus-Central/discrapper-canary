t.r(e), t.d(e, { default: () => $ });
var a = t(477900),
    i = t(582128),
    n = t(503698),
    s = t.n(n),
    r = t(989349),
    d = t.n(r),
    c = t(17928),
    o = t(939249),
    u = t(834730),
    m = t(323384),
    x = t(661531),
    h = t(866665),
    j = t(408278),
    g = t(625903),
    f = t(691540),
    p = t(857250),
    v = t(97483),
    N = t(821609),
    E = t(297264),
    b = t(364522),
    C = t(260598),
    k = t(289873),
    A = t(152367),
    I = t(976860),
    S = t(948230),
    y = t(783791),
    V = t(998939),
    _ = t(972786);
t(957907);
var w = t(818085),
    T = t(375708),
    P = t(554177);
function D(l) {
    let { className: e } = l;
    return (0, a.jsx)("span", {
        role: "img",
        "aria-label": T.intl.string(w.default.ui2IQ2),
        className: s()(P.lU, P.jP, e),
    });
}
var R = t(103705),
    B = t(477155),
    z = t(742589),
    H = t(833576);
function G(l) {
    let { title: e, actions: t, onBack: i } = l;
    return (0, a.jsxs)(z.A, {
        hideSearch: !0,
        toolbar: t,
        className: H.w,
        "aria-label": e,
        children: [
            null == i
                ? (0, a.jsx)(A.D, { size: "custom", width: 20, height: 20, color: x.A.colors.TEXT_STRONG })
                : (0, a.jsx)(j.K, {
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
function L(l) {
    (0, F.openModalLazy)(async () => {
        let { default: e } = await Promise.all([t.e("53985"), t.e("90626")]).then(t.bind(t, 857337));
        return (t) => (0, a.jsx)(e, { ...t, projectId: l });
    });
}
var O = t(652215),
    X = t(746080),
    K = t(401029);
function M(l) {
    let { project: e, onSelect: t } = l,
        n = (0, c.bG)([y.A], () => y.A.isThinking(e.id), [e.id]),
        s =
            null == e.updated_at
                ? null
                : T.intl.formatToPlainString(w.default.oMDaqr, { time: d()(e.updated_at).fromNow() }),
        r = T.intl.formatToPlainString(w.default.V8EI91, { name: e.name }),
        f = i.useCallback(() => L(e.id), [e.id]);
    return (0, a.jsxs)("div", {
        className: K.OY,
        children: [
            (0, a.jsx)(o.D, {
                className: K.W6,
                onClick: t,
                children: (0, a.jsxs)("div", {
                    className: K.MM,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: K.j1,
                            children: e.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: K.h3,
                            children: [
                                (0, a.jsx)(m.k, {
                                    size: "custom",
                                    width: 12,
                                    height: 12,
                                    color: x.A.unsafe_rawColors.GREEN_300.css,
                                }),
                                (0, a.jsx)(u.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: T.intl.string(w.default.sPSPIs),
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
                className: K.M2,
                children: [
                    n ? (0, a.jsx)(D, { className: K.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: K.Pl,
                        children: (0, a.jsx)(h.m, {
                            text: r,
                            ariaHidden: !0,
                            children: (0, a.jsx)(j.K, {
                                icon: g.Z,
                                size: "sm",
                                variant: "icon-only",
                                "aria-label": r,
                                onClick: f,
                            }),
                        }),
                    }),
                ],
            }),
        ],
    });
}
function U(l) {
    let { project: e, projectsLoaded: t, onBack: n, guildId: s } = l,
        [r, d] = i.useState(!1),
        [c, o] = i.useState(e?.preview_application_id == null ? "no-app" : "launching"),
        m = r || "no-app" === c,
        x = null == e ? T.intl.string(T.t["3D5yo/"]) : T.intl.formatToPlainString(w.default.V8EI91, { name: e.name });
    i.useEffect(() => {
        null == e && t && (0, I.pX)(O.BVt.CHANNEL(s, X.VV.VIBEGRATIONS));
    }, [s, e, t]);
    let b = i.useCallback(async () => {
            if (null != e) {
                d(!0);
                try {
                    if (!(await (0, S.TV)(e.id)).ok) throw Error(T.intl.string(w.default.fNP6Cd));
                    (0, f.P0)((0, p.o)(T.intl.string(w.default["kvcg+H"]), v.Ck.SUCCESS));
                } catch (l) {
                    (0, f.P0)((0, p.o)(l instanceof Error ? l.message : T.intl.string(w.default.fNP6Cd), v.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [e]),
        C = i.useCallback(() => {
            null != e && L(e.id);
        }, [e]);
    return (0, a.jsxs)("div", {
        className: K.nj,
        children: [
            (0, a.jsx)(G, {
                title: e?.name ?? T.intl.string(w.default.F2dRba),
                actions:
                    null == e
                        ? null
                        : (0, a.jsxs)("div", {
                              className: K.wO,
                              children: [
                                  (0, a.jsx)(h.m, {
                                      text: x,
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(j.K, {
                                          icon: g.Z,
                                          size: "sm",
                                          variant: "icon-only",
                                          "aria-label": x,
                                          onClick: C,
                                      }),
                                  }),
                                  (0, a.jsx)(h.m, {
                                      text: T.intl.string(w.default.fYHrcD),
                                      shouldShow: "no-app" === c,
                                      asContainer: !0,
                                      children: (0, a.jsx)(N.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: T.intl.string(w.default.uAMVJ4),
                                          loading: r,
                                          disabled: m,
                                          onClick: b,
                                      }),
                                  }),
                              ],
                          }),
                onBack: n,
            }),
            (0, a.jsx)("main", {
                className: K.JX,
                children:
                    null == e
                        ? (0, a.jsxs)("div", {
                              className: K.sD,
                              children: [
                                  (0, a.jsx)(E.D, {
                                      variant: "heading-lg/semibold",
                                      children: T.intl.string(w.default.F2dRba),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: T.intl.string(w.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: T.intl.string(w.default["42EdIV"]),
                                      onClick: S.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              R.A,
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
function Y(l) {
    let {
            projects: e,
            fetchState: t,
            idea: n,
            guildId: r,
            submitting: d,
            createError: c,
            createDisabled: o,
            onSelectProject: m,
            onIdeaChange: h,
            onCreate: j,
        } = l,
        g = i.useMemo(
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
        f = T.intl.string(w.default.TU9IGR);
    return (0, a.jsxs)("div", {
        className: s()(K.nj, K.a0),
        children: [
            (0, a.jsx)(G, { title: T.intl.string(w.default.Xmvb23) }),
            (0, a.jsx)(b.Ip, {
                children: (0, a.jsx)("main", {
                    className: K.rf,
                    children: (0, a.jsxs)("div", {
                        className: K.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: K.Ix,
                                children: [
                                    (0, a.jsx)(E.D, {
                                        variant: "heading-xl/semibold",
                                        children: T.intl.string(w.default["2tYpRK"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: K.DA,
                                        children: [
                                            (0, a.jsx)(C.f, {
                                                label: f,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: n,
                                                placeholder: f,
                                                error: c,
                                                onChange: h,
                                            }),
                                            (0, a.jsx)("div", {
                                                className: K.VP,
                                                children: (0, a.jsx)(N.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: T.intl.string(T.t.CumH4u),
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
                                className: K.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: K.RM,
                                        children: [
                                            (0, a.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: T.intl.string(w.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: T.intl.string(w.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == t || "loading" === t.type) && 0 === g.length
                                        ? (0, a.jsx)("div", { className: K.E8, children: (0, a.jsx)(k.y, {}) })
                                        : t?.type === "error" && 0 === g.length
                                          ? (0, a.jsxs)("div", {
                                                className: K.E8,
                                                children: [
                                                    (0, a.jsx)(u.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: T.intl.string(w.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: T.intl.string(w.default["42EdIV"]),
                                                        onClick: S.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === g.length
                                            ? (0, a.jsx)("div", {
                                                  className: K.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: K.ST,
                                                      children: [
                                                          (0, a.jsx)(A.D, {
                                                              size: "lg",
                                                              color: x.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(u.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: K.sI,
                                                              children: T.intl.string(w.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : g.map((l) =>
                                                  (0, a.jsx)(M, { project: l, onSelect: () => m(l.id) }, l.id),
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
function $(l) {
    let { guildId: e, projectId: t } = l,
        n = (0, c.yK)([_.A], () => _.A.getAllProjects()),
        s = (0, c.bG)([_.A], () => _.A.getProjectsFetchState()),
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
                    (0, V.Hc)(l), (0, V.dv)(l, j), (0, I.pX)(O.BVt.CHANNEL(e, X.VV.VIBEGRATIONS, l)), d("");
                } catch (l) {
                    h(l instanceof Error ? l.message : T.intl.string(w.default.KKkp5Y));
                } finally {
                    m(!1);
                }
            }
        }, [e, j]),
        f = i.useCallback(
            (l) => {
                (0, I.pX)(O.BVt.CHANNEL(e, X.VV.VIBEGRATIONS, l));
            },
            [e],
        ),
        p = i.useCallback(() => {
            (0, I.pX)(O.BVt.CHANNEL(e, X.VV.VIBEGRATIONS));
        }, [e]),
        v = i.useCallback((l) => {
            d(l), h(null);
        }, []),
        N = null == o ? null : (n.find((l) => l.id === o) ?? null);
    return null != o
        ? (0, a.jsx)(U, { project: N, projectsLoaded: s?.type === "success", onBack: p, guildId: e })
        : (0, a.jsx)(Y, {
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
