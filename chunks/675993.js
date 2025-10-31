n.d(t, { Z: () => I }), n(388685), n(953529);
var i = n(951288),
    l = n(647438),
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
    y = n(240991),
    g = n(973616),
    x = n(626135),
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
        m = l.useMemo(() => {
            var e;
            return null != (e = (0, b.jD)(n)) ? e : "";
        }, [n]),
        f = (0, o.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, N.hH)(),
        [y, g] = l.useState(!1);
    l.useEffect(() => {
        h && g(!0);
    }, [h]);
    let x = null != r;
    return (0, i.jsxs)("div", {
        className: _.container,
        children: [
            (0, i.jsxs)("div", {
                children: [
                    x
                        ? (0, i.jsxs)("div", {
                              className: _.videoContainer,
                              children: [
                                  y
                                      ? (0, i.jsx)(v.Z, {
                                            className: a()(_.videoCover, _.video),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: r,
                                            poster: s,
                                        })
                                      : null,
                                  (0, i.jsx)("img", {
                                      className: _.videoCover,
                                      src: s,
                                      "aria-label": A.intl.string(A.t.X4IxWL),
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: x ? _.overviewContainerWithVideo : _.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(T, { application: n }),
                            (0, i.jsx)(L, { application: n }),
                            m.length > 0 ? (0, i.jsx)(w, { description: m }) : null,
                            f
                                ? (0, i.jsx)("div", {
                                      className: _.developerShelfControlsContainer,
                                      children: (0, i.jsx)(d.W, {
                                          hideSearch: !0,
                                          className: _.developerShelfControls,
                                      }),
                                  })
                                : null,
                            (0, i.jsx)(Z, {
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
            (0, i.jsx)(S, { application: n }),
        ],
    });
}
function S(e) {
    let { application: t } = e,
        n = (0, b.Cb)(t),
        l = (0, b.Hu)(t);
    return n || l
        ? (0, i.jsxs)("div", {
              className: _.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)("div", {
                            className: _.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.EOn, {
                                    size: "sm",
                                    color: s.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: A.intl.string(A.t["8z5B2U"]),
                                }),
                            ],
                        })
                      : null,
                  l
                      ? (0, i.jsxs)("div", {
                            className: _.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.uMN, {
                                    size: "sm",
                                    color: s.TVs.colors.INTERACTIVE_MUTED,
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-secondary",
                                    children: A.intl.string(A.t["5khEk8"]),
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
        l = (0, b.BQ)(n) ? n.name : null != (t = (0, b.$d)(n)) ? t : "",
        r = (0, b.vJ)(n);
    return (0, i.jsxs)("div", {
        className: _.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: "heading-xl/extrabold",
                lineClamp: 1,
                children: l,
            }),
            r
                ? (0, i.jsx)("div", {
                      className: _.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: "text-xs/medium",
                          color: "text-default",
                          children: A.intl.string(A.t.LO4f0P),
                      }),
                  })
                : null,
        ],
    });
}
function L(e) {
    let { application: t } = e,
        n = l.useMemo(() => {
            var e;
            return (0, b.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, b.ye)(t)
        ? (0, i.jsxs)("div", {
              className: _.tagsContainer,
              children: [
                  (0, i.jsx)(R, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          "div",
                          {
                              className: _.tagContainer,
                              children: (0, i.jsx)(s.Text, {
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
    let l = null != (t = (0, b.BQ)(n) ? (n instanceof g.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)("div", {
        className: _.tagContainer,
        children: [
            (0, i.jsx)(s.BFJ, {
                size: "xs",
                color: s.TVs.colors.INTERACTIVE_NORMAL,
            }),
            (0, i.jsx)(s.Text, {
                variant: "text-sm/semibold",
                color: "interactive-normal",
                children: (0, u.lY)(l),
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
        y = (0, m.Z)({
            context: n,
            application: r,
            botUserId: v,
        }),
        { analyticsLocations: g } = (0, p.ZP)();
    return (l.useEffect(() => {
        if (!(0, b.BQ)(r) || !(0, b.ye)(r)) return;
        let e = setTimeout(() => {
            (null == u || null == v) &&
                x.default.track(P.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                    application_id: r.id,
                    is_primary_entry_point_command_non_null: null != u,
                    is_bot_user_id_non_null: null != v,
                    show_try_it_out_button: y,
                });
        }, 2000);
        return () => clearTimeout(e);
    }, [r, u, v, y]),
    (0, b.BQ)(r) && (0, b.ye)(r))
        ? null != u && null != v
            ? (0, i.jsxs)(s.ButtonGroup, {
                  fullWidth: !0,
                  children: [
                      (0, i.jsx)(C.Z, {
                          context: n,
                          application: r,
                          sectionName: a,
                          primaryEntryPointCommand: u,
                      }),
                      y && null != v
                          ? (0, i.jsx)(E.Z, {
                                botUserId: v,
                                applicationId: r.id,
                                analyticsLocations: g,
                            })
                          : null,
                  ],
              })
            : c && !o && (0, b.ye)(r)
              ? (0, i.jsx)(s.Wn, {
                    className: _.primaryEntryPointWarningMessage,
                    messageType: s.QYI.WARNING,
                    children: A.intl.format(A.t["s/3hjE"], {}),
                })
              : null
        : null;
}
function w(e) {
    let { description: t } = e,
        [n, r] = l.useState(!0);
    l.useLayoutEffect(() => r(!1), []);
    let a = l.useMemo(() => (0, y.parseBioReact)(t), [t]),
        {
            ref: o,
            lineHeight: c,
            lineCount: u,
        } = (function () {
            let e = l.useRef(null),
                [t, n] = l.useState(null),
                [i, r] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(i) || (n(i), r(Math.floor(t.clientHeight / i)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: i,
                }
            );
        })(),
        d = l.useMemo(() => {
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
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0,
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({ isExpanded: n }, d),
        ),
        h = n || m;
    return (0, i.jsxs)("div", {
        className: _.descriptionContainer,
        children: [
            (0, i.jsx)("div", {
                ref: p,
                className: _.overflowHidden,
                onTransitionEnd: f,
                children: (0, i.jsx)(s.Text, {
                    ref: o,
                    className: O.markup,
                    variant: "text-sm/medium",
                    lineClamp: h ? void 0 : 2,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: a,
                }),
            }),
            null != u && u > 2
                ? (0, i.jsxs)(s.P3F, {
                      className: _.expandableDescriptionClickable,
                      onClick: () => r((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: "text-sm/semibold",
                              color: "text-brand",
                              children: h ? A.intl.string(A.t.u4YJ8g) : A.intl.string(A.t["N/tajD"]),
                          }),
                          h
                              ? (0, i.jsx)(s.u04, {
                                    size: "sm",
                                    color: s.TVs.colors.TEXT_BRAND,
                                })
                              : (0, i.jsx)(s.CJ0, {
                                    size: "sm",
                                    color: s.TVs.colors.TEXT_BRAND,
                                }),
                      ],
                  })
                : null,
        ],
    });
}
