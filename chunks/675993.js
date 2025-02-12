n.d(t, { Z: () => S }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    r = n(481060),
    c = n(115130),
    d = n(147865),
    u = n(427996),
    m = n(906732),
    p = n(706302),
    h = n(812236),
    x = n(835473),
    v = n(70097),
    f = n(240991),
    N = n(973616),
    C = n(626135),
    E = n(783097),
    A = n(695676),
    I = n(520315),
    _ = n(29380),
    g = n(783685),
    P = n(981631),
    y = n(388032),
    j = n(660350),
    T = n(663362);
function S(e) {
    let { context: t, application: n, videoUrl: a, imageCoverUrl: r, sectionName: d, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, E.jD)(n)) && void 0 !== e ? e : '';
        }, [n]),
        h = (0, s.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)),
        x = null != a,
        { isSlideReady: f } = (0, A.hH)(),
        [N, C] = l.useState(!1);
    return (
        l.useEffect(() => {
            f && C(!0);
        }, [f]),
        (0, i.jsxs)('div', {
            className: j.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        x
                            ? (0, i.jsxs)('div', {
                                  className: j.videoContainer,
                                  children: [
                                      N
                                          ? (0, i.jsx)(v.Z, {
                                                className: o()(j.videoCover, j.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: a,
                                                poster: r
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: j.videoCover,
                                          src: r,
                                          'aria-label': y.intl.string(y.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: x ? j.overviewContainerWithVideo : j.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(b, { application: n }),
                                (0, i.jsx)(R, { application: n }),
                                p.length > 0 ? (0, i.jsx)(O, { description: p }) : null,
                                h
                                    ? (0, i.jsx)('div', {
                                          className: j.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: j.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(Z, {
                                    context: t,
                                    application: n,
                                    sectionName: d,
                                    isDeveloperOfThisApp: h,
                                    hasCommands: m
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(L, { application: n })
            ]
        })
    );
}
function L(e) {
    let { application: t } = e,
        n = (0, E.Cb)(t),
        l = (0, E.Hu)(t);
    return n || l
        ? (0, i.jsxs)('div', {
              className: j.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: j.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(r.EOn, {
                                    size: 'sm',
                                    color: r.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: y.intl.string(y.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  l
                      ? (0, i.jsxs)('div', {
                            className: j.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(r.uMN, {
                                    size: 'sm',
                                    color: r.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: y.intl.string(y.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function b(e) {
    var t;
    let { application: n } = e,
        l = (0, E.BQ)(n) ? n.name : null !== (t = (0, E.$d)(n)) && void 0 !== t ? t : '',
        a = (0, E.vJ)(n);
    return (0, i.jsxs)('div', {
        className: j.titleContainer,
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            a
                ? (0, i.jsx)('div', {
                      className: j.partnerLabelContainer,
                      children: (0, i.jsx)(r.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: y.intl.string(y.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function R(e) {
    let { application: t } = e,
        n = l.useMemo(() => {
            var e;
            return (0, E.BQ)(t) && null !== (e = null == t ? void 0 : t.tags) && void 0 !== e ? e : [];
        }, [t]);
    return (0, E.ye)(t)
        ? (0, i.jsxs)('div', {
              className: j.tagsContainer,
              children: [
                  (0, i.jsx)(M, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: j.tagContainer,
                              children: (0, i.jsx)(r.Text, {
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
    if (!(0, E.ye)(n)) return null;
    let l = null !== (t = (0, E.BQ)(n) ? (n instanceof N.ZP ? n.maxParticipants : n.max_participants) : 0) && void 0 !== t ? t : 0;
    return (0, i.jsxs)('div', {
        className: j.tagContainer,
        children: [
            (0, i.jsx)(r.BFJ, {
                size: 'xs',
                color: r.TVs.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(r.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, d.lY)(l)
            })
        ]
    });
}
function Z(e) {
    var t;
    let { context: n, application: a, sectionName: o, hasCommands: s, isDeveloperOfThisApp: c } = e,
        d = (0, h.Fs)(n, a.id),
        u = (0, x.q)(a.id),
        v = null == u ? void 0 : null === (t = u.bot) || void 0 === t ? void 0 : t.id,
        f = (0, p.Z)({
            context: n,
            applicationId: a.id,
            botUserId: v
        }),
        { analyticsLocations: N } = (0, m.ZP)();
    if (
        (l.useEffect(() => {
            if (!(0, E.BQ)(a) || !(0, E.ye)(a)) return;
            let e = setTimeout(() => {
                (null != d && null != v) ||
                    C.default.track(P.rMx.APP_LAUNCHER_PEP_BUTTON_NOT_RENDERED, {
                        application_id: a.id,
                        is_primary_entry_point_command_non_null: null != d,
                        is_bot_user_id_non_null: null != v,
                        show_try_it_out_button: f
                    });
            }, 2000);
            return () => clearTimeout(e);
        }, [a, d, v, f]),
        !(0, E.BQ)(a) || !(0, E.ye)(a))
    )
        return null;
    let A = r.PhG.MAX;
    return null != d && null != v
        ? (0, i.jsxs)('div', {
              className: j.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: j.entryPointContainerFlexChild,
                      children: (0, i.jsx)(_.Z, {
                          context: n,
                          application: a,
                          sectionName: o,
                          primaryEntryPointCommand: d,
                          buttonSize: A
                      })
                  }),
                  f && null != v
                      ? (0, i.jsx)('div', {
                            className: j.entryPointContainerFlexChild,
                            children: (0, i.jsx)(g.Z, {
                                botUserId: v,
                                applicationId: a.id,
                                buttonSize: A,
                                analyticsLocations: N
                            })
                        })
                      : null
              ]
          })
        : c && !s && (0, E.ye)(a)
          ? (0, i.jsx)(r.Wn, {
                className: j.primaryEntryPointWarningMessage,
                messageType: r.QYI.WARNING,
                children: y.intl.format(y.t['s/3hjI'], {})
            })
          : null;
}
function O(e) {
    let { description: t } = e,
        [n, a] = l.useState(!0);
    l.useLayoutEffect(() => a(!1), []);
    let o = l.useMemo(() => (0, f.parseBioReact)(t), [t]),
        {
            ref: s,
            lineHeight: c,
            lineCount: d
        } = (function () {
            let e = l.useRef(null),
                [t, n] = l.useState(null),
                [i, a] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let t = e.current;
                    if (null === t || 0 === t.clientHeight) return;
                    let i = parseInt(getComputedStyle(t).lineHeight);
                    !isNaN(i) && (n(i), a(Math.floor(t.clientHeight / i)));
                }, []),
                {
                    ref: e,
                    lineHeight: t,
                    lineCount: i
                }
            );
        })(),
        u = l.useMemo(() => {
            if (null == c || null == d) return { key: 0 };
            let e = c * d;
            return {
                key: 1,
                minHeightOverride: Math.min(e, 1 * c),
                maxHeightOverride: e
            };
        }, [d, c]),
        {
            ref: m,
            isTransitioning: p,
            onTransitionEnd: h
        } = (0, I.Z)({
            isExpanded: n,
            ...u
        }),
        x = n || p;
    return (0, i.jsxs)('div', {
        className: j.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: j.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(r.Text, {
                    ref: s,
                    className: T.markup,
                    variant: 'text-sm/medium',
                    lineClamp: x ? void 0 : 1,
                    style: { maxHeight: x ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(r.P3F, {
                      className: j.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: x ? y.intl.string(y.t.u4YJ8v) : y.intl.string(y.t['N/tajI'])
                          }),
                          x
                              ? (0, i.jsx)(r.u04, {
                                    size: 'sm',
                                    color: r.TVs.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(r.CJ0, {
                                    size: 'sm',
                                    color: r.TVs.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
