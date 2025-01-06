t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    a = t(120356),
    o = t.n(a),
    r = t(442837),
    s = t(481060),
    c = t(115130),
    d = t(147865),
    u = t(427996),
    m = t(906732),
    p = t(706302),
    h = t(812236),
    f = t(404295),
    C = t(835473),
    v = t(70097),
    x = t(240991),
    _ = t(973616),
    N = t(783097),
    g = t(695676),
    A = t(520315),
    E = t(29380),
    b = t(783685),
    I = t(388032),
    P = t(580062),
    j = t(665162);
function y(e) {
    let { channel: n, application: t, videoUrl: a, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, N.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        h = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        f = null != a,
        { isSlideReady: C } = (0, g.hH)(),
        [x, _] = l.useState(!1);
    return (
        l.useEffect(() => {
            C && _(!0);
        }, [C]),
        (0, i.jsxs)('div', {
            className: P.container,
            children: [
                (0, i.jsxs)('div', {
                    className: P.profileAndVideoContainer,
                    children: [
                        f
                            ? (0, i.jsxs)('div', {
                                  className: P.videoContainer,
                                  children: [
                                      x
                                          ? (0, i.jsx)(v.Z, {
                                                className: o()(P.videoCover, P.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: a,
                                                poster: s
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: P.videoCover,
                                          src: s,
                                          'aria-label': I.intl.string(I.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: f ? P.overviewContainerWithVideo : P.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(T, { application: t }),
                                (0, i.jsx)(L, { application: t }),
                                p.length > 0 ? (0, i.jsx)(Z, { description: p }) : null,
                                h
                                    ? (0, i.jsx)('div', {
                                          className: P.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: P.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(M, {
                                    channel: n,
                                    application: t,
                                    sectionName: d,
                                    isDeveloperOfThisApp: h,
                                    hasCommands: m
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(S, { application: t })
            ]
        })
    );
}
function S(e) {
    let { application: n } = e,
        t = (0, N.Cb)(n),
        l = (0, N.Hu)(n);
    return t || l
        ? (0, i.jsxs)('div', {
              className: P.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.ShopIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: I.intl.string(I.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  l
                      ? (0, i.jsxs)('div', {
                            className: P.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.BillIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: I.intl.string(I.t['5khEk5'])
                                })
                            ]
                        })
                      : null
              ]
          })
        : null;
}
function T(e) {
    var n;
    let { application: t } = e,
        l = (0, N.BQ)(t) ? t.name : null !== (n = (0, N.$d)(t)) && void 0 !== n ? n : '',
        a = (0, N.vJ)(t);
    return (0, i.jsxs)('div', {
        className: P.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            a
                ? (0, i.jsx)('div', {
                      className: P.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: I.intl.string(I.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function L(e) {
    let { application: n } = e,
        t = l.useMemo(() => {
            var e;
            return (0, N.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, N.ye)(n)
        ? (0, i.jsxs)('div', {
              className: P.tagsContainer,
              children: [
                  (0, i.jsx)(R, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: P.tagContainer,
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-sm/semibold',
                                  color: 'interactive-normal',
                                  children: e
                              })
                          },
                          e + n
                      )
                  )
              ]
          })
        : null;
}
function R(e) {
    var n;
    let { application: t } = e;
    if (!(0, N.ye)(t)) return null;
    let l = null !== (n = (0, N.BQ)(t) ? (t instanceof _.ZP ? t.maxParticipants : t.max_participants) : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: P.tagContainer,
        children: [
            (0, i.jsx)(s.GroupIcon, {
                size: 'xs',
                color: s.tokens.colors.INTERACTIVE_NORMAL
            }),
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/semibold',
                color: 'interactive-normal',
                children: (0, d.lY)(l)
            })
        ]
    });
}
function M(e) {
    var n;
    let { channel: t, application: l, sectionName: a, hasCommands: o, isDeveloperOfThisApp: r } = e,
        c = (0, h.Fs)(t, l.id),
        d = (0, C.q)(l.id),
        u = null == d ? void 0 : null === (n = d.bot) || void 0 === n ? void 0 : n.id,
        v = (0, p.Z)({
            channel: t,
            applicationId: l.id,
            botUserId: u
        }),
        x = (0, f.bG)('PrimaryEntryPointArea'),
        { analyticsLocations: _ } = (0, m.ZP)();
    if (!(0, N.BQ)(l) || !(0, N.ye)(l)) return null;
    let g = s.ButtonSizes.MAX;
    return null == c || (x && null == u)
        ? r && !o && (0, N.ye)(l)
            ? (0, i.jsx)(s.HelpMessage, {
                  className: P.primaryEntryPointWarningMessage,
                  messageType: s.HelpMessageTypes.WARNING,
                  children: I.intl.format(I.t['s/3hjI'], {})
              })
            : null
        : (0, i.jsxs)('div', {
              className: P.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: P.entryPointContainerFlexChild,
                      children: (0, i.jsx)(E.Z, {
                          channel: t,
                          application: l,
                          sectionName: a,
                          primaryEntryPointCommand: c,
                          buttonSize: g
                      })
                  }),
                  v && null != u
                      ? (0, i.jsx)('div', {
                            className: P.entryPointContainerFlexChild,
                            children: (0, i.jsx)(b.Z, {
                                botUserId: u,
                                applicationId: l.id,
                                buttonSize: g,
                                analyticsLocations: _
                            })
                        })
                      : null
              ]
          });
}
function Z(e) {
    let { description: n } = e,
        [t, a] = l.useState(!0);
    l.useLayoutEffect(() => a(!1), []);
    let o = l.useMemo(() => (0, x.parseBioReact)(n), [n]),
        {
            ref: r,
            lineHeight: c,
            lineCount: d
        } = (function () {
            let e = l.useRef(null),
                [n, t] = l.useState(null),
                [i, a] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let n = e.current;
                    if (null === n || 0 === n.clientHeight) return;
                    let i = parseInt(getComputedStyle(n).lineHeight);
                    if (!isNaN(i)) t(i), a(Math.floor(n.clientHeight / i));
                }, []),
                {
                    ref: e,
                    lineHeight: n,
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
            isExpanded: t,
            ...u
        }),
        f = t || p;
    return (0, i.jsxs)('div', {
        className: P.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: P.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: j.markup,
                    variant: 'text-sm/medium',
                    lineClamp: f ? void 0 : 1,
                    style: { maxHeight: f ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: P.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: f ? I.intl.string(I.t.u4YJ8v) : I.intl.string(I.t['N/tajI'])
                          }),
                          f
                              ? (0, i.jsx)(s.ChevronSmallUpIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                              : (0, i.jsx)(s.ChevronSmallDownIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.TEXT_BRAND
                                })
                      ]
                  })
                : null
        ]
    });
}
