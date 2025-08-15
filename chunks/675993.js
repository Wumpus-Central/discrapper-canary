n.d(t, { Z: () => L }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(115130),
    u = n(147865),
    d = n(427996),
    f = n(906732),
    _ = n(706302),
    p = n(812236),
    h = n(835473),
    m = n(70097),
    g = n(240991),
    E = n(973616),
    b = n(626135),
    y = n(783097),
    O = n(695676),
    v = n(520315),
    I = n(29380),
    T = n(783685),
    S = n(981631),
    A = n(388032),
    N = n(208733),
    C = n(430864);
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
function P(e) {
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
let w = 2,
    D = 2000;
function L(e) {
    let { context: t, application: n, videoUrl: o, imageCoverUrl: l, sectionName: u, hasCommands: f } = e,
        _ = i.useMemo(() => {
            var e;
            return null != (e = (0, y.jD)(n)) ? e : "";
        }, [n]),
        p = (0, s.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, O.hH)(),
        [g, E] = i.useState(!1);
    i.useEffect(() => {
        h && E(!0);
    }, [h]);
    let b = null != o;
    return (0, r.jsxs)("div", {
        className: N.container,
        children: [
            (0, r.jsxs)("div", {
                children: [
                    b
                        ? (0, r.jsxs)("div", {
                              className: N.videoContainer,
                              children: [
                                  g
                                      ? (0, r.jsx)(m.Z, {
                                            className: a()(N.videoCover, N.video),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: o,
                                            poster: l,
                                        })
                                      : null,
                                  (0, r.jsx)("img", {
                                      className: N.videoCover,
                                      src: l,
                                      "aria-label": A.intl.string(A.t.X4IxWF),
                                  }),
                              ],
                          })
                        : null,
                    (0, r.jsxs)("div", {
                        className: b ? N.overviewContainerWithVideo : N.overviewContainerNoVideo,
                        children: [
                            (0, r.jsx)(M, { application: n }),
                            (0, r.jsx)(j, { application: n }),
                            _.length > 0 ? (0, r.jsx)(G, { description: _ }) : null,
                            p
                                ? (0, r.jsx)("div", {
                                      className: N.developerShelfControlsContainer,
                                      children: (0, r.jsx)(d.W, {
                                          hideSearch: !0,
                                          className: N.developerShelfControls,
                                      }),
                                  })
                                : null,
                            (0, r.jsx)(U, {
                                context: t,
                                application: n,
                                sectionName: u,
                                isDeveloperOfThisApp: p,
                                hasCommands: f,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(x, { application: n }),
        ],
    });
}
function x(e) {
    let { application: t } = e,
        n = (0, y.Cb)(t),
        i = (0, y.Hu)(t);
    return n || i
        ? (0, r.jsxs)("div", {
              className: N.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: N.monetizationDisclosureStyle,
                            children: [
                                (0, r.jsx)(l.EOn, {
                                    size: "sm",
                                    color: l.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: A.intl.string(A.t["8z5B2d"]),
                                }),
                            ],
                        })
                      : null,
                  i
                      ? (0, r.jsxs)("div", {
                            className: N.monetizationDisclosureStyle,
                            children: [
                                (0, r.jsx)(l.uMN, {
                                    size: "sm",
                                    color: l.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: A.intl.string(A.t["5khEk5"]),
                                }),
                            ],
                        })
                      : null,
              ],
          })
        : null;
}
function M(e) {
    var t;
    let { application: n } = e,
        i = (0, y.BQ)(n) ? n.name : null != (t = (0, y.$d)(n)) ? t : "",
        o = (0, y.vJ)(n);
    return (0, r.jsxs)("div", {
        className: N.titleContainer,
        children: [
            (0, r.jsx)(l.X6q, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: i,
            }),
            o
                ? (0, r.jsx)("div", {
                      className: N.partnerLabelContainer,
                      children: (0, r.jsx)(l.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: A.intl.string(A.t.LO4f0N),
                      }),
                  })
                : null,
        ],
    });
}
function j(e) {
    let { application: t } = e,
        n = i.useMemo(() => {
            var e;
            return (0, y.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, y.ye)(t)
        ? (0, r.jsxs)("div", {
              className: N.tagsContainer,
              children: [
                  (0, r.jsx)(k, { application: t }),
                  n.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: N.tagContainer,
                              children: (0, r.jsx)(l.Text, {
                                  variant: "text-sm/semibold",
                                  color: "interactive-normal",
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
    if (!(0, y.ye)(n)) return null;
    let i = null != (t = (0, y.BQ)(n) ? (n instanceof E.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, r.jsxs)("div", {
        className: N.tagContainer,
        children: [
            (0, r.jsx)(l.BFJ, {
                size: "xs",
                color: l.TVs.colors.INTERACTIVE_NORMAL,
            }),
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                color: "interactive-normal",
                children: (0, u.lY)(i),
            }),
        ],
    });
}
function U(e) {
    var t;
    let { context: n, application: o, sectionName: a, hasCommands: s, isDeveloperOfThisApp: c } = e,
        u = (0, p.Fs)(n, o.id),
        d = (0, h.q)(o.id),
        m = null == d || null == (t = d.bot) ? void 0 : t.id,
        g = (0, _.Z)({
            context: n,
            application: o,
            botUserId: m,
        }),
        { analyticsLocations: E } = (0, f.ZP)();
    return (i.useEffect(() => {
        if (!(0, y.BQ)(o) || !(0, y.ye)(o)) return;
        let e = setTimeout(() => {
            (null == u || null == m) &&
                b.default.track(S.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: o.id,
                    is_primary_entry_point_command_non_null: null != u,
                    is_bot_user_id_non_null: null != m,
                    show_try_it_out_button: g,
                });
        }, D);
        return () => clearTimeout(e);
    }, [o, u, m, g]),
    (0, y.BQ)(o) && (0, y.ye)(o))
        ? null != u && null != m
            ? (0, r.jsxs)(l.hE2, {
                  fullWidth: !0,
                  children: [
                      (0, r.jsx)(I.Z, {
                          context: n,
                          application: o,
                          sectionName: a,
                          primaryEntryPointCommand: u,
                      }),
                      g && null != m
                          ? (0, r.jsx)(T.Z, {
                                botUserId: m,
                                applicationId: o.id,
                                analyticsLocations: E,
                            })
                          : null,
                  ],
              })
            : c && !s && (0, y.ye)(o)
              ? (0, r.jsx)(l.Wn, {
                    className: N.primaryEntryPointWarningMessage,
                    messageType: l.QYI.WARNING,
                    children: A.intl.format(A.t["s/3hjI"], {}),
                })
              : null
        : null;
}
function G(e) {
    let { description: t } = e,
        [n, o] = i.useState(!0);
    i.useLayoutEffect(() => o(!1), []);
    let a = i.useMemo(() => (0, g.parseBioReact)(t), [t]),
        { ref: s, lineHeight: c, lineCount: u } = B(),
        d = i.useMemo(() => {
            if (null == c || null == u) return { key: 0 };
            let e = c * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, w * c),
                maxHeightOverride: e,
            };
        }, [u, c]),
        { ref: f, isTransitioning: _, onTransitionEnd: p } = (0, v.Z)(P({ isExpanded: n }, d)),
        h = n || _;
    return (0, r.jsxs)("div", {
        className: N.descriptionContainer,
        children: [
            (0, r.jsx)("div", {
                ref: f,
                className: N.overflowHidden,
                onTransitionEnd: p,
                children: (0, r.jsx)(l.Text, {
                    ref: s,
                    className: C.markup,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : w,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: a,
                }),
            }),
            null != u && u > w
                ? (0, r.jsxs)(l.P3F, {
                      className: N.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, r.jsx)(l.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? A.intl.string(A.t.u4YJ8v) : A.intl.string(A.t["N/tajI"]),
                          }),
                          h
                              ? (0, r.jsx)(l.u04, {
                                    size: "sm",
                                    color: l.TVs.colors.TEXT_BRAND,
                                })
                              : (0, r.jsx)(l.CJ0, {
                                    size: "sm",
                                    color: l.TVs.colors.TEXT_BRAND,
                                }),
                      ],
                  })
                : null,
        ],
    });
}
function B() {
    let e = i.useRef(null),
        [t, n] = i.useState(null),
        [r, o] = i.useState(null);
    return (
        i.useLayoutEffect(() => {
            let t = e.current;
            if (null === t || 0 === t.clientHeight) return;
            let r = parseInt(getComputedStyle(t).lineHeight);
            isNaN(r) || (n(r), o(Math.floor(t.clientHeight / r)));
        }, []),
        {
            ref: e,
            lineHeight: t,
            lineCount: r,
        }
    );
}
