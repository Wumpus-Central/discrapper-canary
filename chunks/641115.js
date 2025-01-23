t.d(n, {
    Z: function () {
        return w;
    }
}),
    t(47120);
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(512722),
    o = t.n(a),
    u = t(848246),
    c = t(442837),
    d = t(481060),
    m = t(410575),
    g = t(2052),
    h = t(924557),
    x = t(600164),
    S = t(436774),
    v = t(933843),
    Z = t(140465),
    C = t(1163),
    f = t(774026),
    j = t(592125),
    p = t(944486),
    N = t(594174),
    I = t(74538),
    T = t(451467),
    E = t(122186),
    R = t(37113),
    P = t(981631),
    A = t(474936),
    b = t(388032),
    M = t(456963),
    _ = t(998139),
    k = t(232186);
function L(e) {
    let { analyticsLocation: n, onClose: i } = e;
    (0, d.openModalLazy)(async () => {
        let { default: e } = await t.e('28479').then(t.bind(t, 78865));
        return (t) =>
            (0, l.jsx)(e, {
                ...t,
                onCloseParent: i,
                analyticsSource: n
            });
    });
}
function D() {
    return (0, l.jsxs)('div', {
        className: _.toolTipTextContainer,
        children: [
            (0, l.jsx)(d.NitroWheelIcon, {
                size: 'md',
                color: S.JX.PREMIUM_TIER_2,
                className: r()(_.premiumIcon)
            }),
            (0, l.jsx)(d.Text, {
                className: _.upsellText,
                variant: 'text-sm/medium',
                children: b.intl.string(b.t.sEAnVF)
            })
        ]
    });
}
function U(e) {
    let n,
        t,
        { type: i, selected: s, needsPremium: a, needsDemo: o, analyticsLocation: u, onClick: c, onClose: m, setIsHovering: g } = e,
        { value: h, label: x } = i;
    return (
        a
            ? ((n = (0, l.jsx)(d.TooltipContainer, {
                  tooltipClassName: _.tooltip,
                  spacing: 6,
                  'aria-label': b.intl.string(b.t.sEAnVF),
                  text: (0, l.jsx)(D, {}),
                  children: (0, l.jsx)('div', {
                      className: _.textContainer,
                      onMouseEnter: () => g(!0),
                      onMouseLeave: () => g(!1),
                      children: (0, l.jsx)(d.Text, {
                          variant: 'text-xs/bold',
                          className: r()(_.selectorNitroText, _.enhancedSelectorNitroText),
                          children: x
                      })
                  })
              })),
              (t = () =>
                  L({
                      analyticsLocation: u,
                      onClose: m
                  })))
            : ((n = (0, l.jsx)('div', {
                  className: _.textContainer,
                  children: (0, l.jsx)(d.Text, {
                      variant: 'text-xs/normal',
                      className: r()(_.selectorText, { [_.enhancedSelectorNitroText]: o }),
                      children: x
                  })
              })),
              (t = () => c(h))),
        {
            content: n,
            className: r()(_.selectorButton, {
                [_.selectorButtonSelected]: s,
                [_.perksDemo]: o,
                [_.premiumUpsell]: a
            }),
            onClick: t
        }
    );
}
function w(e) {
    let { onClose: n, selectedPreset: t, selectedResolution: s, selectedFPS: r, onResolutionChange: a, onFPSChange: S, onPresetChange: D, targetGuildPremiumTier: w, captureDeviceSelected: B } = e,
        y = (0, c.e7)([N.default], () => {
            let e = N.default.getCurrentUser();
            return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
        }),
        G = (0, c.e7)([p.Z, j.Z], () => j.Z.getChannel(p.Z.getVoiceChannelId())),
        F = I.ZP.canStreamQuality(I.U2.MID, y),
        { location: O } = (0, g.O)(),
        z = (0, h.Zq)({ autoTrackExposure: !1 }),
        V = (0, I.I5)(y, A.p9.TIER_1);
    C.Z.useExperiment(
        { location: 'Go Live Modal' },
        {
            autoTrackExposure: !0,
            disable: V
        }
    );
    let W = (0, Z.B4)({ location: 'StreamSettings' }),
        H = N.default.getUser(null == G ? void 0 : G.hdStreamingBuyerId),
        Y = null != G && null != G.hdStreamingUntil && new Date(G.hdStreamingUntil) > new Date() && null != H,
        K = (0, v.So)(u.q.STREAM_HIGH_QUALITY),
        X = (!F && !z) || K,
        [J, q] = i.useState(!1),
        Q = B ? R.z8 : R.WC,
        $ = {
            ...O,
            section: P.jXE.STREAM_SETTINGS
        },
        ee = (0, l.jsx)(d.ButtonGroup, {
            buttons: Q.map((e) =>
                U({
                    type: e,
                    selected: e.value === s,
                    needsPremium: !(0, T.Z)(t, e.value, r, y, w, G),
                    needsDemo: (K || W) && e.value !== R.LY.RESOLUTION_720,
                    analyticsLocation: $,
                    onClick: () => a(e.value),
                    onClose: n,
                    setIsHovering: q
                })
            )
        }),
        en = (0, l.jsx)(d.ButtonGroup, {
            buttons: R.k0.map((e) =>
                U({
                    type: e,
                    selected: e.value === r,
                    needsPremium: !(0, T.Z)(t, s, e.value, y, w, G),
                    needsDemo: (K || W) && e.value === R.ws.FPS_60,
                    analyticsLocation: $,
                    onClick: () => S(e.value),
                    onClose: n,
                    setIsHovering: q
                })
            )
        }),
        et = [
            {
                value: R.tI.PRESET_VIDEO,
                label: b.intl.string(b.t.HcwHc3)
            },
            ...(B
                ? []
                : [
                      {
                          value: R.tI.PRESET_DOCUMENTS,
                          label: b.intl.string(b.t['/RfohI'])
                      }
                  ]),
            {
                value: R.tI.PRESET_CUSTOM,
                label: b.intl.string(b.t['+eOtrK'])
            }
        ],
        el =
            t === R.tI.PRESET_DOCUMENTS
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(x.Z, {
                              children: (0, l.jsx)(d.FormItem, {
                                  title: b.intl.string(b.t.rHyPXl),
                                  titleClassName: M.formItemTitleSlim,
                                  className: _.documentModeGroup,
                                  children: (0, l.jsx)(d.Text, {
                                      variant: 'text-xs/normal',
                                      children: b.intl.format(b.t['U+hmam'], { fps: r })
                                  })
                              })
                          }),
                          X
                              ? (0, l.jsx)(E.Z, {
                                    message: b.intl.string(b.t.deDogI),
                                    onClose: n,
                                    openStreamUpsellModal: L
                                })
                              : null,
                          W && (0, l.jsx)(E.c, {}),
                          Y &&
                              null != G.hdStreamingUntil &&
                              (0, l.jsx)(f.Z, {
                                  streamingUntil: G.hdStreamingUntil,
                                  user: H,
                                  channel: G
                              })
                      ]
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)(x.Z, {
                              children: [
                                  (0, l.jsx)(d.FormItem, {
                                      title: b.intl.string(b.t.rHyPXl),
                                      className: _.settingsGroup,
                                      titleClassName: M.formItemTitleSlim,
                                      children: ee
                                  }),
                                  (0, l.jsx)(d.FormItem, {
                                      title: b.intl.string(b.t.SkkeIi),
                                      className: _.settingsGroup,
                                      titleClassName: M.formItemTitleSlim,
                                      children: en
                                  })
                              ]
                          }),
                          X
                              ? (0, l.jsx)(E.Z, {
                                    onClose: n,
                                    openStreamUpsellModal: L,
                                    glow: J
                                })
                              : null,
                          W && (0, l.jsx)(E.c, {}),
                          Y &&
                              null != G.hdStreamingUntil &&
                              (0, l.jsx)(f.Z, {
                                  streamingUntil: null == G ? void 0 : G.hdStreamingUntil,
                                  user: H,
                                  channel: G
                              })
                      ]
                  });
    return (0, l.jsx)(m.Z, {
        ...$,
        children: (0, l.jsx)(d.FormItem, {
            title: b.intl.string(b.t.ax4FnZ),
            titleClassName: M.formItemTitle,
            className: M.modalContent,
            children: (0, l.jsxs)('div', {
                className: _.qualitySettingsContainer,
                children: [
                    (0, l.jsx)(d.SingleSelect, {
                        value: t,
                        className: k.marginTop8,
                        options: et,
                        onChange: (e) => D(e)
                    }),
                    el
                ]
            })
        })
    });
}
