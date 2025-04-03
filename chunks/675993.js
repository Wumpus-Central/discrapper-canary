n.d(t, {
    Z: () => L,
    u: () => M
}),
    n(47120),
    n(266796);
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
    _ = n(240991),
    x = n(973616),
    v = n(626135),
    y = n(424602),
    N = n(783097),
    g = n(695676),
    j = n(520315),
    P = n(29380),
    E = n(783685),
    A = n(981631),
    O = n(388032),
    I = n(449549),
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
    let { context: t, application: n, videoUrl: l, imageCoverUrl: c, sectionName: s, hasCommands: d } = e,
        m = r.useMemo(() => {
            var e;
            return null != (e = (0, N.jD)(n)) ? e : '';
        }, [n]),
        f = (0, o.e7)([u.Z], () => u.Z.inDevModeForApplication(n.id)),
        h = null != l,
        b = y.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { isSlideReady: _ } = (0, g.hH)(),
        [x, v] = r.useState(!1);
    return (
        r.useEffect(() => {
            _ && v(!0);
        }, [_]),
        (0, i.jsxs)('div', {
            className: a()(
                {
                    [I.experimentLayout]: b.enabled,
                    [I.altLayout]: b.altLayout
                },
                I.container
            ),
            children: [
                b.enabled
                    ? (0, i.jsxs)('div', {
                          className: I.experimentTitleContainer,
                          children: [(0, i.jsx)(w, { application: n }), (0, i.jsx)(R, { application: n })]
                      })
                    : null,
                (0, i.jsxs)('div', {
                    children: [
                        h
                            ? (0, i.jsxs)('div', {
                                  className: I.videoContainer,
                                  children: [
                                      x
                                          ? (0, i.jsx)(C.Z, {
                                                className: a()(I.videoCover, I.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: l,
                                                poster: c
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: I.videoCover,
                                          src: c,
                                          'aria-label': O.NW.string(O.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: h ? I.overviewContainerWithVideo : I.overviewContainerNoVideo,
                            children: [
                                b.enabled ? null : (0, i.jsx)(w, { application: n }),
                                (0, i.jsx)(k, { application: n }),
                                m.length > 0 ? (0, i.jsx)(D, { description: m }) : null,
                                f
                                    ? (0, i.jsx)('div', {
                                          className: I.developerShelfControlsContainer,
                                          children: (0, i.jsx)(p.W, {
                                              hideSearch: !0,
                                              className: I.developerShelfControls
                                          })
                                      })
                                    : null,
                                b.enabled
                                    ? null
                                    : (0, i.jsx)(M, {
                                          context: t,
                                          application: n,
                                          sectionName: s,
                                          isDeveloperOfThisApp: f,
                                          hasCommands: d
                                      })
                            ]
                        })
                    ]
                }),
                b.enabled ? null : (0, i.jsx)(R, { application: n })
            ]
        })
    );
}
function R(e) {
    let { application: t } = e,
        n = (0, N.Cb)(t),
        r = (0, N.Hu)(t);
    return n || r
        ? (0, i.jsxs)('div', {
              className: I.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: I.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.EOn, {
                                    size: 'sm',
                                    color: s.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: O.NW.string(O.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
                      ? (0, i.jsxs)('div', {
                            className: I.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.uMN, {
                                    size: 'sm',
                                    color: s.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: O.NW.string(O.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function w(e) {
    var t;
    let { application: n } = e,
        r = (0, N.BQ)(n) ? n.name : null != (t = (0, N.$d)(n)) ? t : '',
        l = (0, N.vJ)(n);
    return (0, i.jsxs)('div', {
        className: I.titleContainer,
        children: [
            (0, i.jsx)(s.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: I.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: O.NW.string(O.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function k(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e;
            return (0, N.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, N.ye)(t)
        ? (0, i.jsxs)('div', {
              className: I.tagsContainer,
              children: [
                  (0, i.jsx)(Z, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: I.tagContainer,
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
function Z(e) {
    var t;
    let { application: n } = e;
    if (!(0, N.ye)(n)) return null;
    let r = null != (t = (0, N.BQ)(n) ? (n instanceof x.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)('div', {
        className: I.tagContainer,
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
function M(e) {
    var t;
    let { context: n, application: l, sectionName: o, hasCommands: u, isDeveloperOfThisApp: d } = e,
        p = (0, h.Fs)(n, l.id),
        C = (0, b.q)(l.id),
        _ = null == C || null == (t = C.bot) ? void 0 : t.id,
        x = (0, f.Z)({
            context: n,
            applicationId: l.id,
            botUserId: _
        }),
        { analyticsLocations: g } = (0, m.ZP)(),
        [j, S] = r.useState(!1),
        L = y.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, N.BQ)(l) || !(0, N.ye)(l)) return;
            let e = setTimeout(() => {
                (null == p || null == _) &&
                    v.default.track(A.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != p,
                        is_bot_user_id_non_null: null != _,
                        show_try_it_out_button: x
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, p, _, x]),
        !(0, N.BQ)(l) || !(0, N.ye)(l))
    )
        return null;
    let R = s.PhG.MAX;
    return null != p && null != _
        ? (0, i.jsxs)('div', {
              className: a()(
                  {
                      [I.experimentLayout]: L.enabled,
                      [I.altLayout]: L.altLayout
                  },
                  I.entrypointContainer
              ),
              children: [
                  (0, i.jsx)('div', {
                      className: I.entryPointContainerFlexChild,
                      children: (0, i.jsx)(P.Z, {
                          context: n,
                          application: l,
                          sectionName: o,
                          primaryEntryPointCommand: p,
                          buttonSize: R,
                          playSolo: j
                      })
                  }),
                  x && null != _
                      ? L.altLayout
                          ? (0, i.jsx)('div', {
                                className: I.altLayout,
                                children: (0, i.jsx)('div', {
                                    className: I.entryPointContainerFlexChild,
                                    children: (0, i.jsx)(s.XZJ, {
                                        className: I.entryPointCheckbox,
                                        value: j,
                                        onChange: () => S(!j),
                                        children: (0, i.jsxs)(s.Text, {
                                            variant: 'text-sm/medium',
                                            className: I.entryPointCheckboxLabel,
                                            children: [
                                                O.NW.string(O.t['e+CzPj']),
                                                (0, i.jsx)(s.ua7, {
                                                    text: O.NW.string(O.t.QOZI8f),
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
                                className: I.entryPointContainerFlexChild,
                                children: (0, i.jsx)(E.Z, {
                                    botUserId: _,
                                    applicationId: l.id,
                                    buttonSize: R,
                                    analyticsLocations: g
                                })
                            })
                      : null
              ]
          })
        : d && !u && (0, N.ye)(l)
          ? (0, i.jsx)(s.Wn, {
                className: I.primaryEntryPointWarningMessage,
                messageType: s.QYI.WARNING,
                children: O.NW.format(O.t['s/3hjI'], {})
            })
          : null;
}
function D(e) {
    let { description: t } = e,
        n = y.PM.useExperiment({ location: 'AppLauncherProfile.Description()' }),
        [l, a] = r.useState(!0);
    r.useLayoutEffect(() => a(n.enabled), [n]);
    let o = r.useMemo(() => (0, _.parseBioReact)(t), [t]),
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
        className: I.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: I.overflowHidden,
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
                      className: I.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? O.NW.string(O.t.u4YJ8v) : O.NW.string(O.t['N/tajI'])
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
