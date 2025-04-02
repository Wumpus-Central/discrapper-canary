n.d(t, {
    Z: () => L,
    u: () => M
}),
    n(47120),
    n(266796);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(882485),
    s = n(481060),
    d = n(115130),
    u = n(147865),
    p = n(427996),
    m = n(906732),
    f = n(706302),
    h = n(812236),
    b = n(835473),
    v = n(70097),
    C = n(240991),
    _ = n(973616),
    x = n(626135),
    y = n(424602),
    N = n(783097),
    g = n(695676),
    j = n(520315),
    P = n(29380),
    E = n(783685),
    A = n(981631),
    O = n(388032),
    I = n(749262),
    S = n(50398);
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
    let { context: t, application: n, videoUrl: l, imageCoverUrl: c, sectionName: s, hasCommands: u } = e,
        m = r.useMemo(() => {
            var e;
            return null !== (e = (0, N.jD)(n)) && void 0 !== e ? e : '';
        }, [n]),
        f = (0, a.e7)([d.Z], () => d.Z.inDevModeForApplication(n.id)),
        h = null != l,
        b = y.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { isSlideReady: C } = (0, g.hH)(),
        [_, x] = r.useState(!1);
    return (
        r.useEffect(() => {
            C && x(!0);
        }, [C]),
        (0, i.jsxs)('div', {
            className: o()(
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
                                      _
                                          ? (0, i.jsx)(v.Z, {
                                                className: o()(I.videoCover, I.video),
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
                                          hasCommands: u
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
        r = (0, N.BQ)(n) ? n.name : null !== (t = (0, N.$d)(n)) && void 0 !== t ? t : '',
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
            return (0, N.BQ)(t) && null !== (e = null == t ? void 0 : t.tags) && void 0 !== e ? e : [];
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
    let r = null !== (t = (0, N.BQ)(n) ? (n instanceof _.ZP ? n.maxParticipants : n.max_participants) : 0) && void 0 !== t ? t : 0;
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
                children: (0, u.lY)(r)
            })
        ]
    });
}
function M(e) {
    var t;
    let { context: n, application: l, sectionName: a, hasCommands: d, isDeveloperOfThisApp: u } = e,
        p = (0, h.Fs)(n, l.id),
        v = (0, b.q)(l.id),
        C = null == v ? void 0 : null === (t = v.bot) || void 0 === t ? void 0 : t.id,
        _ = (0, f.Z)({
            context: n,
            applicationId: l.id,
            botUserId: C
        }),
        { analyticsLocations: g } = (0, m.ZP)(),
        [j, S] = r.useState(!1),
        L = y.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, N.BQ)(l) || !(0, N.ye)(l)) return;
            let e = setTimeout(() => {
                (null == p || null == C) &&
                    x.default.track(A.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != p,
                        is_bot_user_id_non_null: null != C,
                        show_try_it_out_button: _
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, p, C, _]),
        !(0, N.BQ)(l) || !(0, N.ye)(l))
    )
        return null;
    let R = s.PhG.MAX;
    return null != p && null != C
        ? (0, i.jsxs)('div', {
              className: o()(
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
                          sectionName: a,
                          primaryEntryPointCommand: p,
                          buttonSize: R,
                          playSolo: j
                      })
                  }),
                  _ && null != C
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
                                    botUserId: C,
                                    applicationId: l.id,
                                    buttonSize: R,
                                    analyticsLocations: g
                                })
                            })
                      : null
              ]
          })
        : u && !d && (0, N.ye)(l)
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
        [l, o] = r.useState(!0);
    r.useLayoutEffect(() => o(n.enabled), [n]);
    let a = r.useMemo(() => (0, C.parseBioReact)(t), [t]),
        {
            ref: c,
            lineHeight: d,
            lineCount: u
        } = (function () {
            let e = r.useRef(null),
                [t, n] = r.useState(null),
                [i, l] = r.useState(null);
            return (
                r.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    !isNaN(i) && (n(i), l(Math.floor(t.clientHeight / i)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: i
                }
            );
        })(),
        p = r.useMemo(() => {
            if (null == d || null == u) return { key: 0 };
            let e = d * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, +d),
                maxHeightOverride: e
            };
        }, [u, d]),
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
                    children: a
                })
            }),
            null != u && u > 1 && !n.enabled
                ? (0, i.jsxs)(s.P3F, {
                      className: I.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
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
