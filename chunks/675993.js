(n.d(t, { Z: () => S }), n(388685), n(953529));
var l = n(255367),
    i = n(73800),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(755721),
    c = n(481060),
    u = n(115130),
    d = n(147865),
    p = n(427996),
    m = n(906732),
    f = n(706302),
    h = n(812236),
    v = n(835473),
    y = n(70097),
    x = n(240991),
    b = n(973616),
    g = n(626135),
    j = n(783097),
    N = n(695676),
    C = n(520315),
    E = n(29380),
    P = n(783685),
    O = n(981631),
    A = n(388032),
    I = n(449549),
    _ = n(73433);
function S(e) {
    let { context: t, application: n, videoUrl: r, imageCoverUrl: s, sectionName: c, hasCommands: d } = e,
        m = i.useMemo(() => {
            var e;
            return null != (e = (0, j.jD)(n)) ? e : '';
        }, [n]),
        f = (0, o.e7)([u.Z], () => u.Z.inDevModeForApplication(n.id)),
        { isSlideReady: h } = (0, N.hH)(),
        [v, x] = i.useState(!1);
    i.useEffect(() => {
        h && x(!0);
    }, [h]);
    let b = null != r;
    return (0, l.jsxs)('div', {
        className: I.container,
        children: [
            b
                ? (0, l.jsxs)('div', {
                      className: I.videoContainer,
                      children: [
                          v
                              ? (0, l.jsx)(y.Z, {
                                    className: a()(I.videoCover, I.video),
                                    loop: !0,
                                    muted: !0,
                                    autoPlay: !0,
                                    src: r,
                                    poster: s
                                })
                              : null,
                          (0, l.jsx)('img', {
                              className: I.videoCover,
                              src: s,
                              'aria-label': A.intl.string(A.t.X4IxWF)
                          })
                      ]
                  })
                : null,
            (0, l.jsxs)('div', {
                className: b ? I.overviewContainerWithVideo : I.overviewContainerNoVideo,
                children: [
                    (0, l.jsx)(L, { application: n }),
                    (0, l.jsx)(R, { application: n }),
                    m.length > 0 ? (0, l.jsx)(k, { description: m }) : null,
                    f
                        ? (0, l.jsx)('div', {
                              className: I.developerShelfControlsContainer,
                              children: (0, l.jsx)(p.W, {
                                  hideSearch: !0,
                                  className: I.developerShelfControls
                              })
                          })
                        : null,
                    (0, l.jsx)(w, {
                        context: t,
                        application: n,
                        sectionName: c,
                        isDeveloperOfThisApp: f,
                        hasCommands: d
                    })
                ]
            }),
            (0, l.jsx)(T, { application: n })
        ]
    });
}
function T(e) {
    let { application: t } = e,
        n = (0, j.Cb)(t),
        i = (0, j.Hu)(t);
    return n || i
        ? (0, l.jsxs)('div', {
              className: I.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, l.jsxs)('div', {
                            className: I.monetizationDisclosureStyle,
                            children: [
                                (0, l.jsx)(c.EOn, {
                                    size: 'sm',
                                    color: c.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, l.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: A.intl.string(A.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  i
                      ? (0, l.jsxs)('div', {
                            className: I.monetizationDisclosureStyle,
                            children: [
                                (0, l.jsx)(c.uMN, {
                                    size: 'sm',
                                    color: c.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, l.jsx)(c.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: A.intl.string(A.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function L(e) {
    var t;
    let { application: n } = e,
        i = (0, j.BQ)(n) ? n.name : null != (t = (0, j.$d)(n)) ? t : '',
        r = (0, j.vJ)(n);
    return (0, l.jsxs)('div', {
        className: I.titleContainer,
        children: [
            (0, l.jsx)(c.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: i
            }),
            r
                ? (0, l.jsx)('div', {
                      className: I.partnerLabelContainer,
                      children: (0, l.jsx)(c.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-default',
                          children: A.intl.string(A.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function R(e) {
    let { application: t } = e,
        n = i.useMemo(() => {
            var e;
            return (0, j.BQ)(t) && null != (e = null == t ? void 0 : t.tags) ? e : [];
        }, [t]);
    return (0, j.ye)(t)
        ? (0, l.jsxs)('div', {
              className: I.tagsContainer,
              children: [
                  (0, l.jsx)(Z, { application: t }),
                  n.map((e, t) =>
                      (0, l.jsx)(
                          'div',
                          {
                              className: I.tagContainer,
                              children: (0, l.jsx)(c.Text, {
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
    if (!(0, j.ye)(n)) return null;
    let i = null != (t = (0, j.BQ)(n) ? (n instanceof b.ZP ? n.maxParticipants : n.max_participants) : 0) ? t : 0;
    return (0, l.jsxs)('div', {
        className: I.tagContainer,
        children: [
            (0, l.jsx)(c.BFJ, {
                size: 'xs',
                color: c.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, l.jsx)(c.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, d.lY)(i)
            })
        ]
    });
}
function w(e) {
    var t;
    let { context: n, application: r, sectionName: a, hasCommands: o, isDeveloperOfThisApp: u } = e,
        d = (0, h.Fs)(n, r.id),
        p = (0, v.q)(r.id),
        y = null == p || null == (t = p.bot) ? void 0 : t.id,
        x = (0, f.Z)({
            context: n,
            application: r,
            botUserId: y
        }),
        { analyticsLocations: b } = (0, m.ZP)();
    if (
        (i.useEffect(() => {
            if (!(0, j.BQ)(r) || !(0, j.ye)(r)) return;
            let e = setTimeout(() => {
                (null == d || null == y) &&
                    g.default.track(O.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: r.id,
                        is_primary_entry_point_command_non_null: null != d,
                        is_bot_user_id_non_null: null != y,
                        show_try_it_out_button: x
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [r, d, y, x]),
        !(0, j.BQ)(r) || !(0, j.ye)(r))
    )
        return null;
    let N = s.Ph.MAX;
    return null != d && null != y
        ? (0, l.jsxs)('div', {
              className: I.entrypointContainer,
              children: [
                  (0, l.jsx)('div', {
                      className: I.entryPointContainerFlexChild,
                      children: (0, l.jsx)(E.Z, {
                          context: n,
                          application: r,
                          sectionName: a,
                          primaryEntryPointCommand: d,
                          buttonSize: N
                      })
                  }),
                  x && null != y
                      ? (0, l.jsx)('div', {
                            className: I.entryPointContainerFlexChild,
                            children: (0, l.jsx)(P.Z, {
                                botUserId: y,
                                applicationId: r.id,
                                buttonSize: N,
                                analyticsLocations: b
                            })
                        })
                      : null
              ]
          })
        : u && !o && (0, j.ye)(r)
          ? (0, l.jsx)(c.Wn, {
                className: I.primaryEntryPointWarningMessage,
                messageType: c.QYI.WARNING,
                children: A.intl.format(A.t['s/3hjI'], {})
            })
          : null;
}
function k(e) {
    let { description: t } = e,
        [n, r] = i.useState(!0);
    i.useLayoutEffect(() => r(!1), []);
    let a = i.useMemo(() => (0, x.parseBioReact)(t), [t]),
        {
            ref: o,
            lineHeight: s,
            lineCount: u
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
                    lineCount: l
                }
            );
        })(),
        d = i.useMemo(() => {
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
        } = (0, C.Z)(
            (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    ('function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            var l;
                            ((l = n[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: l,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = l));
                        }));
                }
                return e;
            })({ isExpanded: n }, d)
        ),
        h = n || m;
    return (0, l.jsxs)('div', {
        className: I.descriptionContainer,
        children: [
            (0, l.jsx)('div', {
                ref: p,
                className: I.overflowHidden,
                onTransitionEnd: f,
                children: (0, l.jsx)(c.Text, {
                    ref: o,
                    className: _.markup,
                    variant: 'text-sm/medium',
                    lineClamp: h ? void 0 : 1,
                    style: { maxHeight: h ? void 0 : d.minHeightOverride },
                    children: a
                })
            }),
            null != u && u > 1
                ? (0, l.jsxs)(c.P3F, {
                      className: I.expandableDescriptionClickable,
                      onClick: () => r((e) => !e),
                      children: [
                          (0, l.jsx)(c.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: h ? A.intl.string(A.t.u4YJ8v) : A.intl.string(A.t['N/tajI'])
                          }),
                          h
                              ? (0, l.jsx)(c.u04, {
                                    size: 'sm',
                                    color: c.TVs.colors.TEXT_BRAND
                                })
                              : (0, l.jsx)(c.CJ0, {
                                    size: 'sm',
                                    color: c.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
