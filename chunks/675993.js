t.d(n, {
    Z: function () {
        return b;
    }
}),
    t(47120);
var i = t(200651),
    l = t(192379),
    o = t(120356),
    a = t.n(o),
    r = t(442837),
    s = t(481060),
    c = t(115130),
    d = t(147865),
    u = t(427996),
    m = t(812236),
    p = t(835473),
    h = t(70097),
    f = t(240991),
    C = t(973616),
    v = t(592125),
    x = t(783097),
    _ = t(695676),
    N = t(520315),
    A = t(29380),
    I = t(388032),
    E = t(580062),
    g = t(665162);
function b(e) {
    let { context: n, application: t, videoUrl: o, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, x.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        f = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        C = null != o,
        N = l.useMemo(() => {
            if ('contextless' === n.type && (0, x.BQ)(t)) {
                var e;
                let n = v.Z.getDMFromUserId(null === (e = t.bot) || void 0 === e ? void 0 : e.id);
                return null != n ? v.Z.getChannel(n) : void 0;
            }
        }, [n, t]),
        { isSlideReady: A } = (0, _.hH)(),
        [g, b] = l.useState(!1);
    l.useEffect(() => {
        A && b(!0);
    }, [A]);
    let j =
        null != N
            ? {
                  channel: N,
                  type: 'channel'
              }
            : void 0;
    return (0, i.jsxs)('div', {
        className: E.container,
        children: [
            (0, i.jsxs)('div', {
                children: [
                    C
                        ? (0, i.jsxs)('div', {
                              className: E.videoContainer,
                              children: [
                                  g
                                      ? (0, i.jsx)(h.Z, {
                                            className: a()(E.videoCover, E.video),
                                            loop: !0,
                                            muted: !0,
                                            autoPlay: !0,
                                            src: o,
                                            poster: s
                                        })
                                      : null,
                                  (0, i.jsx)('img', {
                                      className: E.videoCover,
                                      src: s,
                                      'aria-label': I.intl.string(I.t.X4IxWF)
                                  })
                              ]
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: C ? E.overviewContainerWithVideo : E.overviewContainerNoVideo,
                        children: [
                            (0, i.jsx)(y, { application: t }),
                            (0, i.jsx)(S, { application: t }),
                            p.length > 0 ? (0, i.jsx)(L, { description: p }) : null,
                            f
                                ? (0, i.jsx)('div', {
                                      className: E.developerShelfControlsContainer,
                                      children: (0, i.jsx)(u.W, {
                                          hideSearch: !0,
                                          className: E.developerShelfControls
                                      })
                                  })
                                : null,
                            null != j
                                ? (0, i.jsx)(T, {
                                      context: j,
                                      application: t,
                                      sectionName: d,
                                      isDeveloperOfThisApp: f,
                                      hasCommands: m
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)(P, { application: t })
        ]
    });
}
function P(e) {
    let { application: n } = e,
        t = (0, x.Cb)(n),
        l = (0, x.Hu)(n);
    return t || l
        ? (0, i.jsxs)('div', {
              className: E.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: E.monetizationDisclosureStyle,
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
                            className: E.monetizationDisclosureStyle,
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
function y(e) {
    var n;
    let { application: t } = e,
        l = (0, x.BQ)(t) ? t.name : null !== (n = (0, x.$d)(t)) && void 0 !== n ? n : '',
        o = (0, x.vJ)(t);
    return (0, i.jsxs)('div', {
        className: E.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            o
                ? (0, i.jsx)('div', {
                      className: E.partnerLabelContainer,
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
function S(e) {
    let { application: n } = e,
        t = l.useMemo(() => {
            var e;
            return (0, x.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, x.ye)(n)
        ? (0, i.jsxs)('div', {
              className: E.tagsContainer,
              children: [
                  (0, i.jsx)(j, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: E.tagContainer,
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
function j(e) {
    var n;
    let { application: t } = e;
    if (!(0, x.ye)(t)) return null;
    let l = null !== (n = (0, x.BQ)(t) ? (t instanceof C.ZP ? t.maxParticipants : t.max_participants) : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: E.tagContainer,
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
function T(e) {
    var n;
    let { context: t, application: l, sectionName: o, hasCommands: a, isDeveloperOfThisApp: r } = e,
        c = (0, m.Fs)(t, l.id),
        d = (0, p.q)(l.id),
        u = null == d ? void 0 : null === (n = d.bot) || void 0 === n ? void 0 : n.id;
    if (!(0, x.BQ)(l) || !(0, x.ye)(l)) return null;
    let h = s.ButtonSizes.MAX;
    return null != c && null != u
        ? (0, i.jsx)('div', {
              className: E.entrypointContainer,
              children: (0, i.jsx)('div', {
                  className: E.entryPointContainerFlexChild,
                  children: (0, i.jsx)(A.Z, {
                      context: t,
                      application: l,
                      sectionName: o,
                      primaryEntryPointCommand: c,
                      buttonSize: h
                  })
              })
          })
        : r && !a && (0, x.ye)(l)
          ? (0, i.jsx)(s.HelpMessage, {
                className: E.primaryEntryPointWarningMessage,
                messageType: s.HelpMessageTypes.WARNING,
                children: I.intl.format(I.t['s/3hjI'], {})
            })
          : null;
}
function L(e) {
    let { description: n } = e,
        [t, o] = l.useState(!0);
    l.useLayoutEffect(() => o(!1), []);
    let a = l.useMemo(() => (0, f.parseBioReact)(n), [n]),
        {
            ref: r,
            lineHeight: c,
            lineCount: d
        } = (function () {
            let e = l.useRef(null),
                [n, t] = l.useState(null),
                [i, o] = l.useState(null);
            return (
                l.useLayoutEffect(() => {
                    let n = e.current;
                    if (null === n || 0 === n.clientHeight) return;
                    let i = parseInt(getComputedStyle(n).lineHeight);
                    if (!isNaN(i)) t(i), o(Math.floor(n.clientHeight / i));
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
        } = (0, N.Z)({
            isExpanded: t,
            ...u
        }),
        C = t || p;
    return (0, i.jsxs)('div', {
        className: E.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: E.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: g.markup,
                    variant: 'text-sm/medium',
                    lineClamp: C ? void 0 : 1,
                    style: { maxHeight: C ? void 0 : u.minHeightOverride },
                    children: a
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: E.expandableDescriptionClickable,
                      onClick: () => o((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: C ? I.intl.string(I.t.u4YJ8v) : I.intl.string(I.t['N/tajI'])
                          }),
                          C
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
