n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(34188),
    c = n(827734),
    d = n(834730),
    u = n(700623),
    m = n(534514),
    p = n(177953),
    _ = n(825484),
    A = n(512950),
    h = n(939249),
    f = n(900797),
    x = n(847374),
    C = n(10716),
    g = n(631628),
    N = n(711765),
    E = n(688810),
    b = n(918831),
    I = n(361926),
    v = n(429913),
    y = n(607470),
    j = n(713804),
    P = n(611010),
    L = n(954571),
    T = n(735991),
    S = n(485878),
    R = n(396533),
    O = n(567367),
    k = n(382607),
    M = n(652215),
    w = n(985018),
    D = n(727510),
    U = n(992595);
function H(e) {
    let { context: t, application: n, videoUrl: a, imageCoverUrl: o, sectionName: c, hasCommands: d } = e,
        u = l.useMemo(() => (0, T.u8)(n) ?? "", [n]),
        m = (0, r.bG)([C.A], () => C.A.inDevModeForApplication(n.id)),
        { isSlideReady: p } = (0, S.uM)(),
        [_, A] = l.useState(!1);
    l.useEffect(() => {
        p && A(!0);
    }, [p]);
    let h = null != a;
    return (0, i.jsxs)("div", {
        className: D.kL,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    h
                        ? (0, i.jsxs)("div", {
                              className: D.j,
                              children: [
                                  _
                                      ? (0, i.jsx)(y.A, {
                                            className: s()(D.l3, D.Ki),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: a,
                                            poster: o,
                                        })
                                      : null,
                                  (0, i.jsx)("img", {
                                      className: D.l3,
                                      src: o,
                                      "aria-label": w.intl.string(w.t.X4IxWL),
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: h ? D.iw : D.bH,
                        children: [
                            (0, i.jsx)(W, { application: n }),
                            (0, i.jsx)(B, { application: n }),
                            u.length > 0 ? (0, i.jsx)(z, { description: u }) : null,
                            m
                                ? (0, i.jsx)("div", {
                                      className: D.G,
                                      children: (0, i.jsx)(N.F, { hideSearch: !0, className: D.bz }),
                                  })
                                : null,
                            (0, i.jsx)(F, {
                                context: t,
                                application: n,
                                sectionName: c,
                                isDeveloperOfThisApp: m,
                                hasCommands: d,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(V, { application: n }),
        ],
    });
}
function V(e) {
    let { application: t } = e,
        n = (0, T.K4)(t),
        l = (0, T.ME)(t);
    return n || l
        ? (0, i.jsxs)("div", {
              className: D.fP,
              children: [
                  n
                      ? (0, i.jsxs)("div", {
                            className: D.wi,
                            children: [
                                (0, i.jsx)(o.U, { size: "sm", color: c.A.colors.ICON_MUTED }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: w.intl.string(w.t["8z5B2U"]),
                                }),
                            ],
                        })
                      : null,
                  l
                      ? (0, i.jsxs)("div", {
                            className: D.wi,
                            children: [
                                (0, i.jsx)(u.d, { size: "sm", color: c.A.colors.ICON_MUTED }),
                                (0, i.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: w.intl.string(w.t["5khEk8"]),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
function W(e) {
    let { application: t } = e,
        n = (0, T.$B)(t) ? t.name : ((0, T.lq)(t) ?? ""),
        l = (0, T.b7)(t);
    return (0, i.jsxs)("div", {
        className: D.gn,
        children: [
            (0, i.jsx)(m.D, { variant: "heading-xl/extrabold", lineClamp: 1, children: n }),
            l
                ? (0, i.jsx)("div", {
                      className: D.s3,
                      children: (0, i.jsx)(d.E, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: w.intl.string(w.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function B(e) {
    let { application: t } = e,
        n = l.useMemo(() => ((0, T.$B)(t) ? (t?.tags ?? []) : []), [t]);
    return (0, T.Ag)(t)
        ? (0, i.jsxs)("div", {
              className: D.Pc,
              children: [
                  (0, i.jsx)(G, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          "div",
                          {
                              className: D.I8,
                              children: (0, i.jsx)(d.E, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-text-default",
                                  children: e,
                              }),
                          },
                          e + t,
                      ),
                  ),
              ],
          })
        : null;
}
function G(e) {
    let { application: t } = e;
    if (!(0, T.Ag)(t)) return null;
    let n = ((0, T.$B)(t) ? (t instanceof P.Ay ? t.maxParticipants : t.max_participants) : 0) ?? 0;
    return (0, i.jsxs)("div", {
        className: D.I8,
        children: [
            (0, i.jsx)(p.n, { size: "xs", color: c.A.colors.INTERACTIVE_TEXT_DEFAULT }),
            (0, i.jsx)(d.E, { variant: "text-sm/semibold", color: "interactive-text-default", children: (0, g.cL)(n) }),
        ],
    });
}
function F(e) {
    let { context: t, application: n, sectionName: a, hasCommands: s, isDeveloperOfThisApp: r } = e,
        o = (0, I.E0)(t, n.id),
        c = (0, v.h)(n.id),
        d = c?.bot?.id,
        u = (0, b.A)({ context: t, application: n, botUserId: d }),
        { analyticsLocations: m } = (0, E.Ay)();
    return (l.useEffect(() => {
        if (!(0, T.$B)(n) || !(0, T.Ag)(n)) return;
        let e = setTimeout(() => {
            (null == o || null == d) &&
                L.default.track(M.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: n.id,
                    is_primary_entry_point_command_non_null: null != o,
                    is_bot_user_id_non_null: null != d,
                    show_try_it_out_button: u,
                });
        }, 2e3);
        return () => clearTimeout(e);
    }, [n, o, d, u]),
    (0, T.$B)(n) && (0, T.Ag)(n))
        ? null != o && null != d
            ? (0, i.jsxs)(_.e, {
                  fullWidth: !0,
                  children: [
                      (0, i.jsx)(O.A, { context: t, application: n, sectionName: a, primaryEntryPointCommand: o }),
                      u && null != d
                          ? (0, i.jsx)(k.A, { botUserId: d, applicationId: n.id, analyticsLocations: m })
                          : null,
                  ],
              })
            : r && !s && (0, T.Ag)(n)
              ? (0, i.jsx)(A.p, {
                    className: D.ai,
                    messageType: A.Y.WARNING,
                    children: w.intl.format(w.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function z(e) {
    let { description: t } = e,
        [n, a] = l.useState(!0);
    l.useLayoutEffect(() => a(!1), []);
    let s = l.useMemo(() => (0, j.parseBioReact)(t), [t]),
        {
            ref: r,
            lineHeight: o,
            lineCount: u,
        } = (function () {
            let e = l.useRef(null),
                [t, n] = l.useState(null),
                [i, a] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(i) || (n(i), a(Math.floor(t.clientHeight / i)));
                }, []),
                { ref: e, lineHeight: t, lineCount: i }
            );
        })(),
        m = l.useMemo(() => {
            if (null == o || null == u) return { key: 0 };
            let e = o * u;
            return { key: 1, minHeightOverride: Math.min(e, 2 * o), maxHeightOverride: e };
        }, [u, o]),
        { ref: p, isTransitioning: _, onTransitionEnd: A } = (0, R.A)({ isExpanded: n, ...m }),
        C = n || _;
    return (0, i.jsxs)("div", {
        className: D.iQ,
        children: [
            (0, i.jsx)("div", {
                ref: p,
                className: D.ZT,
                onTransitionEnd: A,
                children: (0, i.jsx)(d.E, {
                    ref: r,
                    className: U.PT,
                    variant: "text-sm/medium",
                    lineClamp: C ? void 0 : 2,
                    style: { maxHeight: C ? void 0 : m.minHeightOverride },
                    children: s,
                }),
            }),
            null != u && u > 2
                ? (0, i.jsxs)(h.D, {
                      className: D.lP,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: C ? w.intl.string(w.t.u4YJ8g) : w.intl.string(w.t["N/tajD"]),
                          }),
                          C
                              ? (0, i.jsx)(f.t, { size: "sm", color: c.A.colors.TEXT_BRAND })
                              : (0, i.jsx)(x.a, { size: "sm", color: c.A.colors.TEXT_BRAND }),
                      ],
                  })
                : null,
        ],
    });
}
