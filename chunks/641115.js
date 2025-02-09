l.d(n, { Z: () => D }), l(47120);
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
    g = l(600164),
    h = l(436774),
    Z = l(140465),
    v = l(774026),
    S = l(592125),
    C = l(944486),
    j = l(594174),
    N = l(74538),
    f = l(451467),
    p = l(122186),
    T = l(37113),
    I = l(981631),
    E = l(388032),
    P = l(760416),
    R = l(784324),
    k = l(814632);
function A(e) {
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
function b() {
    return (0, t.jsxs)('div', {
        className: R.toolTipTextContainer,
        children: [
            (0, t.jsx)(c.SrA, {
                size: 'md',
                color: h.JX.PREMIUM_TIER_2,
                className: a()(R.premiumIcon)
            }),
            (0, t.jsx)(c.Text, {
                className: R.upsellText,
                variant: 'text-sm/medium',
                children: E.intl.string(E.t.sEAnVF)
            })
        ]
    });
}
function M(e) {
    let n,
        l,
        { type: i, selected: s, needsPremium: r, needsDemo: o, analyticsLocation: u, onClick: d, onClose: m, setIsHovering: x } = e,
        { value: g, label: h } = i;
    return (
        r
            ? ((n = (0, t.jsx)(c.DY3, {
                  tooltipClassName: R.tooltip,
                  spacing: 6,
                  'aria-label': E.intl.string(E.t.sEAnVF),
                  text: (0, t.jsx)(b, {}),
                  children: (0, t.jsx)('div', {
                      className: R.textContainer,
                      onMouseEnter: () => x(!0),
                      onMouseLeave: () => x(!1),
                      children: (0, t.jsx)(c.Text, {
                          variant: 'text-xs/bold',
                          className: a()(R.selectorNitroText, R.enhancedSelectorNitroText),
                          children: h
                      })
                  })
              })),
              (l = () =>
                  A({
                      analyticsLocation: u,
                      onClose: m
                  })))
            : ((n = (0, t.jsx)('div', {
                  className: R.textContainer,
                  children: (0, t.jsx)(c.Text, {
                      variant: 'text-xs/normal',
                      className: a()(R.selectorText, { [R.enhancedSelectorNitroText]: o }),
                      children: h
                  })
              })),
              (l = () => d(g))),
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
function D(e) {
    let { onClose: n, selectedPreset: l, selectedResolution: s, selectedFPS: a, onResolutionChange: r, onFPSChange: h, onPresetChange: b, targetGuildPremiumTier: D, captureDeviceSelected: _ } = e,
        L = (0, u.e7)([j.default], () => {
            let e = j.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        z = (0, u.e7)([C.Z, S.Z], () => S.Z.getChannel(C.Z.getVoiceChannelId())),
        w = N.ZP.canStreamQuality(N.U2.MID, L),
        { location: U } = (0, m.O)(),
        y = (0, x.Zq)({ autoTrackExposure: !1 }),
        G = (0, Z.B4)({ location: 'StreamSettings' }),
        O = j.default.getUser(null == z ? void 0 : z.hdStreamingBuyerId),
        W = null != z && null != z.hdStreamingUntil && new Date(z.hdStreamingUntil) > new Date() && null != O,
        F = !w && !y,
        [J, B] = i.useState(!1),
        V = _ ? T.z8 : T.WC,
        X = {
            ...U,
            section: I.jXE.STREAM_SETTINGS
        },
        Y = (0, t.jsx)(c.hE2, {
            buttons: V.map((e) =>
                M({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, f.Z)(l, e.value, a, L, D, z),
                    needsDemo: G && e.value !== T.LY.RESOLUTION_720,
                    analyticsLocation: X,
                    onClick: () => r(e.value),
                    onClose: n,
                    setIsHovering: B
                })
            )
        }),
        H = (0, t.jsx)(c.hE2, {
            buttons: T.k0.map((e) =>
                M({
                    type: e,
                    selected: e.value === a,
                    needsPremium: !(0, f.Z)(l, s, e.value, L, D, z),
                    needsDemo: G && e.value === T.ws.FPS_60,
                    analyticsLocation: X,
                    onClick: () => h(e.value),
                    onClose: n,
                    setIsHovering: B
                })
            )
        }),
        K = [
            {
                value: T.tI.PRESET_VIDEO,
                label: E.intl.string(E.t.HcwHc3)
            },
            ...(_
                ? []
                : [
                      {
                          value: T.tI.PRESET_DOCUMENTS,
                          label: E.intl.string(E.t['/RfohI'])
                      }
                  ]),
            {
                value: T.tI.PRESET_CUSTOM,
                label: E.intl.string(E.t['+eOtrK'])
            }
        ],
        q =
            l === T.tI.PRESET_DOCUMENTS
                ? (0, t.jsxs)(t.Fragment, {
                      children: [
                          (0, t.jsx)(g.Z, {
                              children: (0, t.jsx)(c.xJW, {
                                  title: E.intl.string(E.t.rHyPXl),
                                  titleClassName: P.formItemTitleSlim,
                                  className: R.documentModeGroup,
                                  children: (0, t.jsx)(c.Text, {
                                      variant: 'text-xs/normal',
                                      children: E.intl.format(E.t['U+hmam'], { fps: a })
                                  })
                              })
                          }),
                          F
                              ? (0, t.jsx)(p.Z, {
                                    message: E.intl.string(E.t.deDogI),
                                    onClose: n,
                                    openStreamUpsellModal: A
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
                          (0, t.jsxs)(g.Z, {
                              children: [
                                  (0, t.jsx)(c.xJW, {
                                      title: E.intl.string(E.t.rHyPXl),
                                      className: R.settingsGroup,
                                      titleClassName: P.formItemTitleSlim,
                                      children: Y
                                  }),
                                  (0, t.jsx)(c.xJW, {
                                      title: E.intl.string(E.t.SkkeIi),
                                      className: R.settingsGroup,
                                      titleClassName: P.formItemTitleSlim,
                                      children: H
                                  })
                              ]
                          }),
                          F
                              ? (0, t.jsx)(p.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: A,
                                    glow: J
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
            title: E.intl.string(E.t.ax4FnZ),
            titleClassName: P.formItemTitle,
            className: P.modalContent,
            children: (0, t.jsxs)('div', {
                className: R.qualitySettingsContainer,
                children: [
                    (0, t.jsx)(c.q4e, {
                        value: l,
                        className: k.marginTop8,
                        options: K,
                        onChange: (e) => b(e)
                    }),
                    q
                ]
            })
        })
    });
}
