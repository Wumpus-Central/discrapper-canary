t.d(n, {
    Z: function () {
        return S;
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
    f = t(835473),
    C = t(70097),
    v = t(240991),
    x = t(973616),
    _ = t(783097),
    N = t(695676),
    I = t(520315),
    A = t(29380),
    E = t(783685),
    g = t(388032),
    b = t(891402),
    P = t(426953);
function S(e) {
    let { channel: n, application: t, videoUrl: a, imageCoverUrl: s, sectionName: d, hasCommands: m } = e,
        p = l.useMemo(() => {
            var e;
            return null !== (e = (0, _.jD)(t)) && void 0 !== e ? e : '';
        }, [t]),
        h = (0, r.e7)([c.Z], () => c.Z.inDevModeForApplication(t.id)),
        f = null != a,
        { isSlideReady: v } = (0, N.hH)(),
        [x, I] = l.useState(!1);
    return (
        l.useEffect(() => {
            v && I(!0);
        }, [v]),
        (0, i.jsxs)('div', {
            className: b.container,
            children: [
                (0, i.jsxs)('div', {
                    children: [
                        f
                            ? (0, i.jsxs)('div', {
                                  className: b.videoContainer,
                                  children: [
                                      x
                                          ? (0, i.jsx)(C.Z, {
                                                className: o()(b.videoCover, b.video),
                                                loop: !0,
                                                muted: !0,
                                                autoPlay: !0,
                                                src: a,
                                                poster: s
                                            })
                                          : null,
                                      (0, i.jsx)('img', {
                                          className: b.videoCover,
                                          src: s,
                                          'aria-label': g.intl.string(g.t.X4IxWF)
                                      })
                                  ]
                              })
                            : null,
                        (0, i.jsxs)('div', {
                            className: f ? b.overviewContainerWithVideo : b.overviewContainerNoVideo,
                            children: [
                                (0, i.jsx)(y, { application: t }),
                                (0, i.jsx)(T, { application: t }),
                                p.length > 0 ? (0, i.jsx)(M, { description: p }) : null,
                                h
                                    ? (0, i.jsx)('div', {
                                          className: b.developerShelfControlsContainer,
                                          children: (0, i.jsx)(u.W, {
                                              hideSearch: !0,
                                              className: b.developerShelfControls
                                          })
                                      })
                                    : null,
                                (0, i.jsx)(R, {
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
                (0, i.jsx)(j, { application: t })
            ]
        })
    );
}
function j(e) {
    let { application: n } = e,
        t = (0, _.Cb)(n),
        l = (0, _.Hu)(n);
    return t || l
        ? (0, i.jsxs)('div', {
              className: b.monetizationDisclosureContainerStyle,
              children: [
                  t
                      ? (0, i.jsxs)('div', {
                            className: b.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.ShopIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-secondary',
                                    children: g.intl.string(g.t['8z5B2d'])
                                })
                            ]
                        })
                      : null,
                  l
                      ? (0, i.jsxs)('div', {
                            className: b.monetizationDisclosureStyle,
                            children: [
                                (0, i.jsx)(s.BillIcon, {
                                    size: 'sm',
                                    color: s.tokens.colors.INTERACTIVE_MUTED
                                }),
                                (0, i.jsx)(s.Text, {
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
function y(e) {
    var n;
    let { application: t } = e,
        l = (0, _.BQ)(t) ? t.name : null !== (n = (0, _.$d)(t)) && void 0 !== n ? n : '',
        a = (0, _.vJ)(t);
    return (0, i.jsxs)('div', {
        className: b.titleContainer,
        children: [
            (0, i.jsx)(s.Heading, {
                variant: 'heading-xl/extrabold',
                lineClamp: 1,
                children: l
            }),
            a
                ? (0, i.jsx)('div', {
                      className: b.partnerLabelContainer,
                      children: (0, i.jsx)(s.Text, {
                          variant: 'text-xs/medium',
                          color: 'text-normal',
                          children: g.intl.string(g.t.LO4f0N)
                      })
                  })
                : null
        ]
    });
}
function T(e) {
    let { application: n } = e,
        t = l.useMemo(() => {
            var e;
            return (0, _.BQ)(n) && null !== (e = null == n ? void 0 : n.tags) && void 0 !== e ? e : [];
        }, [n]);
    return (0, _.ye)(n)
        ? (0, i.jsxs)('div', {
              className: b.tagsContainer,
              children: [
                  (0, i.jsx)(L, { application: n }),
                  t.map((e, n) =>
                      (0, i.jsx)(
                          'div',
                          {
                              className: b.tagContainer,
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
function L(e) {
    var n;
    let { application: t } = e;
    if (!(0, _.ye)(t)) return null;
    let l = null !== (n = (0, _.BQ)(t) ? (t instanceof x.ZP ? t.maxParticipants : t.max_participants) : 0) && void 0 !== n ? n : 0;
    return (0, i.jsxs)('div', {
        className: b.tagContainer,
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
function R(e) {
    var n;
    let { channel: t, application: l, sectionName: a, hasCommands: o, isDeveloperOfThisApp: r } = e,
        c = (0, h.Fs)(l.id, t),
        d = (0, f.q)(l.id),
        u = null == d ? void 0 : null === (n = d.bot) || void 0 === n ? void 0 : n.id,
        C = (0, p.Z)({
            channel: t,
            applicationId: l.id,
            botUserId: u
        }),
        { analyticsLocations: v } = (0, m.ZP)();
    if (!(0, _.BQ)(l) || !(0, _.ye)(l)) return null;
    let x = s.ButtonSizes.MAX;
    return null != c && null != u
        ? (0, i.jsxs)('div', {
              className: b.entrypointContainer,
              children: [
                  (0, i.jsx)('div', {
                      className: b.entryPointContainerFlexChild,
                      children: (0, i.jsx)(A.Z, {
                          channel: t,
                          application: l,
                          sectionName: a,
                          primaryEntryPointCommand: c,
                          buttonSize: x
                      })
                  }),
                  C && null != u
                      ? (0, i.jsx)('div', {
                            className: b.entryPointContainerFlexChild,
                            children: (0, i.jsx)(E.Z, {
                                botUserId: u,
                                applicationId: l.id,
                                buttonSize: x,
                                analyticsLocations: v
                            })
                        })
                      : null
              ]
          })
        : r && !o && (0, _.ye)(l)
          ? (0, i.jsx)(s.HelpMessage, {
                className: b.primaryEntryPointWarningMessage,
                messageType: s.HelpMessageTypes.WARNING,
                children: g.intl.format(g.t['s/3hjI'], {})
            })
          : null;
}
function M(e) {
    let { description: n } = e,
        [t, a] = l.useState(!0);
    l.useLayoutEffect(() => a(!1), []);
    let o = l.useMemo(() => (0, v.parseBioReact)(n), [n]),
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
        } = (0, I.Z)({
            isExpanded: t,
            ...u
        }),
        f = t || p;
    return (0, i.jsxs)('div', {
        className: b.descriptionContainer,
        children: [
            (0, i.jsx)('div', {
                ref: m,
                className: b.overflowHidden,
                onTransitionEnd: h,
                children: (0, i.jsx)(s.Text, {
                    ref: r,
                    className: P.markup,
                    variant: 'text-sm/medium',
                    lineClamp: f ? void 0 : 1,
                    style: { maxHeight: f ? void 0 : u.minHeightOverride },
                    children: o
                })
            }),
            null != d && d > 1
                ? (0, i.jsxs)(s.Clickable, {
                      className: b.expandableDescriptionClickable,
                      onClick: () => a((e) => !e),
                      children: [
                          (0, i.jsx)(s.Text, {
                              variant: 'text-sm/semibold',
                              color: 'text-brand',
                              children: f ? g.intl.string(g.t.u4YJ8v) : g.intl.string(g.t['N/tajI'])
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
