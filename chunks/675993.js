n.d(t, { Z: () => x }), n(388685), n(953529);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(115130),
    d = n(147865),
    f = n(427996),
    _ = n(906732),
    p = n(706302),
    h = n(812236),
    m = n(835473),
    g = n(70097),
    E = n(240991),
    b = n(973616),
    y = n(626135),
    O = n(783097),
    v = n(695676),
    I = n(520315),
    T = n(29380),
    S = n(783685),
    A = n(981631),
    N = n(388032),
    C = n(208733),
    R = n(430864);
function P(e, t, n) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}
let D = 1,
    L = 2000;
function x(e) {
    let { context: t, application: n, videoUrl: o, imageCoverUrl: l, sectionName: c, hasCommands: d } = e,
        _ = i.useMemo(() => {
            var e;
            return null != (e = (0, O.jD)(n)) ? e : "";
        }, [n]),
        p = (0, s.e7)([u.Z], () => u.Z.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, v.hH)(),
        [m, E] = i.useState(!1);
    i.useEffect(() => {
        h && E(!0);
    }, [h]);
    let b = null != o;
    return (0, r.jsxs)("div", {
        className: C.container,
        children: [
            b
                ? (0, r.jsxs)("div", {
                      className: C.videoContainer,
                      children: [
                          m
                              ? (0, r.jsx)(g.Z, {
                                    className: a()(C.videoCover, C.video),
                                    loop: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    src: o,
                                    poster: l,
                                })
                              : null,
                          (0, r.jsx)("img", {
                              className: C.videoCover,
                              src: l,
                              "aria-label": N.intl.string(N.t.X4IxWF),
                          }),
                      ],
                  })
                : null,
            (0, r.jsxs)("div", {
                className: b ? C.overviewContainerWithVideo : C.overviewContainerNoVideo,
                children: [
                    (0, r.jsx)(j, { application: n }),
                    (0, r.jsx)(k, { application: n }),
                    _.length > 0 ? (0, r.jsx)(B, { description: _ }) : null,
                    p
                        ? (0, r.jsx)("div", {
                              className: C.developerShelfControlsContainer,
                              children: (0, r.jsx)(f.W, {
                                  hideSearch: !0,
                                  className: C.developerShelfControls,
                              }),
                          })
                        : null,
                    (0, r.jsx)(G, {
                        context: t,
                        application: n,
                        sectionName: c,
                        isDeveloperOfThisApp: p,
                        hasCommands: d,
                    }),
                ],
            }),
            (0, r.jsx)(M, { application: n }),
        ],
    });
}
function M(e) {
    let { application: t } = e,
        n = (0, O.Cb)(t),
        i = (0, O.Hu)(t);
    return n || i
        ? (0, r.jsxs)("div", {
              className: C.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, r.jsxs)("div", {
                            className: C.monetizationDisclosureStyle,
                            children: [
                                (0, r.jsx)(c.EOn, {
                                    size: "sm",
                                    color: c.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: N.intl.string(N.t["8z5B2d"]),
                                }),
                            ],
                        })
                      : null,
                  i
                      ? (0, r.jsxs)("div", {
                            className: C.monetizationDisclosureStyle,
                            children: [
                                (0, r.jsx)(c.uMN, {
                                    size: "sm",
                                    color: c.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, r.jsx)(c.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: N.intl.string(N.t["5khEk5"]),
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
        i = (0, O.BQ)(n) ? n.name : null != (t = (0, O.$d)(n)) ? t : "",
        o = (0, O.vJ)(n);
    return (0, r.jsxs)("div", {
        className: C.titleContainer,
        children: [
            (0, r.jsx)(c.X6q, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: i,
            }),
            o
                ? (0, r.jsx)("div", {
                      className: C.partnerLabelContainer,
                      children: (0, r.jsx)(c.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: N.intl.string(N.t.LO4f0N),
                      }),
                  })
                : null,
        ],
    });
}
function k(e) {
    let { application: t } = e,
        n = i.useMemo(() => {
            var e;
            return (0, O.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, O.ye)(t)
        ? (0, r.jsxs)("div", {
              className: C.tagsContainer,
              children: [
                  (0, r.jsx)(U, { application: t }),
                  n.map((e, t) =>
                      (0, r.jsx)(
                          "div",
                          {
                              className: C.tagContainer,
                              children: (0, r.jsx)(c.Text, {
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
function U(e) {
    var t;
    let { application: n } = e;
    if (!(0, O.ye)(n)) return null;
    let i = null != (t = (0, O.BQ)(n) ? (n instanceof b.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, r.jsxs)("div", {
        className: C.tagContainer,
        children: [
            (0, r.jsx)(c.BFJ, {
                size: "xs",
                color: c.TVs.colors.INTERACTIVE_NORMAL,
            }),
            (0, r.jsx)(c.Text, {
                variant: "text-sm/semibold",
                color: "interactive-normal",
                children: (0, d.lY)(i),
            }),
        ],
    });
}
function G(e) {
    var t;
    let { context: n, application: o, sectionName: a, hasCommands: s, isDeveloperOfThisApp: u } = e,
        d = (0, h.Fs)(n, o.id),
        f = (0, m.q)(o.id),
        g = null == f || null == (t = f.bot) ? void 0 : t.id,
        E = (0, p.Z)({
            context: n,
            application: o,
            botUserId: g,
        }),
        { analyticsLocations: b } = (0, _.ZP)();
    if (
        (i.useEffect(() => {
            if (!(0, O.BQ)(o) || !(0, O.ye)(o)) return;
            let e = setTimeout(() => {
                (null == d || null == g) &&
                    y.default.track(A.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: o.id,
                        is_primary_entry_point_command_non_null: null != d,
                        is_bot_user_id_non_null: null != g,
                        show_try_it_out_button: E,
                    });
            }, L);
            return () => clearTimeout(e);
        }, [o, d, g, E]),
        !(0, O.BQ)(o) || !(0, O.ye)(o))
    )
        return null;
    let v = l.Ph.MAX;
    return null != d && null != g
        ? (0, r.jsxs)("div", {
              className: C.entrypointContainer,
              children: [
                  (0, r.jsx)("div", {
                      className: C.entryPointContainerFlexChild,
                      children: (0, r.jsx)(T.Z, {
                          context: n,
                          application: o,
                          sectionName: a,
                          primaryEntryPointCommand: d,
                          buttonSize: v,
                      }),
                  }),
                  E && null != g
                      ? (0, r.jsx)("div", {
                            className: C.entryPointContainerFlexChild,
                            children: (0, r.jsx)(S.Z, {
                                botUserId: g,
                                applicationId: o.id,
                                buttonSize: v,
                                analyticsLocations: b,
                            }),
                        })
                      : null,
              ],
          })
        : u && !s && (0, O.ye)(o)
          ? (0, r.jsx)(c.Wn, {
                className: C.primaryEntryPointWarningMessage,
                messageType: c.QYI.WARNING,
                children: N.intl.format(N.t["s/3hjI"], {}),
            })
          : null;
}
function B(e) {
    let { description: t } = e,
        [n, o] = i.useState(!0);
    i.useLayoutEffect(() => o(!1), []);
    let a = i.useMemo(() => (0, E.parseBioReact)(t), [t]),
        { ref: s, lineHeight: l, lineCount: u } = Z(),
        d = i.useMemo(() => {
            if (null == l || null == u) return { key: 0 };
            let e = l * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, D * l),
                maxHeightOverride: e,
            };
        }, [u, l]),
        { ref: f, isTransitioning: _, onTransitionEnd: p } = (0, I.Z)(w({ isExpanded: n }, d)),
        h = n || _;
    return (0, r.jsxs)("div", {
        className: C.descriptionContainer,
        children: [
            (0, r.jsx)("div", {
                ref: f,
                className: C.overflowHidden,
                onTransitionEnd: p,
                children: (0, r.jsx)(c.Text, {
                    ref: s,
                    className: R.markup,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : D,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: a,
                }),
            }),
            null != u && u > D
                ? (0, r.jsxs)(c.P3F, {
                      className: C.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, r.jsx)(c.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? N.intl.string(N.t.u4YJ8v) : N.intl.string(N.t["N/tajI"]),
                          }),
                          h
                              ? (0, r.jsx)(c.u04, {
                                    size: "sm",
                                    color: c.TVs.colors.TEXT_BRAND,
                                })
                              : (0, r.jsx)(c.CJ0, {
                                    size: "sm",
                                    color: c.TVs.colors.TEXT_BRAND,
                                }),
                      ],
                  })
                : null,
        ],
    });
}
function Z() {
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
