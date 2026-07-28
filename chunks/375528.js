t.r(e), t.d(e, { default: () => J });
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
    C = t(364522),
    b = t(292666),
    k = t(260598),
    S = t(289873),
    A = t(152367),
    I = t(976860),
    y = t(948230),
    V = t(783791),
    _ = t(998939),
    T = t(972786);
t(957907);
var w = t(818085),
    P = t(375708),
    D = t(554177);
function R(l) {
    let { className: e } = l;
    return (0, a.jsx)("span", {
        role: "img",
        "aria-label": P.intl.string(w.default.ui2IQ2),
        className: s()(D.lU, D.jP, e),
    });
}
var B = t(565124),
    z = t(477155),
    H = t(742589),
    L = t(833576);
function G(l) {
    let { title: e, actions: t, onBack: i } = l;
    return (0, a.jsxs)(H.A, {
        hideSearch: !0,
        toolbar: t,
        className: L.w,
        "aria-label": e,
        children: [
            null == i
                ? (0, a.jsx)(A.D, { size: "custom", width: 20, height: 20, color: x.A.colors.TEXT_STRONG })
                : (0, a.jsx)(j.K, {
                      "aria-label": P.intl.string(P.t["13/7kX"]),
                      icon: z.r,
                      variant: "icon-only",
                      size: "sm",
                      onClick: i,
                  }),
            (0, a.jsx)(u.E, { variant: "text-md/semibold", color: "text-default", className: L.D, children: e }),
        ],
    });
}
var X = t(192308);
function F(l) {
    (0, X.openModalLazy)(async () => {
        let { default: e } = await Promise.all([t.e("53985"), t.e("90626")]).then(t.bind(t, 857337));
        return (t) => (0, a.jsx)(e, { ...t, projectId: l });
    });
}
var O = t(652215),
    K = t(746080),
    M = t(401029);
function U(l) {
    let { project: e, onSelect: t } = l,
        n = (0, c.bG)([V.A], () => V.A.isThinking(e.id), [e.id]),
        s =
            null == e.updated_at
                ? null
                : P.intl.formatToPlainString(w.default.oMDaqr, { time: d()(e.updated_at).fromNow() }),
        r = P.intl.formatToPlainString(w.default.V8EI91, { name: e.name }),
        f = i.useCallback(() => F(e.id), [e.id]);
    return (0, a.jsxs)("div", {
        className: M.OY,
        children: [
            (0, a.jsx)(o.D, {
                className: M.W6,
                onClick: t,
                children: (0, a.jsxs)("div", {
                    className: M.MM,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: M.j1,
                            children: e.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: M.h3,
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
                                    children: P.intl.string(w.default.sPSPIs),
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
                className: M.M2,
                children: [
                    n ? (0, a.jsx)(R, { className: M.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: M.Pl,
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
function Y(l) {
    let { project: e, projectsLoaded: t, onBack: n, guildId: s } = l,
        [r, d] = i.useState(!1),
        [c, o] = i.useState(e?.preview_application_id == null ? "no-app" : "launching"),
        m = r || "no-app" === c,
        x = null == e ? P.intl.string(P.t["3D5yo/"]) : P.intl.formatToPlainString(w.default.V8EI91, { name: e.name });
    i.useEffect(() => {
        null == e && t && (0, I.pX)(O.BVt.CHANNEL(s, K.VV.VIBEGRATIONS));
    }, [s, e, t]);
    let C = i.useCallback(async () => {
            if (null != e) {
                d(!0);
                try {
                    if (!(await (0, y.TV)(e.id)).ok) throw Error(P.intl.string(w.default.fNP6Cd));
                    (0, f.P0)((0, p.o)(P.intl.string(w.default["kvcg+H"]), v.Ck.SUCCESS));
                } catch (l) {
                    (0, f.P0)((0, p.o)(l instanceof Error ? l.message : P.intl.string(w.default.fNP6Cd), v.Ck.FAILURE));
                } finally {
                    d(!1);
                }
            }
        }, [e]),
        b = i.useCallback(() => {
            null != e && F(e.id);
        }, [e]);
    return (0, a.jsxs)("div", {
        className: M.nj,
        children: [
            (0, a.jsx)(G, {
                title: e?.name ?? P.intl.string(w.default.F2dRba),
                actions:
                    null == e
                        ? null
                        : (0, a.jsxs)("div", {
                              className: M.wO,
                              children: [
                                  (0, a.jsx)(h.m, {
                                      text: x,
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(j.K, {
                                          icon: g.Z,
                                          size: "sm",
                                          variant: "icon-only",
                                          "aria-label": x,
                                          onClick: b,
                                      }),
                                  }),
                                  (0, a.jsx)(h.m, {
                                      text: P.intl.string(w.default.fYHrcD),
                                      shouldShow: "no-app" === c,
                                      asContainer: !0,
                                      children: (0, a.jsx)(N.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: P.intl.string(w.default.uAMVJ4),
                                          loading: r,
                                          disabled: m,
                                          onClick: C,
                                      }),
                                  }),
                              ],
                          }),
                onBack: n,
            }),
            (0, a.jsx)("main", {
                className: M.JX,
                children:
                    null == e
                        ? (0, a.jsxs)("div", {
                              className: M.sD,
                              children: [
                                  (0, a.jsx)(E.D, {
                                      variant: "heading-lg/semibold",
                                      children: P.intl.string(w.default.F2dRba),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: P.intl.string(w.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(N.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: P.intl.string(w.default["42EdIV"]),
                                      onClick: y.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              B.A,
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
function $(l) {
    let {
            projects: e,
            fetchState: t,
            title: n,
            idea: r,
            guildId: d,
            submitting: c,
            createError: o,
            createDisabled: m,
            onSelectProject: h,
            onTitleChange: j,
            onIdeaChange: g,
            onCreate: f,
        } = l,
        p = i.useMemo(
            () =>
                e
                    .filter(
                        (l) =>
                            l.guild_id === d ||
                            l.preview_guild_id === d ||
                            (null == l.guild_id && null == l.preview_guild_id),
                    )
                    .slice()
                    .sort((l, e) =>
                        null == l.updated_at ? 1 : null == e.updated_at ? -1 : e.updated_at.localeCompare(l.updated_at),
                    ),
            [e, d],
        ),
        v = P.intl.string(w.default.LcuTXC),
        I = P.intl.string(w.default.TU9IGR);
    return (0, a.jsxs)("div", {
        className: s()(M.nj, M.a0),
        children: [
            (0, a.jsx)(G, { title: P.intl.string(w.default.Xmvb23) }),
            (0, a.jsx)(C.Ip, {
                children: (0, a.jsx)("main", {
                    className: M.rf,
                    children: (0, a.jsxs)("div", {
                        className: M.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: M.Ix,
                                children: [
                                    (0, a.jsx)(E.D, {
                                        variant: "heading-xl/semibold",
                                        children: P.intl.string(w.default["2tYpRK"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: M.DA,
                                        children: [
                                            (0, a.jsx)(b.k, {
                                                value: n,
                                                maxLength: 128,
                                                placeholder: v,
                                                "aria-label": v,
                                                onChange: j,
                                            }),
                                            (0, a.jsx)(k.f, {
                                                label: I,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: r,
                                                placeholder: I,
                                                error: o,
                                                onChange: g,
                                            }),
                                            (0, a.jsx)("div", {
                                                className: M.VP,
                                                children: (0, a.jsx)(N.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: P.intl.string(P.t.CumH4u),
                                                    disabled: m,
                                                    loading: c,
                                                    onClick: f,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("section", {
                                className: M.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: M.RM,
                                        children: [
                                            (0, a.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: P.intl.string(w.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: P.intl.string(w.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == t || "loading" === t.type) && 0 === p.length
                                        ? (0, a.jsx)("div", { className: M.E8, children: (0, a.jsx)(S.y, {}) })
                                        : t?.type === "error" && 0 === p.length
                                          ? (0, a.jsxs)("div", {
                                                className: M.E8,
                                                children: [
                                                    (0, a.jsx)(u.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: P.intl.string(w.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(N.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: P.intl.string(w.default["42EdIV"]),
                                                        onClick: y.hF,
                                                    }),
                                                ],
                                            })
                                          : 0 === p.length
                                            ? (0, a.jsx)("div", {
                                                  className: M.D1,
                                                  children: (0, a.jsxs)("div", {
                                                      className: M.ST,
                                                      children: [
                                                          (0, a.jsx)(A.D, {
                                                              size: "lg",
                                                              color: x.A.colors.TEXT_SUBTLE,
                                                          }),
                                                          (0, a.jsx)(u.E, {
                                                              variant: "text-sm/normal",
                                                              color: "text-subtle",
                                                              className: M.sI,
                                                              children: P.intl.string(w.default["vqy+in"]),
                                                          }),
                                                      ],
                                                  }),
                                              })
                                            : p.map((l) =>
                                                  (0, a.jsx)(U, { project: l, onSelect: () => h(l.id) }, l.id),
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
function J(l) {
    let { guildId: e, projectId: t } = l,
        n = (0, c.yK)([T.A], () => T.A.getAllProjects()),
        s = (0, c.bG)([T.A], () => T.A.getProjectsFetchState()),
        [r, d] = i.useState(""),
        [o, u] = i.useState(""),
        m = t ?? null,
        [x, h] = i.useState(!1),
        [j, g] = i.useState(null),
        f = r.trim(),
        p = o.trim();
    i.useEffect(() => {
        (0, y.hF)();
    }, []),
        i.useEffect(() => {
            (0, y.dm)(e, m);
        }, [e, m]);
    let v = i.useCallback(async () => {
            if ("" !== f && "" !== p) {
                h(!0), g(null);
                try {
                    let l = await (0, y.gA)({ name: f, guild_id: e });
                    (0, _.Hc)(l), (0, _.dv)(l, p), (0, I.pX)(O.BVt.CHANNEL(e, K.VV.VIBEGRATIONS, l)), d(""), u("");
                } catch (l) {
                    g(l instanceof Error ? l.message : P.intl.string(w.default.KKkp5Y));
                } finally {
                    h(!1);
                }
            }
        }, [e, p, f]),
        N = i.useCallback(
            (l) => {
                (0, I.pX)(O.BVt.CHANNEL(e, K.VV.VIBEGRATIONS, l));
            },
            [e],
        ),
        E = i.useCallback(() => {
            (0, I.pX)(O.BVt.CHANNEL(e, K.VV.VIBEGRATIONS));
        }, [e]),
        C = i.useCallback((l) => {
            d(l), g(null);
        }, []),
        b = i.useCallback((l) => {
            u(l), g(null);
        }, []),
        k = null == m ? null : (n.find((l) => l.id === m) ?? null);
    return null != m
        ? (0, a.jsx)(Y, { project: k, projectsLoaded: s?.type === "success", onBack: E, guildId: e })
        : (0, a.jsx)($, {
              projects: n,
              fetchState: s,
              title: r,
              idea: o,
              guildId: e,
              submitting: x,
              createError: j,
              createDisabled: "" === f || "" === p || x,
              onSelectProject: N,
              onTitleChange: C,
              onIdeaChange: b,
              onCreate: v,
          });
}
