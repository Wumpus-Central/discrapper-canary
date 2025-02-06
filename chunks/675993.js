n.d(t, { Z: () => j }), n(47120);
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
    C = n(783097),
    E = n(695676),
    A = n(520315),
    I = n(29380),
    _ = n(783685),
    g = n(388032),
    P = n(580062),
    y = n(665162);
function j(e) {
    let { context: t, application: n, videoUrl: a, imageCoverUrl: r, sectionName: d, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, C.jD)(n)) && void 0 !== e ? e : '';
        }, [n]),
        h = (0, s.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)),
        x = null != a,
        { isSlideReady: f } = (0, E.hH)(),
        [N, A] = l.useState(!1);
    return (
        l.useEffect(() => {
            f && A(!0);
        }, [f]),
        (0, i.jsxs)('div', {
            className: P.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        x
                            ? (0, i.jsxs)('div', {
                                  className: P.videoContainer,
                                  children: [
                                      N
                                          ? (0, i.jsx)(v.Z, {
                                                className: o()(P.videoCover, P.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: a,
                                                poster: r
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: P.videoCover,
                                          src: r,
                                          'aria-label': g.intl.string(g.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: x ? P.overviewContainerWithVideo : P.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(S, { application: n }),
                                (0, i.jsx)(L, { application: n }),
                                p.length > 0 ? (0, i.jsx)(M, { description: p }) : null,
                                h
                                    ? (0, i.jsx)('div', {
                                          className: P.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: P.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(R, {
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
                (0, i.jsx)(T, { application: n })
            ]
        })
    );
}
function T(e) {
    let { application: t } = e,
        n = (0, C.Cb)(t),
        l = (0, C.Hu)(t);
    return n || l
        ? (0, i.jsxs)('div', {
              className: P.monetizationDisclosureContainerStyle,
              children: [
                  n
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(r.EOn, {
                                    size: 'sm',
                                    color: r.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: g.intl.string(g.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  l
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(r.uMN, {
                                    size: 'sm',
                                    color: r.TVs.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(r.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: g.intl.string(g.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function S(e) {
    var t;
    let { application: n } = e,
        l = (0, C.BQ)(n) ? n.name : null !== (t = (0, C.$d)(n)) && void 0 !== t ? t : '',
        a = (0, C.vJ)(n);
    return (0, i.jsxs)('div', {
        className: P.titleContainer,
        children: [
            (0, i.jsx)(r.X6q, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            a
                ? (0, i.jsx)('div', {
                      className: P.partnerLabelContainer,
                      children: (0, i.jsx)(r.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: g.intl.string(g.t.LO4f0N)
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
            return (0, C.BQ)(t) && null !== (e = null == t ? void 0 : t.tags) && void 0 !== e ? e : [];
        }, [t]);
    return (0, C.ye)(t)
        ? (0, i.jsxs)('div', {
              className: P.tagsContainer,
              children: [
                  (0, i.jsx)(b, { application: t }),
                  n.map((e, t) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: P.tagContainer,
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
function b(e) {
    var t;
    let { application: n } = e;
    if (!(0, C.ye)(n)) return null;
    let l = null !== (t = (0, C.BQ)(n) ? (n instanceof N.ZP ? n.maxParticipants : n.max_participants) : 0) && void 0 !== t ? t : 0;
    return (0, i.jsxs)('div', {
        className: P.tagContainer,
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
function R(e) {
    var t;
    let { context: n, application: l, sectionName: a, hasCommands: o, isDeveloperOfThisApp: s } = e,
        c = (0, h.Fs)(n, l.id),
        d = (0, x.q)(l.id),
        u = null == d ? void 0 : null === (t = d.bot) || void 0 === t ? void 0 : t.id,
        v = (0, p.Z)({
            context: n,
            applicationId: l.id,
            botUserId: u
        }),
        { analyticsLocations: f } = (0, m.ZP)();
    if (!(0, C.BQ)(l) || !(0, C.ye)(l)) return null;
    let N = r.PhG.MAX;
    return null != c && null != u
        ? (0, i.jsxs)('div', {
              className: P.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: P.entryPointContainerFlexChild,
                      children: (0, i.jsx)(I.Z, {
                          context: n,
                          application: l,
                          sectionName: a,
                          primaryEntryPointCommand: c,
                          buttonSize: N
                      })
                  }),
                  v && null != u
                      ? (0, i.jsx)('div', {
                            className: P.entryPointContainerFlexChild,
                            children: (0, i.jsx)(_.Z, {
                                botUserId: u,
                                applicationId: l.id,
                                buttonSize: N,
                                analyticsLocations: f
                            })
                        })
                      : null
              ]
          })
        : s && !o && (0, C.ye)(l)
          ? (0, i.jsx)(r.Wn, {
                className: P.primaryEntryPointWarningMessage,
                messageType: r.QYI.WARNING,
                children: g.intl.format(g.t['s/3hjI'], {})
            })
          : null;
}
function M(e) {
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
        } = (0, A.Z)({
            isExpanded: n,
            ...u
        }),
        x = n || p;
    return (0, i.jsxs)('div', {
        className: P.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: P.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(r.Text, {
                    ref: s,
                    className: y.markup,
                    variant: 'text-sm/medium',
                    lineClamp: x ? void 0 : 1,
                    style: { maxHeight: x ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(r.P3F, {
                      className: P.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(r.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: x ? g.intl.string(g.t.u4YJ8v) : g.intl.string(g.t['N/tajI'])
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
