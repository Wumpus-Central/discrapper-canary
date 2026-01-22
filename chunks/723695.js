n.d(t, { A: () => x }), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(10716),
    u = n(631628),
    d = n(711765),
    f = n(688810),
    p = n(918831),
    _ = n(361926),
    h = n(429913),
    m = n(607470),
    g = n(713804),
    E = n(611010),
    b = n(954571),
    y = n(735991),
    O = n(485878),
    A = n(396533),
    v = n(567367),
    S = n(382607),
    I = n(652215),
    T = n(985018),
    C = n(516995),
    N = n(206314);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function w(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                R(e, t, n[t]);
            });
    }
    return e;
}
let P = 2,
    D = 2000;
function x(e) {
    let { context: t, application: n, videoUrl: a, imageCoverUrl: l, sectionName: u, hasCommands: f } = e,
        p = i.useMemo(() => {
            var e;
            return null != (e = (0, y.u8)(n)) ? e : "";
        }, [n]),
        _ = (0, o.bG)([c.A], () => c.A.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, O.uM)(),
        [g, E] = i.useState(!1);
    i.useEffect(() => {
        h && E(!0);
    }, [h]);
    let b = null != a;
    return (0, r.jsxs)("div", {
        className: C.kL,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    b
                        ? (0, r.jsxs)("div", {
                              className: C.j,
                              children: [
                                  g
                                      ? (0, r.jsx)(m.A, {
                                            className: s()(C.l3, C.Ki),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: a,
                                            poster: l,
                                        })
                                      : null,
                                  (0, r.jsx)("img", {
                                      className: C.l3,
                                      src: l,
                                      "aria-label": T.intl.string(T.t.X4IxWL),
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: b ? C.iw : C.bH,
                        children: [
                            (0, r.jsx)(j, { application: n }),
                            (0, r.jsx)(M, { application: n }),
                            p.length > 0 ? (0, r.jsx)(G, { description: p }) : null,
                            _
                                ? (0, r.jsx)("div", {
                                      className: C.G,
                                      children: (0, r.jsx)(d.F, {
                                          hideSearch: !0,
                                          className: C.bz,
                                      }),
                                  })
                                : null,
                            (0, r.jsx)(U, {
                                context: t,
                                application: n,
                                sectionName: u,
                                isDeveloperOfThisApp: _,
                                hasCommands: f,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(L, { application: n }),
        ],
    });
}
function L(e) {
    let { application: t } = e,
        n = (0, y.K4)(t),
        i = (0, y.ME)(t);
    return n || i
        ? (0, r.jsxs)("div", {
              className: C.fP,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: C.wi,
                            children: [
                                (0, r.jsx)(l.U1X, {
                                    size: "sm",
                                    color: l.LU0.colors.ICON_MUTED,
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: T.intl.string(T.t["8z5B2U"]),
                                }),
                            ],
                        })
                      : null,
                  i
                      ? (0, r.jsxs)("div", {
                            className: C.wi,
                            children: [
                                (0, r.jsx)(l.d2Y, {
                                    size: "sm",
                                    color: l.LU0.colors.ICON_MUTED,
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-subtle",
                                    children: T.intl.string(T.t["5khEk8"]),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
function j(e) {
    var t;
    let { application: n } = e,
        i = (0, y.$B)(n) ? n.name : null != (t = (0, y.lq)(n)) ? t : "",
        a = (0, y.b7)(n);
    return (0, r.jsxs)("div", {
        className: C.gn,
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: i,
            }),
            a
                ? (0, r.jsx)("div", {
                      className: C.s3,
                      children: (0, r.jsx)(l.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: T.intl.string(T.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function M(e) {
    let { application: t } = e,
        n = i.useMemo(() => {
            var e;
            return (0, y.$B)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, y.Ag)(t)
        ? (0, r.jsxs)("div", {
              className: C.Pc,
              children: [
                  (0, r.jsx)(k, { application: t }),
                  n.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: C.I8,
                              children: (0, r.jsx)(l.Text, {
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
function k(e) {
    var t;
    let { application: n } = e;
    if (!(0, y.Ag)(n)) return null;
    let i = null != (t = (0, y.$B)(n) ? (n instanceof E.Ay ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, r.jsxs)("div", {
        className: C.I8,
        children: [
            (0, r.jsx)(l.nFg, {
                size: "xs",
                color: l.LU0.colors.INTERACTIVE_TEXT_DEFAULT,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "interactive-text-default",
                children: (0, u.cL)(i),
            }),
        ],
    });
}
function U(e) {
    var t;
    let { context: n, application: a, sectionName: s, hasCommands: o, isDeveloperOfThisApp: c } = e,
        u = (0, _.E0)(n, a.id),
        d = (0, h.h)(a.id),
        m = null == d || null == (t = d.bot) ? void 0 : t.id,
        g = (0, p.A)({
            context: n,
            application: a,
            botUserId: m,
        }),
        { analyticsLocations: E } = (0, f.Ay)();
    return (i.useEffect(() => {
        if (!(0, y.$B)(a) || !(0, y.Ag)(a)) return;
        let e = setTimeout(() => {
            (null == u || null == m) &&
                b.default.track(I.HAw.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: a.id,
                    is_primary_entry_point_command_non_null: null != u,
                    is_bot_user_id_non_null: null != m,
                    show_try_it_out_button: g,
                });
        }, D);
        return () => clearTimeout(e);
    }, [a, u, m, g]),
    (0, y.$B)(a) && (0, y.Ag)(a))
        ? null != u && null != m
            ? (0, r.jsxs)(l.ButtonGroup, {
                  fullWidth: !0,
                  children: [
                      (0, r.jsx)(v.A, {
                          context: n,
                          application: a,
                          sectionName: s,
                          primaryEntryPointCommand: u,
                      }),
                      g && null != m
                          ? (0, r.jsx)(S.A, {
                                botUserId: m,
                                applicationId: a.id,
                                analyticsLocations: E,
                            })
                          : null,
                  ],
              })
            : c && !o && (0, y.Ag)(a)
              ? (0, r.jsx)(l.po8, {
                    className: C.ai,
                    messageType: l.YCn.WARNING,
                    children: T.intl.format(T.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function G(e) {
    let { description: t } = e,
        [n, a] = i.useState(!0);
    i.useLayoutEffect(() => a(!1), []);
    let s = i.useMemo(() => (0, g.parseBioReact)(t), [t]),
        { ref: o, lineHeight: c, lineCount: u } = V(),
        d = i.useMemo(() => {
            if (null == c || null == u) return { key: 0 };
            let e = c * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, P * c),
                maxHeightOverride: e,
            };
        }, [u, c]),
        { ref: f, isTransitioning: p, onTransitionEnd: _ } = (0, A.A)(w({ isExpanded: n }, d)),
        h = n || p;
    return (0, r.jsxs)("div", {
        className: C.iQ,
        children: [
            (0, r.jsx)("div", {
                ref: f,
                className: C.ZT,
                onTransitionEnd: _,
                children: (0, r.jsx)(l.Text, {
                    ref: o,
                    className: N.PT,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : P,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: s,
                }),
            }),
            null != u && u > P
                ? (0, r.jsxs)(l.DUT, {
                      className: C.lP,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? T.intl.string(T.t.u4YJ8g) : T.intl.string(T.t["N/tajD"]),
                          }),
                          h
                              ? (0, r.jsx)(l.tN5, {
                                    size: "sm",
                                    color: l.LU0.colors.TEXT_BRAND,
                                })
                              : (0, r.jsx)(l.abt, {
                                    size: "sm",
                                    color: l.LU0.colors.TEXT_BRAND,
                                }),
                      ],
                  })
                : null,
        ],
    });
}
function V() {
    let e = i.useRef(null),
        [t, n] = i.useState(null),
        [r, a] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let r = parseInt(getComputedStyle(t).lineHeight);
            isNaN(r) || (n(r), a(Math.floor(t.clientHeight / r)));
        }, []),
        {
            ref: e,
            lineHeight: t,
            lineCount: r,
        }
    );
}
