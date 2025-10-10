n.d(t, { Z: () => I }), n(388685), n(953529);
var l = n(951288),
    i = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(115130),
    u = n(147865),
    d = n(427996),
    p = n(906732),
    m = n(706302),
    f = n(812236),
    h = n(835473),
    v = n(70097),
    x = n(240991),
    y = n(973616),
    g = n(626135),
    b = n(783097),
    N = n(695676),
    j = n(520315),
    C = n(29380),
    E = n(783685),
    P = n(981631),
    A = n(388032),
    _ = n(208733),
    O = n(430864);
function I(e) {
    let { context: t, application: n, videoUrl: r, imageCoverUrl: s, sectionName: u, hasCommands: p } = e,
        m = i.useMemo(() => {
            var e;
            return null != (e = (0, b.jD)(n)) ? e : "";
        }, [n]),
        f = (0, o.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, N.hH)(),
        [x, y] = i.useState(!1);
    i.useEffect(() => {
        h && y(!0);
    }, [h]);
    let g = null != r;
    return (0, l.jsxs)("div", {
        className: _.container,
        children: [
            (0, l.jsxs)("div", {
                children: [
                    g
                        ? (0, l.jsxs)("div", {
                              className: _.videoContainer,
                              children: [
                                  x
                                      ? (0, l.jsx)(v.Z, {
                                            className: a()(_.videoCover, _.video),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: r,
                                            poster: s,
                                        })
                                      : null,
                                  (0, l.jsx)("img", {
                                      className: _.videoCover,
                                      src: s,
                                      "aria-label": A.intl.string(A.t.X4IxWF),
                                  }),
                              ],
                          })
                        : null,
                    (0, l.jsxs)("div", {
                        className: g ? _.overviewContainerWithVideo : _.overviewContainerNoVideo,
                        children: [
                            (0, l.jsx)(T, { application: n }),
                            (0, l.jsx)(L, { application: n }),
                            m.length > 0 ? (0, l.jsx)(w, { description: m }) : null,
                            f
                                ? (0, l.jsx)("div", {
                                      className: _.developerShelfControlsContainer,
                                      children: (0, l.jsx)(d.W, {
                                          hideSearch: !0,
                                          className: _.developerShelfControls,
                                      }),
                                  })
                                : null,
                            (0, l.jsx)(Z, {
                                context: t,
                                application: n,
                                sectionName: u,
                                isDeveloperOfThisApp: f,
                                hasCommands: p,
                            }),
                        ],
                    }),
                ],
            }),
            (0, l.jsx)(S, { application: n }),
        ],
    });
}
function S(e) {
    let { application: t } = e,
        n = (0, b.Cb)(t),
        i = (0, b.Hu)(t);
    return n || i
        ? (0, l.jsxs)("div", {
              className: _.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, l.jsxs)("div", {
                            className: _.monetizationDisclosureStyle,
                            children: [
                                (0, l.jsx)(s.EOn, {
                                    size: "sm",
                                    color: s.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, l.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: A.intl.string(A.t["8z5B2d"]),
                                }),
                            ],
                        })
                      : null,
                  i
                      ? (0, l.jsxs)("div", {
                            className: _.monetizationDisclosureStyle,
                            children: [
                                (0, l.jsx)(s.uMN, {
                                    size: "sm",
                                    color: s.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, l.jsx)(s.Text, {
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
function T(e) {
    var t;
    let { application: n } = e,
        i = (0, b.BQ)(n) ? n.name : null != (t = (0, b.$d)(n)) ? t : "",
        r = (0, b.vJ)(n);
    return (0, l.jsxs)("div", {
        className: _.titleContainer,
        children: [
            (0, l.jsx)(s.X6q, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: i,
            }),
            r
                ? (0, l.jsx)("div", {
                      className: _.partnerLabelContainer,
                      children: (0, l.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: A.intl.string(A.t.LO4f0N),
                      }),
                  })
                : null,
        ],
    });
}
function L(e) {
    let { application: t } = e,
        n = i.useMemo(() => {
            var e;
            return (0, b.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, b.ye)(t)
        ? (0, l.jsxs)("div", {
              className: _.tagsContainer,
              children: [
                  (0, l.jsx)(R, { application: t }),
                  n.map((e, t) =>
                      (0, l.jsx)(
                          "div",
                          {
                              className: _.tagContainer,
                              children: (0, l.jsx)(s.Text, {
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
function R(e) {
    var t;
    let { application: n } = e;
    if (!(0, b.ye)(n)) return null;
    let i = null != (t = (0, b.BQ)(n) ? (n instanceof y.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, l.jsxs)("div", {
        className: _.tagContainer,
        children: [
            (0, l.jsx)(s.BFJ, {
                size: "xs",
                color: s.TVs.colors.INTERACTIVE_NORMAL,
            }),
            (0, l.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "interactive-normal",
                children: (0, u.lY)(i),
            }),
        ],
    });
}
function Z(e) {
    var t;
    let { context: n, application: r, sectionName: a, hasCommands: o, isDeveloperOfThisApp: c } = e,
        u = (0, f.Fs)(n, r.id),
        d = (0, h.q)(r.id),
        v = null == d || null == (t = d.bot) ? void 0 : t.id,
        x = (0, m.Z)({
            context: n,
            application: r,
            botUserId: v,
        }),
        { analyticsLocations: y } = (0, p.ZP)();
    return (i.useEffect(() => {
        if (!(0, b.BQ)(r) || !(0, b.ye)(r)) return;
        let e = setTimeout(() => {
            (null == u || null == v) &&
                g.default.track(P.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: r.id,
                    is_primary_entry_point_command_non_null: null != u,
                    is_bot_user_id_non_null: null != v,
                    show_try_it_out_button: x,
                });
        }, 2000);
        return () => clearTimeout(e);
    }, [r, u, v, x]),
    (0, b.BQ)(r) && (0, b.ye)(r))
        ? null != u && null != v
            ? (0, l.jsxs)(s.hE2, {
                  fullWidth: !0,
                  children: [
                      (0, l.jsx)(C.Z, {
                          context: n,
                          application: r,
                          sectionName: a,
                          primaryEntryPointCommand: u,
                      }),
                      x && null != v
                          ? (0, l.jsx)(E.Z, {
                                botUserId: v,
                                applicationId: r.id,
                                analyticsLocations: y,
                            })
                          : null,
                  ],
              })
            : c && !o && (0, b.ye)(r)
              ? (0, l.jsx)(s.Wn, {
                    className: _.primaryEntryPointWarningMessage,
                    messageType: s.QYI.WARNING,
                    children: A.intl.format(A.t["s/3hjI"], {}),
                })
              : null
        : null;
}
function w(e) {
    let { description: t } = e,
        [n, r] = i.useState(!0);
    i.useLayoutEffect(() => r(!1), []);
    let a = i.useMemo(() => (0, x.parseBioReact)(t), [t]),
        {
            ref: o,
            lineHeight: c,
            lineCount: u,
        } = (function () {
            let e = i.useRef(null),
                [t, n] = i.useState(null),
                [l, r] = i.useState(null);
            return (
                i.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let l = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(l) || (n(l), r(Math.floor(t.clientHeight / l)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: l,
                }
            );
        })(),
        d = i.useMemo(() => {
            if (null == c || null == u) return { key: 0 };
            let e = c * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, 2 * c),
                maxHeightOverride: e,
            };
        }, [u, c]),
        {
            ref: p,
            isTransitioning: m,
            onTransitionEnd: f,
        } = (0, j.Z)(
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        l.forEach(function (t) {
                            var l;
                            (l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = l);
                        });
                }
                return e;
            })({ isExpanded: n }, d),
        ),
        h = n || m;
    return (0, l.jsxs)("div", {
        className: _.descriptionContainer,
        children: [
            (0, l.jsx)("div", {
                ref: p,
                className: _.overflowHidden,
                onTransitionEnd: f,
                children: (0, l.jsx)(s.Text, {
                    ref: o,
                    className: O.markup,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : 2,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: a,
                }),
            }),
            null != u && u > 2
                ? (0, l.jsxs)(s.P3F, {
                      className: _.expandableDescriptionClickable,
                      onClick: () => r((e) => !e),
                      children: [
                          (0, l.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? A.intl.string(A.t.u4YJ8v) : A.intl.string(A.t["N/tajI"]),
                          }),
                          h
                              ? (0, l.jsx)(s.u04, {
                                    size: "sm",
                                    color: s.TVs.colors.TEXT_BRAND,
                                })
                              : (0, l.jsx)(s.CJ0, {
                                    size: "sm",
                                    color: s.TVs.colors.TEXT_BRAND,
                                }),
                      ],
                  })
                : null,
        ],
    });
}
