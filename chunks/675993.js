n.d(t, { Z: () => _ }), n(47120), n(266796);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    s = n(481060),
    c = n(115130),
    u = n(147865),
    d = n(427996),
    m = n(906732),
    p = n(706302),
    h = n(812236),
    f = n(835473),
    v = n(70097),
    N = n(240991),
    x = n(973616),
    y = n(626135),
    b = n(783097),
    E = n(695676),
    C = n(520315),
    j = n(29380),
    g = n(783685),
    P = n(981631),
    A = n(388032),
    O = n(539382),
    I = n(368365);
function _(e) {
    let { context: t, application: n, videoUrl: r, imageCoverUrl: s, sectionName: u, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, b.jD)(n)) && void 0 !== e ? e : '';
        }, [n]),
        h = (0, a.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)),
        f = null != r,
        { isSlideReady: N } = (0, E.hH)(),
        [x, y] = l.useState(!1);
    return (
        l.useEffect(() => {
            N && y(!0);
        }, [N]),
        (0, i.jsxs)('div', {
            className: O.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        f
                            ? (0, i.jsxs)('div', {
                                  className: O.videoContainer,
                                  children: [
                                      x
                                          ? (0, i.jsx)(v.Z, {
                                                className: o()(O.videoCover, O.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: r,
                                                poster: s
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: O.videoCover,
                                          src: s,
                                          'aria-label': A.NW.string(A.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: f ? O.overviewContainerWithVideo : O.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(T, { application: n }),
                                (0, i.jsx)(L, { application: n }),
                                p.length > 0 ? (0, i.jsx)(Z, { description: p }) : null,
                                h
                                    ? (0, i.jsx)('div', {
                                          className: O.developerShelfControlsContainer,
                                          children: (0, i.jsx)(d.W, {
                                              hideSearch: !0,
                                              className: O.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(M, {
                                    context: t,
                                    application: n,
                                    sectionName: u,
                                    isDeveloperOfThisApp: h,
                                    hasCommands: m
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(S, { application: n })
            ]
        })
    );
}
function S(e) {
    let { application: t } = e,
        n = (0, b.Cb)(t),
        l = (0, b.Hu)(t);
    return n || l
        ? (0, i.jsxs)('div', {
              className: O.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: O.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.EOn, {
                                    size: 'sm',
                                    color: s.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: A.NW.string(A.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  l
                      ? (0, i.jsxs)('div', {
                            className: O.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.uMN, {
                                    size: 'sm',
                                    color: s.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: A.NW.string(A.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function T(e) {
    var t;
    let { application: n } = e,
        l = (0, b.BQ)(n) ? n.name : null !== (t = (0, b.$d)(n)) && void 0 !== t ? t : '',
        r = (0, b.vJ)(n);
    return (0, i.jsxs)('div', {
        className: O.titleContainer,
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            r
                ? (0, i.jsx)('div', {
                      className: O.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: A.NW.string(A.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function L(e) {
    let { application: t } = e,
        n = l.useMemo(() => {
            var e;
            return (0, b.BQ)(t) && null !== (e = null == t ? void 0 : t.tags) && void 0 !== e ? e : [];
        }, [t]);
    return (0, b.ye)(t)
        ? (0, i.jsxs)('div', {
              className: O.tagsContainer,
              children: [
                  (0, i.jsx)(R, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: O.tagContainer,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: e
                              })
                          },
                          e + t
                      )
                  )
              ]
          })
        : null;
}
function R(e) {
    var t;
    let { application: n } = e;
    if (!(0, b.ye)(n)) return null;
    let l = null !== (t = (0, b.BQ)(n) ? (n instanceof x.ZP ? n.maxParticipants : n.max_participants) : 0) && void 0 !== t ? t : 0;
    return (0, i.jsxs)('div', {
        className: O.tagContainer,
        children: [
            (0, i.jsx)(s.BFJ, {
                size: 'xs',
                color: s.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, u.lY)(l)
            })
        ]
    });
}
function M(e) {
    var t;
    let { context: n, application: r, sectionName: o, hasCommands: a, isDeveloperOfThisApp: c } = e,
        u = (0, h.Fs)(n, r.id),
        d = (0, f.q)(r.id),
        v = null == d ? void 0 : null === (t = d.bot) || void 0 === t ? void 0 : t.id,
        N = (0, p.Z)({
            context: n,
            applicationId: r.id,
            botUserId: v
        }),
        { analyticsLocations: x } = (0, m.ZP)();
    if (
        (l.useEffect(() => {
            if (!(0, b.BQ)(r) || !(0, b.ye)(r)) return;
            let e = setTimeout(() => {
                (null == u || null == v) &&
                    y.default.track(P.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: r.id,
                        is_primary_entry_point_command_non_null: null != u,
                        is_bot_user_id_non_null: null != v,
                        show_try_it_out_button: N
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [r, u, v, N]),
        !(0, b.BQ)(r) || !(0, b.ye)(r))
    )
        return null;
    let E = s.PhG.MAX;
    return null != u && null != v
        ? (0, i.jsxs)('div', {
              className: O.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: O.entryPointContainerFlexChild,
                      children: (0, i.jsx)(j.Z, {
                          context: n,
                          application: r,
                          sectionName: o,
                          primaryEntryPointCommand: u,
                          buttonSize: E
                      })
                  }),
                  N && null != v
                      ? (0, i.jsx)('div', {
                            className: O.entryPointContainerFlexChild,
                            children: (0, i.jsx)(g.Z, {
                                botUserId: v,
                                applicationId: r.id,
                                buttonSize: E,
                                analyticsLocations: x
                            })
                        })
                      : null
              ]
          })
        : c && !a && (0, b.ye)(r)
          ? (0, i.jsx)(s.Wn, {
                className: O.primaryEntryPointWarningMessage,
                messageType: s.QYI.WARNING,
                children: A.NW.format(A.t['s/3hjI'], {})
            })
          : null;
}
function Z(e) {
    let { description: t } = e,
        [n, r] = l.useState(!0);
    l.useLayoutEffect(() => r(!1), []);
    let o = l.useMemo(() => (0, N.parseBioReact)(t), [t]),
        {
            ref: a,
            lineHeight: c,
            lineCount: u
        } = (function () {
            let e = l.useRef(null),
                [t, n] = l.useState(null),
                [i, r] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    !isNaN(i) && (n(i), r(Math.floor(t.clientHeight / i)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: i
                }
            );
        })(),
        d = l.useMemo(() => {
            if (null == c || null == u) return { key: 0 };
            let e = c * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, +c),
                maxHeightOverride: e
            };
        }, [u, c]),
        {
            ref: m,
            isTransitioning: p,
            onTransitionEnd: h
        } = (0, C.Z)(
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        i.forEach(function (t) {
                            var i;
                            (i = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: i,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = i);
                        });
                }
                return e;
            })({ isExpanded: n }, d)
        ),
        f = n || p;
    return (0, i.jsxs)('div', {
        className: O.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: O.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(s.Text, {
                    ref: a,
                    className: I.markup,
                    variant: 'text-sm/medium',
                    lineClamp: f ? void 0 : 1,
                    style: { maxHeight: f ? void 0 : d.minHeightOverride },
                    children: o
                })
            }),
            null != u && u > 1
                ? (0, i.jsxs)(s.P3F, {
                      className: O.expandableDescriptionClickable,
                      onClick: () => r((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: f ? A.NW.string(A.t.u4YJ8v) : A.NW.string(A.t['N/tajI'])
                          }),
                          f
                              ? (0, i.jsx)(s.u04, {
                                    size: 'sm',
                                    color: s.TVs.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(s.CJ0, {
                                    size: 'sm',
                                    color: s.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
