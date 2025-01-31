n.d(t, { Z: () => T }), n(47120);
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
    v = n(835473),
    x = n(70097),
    f = n(240991),
    N = n(973616),
    C = n(592125),
    E = n(783097),
    A = n(695676),
    I = n(520315),
    g = n(29380),
    _ = n(783685),
    P = n(388032),
    j = n(580062),
    y = n(665162);
function T(e) {
    let { context: t, application: n, videoUrl: a, imageCoverUrl: r, sectionName: d, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, E.jD)(n)) && void 0 !== e ? e : '';
        }, [n]),
        h = (0, s.e7)([c.Z], () => c.Z.inDevModeForApplication(n.id)),
        v = null != a,
        f = l.useMemo(() => {
            if ('contextless' === t.type && (0, E.BQ)(n)) {
                var e;
                let t = C.Z.getDMFromUserId(null === (e = n.bot) || void 0 === e ? void 0 : e.id);
                return null != t ? C.Z.getChannel(t) : void 0;
            }
            return t.channel;
        }, [t, n]),
        { isSlideReady: N } = (0, A.hH)(),
        [I, g] = l.useState(!1);
    l.useEffect(() => {
        N && g(!0);
    }, [N]);
    let _ =
        null != f
            ? {
                  channel: f,
                  type: 'channel'
              }
            : void 0;
    return (0, i.jsxs)('div', {
        className: j.container,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    v
                        ? (0, i.jsxs)('div', {
                              className: j.videoContainer,
                              children: [
                                  I
                                      ? (0, i.jsx)(x.Z, {
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
                                      'aria-label': P.intl.string(P.t.X4IxWF)
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: v ? j.overviewContainerWithVideo : j.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(b, { application: n }),
                            (0, i.jsx)(L, { application: n }),
                            p.length > 0 ? (0, i.jsx)(Z, { description: p }) : null,
                            h
                                ? (0, i.jsx)('div', {
                                      className: j.developerShelfControlsContainer,
                                      children: (0, i.jsx)(u.W, {
                                          hideSearch: !0,
                                          className: j.developerShelfControls
                                      })
                                  })
                                : null,
                            null != _
                                ? (0, i.jsx)(M, {
                                      context: _,
                                      application: n,
                                      sectionName: d,
                                      isDeveloperOfThisApp: h,
                                      hasCommands: m
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)(S, { application: n })
        ]
    });
}
function S(e) {
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
                                    children: P.intl.string(P.t['8z5B2d'])
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
                                    children: P.intl.string(P.t['5khEk5'])
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
                          children: P.intl.string(P.t.LO4f0N)
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
            return (0, E.BQ)(t) && null !== (e = null == t ? void 0 : t.tags) && void 0 !== e ? e : [];
        }, [t]);
    return (0, E.ye)(t)
        ? (0, i.jsxs)('div', {
              className: j.tagsContainer,
              children: [
                  (0, i.jsx)(R, { application: t }),
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
function R(e) {
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
function M(e) {
    var t;
    let { context: n, application: l, sectionName: a, hasCommands: o, isDeveloperOfThisApp: s } = e,
        c = (0, h.Fs)(n, l.id),
        d = (0, v.q)(l.id),
        u = null == d ? void 0 : null === (t = d.bot) || void 0 === t ? void 0 : t.id,
        x = (0, p.Z)({
            context: n,
            applicationId: l.id,
            botUserId: u
        }),
        { analyticsLocations: f } = (0, m.ZP)();
    if (!(0, E.BQ)(l) || !(0, E.ye)(l)) return null;
    let N = r.PhG.MAX;
    return null != c && null != u
        ? (0, i.jsxs)('div', {
              className: j.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: j.entryPointContainerFlexChild,
                      children: (0, i.jsx)(g.Z, {
                          context: n,
                          application: l,
                          sectionName: a,
                          primaryEntryPointCommand: c,
                          buttonSize: N
                      })
                  }),
                  x && null != u
                      ? (0, i.jsx)('div', {
                            className: j.entryPointContainerFlexChild,
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
        : s && !o && (0, E.ye)(l)
          ? (0, i.jsx)(r.Wn, {
                className: j.primaryEntryPointWarningMessage,
                messageType: r.QYI.WARNING,
                children: P.intl.format(P.t['s/3hjI'], {})
            })
          : null;
}
function Z(e) {
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
        v = n || p;
    return (0, i.jsxs)('div', {
        className: j.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: j.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(r.Text, {
                    ref: s,
                    className: y.markup,
                    variant: 'text-sm/medium',
                    lineClamp: v ? void 0 : 1,
                    style: { maxHeight: v ? void 0 : u.minHeightOverride },
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
                              children: v ? P.intl.string(P.t.u4YJ8v) : P.intl.string(P.t['N/tajI'])
                          }),
                          v
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
