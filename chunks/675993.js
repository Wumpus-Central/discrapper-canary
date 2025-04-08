n.d(t, {
    Z: () => L,
    u: () => D
}),
    n(388685),
    n(953529);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(882485),
    s = n(481060),
    u = n(115130),
    d = n(147865),
    p = n(427996),
    m = n(906732),
    f = n(706302),
    h = n(812236),
    b = n(835473),
    C = n(70097),
    x = n(240991),
    _ = n(973616),
    y = n(626135),
    v = n(424602),
    N = n(783097),
    g = n(695676),
    j = n(520315),
    P = n(29380),
    E = n(783685),
    A = n(981631),
    I = n(388032),
    O = n(449549),
    S = n(73433);
function T(e) {
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
}
function L(e) {
    let { context: t, application: n, videoUrl: l, imageCoverUrl: c, sectionName: s, hasCommands: d, showFriendsTab: m } = e,
        f = r.useMemo(() => {
            var e;
            return null != (e = (0, N.jD)(n)) ? e : '';
        }, [n]),
        h = (0, o.e7)([u.Z], () => u.Z.inDevModeForApplication(n.id)),
        [b, x] = r.useState(m),
        _ = null != l,
        y = v.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { isSlideReady: j } = (0, g.hH)(),
        [P, E] = r.useState(!1);
    return (
        r.useEffect(() => {
            j && E(!0);
        }, [j]),
        (0, i.jsx)('div', {
            className: a()(
                {
                    [O.experimentLayout]: y.enabled,
                    [O.altLayout]: y.altLayout
                },
                O.container
            ),
            children: b
                ? (0, i.jsx)(w, {
                      application: n,
                      pepButtonLabelEnabled: y.enabled,
                      children: (0, i.jsx)('div', { children: 'Friend stuff goes here' })
                  })
                : (0, i.jsxs)(w, {
                      application: n,
                      pepButtonLabelEnabled: y.enabled,
                      children: [
                          _
                              ? (0, i.jsxs)('div', {
                                    className: O.videoContainer,
                                    children: [
                                        P
                                            ? (0, i.jsx)(C.Z, {
                                                  className: a()(O.videoCover, O.video),
                                                  loop: !0,
                                                  muted: !0,
                                                  autoPlay: !0,
                                                  src: l,
                                                  poster: c
                                              })
                                            : null,
                                        (0, i.jsx)('img', {
                                            className: O.videoCover,
                                            src: c,
                                            'aria-label': I.NW.string(I.t.X4IxWF)
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsxs)('div', {
                              className: _ ? O.overviewContainerWithVideo : O.overviewContainerNoVideo,
                              children: [
                                  y.enabled ? null : (0, i.jsx)(k, { application: n }),
                                  (0, i.jsx)(Z, { application: n }),
                                  f.length > 0 ? (0, i.jsx)(W, { description: f }) : null,
                                  h
                                      ? (0, i.jsx)('div', {
                                            className: O.developerShelfControlsContainer,
                                            children: (0, i.jsx)(p.W, {
                                                hideSearch: !0,
                                                className: O.developerShelfControls
                                            })
                                        })
                                      : null,
                                  y.enabled
                                      ? null
                                      : (0, i.jsx)(D, {
                                            context: t,
                                            application: n,
                                            sectionName: s,
                                            isDeveloperOfThisApp: h,
                                            hasCommands: d
                                        })
                              ]
                          })
                      ]
                  })
        })
    );
}
function w(e) {
    let { children: t, pepButtonLabelEnabled: n, application: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            n
                ? (0, i.jsxs)('div', {
                      className: O.experimentTitleContainer,
                      children: [(0, i.jsx)(k, { application: r }), (0, i.jsx)(R, { application: r })]
                  })
                : null,
            t,
            n ? null : (0, i.jsx)(R, { application: r })
        ]
    });
}
function R(e) {
    let { application: t } = e,
        n = (0, N.Cb)(t),
        r = (0, N.Hu)(t);
    return n || r
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
                                    children: I.NW.string(I.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
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
                                    children: I.NW.string(I.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function k(e) {
    var t;
    let { application: n } = e,
        r = (0, N.BQ)(n) ? n.name : null != (t = (0, N.$d)(n)) ? t : '',
        l = (0, N.vJ)(n);
    return (0, i.jsxs)('div', {
        className: O.titleContainer,
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: O.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: I.NW.string(I.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function Z(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e;
            return (0, N.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, N.ye)(t)
        ? (0, i.jsxs)('div', {
              className: O.tagsContainer,
              children: [
                  (0, i.jsx)(M, { application: t }),
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
function M(e) {
    var t;
    let { application: n } = e;
    if (!(0, N.ye)(n)) return null;
    let r = null != (t = (0, N.BQ)(n) ? (n instanceof _.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
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
                children: (0, d.lY)(r)
            })
        ]
    });
}
function D(e) {
    var t;
    let { context: n, application: l, sectionName: o, hasCommands: u, isDeveloperOfThisApp: d } = e,
        p = (0, h.Fs)(n, l.id),
        C = (0, b.q)(l.id),
        x = null == C || null == (t = C.bot) ? void 0 : t.id,
        _ = (0, f.Z)({
            context: n,
            applicationId: l.id,
            botUserId: x
        }),
        { analyticsLocations: g } = (0, m.ZP)(),
        [j, S] = r.useState(!1),
        L = v.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, N.BQ)(l) || !(0, N.ye)(l)) return;
            let e = setTimeout(() => {
                (null == p || null == x) &&
                    y.default.track(A.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != p,
                        is_bot_user_id_non_null: null != x,
                        show_try_it_out_button: _
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, p, x, _]),
        !(0, N.BQ)(l) || !(0, N.ye)(l))
    )
        return null;
    let w = s.PhG.MAX;
    return null != p && null != x
        ? (0, i.jsxs)('div', {
              className: a()(
                  {
                      [O.experimentLayout]: L.enabled,
                      [O.altLayout]: L.altLayout,
                      [O.noShowTryItOutButton]: !_
                  },
                  O.entrypointContainer
              ),
              children: [
                  (0, i.jsx)('div', {
                      className: O.entryPointContainerFlexChild,
                      children: (0, i.jsx)(P.Z, {
                          context: n,
                          application: l,
                          sectionName: o,
                          primaryEntryPointCommand: p,
                          buttonSize: w,
                          playSolo: j
                      })
                  }),
                  _ && null != x
                      ? L.altLayout
                          ? (0, i.jsx)('div', {
                                className: O.altLayout,
                                children: (0, i.jsx)('div', {
                                    className: O.entryPointContainerFlexChild,
                                    children: (0, i.jsx)(s.XZJ, {
                                        className: O.entryPointCheckbox,
                                        value: j,
                                        onChange: () => S(!j),
                                        children: (0, i.jsxs)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: O.entryPointCheckboxLabel,
                                            children: [
                                                I.NW.string(I.t['e+CzPj']),
                                                (0, i.jsx)(s.ua7, {
                                                    text: I.NW.string(I.t.QOZI8f),
                                                    children: (e) => {
                                                        var t, n;
                                                        return (0, i.jsx)(
                                                            c.d,
                                                            ((t = T({}, e)),
                                                            (n = n = { size: 'xs' }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                                                : (function (e, t) {
                                                                      var n = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var i = Object.getOwnPropertySymbols(e);
                                                                          n.push.apply(n, i);
                                                                      }
                                                                      return n;
                                                                  })(Object(n)).forEach(function (e) {
                                                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                                                  }),
                                                            t)
                                                        );
                                                    }
                                                })
                                            ]
                                        })
                                    })
                                })
                            })
                          : (0, i.jsx)('div', {
                                className: O.entryPointContainerFlexChild,
                                children: (0, i.jsx)(E.Z, {
                                    botUserId: x,
                                    applicationId: l.id,
                                    buttonSize: w,
                                    analyticsLocations: g
                                })
                            })
                      : null
              ]
          })
        : d && !u && (0, N.ye)(l)
          ? (0, i.jsx)(s.Wn, {
                className: O.primaryEntryPointWarningMessage,
                messageType: s.QYI.WARNING,
                children: I.NW.format(I.t['s/3hjI'], {})
            })
          : null;
}
function W(e) {
    let { description: t } = e,
        n = v.PM.useExperiment({ location: 'AppLauncherProfile.Description()' }),
        [l, a] = r.useState(!0);
    r.useLayoutEffect(() => a(n.enabled), [n]);
    let o = r.useMemo(() => (0, x.parseBioReact)(t), [t]),
        {
            ref: c,
            lineHeight: u,
            lineCount: d
        } = (function () {
            let e = r.useRef(null),
                [t, n] = r.useState(null),
                [i, l] = r.useState(null);
            return (
                r.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    isNaN(i) || (n(i), l(Math.floor(t.clientHeight / i)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: i
                }
            );
        })(),
        p = r.useMemo(() => {
            if (null == u || null == d) return { key: 0 };
            let e = u * d;
            return {
                key: 1,
                minHeightOverride: Math.min(e, +u),
                maxHeightOverride: e
            };
        }, [d, u]),
        { ref: m, isTransitioning: f, onTransitionEnd: h } = (0, j.Z)(T({ isExpanded: l }, p)),
        b = l || f;
    return (0, i.jsxs)('div', {
        className: O.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: O.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(s.Text, {
                    ref: c,
                    className: S.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : 1,
                    style: { maxHeight: b ? void 0 : p.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1 && !n.enabled
                ? (0, i.jsxs)(s.P3F, {
                      className: O.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? I.NW.string(I.t.u4YJ8v) : I.NW.string(I.t['N/tajI'])
                          }),
                          b
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
