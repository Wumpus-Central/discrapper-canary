n.d(t, {
    Z: () => k,
    u: () => U
}),
    n(388685),
    n(953529);
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(882485),
    c = n(481060),
    u = n(115130),
    d = n(723163),
    p = n(147865),
    m = n(427996),
    f = n(906732),
    h = n(706302),
    b = n(812236),
    C = n(835473),
    x = n(70097),
    _ = n(240991),
    y = n(973616),
    v = n(626135),
    N = n(424602),
    g = n(573188),
    j = n(783097),
    P = n(695676),
    E = n(635753),
    A = n(520315),
    I = n(29380),
    O = n(783685),
    S = n(981631),
    T = n(388032),
    L = n(449549),
    w = n(73433);
function R(e) {
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
function k(e) {
    let { context: t, application: n, videoUrl: l, imageCoverUrl: s, sectionName: p, hasCommands: f, showFriendsTab: h } = e,
        b = r.useMemo(() => {
            var e;
            return null != (e = (0, j.jD)(n)) ? e : '';
        }, [n]),
        C = (0, o.e7)([u.Z], () => u.Z.inDevModeForApplication(n.id)),
        [_, y] = r.useState(h),
        v = null != l,
        A = N.PM.useExperiment({ location: 'AppLauncherProfile' }),
        { isSlideReady: I } = (0, P.hH)(),
        [O, S] = r.useState(!1);
    r.useEffect(() => {
        I && S(!0);
    }, [I]);
    let { friends: w } = (0, d.Z)(n),
        { enabled: R } = g.X.useExperiment({ location: 'AppLauncherProfile' });
    return (0, i.jsxs)('div', {
        className: a()(
            {
                [L.experimentLayout]: A.enabled,
                [L.altLayout]: A.altLayout
            },
            L.container
        ),
        children: [
            A.enabled
                ? (0, i.jsxs)('div', {
                      className: L.experimentTitleContainer,
                      children: [(0, i.jsx)(W, { application: n }), (0, i.jsx)(M, { application: n })]
                  })
                : null,
            R && 0 !== w.length
                ? (0, i.jsxs)(c.njP, {
                      selectedItem: _ ? 'friends' : 'overview',
                      onItemSelect: (e) => {
                          'friends' === e ? y(!0) : y(!1);
                      },
                      type: 'top',
                      children: [
                          (0, i.jsx)(c.njP.Item, {
                              id: 'overview',
                              children: T.NW.string(T.t['/dp6yc'])
                          }),
                          (0, i.jsx)(c.njP.Item, {
                              id: 'friends',
                              'aria-label': (0, E.d)(!1, w).toString(),
                              children: (0, i.jsx)(E.Z, {
                                  friends: w,
                                  shortText: !1
                              })
                          })
                      ]
                  })
                : null,
            _
                ? (0, i.jsx)(Z, {
                      application: n,
                      pepButtonLabelEnabled: A.enabled,
                      children: (0, i.jsx)('div', { children: 'Friend stuff goes here' })
                  })
                : (0, i.jsxs)(Z, {
                      application: n,
                      pepButtonLabelEnabled: A.enabled,
                      children: [
                          v
                              ? (0, i.jsxs)('div', {
                                    className: L.videoContainer,
                                    children: [
                                        O
                                            ? (0, i.jsx)(x.Z, {
                                                  className: a()(L.videoCover, L.video),
                                                  loop: !0,
                                                  muted: !0,
                                                  autoPlay: !0,
                                                  src: l,
                                                  poster: s
                                              })
                                            : null,
                                        (0, i.jsx)('img', {
                                            className: L.videoCover,
                                            src: s,
                                            'aria-label': T.NW.string(T.t.X4IxWF)
                                        })
                                    ]
                                })
                              : null,
                          (0, i.jsxs)('div', {
                              className: v ? L.overviewContainerWithVideo : L.overviewContainerNoVideo,
                              children: [
                                  A.enabled ? null : (0, i.jsx)(W, { application: n }),
                                  (0, i.jsx)(D, { application: n }),
                                  b.length > 0 ? (0, i.jsx)(H, { description: b }) : null,
                                  C
                                      ? (0, i.jsx)('div', {
                                            className: L.developerShelfControlsContainer,
                                            children: (0, i.jsx)(m.W, {
                                                hideSearch: !0,
                                                className: L.developerShelfControls
                                            })
                                        })
                                      : null,
                                  A.enabled
                                      ? null
                                      : (0, i.jsx)(U, {
                                            context: t,
                                            application: n,
                                            sectionName: p,
                                            isDeveloperOfThisApp: C,
                                            hasCommands: f
                                        })
                              ]
                          })
                      ]
                  })
        ]
    });
}
function Z(e) {
    let { children: t, pepButtonLabelEnabled: n, application: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [t, n ? null : (0, i.jsx)(M, { application: r })]
    });
}
function M(e) {
    let { application: t } = e,
        n = (0, j.Cb)(t),
        r = (0, j.Hu)(t);
    return n || r
        ? (0, i.jsxs)('div', {
              className: L.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: L.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(c.EOn, {
                                    size: 'sm',
                                    color: c.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: T.NW.string(T.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  r
                      ? (0, i.jsxs)('div', {
                            className: L.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(c.uMN, {
                                    size: 'sm',
                                    color: c.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: T.NW.string(T.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function W(e) {
    var t;
    let { application: n } = e,
        r = (0, j.BQ)(n) ? n.name : null != (t = (0, j.$d)(n)) ? t : '',
        l = (0, j.vJ)(n);
    return (0, i.jsxs)('div', {
        className: L.titleContainer,
        children: [
            (0, i.jsx)(c.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: r
            }),
            l
                ? (0, i.jsx)('div', {
                      className: L.partnerLabelContainer,
                      children: (0, i.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: T.NW.string(T.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function D(e) {
    let { application: t } = e,
        n = r.useMemo(() => {
            var e;
            return (0, j.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, j.ye)(t)
        ? (0, i.jsxs)('div', {
              className: L.tagsContainer,
              children: [
                  (0, i.jsx)(B, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: L.tagContainer,
                              children: (0, i.jsx)(c.Text, {
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
function B(e) {
    var t;
    let { application: n } = e;
    if (!(0, j.ye)(n)) return null;
    let r = null != (t = (0, j.BQ)(n) ? (n instanceof y.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)('div', {
        className: L.tagContainer,
        children: [
            (0, i.jsx)(c.BFJ, {
                size: 'xs',
                color: c.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, p.lY)(r)
            })
        ]
    });
}
function U(e) {
    var t;
    let { context: n, application: l, sectionName: o, hasCommands: u, isDeveloperOfThisApp: d } = e,
        p = (0, b.Fs)(n, l.id),
        m = (0, C.q)(l.id),
        x = null == m || null == (t = m.bot) ? void 0 : t.id,
        _ = (0, h.Z)({
            context: n,
            application: l,
            botUserId: x
        }),
        { analyticsLocations: y } = (0, f.ZP)(),
        [g, P] = r.useState(!1),
        E = N.PM.useExperiment({ location: 'AppLauncherAppProfile.PrimaryEntryPointArea()' });
    if (
        (r.useEffect(() => {
            if (!(0, j.BQ)(l) || !(0, j.ye)(l)) return;
            let e = setTimeout(() => {
                (null == p || null == x) &&
                    v.default.track(S.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: l.id,
                        is_primary_entry_point_command_non_null: null != p,
                        is_bot_user_id_non_null: null != x,
                        show_try_it_out_button: _
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [l, p, x, _]),
        !(0, j.BQ)(l) || !(0, j.ye)(l))
    )
        return null;
    let A = c.PhG.MAX;
    return null != p && null != x
        ? (0, i.jsxs)('div', {
              className: a()(
                  {
                      [L.experimentLayout]: E.enabled,
                      [L.altLayout]: E.altLayout,
                      [L.noShowTryItOutButton]: !_
                  },
                  L.entrypointContainer
              ),
              children: [
                  (0, i.jsx)('div', {
                      className: L.entryPointContainerFlexChild,
                      children: (0, i.jsx)(I.Z, {
                          context: n,
                          application: l,
                          sectionName: o,
                          primaryEntryPointCommand: p,
                          buttonSize: A,
                          playSolo: g
                      })
                  }),
                  _ && null != x
                      ? E.altLayout
                          ? (0, i.jsx)('div', {
                                className: L.altLayout,
                                children: (0, i.jsx)('div', {
                                    className: L.entryPointContainerFlexChild,
                                    children: (0, i.jsx)(c.XZJ, {
                                        className: L.entryPointCheckbox,
                                        value: g,
                                        onChange: () => P(!g),
                                        children: (0, i.jsxs)(c.Text, {
                                            variant: 'text-sm/medium',
                                            className: L.entryPointCheckboxLabel,
                                            children: [
                                                T.NW.string(T.t['e+CzPj']),
                                                (0, i.jsx)(c.ua7, {
                                                    text: T.NW.string(T.t.QOZI8f),
                                                    children: (e) => {
                                                        var t, n;
                                                        return (0, i.jsx)(
                                                            s.d,
                                                            ((t = R({}, e)),
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
                                className: L.entryPointContainerFlexChild,
                                children: (0, i.jsx)(O.Z, {
                                    botUserId: x,
                                    applicationId: l.id,
                                    buttonSize: A,
                                    analyticsLocations: y
                                })
                            })
                      : null
              ]
          })
        : d && !u && (0, j.ye)(l)
          ? (0, i.jsx)(c.Wn, {
                className: L.primaryEntryPointWarningMessage,
                messageType: c.QYI.WARNING,
                children: T.NW.format(T.t['s/3hjI'], {})
            })
          : null;
}
function H(e) {
    let { description: t } = e,
        n = N.PM.useExperiment({ location: 'AppLauncherProfile.Description()' }),
        [l, a] = r.useState(!0);
    r.useLayoutEffect(() => a(n.enabled), [n]);
    let o = r.useMemo(() => (0, _.parseBioReact)(t), [t]),
        {
            ref: s,
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
        { ref: m, isTransitioning: f, onTransitionEnd: h } = (0, A.Z)(R({ isExpanded: l }, p)),
        b = l || f;
    return (0, i.jsxs)('div', {
        className: L.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: L.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(c.Text, {
                    ref: s,
                    className: w.markup,
                    variant: 'text-sm/medium',
                    lineClamp: b ? void 0 : 1,
                    style: { maxHeight: b ? void 0 : p.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1 && !n.enabled
                ? (0, i.jsxs)(c.P3F, {
                      className: L.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(c.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: b ? T.NW.string(T.t.u4YJ8v) : T.NW.string(T.t['N/tajI'])
                          }),
                          b
                              ? (0, i.jsx)(c.u04, {
                                    size: 'sm',
                                    color: c.TVs.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(c.CJ0, {
                                    size: 'sm',
                                    color: c.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
