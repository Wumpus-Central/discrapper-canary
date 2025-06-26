n.d(t, { Z: () => O }), n(388685), n(953529);
var i = n(255367),
    l = n(73800),
    r = n(120356),
    o = n.n(r),
    a = n(442837),
    c = n(481060),
    s = n(115130),
    u = n(147865),
    d = n(427996),
    p = n(906732),
    m = n(706302),
    f = n(812236),
    h = n(835473),
    b = n(70097),
    _ = n(240991),
    C = n(973616),
    v = n(626135),
    x = n(783097),
    y = n(695676),
    g = n(520315),
    j = n(29380),
    N = n(783685),
    P = n(981631),
    E = n(388032),
    A = n(449549),
    I = n(73433);
function O(e) {
    let { context: t, application: n, videoUrl: r, imageCoverUrl: c, sectionName: u, hasCommands: p } = e,
        m = l.useMemo(() => {
            var e;
            return null != (e = (0, x.jD)(n)) ? e : '';
        }, [n]),
        f = (0, a.e7)([s.Z], () => s.Z.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, y.hH)(),
        [_, C] = l.useState(!1);
    l.useEffect(() => {
        h && C(!0);
    }, [h]);
    let v = null != r;
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            v
                ? (0, i.jsxs)('div', {
                      className: A.videoContainer,
                      children: [
                          _
                              ? (0, i.jsx)(b.Z, {
                                    className: o()(A.videoCover, A.video),
                                    loop: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    src: r,
                                    poster: c
                                })
                              : null,
                          (0, i.jsx)('img', {
                              className: A.videoCover,
                              src: c,
                              'aria-label': E.intl.string(E.t.X4IxWF)
                          })
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: v ? A.overviewContainerWithVideo : A.overviewContainerNoVideo,
                children: [
                    (0, i.jsx)(T, { application: n }),
                    (0, i.jsx)(L, { application: n }),
                    m.length > 0 ? (0, i.jsx)(k, { description: m }) : null,
                    f
                        ? (0, i.jsx)('div', {
                              className: A.developerShelfControlsContainer,
                              children: (0, i.jsx)(d.W, {
                                  hideSearch: !0,
                                  className: A.developerShelfControls
                              })
                          })
                        : null,
                    (0, i.jsx)(w, {
                        context: t,
                        application: n,
                        sectionName: u,
                        isDeveloperOfThisApp: f,
                        hasCommands: p
                    })
                ]
            }),
            (0, i.jsx)(S, { application: n })
        ]
    });
}
function S(e) {
    let { application: t } = e,
        n = (0, x.Cb)(t),
        l = (0, x.Hu)(t);
    return n || l
        ? (0, i.jsxs)('div', {
              className: A.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: A.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(c.EOn, {
                                    size: 'sm',
                                    color: c.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: E.intl.string(E.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  l
                      ? (0, i.jsxs)('div', {
                            className: A.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(c.uMN, {
                                    size: 'sm',
                                    color: c.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: E.intl.string(E.t['5khEk5'])
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
        l = (0, x.BQ)(n) ? n.name : null != (t = (0, x.$d)(n)) ? t : '',
        r = (0, x.vJ)(n);
    return (0, i.jsxs)('div', {
        className: A.titleContainer,
        children: [
            (0, i.jsx)(c.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            r
                ? (0, i.jsx)('div', {
                      className: A.partnerLabelContainer,
                      children: (0, i.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-default',
                          children: E.intl.string(E.t.LO4f0N)
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
            return (0, x.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, x.ye)(t)
        ? (0, i.jsxs)('div', {
              className: A.tagsContainer,
              children: [
                  (0, i.jsx)(R, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: A.tagContainer,
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
function R(e) {
    var t;
    let { application: n } = e;
    if (!(0, x.ye)(n)) return null;
    let l = null != (t = (0, x.BQ)(n) ? (n instanceof C.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, i.jsxs)('div', {
        className: A.tagContainer,
        children: [
            (0, i.jsx)(c.BFJ, {
                size: 'xs',
                color: c.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, u.lY)(l)
            })
        ]
    });
}
function w(e) {
    var t;
    let { context: n, application: r, sectionName: o, hasCommands: a, isDeveloperOfThisApp: s } = e,
        u = (0, f.Fs)(n, r.id),
        d = (0, h.q)(r.id),
        b = null == d || null == (t = d.bot) ? void 0 : t.id,
        _ = (0, m.Z)({
            context: n,
            application: r,
            botUserId: b
        }),
        { analyticsLocations: C } = (0, p.ZP)();
    if (
        (l.useEffect(() => {
            if (!(0, x.BQ)(r) || !(0, x.ye)(r)) return;
            let e = setTimeout(() => {
                (null == u || null == b) &&
                    v.default.track(P.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: r.id,
                        is_primary_entry_point_command_non_null: null != u,
                        is_bot_user_id_non_null: null != b,
                        show_try_it_out_button: _
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [r, u, b, _]),
        !(0, x.BQ)(r) || !(0, x.ye)(r))
    )
        return null;
    let y = c.PhG.MAX;
    return null != u && null != b
        ? (0, i.jsxs)('div', {
              className: A.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: A.entryPointContainerFlexChild,
                      children: (0, i.jsx)(j.Z, {
                          context: n,
                          application: r,
                          sectionName: o,
                          primaryEntryPointCommand: u,
                          buttonSize: y
                      })
                  }),
                  _ && null != b
                      ? (0, i.jsx)('div', {
                            className: A.entryPointContainerFlexChild,
                            children: (0, i.jsx)(N.Z, {
                                botUserId: b,
                                applicationId: r.id,
                                buttonSize: y,
                                analyticsLocations: C
                            })
                        })
                      : null
              ]
          })
        : s && !a && (0, x.ye)(r)
          ? (0, i.jsx)(c.Wn, {
                className: A.primaryEntryPointWarningMessage,
                messageType: c.QYI.WARNING,
                children: E.intl.format(E.t['s/3hjI'], {})
            })
          : null;
}
function k(e) {
    let { description: t } = e,
        [n, r] = l.useState(!0);
    l.useLayoutEffect(() => r(!1), []);
    let o = l.useMemo(() => (0, _.parseBioReact)(t), [t]),
        {
            ref: a,
            lineHeight: s,
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
                    isNaN(i) || (n(i), r(Math.floor(t.clientHeight / i)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: i
                }
            );
        })(),
        d = l.useMemo(() => {
            if (null == s || null == u) return { key: 0 };
            let e = s * u;
            return {
                key: 1,
                minHeightOverride: Math.min(e, +s),
                maxHeightOverride: e
            };
        }, [u, s]),
        {
            ref: p,
            isTransitioning: m,
            onTransitionEnd: f
        } = (0, g.Z)(
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
        h = n || m;
    return (0, i.jsxs)('div', {
        className: A.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: p,
                className: A.overflowHidden,
                onTransitionEnd: f,
                children: (0, i.jsx)(c.Text, {
                    ref: a,
                    className: I.markup,
                    variant: 'text-sm/medium',
                    lineClamp: h ? void 0 : 1,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: o
                })
            }),
            null != u && u > 1
                ? (0, i.jsxs)(c.P3F, {
                      className: A.expandableDescriptionClickable,
                      onClick: () => r((e) => !e),
                      children: [
                          (0, i.jsx)(c.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: h ? E.intl.string(E.t.u4YJ8v) : E.intl.string(E.t['N/tajI'])
                          }),
                          h
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
