l.d(n, { Z: () => _ }), l(47120);
var t = l(200651),
    i = l(192379),
    s = l(120356),
    a = l.n(s),
    r = l(512722),
    o = l.n(r),
    u = l(442837),
    c = l(481060),
    d = l(410575),
    m = l(2052),
    x = l(924557),
    h = l(600164),
    g = l(436774),
    Z = l(140465),
    v = l(774026),
    S = l(592125),
    j = l(944486),
    C = l(594174),
    f = l(74538),
    N = l(451467),
    p = l(122186),
    T = l(37113),
    E = l(981631),
    I = l(388032),
    P = l(760416),
    R = l(784324),
    k = l(814632);
function b(e) {
    let { analyticsLocation: n, onClose: i } = e;
    (0, c.ZDy)(async () => {
        let { default: e } = await l.e('28479').then(l.bind(l, 78865));
        return (l) =>
            (0, t.jsx)(e, {
                ...l,
                onCloseParent: i,
                analyticsSource: n
            });
    });
}
function A() {
    return (0, t.jsxs)('div', {
        className: R.toolTipTextContainer,
        children: [
            (0, t.jsx)(c.SrA, {
                size: 'md',
                color: g.JX.PREMIUM_TIER_2,
                className: a()(R.premiumIcon)
            }),
            (0, t.jsx)(c.Text, {
                className: R.upsellText,
                variant: 'text-sm/medium',
                children: I.intl.string(I.t.sEAnVF)
            })
        ]
    });
}
function M(e) {
    let n,
        l,
        { type: i, selected: s, needsPremium: r, needsDemo: o, analyticsLocation: u, onClick: d, onClose: m, setIsHovering: x } = e,
        { value: h, label: g } = i;
    return (
        r
            ? ((n = (0, t.jsx)(c.DY3, {
                  tooltipClassName: R.tooltip,
                  spacing: 6,
                  'aria-label': I.intl.string(I.t.sEAnVF),
                  text: (0, t.jsx)(A, {}),
                  children: (0, t.jsx)('div', {
                      className: R.textContainer,
                      onMouseEnter: () => x(!0),
                      onMouseLeave: () => x(!1),
                      children: (0, t.jsx)(c.Text, {
                          variant: 'text-xs/bold',
                          className: a()(R.selectorNitroText, R.enhancedSelectorNitroText),
                          children: g
                      })
                  })
              })),
              (l = () =>
                  b({
                      analyticsLocation: u,
                      onClose: m
                  })))
            : ((n = (0, t.jsx)('div', {
                  className: R.textContainer,
                  children: (0, t.jsx)(c.Text, {
                      variant: 'text-xs/normal',
                      className: a()(R.selectorText, { [R.enhancedSelectorNitroText]: o }),
                      children: g
                  })
              })),
              (l = () => d(h))),
        {
            content: n,
            className: a()(R.selectorButton, {
                [R.selectorButtonSelected]: s,
                [R.perksDemo]: o,
                [R.premiumUpsell]: r
            }),
            onClick: l
        }
    );
}
function _(e) {
    let { onClose: n, selectedPreset: l, selectedResolution: s, selectedFPS: a, onResolutionChange: r, onFPSChange: g, onPresetChange: A, targetGuildPremiumTier: _, captureDeviceSelected: L } = e,
        D = (0, u.e7)([C.default], () => {
            let e = C.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        z = (0, u.e7)([j.Z, S.Z], () => S.Z.getChannel(j.Z.getVoiceChannelId())),
        w = f.ZP.canStreamQuality(f.U2.MID, D),
        { location: y } = (0, m.O)(),
        U = (0, x.Zq)({ autoTrackExposure: !1 }),
        G = (0, Z.B4)({ location: 'StreamSettings' }),
        O = C.default.getUser(null == z ? void 0 : z.hdStreamingBuyerId),
        W = null != z && null != z.hdStreamingUntil && new Date(z.hdStreamingUntil) > new Date() && null != O,
        V = !w && !U,
        [F, J] = i.useState(!1),
        B = L ? T.z8 : T.WC,
        X = {
            ...y,
            section: E.jXE.STREAM_SETTINGS
        },
        Y = (0, t.jsx)(c.hE2, {
            buttons: B.map((e) =>
                M({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, N.Z)(l, e.value, a, D, _, z),
                    needsDemo: G && e.value !== T.LY.RESOLUTION_720,
                    analyticsLocation: X,
                    onClick: () => r(e.value),
                    onClose: n,
                    setIsHovering: J
                })
            )
        }),
        H = (0, t.jsx)(c.hE2, {
            buttons: T.k0.map((e) =>
                M({
                    type: e,
                    selected: e.value === a,
                    needsPremium: !(0, N.Z)(l, s, e.value, D, _, z),
                    needsDemo: G && e.value === T.ws.FPS_60,
                    analyticsLocation: X,
                    onClick: () => g(e.value),
                    onClose: n,
                    setIsHovering: J
                })
            )
        }),
        K = [
            {
                value: T.tI.PRESET_VIDEO,
                label: I.intl.string(I.t.HcwHc3)
            },
            ...(L
                ? []
                : [
                      {
                          value: T.tI.PRESET_DOCUMENTS,
                          label: I.intl.string(I.t['/RfohI'])
                      }
                  ]),
            {
                value: T.tI.PRESET_CUSTOM,
                label: I.intl.string(I.t['+eOtrK'])
            }
        ],
        q =
            l === T.tI.PRESET_DOCUMENTS
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(h.Z, {
                              children: (0, t.jsx)(c.xJW, {
                                  title: I.intl.string(I.t.rHyPXl),
                                  titleClassName: P.formItemTitleSlim,
                                  className: R.documentModeGroup,
                                  children: (0, t.jsx)(c.Text, {
                                      variant: 'text-xs/normal',
                                      children: I.intl.format(I.t['U+hmam'], { fps: a })
                                  })
                              })
                          }),
                          V
                              ? (0, t.jsx)(p.Z, {
                                    message: I.intl.string(I.t.deDogI),
                                    onClose: n,
                                    openStreamUpsellModal: b
                                })
                              : null,
                          G && (0, t.jsx)(p.c, {}),
                          W &&
                              null != z.hdStreamingUntil &&
                              (0, t.jsx)(v.Z, {
                                  streamingUntil: z.hdStreamingUntil,
                                  user: O,
                                  channel: z
                              })
                      ]
                  })
                : (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsxs)(h.Z, {
                              children: [
                                  (0, t.jsx)(c.xJW, {
                                      title: I.intl.string(I.t.rHyPXl),
                                      className: R.settingsGroup,
                                      titleClassName: P.formItemTitleSlim,
                                      children: Y
                                  }),
                                  (0, t.jsx)(c.xJW, {
                                      title: I.intl.string(I.t.SkkeIi),
                                      className: R.settingsGroup,
                                      titleClassName: P.formItemTitleSlim,
                                      children: H
                                  })
                              ]
                          }),
                          V
                              ? (0, t.jsx)(p.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: b,
                                    glow: F
                                })
                              : null,
                          G && (0, t.jsx)(p.c, {}),
                          W &&
                              null != z.hdStreamingUntil &&
                              (0, t.jsx)(v.Z, {
                                  streamingUntil: null == z ? void 0 : z.hdStreamingUntil,
                                  user: O,
                                  channel: z
                              })
                      ]
                  });
    return (0, t.jsx)(d.Z, {
        ...X,
        children: (0, t.jsx)(c.xJW, {
            title: I.intl.string(I.t.ax4FnZ),
            titleClassName: P.formItemTitle,
            className: P.modalContent,
            children: (0, t.jsxs)('div', {
                className: R.qualitySettingsContainer,
                children: [
                    (0, t.jsx)(c.q4e, {
                        value: l,
                        className: k.marginTop8,
                        options: K,
                        onChange: (e) => A(e)
                    }),
                    q
                ]
            })
        })
    });
}
