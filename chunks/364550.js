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
    m = t(323384),
    x = t(661531),
    h = t(866665),
    j = t(408278),
    g = t(625903),
    f = t(691540),
    p = t(857250),
    v = t(97483),
    b = t(821609),
    C = t(297264),
    k = t(364522),
    N = t(292666),
    E = t(260598),
    _ = t(289873),
    S = t(948230),
    y = t(783791),
    w = t(998939),
    A = t(972786),
    P = t(20386),
    I = t(565124),
    T = t(152367),
    D = t(477155),
    z = t(742589),
    F = t(375708),
    M = t(833576);
function R(l) {
    let { title: e, actions: t, onBack: i } = l;
    return (0, a.jsxs)(z.A, {
        hideSearch: !0,
        toolbar: t,
        className: M.w,
        "aria-label": e,
        children: [
            null == i
                ? (0, a.jsx)(T.D, { size: "custom", width: 20, height: 20, color: x.A.colors.TEXT_STRONG })
                : (0, a.jsx)(j.K, {
                      "aria-label": F.intl.string(F.t["13/7kX"]),
                      icon: D.r,
                      variant: "icon-only",
                      size: "sm",
                      onClick: i,
                  }),
            (0, a.jsx)(u.E, { variant: "text-md/semibold", color: "text-default", className: M.D, children: e }),
        ],
    });
}
var K = t(192308);
function H(l) {
    (0, K.openModalLazy)(async () => {
        let { default: e } = await Promise.all([t.e("53985"), t.e("90626")]).then(t.bind(t, 857337));
        return (t) => (0, a.jsx)(e, { ...t, projectId: l });
    });
}
var V = t(818085),
    G = t(401029);
function L(l) {
    let { project: e, onSelect: t } = l,
        n = (0, c.bG)([y.A], () => y.A.isThinking(e.id), [e.id]),
        s =
            null == e.updated_at
                ? null
                : F.intl.formatToPlainString(V.default.oMDaqr, { time: d()(e.updated_at).fromNow() }),
        r = F.intl.formatToPlainString(V.default.V8EI91, { name: e.name }),
        f = i.useCallback(() => H(e.id), [e.id]);
    return (0, a.jsxs)("div", {
        className: G.OY,
        children: [
            (0, a.jsx)(o.D, {
                className: G.W6,
                onClick: t,
                children: (0, a.jsxs)("div", {
                    className: G.MM,
                    children: [
                        (0, a.jsx)(u.E, {
                            variant: "text-md/semibold",
                            color: "text-strong",
                            className: G.j1,
                            children: e.name,
                        }),
                        (0, a.jsxs)("div", {
                            className: G.h3,
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
                                    children: F.intl.string(V.default.sPSPIs),
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
                className: G.M2,
                children: [
                    n ? (0, a.jsx)(P.T, { className: G.O$ }) : null,
                    (0, a.jsx)("div", {
                        className: G.Pl,
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
function O(l) {
    let { project: e, onBack: t } = l,
        [n, s] = i.useState(!1),
        [r, d] = i.useState(e?.preview_application_id == null ? "no-app" : "launching"),
        c = n || "no-app" === r,
        o = null == e ? F.intl.string(F.t["3D5yo/"]) : F.intl.formatToPlainString(V.default.V8EI91, { name: e.name }),
        m = i.useCallback(async () => {
            if (null != e) {
                s(!0);
                try {
                    if (!(await (0, S.TV)(e.id)).ok) throw Error(F.intl.string(V.default.fNP6Cd));
                    (0, f.P0)((0, p.o)(F.intl.string(V.default["kvcg+H"]), v.Ck.SUCCESS));
                } catch (l) {
                    (0, f.P0)((0, p.o)(l instanceof Error ? l.message : F.intl.string(V.default.fNP6Cd), v.Ck.FAILURE));
                } finally {
                    s(!1);
                }
            }
        }, [e]),
        x = i.useCallback(() => {
            null != e && H(e.id);
        }, [e]);
    return (0, a.jsxs)("div", {
        className: G.nj,
        children: [
            (0, a.jsx)(R, {
                title: e?.name ?? F.intl.string(V.default.F2dRba),
                actions:
                    null == e
                        ? null
                        : (0, a.jsxs)("div", {
                              className: G.wO,
                              children: [
                                  (0, a.jsx)(h.m, {
                                      text: o,
                                      ariaHidden: !0,
                                      children: (0, a.jsx)(j.K, {
                                          icon: g.Z,
                                          size: "sm",
                                          variant: "icon-only",
                                          "aria-label": o,
                                          onClick: x,
                                      }),
                                  }),
                                  (0, a.jsx)(h.m, {
                                      text: F.intl.string(V.default.fYHrcD),
                                      shouldShow: "no-app" === r,
                                      asContainer: !0,
                                      children: (0, a.jsx)(b.$, {
                                          variant: "primary",
                                          size: "sm",
                                          text: F.intl.string(V.default.uAMVJ4),
                                          loading: n,
                                          disabled: c,
                                          onClick: m,
                                      }),
                                  }),
                              ],
                          }),
                onBack: t,
            }),
            (0, a.jsx)("main", {
                className: G.JX,
                children:
                    null == e
                        ? (0, a.jsxs)("div", {
                              className: G.sD,
                              children: [
                                  (0, a.jsx)(C.D, {
                                      variant: "heading-lg/semibold",
                                      children: F.intl.string(V.default.F2dRba),
                                  }),
                                  (0, a.jsx)(u.E, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: F.intl.string(V.default.GnEJ3o),
                                  }),
                                  (0, a.jsx)(b.$, {
                                      variant: "secondary",
                                      size: "sm",
                                      text: F.intl.string(V.default["42EdIV"]),
                                      onClick: S.hF,
                                  }),
                              ],
                          })
                        : (0, a.jsx)(
                              I.A,
                              {
                                  projectId: e.id,
                                  appId: e.preview_application_id,
                                  chatOpen: !0,
                                  onActivityStatusChange: d,
                              },
                              e.id,
                          ),
            }),
        ],
    });
}
function X(l) {
    let {
            projects: e,
            fetchState: t,
            title: n,
            idea: r,
            guildId: d,
            submitting: c,
            createError: o,
            createDisabled: m,
            onSelectProject: x,
            onTitleChange: h,
            onIdeaChange: j,
            onCreate: g,
        } = l,
        f = i.useMemo(
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
        p = F.intl.string(V.default.LcuTXC),
        v = F.intl.string(V.default.TU9IGR);
    return (0, a.jsxs)("div", {
        className: s()(G.nj, G.a0),
        children: [
            (0, a.jsx)(R, { title: F.intl.string(V.default.Xmvb23) }),
            (0, a.jsx)(k.Ip, {
                children: (0, a.jsx)("main", {
                    className: G.rf,
                    children: (0, a.jsxs)("div", {
                        className: G.Qs,
                        children: [
                            (0, a.jsxs)("section", {
                                className: G.Ix,
                                children: [
                                    (0, a.jsx)(C.D, {
                                        variant: "heading-xl/semibold",
                                        children: F.intl.string(V.default["2tYpRK"]),
                                    }),
                                    (0, a.jsxs)("div", {
                                        className: G.DA,
                                        children: [
                                            (0, a.jsx)(N.k, {
                                                value: n,
                                                maxLength: 128,
                                                placeholder: p,
                                                "aria-label": p,
                                                onChange: h,
                                            }),
                                            (0, a.jsx)(E.f, {
                                                label: v,
                                                hideLabel: !0,
                                                rows: 5,
                                                value: r,
                                                placeholder: v,
                                                error: o,
                                                onChange: j,
                                            }),
                                            (0, a.jsx)("div", {
                                                className: G.VP,
                                                children: (0, a.jsx)(b.$, {
                                                    variant: "primary",
                                                    size: "md",
                                                    text: F.intl.string(F.t.CumH4u),
                                                    disabled: m,
                                                    loading: c,
                                                    onClick: g,
                                                }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, a.jsxs)("section", {
                                className: G.hK,
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: G.RM,
                                        children: [
                                            (0, a.jsx)(u.E, {
                                                variant: "text-md/medium",
                                                color: "text-strong",
                                                children: F.intl.string(V.default.Bo5fE3),
                                            }),
                                            (0, a.jsx)(u.E, {
                                                variant: "text-sm/normal",
                                                color: "text-subtle",
                                                children: F.intl.string(V.default.YnAFtT),
                                            }),
                                        ],
                                    }),
                                    (null == t || "loading" === t.type) && 0 === e.length
                                        ? (0, a.jsx)("div", { className: G.E8, children: (0, a.jsx)(_.y, {}) })
                                        : t?.type === "error" && 0 === e.length
                                          ? (0, a.jsxs)("div", {
                                                className: G.E8,
                                                children: [
                                                    (0, a.jsx)(u.E, {
                                                        variant: "text-sm/normal",
                                                        color: "text-muted",
                                                        children: F.intl.string(V.default["IN/HRP"]),
                                                    }),
                                                    (0, a.jsx)(b.$, {
                                                        variant: "secondary",
                                                        size: "sm",
                                                        text: F.intl.string(V.default["42EdIV"]),
                                                        onClick: S.hF,
                                                    }),
                                                ],
                                            })
                                          : f.map((l) => (0, a.jsx)(L, { project: l, onSelect: () => x(l.id) }, l.id)),
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
    let { guildId: e } = l,
        t = (0, c.yK)([A.A], () => A.A.getAllProjects()),
        n = (0, c.bG)([A.A], () => A.A.getProjectsFetchState()),
        [s, r] = i.useState(""),
        [d, o] = i.useState(""),
        [u, m] = i.useState(null),
        [x, h] = i.useState(!1),
        [j, g] = i.useState(null),
        f = s.trim(),
        p = d.trim();
    i.useEffect(() => {
        (0, S.hF)();
    }, []);
    let v = i.useCallback(async () => {
            if ("" !== f && "" !== p) {
                h(!0), g(null);
                try {
                    let l = await (0, S.gA)({ name: f });
                    await (0, S.M7)(l, { guild_id: e, preview_guild_id: e }),
                        (0, w.Hc)(l),
                        (0, w.dv)(l, p),
                        m(l),
                        r(""),
                        o("");
                } catch (l) {
                    g(l instanceof Error ? l.message : F.intl.string(V.default.KKkp5Y));
                } finally {
                    h(!1);
                }
            }
        }, [e, p, f]),
        b = i.useCallback((l) => {
            m(l);
        }, []),
        C = i.useCallback(() => {
            m(null);
        }, []),
        k = i.useCallback((l) => {
            r(l), g(null);
        }, []),
        N = i.useCallback((l) => {
            o(l), g(null);
        }, []),
        E = null == u ? null : (t.find((l) => l.id === u) ?? null);
    return null != u
        ? (0, a.jsx)(O, { project: E, onBack: C })
        : (0, a.jsx)(X, {
              projects: t,
              fetchState: n,
              title: s,
              idea: d,
              guildId: e,
              submitting: x,
              createError: j,
              createDisabled: "" === f || "" === p || x,
              onSelectProject: b,
              onTitleChange: k,
              onIdeaChange: N,
              onCreate: v,
          });
}
